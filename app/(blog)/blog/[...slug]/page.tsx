import { notFound } from "next/navigation";

import BlogCategoryPage from "@/components/blogpage/blogcategoryPage";
import BlogDetailPage from "@/components/blogpage/blogdetailpage";
import { getBlogs, getBlogBySlug, getCategoryBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  // =========================================================
  // INVALID / EMPTY SLUG
  // =========================================================

  if (!slug || slug.length === 0) {
    notFound();
  }

  // =========================================================
  // CATEGORY PAGE
  //
  // /blog/seo
  // /blog/ppc
  // /blog/content-marketing
  // =========================================================

  if (slug.length === 1) {
    const category = slug[0];

    if (!category) {
      notFound();
    }

    // Fetch category blogs and category meta from Payload if available
    let posts: any[] = [];
    let categoryObj: any = null;

    try {
      const [blogsResult, catResult] = await Promise.all([
        getBlogs({ category, limit: 12 }),
        getCategoryBySlug(category),
      ]);
      posts = (blogsResult?.blogs || []).map((b) => ({
        id: b.id || b._id,
        slug: b.slug,
        title: b.title,
        excerpt: b.excerpt,
        category: b.category?.name || category,
        date: b.publishedAt
          ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(b.publishedAt))
          : undefined,
        readTime: b.readingTime ? `${b.readingTime} min read` : undefined,
        image: b.featuredImage?.url || undefined,
      }));
      categoryObj = catResult;
    } catch (e) {
      console.warn("Failed to fetch category blogs:", e);
    }

    // Only real database posts - no mock data
    return (
      <BlogCategoryPage
        category={category}
        posts={posts}
        categoryTitle={categoryObj?.name}
        categoryDescription={categoryObj?.description}
      />
    );
  }

  // =========================================================
  // BLOG DETAIL PAGE
  //
  // /blog/seo/technical-seo-guide
  // /blog/ppc/google-ads-guide
  // =========================================================

  if (slug.length === 2) {
    const category = slug[0];
    const postSlug = slug[1];

    if (!category || !postSlug) {
      notFound();
    }

    // Fetch blog post and news blogs from Payload
    let post: any = null;
    let newsBlogs: any[] = [];

    try {
      const [fetchedPost, newsResult] = await Promise.all([
        getBlogBySlug(postSlug),
        getBlogs({ type: "news", limit: 3 }),
      ]);
      post = fetchedPost;
      newsBlogs = newsResult?.blogs || [];

      // If not enough "news" type blogs yet, fallback to latest blogs excluding current
      if (newsBlogs.length < 3) {
        const fallbackResult = await getBlogs({ limit: 6 });
        const filtered = (fallbackResult?.blogs || []).filter(
          (b: any) => b.slug !== postSlug && !newsBlogs.some((nb: any) => nb.slug === b.slug)
        );
        newsBlogs = [...newsBlogs, ...filtered].slice(0, 3);
      }
    } catch (e) {
      console.warn("Failed to fetch blog by slug or news blogs:", e);
    }

    if (!post) {
      notFound();
    }

    return (
      <BlogDetailPage
        category={category}
        slug={postSlug}
        post={post}
        newsBlogs={newsBlogs}
      />
    );
  }

  // =========================================================
  // INVALID URL
  //
  // /blog/seo/a/b
  // /blog/seo/a/b/c
  // =========================================================

  notFound();
}