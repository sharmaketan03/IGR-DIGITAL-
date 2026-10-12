"use client";

import React from "react";
import {
  Search,
  Settings,
  Sliders,
  Edit3,
  TrendingUp,
  Share2,
  LucideIcon,
} from "lucide-react";

export type GrowthProcessCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type GrowthProcessProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  cards?: GrowthProcessCard[];
};

const DEFAULT_CARDS: GrowthProcessCard[] = [
  {
    icon: Search,
    title: "Comprehensive Digital & SEO Audit",
    description:
      "We start with a thorough audit of your whole digital footprint, assessing website structure, technical health, content quality, and organic market share. We uncover immediate quick wins and long-term sustainable growth levers.",
  },
  {
    icon: Settings,
    title: "Technical Architecture & Core Web Vitals",
    description:
      "Our engineers fix crawl bottlenecks, duplicate URLs, and indexing issues while configuring server response caching, CDN delivery, and page rendering speed to ensure Google crawls and ranks your platform efficiently.",
  },
  {
    icon: Sliders,
    title: "Strategic Multi-Channel Funnel Alignment",
    description:
      "We connect search intent with performance marketing, selecting the highest-ROI channel mix across SEO, paid ads, and remarketing without wasteful spend or bloated campaigns.",
  },
  {
    icon: Edit3,
    title: "High-Intent Content & Conversion Copy",
    description:
      "Our editorial strategists create authoritative, search-optimized content, landing pages, and commercial guides that answer buyer questions, build brand trust, and generate high-converting inbound leads.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Testing & Revenue Attribution",
    description:
      "Growth doesn't stop after launch. We run A/B conversion tests, track keyword movements, and provide transparent live dashboards focused on qualified customer acquisition and lifetime value.",
  },
  {
    icon: Share2,
    title: "Authority Link Building & Digital PR",
    description:
      "We build domain authority through premium editorial placements, media mentions, and data-backed outreach to increase domain trust and protect your brand against aggressive competitors.",
  },
];

export default function GrowthProcess({
  eyebrow = "SUSTAINABLE RESULTS",
  title = "How Our Digital Growth Framework Delivers",
  highlightText = "Sustainable Results",
  description = "Our proven methodology combines search intelligence, technical precision, and data-backed execution to produce durable results. We adopt a strategic approach that resolves growth roadblocks while driving measurable revenue.",
  cards = DEFAULT_CARDS,
}: GrowthProcessProps) {
  const currentCards = cards && cards.length > 0 ? cards : DEFAULT_CARDS;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =====================================================
            HEADER (Centered matching Image 1)
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              {eyebrow}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#161c2d] leading-snug">
            {title} {highlightText && <span className="text-[#161c2d]">{highlightText}</span>}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            {description}
          </p>
        </div>

        {/* =====================================================
            6-CARD GRID (Image 1 style: Clean white cards + yellow/amber outline icons)
        ====================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-start rounded-xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                {/* Yellow / Amber Outline Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center text-[#F59E0B]">
                  <Icon className="h-7 w-7 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-[#161c2d] leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}