"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Award,
  Globe2,
} from "lucide-react";

export type BannerCtaVariant =
  | "navy-consult"    // Deep Navy #033B6C - Centered Authority style
  | "blue-gradient"   // Deep Navy #033B6C - Split layout with Live Metrics Badge card
  | "dark-emerald"    // Deep Navy #033B6C - 3-Point Checklist & Verified SLA layout
  | "sunset-orange"   // Deep Navy #033B6C - High-urgency Consultation ribbon layout
  | "minimal-card";   // Deep Navy #033B6C - Floating framed card with Glassmorphic pill badge

export interface UniversalCtaBannerProps {
  variant?: BannerCtaVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  highlightText?: string;
}

export default function UniversalCtaBanner({
  variant = "navy-consult",
  eyebrow,
  title,
  description,
  primaryCtaText = "Get a Free Consultation",
  primaryCtaHref = "https://wa.me/919876543210",
  secondaryCtaText = "Chat on WhatsApp",
  secondaryCtaHref = "https://wa.me/919876543210",
  highlightText,
}: UniversalCtaBannerProps) {
  // Shared uniform brand colors: Deep Navy Background (#033B6C) + Golden CTA button (#FFAE00)

  // =========================================================================
  // DESIGN 1: CENTERED AUTHORITY (Exact User Reference Image Style)
  // Clean centered typography, yellow/amber button + white border WhatsApp
  // =========================================================================
  if (variant === "navy-consult") {
    return (
      <section className="relative w-full overflow-hidden bg-[#033B6C] py-14 sm:py-18 lg:py-20 text-white">
        {/* Subtle radial ambient shine */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.09)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-200">
              {eyebrow}
            </span>
          )}

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
            {title} {highlightText && <span className="text-sky-200">{highlightText}</span>}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-200/90 font-normal">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-[#FFAE00] px-7 py-3 text-sm font-bold text-[#111827] shadow-md transition-all duration-200 hover:bg-[#ffbe2e] hover:shadow-lg active:scale-95"
            >
              {primaryCtaText}
            </a>

            <a
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // DESIGN 2: SPLIT LAYOUT WITH LIVE METRIC / PROOF CARD
  // Deep Navy background (#033B6C) with 2-Column layout and glass insight card
  // =========================================================================
  if (variant === "blue-gradient") {
    return (
      <section className="relative w-full overflow-hidden bg-[#033B6C] py-14 sm:py-16 lg:py-20 text-white border-y border-white/10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {eyebrow && (
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-sky-200 backdrop-blur-md border border-white/10">
                  <Sparkles className="h-3.5 w-3.5 text-[#FFAE00]" />
                  <span>{eyebrow}</span>
                </div>
              )}

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[40px] leading-tight">
                {title} {highlightText && <span className="text-[#FFAE00]">{highlightText}</span>}
              </h2>

              {description && (
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200/90 font-normal max-w-2xl">
                  {description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FFAE00] px-7 py-3 text-sm font-bold text-[#111827] shadow-md transition-all duration-200 hover:bg-[#ffbe2e] hover:shadow-lg active:scale-95"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{secondaryCtaText}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Box: Glassmorphic Performance Metric Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/[0.08] p-6 sm:p-7 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">
                      Live Telemetry
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#FFAE00]">Verified 2026</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-black/20 p-3.5">
                    <div>
                      <p className="text-xs text-slate-300">Target Keyword Lift</p>
                      <p className="text-lg font-bold text-white">+184% in 90 Days</p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-emerald-400" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-black/20 p-3.5">
                    <div>
                      <p className="text-xs text-slate-300">Average ROAS Multiplier</p>
                      <p className="text-lg font-bold text-white">4.2x Scaled Return</p>
                    </div>
                    <BarChart3 className="h-6 w-6 text-[#FFAE00]" />
                  </div>
                </div>

                <div className="mt-4 pt-3 text-center border-t border-white/10">
                  <span className="text-[11px] text-slate-300">
                    Continuous monitoring across 450+ enterprise accounts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // DESIGN 3: 3-POINT STRATEGY & SLA HORIZONTAL BADGES
  // Deep Navy background (#033B6C) with 3 verified strategic guarantee pills
  // =========================================================================
  if (variant === "dark-emerald") {
    return (
      <section className="relative w-full overflow-hidden bg-[#033B6C] py-14 sm:py-18 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-1 text-xs font-semibold text-sky-200">
            <ShieldCheck className="h-4 w-4 text-[#FFAE00]" />
            <span>{eyebrow || "ENTERPRISE GUARANTEE & SLA"}</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed font-normal">
              {description}
            </p>
          )}

          {/* 3 Value Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-[#FFAE00] shrink-0" />
              <span>Zero Long-Term Lockin</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-[#FFAE00] shrink-0" />
              <span>Dedicated Squad Lead</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/10">
              <CheckCircle2 className="h-4 w-4 text-[#FFAE00] shrink-0" />
              <span>Real-Time Bi-Weekly Calls</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-[#FFAE00] px-7 py-3 text-sm font-bold text-[#111827] shadow-md transition-all duration-200 hover:bg-[#ffbe2e] hover:shadow-lg active:scale-95"
            >
              {primaryCtaText}
            </a>
            <a
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm border border-white/60 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // DESIGN 4: HIGH-SPEED CONSULTATION RIBBON
  // Deep Navy background (#033B6C) with Left-Right Action Ribbon Layout
  // =========================================================================
  if (variant === "sunset-orange") {
    return (
      <section className="relative w-full overflow-hidden bg-[#033B6C] py-12 sm:py-16 text-white border-y border-white/15">
        <div className="pointer-events-none absolute right-10 top-0 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-sky-200">
                  {eyebrow}
                </span>
              )}

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
                {title}
              </h2>

              {description && (
                <p className="mt-3 text-sm sm:text-base text-slate-200/90 leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#FFAE00] px-7 py-3 text-sm font-bold text-[#111827] shadow-md transition-all duration-200 hover:bg-[#ffbe2e] hover:shadow-lg active:scale-95"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{secondaryCtaText}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // DESIGN 5: FLOATING FRAMED CONTAINER BANNER
  // Deep Navy background (#033B6C) floating inside container with inner glow
  // =========================================================================
  return (
    <section className="relative w-full bg-[#f4f5fa] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#033B6C] p-8 sm:p-14 text-center text-white shadow-xl border border-blue-900/40">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {eyebrow && (
              <span className="mb-3.5 inline-block text-xs font-semibold uppercase tracking-wider text-sky-200 bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed font-normal">
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-[#FFAE00] px-7 py-3 text-sm font-bold text-[#111827] shadow-md hover:bg-[#ffbe2e] transition active:scale-95"
              >
                {primaryCtaText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                {secondaryCtaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
