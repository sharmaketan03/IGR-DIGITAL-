"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MilestoneReview {
  brandName: string;
  brandLogoText: string;
  reviewText: string;
}

const REVIEWS: MilestoneReview[] = [
  {
    brandName: "Piramal",
    brandLogoText: "Piramal",
    reviewText:
      "IGR Digital has played a crucial role in our growth. They took the time to understand our objectives and crafted a marketing strategy that delivered strong results. The professionalism and proactive communication have made them a reliable partner and we are looking forward to what future results will bring!",
  },
  {
    brandName: "Bajaj Capital",
    brandLogoText: "BAJAJ",
    reviewText:
      "Their data-driven digital campaigns helped us scale organic acquisition by 340% within 6 months. Exceptional team transparency, rapid technical implementation, and trustworthy reporting.",
  },
  {
    brandName: "ICICI Bank",
    brandLogoText: "ICICI Bank",
    reviewText:
      "Consistent pipeline growth and conversion rate improvements across high-intent financial keywords. Truly one of the best enterprise SEM & growth agencies we have partnered with.",
  },
];

export default function ContactAuthoritySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching screenshot */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="!text-[22px] sm:!text-[28px] md:!text-[32px] font-extrabold tracking-tight text-[#0B1120]">
            We Create Authority And Reputation Like Never Before
          </h2>
        </div>

        {/* Container Box */}
        <div className="rounded-2xl bg-white p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

            {/* Left Box: Milestones Title + Red Button */}
            <div className="lg:col-span-5 xl:col-span-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1120] leading-snug">
                Milestones Unboxed With Our Expertise
              </h3>

              <div className="mt-6">
                <a
                  href="#contact-form-box"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E61F48] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#E61F48]/30 transition hover:bg-[#d0193e] hover:-translate-y-0.5"
                >
                  Talk To Our Expert
                </a>
              </div>
            </div>

            {/* Right Box: White Card with Logo, Review Quote & Carousel Controls */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="relative rounded-xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
                {/* Brand Logo Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-1 bg-[#E61F48] rounded-full" />
                  <span className="text-lg font-bold tracking-tight text-slate-900">
                    {current.brandName}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed min-h-[90px]">
                  {current.reviewText}
                </p>

                {/* Bottom Carousel Arrow Controls matching screenshot */}
                <div className="mt-4 flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={prevReview}
                    aria-label="Previous milestone review"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-black transition"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    aria-label="Next milestone review"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-[#E61F48] hover:bg-rose-50 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
