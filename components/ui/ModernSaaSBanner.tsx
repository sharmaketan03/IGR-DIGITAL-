"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe2,
  Smartphone,
  Check,
  Star,
  Layers,
  LucideIcon,
} from "lucide-react";

export type ModernSaaSBannerType =
  | "seo-organic"
  | "ecommerce-machine"
  | "ppc-meta"
  | "ai-overview"
  | "link-authority"
  | "social-convert"
  | "local-dominate"
  | "content-sleep"
  | "technical-fix"
  | "b2b-growth";

export interface ModernSaaSBannerProps {
  type?: ModernSaaSBannerType;
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function ModernSaaSBanner({
  type = "seo-organic",
  badge,
  titleLine1,
  titleLine2,
  description,
  ctaText,
  ctaHref = "https://wa.me/919876543210",
  className = "",
}: ModernSaaSBannerProps) {
  switch (type) {
    /* -------------------------------------------------------------
       1. SEO SERVICES: Dark Blue Gradient (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "seo-organic":
      return (
        <section
          className={`relative w-full overflow-hidden bg-gradient-to-r from-[#031533] via-[#05214E] to-[#072B66] text-white py-14 sm:py-18 lg:py-20 border-y border-blue-900/60 shadow-inner ${className}`}
        >
          {/* Subtle Background Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-sky-300 backdrop-blur-md border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{badge || "SEO Services"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]">
                  {titleLine1 || "Rank Higher."}
                  <span className="block text-sky-100">{titleLine2 || "Get More Organic Traffic."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {description ||
                    "Strategic SEO backed by data, high-intent content and technical expertise to help your business dominate search results."}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Get Free SEO Audit"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Interactive Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Left Checklist Pill Box */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-2.5 text-xs">
                    {["Keyword Rankings", "Technical SEO", "Content Strategy"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-200 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right Google Browser + Graph */}
                  <div className="rounded-2xl border border-white/15 bg-white p-5 text-slate-900 shadow-2xl min-w-[220px]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <span className="text-xs font-black tracking-tight">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                      <Search className="h-3 w-3 text-slate-400" />
                    </div>

                    <div className="mt-3">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Organic Traffic</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-emerald-600">+245%</span>
                      </div>
                      {/* Wave line */}
                      <div className="mt-2.5 h-8 w-full text-emerald-500">
                        <svg viewBox="0 0 100 28" className="w-full h-full fill-none stroke-emerald-500 stroke-[2.5]">
                          <path d="M0 24 Q 25 22, 50 12 T 98 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------
       2. E-COMMERCE SEO: Clean Light Off-White Canvas (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "ecommerce-machine":
      return (
        <section
          className={`relative w-full overflow-hidden bg-[#FAFAFA] text-slate-900 py-14 sm:py-18 lg:py-20 border-y border-slate-200 shadow-sm ${className}`}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{badge || "E-commerce SEO"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                  {titleLine1 || "Turn Your Online Store"}
                  <span className="block text-emerald-600">{titleLine2 || "into a Sales Machine."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  {description ||
                    "Get found by high-intent shoppers, boost product collection rankings, and maximize average order value with expert retail SEO."}
                </p>

                <div className="mt-7">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Boost My Store"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Visual: Shopify/Product Card + Metrics */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="flex items-center gap-4">
                  {/* Storefront Mockup Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl min-w-[220px]">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#95BF47] text-white text-[10px] font-bold">
                          S
                        </span>
                        <span className="text-xs font-bold text-slate-800">Storefront</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    </div>

                    <div className="mt-3.5 flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-2xl border border-slate-200">
                        👟
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Organic Sales</span>
                        <div className="text-xl font-black text-emerald-600">+312%</div>
                      </div>
                    </div>

                    <div className="mt-3 h-6 w-full">
                      <svg viewBox="0 0 100 24" className="w-full h-full fill-none stroke-emerald-500 stroke-2">
                        <path d="M0 20 Q 25 18, 55 10 T 98 2" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Checklist Pills */}
                  <div className="hidden sm:block space-y-2 text-xs">
                    {["Product SEO", "Category Pages", "Shopping SEO", "Competitor Analysis"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 border border-slate-200 text-slate-700 shadow-xs font-medium">
                        <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------
       3. PPC & PAID ADS: Dark Slate Gradient (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "ppc-meta":
      return (
        <section
          className={`relative w-full overflow-hidden bg-gradient-to-r from-[#0B1528] via-[#111C33] to-[#152340] text-white py-14 sm:py-18 lg:py-20 border-y border-slate-800 shadow-inner ${className}`}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 border border-blue-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>{badge || "PPC & Paid Ads"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]">
                  {titleLine1 || "Target the Right Audience."}
                  <span className="block text-amber-300">{titleLine2 || "Get Better Results."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {description ||
                    "Data-driven Google & Meta Ads campaigns that bring you more clicks, qualified leads and real closed sales — not vanity impressions."}
                </p>

                <div className="mt-7">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Start Your Campaign"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Visual: Google Ads & Meta badge + Conversions +189% */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="flex items-center gap-4">
                  {/* Google Ads & Meta pill icons */}
                  <div className="flex flex-col gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg text-lg">
                      <span className="font-black text-[#4285F4]">G</span>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0081FB] text-white shadow-lg text-lg font-bold">
                      ∞
                    </div>
                  </div>

                  {/* Metric Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 min-w-[200px]">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Conversions</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-3xl font-black text-amber-300">+189%</span>
                      <span className="text-xs font-bold text-emerald-400">↗</span>
                    </div>
                    {/* Bar graph bars */}
                    <div className="mt-4 flex items-end gap-2 h-11">
                      <div className="w-3.5 rounded-t bg-white/20 h-4" />
                      <div className="w-3.5 rounded-t bg-white/30 h-6" />
                      <div className="w-3.5 rounded-t bg-white/40 h-8" />
                      <div className="w-3.5 rounded-t bg-amber-400 h-11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------
       4. AI OVERVIEW / SGE: Soft Futuristic Ice-Blue (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "ai-overview":
      return (
        <section
          className={`relative w-full overflow-hidden bg-gradient-to-r from-[#F8FAFF] via-[#F1F6FE] to-[#EBF3FE] text-slate-900 py-14 sm:py-18 lg:py-20 border-y border-blue-100 shadow-sm ${className}`}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  <span>{badge || "AI & Search Innovation"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                  {titleLine1 || "Be Visible in the New Era"}
                  <span className="block text-blue-600">{titleLine2 || "of Search."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  {description ||
                    "Optimize for Google AI Overviews, Perplexity answer engines, and LLM search queries to win citations where buyers look."}
                </p>

                <div className="mt-7">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Explore AI SEO"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* AI Search Snippet */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[340px] rounded-2xl border border-blue-200/80 bg-white p-5 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 pb-2.5 border-b border-slate-100">
                    <Sparkles className="h-4 w-4" />
                    <span>AI Overview</span>
                  </div>

                  <div className="mt-3 rounded-xl bg-slate-50 p-2.5 text-xs text-slate-500 flex items-center justify-between border border-slate-200">
                    <span className="italic">Best digital marketing agency?</span>
                    <Search className="h-3.5 w-3.5 text-slate-400" />
                  </div>

                  <div className="mt-3.5 space-y-2 text-xs">
                    {["AI SEO Optimization", "AEO / Perplexity Citations", "GEO / SGE Answer Engineering", "Semantic Schema Layer"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------
       5. LINK BUILDING: Dark Emerald Green (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "link-authority":
      return (
        <section
          className={`relative w-full overflow-hidden bg-gradient-to-r from-[#062418] via-[#0A3323] to-[#0E422E] text-white py-14 sm:py-18 lg:py-20 border-y border-emerald-900/60 shadow-inner ${className}`}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{badge || "Link Building"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]">
                  {titleLine1 || "Build Authority."}
                  <span className="block text-emerald-300">{titleLine2 || "Earn Trust. Rank Higher."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {description ||
                    "High-quality backlinks from vetted publications to boost domain authority and defend your rankings for the long term."}
                </p>

                <div className="mt-7">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Get Link Building Plan"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="flex items-center gap-4">
                  {/* Glowing link icon */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-3xl shadow-2xl">
                    🔗
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {["Quality DR 60-90+ Links", "Better Domain Authority", "Higher Top-3 Rankings"].map((item, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-slate-200 backdrop-blur-md flex items-center gap-2.5 font-medium">
                        <Check className="h-3.5 w-3.5 text-emerald-400 stroke-[3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------
       6. LOCAL SEO: Light Green / Mint (Edge-to-Edge Full Width)
       ------------------------------------------------------------- */
    case "local-dominate":
    default:
      return (
        <section
          className={`relative w-full overflow-hidden bg-gradient-to-r from-[#F2FBF6] via-[#EAF8F1] to-[#E3F4EB] text-slate-900 py-14 sm:py-18 lg:py-20 border-y border-emerald-100 shadow-sm ${className}`}
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{badge || "Local SEO"}</span>
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                  {titleLine1 || "Dominate Your Local Market."}
                  <span className="block text-emerald-700">{titleLine2 || "Capture Nearby Customers."}</span>
                </h2>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  {description ||
                    "Get found in local Google searches, Google Maps Pack 3, and drive high-intent calls and visits directly to your business."}
                </p>

                <div className="mt-7">
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-emerald-800 shadow-md shadow-emerald-700/20 hover:-translate-y-0.5"
                  >
                    <span>{ctaText || "Improve Local Rankings"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Map Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="rounded-2xl border border-emerald-200/80 bg-white p-5 shadow-xl min-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                      📍
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Your Business Profile</div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                        <span>5.0</span>
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3.5 border-t border-slate-100 space-y-2 text-xs">
                    {["Google Business Profile Audit", "Local Citation Cleaning", "Maps 3-Pack Rankings", "Nearby Geo-Targeting"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                        <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}
