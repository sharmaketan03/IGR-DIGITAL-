"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Flame,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  ArrowUpRight,
  Target,
  Sparkles,
  Zap,
  MousePointerClick,
  Percent,
} from "lucide-react";

export interface PaidMediaRoasStripProps {
  initialMonthlySpend?: number;
  initialAov?: number;
}

export default function PaidMediaRoasStrip({
  initialMonthlySpend = 15000,
  initialAov = 120,
}: PaidMediaRoasStripProps) {
  const [adSpend, setAdSpend] = useState<number>(initialMonthlySpend);

  // Dynamic calculated projections based on benchmark 4.6x target ROAS
  const projectedRevenue = Math.round(adSpend * 4.65);
  const blendedProfitEstimate = Math.round(projectedRevenue * 0.42);
  const ordersGenerated = Math.round(projectedRevenue / initialAov);
  const estimatedCpa = Math.round(adSpend / ordersGenerated);

  return (
    <section className="relative overflow-hidden bg-[#070D18] py-16 sm:py-20 text-white border-y border-slate-800">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE PERFORMANCE AD BUDGET & ROAS CALCULATOR
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">
            Estimate Your Revenue Yield with Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              4.6x Growth Engine
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Drag the monthly ad spend slider below to see how our cross-channel creative and algorithmic bid management turn ad budget into verified revenue.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-[#0C1527]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Control Panel: Slider & Benchmarks */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Monthly Paid Ad Spend
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>

                <div className="mt-4">
                  <input
                    type="range"
                    min={3000}
                    max={100000}
                    step={1000}
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition"
                  />
                  <div className="mt-2 flex justify-between text-[11px] font-semibold text-slate-500">
                    <span>$3,000 / mo</span>
                    <span>$25,000 / mo</span>
                    <span>$50,000 / mo</span>
                    <span>$100,000+ / mo</span>
                  </div>
                </div>
              </div>

              {/* Channel Split Allocation Preview */}
              <div className="rounded-2xl border border-slate-800/80 bg-[#09101E] p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Optimal Channel Budget Split
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-2.5">
                    <span className="text-[10px] font-bold text-blue-400">Google Ads</span>
                    <p className="text-sm font-black text-white mt-0.5">50%</p>
                    <span className="text-[10px] text-slate-500">High search intent</span>
                  </div>
                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-2.5">
                    <span className="text-[10px] font-bold text-indigo-400">Meta Advantage+</span>
                    <p className="text-sm font-black text-white mt-0.5">35%</p>
                    <span className="text-[10px] text-slate-500">Visual discovery</span>
                  </div>
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5">
                    <span className="text-[10px] font-bold text-emerald-400">Retargeting / ABM</span>
                    <p className="text-sm font-black text-white mt-0.5">15%</p>
                    <span className="text-[10px] text-slate-500">Closing sales</span>
                  </div>
                </div>
              </div>

              {/* Trust Tag */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  Projections based on verified 4.6x average ROAS across 180+ managed client accounts.
                </span>
              </div>
            </div>

            {/* Right Output Dashboard Display */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-[#0A1324] to-slate-900 p-6 sm:p-7 shadow-xl">
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Projected Monthly Return
                </span>

                {/* Big Number */}
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                    ${projectedRevenue.toLocaleString()}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    4.65x ROAS
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Estimated Gross Monthly Revenue Attributable to Campaigns
                </p>

                {/* Micro Metric Grid */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-800 pt-5">
                  <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Net Ad Profit
                    </span>
                    <span className="mt-1 block text-base sm:text-lg font-black text-emerald-400 font-mono">
                      ${blendedProfitEstimate.toLocaleString()}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Conversions
                    </span>
                    <span className="mt-1 block text-base sm:text-lg font-black text-white font-mono">
                      {ordersGenerated.toLocaleString()}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Target CPA
                    </span>
                    <span className="mt-1 block text-base sm:text-lg font-black text-sky-300 font-mono">
                      ${estimatedCpa}
                    </span>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition"
                  >
                    <span>Claim Your Free Ad Strategy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
                  >
                    <span>Instant WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
