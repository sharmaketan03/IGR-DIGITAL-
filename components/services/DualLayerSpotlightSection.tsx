"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ExternalLink, BarChart3, ShieldCheck } from "lucide-react";

export interface DualLayerSpotlightProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  stats?: Array<{ value: string; label: string; subtext?: string }>;
  ctaText?: string;
  ctaHref?: string;
  clientName?: string;
  clientIndustry?: string;
  primaryMetrics?: {
    growthPercent: string;
    trafficLabel: string;
    timeframe: string;
    rankingBadge: string;
  };
  keyWins?: string[];
  secondaryCaseStudy?: {
    title: string;
    result: string;
    metric: string;
    industry: string;
  };
}

export default function DualLayerSpotlightSection({
  eyebrow = "VERIFIED IMPACT & ROI",
  title = "Accelerate Growth with Proven",
  highlightText = "High-Converting Execution",
  description = "See how our specialized search architecture and conversion engineering drive predictable revenue and sustainable top-3 rankings.",
  stats = [
    { value: "+286%", label: "Organic Revenue", subtext: "Within 6 months" },
    { value: "94%", label: "Client Retention", subtext: "Long-term partners" },
    { value: "1,200+", label: "Keywords in Top 3", subtext: "High-intent queries" },
  ],
  ctaText = "Explore Client Case Studies",
  ctaHref = "/contact",
  clientName = "Aura Luxury Apparel",
  clientIndustry = "Shopify Plus / DTC Fashion",
  primaryMetrics = {
    growthPercent: "+286.4%",
    trafficLabel: "Organic Sessions & Checkout Volume",
    timeframe: "Last 180 Days vs Previous Period",
    rankingBadge: "Google Rank #1",
  },
  keyWins = [
    "Faceted collection taxonomy unlocked 450+ long-tail buying keywords",
    "Liquid template refactor dropped mobile TTFB from 2.4s to 0.6s",
    "Product schema JSON-LD graph integrated into Google Merchant Center",
    "Attributable organic monthly revenue scaled from $42K to $162K",
  ],
  secondaryCaseStudy = {
    title: "Synthetix AI Design Studio",
    result: "SaaS Organic Pipeline Scale",
    metric: "3.4x Demo Signups",
    industry: "B2B SaaS / Webflow CMS",
  },
}: DualLayerSpotlightProps) {
  const [activeTab, setActiveTab] = useState<"primary" | "secondary">("primary");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFD] to-white py-16 sm:py-20 lg:py-24 border-y border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ==========================================================
              LEFT COLUMN: Editorial Context, Big Stats & CTA (Span 5 cols)
             ========================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {eyebrow && (
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#0066CC] w-fit">
                <Sparkles className="h-3.5 w-3.5 text-[#0066CC]" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h2 className="text-2xl font-extrabold tracking-tight text-[#0B1120] sm:text-3xl lg:text-[38px] lg:leading-[1.18]">
              {title} <span className="text-[#0066CC]">{highlightText}</span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600">
              {description}
            </p>

            {/* 3 Prominent Stat Callouts */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-slate-200/70 py-4 sm:py-5">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1120] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-xs font-bold text-slate-700">
                    {stat.label}
                  </span>
                  {stat.subtext && (
                    <span className="text-[10px] text-slate-400 font-medium">
                      {stat.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#0066CC] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Verified Telemetry</span>
              </div>
            </div>
          </div>

          {/* ==========================================================
              RIGHT COLUMN: Wider & Compact-Height Dashboard Cards (Span 7 cols)
             ========================================================== */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* CARD 1 (Featured Royal Blue Card - Wider with compact padding) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0052CC] text-white p-5 sm:p-5.5 shadow-xl shadow-blue-900/15 border border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                
                {/* Embedded White Chart Preview Box at Top */}
                <div className="rounded-xl bg-white p-3.5 text-slate-900 shadow-xs border border-slate-100 mb-3.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Google Search Console
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9.5px] font-black text-emerald-600 border border-emerald-200/60">
                      {primaryMetrics.rankingBadge}
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-[#0B1120] tracking-tight">
                        {primaryMetrics.growthPercent}
                      </span>
                      <p className="text-[9.5px] text-slate-500 font-medium">
                        {primaryMetrics.trafficLabel}
                      </p>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Sparkline Visual Simulation */}
                  <div className="mt-1.5 h-6 w-full overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 30" fill="none">
                      <path
                        d="M0 26 Q30 22 60 16 T120 11 T160 6 T200 3"
                        stroke="#0066CC"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 26 Q30 22 60 16 T120 11 T160 6 T200 3 L200 30 L0 30 Z"
                        fill="url(#sparkline-grad)"
                        opacity="0.15"
                      />
                      <defs>
                        <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0066CC" />
                          <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Card Body & Deliverables */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-blue-200">
                      Featured Result
                    </span>
                    <span className="text-[10px] font-semibold text-blue-100 bg-white/10 px-2 py-0.5 rounded">
                      {clientIndustry}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                    {clientName}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    {keyWins.slice(0, 3).map((win, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11.5px] text-blue-50 leading-snug">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-300 mt-0.5" />
                        <span>{win}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-white">
                  <span>Full Performance Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* CARD 2 (Supporting Clean White/Blue Card - Wider with compact padding) */}
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 sm:p-5.5 shadow-lg shadow-slate-200/50 border border-slate-200/90 transition-all duration-300 hover:-translate-y-1">
                
                {/* Embedded White/Grey Telemetry Box at Top */}
                <div className="rounded-xl bg-slate-50 p-3.5 text-slate-900 border border-slate-200/70 mb-3.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/50">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      GA4 Verified Telemetry
                    </span>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9.5px] font-black text-blue-600 border border-blue-200/60">
                      Live Sprint
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between">
                    <div>
                      <span className="text-xl sm:text-2xl font-black text-[#0B1120] tracking-tight">
                        {secondaryCaseStudy.metric}
                      </span>
                      <p className="text-[9.5px] text-slate-500 font-medium">
                        {secondaryCaseStudy.result}
                      </p>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <BarChart3 className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Secondary Telemetry Strip */}
                  <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-slate-200/40 text-[9.5px] text-slate-500 font-semibold">
                    <span>Crawl Errors: 0%</span>
                    <span className="text-emerald-600">TTFB: 240ms</span>
                  </div>
                </div>

                {/* Card Body */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-blue-600">
                      Portfolio Study
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {secondaryCaseStudy.industry}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold leading-snug text-[#0B1120]">
                    {secondaryCaseStudy.title}
                  </h3>

                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600">
                    Programmatic CMS taxonomy and editorial citations generating qualified inbound demo pipeline.
                  </p>

                  <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-2.5">
                    <div className="flex items-center gap-2 text-[11.5px] text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span>Zero code bloat or render bottlenecks</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11.5px] text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span>85+ commercial queries ranked on Page #1</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
                  <span>View Technical Teardown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
