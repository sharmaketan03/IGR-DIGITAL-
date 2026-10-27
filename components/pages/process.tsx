"use client";

import React from "react";
import {
  Search,
  Settings,
  Sliders,
  Edit3,
  TrendingUp,
  Share2,
  Target,
  Rocket,
  BarChart3,
  LucideIcon,
} from "lucide-react";

export type HowWeWorkStep = {
  number?: string;
  title: string;
  label?: string;
  description: string;
  icon?: LucideIcon;
  details?: string[];
};

export type HowWeWorkProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  steps?: HowWeWorkStep[];
  ctaText?: string;
  ctaButtonText?: string;
  ctaHref?: string;
};

// Default 6 items with yellow/amber outline icons matching the reference image
const DEFAULT_STEPS: HowWeWorkStep[] = [
  {
    icon: Search,
    title: "Comprehensive Discovery & SEO Analysis",
    description:
      "We start with a thorough audit of your whole digital footprint, assessing site structure, technical health, content quality, and organic market share to uncover immediate wins and long-term sustainable growth levers.",
    details: ["Business & audience research", "Competitor gap analysis", "Full technical & SEO audit"],
  },
  {
    icon: Settings,
    title: "Technical Foundation & Platform Optimization",
    description:
      "Our team enhances your platform's core foundation through targeted technical fixes, eliminating crawl bottlenecks, fixing duplicate canonicals, and optimizing server response speed for search engine compliance.",
    details: ["Crawl budget optimization", "Core Web Vitals tuning", "Structured schema integration"],
  },
  {
    icon: Sliders,
    title: "Strategic Multi-Channel Roadmap",
    description:
      "We turn data-backed insights into an actionable roadmap with clear priorities, channel mix across SEO, content, and paid advertising without wasteful spend or disconnected campaigns.",
    details: ["Channel alignment", "Target keyword mapping", "KPI & revenue milestones"],
  },
  {
    icon: Edit3,
    title: "High-Intent Content Strategy & Creation",
    description:
      "We conduct targeted search intent analysis to create authoritative, conversion-optimized articles, landing pages, and commercial copy that rank on Google and convert visitors into loyal customers.",
    details: ["SEO content writing", "Conversion copy optimization", "Editorial content calendar"],
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization & Transparent Reporting",
    description:
      "We make ongoing improvements to ensure your digital growth compounds. Continuous reviews, speed monitoring, and algorithm adaptation provide transparent reporting highlighting revenue performance.",
    details: ["Performance tracking", "A/B conversion testing", "Live KPI dashboards"],
  },
  {
    icon: Share2,
    title: "Performance-Driven Link Building & Authority Boost",
    description:
      "We strengthen your website authority through strategic, high-quality link outreach, digital PR placements, and brand mentions to enhance trust, improve search rankings, and protect market visibility.",
    details: ["High-authority editorial links", "Digital PR outreach", "Brand mention acquisition"],
  },
];

export default function HowWeWork({
  eyebrow = "HOW WE WORK",
  title = "From strategy to",
  highlightText = "measurable growth.",
  description = "A clear, collaborative process designed to turn your goals into focused execution, continuous optimization, and measurable business results.",
  steps,
}: HowWeWorkProps) {
  // Use passed steps if provided, otherwise default to the complete 6 steps
  const items = steps && steps.length >= 4 ? steps : DEFAULT_STEPS;

  return (
    <section className="relative w-full bg-[#fbfcfe] py-14 sm:py-18 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER (Centered matching the reference design)
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              {eyebrow}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-[#161c2d] leading-snug">
            {title} {highlightText && <span className="text-[#161c2d]">{highlightText}</span>}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            {description}
          </p>
        </div>

        {/* =====================================================
            CARD GRID (Reference Style: Clean white cards with yellow/amber outline icons)
        ====================================================== */}
        <div className={`mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 ${items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {items.map((step, idx) => {
            const Icon = step.icon || Search;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-start rounded-xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                {/* Yellow / Amber Outline Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center text-[#F59E0B]">
                  <Icon className="h-7 w-7 stroke-[1.8]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-[17px] font-bold text-[#161c2d] leading-snug">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                  {step.description}
                </p>

                {/* Optional key highlights if present */}
                {step.details && step.details.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {step.details.map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-block rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600 border border-slate-200/50"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}