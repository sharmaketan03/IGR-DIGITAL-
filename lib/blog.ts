import { getPayload } from "payload";
import config from "@payload-config";

/* =========================================================
   TYPES
========================================================= */

export type BlogQueryOptions = {
  page?: number;
  limit?: number;
  type?: string;
  category?: string;
  search?: string;
  featured?: boolean;
  trending?: boolean;
};

export type BlogResult = {
  blogs: any[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
};

/* =========================================================
   PAYLOAD INSTANCE
========================================================= */

async function getPayloadClient() {
  return getPayload({
    config,
  });
}

/* =========================================================
   GET BLOGS
========================================================= */

export async function getBlogs(
  options: BlogQueryOptions = {}
): Promise<BlogResult> {
  const payload = await getPayloadClient();

  /* -------------------------------------------------------
     PAGINATION
  ------------------------------------------------------- */

  const page = Math.max(Math.floor(options.page || 1), 1);

  const limit = Math.min(
    Math.max(Math.floor(options.limit || 10), 1),
    50
  );

  /* -------------------------------------------------------
     WHERE
  ------------------------------------------------------- */

  const and: any[] = [];

  /*
    IMPORTANT:
    Abhi status filter intentionally nahi laga rahe.

    Pehle confirm karenge ki Payload se blog data aa raha hai.
    Agar data aa gaya, uske baad published/draft condition
    tumhare Blogs collection ke according set karenge.
  */

  /* -------------------------------------------------------
     TYPE
  ------------------------------------------------------- */

  if (options.type?.trim()) {
    and.push({
      type: {
        equals: options.type.trim().toLowerCase(),
      },
    });
  }

  /* -------------------------------------------------------
     CATEGORY
  ------------------------------------------------------- */

  if (options.category?.trim()) {
    const catSlug = options.category.trim().toLowerCase();
    // Resolve category document first to get its ID, ensuring reliable relationship query
    let catDoc: any = null;
    try {
      const catSearch = await payload.find({
        collection: "categories",
        where: {
          slug: {
            equals: catSlug,
          },
        },
        limit: 1,
        depth: 0,
      });
      catDoc = catSearch.docs?.[0] || null;
    } catch (e) {
      console.warn("Failed resolving category:", e);
    }

    if (catDoc?.id || catDoc?._id) {
      and.push({
        or: [
          {
            category: {
              equals: catDoc.id || catDoc._id,
            },
          },
          {
            "category.slug": {
              equals: catSlug,
            },
          },
        ],
      });
    } else {
      and.push({
        "category.slug": {
          equals: catSlug,
        },
      });
    }
  }

  /* -------------------------------------------------------
     FEATURED
  ------------------------------------------------------- */

  if (options.featured === true) {
    and.push({
      isFeatured: {
        equals: true,
      },
    });
  }

  /* -------------------------------------------------------
     TRENDING
  ------------------------------------------------------- */

  if (options.trending === true) {
    and.push({
      isTrending: {
        equals: true,
      },
    });
  }

  /* -------------------------------------------------------
     SEARCH
  ------------------------------------------------------- */

  if (options.search?.trim()) {
    const search = options.search.trim();

    and.push({
      or: [
        {
          title: {
            contains: search,
          },
        },
        {
          excerpt: {
            contains: search,
          },
        },
        {
          tags: {
            contains: search,
          },
        },
      ],
    });
  }

  /* -------------------------------------------------------
     FINAL WHERE
  ------------------------------------------------------- */

  const where =
    and.length === 0
      ? undefined
      : and.length === 1
        ? and[0]
        : {
            and,
          };

  /* -------------------------------------------------------
     DATABASE QUERY
  ------------------------------------------------------- */

  const result = await payload.find({
    collection: "blogs",
    where,
    page,
    limit,
    depth: 2,
    sort: "-publishedAt",
  });
  /* -------------------------------------------------------
     RETURN
  ------------------------------------------------------- */

  return {
    blogs: JSON.parse(JSON.stringify(result.docs)),

    pagination: {
      page: result.page || page,
      limit: result.limit || limit,
      total: result.totalDocs || 0,
      totalPages: result.totalPages || 0,
      hasNextPage: result.hasNextPage || false,
      hasPrevPage: result.hasPrevPage || false,
    },
  };
}

/* =========================================================
   GET CATEGORIES
========================================================= */

export async function getCategories() {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "categories",
    where: {
      isActive: {
        equals: true,
      },
    },
    limit: 100,
    depth: 0,
    sort: "name",
  });

  return JSON.parse(JSON.stringify(result.docs));
}

/* =========================================================
   GET SINGLE BLOG BY SLUG
   ========================================================= */

export async function getBlogBySlug(slug: string) {
  if (!slug) return null;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug.trim().toLowerCase(),
      },
    },
    limit: 1,
    depth: 2,
  });

  if (!result.docs || result.docs.length === 0) {
    return null;
  }

  return JSON.parse(JSON.stringify(result.docs[0]));
}

/* =========================================================
   GET CATEGORY BY SLUG
   ========================================================= */

export async function getCategoryBySlug(slug: string) {
  if (!slug) return null;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "categories",
    where: {
      slug: {
        equals: slug.trim().toLowerCase(),
      },
    },
    limit: 1,
    depth: 0,
  });

  if (!result.docs || result.docs.length === 0) {
    return null;
  }

  return JSON.parse(JSON.stringify(result.docs[0]));
}