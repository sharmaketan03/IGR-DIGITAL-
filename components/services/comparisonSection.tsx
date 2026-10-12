
"use client";

import React from "react";
import {
  Check,
  Minus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

/* =========================================================
   TYPES
========================================================= */

export type ComparisonValue =
  | boolean
  | string
  | {
      value: string;
      type?: "positive" | "neutral" | "negative";
    };

export type ComparisonRow = {
  feature: string;
  description?: string;
  igr: ComparisonValue;
  inHouse: ComparisonValue;
  agency: ComparisonValue;
};

export type ComparisonSectionData = {
  eyebrow?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;

  columns?: {
    igr?: string;
    inHouse?: string;
    agency?: string;
  };

  rows: ComparisonRow[];

  bottomTitle?: string;
  bottomDescription?: string;

  cta?: {
    label: string;
    href: string;
  };

  note?: string;
};

/* =========================================================
   VALUE COMPONENT
========================================================= */

function ComparisonValueCell({
  value,
  highlighted = false,
}: {
  value: ComparisonValue;
  highlighted?: boolean;
}) {
  if (typeof value === "boolean") {
    if (value) {
      return (
        <div
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
            highlighted
              ? "bg-[#4285F4] text-white"
              : "bg-[#E8F0FE] text-[#4285F4]"
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={2.5} />
        </div>
      );
    }

    return (
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Minus className="h-4 w-4" />
      </div>
    );
  }

  const normalized =
    typeof value === "object" ? value.value : value;

  const type =
    typeof value === "object" ? value.type : "neutral";

  return (
    <span
      className={[
        "inline-flex max-w-[150px] items-center justify-center text-center",
        "text-sm font-medium leading-5",
        type === "positive"
          ? "text-[#4285F4]"
          : type === "negative"
            ? "text-slate-400"
            : "text-slate-600",
      ].join(" ")}
    >
      {normalized}
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ComparisonSection({
  data,
}: {
  data: ComparisonSectionData;
}) {
  const columns = {
    igr: data.columns?.igr ?? "IGR Digital",
    inHouse: data.columns?.inHouse ?? "In-House Team",
    agency: data.columns?.agency ?? "Typical Agency",
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-slate-200"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4285F4]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4285F4]/20 bg-[#E8F0FE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#4285F4]">
              <Sparkles className="h-3.5 w-3.5" />
              {data.eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl lg:text-5xl">
            {data.title}

            {data.highlightedTitle && (
              <>
                <br />
                <span className="">
                  {data.highlightedTitle}
                </span>
              </>
            )}
          </h2>

          {data.description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
              {data.description}
            </p>
          )}
        </div>

        {/* ===================================================
            DESKTOP TABLE
        =================================================== */}

        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:block">
          {/* Table Header */}

          <div className="grid grid-cols-[minmax(260px,1.5fr)_repeat(3,minmax(170px,1fr))] border-b border-[#E2E8F0]">
            <div className="flex items-center px-7 py-6">
              <span className="text-sm font-semibold text-[#64748B]">
                Marketing Capability
              </span>
            </div>

            {/* IGR */}

            <div className="relative border-x border-[#E2E8F0] bg-[#E8F0FE]/60 px-5 py-6 text-center">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#4285F4]" />

              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-bold text-[#0B1120]">
                  {columns.igr}
                </span>

                <span className="rounded-full bg-[#4285F4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Partner
                </span>
              </div>
            </div>

            {/* In-House */}

            <div className="px-5 py-6 text-center">
              <span className="text-base font-bold text-[#0B1120]">
                {columns.inHouse}
              </span>
            </div>

            {/* Agency */}

            <div className="px-5 py-6 text-center">
              <span className="text-base font-bold text-[#0B1120]">
                {columns.agency}
              </span>
            </div>
          </div>

          {/* Rows */}

          {data.rows.map((row, index) => (
            <div
              key={`${row.feature}-${index}`}
              className={`grid grid-cols-[minmax(260px,1.5fr)_repeat(3,minmax(170px,1fr))] ${
                index !== data.rows.length - 1
                  ? "border-b border-[#E2E8F0]"
                  : ""
              }`}
            >
              {/* Feature */}

              <div className="flex items-center px-7 py-5">
                <div>
                  <p className="text-sm font-semibold text-[#0B1120]">
                    {row.feature}
                  </p>

                  {row.description && (
                    <p className="mt-1 text-xs leading-5 text-[#64748B]">
                      {row.description}
                    </p>
                  )}
                </div>
              </div>

              {/* IGR */}

              <div className="flex items-center justify-center border-x border-[#E2E8F0] bg-[#E8F0FE]/30 px-5 py-5">
                <ComparisonValueCell
                  value={row.igr}
                  highlighted
                />
              </div>

              {/* In-House */}

              <div className="flex items-center justify-center px-5 py-5">
                <ComparisonValueCell value={row.inHouse} />
              </div>

              {/* Agency */}

              <div className="flex items-center justify-center px-5 py-5">
                <ComparisonValueCell value={row.agency} />
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            MOBILE / TABLET CARDS
        =================================================== */}

        <div className="mt-10 space-y-4 lg:hidden">
          {data.rows.map((row, index) => (
            <div
              key={`${row.feature}-mobile-${index}`}
              className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white"
            >
              {/* Feature */}

              <div className="border-b border-[#E2E8F0] bg-slate-50 px-5 py-4">
                <p className="text-sm font-bold text-[#0B1120]">
                  {row.feature}
                </p>

                {row.description && (
                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    {row.description}
                  </p>
                )}
              </div>

              {/* Values */}

              <div className="grid grid-cols-3 divide-x divide-[#E2E8F0]">
                {/* IGR */}

                <div className="bg-[#E8F0FE]/40 px-3 py-4 text-center">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#4285F4]">
                    {columns.igr}
                  </p>

                  <ComparisonValueCell
                    value={row.igr}
                    highlighted
                  />
                </div>

                {/* In-House */}

                <div className="px-3 py-4 text-center">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {columns.inHouse}
                  </p>

                  <ComparisonValueCell value={row.inHouse} />
                </div>

                {/* Agency */}

                <div className="px-3 py-4 text-center">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    {columns.agency}
                  </p>

                  <ComparisonValueCell value={row.agency} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            TRUST NOTE
        =================================================== */}

        {data.note && (
          <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-[#64748B]">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4285F4]" />

            <p>{data.note}</p>
          </div>
        )}

        {/* ===================================================
            CTA
        =================================================== */}

        {(data.bottomTitle || data.cta) && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="flex flex-col gap-7 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">
              <div className="max-w-2xl">
                {data.bottomTitle && (
                  <h3 className="text-xl font-bold tracking-tight text-[#0B1120] sm:text-2xl">
                    {data.bottomTitle}
                  </h3>
                )}

                {data.bottomDescription && (
                  <p className="mt-2 text-sm leading-6 text-[#64748B] sm:text-base">
                    {data.bottomDescription}
                  </p>
                )}
              </div>

              {data.cta && (
                <Link
                  href={data.cta.href}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#4285F4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3367D6] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/40 focus:ring-offset-2"
                >
                  {data.cta.label}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


  