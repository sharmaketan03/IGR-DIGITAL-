"use client";

import React from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Link2,
  FileText,
  BarChart2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

export interface DeliverableCardItem {
  icon?: LucideIcon;
  badge?: string;
  title: string;
  description: string;
  bullets: string[];
  metricsChip?: string;
  linkHref?: string;
}

export interface DeliverablesCardsGridProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  cards?: DeliverableCardItem[];
}

const defaultCards: DeliverableCardItem[] = [
  {
    icon: Search,
    badge: "Search Intelligence",
    title: "Keyword & Entity Architecture",
    description: "Map and capture commercial user search queries across your entire product inventory or service offerings.",
    bullets: [
      "High-intent commercial intent mapping",
      "Cannibalization & duplicate URL fixes",
      "Topic cluster & parent silo taxonomy",
    ],
    metricsChip: "+180% Rank Depth",
    linkHref: "/services/custom-seo",
  },
  {
    icon: ShoppingCart,
    badge: "E-Commerce",
    title: "Category & Product Optimization",
    description: "Optimize high-margin collection pages and product schemas so shoppers land directly on buying pages.",
    bullets: [
      "Faceted filter crawl budget hygiene",
      "Rich product snippet & stock schemas",
      "Speed & Core Web Vitals optimization",
    ],
    metricsChip: "3.2x Add-to-Cart Rate",
    linkHref: "/services/ecommerce-seo",
  },
  {
    icon: Link2,
    badge: "Authority",
    title: "High-Domain Backlink Building",
    description: "Acquire authoritative editorial links on trusted publications that pass genuine ranking equity.",
    bullets: [
      "Verified DR 60–90+ editorial outreach",
      "Digital PR pitches & news mentions",
      "Strict zero-PBN, zero-spam guarantee",
    ],
    metricsChip: "DR 70+ Placements",
    linkHref: "/services/link-building",
  },
  {
    icon: FileText,
    badge: "Content Strategy",
    title: "Revenue-Driven Copy & Assets",
    description: "Produce authoritative articles and landing page copy that answers buyer queries and commands top-3 rankings.",
    bullets: [
      "Original research & industry whitepapers",
      "Search-first conversion copywriting",
      "Content decay detection & refreshing",
    ],
    metricsChip: "2.4M Words Scaled",
    linkHref: "/services/content-marketing",
  },
  {
    icon: Cpu,
    badge: "Technical SEO",
    title: "Code, Crawl & JavaScript Fixes",
    description: "Eliminate crawl traps, indexation blocks, and JavaScript rendering delays that confuse search engine spiders.",
    bullets: [
      "SSR & hydration rendering diagnostics",
      "XML sitemap & robots directive audit",
      "Sub-second TTFB server cache tuning",
    ],
    metricsChip: "99% Health Score",
    linkHref: "/services/technical-audit",
  },
  {
    icon: BarChart2,
    badge: "Analytics & Attribution",
    title: "Looker Studio Live Dashboards",
    description: "Gain complete transparency over rankings, organic revenue, and qualified leads without vanity metrics.",
    bullets: [
      "GA4 & Google Search Console integration",
      "Revenue & lead pipeline attribution",
      "Bi-weekly executive progress reviews",
    ],
    metricsChip: "100% Data Parity",
    linkHref: "/contact",
  },
];

export default function DeliverablesCardsGrid({
  eyebrow = "CORE SCOPE & DELIVERABLES",
  title = "Everything Included in Our",
  highlightText = "High-Growth Engine",
  description = "A systematic, 360-degree approach engineered to dominate competitive search landscapes with zero gaps.",
  cards = defaultCards,
}: DeliverablesCardsGridProps) {
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 border border-blue-200/80 mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-tight">
            {title} <span className="text-blue-600">{highlightText}</span>
          </h2>
          {description && (
            <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 6-Cards Grid (2 rows x 3 columns matching reference) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = card.icon || Search;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl shadow-xs"
              >
                <div>
                  {/* Top Bar: Icon + Badge + Metric Chip */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    {card.metricsChip && (
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200/70">
                        {card.metricsChip}
                      </span>
                    )}
                  </div>

                  {card.badge && (
                    <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-blue-600">
                      {card.badge}
                    </span>
                  )}

                  <h3 className="mt-1.5 text-xl font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>

                  {/* Micro Checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {card.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={card.linkHref || "/contact"}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 transition-colors group-hover:text-blue-600"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
