"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export type CaseStudyResult = {
  value: string;
  title: string;
  description: string;
  icon?: any;
};

export type CaseStudyItem = {
  id: string;
  category: string;
  tabName: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  icon?: any;
  color?: string;
  points?: string[];
  results?: CaseStudyResult[];
  href?: string;
};

export type CaseStudiesContent = {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  startProjectLabel?: string;
  startProjectHref?: string;
  viewCaseStudyLabel?: string;
  caseStudies: CaseStudyItem[];
};

/* =========================================================
   COMPONENT - EDITORIAL TABBED LAYOUT (REFERENCE STYLE)
========================================================= */

export default function CaseStudies({
  content,
}: {
  content?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
    startProjectLabel?: string;
    startProjectHref?: string;
    viewCaseStudyLabel?: string;
    caseStudies?: CaseStudyItem[];
    [key: string]: any;
  };
}) {
  const {
    eyebrow,
    title = "Real Strategies.",
    titleHighlight = "Real Results.",
    description = "Every business has unique growth goals, target audiences, and competitive challenges. That's why successful campaigns require strategies tailored to specific business models.",
    startProjectLabel = "Start a Project",
    startProjectHref = "/contact",
    viewCaseStudyLabel = "View Full Case Study",
    caseStudies,
  } = content || {};

  const [activeTab, setActiveTab] = useState(
    caseStudies?.[0]?.id ?? ""
  );

  /* EMPTY STATE */
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  /* ACTIVE CASE */
  const activeCase =
    caseStudies.find((item) => item.id === activeTab) ?? caseStudies[0];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADER (Clean, Centered, Bold Headline with Accent)
        =================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#EA4335]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#EA4335]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
            <span>{title} </span>
            {titleHighlight && <span>{titleHighlight}</span>}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        {/* ===================================================
            HORIZONTAL TABS (Clean minimalist row with red active line)
        =================================================== */}
        <div className="mt-10 border-b border-[#e2e8f0]">
          <div className="flex overflow-x-auto scrollbar-none sm:justify-center">
            <div className="flex min-w-full sm:min-w-0 sm:gap-4 md:gap-8">
              {caseStudies.map((item) => {
                const isActive = (item.id === activeTab) || (!activeTab && item.id === caseStudies[0]?.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`relative whitespace-nowrap px-4 py-3.5 text-xs font-bold transition-colors duration-200 sm:px-5 sm:text-sm ${isActive
                      ? "text-[#EA4335]"
                      : "text-[#16213a] hover:text-[#EA4335]"
                      }`}
                  >
                    <span>{item.tabName || item.category || item.title}</span>

                    {/* Active Underline (Matching Reference Image 2 Red Indicator) */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EA4335]" />
                    ) : (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            ACTIVE CASE STUDY CONTENT (2-Column Reference Layout)
            Left: Clean Typography, Descriptive narrative & Bullets
            Right: Soft Sky-Blue Canvas with Illustration / Visual
        =================================================== */}
        <div
          key={activeCase.id}
          className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
        >
          {/* LEFT COLUMN: Clean Editorial Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Category / Sub-tag */}
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#4285F4]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{activeCase.category || activeCase.tabName} Case Study</span>
            </div>

            {/* Headline */}
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#16213a] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
              {activeCase.title}
            </h3>

            {/* Narrative Paragraphs */}
            <div className="mt-4 space-y-3.5 text-base sm:text-[16.5px] leading-relaxed text-slate-600">
              <p>
                {activeCase.description}
              </p>
              <p>
                We build customised, performance-driven campaigns aligned directly with buyer intent, search opportunities and customer retention, from high-converting landing pages to multi-channel customer acquisition.
              </p>
            </div>

            {/* Strategic Bullet Highlights */}
            {activeCase.points && activeCase.points.length > 0 && (
              <div className="mt-6 space-y-2.5">
                {activeCase.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#34A853]" />
                    <span className="text-sm font-medium text-[#334155]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Metrics Mini-Bar (Clean Pill Badges) */}
            {activeCase.results && activeCase.results.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {activeCase.results.map((res, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#e2e8f0]/80 bg-[#f8fafc] p-3 text-left transition hover:border-[#4285F4]/40 hover:bg-white"
                  >
                    <div className="text-xl font-extrabold text-[#16213a]">
                      {res.value}
                    </div>
                    <div className="text-[11px] font-bold text-[#475569]">
                      {res.title}
                    </div>
                    <div className="text-[10px] text-[#94a3b8]">
                      {res.description}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-2 rounded-lg bg-[#4285F4] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#3367d6] hover:shadow-md"
              >
                <span>{viewCaseStudyLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href={startProjectHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16213a] transition hover:text-[#EA4335]"
              >
                <span>{startProjectLabel}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Rounded Soft Sky-Blue Canvas (Matching Image 2 Reference) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto flex aspect-[4/3] w-full max-w-[540px] items-center justify-center overflow-hidden rounded-[28px] bg-[#dcf0fb] p-4 sm:p-6 shadow-inner">

              {/* Background ambient light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c8e8fa]/80 via-[#e3f4fd]/50 to-white/70" />

              {/* Main Graphic / Mockup Image */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
                <Image
                  src={activeCase.image || "/hero/casestudy1.webp"}
                  alt={activeCase.imageAlt || activeCase.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={false}
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Stat Pill floating over graphic */}
                {activeCase.results?.[0] && (
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-3 shadow-md backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                          Key Milestone
                        </div>
                        <div className="text-lg font-black text-[#16213a] sm:text-xl">
                          {activeCase.results[0].value} {activeCase.results[0].title}
                        </div>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#34A853]/15 text-[#34A853]">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
