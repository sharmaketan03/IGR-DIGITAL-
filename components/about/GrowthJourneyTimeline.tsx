"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, BarChart3, Search, Terminal, Award } from "lucide-react";

export default function GrowthJourneyTimeline() {
  const [activeYearIndex, setActiveYearIndex] = useState(3);

  const milestones = [
    {
      year: "2018",
      title: "Foundation & Technical White-Hat Roots",
      tagline: "Started with a radical focus on zero-shortcuts SEO.",
      description: "Founded by a team of senior technical engineers frustrated with low-quality PBNs and spreadsheet brokers. We built our first proprietary crawl inspection framework.",
      statBadge: "12 Client Partners",
      highlights: [
        "First 100% white-hat editorial outreach system deployed",
        "Pioneered server-side crawl budget optimizations for high-traffic blogs",
      ],
    },
    {
      year: "2020",
      title: "E-Commerce & Scale Engineering",
      tagline: "Scaled to 80+ online storefronts and DTC brands.",
      description: "Expanded our specialty into Shopify Liquid optimization and multi-market enterprise e-commerce. Solved canonical duplicate issues for high-volume catalogs.",
      statBadge: "+310% Avg Traffic Lift",
      highlights: [
        "Launched dedicated DTC technical sprint roadmap",
        "Surpassed $50M in attributed organic checkout volume",
      ],
    },
    {
      year: "2023",
      title: "Digital PR & Tier-1 Media Network",
      tagline: "Bridging the gap between journalism and domain authority.",
      description: "Built relationships with premier publications, Forbes council contributors, and mainstream media journalists to secure undisputed tier-1 authority for our partners.",
      statBadge: "DR 70+ Link Placement SLA",
      highlights: [
        "In-house data journalism and interactive survey research desk",
        "Permanent 12-month link monitoring & replacement guarantee launched",
      ],
    },
    {
      year: "2025–Present",
      title: "AI Overview & Answer Engine Dominance (AEO)",
      tagline: "Leading the next frontier of conversational & generative search.",
      description: "Pioneering Answer Engine Optimization across Google SGE, Perplexity, and ChatGPT. Mapping knowledge graph entities to ensure our partners are the trusted, primary citation source.",
      statBadge: "#1 AI Citation Leader",
      highlights: [
        "Proprietary LLM brand citation telemetry & prompt tracking suite",
        "Over $180M in attributed client revenue and 98% partner retention",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Evolution & Track Record
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl lg:text-[42px]">
            The Journey Behind Our Search Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From humble beginnings to managing enterprise search authority across North America, Europe, and Asia.
          </p>
        </div>

        {/* Interactive Year Selector Tabs */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-12 flex-wrap max-w-4xl mx-auto">
          {milestones.map((m, idx) => {
            const isActive = activeYearIndex === idx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`px-6 py-3 rounded-full text-sm font-extrabold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#0B132B] text-white border-[#0B132B] shadow-lg shadow-slate-900/10 scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {m.year}
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          {(() => {
            const current = milestones[activeYearIndex];
            return (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                      Milestone Milestone Year {current.year}
                    </span>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                      {current.title}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 border border-blue-200/60">
                    <Award className="h-3.5 w-3.5" />
                    {current.statBadge}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-base sm:text-lg font-semibold text-slate-800">
                    {current.tagline}
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {current.description}
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Historical Accomplishments:
                  </span>
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
