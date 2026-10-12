"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Rocket,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
} from "lucide-react";

export interface SprintPhase {
  phase: string;
  timeframe: string;
  headline: string;
  focus: string;
  deliverables: string[];
  expectedMilestone: string;
  tagColor: "blue" | "green" | "yellow" | "red";
}

interface SprintRoadmapProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  phases?: SprintPhase[];
}

const DEFAULT_PHASES: SprintPhase[] = [
  {
    phase: "Sprint 01",
    timeframe: "Days 1 – 30",
    headline: "Diagnostics, Immediate Fixes & Quick-Win Harvesting",
    focus: "Technical hygiene, conversion tracking calibration & low-hanging organic fruit.",
    deliverables: [
      "Exhaustive technical crawl and 404/redirect error rectification",
      "GA4 and Google Tag Manager server-side event tracking audit",
      "Identification and optimization of 'striking distance' keywords (positions 4–15)",
      "Robots.txt, dynamic XML sitemaps, and core schema implementation",
      "Competitor backlink gap and paid ad spend benchmarking report",
    ],
    expectedMilestone: "Crawl errors resolved to 0%, tracking audited, quick-win keyword movement initiated.",
    tagColor: "blue",
  },
  {
    phase: "Sprint 02",
    timeframe: "Days 31 – 60",
    headline: "Semantic Content Engine & Conversion Architecture",
    focus: "Scaling topical authority, landing page conversion redesign & high-intent expansion.",
    deliverables: [
      "Topical content maps mapped to high-intent buyer personas",
      "Publishing and refreshing high-converting service/product landing pages",
      "Internal linking mesh and authority silo distribution",
      "Initial high-authority editorial outreach and Digital PR press distribution",
      "Form friction optimization and CTA conversion rate enhancements",
    ],
    expectedMilestone: "First wave of keyword rankings jumping into top 5; organic lead velocity increases by 25–40%.",
    tagColor: "yellow",
  },
  {
    phase: "Sprint 03",
    timeframe: "Days 61 – 90+",
    headline: "Compounding Authority, Revenue Scale & Market Dominance",
    focus: "High-tier media placements, market share capture & aggressive revenue scaling.",
    deliverables: [
      "Persistent tier-1 editorial link acquisitions on DR 70+ industry publications",
      "Expansion into high-competition commercial pillar keywords",
      "Comprehensive multi-touch attribution analysis in custom Looker Studio",
      "Continuous A/B testing of checkout pages and lead magnets",
      "Quarterly executive growth roadmap & next 6-month scale playbook",
    ],
    expectedMilestone: "Compounding organic revenue, sustained #1-3 rankings for priority queries, 3x-5x pipeline ROI.",
    tagColor: "green",
  },
];

export default function SprintRoadmap({
  eyebrow = "TRANSPARENT 90-DAY EXECUTION TIMELINE",
  title = "How We Drive Predictable Growth in",
  highlightText = "90 Days",
  description = "No waiting months wondering what work is being done. Here is the exact sprint-by-sprint roadmap our strategists follow from day one.",
  phases = DEFAULT_PHASES,
}: SprintRoadmapProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const getTagClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          bar: "bg-emerald-500",
          ring: "ring-emerald-500",
        };
      case "yellow":
        return {
          badge: "bg-amber-50 text-amber-700 border-amber-200",
          bar: "bg-amber-500",
          ring: "ring-amber-500",
        };
      case "red":
        return {
          badge: "bg-rose-50 text-rose-700 border-rose-200",
          bar: "bg-rose-500",
          ring: "ring-rose-500",
        };
      case "blue":
      default:
        return {
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          bar: "bg-blue-500",
          ring: "ring-blue-500",
        };
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#fbfbfa] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#34A853]">
            <Clock className="h-3.5 w-3.5 text-[#34A853]" />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl lg:text-5xl">
            {title} {highlightText && <span>{highlightText}</span>}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Sprint Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {phases.map((phase, idx) => {
            const styles = getTagClasses(phase.tagColor);
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fcfcfb] p-7 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-xl sm:p-8"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-5">
                    <span className="text-xl font-black text-[#16213a]">
                      {phase.phase}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold ${styles.badge}`}
                    >
                      {phase.timeframe}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="mt-5 text-lg font-bold leading-snug text-[#16213a]">
                    {phase.headline}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-slate-500 leading-relaxed">
                    <span className="font-bold text-slate-700">Sprint Focus: </span>
                    {phase.focus}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Sprint Outputs:
                    </h4>
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34A853] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Callout */}
                <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#4285F4]">
                    <Target className="h-3.5 w-3.5" />
                    Target Milestone:
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-700">
                    {phase.expectedMilestone}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
