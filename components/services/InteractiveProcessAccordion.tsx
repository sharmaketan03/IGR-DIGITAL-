"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe2,
  MapPin,
  HelpCircle,
  Star,
  Search,
  BarChart3,
  Newspaper,
  Link2,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export interface AccordionProcessStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  themeColor: "blue" | "mint";
  introText: string;
  secondaryText?: string;
  checklist: string[];
  previewImage: string;
  imageAlt: string;
  statsTag?: string;
}

const DEFAULT_PROCESS_STEPS: AccordionProcessStep[] = [
  {
    id: "step-1",
    title: "Optimizing Your Website",
    icon: <Globe2 className="w-5 h-5 text-white" />,
    themeColor: "blue",
    introText:
      "We begin with complete technical foundation, mobile responsiveness, and on-page metadata optimization to make your site search-engine compliant.",
    secondaryText:
      "Our team optimizes Core Web Vitals, site speed, and structured local schema so Google can index your money-making landing pages without delay.",
    checklist: [
      "In-depth technical and crawl health inspection",
      "Title tags, meta descriptions, and header hierarchy cleanup",
      "Mobile speed tuning and Core Web Vitals optimization",
      "Local schema markup and breadcrumb integration",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Website optimization metrics preview",
    statsTag: "Speed & On-Page Score 98+",
  },
  {
    id: "step-2",
    title: "Citation Management",
    icon: <MapPin className="w-5 h-5 text-white" />,
    themeColor: "mint",
    introText:
      "We manage your business listings across top directories for consistency and accuracy. These citations are crucial for local SEO services for small businesses, helping your brand appear in local search results and boosting trust with search engines and potential customers.",
    secondaryText:
      "Our top SEO company for small businesses ensures that your NAP (name, address, and phone number) remains consistent across all platforms, avoiding ranking penalties and improving local trust signals.",
    checklist: [
      "Audit and correct inconsistent citations",
      "Submit to high-authority local directories",
      "Enhance listings with business details and media",
      "Monitor and suppress duplicate entries",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Citation and NAP directory management preview",
    statsTag: "100% NAP Consistency Guaranteed",
  },
  {
    id: "step-3",
    title: "FAQ & Blog Optimization",
    icon: <HelpCircle className="w-5 h-5 text-white" />,
    themeColor: "blue",
    introText:
      "High-intent local searches often come in the form of specific questions. We research customer questions and craft authoritative FAQ hubs and localized blog guides.",
    secondaryText:
      "This captures conversational search volume from Google SGE, Perplexity, and voice queries while establishing your brand as the local market leader.",
    checklist: [
      "Targeted local question intent research",
      "Structured FAQ schema for Google SERP rich snippets",
      "Conversion-focused hyper-local blog articles",
      "Direct internal linking to service & appointment booking pages",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Blog and FAQ content optimization",
    statsTag: "Rich Snippets Capture Rate +45%",
  },
  {
    id: "step-4",
    title: "Reviews & Reputation Management",
    icon: <Star className="w-5 h-5 text-white" />,
    themeColor: "mint",
    introText:
      "Customer reviews on Google Business Profile directly influence click-through rates and map rankings. We establish automated review capture funnels that generate authentic 5-star customer feedback.",
    secondaryText:
      "Our reputation monitoring alerts you instantly to new reviews and provides professional response templates to maintain stellar local credibility.",
    checklist: [
      "Automated SMS/Email review request triggers after completed service",
      "Google Business Profile review badge embedding on site",
      "Real-time sentiment monitoring and response workflows",
      "Spam review flagging and removal assistance",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Customer reviews and reputation dashboard",
    statsTag: "4.9+ Average Star Rating Engine",
  },
  {
    id: "step-5",
    title: "Local Search Ads",
    icon: <Search className="w-5 h-5 text-white" />,
    themeColor: "blue",
    introText:
      "Accelerate immediate qualified phone calls with Google Local Services Ads (Google Guaranteed) and localized call-only search campaigns.",
    secondaryText:
      "We connect your Google Ads account to your verified business profile to trigger ad pins directly on Google Maps when high-intent local buyers search.",
    checklist: [
      "Google Guaranteed badge verification and management",
      "Hyper-local radius and zip-code geofencing",
      "Negative keyword lists to prevent wasted ad budget",
      "Direct phone call and lead attribution tracking",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Local search ads performance preview",
    statsTag: "Up to 5.4x Call Volume Uplift",
  },
  {
    id: "step-6",
    title: "Tracking Tools Setup & Optimization",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    themeColor: "mint",
    introText:
      "You will never have to guess where your leads are coming from. We deploy Google Analytics 4, Google Search Console, and dynamic call-tracking software.",
    secondaryText:
      "Receive automated monthly Looker Studio dashboards demonstrating your real ROI: phone calls, form submissions, direction requests, and revenue generated.",
    checklist: [
      "Google Analytics 4 custom event and conversion configuration",
      "Dynamic call tracking with source attribution recording",
      "Real-time keyword position tracking across local coordinates",
      "Transparent monthly video review and executive reports",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Analytics and telemetry dashboard preview",
    statsTag: "100% Attribution Transparency",
  },
  {
    id: "step-7",
    title: "Press Release & Guest Posting",
    icon: <Newspaper className="w-5 h-5 text-white" />,
    themeColor: "blue",
    introText:
      "Build regional authority and brand buzz with syndicated digital press releases featured on credible news outlets and relevant local community portals.",
    secondaryText:
      "We secure localized media coverage and guest contributions that drive targeted referral traffic and reinforce geographic relevance signals for Google.",
    checklist: [
      "Targeted press release distribution to regional news publishers",
      "Guest editorial placement on vetted industry blogs",
      "Natural brand mentions and unlinked citation reclamation",
      "Permanent editorial dofollow backlink acquisition",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Press release and publication syndication preview",
    statsTag: "Syndicated Across 250+ Outlets",
  },
  {
    id: "step-8",
    title: "High Quality Backlinks",
    icon: <Link2 className="w-5 h-5 text-white" />,
    themeColor: "mint",
    introText:
      "Safe, contextual, and manual link outreach that increases domain rating and makes your website unbeatable in local competitive search results.",
    secondaryText:
      "Strict quality control ensures all acquired links come from legitimate, traffic-holding publications with zero private blog networks or link farms.",
    checklist: [
      "Manual relationship-based blogger outreach",
      "Contextual in-content anchor text placement",
      "Niche relevance and local geographic alignment",
      "365-day backlink replacement guarantee",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80",
    imageAlt: "High authority backlink verification",
    statsTag: "DR 50+ Vetted Publications Only",
  },
];

export interface InteractiveProcessAccordionProps {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  subtitle?: string;
  steps?: AccordionProcessStep[];
  defaultOpenId?: string;
}

export default function InteractiveProcessAccordion({
  title = "Our Step-by-Step Process as the",
  titleHighlight = "Best SEO Agency",
  titleSuffix = "for Small Businesses",
  subtitle = "Being the best SEO company for small businesses, we help them by providing customized SEO strategies that can improve their website's search engine rankings and generate more traffic. Here is how we make sure your online presence continues to grow and thrive.",
  steps = DEFAULT_PROCESS_STEPS,
  defaultOpenId = "step-2",
}: InteractiveProcessAccordionProps) {
  const [openId, setOpenId] = useState<string>(defaultOpenId);

  const toggleStep = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header (Exact Match to Reference Screenshot) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {title} <span className="text-blue-600">{titleHighlight}</span> {titleSuffix}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Vertical Accordion Stack (Exact Match to Reference Screenshot) */}
        <div className="mt-14 space-y-3.5">
          {steps.map((step) => {
            const isOpen = openId === step.id;
            const isBlue = step.themeColor === "blue";

            return (
              <div
                key={step.id}
                className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "ring-2 ring-blue-500/20 shadow-md"
                    : "hover:shadow-sm"
                }`}
              >
                {/* Accordion Bar Header */}
                <button
                  type="button"
                  onClick={() => toggleStep(step.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
                    isOpen
                      ? isBlue
                        ? "bg-[#dbeafe]" // Soft light blue
                        : "bg-[#d1fae5]" // Soft light mint/green
                      : isBlue
                      ? "bg-[#e8f1fc] hover:bg-[#deebfb]"
                      : "bg-[#e2f3ee] hover:bg-[#d5eee7]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Icon Badge */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-sm ${
                        isBlue ? "bg-blue-600" : "bg-emerald-700"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {step.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {step.statsTag && !isOpen && (
                      <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
                        {step.statsTag}
                      </span>
                    )}
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-white/60 text-slate-900" : "text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Card Content (Left Text + Right Graphic Preview) */}
                {isOpen && (
                  <div className="border-t border-slate-200/60 bg-white p-6 sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                      {/* Left Column: Descriptive Text & Checkmarks */}
                      <div className="lg:col-span-7">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {step.introText}
                        </p>

                        {step.secondaryText && (
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            {step.secondaryText}
                          </p>
                        )}

                        {/* Checklist with Orange/Red Checks */}
                        <div className="mt-6 space-y-2.5">
                          {step.checklist.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-orange-500 font-bold text-xs mt-0.5">
                                ✓
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Visual Verification / Screenshot Box */}
                      <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
                          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-xl bg-slate-100">
                            <Image
                              src={step.previewImage}
                              alt={step.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                          </div>

                          {/* Directory / Verification Pill Bar at Bottom */}
                          <div className="mt-3 flex items-center justify-between px-2 pb-1">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                              Verified Listing Proof
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                              Active & Indexed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
