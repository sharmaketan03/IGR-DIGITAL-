"use client";

import React, { useState } from "react";
import {
  Clock,
  CheckCircle2,
  Target,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Flame,
  Award,
} from "lucide-react";

export interface SprintPhase {
  phase: string;
  timeframe: string;
  headline: string;
  focus: string;
  deliverables: string[];
  expectedMilestone: string;
  tagColor: "blue" | "green" | "yellow" | "red";
  roiMetric?: string;
  speedBadge?: string;
}

interface SprintRoadmapProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  phases?: SprintPhase[];
  closingLine?: string;
}

const DEFAULT_PHASES: SprintPhase[] = [
  {
    phase: "Phase 01",
    timeframe: "Days 1 – 30",
    headline: "Diagnostics, Rapid Fixes & Quick-Win Harvesting",
    focus: "Technical hygiene, conversion tracking calibration & low-hanging organic revenue.",
    deliverables: [
      "Exhaustive technical crawl and 404/redirect canonical rectification",
      "GA4 and Google Tag Manager server-side event tracking audit",
      "Immediate optimization of 'striking distance' keywords (positions 4–15)",
      "Robots.txt, dynamic XML sitemaps, and core schema graph implementation",
      "Competitor backlink gap and paid ad spend benchmarking audit",
    ],
    expectedMilestone: "Crawl errors resolved to 0%, tracking audited, quick-win keyword movement initiated.",
    tagColor: "blue",
    roiMetric: "100% Crawl Cleanliness",
    speedBadge: "Sprint Launchpad",
  },
  {
    phase: "Phase 02",
    timeframe: "Days 31 – 60",
    headline: "Topical Authority Engine & Conversion Funnels",
    focus: "Scaling topical clusters, landing page conversion redesign & high-intent expansion.",
    deliverables: [
      "Topical content maps engineered around high-intent buyer personas",
      "Publishing and refreshing high-converting service & category landing pages",
      "Internal linking mesh and authority silo equity distribution",
      "High-authority editorial outreach and Digital PR media distribution",
      "Checkout/form friction optimization and CTA conversion rate lift",
    ],
    expectedMilestone: "First wave of commercial keywords in top 5; organic lead velocity increases by 25–40%.",
    tagColor: "yellow",
    roiMetric: "+25% to 40% Inbound Velocity",
    speedBadge: "Authority Surge",
  },
  {
    phase: "Phase 03",
    timeframe: "Days 61 – 90+",
    headline: "Compounding Authority, Revenue Scale & Market Dominance",
    focus: "High-tier media placements, market share capture & aggressive revenue scaling.",
    deliverables: [
      "Persistent tier-1 editorial link placements on DR 70+ industry publications",
      "Dominance across high-competition commercial pillar search queries",
      "Comprehensive multi-touch attribution analysis in custom Looker Studio",
      "Continuous multivariate CRO testing of bottom-funnel pages",
      "Quarterly executive growth roadmap & next 6-month scale playbook",
    ],
    expectedMilestone: "Compounding organic revenue, sustained #1-3 rankings for priority queries, 3x-5x pipeline ROI.",
    tagColor: "green",
    roiMetric: "3x – 5x Pipeline ROI",
    speedBadge: "Market Dominance",
  },
];

