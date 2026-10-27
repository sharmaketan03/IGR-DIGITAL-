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
    title: "1. Comprehensive Digital and SEO Audit",
    description:
      "We review your site structure, technical health, content, competitors and current search visibility to find quick wins and longer-term opportunities.",
  },
  {
    icon: Settings,
    title: "2. Technical Architecture and Core Web Vitals",
    description:
      "We address crawl and indexing issues, duplicate URLs, page speed and rendering so search engines can access and understand your pages.",
  },
  {
    icon: Sliders,
    title: "3. Multi-Channel Funnel Strategy",
    description:
      "We match search intent to the right channels, such as SEO for lasting demand, paid media for speed and remarketing for return visits, and agree budget priorities with you.",
  },
  {
    icon: Edit3,
    title: "4. High-Intent Content and Conversion Copy",
    description:
      "Our content team writes pages, guides and landing copy that answer real buyer questions and guide visitors toward an enquiry.",
  },
  {
    icon: TrendingUp,
    title: "5. Testing and Revenue Attribution",
    description:
      "We test pages and campaigns, track keyword movement and conversions, and report on lead quality and acquisition cost.",
  },
  {
    icon: Share2,
    title: "6. Authority Link Building and Digital PR",
    description:
      "We earn relevant editorial links and brand mentions through outreach and data-led content, and we do not use manipulative link schemes.",
  },
];

export default function GrowthProcess({
  eyebrow = "Sustainable results",
  title = "How Our Digital Growth Framework Works",
  highlightText = "",
  description = "Six parts, from the first audit to ongoing measurement. Timelines depend on your website, competition and goals, so we set expectations with you upfront.",
  cards = DEFAULT_CARDS,
}: GrowthProcessProps) {
  const currentCards = cards && cards.length > 0 ? cards : DEFAULT_CARDS;

  return (
    <section id="framework" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 border-y border-slate-200/80">
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