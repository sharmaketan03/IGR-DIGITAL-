import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type BlogImage = {
  id?: string;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
    };
    card?: {
      url?: string | null;
    };
    large?: {
      url?: string | null;
    };
  };
};

export type BlogCardData = {
  id?: string;
  _id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  type?: string;

  category?: {
    id?: string;
    _id?: string;
    name: string;
    slug: string;
  };

  featuredImage?: BlogImage | null;

  author?: {
    name: string;
    role?: string;
    image?: BlogImage | null;
  };

  readingTime?: number | string;
  publishedAt?: string;
};

interface BlogCardProps {
  blog: BlogCardData;
  featured?: boolean;
}

export default function BlogCard({
  blog,
  featured = false,
}: BlogCardProps) {
  const categorySlug =
    blog.category?.slug || "digital-marketing";

  const href = `/blog/${categorySlug}/${blog.slug}`;

  const formattedDate = blog.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(blog.publishedAt))
    : "September 30, 2026";

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

  const defaultImg = CATEGORY_DEFAULT_IMAGES[categorySlug.toLowerCase()] || "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop";
  const imageUrl = blog.featuredImage?.url || defaultImg;

  const imageAlt =
    blog.featuredImage?.alt ||
    blog.title ||
    "IGR Digital Blog";

  const categoryName = blog.category?.name || "Marketing";

  return (
    <article className="group flex h-full flex-col rounded-xl bg-[#f3f3f3] p-2.5 sm:p-3 border border-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {/* 1. THUMBNAIL IMAGE - Tight inset frame with rounded corners */}
      <Link href={href} className="relative block aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-200">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle Brand Badge in top corner like reference */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold tracking-tight text-[#0B1120] shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#033B6C]" />
          <span>IGR</span>
        </div>
      </Link>

      {/* 2. BODY CONTENT - Compact spacing */}
      <div className="flex flex-1 flex-col pt-3 sm:pt-3.5 pb-2 px-1.5">
        {/* TITLE */}
        <Link href={href} className="block">
          <h3 className="text-[16px] sm:text-[17px] font-bold leading-snug text-[#0B1120] transition-colors group-hover:text-[#033B6C] line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        {/* METADATA: Date · Category */}
        <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>{formattedDate}</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#0284c7] font-semibold">{categoryName}</span>
        </div>

        {/* EXCERPT / DESCRIPTION */}
        <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 font-normal">
          {blog.excerpt ? (
            blog.excerpt.startsWith("Objective") ? blog.excerpt : `Objective ${blog.excerpt}`
          ) : (
            "Objective This guide explains high-leverage growth strategies, technical architecture, and best practices to increase search visibility and acquire qualified buyers."
          )}
        </p>

        {/* 3. BUTTON: Solid Deep Navy "Read More →" Button */}
        <div className="mt-4 pt-1">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-sm bg-[#033B6C] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#022a4e] hover:shadow-md active:scale-95"
          >
            <span>Read More</span>
            <span className="text-xs leading-none font-bold">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}