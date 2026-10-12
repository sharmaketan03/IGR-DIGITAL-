"use client";

import React from "react";
import {
  Search,
  Settings,
  Sliders,
  Edit3,
  TrendingUp,
  Share2,
  type LucideIcon,
} from "lucide-react";

export interface SustainableCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HowWeDeliverResultsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards?: SustainableCardItem[];
}

const DEFAULT_CARDS: SustainableCardItem[] = [
  {
    icon: Search,
    title: "Comprehensive Platform & Site Analysis",
    description:
      "We start with a thorough audit of your whole digital platform, assessing architecture, technical configuration, content performance, and conversion metrics. Our checklist analyzes over 200 aspects, uncovering immediate quick wins and sustainable growth levers.",
  },
  {
    icon: Settings,
    title: "Technical SEO & Architecture Optimization",
    description:
      "Our specialists enhance your website's core foundation through targeted technical fixes. We eliminate duplicate content, crawl anomalies, and indexing roadblocks while optimizing caching layers, CDN setups, and server response times for maximum crawl efficiency.",
  },
  {
    icon: Sliders,
    title: "Strategic Tech Stack & Module Configuration",
    description:
      "We configure and fine-tune the ideal technology and CMS integrations to maximize performance without adding unnecessary bulk. Our setup includes automated schema tagging, URL canonicalization, and real-time monitoring tools providing instant optimization insights.",
  },
  {
    icon: Edit3,
    title: "Content Strategy & High-Intent Creation",
    description:
      "We conduct granular keyword intent research to build an authoritative content roadmap. Next, our editorial team produces keyword-optimized articles, multimedia assets, and commercial copy that ranks on Page 1 and drives visitor conversions.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization & Transparent Reporting",
    description:
      "Continuous testing and iterative sprints ensure your search visibility remains resilient and up-to-date against algorithm updates. We deliver live Looker Studio telemetry that highlights measurable improvements in traffic, rankings, and closed revenue.",
  },
  {
    icon: Share2,
    title: "Performance-Driven Link Building & Authority",
    description:
      "We strengthen your website's authority through contextual editorial placements on real, high-DR publications. Our team prioritizes ethical, white-hat outreach to attract qualified referral traffic and build domain trust that defends your rankings.",
  },
];

export default function HowWeDeliverResults({
  title = "How Our Digital Growth Framework Delivers Sustainable Results",
  subtitle = "Our proven methodology combines platform SEO best practices with advanced data-driven marketing techniques to produce durable results. We adopt a strategic approach that resolves technical performance bottlenecks while aligning every channel with your business revenue goals.",
  cards = DEFAULT_CARDS,
}: HowWeDeliverResultsProps) {
  const currentCards = cards && cards.length > 0 ? cards : DEFAULT_CARDS;

  return (
    <section className="w-full bg-[#f9fafb] py-20 sm:py-24 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header (Centered, bold title with clear subheadline) */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#161c2d] leading-snug">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 6-Card Grid (3 columns x 2 rows, clean white boxes with golden/amber line icons) */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-start rounded-xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                {/* Yellow/Amber Outline Icon matching the reference image */}
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
