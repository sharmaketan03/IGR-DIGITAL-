import { NextRequest, NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();

    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "Image file is required",
        },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        {
          success: false,
          message: "Only image files are allowed",
        },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          message: "Maximum image size is 5MB",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "igr-digital/blogs",
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }

            resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
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

    console.error("Image upload error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Image upload failed",
      },
      { status: 500 }
    );
  }
}