"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export interface PlanFeatureRow {
  name: string;
  category?: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;
}

export interface DetailedMatrixPricingProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
}

const defaultFeatureRows: PlanFeatureRow[] = [
  // Category 1: Strategy & Setup
  {
    name: "Dedicated Senior SEO Strategist",
    category: "Strategy & Dedicated Squad",
    starter: "Shared",
    growth: "Dedicated Lead",
    enterprise: "Full Squad (Lead + Dev + Copy)",
  },
  {
    name: "Custom Technical & Keyword Audit",
    category: "Strategy & Dedicated Squad",
    starter: "Up to 500 URLs",
    growth: "Up to 5,000 URLs",
    enterprise: "Unlimited URLs",
  },
  {
    name: "Competitor Market Gap Intelligence",
    category: "Strategy & Dedicated Squad",
    starter: "3 Competitors",
    growth: "10 Competitors",
    enterprise: "Complete Industry Landscape",
  },

  // Category 2: Content & On-Page
  {
    name: "On-Page URL Optimization & Siloing",
    category: "On-Page & Architecture",
    starter: "15 Pages / Mo",
    growth: "40 Pages / Mo",
    enterprise: "100+ Pages / Mo",
  },
  {
    name: "Revenue Copywriting & Topic Clusters",
    category: "On-Page & Architecture",
    starter: "4 Articles / Mo",
    growth: "10 Articles / Mo",
    enterprise: "25+ Articles / Mo",
  },
  {
    name: "Schema Markup & Entity Architecture",
    category: "On-Page & Architecture",
    starter: true,
    growth: true,
    enterprise: true,
  },

  // Category 3: Authority & Backlinks
  {
    name: "High-Authority Editorial Placements",
    category: "Authority & Off-Page",
    starter: "3 Links (DR 40+)",
    growth: "8 Links (DR 60+)",
    enterprise: "20+ Links (DR 70–90+)",
  },
  {
    name: "Digital PR & Media Outreach",
    category: "Authority & Off-Page",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    name: "Toxic Link & Disavow Audits",
    category: "Authority & Off-Page",
    starter: false,
    growth: true,
    enterprise: true,
  },

  // Category 4: Analytics & Support
  {
    name: "Real-Time Looker Studio Dashboard",
    category: "Attribution & Reporting",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Executive Strategy Calls",
    category: "Attribution & Reporting",
    starter: "Monthly",
    growth: "Bi-Weekly",
    enterprise: "Weekly Sync + Slack Channel",
  },
  {
    name: "Direct Developer Jira/GitHub Tickets",
    category: "Attribution & Reporting",
    starter: false,
    growth: true,
    enterprise: true,
  },
];

export default function DetailedMatrixPricing({
  eyebrow = "TRANSPARENT VALUE MATRIX",
  title = "Compare Deliverables &",
  highlightText = "Choose Your Growth Tier",
  description = "No hidden surcharges. Compare full scope specifications, team allocation, and deliverables across all enterprise retainers.",
}: DetailedMatrixPricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter Growth",
      badge: "Foundational SEO",
      price: billingCycle === "monthly" ? "$1,490" : "$1,290",
      period: "/ month",
      desc: "For local stores and emerging businesses seeking rapid organic ranking velocity.",
      isPopular: false,
      ctaText: "Choose Starter",
      ctaHref: "/contact",
    },
    {
      id: "growth",
      name: "Market Leader",
      badge: "Most Popular · 84% Choose This",
      price: billingCycle === "monthly" ? "$2,990" : "$2,590",
      period: "/ month",
      desc: "For scaling brands aiming to overtake market leaders and dominate competitive keywords.",
      isPopular: true,
      ctaText: "Deploy Growth Squad",
      ctaHref: "/contact",
    },
    {
      id: "enterprise",
      name: "Enterprise Domination",
      badge: "Multi-Market Scale",
      price: billingCycle === "monthly" ? "$5,490" : "$4,890",
      period: "/ month",
      desc: "For large e-commerce platforms and multi-location enterprises needing dedicated execution.",
      isPopular: false,
      ctaText: "Custom Enterprise Scope",
      ctaHref: "/contact",
    },
  ];

  // Group features by category
  const categories = Array.from(new Set(defaultFeatureRows.map((r) => r.category || "General")));

  const renderCellContent = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          <Check className="h-4 w-4 stroke-[2.5]" />
        </span>
      ) : (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          <X className="h-3.5 w-3.5 stroke-[2]" />
        </span>
      );
    }
    return <span className="text-xs sm:text-sm font-semibold text-slate-800">{value}</span>;
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 sm:py-24 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white p-1 shadow-xs">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                billingCycle === "monthly"
                  ? "bg-[#033B6C] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                billingCycle === "quarterly"
                  ? "bg-[#033B6C] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Quarterly (-15% Discount)
            </button>
          </div>
        </div>

        {/* Matrix Comparison Table (Matching Reference Image Section F) */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="w-2/5 p-6 sm:p-8 align-bottom">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Deliverables Matrix
                    </span>
                    <h4 className="mt-1 text-lg font-bold text-slate-900">
                      Scope Specifications
                    </h4>
                  </th>

                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className={`w-1/5 p-6 sm:p-8 text-center align-top ${
                        p.isPopular ? "bg-blue-50/60 border-x-2 border-blue-600" : ""
                      }`}
                    >
                      {p.isPopular && (
                        <span className="mb-2.5 inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          {p.badge}
                        </span>
                      )}
                      <h4 className="text-lg font-bold text-slate-900">{p.name}</h4>
                      <div className="mt-2 flex items-baseline justify-center gap-1">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900">
                          {p.price}
                        </span>
                        <span className="text-xs font-medium text-slate-500">{p.period}</span>
                      </div>
                      <Link
                        href={p.ctaHref}
                        className={`mt-4 inline-flex w-full items-center justify-center rounded-xl py-2.5 text-xs font-bold transition shadow-xs ${
                          p.isPopular
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
                            : "bg-[#0B1120] text-white hover:bg-slate-800"
                        }`}
                      >
                        {p.ctaText}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {categories.map((cat) => {
                  const rows = defaultFeatureRows.filter((r) => r.category === cat);
                  return (
                    <React.Fragment key={cat}>
                      {/* Category Header Row */}
                      <tr className="border-y border-slate-200 bg-slate-100/70">
                        <td
                          colSpan={4}
                          className="px-6 sm:px-8 py-3 text-xs font-bold uppercase tracking-wider text-slate-700"
                        >
                          {cat}
                        </td>
                      </tr>

                      {/* Feature Item Rows */}
                      {rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="border-b border-slate-100 transition-colors hover:bg-slate-50/60"
                        >
                          <td className="p-4 sm:p-6 text-xs sm:text-sm font-semibold text-slate-900">
                            {row.name}
                          </td>

                          {/* Starter Cell */}
                          <td className="p-4 sm:p-6 text-center">
                            {renderCellContent(row.starter)}
                          </td>

                          {/* Growth Cell (Highlighted column) */}
                          <td className="p-4 sm:p-6 text-center bg-blue-50/30 border-x-2 border-blue-600/40">
                            {renderCellContent(row.growth)}
                          </td>

                          {/* Enterprise Cell */}
                          <td className="p-4 sm:p-6 text-center">
                            {renderCellContent(row.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
