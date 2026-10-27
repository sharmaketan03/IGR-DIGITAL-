import React from "react";
import { type LucideIcon, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";

export type StruggleSolutionItem = {
  struggleTitle: string;
  struggleDesc: string;
  struggleIcon?: LucideIcon;
  solutionTitle: string;
  solutionDesc: string;
  solutionIcon?: LucideIcon;
};

export type StruggleVsSolutionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  struggleHeaderTitle?: string;
  solutionHeaderTitle?: string;
  items?: StruggleSolutionItem[];
  // If raw benefits are passed (fallback), it automatically pairs them into struggle vs solution
  benefits?: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
};

export default function StruggleVsSolutionSection({
  eyebrow,
  title,
  description,
  struggleHeaderTitle = "Your Daily Struggles",
  solutionHeaderTitle = "Our Proven Solution",
  items,
  benefits,
}: StruggleVsSolutionProps) {
  // If explicit items not provided, construct them from benefits or defaults
  let displayItems: StruggleSolutionItem[] = items || [];

  if (!displayItems || displayItems.length === 0) {
    if (benefits && benefits.length >= 2) {
      // Map benefits into paired struggles and solutions
      displayItems = [
        {
          struggleTitle: "Struggling With Flat Rankings & Slow Traffic",
          struggleDesc: "Watching competitors outrank your high-margin pages while search algorithm updates cause sudden traffic drops.",
          struggleIcon: HelpCircle,
          solutionTitle: benefits[0]?.title || "Custom Search Architecture",
          solutionDesc: benefits[0]?.description || "Targeted technical optimizations and high-converting keyword silos that compound organic growth.",
          solutionIcon: benefits[0]?.icon,
        },
        {
          struggleTitle: "Wasted Budget on Fragmented Tactics",
          struggleDesc: "Paying agencies for vanity metrics, low-quality blog posts, and backlinks that bring zero actual pipeline or revenue.",
          struggleIcon: HelpCircle,
          solutionTitle: benefits[1]?.title || "Data-Driven ROI Execution",
          solutionDesc: benefits[1]?.description || "Every sprint focuses on commercial buyer intent, customer acquisition, and measurable conversions.",
          solutionIcon: benefits[1]?.icon,
        },
        {
          struggleTitle: "Technical Roadblocks & Broken Site Crawls",
          struggleDesc: "Hidden canonical errors, sluggish Core Web Vitals, and duplicate URLs silently killing your search visibility.",
          struggleIcon: HelpCircle,
          solutionTitle: benefits[2]?.title || "Engineered Technical Precision",
          solutionDesc: benefits[2]?.description || "Sub-second load times, clean schema architecture, and 100% crawl indexation guarantees.",
          solutionIcon: benefits[2]?.icon,
        },
        {
          struggleTitle: "Lack of Clear Communication & Accountability",
          struggleDesc: "Vague monthly PDF reports with no proactive strategic direction or explanation of what was accomplished.",
          struggleIcon: HelpCircle,
          solutionTitle: benefits[3]?.title || benefits[benefits.length - 1]?.title || "Dedicated Growth Partnership",
          solutionDesc: benefits[3]?.description || benefits[benefits.length - 1]?.description || "Direct communication with senior search strategists, real-time dashboards, and bi-weekly growth syncs.",
          solutionIcon: benefits[3]?.icon || benefits[benefits.length - 1]?.icon,
        },
      ];
    } else {
      displayItems = [
        {
          struggleTitle: "Customer Issues Without End",
          struggleDesc: "Complaints you wake up to, unread messages, and returns that never end.",
          solutionTitle: "Expert Platform Management",
          solutionDesc: "We master Shopify, WooCommerce, and Amazon while fixing listings, tracking inventory, and handling orders.",
        },
        {
          struggleTitle: "Old Listings & Inventory Mess",
          struggleDesc: "Products waiting for updates, untracked stock, orders piling up, while competitors surge ahead.",
          solutionTitle: "Flawless Customer Service",
          solutionDesc: "Handling complaints, inquiries, and returns with professionalism that creates customer loyalty.",
        },
        {
          struggleTitle: "Not Enough Time for Growth",
          struggleDesc: "Caught in repetitive tasks, missing marketing campaigns, supplier deals, and product launches you know will boost revenue.",
          solutionTitle: "Marketing That Drives Results",
          solutionDesc: "Campaigns, promotions, and growth strategies executed while you focus on vision.",
        },
        {
          struggleTitle: "Burnout Is Taking Over",
          struggleDesc: "Exhausting family time, no energy left, and money left on the table as opportunities slip away.",
          solutionTitle: "Instant Team Integration",
          solutionDesc: "Quick onboarding, brand voice mastery, immediate value from day one.",
        },
      ];
    }
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs sm:text-sm font-bold tracking-widest text-[#0066FF] uppercase">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </div>

        {/* Two-Column Struggle vs Solution Grid Matching Reference Screenshot Exactly */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 max-w-6xl mx-auto">
          {/* Column 1: Daily Struggles (Dark Navy/Slate Cards with Deep Blue/Navy Icons) */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mb-6">
              {struggleHeaderTitle}
            </h3>

            <div className="space-y-3.5">
              {displayItems.map((item, idx) => {
                const IconComponent = item.struggleIcon || HelpCircle;
                return (
                  <div
                    key={`struggle-${idx}`}
                    className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#F9FAFB] p-5 sm:p-6 transition-all duration-200 hover:border-slate-200 hover:bg-[#F3F4F6] hover:shadow-sm"
                  >
                    {/* Dark Navy Square Icon Badge */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#002B49] text-white shadow-sm">
                      <IconComponent className="h-6 w-6 stroke-[2]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-[17px] font-bold text-[#111827] leading-snug">
                        {item.struggleTitle}
                      </h4>
                      <p className="mt-1.5 text-sm sm:text-[14.5px] leading-relaxed text-slate-600">
                        {item.struggleDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Proven Solution (Vibrant Blue Square Icons) */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mb-6">
              {solutionHeaderTitle}
            </h3>

            <div className="space-y-3.5">
              {displayItems.map((item, idx) => {
                const IconComponent = item.solutionIcon || CheckCircle;
                return (
                  <div
                    key={`solution-${idx}`}
                    className="flex items-start gap-4 rounded-xl border border-slate-100 bg-[#F9FAFB] p-5 sm:p-6 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm"
                  >
                    {/* Vibrant Blue Square Icon Badge */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#0066FF] text-white shadow-sm shadow-blue-500/20">
                      <IconComponent className="h-6 w-6 stroke-[2]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-[17px] font-bold text-[#111827] leading-snug">
                        {item.solutionTitle}
                      </h4>
                      <p className="mt-1.5 text-sm sm:text-[14.5px] leading-relaxed text-slate-600">
                        {item.solutionDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
