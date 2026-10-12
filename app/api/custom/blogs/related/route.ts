import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const blogId = searchParams.get("blogId");
    const categoryId = searchParams.get("categoryId");

    if (!blogId || !categoryId) {
      return NextResponse.json(
        {
          success: false,
          message: "blogId and categoryId are required",
        },
        { status: 400 }
      );
    }

    const blogs = await Blog.find({
      _id: {
        $ne: blogId,
      },
      category: categoryId,
      status: "published",
    })
      .select(
        "title slug excerpt type category featuredImage author readingTime publishedAt"
      )
      .populate("category", "name slug")
      .sort({
        publishedAt: -1,
      })
      .limit(4)
      .lean();

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Related blogs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch related blogs",
      },
      { status: 500 }
    );
  }
}