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
      "Category and product pages that rank, product schema, and paid campaigns measured against revenue and ROAS.",
    icon: ShoppingBag,
    color: "#EA4335",
    href: "/industries/",
  },
  {
    name: "Healthcare",
    description:
      "Accurate, trust-building content that shows real experience, local visibility for clinics and practices, and careful wording of medical claims.",
    icon: HeartPulse,
    color: "#EA4335",
    href: "/industries/healthcare-marketing/",
  },
  {
    name: "Education",
    description:
      "Course, programme and guide pages that match how students and parents research, plus landing pages built for enquiries.",
    icon: GraduationCap,
    color: "#EA4335",
    href: "/industries/",
  },
  {
    name: "Finance",
    description:
      "Credible, up-to-date content with clear sourcing and care around regulated wording.",
    icon: WalletCards,
    color: "#EA4335",
    href: "/industries/",
  },
  {
    name: "Real Estate",
    description:
      "Location and listing pages, local search visibility and lead generation for agents, brokers and developers.",
    icon: House,
    color: "#EA4335",
    href: "/industries/real-estate-marketing/",
  },
  {
    name: "Lifestyle and SaaS",
    description:
      "From travel and wellness to software, topic hubs and use-case content that answer buyer questions.",
    icon: Laptop,
    color: "#EA4335",
    href: "/industries/startup-marketing/",
  },
];

// Additional industries
const allIndustryTags = [
  "Food and Beverage",
  "Automotive",
  "Technology and AI",
  "Jewellery",
  "B2B Industrial",
  "Hospitality and Tourism",
  "Legal Services",
  "Home Services",
];

export default function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl md:text-[44px] lg:leading-[1.2]">
            Industries We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Search behaviour and buying journeys differ by industry. We adapt keyword strategy, content and compliance care to fit.
          </p>
        </div>

        {/* ================= MINIMALIST 6-GRID CARDS ================= */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {primaryIndustries.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Standalone Orange Icon */}
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
              </a>
            );
          })}
        </div>

        {/* ================= BOTTOM TAGS & CTA BUTTON ================= */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Also working across
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

          <div className="mt-10">
            <a
              href="/industries/"
              className="inline-flex items-center gap-2 rounded-full bg-[#16213a] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#4285F4] hover:shadow-lg hover:-translate-y-0.5"
            >
              See All Industries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}