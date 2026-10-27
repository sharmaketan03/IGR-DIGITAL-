"use client";

import React from "react";

export interface MetricCardItem {
  value: string;
  title?: string;
  description?: string;
  label?: string;
  sublabel?: string;
  change?: string;
  highlightColor?: string;
}

export interface QuickMetricsBarProps {
  headline?: string;
  subheadline?: string;
  metrics?: MetricCardItem[];
  theme?: "minimal-white" | "card-box";
}

const DEFAULT_SECOND_IMAGE_METRICS: MetricCardItem[] = [
  {
    value: "+150%",
    title: "Average Organic Traffic Growth",
    description:
      "We've increased organic traffic by 150% for clients across industries by implementing advanced, data-driven SEO techniques.",
  },
  {
    value: "+85%",
    title: "Keyword Ranking Improvements",
    description:
      "Our strategic SEO services improved keyword rankings by 85%, helping businesses dominate the top page on Google.",
  },
  {
    value: "+65%",
    title: "Conversion Rate Increase",
    description:
      "Through comprehensive technical SEO services, we boosted conversion rates by 65%, turning more visitors into paying customers.",
  },
  {
    value: "+90%",
    title: "Site Speed Enhancement",
    description:
      "Our technical experts optimized websites for lightning-fast load times and improved Core Web Vitals scores by 90%.",
  },
];

export default function QuickMetricsBar({
  metrics = DEFAULT_SECOND_IMAGE_METRICS,
}: QuickMetricsBarProps) {
  return (
    <section className="relative z-10 w-full bg-[#f8fafc] py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Exact Second Image Layout: 4 clean, prominent white rectangular cards with dark typography */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-start rounded-none bg-white p-7 sm:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06),0_4px_6px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
            >
              {/* Giant Bold Metric Number (+150%, +85%, etc.) */}
              <div className="text-4xl sm:text-[42px] font-black tracking-tight text-[#161c2d] leading-none">
                {item.value}
              </div>

              {/* Title / Label */}
              <h3 className="mt-4 text-base sm:text-lg font-bold text-[#161c2d] leading-snug">
                {item.title || item.label}
              </h3>

              {/* Multi-line explanation copy */}
              <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                {item.description || item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
