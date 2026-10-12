"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";

export interface ResourceArticle {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  href: string;
  image: string;
}

export interface BlogResourcesPreviewProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  articles?: ResourceArticle[];
}

const DEFAULT_ARTICLES: ResourceArticle[] = [
  {
    title: "The Ultimate Guide to Technical SEO in 2026",
    category: "SEO",
    readTime: "8 min read",
    excerpt: "Master crawl budgets, schema markups, core web vitals, and rendering pipelines to dominate modern search algorithms.",
    href: "/blog/seo/technical-seo-guide",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Google Ads Performance Max: The Modern Scaling Playbook",
    category: "PPC",
    readTime: "7 min read",
    excerpt: "How to combine asset groups, high-signal audience data, and smart bidding to cut acquisition costs significantly.",
    href: "/blog/ppc/google-ads-performance-max-playbook",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Answer Engine Optimization (AEO): How to Rank in AI Summaries",
    category: "Artificial Intelligence",
    readTime: "8 min read",
    excerpt: "Strategies to get your brand cited by Perplexity, ChatGPT search, and Google AI Overviews consistently.",
    href: "/blog/artificial-intelligence/answer-engine-optimization-aeo",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogResourcesPreview({
  eyebrow = "KNOWLEDGE HUB & INSIGHTS",
  title = "Proven Frameworks & Industry Insights",
  description = "Explore real-world case breakdowns, tactical execution guides, and research from our growth engineers.",
  articles = DEFAULT_ARTICLES,
}: BlogResourcesPreviewProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#4285F4]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4]">
              <BookOpen className="h-3.5 w-3.5" />
              {eyebrow}
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {description}
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#16213a] transition hover:border-[#4285F4] hover:bg-[#4285F4] hover:text-white"
          >
            Explore All Guides
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-xl bg-[#f3f3f3] p-2.5 sm:p-3 border border-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <Link href={item.href} className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold tracking-tight text-[#0B1120] shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#033B6C]" />
                  <span>IGR</span>
                </div>
              </Link>

              <div className="flex flex-1 flex-col pt-3 sm:pt-3.5 pb-2 px-1.5">
                <h3 className="text-[16px] sm:text-[17px] font-bold leading-snug text-[#0B1120] transition-colors group-hover:text-[#033B6C] line-clamp-2">
                  <Link href={item.href}>{item.title}</Link>
                </h3>

                <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span>September 30, 2026</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#0284c7] font-semibold">{item.category}</span>
                </div>

                <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 font-normal">
                  {item.excerpt.startsWith("Objective") ? item.excerpt : `Objective ${item.excerpt}`}
                </p>

                <div className="mt-4 pt-1">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-sm bg-[#033B6C] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#022a4e] hover:shadow-md active:scale-95"
                  >
                    <span>Read More</span>
                    <span className="text-xs leading-none font-bold">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
