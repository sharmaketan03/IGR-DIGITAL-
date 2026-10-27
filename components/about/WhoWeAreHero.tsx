"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function WhoWeAreHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060D1A] via-[#0B1528] to-[#0D1B34] text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              Who We Are • IGR Digital
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.12]">
            We Engineer Search Authority That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Transforms Commercial Revenue
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            IGR Digital is an elite search engine intelligence and growth marketing agency. We partner with forward-thinking enterprises to conquer search rankings, outmaneuver algorithmic shifts, and drive measurable customer acquisition.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              <span>Partner With Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-8 py-4 text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>

        {/* Hero Bottom Telemetry Numbers */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 max-w-5xl mx-auto">
          {[
            { value: "10+ Years", label: "Search Intelligence Excellence", icon: Sparkles },
            { value: "1,200+", label: "Page #1 Google Ranks Captured", icon: TrendingUp },
            { value: "$180M+", label: "Client Revenue Attributed", icon: ShieldCheck },
            { value: "98.4%", label: "Long-Term Client Retention", icon: Users },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md text-center transition-all hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-400 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
