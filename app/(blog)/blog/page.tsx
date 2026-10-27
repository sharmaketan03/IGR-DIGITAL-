import BlogSearch from "@/components/blogpage/blogSearch";
import BlogCategoryMenu from "@/components/blogpage/blogCategorymenu";
import FeaturedBlogs from "@/components/blogpage/featuredBlogs";
import TrendingBlogs from "@/components/blogpage/trendingBlogs";
import BlogGrid from "@/components/blogpage/blogGrid";
import BlogPagination from "@/components/blogpage/blogPagination";
import NewsletterForm from "@/components/blogpage/newsletterform";

import { getBlogs, getCategories } from "@/lib/blog";

/* =========================================================
   TYPES
========================================================= */

type BlogListingPageProps = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    type?: string;
    category?: string;
  }>;
};

/* =========================================================
   METADATA
========================================================= */

export const metadata = {
  title: "Digital Marketing Blog | SEO, PPC & AI Search Insights",

  description:
    "Explore SEO, PPC, AI SEO, AEO, content marketing, analytics and digital marketing insights from IGR Digital.",
};

/* =========================================================
   BLOG PAGE
========================================================= */

export default async function BlogListingPage({
  searchParams,
}: BlogListingPageProps) {
  const params = await searchParams;

  /* -------------------------------------------------------
     URL PARAMS
  ------------------------------------------------------- */

  const page = Math.max(Number(params.page) || 1, 1);

  const search = params.search?.trim() || "";

  const type = params.type?.trim() || "";

  const category = params.category?.trim() || "";

  /* -------------------------------------------------------
     PAYLOAD CMS DATA
  ------------------------------------------------------- */

  const [
    categories,
    featuredData,
    trendingData,
    latestData,
  ] = await Promise.all([
    getCategories(),

    getBlogs({
      page: 1,
      limit: 4,
      featured: true,
    }),

    getBlogs({
      page: 1,
      limit: 4,
      trending: true,
    }),

    getBlogs({
      page,
      limit: 12,
      search,
      type,
      category,
    }),
  ]);

  /* -------------------------------------------------------
     DATA
  ------------------------------------------------------- */

  const featuredBlogs = featuredData?.blogs || [];

  const trendingBlogs = trendingData?.blogs || [];

  const latestBlogs = latestData?.blogs || [];

  const pagination = latestData?.pagination;

  /* -------------------------------------------------------
     PAGE
  ------------------------------------------------------- */

  return (
    <main className="min-h-screen bg-white text-[#16213a]">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="border-b border-slate-200 bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="max-w-4xl">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#4285F4]">
              IGR Digital Blog
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#16213a] md:text-6xl">
              Digital Growth
              <br />

              <span className="text-[#4285F4]">
                Starts With Better Insights
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Practical insights on SEO, PPC, AI SEO,
              AEO, content marketing, analytics and
              digital growth strategies.
            </p>

          </div>

        </div>
      </section>

      {/* =================================================
          SEARCH
      ================================================= */}

      <BlogSearch />

      {/* =================================================
          CATEGORY MENU
      ================================================= */}

      <BlogCategoryMenu />

      {/* =================================================
          FEATURED BLOGS
      ================================================= */}

      <FeaturedBlogs
        blogs={featuredBlogs}
      />

      {/* =================================================
          TRENDING BLOGS
      ================================================= */}

      <TrendingBlogs
        blogs={trendingBlogs}
      />

      {/* =================================================
          LATEST BLOGS
      ================================================= */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          {/* HEADER */}

          <div className="mb-10">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#4285F4]">
              Latest Articles
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#16213a] md:text-4xl">
              Latest Digital Marketing Insights
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Stay updated with the latest strategies,
              trends and actionable ideas from the digital
              marketing industry.
            </p>

          </div>

          {/* SEARCH RESULT */}

          {search && (
            <div className="mb-6 border-l-4 border-[#4285F4] bg-slate-50 px-5 py-4">

              <p className="text-sm text-slate-600">
                Search results for:
              </p>

              <p className="mt-1 font-semibold text-[#16213a]">
                "{search}"
              </p>

            </div>
          )}

          {/* CATEGORY RESULT */}

          {category && (
            <div className="mb-6 border-l-4 border-[#4285F4] bg-slate-50 px-5 py-4">

              <p className="text-sm text-slate-600">
                Category:
              </p>

              <p className="mt-1 font-semibold capitalize text-[#16213a]">
                {category.replace(/-/g, " ")}
              </p>

            </div>
          )}

          {/* BLOG GRID */}

          <BlogGrid
            blogs={latestBlogs}
            emptyMessage={
              search
                ? `No articles found for "${search}".`
                : "No published articles are available right now."
            }
          />

          {/* PAGINATION */}

          {pagination && (
            <BlogPagination
              pagination={pagination}
            />
          )}

        </div>

      </section>

      {/* =================================================
          NEWSLETTER
      ================================================= */}

      <NewsletterForm />

    </main>
  );
}