export default function SprintRoadmap({
  id,
  eyebrow = "TRANSPARENT 90-DAY EXECUTION TIMELINE",
  title = "How We Drive Predictable Growth in",
  highlightText = "90 Days",
  description = "No waiting months wondering what work is being done. Here is the exact sprint-by-sprint roadmap our strategists follow from day one.",
  phases = DEFAULT_PHASES,
  closingLine,
}: SprintRoadmapProps) {
  const [activeTab, setActiveTab] = useState(0);

  const getPillTheme = (idx: number) => {
    if (idx === 0) {
      return {
        stepBadge: "bg-blue-600 text-white",
        glow: "border-blue-500/30 bg-gradient-to-b from-blue-500/[0.04] to-transparent",
        accent: "text-blue-600",
        milestoneBg: "bg-blue-50/70 border-blue-200/60 text-blue-900",
        highlightTag: "bg-blue-100 text-blue-800",
        barColor: "bg-blue-600",
      };
    }
    if (idx === 1) {
      return {
        stepBadge: "bg-amber-500 text-white",
        glow: "border-amber-500/30 bg-gradient-to-b from-amber-500/[0.04] to-transparent",
        accent: "text-amber-600",
        milestoneBg: "bg-amber-50/70 border-amber-200/60 text-amber-900",
        highlightTag: "bg-amber-100 text-amber-800",
        barColor: "bg-amber-500",
      };
    }
    return {
      stepBadge: "bg-emerald-600 text-white",
      glow: "border-emerald-500/30 bg-gradient-to-b from-emerald-500/[0.04] to-transparent",
      accent: "text-emerald-600",
      milestoneBg: "bg-emerald-50/70 border-emerald-200/60 text-emerald-900",
      highlightTag: "bg-emerald-100 text-emerald-800",
      barColor: "bg-emerald-600",
    };
  };

  return (
    <section id={id} className="relative overflow-hidden bg-[#FAFBFC] py-20 lg:py-28">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-50/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              {eyebrow}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
            {title}{" "}
            {highlightText && (
              <span className="relative inline-block text-blue-600">
                {highlightText}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-blue-300"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5C50 1 150 1 200 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            {description}
          </p>

          {/* Interactive Progress Bar */}
          <div className="mt-10 mx-auto max-w-2xl">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <span className={activeTab === 0 ? "text-blue-600 font-extrabold" : ""}>Month 1: Foundation</span>
              <span className={activeTab === 1 ? "text-amber-600 font-extrabold" : ""}>Month 2: Velocity</span>
              <span className={activeTab === 2 ? "text-emerald-600 font-extrabold" : ""}>Month 3: Revenue Scale</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200/80 overflow-hidden flex">
              <div
                className={`h-full transition-all duration-500 ${
                  activeTab === 0
                    ? "w-1/3 bg-blue-600"
                    : activeTab === 1
                    ? "w-2/3 bg-amber-500"
                    : "w-full bg-emerald-600"
                }`}
              />
            </div>
          </div>
        </div>

        {/* 3 Step Interactive / Comprehensive Visual Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {phases.map((phase, idx) => {
            const theme = getPillTheme(idx);
            const isHovered = activeTab === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-7 sm:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 ${
                  isHovered
                    ? "border-slate-300 shadow-[0_16px_40px_rgba(0,0,0,0.08)] -translate-y-1.5"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {/* Top Header Card */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black shadow-sm ${theme.stepBadge}`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {phase.phase}
                        </span>
                        <div className="text-sm font-extrabold text-[#0B132B]">
                          {phase.timeframe}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold ${theme.highlightTag}`}
                    >
                      <Zap className="h-3 w-3" />
                      {phase.speedBadge || `Sprint 0${idx + 1}`}
                    </span>
                  </div>

                  {/* Headline & Focus */}
                  <h3 className="mt-6 text-xl font-bold leading-snug text-[#0B132B] group-hover:text-blue-600 transition-colors">
                    {phase.headline}
                  </h3>

                  <div className="mt-3 rounded-xl bg-slate-50/80 p-3.5 border border-slate-100">
                    <p className="text-xs leading-relaxed text-slate-600">
                      <span className="font-bold text-slate-900">Strategic Core: </span>
                      {phase.focus}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Tangible Sprint Outputs
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        5 Actionable Items
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {phase.deliverables.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-slate-50"
                        >
                          <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${theme.barColor} text-white`}>
                            <CheckCircle2 className="h-3 w-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-[13px] leading-relaxed text-slate-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Milestone & Target Result Banner */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <div className={`rounded-2xl border p-4 transition-all ${theme.milestoneBg}`}>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                        <Target className="h-3.5 w-3.5" />
                        Target Outcome:
                      </span>
                      {phase.roiMetric && (
                        <span className="rounded-md bg-white/80 px-2 py-0.5 text-[11px] font-extrabold shadow-2xs">
                          {phase.roiMetric}
                        </span>
                      )}
                    </div>
                      <p className="mt-2 text-xs sm:text-[13px] font-semibold leading-relaxed">
                      {phase.expectedMilestone}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Accountability Banner */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShieldCheck className="h-6 w-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0B132B]">
                  Real-Time Bi-Weekly Syncs & Dedicated Growth Dashboards
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {closingLine || "You receive an always-accessible live Looker Studio KPI dashboard plus direct Slack syncs with your assigned lead strategist."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                <Clock className="h-3.5 w-3.5 text-emerald-600" /> No Vanity Metrics
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                <Flame className="h-3.5 w-3.5 text-blue-600" /> Commercial ROI Focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
