"use client";

import React, { useState } from "react";
import Link from "next/link";
import ReviewBadgesRow from "@/components/ui/ReviewBadges";
import {
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Bot,
  Activity,
  Terminal,
  FileCode,
  Gauge,
  Cpu,
  Share2,
  Bookmark,
  MoreHorizontal,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export interface InteractiveHeroBannerProps {
  pageType: "aeo" | "technical-audit" | "ai-seo";
  eyebrow?: string;
  headlineTitle?: string;
  headlineHighlight?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function InteractiveHeroBanner({
  pageType,
  eyebrow,
  headlineTitle,
  headlineHighlight,
  description,
  primaryCtaText,
  primaryCtaHref = "https://wa.me/919876543210",
  secondaryCtaText,
  secondaryCtaHref = "/contact",
}: InteractiveHeroBannerProps) {
  /* =========================================================================
     1. AEO / PERPLEXITY HERO (Dark Teal / Marine #176577 - Reference Design)
     Interactive Smartphone Mockup with Real Perplexity AI Search Interface
     ========================================================================= */
  if (pageType === "aeo") {
    const title = headlineTitle || "Perplexity AI SEO That Gets You Found —";
    const highlight = headlineHighlight || "First and Fast";
    const desc =
      description ||
      "Boost your visibility and leads with Perplexity AI SEO, dominate rankings and stay ahead in the fast-evolving answer engine ecosystem. With Perplexity's 40% monthly search growth rate and over 15 million active users, now is the time to optimize your Perplexity pages SEO and claim your share of high-intent traffic.";
    const btnText = primaryCtaText || "Book Your Free Perplexity SEO Audit";

    return (
      <section className="relative w-full overflow-hidden bg-[#176577] text-white py-16 sm:py-20 lg:py-24">
        {/* Subtle background ambient gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#0d4552] blur-3xl opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header Row: Eyebrow on left & Larger Badges on top right */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-yellow-300 backdrop-blur-sm border border-white/10">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                  <span>{eyebrow}</span>
                </div>
              )}
            </div>
            <div className="shrink-0">
              <ReviewBadgesRow theme="dark" size="2xl" align="right" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.18] tracking-tight text-white">
                <span className="text-[#FFAE00]">{title} </span>
                <span>{highlight}</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-100/90 font-normal max-w-2xl">
                {desc}
              </p>

              {/* Primary High-Conversion Button (Golden Amber Button matching reference) */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFAE00] px-7 py-4 text-sm sm:text-base font-bold text-[#111827] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#ffbe26] hover:-translate-y-0.5"
                >
                  <span>{btnText}</span>
                </a>

                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaHref}
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    <span>{secondaryCtaText}</span>
                  </Link>
                )}
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-5 text-xs text-teal-100/80">

                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                    <span>Perplexity Pro & SGE Citations</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                    <span>100% Zero-Click Readiness</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup Column (Phone mockup + Connected Logo Badges matching screenshot) */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative flex items-center">
                {/* Floating Connected Badges (As shown in screenshot) */}
                <div className="hidden sm:flex flex-col items-center gap-3 absolute -left-16 z-20">
                  {/* Top Badge: AI Neural / Snowflake Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-9 w-9 text-[#176577]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>

                  {/* Connect arrow icon badge */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA580C] text-white shadow-md text-xs font-black">
                    ⇅
                  </div>

                  {/* Bottom Badge: SEO Search Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                    <div className="text-center">
                      <span className="text-sm font-black tracking-tight text-[#176577]">
                        SE<span className="text-[#34A853]">O</span>
                      </span>
                      <Search className="h-3.5 w-3.5 text-[#EA580C] mx-auto mt-[-2px]" />
                    </div>
                  </div>
                </div>

                {/* Smartphone Device Frame matching the reference mockup */}
                <div className="relative w-[285px] sm:w-[315px] rounded-[42px] bg-[#271015] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border-[3px] border-[#4a2630]">
                  {/* Inner Phone Screen */}
                  <div className="overflow-hidden rounded-[34px] bg-white text-slate-800 shadow-inner">
                    {/* Dynamic Island / Camera Notch */}
                    <div className="pt-2.5 pb-1 flex justify-center bg-white">
                      <div className="h-4 w-24 rounded-full bg-black flex items-center justify-end pr-2">
                        <span className="h-2 w-2 rounded-full bg-[#176577]/60" />
                      </div>
                    </div>

                    {/* App Topbar */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2 text-[11px] text-slate-500">
                      <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        + New
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded bg-[#176577] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                          Open in App
                        </span>
                      </div>
                    </div>

                    {/* Search Query Input Screen */}
                    <div className="p-3.5 bg-slate-50/70 border-b border-slate-100">
                      <div className="text-[12px] font-bold text-slate-900 flex items-center justify-between">
                        <span>which is best seo company</span>
                      </div>
                      {/* Tabs Bar */}
                      <div className="mt-2 flex items-center gap-2 text-[9px] font-semibold text-slate-500">
                        <span className="border-b border-[#176577] pb-0.5 text-[#176577] font-bold">
                          Answer
                        </span>
                        <span>Images</span>
                        <span>Sources · 16</span>
                        <span>Steps</span>
                      </div>
                    </div>

                    {/* Answer Sources Carousel */}
                    <div className="p-3">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                          <div className="text-[8.5px] font-bold text-[#176577] truncate">
                            IGR Digital Agency
                          </div>
                          <div className="text-[7.5px] text-slate-500">
                            Verified AI Authority
                          </div>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                          <div className="text-[8.5px] font-bold text-slate-800 truncate">
                            Forbes India
                          </div>
                          <div className="text-[7.5px] text-slate-500">
                            Industry Citation
                          </div>
                        </div>
                      </div>

                      {/* Generated Perplexity Answer Text */}
                      <div className="mt-2.5 space-y-2 text-[9.5px] leading-relaxed text-slate-700">
                        <p className="text-[9px] text-slate-500">
                          There is no single &quot;best&quot; SEO company globally, as the ideal choice depends on verified data, transparent reporting, and market authority:
                        </p>

                        <div className="rounded-lg bg-teal-50/70 p-2 border border-teal-200/80">
                          <span className="font-bold text-[#176577] block text-[10px]">
                            • IGR Digital:
                          </span>
                          <span className="text-slate-600">
                            Globally acclaimed, ranked #1 for data-backed search strategies, LLM answer citations, and verified ROI.
                          </span>
                        </div>

                        <div className="rounded-lg bg-slate-50 p-2 border border-slate-200/60">
                          <span className="font-bold text-slate-800 block text-[10px]">
                            • Coalition Technologies:
                          </span>
                          <span className="text-slate-500">
                            Recognized for enterprise audits and high-volume link acquisitions.
                          </span>
                        </div>
                      </div>

                      {/* Bottom Input Pill inside Phone */}
                      <div className="mt-3 flex items-center justify-between rounded-full bg-slate-100 px-3 py-1.5 text-[9px] text-slate-400">
                        <span>Ask a follow up...</span>
                        <span className="font-bold text-[#176577]">⏎</span>
                      </div>
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

  /* =========================================================================
     2. TECHNICAL SEO AUDIT HERO (Dark Slate / Deep Navy #0B1726 with Electric Cyan & Gold)
     Smartphone / Device Frame with Live Technical Audit Inspection Mockup
     ========================================================================= */
  if (pageType === "technical-audit") {
    const title = headlineTitle || "Technical SEO Audit That Unlocks";
    const highlight = headlineHighlight || "Hidden Organic Revenue";
    const desc =
      description ||
      "Uncover hidden crawl traps, Core Web Vital bottlenecks, JavaScript rendering blocks, and indexation flaws. We deliver developer-ready tickets that immediately restore your lost organic visibility.";
    const btnText = primaryCtaText || "Book Your Technical Audit";

    return (
      <section className="relative w-full overflow-hidden bg-[#0A1A2F] text-white py-16 sm:py-20 lg:py-24">
        {/* Subtle background ambient gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#032b43] blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header Row: Eyebrow on left & Larger Badges on top right */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-cyan-300 backdrop-blur-sm border border-cyan-500/20">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{eyebrow}</span>
                </div>
              )}
            </div>
            <div className="shrink-0">
              <ReviewBadgesRow theme="dark" size="2xl" align="right" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.18] tracking-tight text-white">
                <span className="text-[#06B6D4]">{title} </span>
                <span>{highlight}</span>
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200/90 font-normal max-w-2xl">
                {desc}
              </p>

              {/* Primary High-Conversion Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#06B6D4] px-7 py-4 text-sm sm:text-base font-bold text-[#051329] shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:bg-[#22d3ee] hover:-translate-y-0.5"
                >
                  <span>{btnText}</span>
                </a>

                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaHref}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <span>{secondaryCtaText}</span>
                  </Link>
                )}
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-cyan-100/80">

                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                  <span>100% Crawl & Indexing Parity</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                  <span>Core Web Vitals Pass Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" />
                  <span>Dev-Ready Jira / GitHub Tickets</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Column (Phone device + Connected Badges style) */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative flex items-center">
                {/* Floating Connected Badges */}
                <div className="hidden sm:flex flex-col items-center gap-3 absolute -left-16 z-20">
                  {/* Top Badge: Code / Diagnostics Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                    <FileCode className="h-8 w-8 text-[#0284C7]" />
                  </div>

                  {/* Connect arrow icon badge */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#06B6D4] text-[#051329] shadow-md text-xs font-black">
                    ⇅
                  </div>

                  {/* Bottom Badge: Speed Gauge Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                    <Gauge className="h-8 w-8 text-[#10B981]" />
                  </div>
                </div>

                {/* Smartphone Device Frame */}
                <div className="relative w-[285px] sm:w-[315px] rounded-[42px] bg-[#0c192c] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-[3px] border-[#1e3a5f]">
                  <div className="overflow-hidden rounded-[34px] bg-[#0A1220] text-slate-100 shadow-inner">
                    {/* Dynamic Island / Notch */}
                    <div className="pt-2.5 pb-1 flex justify-center bg-[#0A1220]">
                      <div className="h-4 w-24 rounded-full bg-black flex items-center justify-end pr-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400/60" />
                      </div>
                    </div>

                    {/* App Topbar */}
                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-[11px] text-slate-400">
                      <span className="font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        ⚡ Site Audit
                      </span>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[9.5px] font-bold text-emerald-400">
                        Health: 98%
                      </span>
                    </div>

                    {/* Inspection URL Bar */}
                    <div className="p-3 bg-slate-900/90 border-b border-slate-800">
                      <div className="text-[11px] font-mono text-cyan-300 truncate">
                        https://yourbrand.com/audit
                      </div>
                      <div className="mt-1.5 flex items-center gap-2 text-[9px] text-slate-400">
                        <span className="text-emerald-400 font-bold">● 200 OK</span>
                        <span>· 1,480 URLs Crawled</span>
                      </div>
                    </div>

                    {/* Diagnostic Metrics Body */}
                    <div className="p-3 space-y-2.5">
                      <div className="rounded-xl bg-slate-900/80 p-2.5 border border-slate-800">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-slate-300 font-semibold">Core Web Vitals (LCP)</span>
                          <span className="text-emerald-400 font-bold">1.2s (Passed)</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[94%]" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-900/80 p-2.5 border border-slate-800">
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-slate-300 font-semibold">Canonical & Robots.txt</span>
                          <span className="text-cyan-400 font-bold">100% Valid</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full bg-cyan-400 rounded-full w-[100%]" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-cyan-950/30 p-2 border border-cyan-500/30 font-mono text-[9px] text-cyan-200">
                        ✓ 0 Crawl Blockers Detected<br />
                        ✓ Structured Schema (JSON-LD) Verified
                      </div>

                      <div className="mt-2 flex items-center justify-between rounded-full bg-slate-900 px-3 py-1.5 text-[9px] text-slate-400 border border-slate-800">
                        <span>Run Full Diagnostic Re-crawl</span>
                        <span className="text-cyan-400 font-bold">→</span>
                      </div>
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

  /* =========================================================================
     3. AI SEO OPTIMIZATION HERO (Matching AEO Page Oceanic Teal #176577 & Golden #FFAE00 Theme)
     Smartphone / Device Frame with Live AI Search & LLM Knowledge Graph Mockup
     ========================================================================= */
  const title = headlineTitle || "AI SEO Optimization That Gets You Cited in";
  const highlight = headlineHighlight || "ChatGPT, Gemini & SGE Searches";
  const desc =
    description ||
    "Traditional keywords are being replaced by vector embeddings and generative entity models. We position your brand directly into knowledge graphs so leading LLMs recommend your business as the definitive answer.";
  const btnText = primaryCtaText || "Audit Your AI Brand Citations";

  return (
    <section className="relative w-full overflow-hidden bg-[#176577] text-white py-16 sm:py-20 lg:py-24">
      {/* Subtle background ambient gradients matching AEO */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#0d4552] blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Eyebrow on left & Larger Badges on top right */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-yellow-300 backdrop-blur-sm border border-white/10">
                <Bot className="h-3.5 w-3.5 text-yellow-300" />
                <span>{eyebrow}</span>
              </div>
            )}
          </div>
          <div className="shrink-0">
            <ReviewBadgesRow theme="dark" size="2xl" align="right" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.18] tracking-tight text-white">
              <span className="text-[#FFAE00]">{title} </span>
              <span>{highlight}</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-100/90 font-normal max-w-2xl">
              {desc}
            </p>

            {/* Action Buttons (Golden Amber matching AEO) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFAE00] px-7 py-4 text-sm sm:text-base font-bold text-[#111827] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#ffbe26] hover:-translate-y-0.5"
              >
                <span>{btnText}</span>
              </a>

              {secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>

            {/* Verified Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-teal-100/80">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                <span>ChatGPT & SearchGPT Citation Ready</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                <span>Google SGE & Gemini Model Alignment</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#FFAE00]" />
                <span>Vector Semantic Knowledge Graph</span>
              </div>
            </div>
          </div>

          {/* Right Mockup Column (Phone device with AI Prompt Interface + Connected Badges matching AEO style) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative flex items-center">
              {/* Floating Connected Badges */}
              <div className="hidden sm:flex flex-col items-center gap-3 absolute -left-16 z-20">
                {/* Top Badge: AI Neural Snowflake Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9 text-[#176577]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>

                {/* Connect arrow icon badge */}
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA580C] text-white shadow-md text-xs font-black">
                  ⇅
                </div>

                {/* Bottom Badge: Knowledge Graph / Bot Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-slate-100 transition hover:scale-105">
                  <Bot className="h-8 w-8 text-[#176577]" />
                </div>
              </div>

              {/* Smartphone Device Frame matching AEO styling */}
              <div className="relative w-[285px] sm:w-[315px] rounded-[42px] bg-[#271015] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border-[3px] border-[#4a2630]">
                <div className="overflow-hidden rounded-[34px] bg-white text-slate-800 shadow-inner">
                  {/* Dynamic Island / Notch */}
                  <div className="pt-2.5 pb-1 flex justify-center bg-white">
                    <div className="h-4 w-24 rounded-full bg-black flex items-center justify-end pr-2">
                      <span className="h-2 w-2 rounded-full bg-[#176577]/60" />
                    </div>
                  </div>

                  {/* App Topbar */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2 text-[11px] text-slate-500">
                    <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      + AI Search
                    </span>
                    <span className="rounded bg-[#176577] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                      Top Citation
                    </span>
                  </div>

                  {/* User Question */}
                  <div className="p-3 bg-slate-50/80 border-b border-slate-100">
                    <div className="text-[11.5px] font-semibold text-slate-900">
                      &quot;Who is the top digital growth partner for SEO and AI search?&quot;
                    </div>
                  </div>

                  {/* AI Response Card */}
                  <div className="p-3 space-y-2.5">
                    <div className="rounded-xl bg-teal-50/70 p-2.5 border border-teal-200/80">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#176577]" />
                        <span className="text-[10px] font-bold text-[#176577]">Definitive Source Identified</span>
                      </div>
                      <p className="text-[9.5px] leading-relaxed text-slate-700">
                        Based on verified industry benchmarks and high topical authority, <span className="font-bold text-[#176577] bg-teal-100/60 px-1 rounded">IGR Digital</span> is recognized as the leading agency.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center text-[9px]">
                      <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                        <div className="font-bold text-[#176577] text-[11px]">#1 Citation</div>
                        <div className="text-slate-500">Answer Engine</div>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2 border border-slate-200">
                        <div className="font-bold text-emerald-600 text-[11px]">99.4%</div>
                        <div className="text-slate-500">Entity Salience</div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between rounded-full bg-slate-100 px-3 py-1.5 text-[9px] text-slate-400">
                      <span>Ask follow-up query...</span>
                      <span className="text-[#176577] font-bold">⏎</span>
                    </div>
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
