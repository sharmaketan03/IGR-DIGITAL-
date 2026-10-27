"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Award,
  ChevronRight,
  Quote,
} from "lucide-react";
import { DIVERSE_CASE_STUDIES } from "@/components/Data/diverseCaseStudies";

export type HeroColorTheme =
  | "blue" // Standard / Ecommerce / Platform (Clean Light Sky/Blue)
  | "orange" // Backlinks / Off-Page (Warm Amber/Orange)
  | "emerald" // Local SEO / PPC / Healthcare (Fresh Mint/Emerald)
  | "purple" // AI / Neural / Consulting (Soft Violet/Purple)
  | "dark-navy" // Technical / SaaS (Crisp Slate/Navy Light Accent)
  | "pink"; // Social Media / Creative

const THEME_STYLES: Record<
  HeroColorTheme,
  {
    sectionBg: string;
    glow1: string;
    glow2: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    accentText: string;
    cardBorder: string;
    cardBg: string;
    highlightBorder: string;
    highlightBg: string;
    btnGrad: string;
    btnShadow: string;
    textPrimary: string;
    textMuted: string;
  }
> = {
  blue: {
    sectionBg: "bg-gradient-to-b from-[#f8fbff] via-[#f1f6fd] to-[#f8fbff]",
    glow1: "bg-blue-400/10",
    glow2: "bg-sky-400/10",
    badgeBorder: "border-blue-200",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    accentText: "text-blue-600",
    cardBorder: "border-blue-100/90",
    cardBg: "bg-white",
    highlightBorder: "border-blue-300",
    highlightBg: "bg-blue-50/70",
    btnGrad: "from-blue-600 to-indigo-600 text-white",
    btnShadow: "shadow-blue-500/20",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },

  orange: {
    sectionBg: "bg-gradient-to-b from-[#fffaf6] via-[#fef4ed] to-[#fffaf6]",
    glow1: "bg-orange-400/10",
    glow2: "bg-amber-400/10",
    badgeBorder: "border-orange-200",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    accentText: "text-orange-600",
    cardBorder: "border-orange-100/90",
    cardBg: "bg-white",
    highlightBorder: "border-orange-300",
    highlightBg: "bg-orange-50/70",
    btnGrad: "from-orange-600 to-amber-600 text-white",
    btnShadow: "shadow-orange-500/20",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },

  emerald: {
    sectionBg: "bg-gradient-to-b from-[#f6fcf9] via-[#edf8f3] to-[#f6fcf9]",
    glow1: "bg-emerald-400/10",
    glow2: "bg-teal-400/10",
    badgeBorder: "border-emerald-200",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    accentText: "text-emerald-600",
    cardBorder: "border-emerald-100/90",
    cardBg: "bg-white",
    highlightBorder: "border-emerald-300",
    highlightBg: "bg-emerald-50/70",
    btnGrad: "from-emerald-600 to-teal-600 text-white",
    btnShadow: "shadow-emerald-500/20",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },

  purple: {
    sectionBg: "bg-gradient-to-b from-[#faf8ff] via-[#f4effe] to-[#faf8ff]",
    glow1: "bg-purple-400/10",
    glow2: "bg-indigo-400/10",
    badgeBorder: "border-purple-200",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-800",
    accentText: "text-purple-600",
    cardBorder: "border-purple-100/90",
    cardBg: "bg-white",
    highlightBorder: "border-purple-300",
    highlightBg: "bg-purple-50/70",
    btnGrad: "from-purple-600 to-indigo-600 text-white",
    btnShadow: "shadow-purple-500/20",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },

  "dark-navy": {
    sectionBg: "bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]",
    glow1: "bg-slate-400/10",
    glow2: "bg-blue-400/10",
    badgeBorder: "border-slate-300",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    accentText: "text-blue-600",
    cardBorder: "border-slate-200/90",
    cardBg: "bg-white",
    highlightBorder: "border-blue-300",
    highlightBg: "bg-blue-50/60",
    btnGrad: "from-slate-900 to-slate-800 text-white",
    btnShadow: "shadow-slate-900/15",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },

  pink: {
    sectionBg: "bg-gradient-to-b from-[#fff7f8] via-[#fdf1f4] to-[#fff7f8]",
    glow1: "bg-pink-400/10",
    glow2: "bg-rose-400/10",
    badgeBorder: "border-pink-200",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-700",
    accentText: "text-pink-600",
    cardBorder: "border-pink-100/90",
    cardBg: "bg-white",
    highlightBorder: "border-pink-300",
    highlightBg: "bg-pink-50/70",
    btnGrad: "from-pink-600 to-rose-600 text-white",
    btnShadow: "shadow-pink-500/20",
    textPrimary: "text-slate-900",
    textMuted: "text-slate-600",
  },
};

/* =========================================================================
   VARIANT 1: COMPACT BENTO METRICS MATRIX (Clean White Cards, No Black BG)
   ========================================================================= */
