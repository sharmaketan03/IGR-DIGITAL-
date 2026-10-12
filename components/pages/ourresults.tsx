"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export type ProvenResultItem = {
  value: string;
  label: string;
};

export type ProvenCaseStudy = {
  id?: string;
  client: string;
  category: string;
  description: string;
  image: string;
  results: ProvenResultItem[];
  href?: string;
};

export type ProvenResultsContent = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  bottomText?: string;
  bottomHighlight?: string;
  exploreLabel?: string;
  caseStudies: ProvenCaseStudy[];
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProvenResults({
  content,
}: {
  content: ProvenResultsContent;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies = content.caseStudies;

  if (!caseStudies?.length) {
    return null;
  }

  const activeCase = caseStudies[activeIndex];

  const goNext = () => {
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1,
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1,
    );
  };

  const goToCase = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative z-10 w-full overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#EA4335]/[0.035] blur-[140px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-10 flex w-full flex-col items-center text-center lg:mb-14">
          {content.eyebrow && (
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#EA4335]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#EA4335]">
                {content.eyebrow}
              </span>

              <span className="h-px w-10 bg-[#EA4335]" />
            </div>
          )}

          <h2 className="max-w-4xl text-4xl font-bold leading-[1] tracking-[-0.055em] text-[#0B1120] sm:text-5xl lg:text-[60px]">
            {content.title}

            {content.titleHighlight && (
              <>
                <br />

                <span className="text-[#0B1120]">
                  {content.titleHighlight}
                </span>
              </>
            )}
          </h2>

          {content.description && (
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-[15px]">
              {content.description}
            </p>
          )}
        </div>

        {/* =====================================================
            MAIN SHOWCASE
        ====================================================== */}

        <div className="relative min-h-[850px] w-full overflow-hidden rounded-[32px] bg-[#0B1120] shadow-[0_30px_100px_rgba(15,23,42,0.14)] sm:min-h-[900px] lg:h-[680px] lg:min-h-0">
          {/* Background glow */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#EA4335]/[0.08] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#4285F4]/[0.035] blur-[120px]" />

          {/* =================================================
              DESKTOP IMAGE
          ================================================= */}

          <div className="absolute inset-y-0 right-0 hidden w-[57%] lg:block">
            <div
              key={`${activeCase.client}-${activeCase.image}`}
              className="absolute inset-0 animate-[imageIn_.65s_ease]"
            >
              <Image
                src={activeCase.image}
                alt={`${activeCase.client} ${activeCase.category} case study`}
                fill
                priority={activeIndex === 0}
                sizes="57vw"
                className="object-cover object-center"
              />

              {/* Left fade */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/35 to-transparent" />

              {/* Bottom fade */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-[#0B1120]/10" />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-black/[0.08]" />
            </div>

            {/* Category */}

            <div className="absolute right-8 top-8 z-20">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2.5 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {activeCase.category}
                </span>
              </div>
            </div>

            {/* Floating result */}

            {activeCase.results[0] && (
              <div className="absolute bottom-8 right-8 z-20 w-[230px] rounded-[22px] border border-white/15 bg-white/[0.96] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Key Result
                  </span>

                  <TrendingUp className="h-4 w-4 text-[#34A853]" />
                </div>

                <p
                  key={`${activeCase.client}-result`}
                  className="mt-3 animate-[slideUp_.45s_ease] text-4xl font-black tracking-[-0.06em] text-[#0B1120]"
                >
                  {activeCase.results[0].value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  {activeCase.results[0].label}
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className="relative z-10 flex h-full flex-col lg:w-[49%]">
            {/* Navigation */}

            <div className="flex items-center justify-between px-6 py-6 sm:px-9 lg:px-12 lg:py-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[11px] font-semibold text-white/30">
                  {String(caseStudies.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous case study"
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next case study"
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Story */}

            <div className="flex flex-1 flex-col justify-center px-6 pb-8 sm:px-9 lg:px-12 lg:pb-12">
              {/* Category */}

              <div
                key={`${activeCase.client}-category`}
                className="animate-[slideUp_.4s_ease]"
              >
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />

                  {activeCase.category}
                </span>
              </div>

              {/* Client */}

              <div
                key={`${activeCase.client}-client`}
                className="mt-5 animate-[slideUp_.45s_ease]"
              >
                <h3 className="max-w-[560px] text-5xl font-bold tracking-[-0.06em] text-white sm:text-6xl lg:text-[68px] lg:leading-[0.95]">
                  {activeCase.client}
                </h3>
              </div>

              {/* Description */}

              <p
                key={`${activeCase.client}-description`}
                className="mt-7 max-w-[500px] animate-[slideUp_.5s_ease] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7"
              >
                {activeCase.description}
              </p>

              {/* CTA */}

              <div className="mt-8">
                {activeCase.href ? (
                  <a
                    href={activeCase.href}
                    className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#34A853] text-white transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>

                    {content.exploreLabel || "Explore Case Study"}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#34A853] text-white transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>

                    {content.exploreLabel || "Explore Case Study"}
                  </button>
                )}
              </div>
            </div>

            {/* =================================================
                DESKTOP RESULTS
            ================================================= */}

            <div className="hidden border-t border-white/10 px-12 py-6 lg:block">
              <div className="grid grid-cols-2 gap-8">
                {activeCase.results.map((result) => (
                  <div
                    key={result.label}
                    className="animate-[slideUp_.55s_ease]"
                  >
                    <p className="text-2xl font-black tracking-[-0.05em] text-white">
                      {result.value}
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE IMAGE
          ================================================= */}

          <div className="relative mx-5 mb-5 h-[280px] overflow-hidden rounded-[24px] lg:hidden">
            <div
              key={`${activeCase.client}-mobile-image`}
              className="absolute inset-0 animate-[imageIn_.6s_ease]"
            >
              <Image
                src={activeCase.image}
                alt={`${activeCase.client} ${activeCase.category} case study`}
                fill
                sizes="calc(100vw - 40px)"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            </div>

            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                {activeCase.category}
              </span>
            </div>

            {activeCase.results[0] && (
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60">
                  Key Result
                </p>

                <p className="mt-1 text-3xl font-black tracking-[-0.05em] text-white">
                  {activeCase.results[0].value}
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE RESULTS
          ================================================= */}

          <div className="grid grid-cols-2 gap-4 border-t border-white/10 px-6 py-6 lg:hidden">
            {activeCase.results.map((result) => (
              <div key={result.label}>
                <p className="text-2xl font-black tracking-[-0.05em] text-white">
                  {result.value}
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-white/35">
                  {result.label}
                </p>
              </div>
            ))}
          </div>

          {/* =================================================
              CLIENT NAVIGATION
          ================================================= */}

          <div className="relative z-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 px-6 py-5 sm:px-9 lg:absolute lg:bottom-0 lg:left-[49%] lg:right-0 lg:border-t-0 lg:px-10 lg:py-7">
            {caseStudies.map((item, index) => (
              <button
                key={item.id || item.client}
                type="button"
                onClick={() => goToCase(index)}
                className="group flex items-center gap-2"
                aria-label={`View ${item.client}`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
              >
                <span
                  className={[
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-[#EA4335]"
                      : "w-1.5 bg-white/20 group-hover:bg-white/40",
                  ].join(" ")}
                />

                <span
                  className={[
                    "text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
                    index === activeIndex
                      ? "text-white"
                      : "text-white/30 group-hover:text-white/60",
                  ].join(" ")}
                >
                  {item.client}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        {(content.bottomText || content.bottomHighlight) && (
          <div className="mt-8 flex w-full items-center justify-center text-center">
            <p className="max-w-2xl text-sm leading-6 text-[#64748B]">
              {content.bottomText}{" "}
              {content.bottomHighlight && (
                <span className="font-semibold text-[#0B1120]">
                  {content.bottomHighlight}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes imageIn {
          from {
            opacity: 0;
            transform: scale(1.04);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}