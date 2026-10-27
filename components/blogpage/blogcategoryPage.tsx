

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";


import NewsletterForm from "@/components/blogpage/newsletterform";
import BlogCategoryMenu from "@/components/blogpage/blogCategorymenu";

/* =========================================================
   DEFAULT IMAGE
========================================================= */

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop";

/* =========================================================
   TYPE
========================================================= */

type BlogPost = {
  id?: string | number;
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
};

/* =========================================================
   CATEGORY CONFIG
========================================================= */

const CATEGORY_META: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
  }
> = {
  seo: {
    label: "SEO",
    title: "SEO Insights & Strategies",
    description:
      "Practical SEO strategies covering technical SEO, keyword research, content optimization, search visibility and organic growth.",
  },

  ppc: {
    label: "PPC",
    title: "PPC & Paid Search Insights",
    description:
      "Learn how to build smarter paid search campaigns, improve ad performance and turn search intent into measurable business results.",
  },

  "website-development": {
    label: "Website Development",
    title: "Website Development Insights",
    description:
      "Explore modern website development strategies, performance techniques, technologies and best practices for building better digital experiences.",
  },

  "performance-marketing": {
    label: "Performance Marketing",
    title: "Performance Marketing Insights",
    description:
      "Discover data-driven strategies for improving acquisition, conversions, campaigns and measurable digital marketing performance.",
  },

  "artificial-intelligence": {
    label: "Artificial Intelligence",
    title: "Artificial Intelligence Insights",
    description:
      "Explore practical AI strategies, tools and applications that are changing search, marketing, automation and digital business.",
  },

  "content-marketing": {
    label: "Content Marketing",
    title: "Content Marketing Insights",
    description:
      "Explore content strategies that help brands attract the right audience, build authority and create sustainable digital growth.",
  },

  "social-media-marketing": {
    label: "Social Media Marketing",
    title: "Social Media Marketing Insights",
    description:
      "Discover practical social media strategies for building audiences, increasing engagement and creating stronger brand visibility.",
  },

  "email-marketing": {
    label: "Email Marketing",
    title: "Email Marketing Insights",
    description:
      "Learn practical email marketing strategies for nurturing audiences, improving engagement and driving measurable conversions.",
  },
};

/* =========================================================
   HELPERS
========================================================= */

