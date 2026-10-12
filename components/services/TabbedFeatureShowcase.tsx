"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  LucideIcon,
  ChevronRight,
} from "lucide-react";

export interface FeatureTabItem {
  id: string;
  tabLabel: string;
  badge?: string;
  title: string;
  description: string;
  bullets: string[];
  metricsTag?: string;
  ctaText?: string;
  ctaHref?: string;
  previewData?: {
    metricValue: string;
    metricLabel: string;
    subtext: string;
    chartTitle?: string;
  };
}

export interface TabbedFeatureShowcaseProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  tabs?: FeatureTabItem[];
}

const defaultTabs: FeatureTabItem[] = [
  {
    id: "strategy",
    tabLabel: "Custom Strategy",
    badge: "100% Data-Driven",
    title: "Tailored Growth Blueprints Built Around Real Revenue",
    description:
      "We don't do generic templates. Every campaign starts with in-depth keyword revenue modeling, competitor gap discovery, and high-intent commercial clustering.",
    bullets: [
      "In-depth competitor keyword reverse engineering",
      "Commercial intent URL mapping & cannibalization cleanup",
      "Quarterly ROI forecast & prioritized impact sprint roadmap",
    ],
    metricsTag: "4.8x Avg. ROI Return",
    ctaText: "Explore Custom Strategy",
    ctaHref: "/contact",
    previewData: {
      metricValue: "+310%",
      metricLabel: "Organic Traffic Growth",
      subtext: "Validated across 450+ client accounts in first 6 months",
      chartTitle: "High-Intent Keyword Progression",
    },
  },
  {
    id: "onpage",
    tabLabel: "On-Page Optimization",
    badge: "High Conversion",
    title: "Turn Search Clicks into Paying Customers",
    description:
      "Fine-tuned headline structures, schema architecture, and conversion-rate optimized page copy that satisfies both Google algorithms and human buyers.",
    bullets: [
      "Full title, meta description & heading hierarchy tuning",
      "Semantic entity optimization (Schema & JSON-LD markup)",
      "Internal linking siloing to pass maximum page authority",
    ],
    metricsTag: "98% Technical Pass",
    ctaText: "See On-Page Audit",
    ctaHref: "/contact",
    previewData: {
      metricValue: "42%",
      metricLabel: "Conversion Lift",
      subtext: "Higher engagement rate through optimized content siloing",
      chartTitle: "Conversion & Revenue Funnel",
    },
  },
  {
    id: "authority",
    tabLabel: "Off-Page & PR",
    badge: "Strict Editorial Integrity",
    title: "Build Defensible Moats with High-Authority Backlinks",
    description:
      "We secure high-impact, contextual placements on authoritative industry publications — no spam, no PBNs, only verified do-follow domain authority.",
    bullets: [
      "Targeted outreach to DR 60–90+ verified editorial websites",
      "Digital PR pitches & expert quote syndication",
      "Zero footprint, continuous anchor-text safety monitoring",
    ],
    metricsTag: "DR 70+ Placements",
    ctaText: "View Link Building Framework",
    ctaHref: "/contact",
    previewData: {
      metricValue: "+78 DR",
      metricLabel: "Average Domain Authority",
      subtext: "Long-lasting rankings that resist core Google algorithm updates",
      chartTitle: "Backlink Growth & Trust Velocity",
    },
  },
];

export default function TabbedFeatureShowcase({
  eyebrow = "HOW WE DRIVE RESULTS",
  title = "A Proven Engine That Grows",
  highlightText = "Search Visibility & Revenue",
  description = "Explore the exact mechanics of our digital marketing methodology. Every phase is engineered for compounding, measurable business outcomes.",
  tabs = defaultTabs,
}: TabbedFeatureShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "strategy");
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="relative w-full bg-[#f8fafc] py-20 sm:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 border border-blue-200/80 mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-tight">
            {title} <span className="text-blue-600">{highlightText}</span>
          </h2>
          {description && (
            <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Tab Navigation Pill Bar (Matching Reference) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#033B6C] text-white shadow-md scale-102"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Interactive Split Showcase Box */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Interactive Dashboard / Laptop Screen Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-3 sm:p-4 shadow-2xl">
                {/* Browser / Laptop Top bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="rounded-md bg-slate-800 px-3 py-1 text-[11px] font-mono text-slate-400">
                    https://dashboard.igrdigital.com/analytics
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">● Live Sync</span>
                </div>

                {/* Inside Screen Content */}
                <div className="mt-4 rounded-xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {activeTab.previewData?.chartTitle || "Performance Trajectory"}
                      </span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white">
                          {activeTab.previewData?.metricValue || "+310%"}
                        </span>
                        <span className="text-xs font-bold text-emerald-400">↑ verified uplift</span>
                      </div>
                    </div>
                    <span className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400 border border-blue-500/30">
                      {activeTab.badge || "Real-Time"}
                    </span>
                  </div>

                  {/* SVG Wave Chart Representation */}
                  <div className="mt-5 h-28 w-full">
                    <svg viewBox="0 0 300 90" className="w-full h-full fill-none stroke-blue-500 stroke-[2.5]">
                      <defs>
                        <linearGradient id="tabGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 75 Q 40 70, 75 55 T 150 40 T 225 25 T 300 8"
                        stroke="#3B82F6"
                        fill="none"
                      />
                      <path
                        d="M0 75 Q 40 70, 75 55 T 150 40 T 225 25 T 300 8 L 300 90 L 0 90 Z"
                        fill="url(#tabGrad)"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="mt-4 rounded-lg bg-slate-900 p-3 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>{activeTab.previewData?.metricLabel || "Organic Traffic Growth"}</span>
                    <span className="font-bold text-white">100% Attribution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Tab Details, Bullets & CTA */}
            <div className="lg:col-span-6">
              {activeTab.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  {activeTab.badge}
                </span>
              )}

              <h3 className="mt-3.5 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl leading-snug">
                {activeTab.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {activeTab.description}
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3">
                {activeTab.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Action Button & Metric Tag */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={activeTab.ctaHref || "/contact"}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                >
                  <span>{activeTab.ctaText || "Learn More"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {activeTab.metricsTag && (
                  <span className="text-xs font-semibold text-slate-500">
                    ⚡ {activeTab.metricsTag}
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
