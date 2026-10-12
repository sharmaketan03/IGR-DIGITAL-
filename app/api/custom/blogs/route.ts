import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    // =========================================================
    // PAGINATION
    // =========================================================

    const pageParam = Number(searchParams.get("page") || 1);
    const limitParam = Number(searchParams.get("limit") || 10);

    const page = Number.isFinite(pageParam)
      ? Math.max(Math.floor(pageParam), 1)
      : 1;

    const limit = Number.isFinite(limitParam)
      ? Math.min(Math.max(Math.floor(limitParam), 1), 50)
      : 10;

    // =========================================================
    // QUERY PARAMS
    // =========================================================

    const type = searchParams.get("type")?.trim().toLowerCase();
    const category = searchParams.get("category")?.trim().toLowerCase();
    const search = searchParams.get("search")?.trim();
    const featured = searchParams.get("featured");
    const trending = searchParams.get("trending");

    // =========================================================
    // BASE FILTER
    // =========================================================

    const filter: Record<string, unknown> = {
      status: "published",
    };

    // =========================================================
    // TYPE FILTER
    // Example:
    // /api/blogs?type=guide
    // =========================================================

    if (type) {
      filter.type = type;
    }

    // =========================================================
    // CATEGORY FILTER
    // Example:
    // /api/blogs?category=seo
    // =========================================================

    if (category) {
      filter.category = category;
    }

    // =========================================================
    // FEATURED FILTER
    // Example:
    // /api/blogs?featured=true
    // =========================================================

    if (featured === "true") {
      filter.isFeatured = true;
    }

    // =========================================================
    // TRENDING FILTER
    // Example:
    // /api/blogs?trending=true
    // =========================================================

    if (trending === "true") {
      filter.isTrending = true;
    }

    // =========================================================
    // SEARCH
    // Example:
    // /api/blogs?search=technical%20seo
    //
    // Blog model me text index hona chahiye:
    // title + excerpt + content + tags
    // =========================================================

    if (search) {
      filter.$text = {
        $search: search,
      };
    }

    // =========================================================
    // PAGINATION
    // =========================================================

    const skip = (page - 1) * limit;

    // =========================================================
    // FETCH BLOGS + TOTAL COUNT
    // =========================================================

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .populate("category", "name slug")
        .select("-content")
        .sort({
          publishedAt: -1,
        })
        .skip(skip)
        .limit(limit)
        .lean(),

      Blog.countDocuments(filter),
    ]);

    // =========================================================
    // RESPONSE
    // =========================================================

    return NextResponse.json(
      {
        success: true,

        blogs,

        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),

          hasNextPage: page * limit < total,

          hasPrevPage: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET blogs error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
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
      title,
      slug,
      excerpt,
      content,
      type,
      category,
      tags = [],
      featuredImage = "",
      author,
      readingTime = 5,
      isFeatured = false,
      isTrending = false,
      status = "draft",
      publishedAt,
      seo = {},
      faqs = [],
    } = body;

    if (
      !title ||
      !slug ||
      !excerpt ||
      !content ||
      !type ||
      !category ||
      !author?.name
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "title, slug, excerpt, content, type, category and author.name are required",
        },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findOne({
      slug: slug.trim().toLowerCase(),
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog with this slug already exists",
        },
        { status: 409 }
      );
    }

    const blog = await Blog.create({
      title: title.trim(),

      slug: slug.trim().toLowerCase(),

      excerpt: excerpt.trim(),

      content,

      type,

      category,

      tags: tags.map((tag: string) => tag.trim()),

      featuredImage,

      author,

      readingTime,

      isFeatured,

      isTrending,

      status,

      publishedAt:
        status === "published"
          ? publishedAt || new Date()
          : undefined,

      seo,

      faqs,
    });

    const populatedBlog = await Blog.findById(blog._id)
      .populate("category", "name slug")
      .lean();

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog: populatedBlog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST blog error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      { status: 500 }
    );
  }
}