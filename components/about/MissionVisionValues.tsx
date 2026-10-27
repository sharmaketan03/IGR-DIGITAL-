"use client";

import React, { useState } from "react";
import { Compass, Target, Shield, HeartHandshake, Zap, Award } from "lucide-react";

export default function MissionVisionValues() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const values = [
    {
      icon: Target,
      title: "Commercial Impact Over Vanity Metrics",
      description: "We don't celebrate meaningless impressions or generic traffic. We judge every strategy by attributable revenue, qualified pipeline, and return on search investment.",
      badge: "Core Tenet",
    },
    {
      icon: Shield,
      title: "100% White-Hat Editorial Integrity",
      description: "No PBNs, automated directory farms, or hazardous shortcuts. We build enduring domain equity through legitimate editorial partnerships and genuine value.",
      badge: "Safety First",
    },
    {
      icon: Zap,
      title: "Engineered Technical Precision",
      description: "We approach search like software architects: sub-second Core Web Vitals, pristine JSON-LD schema graphs, and surgical crawl budget efficiency.",
      badge: "Architecture",
    },
    {
      icon: HeartHandshake,
      title: "Radical Transparency & True Partnership",
      description: "Zero smoke and mirrors. You get live Looker Studio dashboard access, weekly transparent slack syncs, and clear attribution modeling.",
      badge: "Accountability",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Mission vs Vision Dual Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/60 via-white to-slate-50 p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Compass className="h-3.5 w-3.5" />
                Our Mission
              </div>

              <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-[#0B132B] leading-tight">
                To bridge the gap between technical search algorithms and real commercial profitability.
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Search engines are evolving into AI-driven answer engines. Our mission is to ensure visionary businesses never lose their voice, capturing market share through authentic authority, semantic dominance, and flawless digital architecture.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-100/80 flex items-center gap-3 text-xs font-bold text-blue-800">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              Guiding 100+ global brands with strategic certainty
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0B132B] p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Award className="h-3.5 w-3.5" />
                Our Vision
              </div>

              <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                To redefine how ambitious brands earn, defend, and compound digital market leadership.
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                We envision a future where organic search is recognized not merely as an acquisition tactic, but as a company&apos;s most valuable, compounding enterprise asset. We build resilient growth frameworks that outlast algorithmic turbulence.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-bold text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              Future-proofing discovery across Google, AI Overviews & Answer Engines
            </div>
          </div>
        </div>

        {/* Guiding Principles & Core Values Grid */}
        <div className="mt-20 lg:mt-24 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              The Principles That Guide Us
            </span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
              Our Core Cultural Values
            </h3>
            <p className="mt-3 text-base text-slate-600">
              How our engineers, content strategists, and outreach directors work every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-slate-200/90 bg-[#FBFBFC] p-7 sm:p-8 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                      {v.badge}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg sm:text-xl font-bold text-[#0B132B]">
                    {v.title}
                  </h4>

                  <p className="mt-2.5 text-sm sm:text-[14.5px] leading-relaxed text-slate-600 font-normal">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
