import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/category";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Category slug is required",
        },
        { status: 400 }
      );
    }

    const category = await Category.findOne({
      slug: slug.trim().toLowerCase(),
      isActive: true,
    }).lean();

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("Category by slug error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch category",
      },
      { status: 500 }
    );
  }
}