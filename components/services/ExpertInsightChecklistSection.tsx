"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface ExpertInsightCardProps {
  expertName?: string;
  expertRole?: string;
  expertAvatar?: string;
  companyName?: string;
  quote: string;
}

export interface ExpertInsightChecklistProps {
  eyebrow?: string;
  headlineMain: string;
  headlineHighlight: string;
  checklistItems: string[];
  expertInsight: ExpertInsightCardProps;
  className?: string;
}

export default function ExpertInsightChecklistSection({
  headlineMain,
  headlineHighlight,
  checklistItems,
  expertInsight,
  className = "",
}: ExpertInsightChecklistProps) {
  return (
    <section className={`relative w-full bg-white py-14 sm:py-18 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            MATCHING 2ND IMAGE UI:
            Container: Light blue / soft cyan tinted card (bg-[#f0f7fe])
            rounded-2xl with clean border
           ========================================================= */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-[#f0f7fe] p-7 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Column: Heading + Quote Text + Author Info */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* Bold Blue Title matching 2nd image */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0066CC] leading-snug">
                  {headlineMain} {headlineHighlight}
                </h3>

                {/* Direct Quote Body matching 2nd image */}
                <blockquote className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-[#1e293b] font-normal">
                  &ldquo;{expertInsight.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Attribution below quote */}
              <div className="mt-6 pt-4 border-t border-blue-200/50">
                <h4 className="text-sm font-bold text-[#0f172a]">
                  {expertInsight.expertName || "Kayla J."}
                </h4>
                <p className="text-xs font-medium text-[#64748b]">
                  {expertInsight.expertRole || "WebFX PPC Analyst"}
                </p>
              </div>
            </div>

            {/* Right Column: Square Portrait Card with Verified Check Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-44 sm:w-52 md:w-56 aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-md border border-blue-100">
                <Image
                  src={
                    expertInsight.expertAvatar ||
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                  }
                  alt={expertInsight.expertName || "Expert Analyst"}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 200px, 240px"
                />

                {/* Verified Blue Check Badge (Top Right Corner - exact match to 2nd image) */}
                <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0066CC] text-white shadow-sm ring-2 ring-white">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