function slugify(value = "") {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =========================================================
   CATEGORY ALIASES
========================================================= */

function normalizeCategory(value = "") {
  const slug = slugify(value);

  const aliases: Record<string, string> = {
    seo: "seo",
    ppc: "ppc",

    "website-development": "website-development",
    website: "website-development",

    "performance-marketing": "performance-marketing",
    "performance": "performance-marketing",

    "artificial-intelligence": "artificial-intelligence",
    ai: "artificial-intelligence",

    "content-marketing": "content-marketing",
    content: "content-marketing",

    "social-media-marketing": "social-media-marketing",
    "social-media": "social-media-marketing",

    "email-marketing": "email-marketing",
    email: "email-marketing",
  };

  return aliases[slug] || slug;
}

/* =========================================================
   BLOG URL
========================================================= */

function getBlogHref(
  post: BlogPost,
  categorySlug: string
) {
  if (!post?.slug) {
    return "/blog";
  }

  return `/blog/${categorySlug}/${post.slug}`;
}

/* =========================================================
   IGR BADGE
========================================================= */

function IGRBadge() {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-[76px] w-[76px] items-start justify-start overflow-hidden">
      <div
        className="
          flex
          h-[76px]
          w-[76px]
          -translate-x-[16px]
          -translate-y-[16px]
          items-end
          justify-end
          rounded-full
          bg-white
          pb-[18px]
          pr-[18px]
          shadow-[0_5px_18px_rgba(22,33,58,0.10)]
        "
      >
        <span className="font-fraunces text-[15px] font-bold tracking-[-0.04em] text-[#16213a]">
          IGR
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-7 bg-[#4285F4]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4285F4]">
          {eyebrow}
        </span>
      </div>

      <h2 className="font-fraunces text-[30px] font-semibold leading-tight text-[#16213a] sm:text-[35px]">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-[620px] text-[13px] leading-[1.7] text-[#727988]">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   BLOG CARD
========================================================= */

function BlogCard({
  post,
  categorySlug,
  featured = false,
}: {
  post: BlogPost;
  categorySlug: string;
  featured?: boolean;
}) {
  const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
    seo: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1200&auto=format&fit=crop",
    ppc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "website-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "performance-marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "artificial-intelligence": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    "content-marketing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    "social-media-marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    "email-marketing": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  };

  const defaultImg =
    CATEGORY_DEFAULT_IMAGES[categorySlug.toLowerCase()] || DEFAULT_IMAGE;

  const image =
    post?.image && post.image.trim() !== ""
      ? post.image
      : defaultImg;

  const href = getBlogHref(post, categorySlug);

  return (
    <article
      className={`
        group
        overflow-hidden
        border
        border-[#dedbd2]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#cbd5e1]
        hover:shadow-[0_18px_40px_rgba(22,33,58,0.08)]
        ${
          featured
            ? "grid md:grid-cols-[1.05fr_0.95fr]"
            : "flex h-full flex-col"
        }
      `}
    >
      {/* IMAGE */}

      <Link
        href={href}
        className={`
          group/image
          relative
          block
          overflow-hidden
          bg-[#eef2f7]
          ${
            featured
              ? "min-h-[300px] md:min-h-[410px]"
              : "aspect-[16/10]"
          }
        `}
      >
        <img
          src={image}
          alt={post?.title || "Blog image"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1422]/55 via-transparent to-transparent" />

        <IGRBadge />

        <div className="absolute bottom-4 left-4">
          <span className="bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#4285F4] shadow-sm">
            {post?.category || "DIGITAL MARKETING"}
          </span>
        </div>

        {post?.readTime && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#16213a]/90 px-2.5 py-1.5 text-[9px] font-medium text-white">
            <Clock3 className="h-3 w-3" />
            {post.readTime}
          </div>
        )}
      </Link>

      {/* CONTENT */}

      <div
        className={`
          flex
          flex-1
          flex-col
          ${
            featured
              ? "justify-center p-7 sm:p-9 lg:p-10"
              : "p-5 sm:p-6"
          }
        `}
      >
        <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.13em] text-[#4285F4]">
          <span>
            {post?.category || "DIGITAL MARKETING"}
          </span>

          {post?.date && (
            <>
              <span className="text-[#c8cbd1]">•</span>

              <span className="text-[#8a909b]">
                {post.date}
              </span>
            </>
          )}
        </div>

        <h3
          className={`
            mt-3
            font-fraunces
            font-semibold
            leading-[1.25]
            text-[#16213a]
            transition-colors
            group-hover:text-[#4285F4]
            ${
              featured
                ? "text-[27px] sm:text-[32px]"
                : "text-[20px] sm:text-[21px]"
            }
          `}
        >
          <Link href={href}>
            {post?.title || "Digital Marketing Insights"}
          </Link>
        </h3>

        <p
          className={`
            mt-3
            line-clamp-3
            text-[#707786]
            ${
              featured
                ? "text-[14px] leading-[1.75]"
                : "text-[12.5px] leading-[1.7]"
            }
          `}
        >
          {post?.excerpt ||
            "Explore practical insights, strategies and ideas for digital growth."}
        </p>

        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-sm bg-[#033B6C] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#022a4e] hover:shadow-md active:scale-95"
          >
            <span>Read More</span>
            <span className="text-sm leading-none font-bold">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN CATEGORY PAGE
========================================================= */

interface BlogCategoryPageProps {
  category: string;
  posts?: BlogPost[];
  categoryTitle?: string;
  categoryDescription?: string;
}

export default function BlogCategoryPage({
  category,
  posts = [],
  categoryTitle,
  categoryDescription,
}: BlogCategoryPageProps) {
  const categorySlug = normalizeCategory(category);

  const fallbackMeta = {
    label: category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    title: `${category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Insights & Strategy`,
    description: `Explore data-driven ${category.replace(/-/g, " ")} insights, guides, and practical execution frameworks.`,
  };

  const meta = CATEGORY_META[categorySlug] || {
    label: categoryTitle || fallbackMeta.label,
    title: categoryTitle || fallbackMeta.title,
    description: categoryDescription || fallbackMeta.description,
  };

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-white font-sans text-[#16213a]">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#4285F4]/5 blur-3xl" />

          <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#16213a]/5 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 pb-12 pt-12 sm:px-8 lg:px-10 lg:pb-16 lg:pt-16">

          {/* BREADCRUMB */}

          <div className="mb-8 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]">

            <Link
              href="/blog"
              className="text-[#7c8492] transition-colors hover:text-[#4285F4]"
            >
              Blog
            </Link>

            <ArrowRight className="h-3 w-3 text-[#b4bac4]" />

            <span className="text-[#4285F4]">
              {meta.label}
            </span>

          </div>

          {/* HERO CONTENT */}

          <div className="mx-auto max-w-[850px] text-center">

            <div className="mb-5 inline-flex items-center gap-2 border border-[#dce4f0] bg-[#eef3fa] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#4285F4]">

              <Sparkles className="h-3.5 w-3.5" />

              {meta.label} Insights

            </div>

            <h1 className="font-fraunces text-[40px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#16213a] sm:text-[52px] lg:text-[60px]">
              {meta.title}
            </h1>

            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.8] text-[#697181] sm:text-[16px]">
              {meta.description}
            </p>

          </div>
        </div>
      </section>

      {/* ===================================================
          CATEGORY MENU
      =================================================== */}

      <div className="sticky top-[140px] z-[9999] -mt-3 sm:-mt-4">
        <BlogCategoryMenu />
      </div>

      {/* ===================================================
          ARTICLES
      =================================================== */}

      <div className="pt-14 lg:pt-16">

        {posts.length > 0 ? (
          <>
            {/* FEATURED ARTICLE */}

            {featuredPost && (
              <section className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">

                <SectionHeading
                  eyebrow="Featured article"
                  title={`Latest ${meta.label} Insight`}
                  description={`Our latest perspective on ${meta.label.toLowerCase()} and digital growth.`}
                />

                <BlogCard
                  post={featuredPost}
                  categorySlug={categorySlug}
                  featured
                />

              </section>
            )}

            {/* MORE ARTICLES */}

            {remainingPosts.length > 0 && (
              <section className="mx-auto mt-16 w-full max-w-[1240px] px-5 sm:px-8 lg:mt-20 lg:px-10">

                <SectionHeading
                  eyebrow={`${meta.label} journal`}
                  title={`More ${meta.label} Articles`}
                  description={`Explore more ${meta.label.toLowerCase()} strategies, insights and ideas.`}
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                  {remainingPosts.map((post) => (
                    <BlogCard
                      key={post.id || post.slug}
                      post={post}
                      categorySlug={categorySlug}
                    />
                  ))}

                </div>

              </section>
            )}
          </>
        ) : (
          /* EMPTY STATE */

          <section className="mx-auto w-full max-w-[900px] px-5 py-10 sm:px-8 lg:px-10">

            <div className="border border-[#dedbd2] bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#eef3fa] text-[#4285F4]">
                <Search className="h-5 w-5" />
              </div>

              <h2 className="mt-5 font-fraunces text-[28px] font-semibold text-[#16213a]">
                No {meta.label} articles yet
              </h2>

              <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#727988]">
                We are preparing new{" "}
                {meta.label.toLowerCase()} insights.
                Explore the other categories while you wait.
              </p>

              <Link
                href="/blog"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#34a853]
                  px-5
                  py-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  hover:shadow-[0_10px_24px_rgba(22,33,58,0.18)]
                "
              >
                Back to Blog

                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

            </div>

          </section>
        )}
      </div>

      {/* ===================================================
          EXPLORE OTHER TOPICS
      =================================================== */}

      <section className="mx-auto mt-16 w-full max-w-[1240px] px-5 sm:px-8 lg:mt-20 lg:px-10">

        <div className="border-y border-[#dedbd2] py-10">

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4285F4]">
              Explore more
            </span>

            <h2 className="mt-2 font-fraunces text-[27px] font-semibold text-[#16213a]">
              Explore other topics
            </h2>

            <p className="mt-2 max-w-[620px] text-[14px] leading-relaxed text-[#697181]">
              Browse other categories using the category bar above to discover in-depth guides, playbooks, and strategic frameworks.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          NEWSLETTER
      =================================================== */}

      <section className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">

        <div
          id="newsletter"
          className="relative overflow-hidden bg-[#16213a] px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-20"
        >

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4285F4]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-[650px]">

            <div className="mb-4 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#aebbd0]">

              <Search className="h-3.5 w-3.5" />

              Stay informed

            </div>

            <h2 className="font-fraunces text-[30px] font-semibold leading-tight text-white sm:text-[38px]">
              Better search starts with

              <span className="block text-[#8fbaf5]">
                better insights.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-[1.8] text-[#b8c1d0]">
              Get useful {meta.label}, SEO, AI search and
              digital marketing insights delivered to your inbox.
            </p>

            <div className="mx-auto mt-7 max-w-[500px]">
              <NewsletterForm />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}