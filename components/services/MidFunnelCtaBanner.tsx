"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export interface MidFunnelCtaBannerProps {
  badge?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subheading?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  metrics?: { value: string; label: string }[];
  variant?: "navy" | "amber" | "dark" | "gradient";
}

export default function MidFunnelCtaBanner({
  badge = "ACCELERATE PIPELINE & ORGANIC TRAFFIC",
  headingPrefix = "Ready to Turn Search Volume into",
  headingHighlight = "Predictable Sales Revenue?",
  subheading = "Stop losing top-of-funnel search visibility to aggressive competitors. Our search strategists build custom revenue roadmaps with zero wasted budget.",
  primaryCtaText = "Claim Free Growth Proposal",
  primaryCtaHref = "https://wa.me/919876543210",
  secondaryCtaText = "Explore Client Case Studies",
  secondaryCtaHref = "/services/case-studies",
  metrics = [
    { value: "+280%", label: "Average Traffic Lift" },
    { value: "4.8x", label: "Average Campaign ROAS" },
    { value: "90 Days", label: "To First Proven ROI" },
  ],
  variant = "navy",
}: MidFunnelCtaBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        variant === "navy"
          ? "bg-[#0b1329] border-y border-blue-900/60 text-white"
          : variant === "amber"
          ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 border-y border-amber-400/40 text-white"
          : "bg-[#0a0f1d] border-y border-slate-800 text-white"
      } py-16 sm:py-20 lg:py-24 shadow-2xl`}
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md border border-white/10 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>{badge}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.15]">
              {headingPrefix}{" "}
              <span className="text-amber-300 underline decoration-amber-400/40 underline-offset-4">
                {headingHighlight}
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl">
              {subheading}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 transition-all duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right Metric highlights */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md transition-all hover:bg-white/10"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-300">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
