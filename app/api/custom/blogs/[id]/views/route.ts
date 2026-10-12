import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function POST(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const blog = await Blog.findOneAndUpdate(
      {
        _id: id,
        status: "published",
      },
      {
        $inc: {
          views: 1,
        },
      },
      {
        new: true,
      }
    )
      .select("views")
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
      views: blog.views,
    });
  } catch (error) {
    console.error("View counter error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update views",
      },
      { status: 500 }
    );
  }
}