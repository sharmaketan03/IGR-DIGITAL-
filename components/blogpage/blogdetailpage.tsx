"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogInteractiveLayout from "@/components/blogpage/bloginteractivelayout";
import NewsletterForm from "@/components/blogpage/newsletterform";
import BlogCard, { BlogCardData } from "@/components/blogpage/blogCard";
import { ArrowRight, Newspaper } from "lucide-react";

interface BlogDetailPageProps {
  category: string;
  slug: string;
  post?: any;
  newsBlogs?: any[];
}

export default function BlogDetailPage({
  category,
  slug,
  post,
  newsBlogs = [],
}: BlogDetailPageProps) {
  // Post data with dynamic fallback
  const title = post?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const categoryName = post?.category?.name || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const authorName = post?.author?.name || "IGR Strategy Team";
  const readTime = post?.readingTime ? `${post.readingTime} min read` : "7 min read";
  const dateStr = post?.publishedAt
    ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.publishedAt))
    : "Sept 2026";
  const DEFAULT_DETAIL_IMAGES: Record<string, string> = {
    seo: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1200&auto=format&fit=crop",
    ppc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    "website-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "performance-marketing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "artificial-intelligence": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    "content-marketing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    "social-media-marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    "email-marketing": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  };

  const defaultCategoryImg = DEFAULT_DETAIL_IMAGES[category.toLowerCase()] || "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop";
  const imageUrl = post?.featuredImage?.url || defaultCategoryImg;

  // Helper to extract text from Payload Lexical AST nodes
  const renderRichText = (node: any): React.ReactNode => {
    if (!node) return null;
    if (typeof node === "string") return node;

    // Root / Container
    if (node.root) {
      return renderRichText(node.root);
    }

    if (Array.isArray(node.children)) {
      const childrenElements = node.children.map((child: any, idx: number) => (
        <React.Fragment key={idx}>{renderRichText(child)}</React.Fragment>
      ));

      if (node.type === "paragraph") {
        // If empty paragraph, return null or spacer
        if (!node.children.length || (node.children.length === 1 && !node.children[0]?.text?.trim())) {
          return null;
        }
        return <p className="mb-6 text-[17px] leading-[1.85] text-[#2b3049]">{childrenElements}</p>;
      }

      if (node.type === "heading") {
        const Tag = (node.tag || "h2") as "h1" | "h2" | "h3" | "h4";
        const headingText = node.children.map((c: any) => c.text || "").join("");
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <Tag id={headingId} className="mt-10 mb-4 scroll-mt-[100px] text-2xl sm:text-3xl font-bold text-[#16213a]">
            {childrenElements}
          </Tag>
        );
      }

      if (node.type === "list") {
        const ListTag = node.listType === "number" ? "ol" : "ul";
        return (
          <ListTag className={`mb-6 pl-6 text-[17px] leading-[1.85] text-[#2b3049] ${node.listType === "number" ? "list-decimal" : "list-disc"} space-y-2`}>
            {childrenElements}
          </ListTag>
        );
      }

      if (node.type === "listitem") {
        return <li>{childrenElements}</li>;
      }

      if (node.type === "quote") {
        return (
          <blockquote className="my-8 border-l-[4px] border-[#0f7a5c] pl-6 text-xl italic leading-[1.5] text-[#16213a]">
            {childrenElements}
          </blockquote>
        );
      }

      return childrenElements;
    }

    // Text Node
    if (node.type === "text") {
      let text = node.text;
      if (node.format & 1) text = <b>{text}</b>; // Bold
      if (node.format & 2) text = <i>{text}</i>; // Italic
      if (node.format & 8) text = <u>{text}</u>; // Underline
      if (node.format & 16) text = <code>{text}</code>; // Code
      return text;
    }

    return null;
  };

  // Extract dynamic TOC from post headings if available
  const extractTOC = (content: any) => {
    const items: { id: string; title: string }[] = [];
    if (!content?.root?.children) return items;

    content.root.children.forEach((node: any) => {
      if (node.type === "heading" || (node.type === "paragraph" && node.children?.[0]?.text && node.children?.[0]?.text.length < 50 && !node.children?.[0]?.text.includes("."))) {
        const text = (node.children || []).map((c: any) => c.text || "").join("").trim();
        if (text && text.length > 2) {
          items.push({
            id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            title: text,
          });
        }
      }
    });
    return items;
  };

  const dynamicToc = extractTOC(post?.content);
  const tocItems = dynamicToc.length > 0 ? dynamicToc : [
    { id: "overview", title: "Article Overview" },
    { id: "content", title: "Content" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#16213a]">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0d1520] via-[#173026] to-[#0f7a5c] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-[780px]">
          {/* Breadcrumb */}
          <div className="mb-4 space-x-2 text-xs text-[#b9d8cc]">
            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>
            <span>/</span>
            <Link href={`/blog/${category}`} className="hover:text-white transition capitalize">
              {categoryName}
            </Link>
            <span>/</span>
            <span className="text-white/70 truncate">{title}</span>
          </div>

          <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
            {categoryName}
          </span>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-3 text-xs text-[#d7ded0] sm:text-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-xs text-[#16213a]">
              {authorName.slice(0, 2).toUpperCase()}
            </div>
            <span className="font-semibold text-white">{authorName}</span>
            <span className="opacity-50">•</span>
            <span>{dateStr}</span>
            <span className="opacity-50">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Image if available */}
      {imageUrl && (
        <div className="mx-auto max-w-4xl px-4 -mt-8 relative z-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl border border-white/20">
            <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>
      )}

      {/* Layout with TOC and Article */}
      <BlogInteractiveLayout tocItems={tocItems}>
        <article className="w-full max-w-[850px] font-lora">
          {/* Real Excerpt */}
          {post?.excerpt && (
            <p className="mb-8 text-[18px] sm:text-[20px] italic leading-[1.8] text-[#3a3f52] border-b border-slate-200 pb-6">
              {post.excerpt}
            </p>
          )}

          {/* Real CMS RichText Content */}
          <div id="content" className="prose max-w-none text-[#2b3049]">
            {post?.content ? (
              renderRichText(post.content)
            ) : (
              <p className="text-slate-500 italic">No article content found.</p>
            )}
          </div>

          {/* Tags */}
          {post?.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 font-sans border-t border-slate-200 pt-6">
              {post.tags.map((t: any, idx: number) => (
                <span key={idx} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                  {typeof t === "string" ? t : t.tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </BlogInteractiveLayout>

      {/* ========================================================
          LATEST NEWS & INDUSTRY UPDATES SECTION
      ======================================================== */}
      {newsBlogs && newsBlogs.length > 0 && (
        <section className="border-t border-slate-200/80 bg-[#fafafa] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                  <Newspaper className="h-3.5 w-3.5" />
                  Industry News & Updates
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1120]">
                  Latest Marketing News & Growth Insights
                </h2>
                <p className="mt-2 text-sm text-slate-500 max-w-xl">
                  Stay updated with search engine algorithm changes, AI search advancements, and actionable marketing news.
                </p>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm transition hover:border-[#033B6C] hover:bg-[#033B6C] hover:text-white sm:self-end"
              >
                <span>View All Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* 3-Cards Grid using unified BlogCard */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsBlogs.map((newsItem: any, idx: number) => {
                const cardData: BlogCardData = {
                  _id: newsItem._id || newsItem.id || String(idx),
                  title: newsItem.title,
                  slug: newsItem.slug,
                  excerpt: newsItem.excerpt,
                  category: {
                    name: newsItem.category?.name || "News & Updates",
                    slug: newsItem.category?.slug || "news",
                  },
                  featuredImage: newsItem.featuredImage,
                  publishedAt: newsItem.publishedAt,
                  readingTime: newsItem.readingTime,
                };

                return <BlogCard key={cardData._id} blog={cardData} />;
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}