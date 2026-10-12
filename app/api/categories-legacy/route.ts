import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/category";
import { requireAdmin } from "@/lib/auth";
export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find({
      isActive: true,
    })
      .sort({ name: 1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        categories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET categories error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch categories",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
     await requireAdmin();

    await connectDB();

    const body = await request.json();

    const {
      name,
      slug,
      description = "",
    } = body;

    if (!name || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and slug are required",
        },
        { status: 400 }
      );
    }

    const existingCategory = await Category.findOne({
      $or: [
        { name: name.trim() },
        { slug: slug.trim().toLowerCase() },
      ],
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Category already exists",
        },
        { status: 409 }
      );
    }

    const category = await Category.create({
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
      description: description.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST category error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create category",
      },
      { status: 500 }
    );
  }
}