"use client";

import React from "react";
import Link from "next/link";
import { Store, Building2, Building, Check, ArrowRight, ChevronDown } from "lucide-react";

export type BannerPricingPlan = {
  name: string;
  price?: string;
  period?: string;
  description?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
};

export type BannerHeaderPricingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  plans: BannerPricingPlan[];
  footerActionText?: string;
  footerActionHref?: string;
};

export default function BannerHeaderPricing({
  eyebrow = "TRANSPARENT PRICING TIERS",
  title = "Accelerate Conversions with Clear, Predictable Plans",
  description = "Choose the right plan tailored to your store or business size with zero hidden fees or lock-ins.",
  plans,
  footerActionText = "How Our Strategy Works",
  footerActionHref = "#process",
}: BannerHeaderPricingProps) {
  if (!plans || plans.length === 0) return null;

  // Icon selector based on index or tier
  const getHeaderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Store className="h-5 w-5 text-[#0066CC]" />;
      case 1:
        return <Building2 className="h-5 w-5 text-[#0066CC]" />;
      case 2:
      default:
        return <Building className="h-5 w-5 text-[#0066CC]" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFCFF] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          {eyebrow && (
            <span className="mb-2.5 inline-block text-xs font-black uppercase tracking-wider text-[#0066CC]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1120]">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* ================================================================
            THE UNIFIED BLOCK (Deep Navy Blue Header Bar + White Cards Body)
            Exact Match to Reference Image 2
           ================================================================ */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
          
          {/* 1. TOP NAVY BLUE BANNER HEADER ROW */}
          <div className="grid grid-cols-1 divide-y divide-blue-800/40 bg-[#003B73] text-white md:grid-cols-3 md:divide-x md:divide-y-0">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-6 sm:p-7 transition-colors hover:bg-[#003366]"
              >
                <div>
                  {/* Tier Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-white tracking-wide">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-[34px] font-black text-white tracking-tight">
                      {plan.price || "Custom"}
                    </span>
                  </div>
                  <span className="text-xs text-blue-200/80 font-medium">
                    {plan.period ? `per ${plan.period.replace(/^\//, "")}` : "per month"}
                  </span>
                </div>

                {/* Light Blue Circular Badge Icon at Top-Right */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-white/20">
                  {getHeaderIcon(index)}
                </div>
              </div>
            ))}
          </div>

          {/* 2. WHITE BODY ROW WITH FEATURE BULLETS */}
          <div className="grid grid-cols-1 divide-y divide-slate-100 bg-white md:grid-cols-3 md:divide-x md:divide-y-0 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-6 sm:p-7 hover:bg-slate-50/50 transition-colors"
              >
                <div>
                  {/* Description if present */}
                  {plan.description && (
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed font-medium">
                      {plan.description}
                    </p>
                  )}

                  {/* Checkmark Bullets */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-[#0066CC] stroke-[2.5] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Bottom CTA Button inside card */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link
                    href={plan.ctaHref || "/contact"}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300/80 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#0B1120] shadow-2xs transition hover:bg-[#003B73] hover:text-white hover:border-[#003B73]"
                  >
                    <span>{plan.ctaText || "Get Started"}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 3. BOTTOM LINK STRIP */}
          <div className="border-t border-slate-200/80 bg-slate-50/80 py-3.5 px-6 text-center">
            <Link
              href={footerActionHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066CC] hover:underline"
            >
              <span>{footerActionText}</span>
              <ChevronDown className="h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* Bottom Custom Quote Helper */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Need a tailored multi-channel scope?{" "}
          <Link
            href="/contact"
            className="font-bold text-[#0066CC] hover:underline"
          >
            Talk to our senior strategists for a custom proposal.
          </Link>
        </p>

      </div>
    </section>
  );
}
