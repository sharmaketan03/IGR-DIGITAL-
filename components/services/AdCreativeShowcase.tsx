"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Play,
  TrendingUp,
  Target,
  ArrowRight,
  Eye,
  CheckCircle2,
  Layers,
  MousePointerClick,
  Share2,
} from "lucide-react";

export interface AdCreativeShowcaseProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
}

const CREATIVE_SHOWCASE_ITEMS = [
  {
    id: "ugc-1",
    channel: "Meta Reels & TikTok",
    format: "UGC Product Teardown",
    headline: "Stop Scrolling — The Cleanest Ergonomic Desk Setup",
    hook: "Hook Rate: 48.2% · Hold Rate: 34%",
    metrics: "4.9x ROAS · $14.20 CPA",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    badge: "Top Winner",
    tagColor: "bg-pink-500/10 text-pink-600 border-pink-200",
  },
  {
    id: "pmax-2",
    channel: "Google Performance Max",
    format: "Dynamic Shopping Asset Pack",
    headline: "Commercial Intent Buyer Search Match",
    hook: "CTR: 5.8% · High Intent Intent Score",
    metrics: "5.8x ROAS · $28.40 CAC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    badge: "Scale Asset",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    id: "b2b-3",
    channel: "LinkedIn Sponsored Video",
    format: "Founder Authority Teardown",
    headline: "How We Automated 60% of Pipeline For Series A SaaS",
    hook: "Form Fill Rate: 14.2% · Enterprise VP",
    metrics: "62% Qualified Leads · $85 MQL",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    badge: "B2B Benchmark",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  },
];

export default function AdCreativeShowcase({
  eyebrow = "HIGH-VELOCITY CREATIVE LAB",
  title = "Ad Creatives & UGC Engineered for",
  highlightText = "High-Converting Scale",
  description = "Creative fatigue kills paid ad campaigns. We test 40+ dynamic UGC reels, founder hooks, and static assets every month to identify proven winners.",
}: AdCreativeShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string>(CREATIVE_SHOWCASE_ITEMS[0].id);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 border border-blue-200/80 mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1120]">
            {title} <span className="text-blue-600">{highlightText}</span>
          </h2>
          {description && (
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 3 Creative Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREATIVE_SHOWCASE_ITEMS.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group relative flex flex-col justify-between overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-blue-600 bg-blue-50/20 shadow-xl ring-2 ring-blue-500/20"
                    : "border-slate-200 bg-[#FAFCFF] hover:border-slate-400 hover:shadow-md"
                }`}
              >
                {/* Image Media Thumbnail with Overlay Badges (Sharp edges, no video play icon) */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900 border-b border-slate-200">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-slate-950/85 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md uppercase tracking-wider">
                      {item.channel}
                    </span>
                    <span className="bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/95 font-semibold">
                    <span>{item.format}</span>
                    <span className="text-[10px] text-blue-300 bg-blue-950/70 px-2 py-0.5 border border-blue-400/30">High CTR Asset</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-bold text-[#0B1120] group-hover:text-blue-600 transition-colors">
                      {item.headline}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-500">
                      {item.hook}
                    </p>

                    {/* Verified Metrics Strip */}
                    <div className="mt-4 border border-slate-200 bg-white p-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-600">
                        Attributable Outcome:
                      </span>
                      <span className="text-xs font-black text-emerald-600 font-mono">
                        {item.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Micro Action */}
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Dynamic Creative Testing
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                      <span>View Specifications</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Helper */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Sparkles className="h-4 w-4 text-blue-600 shrink-0" />
            <p className="text-xs text-slate-700">
              Want our media buying squad to script, edit, and launch 20+ viral creatives for your brand?
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
          >
            <span>Request Creative Sample Pack</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
