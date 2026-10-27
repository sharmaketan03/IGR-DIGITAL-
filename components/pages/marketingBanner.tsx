"use client";

import React from "react";

export default function MarketingBanner() {
  return (
    <section className="w-full">
      <div
        className="
          relative 
          max-w-full
          min-h-[300px]
          overflow-hidden
          
          bg-[#033B6C]
        "
      >
        {/* Background Image & Deep Navy Overlay */}
        <div
          className="
            absolute inset-0
            bg-cover
            bg-center
            bg-no-repeat
            opacity-30
          "
          style={{
            backgroundImage:
              "url('/hero/leadBanner.png')",
          }}
        />

        {/* Deep Navy Overlay & Glow */}
        <div className="absolute inset-0 bg-[#033B6C]/85" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12)_0%,transparent_60%)]" />

        {/* Content (Full width background with max-w-7xl content container) */}
        <div className="relative z-10 mx-auto max-w-7xl flex min-h-[340px] items-center px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full max-w-[640px]">

            {/* Small Badge */}
            <div
              className="
                mb-4 inline-flex
                items-center gap-2
                rounded-full
                border border-white/25
                bg-white/10
                px-4 py-2
                backdrop-blur-md
              "
            >
              <span className="h-2 w-2 rounded-full bg-yellow-300" />

              <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                Growth driven. Results focused.
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[560px]
                text-3xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-[46px]
              "
            >
              Ready to Grow Your Business Online?
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[520px]
                text-sm
                leading-6
                text-white/85
                sm:text-base
              "
            >
              Tell us your goals and we’ll show where SEO, paid media and conversion improvements can make the biggest difference.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              <a
                href="/contact/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-yellow-300
                  px-5 py-3
                  text-sm
                  font-bold
                  text-[#111827]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-200
                "
              >
                Request a Proposal

                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-[#111827]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  ↗
                </span>
              </a>

              <a
                href="#framework"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-white/40
                  bg-white/10
                  px-5 py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                <span className="text-base">▶</span>
                See How We Work
              </a>

            </div>

          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            border border-white/15
            bg-white/10
            px-5 py-2
            backdrop-blur-md
            lg:flex
          "
        >
          <span className="text-sm font-bold text-white">
            8+ Years of Results
          </span>
        </div>
      </div>
    </section>
  );
}