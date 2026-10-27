"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Globe2,
  TrendingUp,
  ExternalLink,
  UtensilsCrossed,
  GraduationCap,
  Building,
  HeartPulse,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import {
  CASE_STUDIES_PAGE_DATA,
  DetailedCaseStudy,
} from "@/components/Data/caseStudiesPageData";

export default function CaseStudiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Industries", icon: Globe2 },
    { key: "restaurant", label: "Hospitality & Dining", icon: UtensilsCrossed },
    { key: "education", label: "Education & Schools", icon: GraduationCap },
    { key: "automobile", label: "Automobile & Showrooms", icon: Building },
    { key: "realestate", label: "Real Estate & Infrastructure", icon: Building },
    { key: "healthcare", label: "Healthcare & Aesthetics", icon: HeartPulse },
    { key: "ecommerce", label: "Luxury & D2C", icon: ShoppingBag },
  ];

  const filteredStudies =
    selectedCategory === "all"
      ? CASE_STUDIES_PAGE_DATA
      : CASE_STUDIES_PAGE_DATA.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section id="case-studies-grid" className="py-16 sm:py-20 lg:py-28 bg-[#f4f6fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>EXACT AUDITED PERFORMANCE CARDS</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-5xl">
            Real Ranking Proof & Growth Breakdowns
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            Take a look at the verified keyword rank movements, Semrush analytics overviews, and before-and-after KPI comparisons for our partner brands.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#033B6C] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#FFAE00]" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==============================================================
            EXACT SCREENSHOT CARD UI REPLICATED TO PERFECTION
            1. Dark Green Header (#003D40 / #033B6C) with CLIENT NAME, Last Updated, Country Flag
            2. Top 2 Equal Rounded Boxes:
               - Left: Website Live Screenshot
               - Right: Semrush Analytics Overview with Line Graph & Metric Pills
            3. Bottom 2 Equal Rounded Tables:
               - Left: Main Keyword | Baseline Rank | Current Ranking (8 rows)
               - Right: KPI | Before | After | Growth (5 rows)
            4. Bottom Banner: Bold green result statement + Pill Button linking to client
           ============================================================== */}
        <div className="mt-14 space-y-14 lg:space-y-18">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-2xl"
            >
              {/* 1. TOP DARK HEADER BAR (#033B6C / #004245) */}
              <div className="bg-[#004245] px-6 py-4.5 sm:px-8 flex items-center justify-between text-white">
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-wider uppercase text-white font-sans">
                    {study.client}
                  </h3>
                  <p className="text-[11px] font-medium text-emerald-200/80 mt-0.5">
                    Last Updated: {study.lastUpdated}
                  </p>
                </div>

                {/* Country Flag Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl" title={study.country}>
                    {study.countryFlag}
                  </span>
                </div>
              </div>

              {/* 2. CARD CONTENT CONTAINER */}
              <div className="p-5 sm:p-7 lg:p-9 space-y-6 sm:space-y-7">
                
                {/* 2A. TOP ROW: 2 EQUAL ROUNDED BOXES (SCREENSHOT + SEMRUSH ANALYTICS GRAPH) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Left Box: Client Website Live Mockup */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 shadow-2xs group">
                    <Image
                      src={study.screenshotImage}
                      alt={study.screenshotAlt}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                    
                    {/* Floating Browser Header Pill */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-lg bg-white/95 px-3 py-1.5 backdrop-blur-md shadow-xs text-[11px] font-bold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="ml-2 font-mono text-[10.5px] text-slate-500 truncate max-w-[180px] sm:max-w-[240px]">
                          {study.client} · {study.industry}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-extrabold">
                        Verified Live Campaign
                      </span>
                    </div>
                  </div>

                  {/* Right Box: Exact Semrush Domain Overview Mockup */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
                    <div>
                      {/* Semrush Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                            <span className="text-blue-600 font-extrabold">Domain Overview:</span>
                            <span className="font-semibold text-slate-700">{study.client}</span>
                          </div>
                          <div className="text-[9.5px] text-slate-400 mt-0.5">
                            Desktop · India · Oct 2026 · USD
                          </div>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wide bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                          SEMRUSH TELEMETRY
                        </span>
                      </div>

                      {/* 4 Semrush Key Metrics */}
                      <div className="mt-3.5 grid grid-cols-4 gap-2 text-left">
                        <div className="rounded-lg bg-slate-50/80 p-2 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-500 block uppercase">
                            Authority Score
                          </span>
                          <span className="text-base sm:text-lg font-black text-blue-600 block mt-0.5">
                            {study.semrushOverview.authorityScore}
                          </span>
                        </div>

                        <div className="rounded-lg bg-slate-50/80 p-2 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-500 block uppercase">
                            Organic Search
                          </span>
                          <span className="text-base sm:text-lg font-black text-slate-900 block mt-0.5">
                            {study.semrushOverview.organicSearchTraffic}
                          </span>
                        </div>

                        <div className="rounded-lg bg-slate-50/80 p-2 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-500 block uppercase">
                            Paid Search
                          </span>
                          <span className="text-base sm:text-lg font-black text-slate-900 block mt-0.5">
                            {study.semrushOverview.paidSearchTraffic}
                          </span>
                        </div>

                        <div className="rounded-lg bg-slate-50/80 p-2 border border-slate-100">
                          <span className="text-[9px] font-bold text-slate-500 block uppercase">
                            Backlinks
                          </span>
                          <span className="text-base sm:text-lg font-black text-emerald-600 block mt-0.5">
                            {study.semrushOverview.backlinks}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Semrush Organic Traffic Line Graph (Exact SVG representation matching screenshot) */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 mb-1.5">
                        <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                          <span className="h-2 w-2 rounded-full bg-blue-600" />
                          Organic Traffic Growth (Compounding Curve)
                        </span>
                        <span className="font-mono text-emerald-600 font-bold">All Time High</span>
                      </div>

                      {/* SVG Organic Traffic Curve */}
                      <div className="h-24 sm:h-28 w-full rounded-lg bg-gradient-to-b from-blue-50/40 to-transparent p-1">
                        <svg viewBox="0 0 320 80" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id={`grad-${study.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          {/* Shaded Area */}
                          <path
                            d="M 0,65 Q 40,62 80,60 T 160,55 T 220,40 T 260,28 T 300,10 L 300,80 L 0,80 Z"
                            fill={`url(#grad-${study.id})`}
                          />
                          {/* Graph Line */}
                          <path
                            d="M 0,65 Q 40,62 80,60 T 160,55 T 220,40 T 260,28 T 300,10"
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          {/* Data points */}
                          <circle cx="0" cy="65" r="2.5" fill="#0284c7" />
                          <circle cx="80" cy="60" r="2.5" fill="#0284c7" />
                          <circle cx="160" cy="55" r="2.5" fill="#0284c7" />
                          <circle cx="220" cy="40" r="3" fill="#0284c7" />
                          <circle cx="260" cy="28" r="3.5" fill="#0284c7" />
                          <circle cx="300" cy="10" r="4.5" fill="#0284c7" />
                        </svg>
                      </div>

                      <div className="mt-1 flex items-center justify-between text-[8.5px] text-slate-400 font-mono">
                        <span>Jan 2026 (Baseline)</span>
                        <span>Apr 2026</span>
                        <span>Jul 2026</span>
                        <span>Oct 2026 (Live Sprint)</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 2B. BOTTOM ROW: 2 EQUAL ROUNDED TABLES (KEYWORD RANKINGS + KPI GROWTH TABLE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Left Table: Main Keyword | Baseline Rank | Current Ranking (Exact styling matching screenshot) */}
                  <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                        <thead>
                          <tr className="border-b border-slate-200 bg-[#FAFCFC] text-[#004245] font-extrabold">
                            <th className="py-3 px-4 w-3/5 font-bold">Main Keyword</th>
                            <th className="py-3 px-3 text-center w-1/5 font-bold">Baseline Rank</th>
                            <th className="py-3 px-3 text-center w-1/5 font-bold">Current Ranking</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {study.keywordsTable.map((kw, kIdx) => (
                            <tr key={kIdx} className="hover:bg-slate-50/70 transition-colors">
                              <td className="py-2.5 px-4 font-semibold text-slate-700 capitalize">
                                {kw.keyword}
                              </td>
                              <td className="py-2.5 px-3 text-center text-slate-500 font-medium">
                                {kw.baselineRank}
                              </td>
                              <td className="py-2.5 px-3 text-center">
                                <span className={`inline-flex items-center justify-center font-black ${
                                  Number(kw.currentRank) <= 3
                                    ? "text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200"
                                    : "text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md"
                                }`}>
                                  {kw.currentRank}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right Table: KPI | Before | After | Growth (Exact styling matching screenshot) */}
                  <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
                        <thead>
                          <tr className="border-b border-slate-200 bg-[#FAFCFC] text-[#004245] font-extrabold">
                            <th className="py-3 px-4 w-2/5 font-bold">KPI</th>
                            <th className="py-3 px-3 text-center w-1/5 font-bold">Before</th>
                            <th className="py-3 px-3 text-center w-1/5 font-bold">After</th>
                            <th className="py-3 px-3 text-center w-1/5 font-bold">Growth</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {study.kpiTable.map((kpiRow, pIdx) => (
                            <tr key={pIdx} className="hover:bg-slate-50/70 transition-colors">
                              <td className="py-3.5 px-4 font-semibold text-slate-800">
                                {kpiRow.kpi}
                              </td>
                              <td className="py-3.5 px-3 text-center text-slate-500 font-medium">
                                {kpiRow.before}
                              </td>
                              <td className="py-3.5 px-3 text-center font-bold text-slate-900 bg-blue-50/30">
                                {kpiRow.after}
                              </td>
                              <td className="py-3.5 px-3 text-center">
                                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-black text-emerald-700 border border-emerald-200">
                                  {kpiRow.growth}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

              </div>

              {/* 3. BOTTOM RESULT BANNER & CLIENT BUTTON (EXACT MATCH TO REFERENCE SCREENSHOT) */}
              <div className="border-t border-slate-100 bg-[#F9FBFA] px-6 py-6 sm:px-8 text-center flex flex-col items-center justify-center gap-4">
                <p className="text-sm sm:text-base font-bold text-slate-800 max-w-3xl">
                  {study.headlineSummary.split("strong SEO results").map((part, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        <>
                          <span className="text-emerald-700 font-extrabold">{part}</span>
                          <span className="text-emerald-700 font-black">strong SEO results.</span>
                        </>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </p>

                {/* Internal Conversion Button linking to /contact */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#004245] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#002e30] hover:scale-105 active:scale-95"
                >
                  <span>Request Custom Strategy for {study.industry}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
