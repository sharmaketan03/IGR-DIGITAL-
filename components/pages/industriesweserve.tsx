"use client";

import React from "react";
import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  WalletCards,
  House,
  Laptop,
  Cpu,
  Utensils,
  CarFront,
  Gem,
  Factory,
  Hotel,
} from "lucide-react";

// Home page theme colors
const GOOGLE_BLUE = "#4285F4";
const GOOGLE_GREEN = "#34A853";
const GOOGLE_RED = "#EA4335";

// Primary featured industries matching reference layout (6 items: 2 rows x 3 columns)
const primaryIndustries = [
  {
    name: "Ecommerce",
    description:
      "Get your product and category pages summarized directly in AI content blocks for high-intent buyer searches.",
    icon: ShoppingBag,
    color: "#EA4335", // Red / Coral like reference image
  },
  {
    name: "Healthcare",
    description:
      "Provide clear, accurate health information backed by schema and trust factors to get featured in medical AI summaries.",
    icon: HeartPulse,
    color: "#EA4335",
  },
  {
    name: "Education",
    description:
      "Your institution's courses, guides, and how-to resources deserve top visibility in informational AI search.",
    icon: GraduationCap,
    color: "#EA4335",
  },
  {
    name: "Finance",
    description:
      "Rank for AI-based financial questions with credible, entity-linked answers and up-to-date data.",
    icon: WalletCards,
    color: "#EA4335",
  },
  {
    name: "Real Estate",
    description:
      "Help users find local agents, listings, and investment advice through optimized property content.",
    icon: House,
    color: "#EA4335",
  },
  {
    name: "Lifestyle & SaaS",
    description:
      "From travel to wellness to software, we create topic hubs that answer user questions in AI's preferred style.",
    icon: Laptop,
    color: "#EA4335",
  },
];

// Additional industries can also be expanded or shown as chips if needed
const allIndustryTags = [
  "Food & Beverage",
  "Automotive",
  "Technology & AI",
  "Jewellery",
  "B2B Industrial",
  "Hospitality & Tourism",
  "Legal Services",
  "Home Services",
];

export default function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER (Matching reference: Bold Title with Green / Blue Highlight) ================= */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl md:text-[44px] lg:leading-[1.2]">
            Industries We Help Rank in Google AI Searches
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            We engineer industry-specific entity models, structured schema, and high-authority content that search engines and AI engines recommend first.
          </p>
        </div>

        {/* ================= MINIMALIST 6-GRID CARDS (Exact match to second reference image) ================= */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {primaryIndustries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Standalone Orange Icon matching reference image (No background container) */}
                <div className="mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-10 w-10 sm:h-11 sm:w-11 text-[#FF5722]" strokeWidth={1.9} />
                </div>

                {/* Bold Clean Industry Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#16213a] transition-colors duration-200 group-hover:text-[#4285F4]">
                  {item.name}
                </h3>

                {/* Clean Descriptive Text */}
                <p className="mt-3.5 max-w-[340px] text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM TAGS & CTA (Clean & unobtrusive) ================= */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Also optimizing search footprints across
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-3xl">
            {allIndustryTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-50 border border-slate-200/80 px-4 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}