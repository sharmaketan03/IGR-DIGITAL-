"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { TeamCard } from "@/components/pages/teamProcess";

export type VerticalTabsDeliverablesProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  highlightText?: string;
  description?: string;
  cards?: TeamCard[];
  footerTitle?: string;
  footerDescription?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function VerticalTabsDeliverables({
  eyebrow,
  title = "What do your media mixed modeling services include?",
  subtitle = "Get a preview of our full-service media mixed modeling services:",
  highlightText,
  description,
  cards = [],
  footerTitle = "Ready to accelerate your results?",
  footerDescription = "Request a custom competitive teardown and opportunity blueprint today.",
  ctaText = "Schedule Consultation",
  ctaHref = "/contact",
}: VerticalTabsDeliverablesProps) {
  const [activeTab, setActiveTab] = useState(4); // Default to Real-time optimizations matching reference image

  const defaultItems = [
    {
      tabLabel: "Dedicated account management team",
      heading: "Dedicated account management team",
      p1: "Our dedicated team of search and growth specialists acts as an extension of your company. We manage every detail of strategy, technical implementations, and regular reporting.",
      p2: "This ensures you have direct access to senior strategists who understand your brand voice, commercial objectives, and industry competitive dynamics.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "Modeling & analytics",
      heading: "Modeling & analytics",
      p1: "Advanced keyword revenue forecasting, organic traffic opportunity modeling, and competitive deficit projections that guide every resource investment.",
      p2: "We build statistical models that evaluate organic ranking shifts against commercial conversion outcomes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "Data integration",
      heading: "Data integration",
      p1: "Seamless synchronization across Google Search Console, GA4, Semrush, Ahrefs, and internal CRM checkout pipelines to create unified growth telemetry.",
      p2: "Eliminate siloed data points and gain complete clarity on what drives real bottom-line acquisition.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "Measurement unification",
      heading: "Measurement unification",
      p1: "Unified cross-channel attribution modeling that attributes organic rank gains and editorial placements to completed customer checkout sessions and pipeline revenue.",
      p2: "Measure true incrementality and multi-touch customer touchpoints accurately without vanity metrics.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "Real-time optimizations",
      heading: "Real-time optimizations",
      p1: "With the power of artificial intelligence and machine learning, our team will implement MMM solutions that track data, customer and visitor behavior and interactions, marketing strategy ROI, and bottom-line growth in real-time.",
      p2: "This enables you to access immediate insights to inform strategic, data-driven strategy optimizations to improve your ROI and revenue growth.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "Forecasting & budget optimization",
      heading: "Forecasting & budget optimization",
      p1: "Quarterly ROI roadmaps, budget allocation recommendations, and organic pipeline expansion models that maximize efficiency across all campaigns.",
      p2: "Predict future returns with high confidence based on verified historical conversion trends.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "AI-driven recommendations",
      heading: "AI-driven recommendations",
      p1: "Continuous automated scanning of competitor movements, search intent divergence, and algorithmic updates with concrete action steps.",
      p2: "Stay ahead of industry shifts with proactive intelligence and machine-learning driven insights.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tabLabel: "And more",
      heading: "Comprehensive ongoing strategic growth",
      p1: "From executive board presentations to quarterly roadmap refinements, our team handles all facets of digital market expansion.",
      p2: "A long-term strategic partnership built around compounding growth and verifiable performance.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // If cards are provided, map them while keeping the exact structure
  const items = cards.length > 0 ? cards.map((c: any, i) => ({
    tabLabel: c.eyebrow || c.title,
    heading: c.title,
    p1: c.description,
    p2: c.subdescription || (c.subdescription === "" ? "" : undefined),
    image: c.image || defaultItems[i % defaultItems.length].image,
  })) : defaultItems;

  const currentItem = items[activeTab] || items[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Clean Center Header Matching Reference Image */}
        <div className="mx-auto max-w-4xl text-center mb-14 lg:mb-20">
          <h2 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {title}{" "}
            {highlightText && <span>{highlightText}</span>}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 font-normal">
            {description || subtitle}
          </p>
        </div>

        {/* 2-Column Split: Clean Left Tab Stack + Exact Right Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: Clean Bordered Tab List */}
          <div className="lg:col-span-4 flex flex-col">
            {items.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left py-4 px-3 sm:px-4 border-b border-slate-200 transition-colors duration-200 text-[15px] sm:text-[16px] leading-snug ${
                    isActive
                      ? "text-[#0066FF] font-bold border-b-2 border-b-[#0066FF]"
                      : "text-slate-800 font-medium hover:text-[#0066FF]"
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Right Column: Exact Match to Reference Image (Icon badge + Blue title, 2 paragraphs + floating image card) */}
          <div className="lg:col-span-8 pt-2">
            {/* Header: Cyan Box with Blue Clock Icon + Blue Bold Title */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#0066FF] shrink-0">
                <Clock className="h-6 w-6 stroke-[2.2]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0066FF] tracking-tight">
                {currentItem.heading}
              </h3>
            </div>

            {/* Split Details: 2 Left Paragraphs & Right Rounded Image */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Paragraphs */}
              <div className="md:col-span-7 space-y-5">
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-700 font-normal">
                  {currentItem.p1}
                </p>
                {currentItem.p2 && (
                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-700 font-normal">
                    {currentItem.p2}
                  </p>
                )}
              </div>

              {/* Right Clean Rounded Image Card (Matching photo in image) */}
              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-slate-100 bg-slate-50">
                  <img
                    src={currentItem.image}
                    alt={currentItem.heading}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto">
          <div>
            <p className="text-base font-bold text-[#111827]">
              {footerTitle}
            </p>
            <p className="mt-0.5 text-sm text-slate-500">
              {footerDescription}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0B1120] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0066FF]"
          >
            <span>{ctaText}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
