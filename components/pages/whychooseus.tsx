import React from "react";
import { type LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type WhyChooseUsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  benefits: Benefit[];
};

export default function WhyChooseUs({
  eyebrow = "Why Choose Us",
  title = "A smarter way to grow your business",
  description = "We combine strategy, technology, and measurable execution to help businesses grow with confidence.",
  benefits,
}: WhyChooseUsProps) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <span className="mb-4 inline-block text-sm font-semibold tracking-wide text-slate-500 uppercase">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1120] sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* Benefits Grid - Matching Reference Image */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={`${benefit.title}-${index}`}
                className="group relative flex flex-col justify-start rounded-2xl bg-white p-8 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)]"
              >
                {/* Theme-aligned Circular Icon Badge */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-google-blue text-white shadow-md shadow-google-blue/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-google-blue/35">
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#0B1120] leading-snug">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600 font-normal">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}