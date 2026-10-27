"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export type EditorialCalloutTheme = "emerald" | "navy" | "indigo" | "dark";

export interface EditorialCalloutProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  introParagraph: string;
  bulletPoints: string[];
  secondaryParagraphs?: string[];
  conclusion?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  theme?: EditorialCalloutTheme;
  containerClassName?: string;
}

const THEME_STYLES: Record<
  EditorialCalloutTheme,
  {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    titleHighlight: string;
    bulletIcon: string;
    link: string;
    ctaBtn: string;
  }
> = {
  // Emerald Forest Green (like the reference screenshot: Why ChatGPT SEO Is a Must)
  emerald: {
    bg: "bg-[#064e3b]",
    border: "border-[#047857]/40",
    badgeBg: "bg-[#047857]/50 text-emerald-200 border-[#10b981]/30",
    badgeText: "text-emerald-200",
    titleHighlight: "text-[#f59e0b]",
    bulletIcon: "text-[#f59e0b]",
    link: "text-[#34d399] underline decoration-[#34d399]/60 hover:text-white",
    ctaBtn: "bg-[#f59e0b] text-[#022c22] hover:bg-[#d97706]",
  },
  // Deep Google/Brand Navy
  navy: {
    bg: "bg-[#0b1b36]",
    border: "border-[#1e3a8a]/40",
    badgeBg: "bg-[#1e3a8a]/60 text-blue-200 border-blue-400/30",
    badgeText: "text-blue-200",
    titleHighlight: "text-[#4285F4]",
    bulletIcon: "text-[#4285F4]",
    link: "text-[#60a5fa] underline decoration-blue-400/60 hover:text-white",
    ctaBtn: "bg-[#4285F4] text-white hover:bg-[#3367d6]",
  },
  // Rich Indigo / Purple
  indigo: {
    bg: "bg-[#1e1b4b]",
    border: "border-[#312e81]/60",
    badgeBg: "bg-[#3730a3]/60 text-indigo-200 border-indigo-400/30",
    badgeText: "text-indigo-200",
    titleHighlight: "text-[#c084fc]",
    bulletIcon: "text-[#c084fc]",
    link: "text-[#e879f9] underline decoration-fuchsia-400/60 hover:text-white",
    ctaBtn: "bg-[#c084fc] text-[#1e1b4b] hover:bg-[#a855f7]",
  },
  // Sleek Dark Slate
  dark: {
    bg: "bg-[#0B1120]",
    border: "border-slate-800",
    badgeBg: "bg-slate-800 text-slate-300 border-slate-700",
    badgeText: "text-slate-300",
    titleHighlight: "text-[#EA4335]",
    bulletIcon: "text-[#EA4335]",
    link: "text-[#f87171] underline decoration-red-400/60 hover:text-white",
    ctaBtn: "bg-[#EA4335] text-white hover:bg-[#dc2626]",
  },
};

export default function EditorialCalloutSection({
  badge,
  title,
  titleHighlight,
  introParagraph,
  bulletPoints = [],
  secondaryParagraphs = [],
  conclusion,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  theme = "emerald",
  containerClassName = "",
}: EditorialCalloutProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.emerald;

  return (
    <section className={`py-14 sm:py-18 lg:py-20 bg-white font-sans ${containerClassName}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Deep colored rounded card container matching reference screenshot */}
        <div
          className={`relative overflow-hidden rounded-[26px] ${styles.bg} border ${styles.border} p-8 sm:p-12 lg:p-16 text-white shadow-2xl transition-all duration-300`}
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 max-w-5xl">
            {/* Optional Small Eyebrow Badge */}
            {badge && (
              <span
                className={`mb-4 inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${styles.badgeBg}`}
              >
                {badge}
              </span>
            )}

            {/* Bold Headline with Highlight Word */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight leading-[1.2]">
              <span>{title} </span>
              {titleHighlight && (
                <span>{titleHighlight}</span>
              )}
            </h2>

            {/* Intro Lead Paragraph */}
            {introParagraph && (
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/90 font-normal max-w-4xl">
                {introParagraph}
              </p>
            )}

            {/* Square/Outlined Bullet Points */}
            {bulletPoints.length > 0 && (
              <div className="mt-7 space-y-3.5">
                {bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center border-2 border-current ${styles.bulletIcon} rounded-[3px] text-[10px] font-bold`}
                    >
                      {/* Square border icon matching reference screenshot */}
                    </span>
                    <p className="text-xs sm:text-[14px] leading-relaxed text-white/95 font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Secondary Informational Paragraphs */}
            {secondaryParagraphs.length > 0 && (
              <div className="mt-7 space-y-3.5 text-xs sm:text-[14px] leading-relaxed text-white/85">
                {secondaryParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            )}

            {/* Closing Conclusion Note */}
            {conclusion && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/95">
                  {conclusion}
                </p>
              </div>
            )}

            {/* Optional Call to Action */}
            {((ctaText && ctaHref) || (secondaryCtaText && secondaryCtaHref)) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {ctaText && ctaHref && (
                  <Link
                    href={ctaHref}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition-all duration-200 shadow-md ${styles.ctaBtn}`}
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-white/20"
                  >
                    <span>{secondaryCtaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