export function CaseStudiesBentoVariant({
  studyKey = "saas",
  theme = "blue",
  customTitle,
  customEyebrow,
}: {
  studyKey?: string;
  theme?: HeroColorTheme;
  customTitle?: string;
  customEyebrow?: string;
}) {
  const study = DIVERSE_CASE_STUDIES[studyKey] || DIVERSE_CASE_STUDIES.saas;
  const t = THEME_STYLES[theme] || THEME_STYLES.blue;

  return (
    <section className={`relative overflow-hidden py-10 sm:py-14 ${t.sectionBg} text-slate-900`}>
      {/* Subtle ambient light */}
      <div className={`pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full blur-[90px] ${t.glow1}`} />
      <div className={`pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full blur-[90px] ${t.glow2}`} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Compact Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${t.badgeBorder} ${t.badgeBg} ${t.badgeText}`}>
            <Sparkles className="h-3 w-3" />
            <span>{customEyebrow || `${study.badge} Case Study`}</span>
          </div>
          <h2 className={`mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[32px] lg:leading-tight ${t.textPrimary}`}>
            {customTitle || study.title}
          </h2>
          <p className={`mt-2 text-xs sm:text-sm ${t.textMuted}`}>
            {study.tagline} — <span className="font-semibold">{study.duration}</span>
          </p>
        </div>

        {/* Compact Grid */}
        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:items-stretch">
          {/* Card 1: Narrative & Highlights (7 cols) - Clean White Card */}
          <div className={`flex flex-col justify-between rounded-2xl border p-5 sm:p-6 shadow-sm ${t.cardBorder} ${t.cardBg} lg:col-span-7`}>
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Client Partner
                  </span>
                  <div className="text-base font-bold text-slate-900">{study.client}</div>
                </div>
                <div className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${t.badgeBg} ${t.badgeText}`}>
                  {study.industry}
                </div>
              </div>

              <p className="mt-3.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                {study.narrative}
              </p>

              {/* Compact Deliverables */}
              <div className="mt-4 space-y-2">
                {study.solutionPoints.slice(0, 3).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span className="text-xs text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {study.testimonial && (
              <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                <Quote className={`h-4 w-4 mb-1 ${t.accentText}`} />
                <p className="text-xs italic text-slate-600">&ldquo;{study.testimonial.quote}&rdquo;</p>
                <div className="mt-2 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800">{study.testimonial.author}</span> · {study.testimonial.role}
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Visual Graphic & Mini Metric Badges (5 cols) - Clean White Card */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Compact Image */}
            <div className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-sm ${t.cardBorder} bg-slate-100 group`}>
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-lg bg-white/95 px-3 py-2 backdrop-blur-sm shadow-sm">
                <div>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-emerald-600">Verified Impact</div>
                  <div className="text-[11px] font-bold text-slate-900 truncate max-w-[220px]">{study.impactVerdict}</div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-50 text-emerald-600">
                  <TrendingUp className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            {/* 4 Compact Stat Cards (White Background) */}
            <div className="grid grid-cols-2 gap-2.5">
              {study.stats.map((s, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl p-3 border transition-all ${
                    s.isHighlight
                      ? `${t.highlightBorder} ${t.highlightBg} shadow-sm`
                      : `${t.cardBorder} ${t.cardBg}`
                  }`}
                >
                  <div className={`text-xl font-extrabold tracking-tight ${s.isHighlight ? t.accentText : "text-slate-900"}`}>
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-bold text-slate-800 leading-tight">{s.label}</div>
                  <div className="text-[10px] text-slate-500">{s.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <Link
              href="/contact"
              className={`group flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r ${t.btnGrad} py-3 text-xs font-bold shadow-md ${t.btnShadow} transition hover:brightness-105`}
            >
              <span>Engineer Similar Growth For Your Brand</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   VARIANT 2: COMPACT SHOWCASE (Clean White Cards, Proportional Size)
   ========================================================================= */
export function CaseStudiesShowcaseVariant({
  studyKey = "ecommerce",
  theme = "blue",
  customTitle,
  customEyebrow,
  ctaText,
  ctaHref,
  id,
}: {
  studyKey?: string;
  theme?: HeroColorTheme;
  customTitle?: string;
  customEyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  id?: string;
}) {
  const study = DIVERSE_CASE_STUDIES[studyKey] || DIVERSE_CASE_STUDIES.ecommerce;
  const t = THEME_STYLES[theme] || THEME_STYLES.blue;

  return (
    <section id={id} className={`relative overflow-hidden py-14 sm:py-18 ${t.sectionBg} text-slate-900`}>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Compact Media Card */}
          <div className="lg:col-span-5">
            <div className={`relative overflow-hidden rounded-2xl border p-2.5 sm:p-3 shadow-md ${t.cardBorder} ${t.cardBg}`}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Floating Client Tag */}
                <div className="absolute top-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                  {study.client} · {study.industry}
                </div>

                {/* Benchmark stat */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-white/95 p-2.5 shadow backdrop-blur-sm text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        Audited Benchmark
                      </div>
                      <div className="text-lg font-black text-slate-950 sm:text-xl">
                        {study.stats[0]?.value} {study.stats[0]?.label}
                      </div>
                      <div className="text-[10px] text-slate-600">{study.stats[0]?.sublabel}</div>
                    </div>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r ${t.btnGrad} shadow-sm`}>
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 mini stats below image (White Background) */}
              <div className="mt-2 grid grid-cols-3 gap-1.5 p-1">
                {study.stats.slice(1, 4).map((st, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 p-2 text-center border border-slate-100">
                    <div className="text-sm font-extrabold text-slate-900">{st.value}</div>
                    <div className="text-[9px] font-bold text-slate-600 truncate">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${t.badgeBorder} ${t.badgeBg} ${t.badgeText}`}>
              <Award className="h-3 w-3" />
              <span>{customEyebrow || `${study.badge} Case Study`}</span>
            </div>

            <h2 className={`mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[32px] lg:leading-[1.2] ${t.textPrimary}`}>
              {customTitle || study.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {study.narrative}
            </p>

            {/* Strategic Deliverables List */}
            <div className="mt-4 space-y-2">
              {study.solutionPoints.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span className="text-xs font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            {study.testimonial && (
              <div className={`mt-4 border-l-2 pl-3 py-0.5 italic text-xs text-slate-600 ${t.accentText.replace("text-", "border-")}`}>
                &ldquo;{study.testimonial.quote}&rdquo;
                <div className="mt-1 font-bold not-italic text-[11px] text-slate-800">
                  — {study.testimonial.author}, {study.testimonial.role} ({study.testimonial.company})
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref || "/contact"}
                className={`inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r ${t.btnGrad} px-4 py-2.5 text-xs font-bold shadow-sm ${t.btnShadow} transition hover:brightness-105`}
              >
                <span>{ctaText || "Request Case Study Blueprint"}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              {!ctaText && (
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1 text-xs font-bold transition text-slate-600 hover:${t.accentText}`}
                >
                  <span>Explore Deliverables</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   VARIANT 3: COMPACT MULTI-TAB FILTERABLE INDUSTRY HUB
   ========================================================================= */
export function CaseStudiesInteractiveTabsVariant({
  initialCategory = "ecommerce",
  theme = "blue",
}: {
  initialCategory?: string;
  theme?: HeroColorTheme;
}) {
  const tabs = [
    { key: "ecommerce", label: "E-Commerce" },
    { key: "saas", label: "B2B SaaS" },
    { key: "local", label: "Healthcare & Local" },
    { key: "b2b", label: "Industrial & Manufacturing" },
    { key: "content", label: "Fintech & Authority" },
  ];

  const [activeKey, setActiveKey] = useState(initialCategory);
  const currentStudy = DIVERSE_CASE_STUDIES[activeKey] || DIVERSE_CASE_STUDIES.ecommerce;
  const t = THEME_STYLES[theme] || THEME_STYLES.blue;

  return (
    <section className={`relative overflow-hidden py-10 sm:py-14 ${t.sectionBg} text-slate-900`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${t.badgeBorder} ${t.badgeBg} ${t.badgeText}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span>Multi-Industry Case Studies</span>
          </div>
          <h2 className={`mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${t.textPrimary}`}>
            Real Results Built for Your Exact Industry
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Compare verified growth benchmarks across enterprise verticals, tailored directly to commercial search intent.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex max-w-full overflow-x-auto rounded-xl p-1 border bg-slate-200/70 border-slate-300">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveKey(tab.key)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeKey === tab.key
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Display (Clean White Card) */}
        <div className={`mt-8 overflow-hidden rounded-2xl border p-5 sm:p-7 shadow-md ${t.cardBorder} ${t.cardBg}`}>
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${t.badgeBg} ${t.badgeText}`}>
                  {currentStudy.industry}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {currentStudy.duration}
                </span>
              </div>

              <h3 className={`mt-2.5 text-xl font-extrabold tracking-tight sm:text-2xl ${t.textPrimary}`}>
                {currentStudy.title}
              </h3>

              <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                {currentStudy.narrative}
              </p>

              {/* Points */}
              <div className="mt-3.5 space-y-1.5">
                {currentStudy.solutionPoints.slice(0, 3).map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span className="text-xs font-medium text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Stats Bar (Compact White Cards) */}
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {currentStudy.stats.map((st, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 shadow-xs">
                    <div className="text-lg font-black text-slate-900">{st.value}</div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">{st.label}</div>
                    <div className="text-[9px] text-slate-500">{st.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r ${t.btnGrad} px-4 py-2.5 text-xs font-bold shadow-sm transition hover:brightness-105`}
                >
                  <span>Start A Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm group">
                <Image
                  src={currentStudy.image}
                  alt={currentStudy.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-white/95 p-2.5 backdrop-blur-sm shadow-sm text-slate-950">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Verified Outcome
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    {currentStudy.impactVerdict}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
