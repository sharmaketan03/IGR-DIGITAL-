import Link from "next/link";
import type { ElementType } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Reveal from "@/components/ui/reveal";

/* =========================================================
   TYPES
========================================================= */

export type ProblemsSolutionItem = {
  problem: string;
  problemDetail: string;

  solutionTitle: string;
  solutionDetail: string;

  stat?: string;
  href?: string;

  /**
   * Pass any Lucide icon directly from homeData.
   *
   * Example:
   * icon: Search
   * icon: Globe
   * icon: Brain
   */
  icon?: ElementType;
};

export type ProblemsSolutionsContent = {
  eyebrow: string;
  headline: string;
  description: string;
  items: ProblemsSolutionItem[];
};

type ProblemsSolutionsProps = {
  content: ProblemsSolutionsContent;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProblemsSolutions({
  content,
}: ProblemsSolutionsProps) {
  const {
    eyebrow,
    headline,
    description,
    items,
  } = content;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <Reveal>
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-google-red sm:text-base">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {headline}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
              {description}
            </p>

          </div>
        </Reveal>

        {/* =================================================
            PROBLEMS → SOLUTIONS - 2-COLUMN ACCORDION CARDS UI
        ================================================= */}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={`${item.problem}-${index}`}>
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    justify-between
                    rounded-2xl
                    border
                    border-orange-200/80
                    bg-white
                    p-6
                    shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                    transition-all
                    duration-300
                    hover:border-orange-300
                    hover:shadow-md
                    sm:p-7
                  "
                >
                  <div>
                    {/* Header Row: Title & Toggle Circle */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                        ) : null}
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                            The Problem
                          </p>
                          <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg leading-snug">
                            {item.problem}
                          </h3>
                        </div>
                      </div>

                      {/* Top-Right Toggle Pill/Circle */}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100/90 text-slate-700 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
                        <span className="h-0.5 w-3 bg-current rounded-full" />
                      </span>
                    </div>

                    {/* Problem Detail */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {item.problemDetail}
                    </p>

                    {/* Solution Container */}
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                        Our Solution
                      </p>
                      <h4 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                        {item.solutionTitle}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {item.solutionDetail}
                      </p>
                    </div>
                  </div>

                  {/* Footer: Stat & CTA */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    {item.stat ? (
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{item.stat}</span>
                      </div>
                    ) : (
                      <div />
                    )}

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition hover:text-blue-700"
                      >
                        <span>Explore solution</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}