import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/admin";

export async function POST(request: NextRequest) {
  try {
    const setupSecret = request.headers.get("x-setup-secret");

    if (
      !setupSecret ||
      setupSecret !== process.env.ADMIN_SETUP_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    await connectDB();

    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin already exists",
        },
        { status: 409 }
      );
    }

    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and password are required",
        },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin created successfully",
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admin setup error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create admin",
      },
      { status: 500 }
    );
  }
}