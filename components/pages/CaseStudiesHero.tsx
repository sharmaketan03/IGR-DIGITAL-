"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Globe2,
  Users,
  Search,
  Award,
} from "lucide-react";

export default function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#032B4F] via-[#043663] to-[#022340] text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Decorative Grid and Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(59,130,246,0.18)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md shadow-sm">
            <Award className="h-3.5 w-3.5 text-[#FFAE00]" />
            <span>VERIFIED PERFORMANCE BENCHMARKS & ROI</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
            Real Businesses. Real Search Rankings.{" "}
            <span className="text-[#FFAE00]">Verifiable Growth.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200/90 max-w-3xl mx-auto font-normal">
            No vanity traffic or simulated forecasts. Explore detailed breakdowns of how our data-driven SEO, Google Maps local pack dominance, and performance marketing drive compounding revenue across real-world businesses.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#case-studies-grid"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFAE00] px-7 py-3.5 text-sm font-extrabold text-[#111827] shadow-lg shadow-amber-500/20 transition-all duration-200 hover:bg-[#ffbe2e] hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              <span>Get Free Growth Audit</span>
            </Link>
          </div>
        </div>

        {/* 4 Trust Badges Strip (Alternative to video testimonials - establishes immediate trust) */}
        <div className="mt-14 lg:mt-18 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md text-center transition hover:border-blue-400/40">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFAE00]">
              7000+
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-white">
              Projects Delivered
            </div>
            <div className="mt-0.5 text-[11px] text-slate-300">
              Across 67+ Countries
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md text-center transition hover:border-blue-400/40">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              340%
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-white">
              Avg. Traffic Growth
            </div>
            <div className="mt-0.5 text-[11px] text-slate-300">
              Within 6-Month Sprints
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md text-center transition hover:border-blue-400/40">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400">
              98.2%
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-white">
              Retention & Trust
            </div>
            <div className="mt-0.5 text-[11px] text-slate-300">
              Transparent Reporting
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md text-center transition hover:border-blue-400/40">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-400">
              100%
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-white">
              White-Hat Outreach
            </div>
            <div className="mt-0.5 text-[11px] text-slate-300">
              Zero PBNs or Toxic Links
            </div>
          </div>
        </div>

        {/* Micro-guarantee banner */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#FFAE00]" />
            Audited Live Search Console Data
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Verified Google Business Profile Insights
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-sky-300" />
            Compounding Revenue Growth
          </span>
        </div>
      </div>
    </section>
  );
}
