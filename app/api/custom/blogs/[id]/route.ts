import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const blog = await Blog.findById(id)
      .populate("category", "name slug")
      .lean();

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("GET blog error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    await requireAdmin();
    await connectDB();

    const { id } = await context.params;

    const body = await request.json();

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    if (body.slug) {
      const duplicateSlug = await Blog.findOne({
        slug: body.slug.trim().toLowerCase(),
        _id: { $ne: id },
      });

      if (duplicateSlug) {
        return NextResponse.json(
          {
            success: false,
            message: "Another blog already uses this slug",
          },
          { status: 409 }
        );
      }

      body.slug = body.slug.trim().toLowerCase();
    }

    if (
      body.status === "published" &&
      !existingBlog.publishedAt
    ) {
      body.publishedAt = new Date();
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("category", "name slug")
      .lean();

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("PATCH blog error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    await requireAdmin();
    await connectDB();

    const { id } = await context.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error: any) {
  if (error?.message === "UNAUTHORIZED") {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  console.error(error);

  return NextResponse.json(
    {
      success: false,
      message: "Internal server error",
    },
    { status: 500 }
  );
}
}