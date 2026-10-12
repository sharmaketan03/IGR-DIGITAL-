"use client";

import React from "react";
import { Cpu, Database, Flame, Layers, Search, Sparkles, Wrench } from "lucide-react";

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  badge?: string;
}

interface TechStackGridProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  tools?: ToolItem[];
}

const DEFAULT_TOOLS: ToolItem[] = [
  {
    name: "Ahrefs & Semrush Enterprise",
    category: "COMPETITIVE INTEL & BACKLINKS",
    description: "Deep backlink profile audits, keyword gap analysis, and daily organic SERP movement tracking.",
    badge: "Enterprise API",
  },
  {
    name: "Screaming Frog SEO Spider",
    category: "TECHNICAL CRAWLING",
    description: "Multi-threaded site architecture audits, rendering JS, detecting redirect chains and duplicate schemas.",
    badge: "Unlimited Crawl",
  },
  {
    name: "Google Search Console & GA4",
    category: "REVENUE & ATTRIBUTION",
    description: "Direct first-party search impressions, click indexing telemetry, and custom server-side conversion pipelines.",
    badge: "Core Telemetry",
  },
  {
    name: "Looker Studio & BigQuery",
    category: "REAL-TIME DASHBOARDS",
    description: "Automated 24/7 custom client reports visualizing organic revenue, blended CAC, and keyword velocity.",
    badge: "Live Dashboards",
  },
  {
    name: "Surfer SEO & Clearscope",
    category: "NLP & SEMANTIC ENTITY",
    description: "Natural Language Processing models that evaluate term co-occurrence and topical depth vs page 1 leaders.",
    badge: "AI & NLP",
  },
  {
    name: "Hotjar & Microsoft Clarity",
    category: "HEATMAPS & USER RECORDING",
    description: "Identifying user friction points, rage clicks, and form abandonment on primary landing pages.",
    badge: "CRO Suite",
  },
];

function ToolLogo({ id }: { id: string }) {
  switch (id) {
    case "ahrefs-semrush":
      return (
        <div className="flex items-center -space-x-2">
          {/* Ahrefs brand logo */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-transform hover:z-10 group-hover:scale-105"
            title="Ahrefs"
          >
            <img
              src="/toolLogos/ahrefs.png"
              alt="Ahrefs Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Semrush brand logo */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF642D] p-1.5 shadow-sm ring-2 ring-white transition-transform hover:z-10 group-hover:scale-105"
            title="Semrush"
          >
            <img
              src="/toolLogos/semrush.svg"
              alt="Semrush Logo"
              className="h-5 w-5 brightness-0 invert object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "screaming-frog":
      return (
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200 transition-transform group-hover:scale-105"
          title="Screaming Frog SEO Spider"
        >
          <img
            src="/toolLogos/screamingfrog.png"
            alt="Screaming Frog Logo"
            className="h-7 w-7 object-contain"
            loading="lazy"
          />
        </div>
      );

    case "gsc-ga4":
      return (
        <div className="flex items-center -space-x-2">
          {/* Google Search Console brand logo */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-transform hover:z-10 group-hover:scale-105"
            title="Google Search Console"
          >
            <img
              src="/toolLogos/gsc.png"
              alt="Google Search Console Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Google Analytics 4 brand logo */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-2 ring-white transition-transform hover:z-10 group-hover:scale-105"
            title="Google Analytics 4"
          >
            <img
              src="/toolLogos/googleanalytics.png"
              alt="Google Analytics Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "looker-bigquery":
      return (
        <div className="flex items-center -space-x-2">
          {/* Looker Studio */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-transform hover:z-10 group-hover:scale-105"
            title="Looker Studio"
          >
            <img
              src="/toolLogos/looker.svg"
              alt="Looker Studio Logo"
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
          </div>
          {/* Google BigQuery */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-2 ring-white transition-transform hover:z-10 group-hover:scale-105"
            title="Google BigQuery"
          >
            <img
              src="/toolLogos/bigquery.png"
              alt="Google BigQuery Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "surfer-clearscope":
      return (
        <div className="flex items-center -space-x-2">
          {/* Surfer SEO */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-transform hover:z-10 group-hover:scale-105"
            title="Surfer SEO"
          >
            <img
              src="/toolLogos/surferseo.png"
              alt="Surfer SEO Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Clearscope */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-2 ring-white transition-transform hover:z-10 group-hover:scale-105"
            title="Clearscope"
          >
            <img
              src="/toolLogos/clearscope.png"
              alt="Clearscope Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );

    case "hotjar-clarity":
      return (
        <div className="flex items-center -space-x-2">
          {/* Hotjar */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 transition-transform hover:z-10 group-hover:scale-105"
            title="Hotjar"
          >
            <img
              src="/toolLogos/hotjar.png"
              alt="Hotjar Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          {/* Microsoft Clarity */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-2 ring-white transition-transform hover:z-10 group-hover:scale-105"
            title="Microsoft Clarity"
          >
            <img
              src="/toolLogos/clarity.png"
              alt="Microsoft Clarity Logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function TechStackGrid({
  eyebrow = "ENTERPRISE TOOLING & INFRASTRUCTURE",
  title = "Powered by the Industry's Most",
  highlightText = "Sophisticated Tech Stack",
  description = "We don't guess. We invest heavily in enterprise-grade analytics, crawler spiders, and NLP tools to give your brand an unfair market advantage.",
  tools = DEFAULT_TOOLS,
}: TechStackGridProps) {
  const logoIds = [
    "ahrefs-semrush",
    "screaming-frog",
    "gsc-ga4",
    "looker-bigquery",
    "surfer-clearscope",
    "hotjar-clarity",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#EA4335] shadow-sm">
            <Cpu className="h-3.5 w-3.5 text-[#EA4335]" />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl lg:text-5xl">
            {title} {highlightText && <span>{highlightText}</span>}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#4285F4]">
                    {tool.category}
                  </span>
                  {tool.badge && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#16213a] group-hover:text-[#4285F4] transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {tool.description}
                </p>
              </div>

              {/* Bottom footer with Active status on left & brand logos on bottom right */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100/80 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Production Integration</span>
                </div>
                <div className="shrink-0 pl-2">
                  <ToolLogo id={logoIds[idx % logoIds.length]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
