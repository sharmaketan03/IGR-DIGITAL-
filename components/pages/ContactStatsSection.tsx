"use client";

import React from "react";
import { Briefcase, Users, Globe, Building2 } from "lucide-react";

const STATS_DATA = [
  {
    icon: Briefcase,
    value: "7000+",
    label: "Projects",
  },
  {
    icon: Users,
    value: "700+",
    label: "Happy Clients",
  },
  {
    icon: Globe,
    value: "67+",
    label: "Countries",
  },
  {
    icon: Building2,
    value: "2,377+",
    label: "Clients",
  },
];

export default function ContactStatsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching screenshot */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="!text-[22px] sm:!text-[28px] md:!text-[32px] font-extrabold tracking-tight text-[#0B1120]">
            With 10K+ Trust Invested, You Can Count On Us
          </h2>
        </div>

        {/* 4 Stats Icons Grid matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Minimalist icon badge */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center text-slate-400">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>

                {/* Big Bold Stat Value */}
                <p className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B1120] tracking-tight">
                  {item.value}
                </p>

                {/* Label */}
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
