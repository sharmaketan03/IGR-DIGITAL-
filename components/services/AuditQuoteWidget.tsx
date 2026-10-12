"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileSearch,
  Lock,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface AuditQuoteWidgetProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function AuditQuoteWidget({
  eyebrow = "GET YOUR FREE GROWTH BLUEPRINT",
  title = "Discover What's Holding Your Website Back from Page #1",
  description = "Enter your details below to receive a custom 15-page diagnostic audit prepared by a senior growth strategist, not an automated report generator.",
}: AuditQuoteWidgetProps) {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("$2k - $5k");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#16213a] via-[#1b2a4a] to-[#0f172a] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
                <FileSearch className="h-3.5 w-3.5 text-blue-400" />
                {eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {description}
              </p>

              {/* Bullet Features */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Detailed Competitor Keyword Gap Analysis",
                  "Core Web Vitals & Technical Speed Breakdown",
                  "Missing Schema & Canonical Error Audit",
                  "High-Converting Organic Revenue Forecast",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34A853]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust Tag */}
              <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  100% Free & Confidential
                </span>
                <span>•</span>
                <span>Delivered within 24-48 business hours</span>
              </div>
            </div>

            {/* Right Interactive Form Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      Audit Request Received!
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Our senior strategist is inspecting {website}. We will email your custom growth blueprint to {email} within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white">
                      Request Your Free Custom Audit
                    </h3>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Website URL
                      </label>
                      <input
                        type="text"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="e.g. yourcompany.com"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Monthly Growth Budget
                      </label>
                      <select
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-[#16213a] px-4 py-3 text-sm text-white outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                      >
                        <option value="$1k - $2k">$1,000 - $2,500 / mo</option>
                        <option value="$2k - $5k">$2,500 - $5,000 / mo</option>
                        <option value="$5k - $10k">$5,000 - $10,000 / mo</option>
                        <option value="$10k+">$10,000+ / mo (Enterprise)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4285F4] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-500"
                    >
                      <span>Generate My Custom Blueprint</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-[10px] text-slate-400">
                      No sales pressure. No automated fluff. Just hard data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
