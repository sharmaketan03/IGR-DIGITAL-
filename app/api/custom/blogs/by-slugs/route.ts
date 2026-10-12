import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category");
    const slug = searchParams.get("slug");

    if (!category || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Category and slug are required",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({
      slug: slug.trim().toLowerCase(),
      status: "published",
    })
      .populate({
        path: "category",
        select: "name slug description",
        match: {
          slug: category.trim().toLowerCase(),
          isActive: true,
        },
      })
      .lean();

    if (!blog || !blog.category) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET blog by slug error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog",
      },
      { status: 500 }
    );
  }
}