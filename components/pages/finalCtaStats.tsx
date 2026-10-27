"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

export interface FinalCtaProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: { value: string; label: string }[];
}

const DEFAULT_STATS = [
  { value: "500+", label: "Successful Campaigns" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "$45M+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function FinalCtaFooterStats({
  eyebrow = "READY TO ACCELERATE GROWTH?",
  headline = "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
  subheadline = "Partner with data-driven growth engineers who care about your bottom-line profits as much as you do.",
  primaryCtaText = "Request Free Strategy Audit",
  primaryCtaHref = "https://wa.me/919876543210",
  secondaryCtaText = "Book a 1-on-1 Consultation",
  secondaryCtaHref = "https://wa.me/919876543210",
  stats = DEFAULT_STATS,
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] py-14 sm:py-18 lg:py-24 text-slate-900">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#4285F4]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#34A853]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main CTA Card */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4]">
            <Sparkles className="h-3.5 w-3.5 text-[#4285F4]" />
            {eyebrow}
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B1120] sm:text-5xl md:text-6xl">
            {headline}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {subheadline}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1120] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#1e293b] sm:text-base"
            >
              {primaryCtaText}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-[#F7F5EF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1120] transition hover:-translate-y-0.5 hover:bg-white sm:text-base shadow-sm"
            >
              <PhoneCall className="h-4 w-4" />
              {secondaryCtaText}
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
              No Long-Term Lock-in
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
              Direct Senior Specialist Access
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#34A853]" />
              Transparent ROI Dashboards
            </span>
          </div>
        </div>

        {/* Big Numbers Closing Stats Strip */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold tracking-tight text-[#0B1120] sm:text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
