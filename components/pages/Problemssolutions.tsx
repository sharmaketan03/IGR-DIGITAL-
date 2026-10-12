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
            PROBLEMS → SOLUTIONS
        ================================================= */}

        <div className="mt-16 border-y border-border">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={`${item.problem}-${index}`}>
                <div
                  className="
                    group
                    grid
                    gap-8
                    border-b
                    border-border
                    py-8
                    last:border-b-0
                    lg:grid-cols-[70px_1fr_80px_1fr]
                    lg:items-center
                  "
                >

                  {/* =========================================
                      NUMBER
                  ========================================= */}

                  <span className="text-sm font-semibold text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =========================================
                      PROBLEM
                  ========================================= */}

                  <div>

                    <div className="mb-3 flex items-center gap-3">

                      {Icon ? (
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-google-red/10
                            text-google-red
                          "
                        >
                          <Icon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </div>
                      ) : null}

                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        The Problem
                      </p>

                    </div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-ink
                        transition-colors
                        duration-300
                        group-hover:text-google-red
                        sm:text-2xl
                      "
                    >
                      {item.problem}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted sm:text-base">
                      {item.problemDetail}
                    </p>

                  </div>

                  {/* =========================================
                      ARROW
                  ========================================= */}

                  <div className="hidden justify-center lg:flex">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        transition-all
                        duration-300
                        group-hover:border-google-red
                        group-hover:bg-google-red
                        group-hover:text-white
                      "
                    >
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                        aria-hidden="true"
                      />
                    </div>

                  </div>

                  {/* =========================================
                      SOLUTION
                  ========================================= */}

                  <div
                    className="
                      border-l-0
                      lg:border-l
                      lg:border-border
                      lg:pl-8
                    "
                  >

                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-google-red">
                      Our Solution
                    </p>

                    <h3 className="text-xl font-bold text-ink sm:text-2xl">
                      {item.solutionTitle}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                      {item.solutionDetail}
                    </p>

                    {/* =======================================
                        STAT
                    ======================================= */}

                    {item.stat ? (
                      <div className="mt-4 flex items-center gap-2">

                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-google-green"
                          aria-hidden="true"
                        />

                        <p className="text-sm font-semibold text-google-red">
                          {item.stat}
                        </p>

                      </div>
                    ) : null}

                    {/* =======================================
                        CTA
                    ======================================= */}

                    {item.href ? (
                      <Link
                        href={item.href}
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-ink
                          transition-colors
                          hover:text-google-red
                        "
                      >
                        Explore solution

                        <ArrowUpRight
                          className="
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                          aria-hidden="true"
                        />
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