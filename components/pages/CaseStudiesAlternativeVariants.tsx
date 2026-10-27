"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Quote,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { DIVERSE_CASE_STUDIES } from "@/components/Data/diverseCaseStudies";
import { HeroColorTheme } from "./CaseStudiesVariants";

/* =========================================================================
   VARIANT 4: HORIZONTAL METRICS STRIP / HERO CAROUSEL CARD
   Clean editorial layout with large numbers above, screenshot & key quote
   ========================================================================= */
export function CaseStudiesMetricStripVariant({
  studyKey = "ecommerce",
  theme = "blue",
  customEyebrow,
  customTitle,
}: {
  studyKey?: string;
  theme?: HeroColorTheme;
  customEyebrow?: string;
  customTitle?: string;
}) {
  const study = DIVERSE_CASE_STUDIES[studyKey] || DIVERSE_CASE_STUDIES.ecommerce;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-[#fbfcfd] border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-200/70 pb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 rounded-full px-3 py-0.5">
              {customEyebrow || `${study.badge} Case Study`}
            </span>
            <h2 className="mt-2.5 text-2xl font-black text-slate-900 sm:text-3xl">
              {customTitle || study.title}
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0"
          >
            <span>See Project Details</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Large Highlight Numbers Strip */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {study.stats.map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-bold text-slate-700">{s.label}</div>
              <div className="text-[10px] text-slate-500">{s.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Visual Split */}
        <div className="mt-6 grid items-center gap-6 lg:grid-cols-12 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-xs">
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              {study.tagline}
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              {study.narrative}
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {study.solutionPoints.slice(0, 4).map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {study.testimonial && (
              <div className="mt-4 border-l-2 border-blue-600 pl-3 italic text-xs text-slate-600">
                &ldquo;{study.testimonial.quote}&rdquo; — <span className="font-bold text-slate-800">{study.testimonial.author}</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/95 px-3 py-1.5 backdrop-blur-sm text-[11px] font-bold text-slate-900">
                {study.client} · {study.impactVerdict}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   VARIANT 5: TWO-COLUMN SIDE-BY-SIDE CASE COMPARISON
   Displays 2 distinct client stories side by side (compact dual-card layout)
   ========================================================================= */
export function CaseStudiesDualCardVariant({
  primaryKey = "ecommerce",
  secondaryKey = "saas",
}: {
  primaryKey?: string;
  secondaryKey?: string;
}) {
  const caseA = DIVERSE_CASE_STUDIES[primaryKey] || DIVERSE_CASE_STUDIES.ecommerce;
  const caseB = DIVERSE_CASE_STUDIES[secondaryKey] || DIVERSE_CASE_STUDIES.saas;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-3 py-0.5">
            Verified Industry Outcomes
          </span>
          <h2 className="mt-2.5 text-2xl font-black text-slate-900 sm:text-3xl">
            Real Proof Across Distinct Business Models
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            See how specialized execution yields measurable revenue across direct-to-consumer and business-to-business models.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Card A */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:bg-white transition">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src={caseA.image}
                  alt={caseA.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-xs">
                  {caseA.badge}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-600">{caseA.client}</span>
                <span className="text-[10px] text-slate-500">{caseA.duration}</span>
              </div>

              <h3 className="mt-1.5 text-base font-bold text-slate-900 sm:text-lg">
                {caseA.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                {caseA.narrative}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/70">
              <div className="grid grid-cols-3 gap-2 text-center">
                {caseA.stats.slice(0, 3).map((st, i) => (
                  <div key={i} className="rounded-lg bg-white border border-slate-200/80 p-2">
                    <div className="text-base font-black text-slate-900">{st.value}</div>
                    <div className="text-[9px] font-bold text-slate-600 truncate">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card B */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-emerald-400 hover:bg-white transition">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image
                  src={caseB.image}
                  alt={caseB.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-xs">
                  {caseB.badge}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-600">{caseB.client}</span>
                <span className="text-[10px] text-slate-500">{caseB.duration}</span>
              </div>

              <h3 className="mt-1.5 text-base font-bold text-slate-900 sm:text-lg">
                {caseB.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                {caseB.narrative}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/70">
              <div className="grid grid-cols-3 gap-2 text-center">
                {caseB.stats.slice(0, 3).map((st, i) => (
                  <div key={i} className="rounded-lg bg-white border border-slate-200/80 p-2">
                    <div className="text-base font-black text-slate-900">{st.value}</div>
                    <div className="text-[9px] font-bold text-slate-600 truncate">{st.label}</div>
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
