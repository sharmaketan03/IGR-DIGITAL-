"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Search,
  ShoppingCart,
  Link2,
  ShieldCheck,
  Zap,
  Globe2,
  ExternalLink,
  Laptop,
  Check,
  Star,
  Users,
  Target,
  BarChart3,
  Award,
  ChevronRight,
} from "lucide-react";
import ReviewBadgesRow from "@/components/ui/ReviewBadges";

export type BannerVariant =
  | "ecommerce"
  | "backlinks"
  | "custom-seo"
  | "consulting"
  | "industries"
  | "case-study"
  | "growth"
  | "ppc"
  | "social"
  | "web-design";

export interface ServiceBannerProps {
  variant?: BannerVariant;
  categoryBadge?: {
    icon?: React.ReactNode;
    label: string;
    theme?: "blue" | "orange" | "purple" | "green" | "emerald" | "pink" | "dark";
  };
  headlinePrefix?: string;
  headlineHighlight?: string;
  headlineSuffix?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  ratingBadges?: boolean;
}

export default function ServicePageBanner({
  variant = "ecommerce",
  categoryBadge,
  headlinePrefix,
  headlineHighlight,
  headlineSuffix,
  description,
  features,
  ctaText = "Learn More",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref = "/audit",
  stats,
  ratingBadges = false,
}: ServiceBannerProps) {
  const [activeTab, setActiveTab] = useState<string>("shopify");

  // Determine styles & theme colors based on variant
  const getVariantDefaults = () => {
    switch (variant) {
      case "ecommerce":
        return {
          bg: "bg-gradient-to-br from-[#f8faff] via-[#f1f6fe] to-[#edf4ff]",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
          badgeIcon: <ShoppingCart className="w-3.5 h-3.5" />,
          badgeLabel: "Platform SEO",
          titlePrefix: "E-commerce SEO",
          titleHighlight: " That Boosts Your Sales",
          titleHighlightColor: "text-blue-600",
          desc: "We optimize your online store for search, improve product visibility, and help you get more qualified buyers — not just traffic.",
          bullets: [
            "Product & category optimization",
            "Conversion-focused strategies",
            "Higher rankings, more sales",
          ],
          bulletColor: "text-blue-600",
          btnBg: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25",
        };

      case "backlinks":
        return {
          bg: "bg-gradient-to-br from-[#fff9f6] via-[#fff3ed] to-[#ffede5]",
          badgeBg: "bg-orange-50 text-orange-700 border-orange-200/80",
          badgeIcon: <Link2 className="w-3.5 h-3.5" />,
          badgeLabel: "Off-Page SEO",
          titlePrefix: "Powerful Backlinks",
          titleHighlight: " for Higher Rankings",
          titleHighlightColor: "text-orange-600",
          desc: "We build high-quality backlinks, grow your brand authority, and help you rank higher with trusted sources.",
          bullets: [
            "Link building & outreach",
            "Guest posting on relevant sites",
            "Digital PR & brand mentions",
          ],
          bulletColor: "text-orange-600",
          btnBg: "bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-orange-500/25",
        };

      case "custom-seo":
        return {
          bg: "bg-gradient-to-br from-[#f6faff] via-[#eff6ff] to-[#e7f1ff]",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
          badgeIcon: <Search className="w-3.5 h-3.5" />,
          badgeLabel: "Core SEO",
          titlePrefix: "Custom SEO Strategies",
          titleHighlight: " for Long-Term Growth",
          titleHighlightColor: "text-blue-600",
          desc: "From technical to on-page, we cover every aspect of SEO to help your website rank, perform and grow sustainably.",
          bullets: [
            "Local & Enterprise SEO",
            "On-Page & Technical SEO",
            "Tailored strategies for your goals",
          ],
          bulletColor: "text-blue-600",
          btnBg: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25",
        };

      case "consulting":
        return {
          bg: "bg-gradient-to-br from-[#f4fbf7] via-[#ebf7f0] to-[#e2f3e8]",
          badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
          badgeIcon: <ShieldCheck className="w-3.5 h-3.5" />,
          badgeLabel: "Consulting",
          titlePrefix: "Expert SEO Consulting",
          titleHighlight: " for Smarter Decisions",
          titleHighlightColor: "text-emerald-700",
          desc: "Get strategic guidance from SEO experts to make informed decisions and scale your online presence faster.",
          bullets: [
            "SEO Consultancy",
            "Free Website Audit",
            "Technical SEO Audit",
          ],
          bulletColor: "text-emerald-600",
          btnBg: "bg-emerald-800 hover:bg-emerald-900 text-white shadow-emerald-700/25",
        };

      case "industries":
        return {
          bg: "bg-gradient-to-br from-[#f8f6ff] via-[#f3efff] to-[#ebe5ff]",
          badgeBg: "bg-purple-50 text-purple-700 border-purple-200/80",
          badgeIcon: <Target className="w-3.5 h-3.5" />,
          badgeLabel: "Industries",
          titlePrefix: "Industry-Specific SEO",
          titleHighlight: " for Real Business Results",
          titleHighlightColor: "text-purple-700",
          desc: "We understand every industry is unique. Our SEO strategies are tailored to your market, audience and goals.",
          bullets: [
            "For Startups",
            "For Healthcare",
            "For Real Estate",
            "View All Industries",
          ],
          bulletColor: "text-purple-600",
          btnBg: "bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-purple-600/25",
        };

      case "case-study":
        return {
          bg: "bg-gradient-to-br from-[#f5f9ff] via-[#edf4ff] to-[#e4eeff]",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
          badgeIcon: <Award className="w-3.5 h-3.5" />,
          badgeLabel: "Featured Case Study",
          titlePrefix: "From 0 to 500K",
          titleHighlight: " Organic Visits",
          titleHighlightColor: "text-blue-600",
          desc: "We helped a D2C fashion brand grow from scratch to 500K+ organic visits with a data-driven SEO strategy.",
          bullets: [
            "Complete SEO strategy",
            "Content & link building",
            "Long-term growth",
          ],
          bulletColor: "text-blue-600",
          btnBg: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25",
        };

      case "growth":
        return {
          bg: "bg-gradient-to-b from-[#f8faff] via-[#edf3fd] to-[#f4f7fc]",
          badgeBg: "bg-slate-100 text-slate-700 border-slate-300",
          badgeIcon: <TrendingUp className="w-3.5 h-3.5 text-blue-600" />,
          badgeLabel: "SEO SERVICES",
          titlePrefix: "SEO That Drives",
          titleHighlight: " Real Business Growth",
          titleHighlightColor: "text-blue-600",
          desc: "We help businesses rank higher, attract qualified traffic and turn visitors into customers with data-driven SEO strategies.",
          bullets: [],
          bulletColor: "text-blue-600",
          btnBg: "bg-[#090d16] hover:bg-[#1e293b] text-white",
        };

      case "ppc":
        return {
          bg: "bg-gradient-to-br from-[#06241a] via-[#093527] to-[#041a13]",
          badgeBg: "bg-emerald-900/60 text-emerald-300 border-emerald-700/60",
          badgeIcon: <Zap className="w-3.5 h-3.5 text-emerald-400" />,
          badgeLabel: "PPC SERVICES",
          titlePrefix: "Pay-Per-Click Advertising",
          titleHighlight: " That Delivers ROI",
          titleHighlightColor: "text-emerald-400",
          desc: "We create, manage and optimize Google Ads and paid campaigns to bring qualified leads and measurable business growth.",
          bullets: [],
          bulletColor: "text-emerald-400",
          btnBg: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold",
        };

      case "social":
        return {
          bg: "bg-gradient-to-br from-[#fff7f8] via-[#fdf2f4] to-[#fcecee]",
          badgeBg: "bg-pink-100/80 text-pink-700 border-pink-200",
          badgeIcon: <Users className="w-3.5 h-3.5 text-pink-600" />,
          badgeLabel: "SOCIAL MEDIA MARKETING",
          titlePrefix: "Build a Strong Brand",
          titleHighlight: " With Social Media",
          titleHighlightColor: "text-[#E11D48]",
          desc: "We create engaging content, manage social media campaigns and help you build a loyal community across all major platforms.",
          bullets: [],
          bulletColor: "text-pink-600",
          btnBg: "bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-pink-500/25",
        };

      case "web-design":
        return {
          bg: "bg-gradient-to-br from-[#071328] via-[#0B1A36] to-[#050D1C]",
          badgeBg: "bg-blue-950/80 text-blue-300 border-blue-800/60",
          badgeIcon: <Globe2 className="w-3.5 h-3.5 text-blue-400" />,
          badgeLabel: "WEBSITE DESIGN & DEVELOPMENT",
          titlePrefix: "High-Performing Websites",
          titleHighlight: " That Convert",
          titleHighlightColor: "text-blue-400",
          desc: "We design and develop modern, SEO-friendly websites that look great, load fast and turn visitors into customers.",
          bullets: [],
          bulletColor: "text-blue-400",
          btnBg: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25",
        };

      default:
        return {
          bg: "bg-gradient-to-br from-[#f8faff] via-[#f1f6fe] to-[#edf4ff]",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
          badgeIcon: <Sparkles className="w-3.5 h-3.5" />,
          badgeLabel: "Our Services",
          titlePrefix: "Data-Driven Marketing",
          titleHighlight: " That Delivers Results",
          titleHighlightColor: "text-blue-600",
          desc: "Scale your organic traffic, search visibility, and revenue with custom digital solutions.",
          bullets: ["Conversion-focused", "100% Data-Driven", "Guaranteed Quality"],
          bulletColor: "text-blue-600",
          btnBg: "bg-blue-600 hover:bg-blue-700 text-white",
        };
    }
  };

  const d = getVariantDefaults();
  const isDark = variant === "ppc" || variant === "web-design";

  // Shared Bottom Stats (3M+ keywords ranked | 2M+ leads generated | 10K+ happy clients)
  const defaultStats = [
    { value: "3M+", label: "keywords ranked", icon: <TrendingUp className="w-3.5 h-3.5 text-blue-600" /> },
    { value: "2M+", label: "leads generated", icon: <BarChart3 className="w-3.5 h-3.5 text-blue-600" /> },
    { value: "10K+", label: "happy clients", icon: <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> },
  ];
  const finalStats = stats || defaultStats;

  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-300 ${d.bg} ${isDark ? "text-white" : "text-slate-900"
        }`}
    >
      {/* Soft Ambient Radial Background Lights */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-8 sm:px-6 sm:pt-10 sm:pb-10 lg:px-8">
        {/* TOP ROW: Pill on Left, Big Badges on Right */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-sm transition hover:shadow w-fit">
            <span className={`inline-flex items-center gap-1.5 ${categoryBadge ? "" : d.badgeBg} rounded-full px-2.5 py-0.5`}>
              {categoryBadge?.icon || d.badgeIcon}
              <span>{categoryBadge?.label || d.badgeLabel}</span>
            </span>
          </div>

          {/* Top Right Enchanced Badges */}
          {(ratingBadges || true) && (
            <div className="shrink-0">
              <ReviewBadgesRow
                size="2xl"
                align="right"
                theme={isDark ? "dark" : "light"}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* LEFT COLUMN: Content, Bullets, CTA & Stats */}
          <div className="lg:col-span-6 xl:col-span-6 z-10">


            {/* Main Headline */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
              <span>{headlinePrefix || d.titlePrefix}</span>
              <span className={d.titleHighlightColor}>
                {headlineHighlight || d.titleHighlight}
              </span>
              {headlineSuffix && <span>{headlineSuffix}</span>}
            </h1>

            {/* Description */}
            <p className={`mt-3.5 max-w-xl text-sm leading-relaxed sm:text-base ${isDark ? "text-slate-300" : "text-slate-600"
              }`}>
              {description || d.desc}
            </p>

            {/* Feature Bullets (Style 1 from reference) */}
            {(features || d.bullets).length > 0 && (
              <ul className="mt-5 space-y-2">
                {(features || d.bullets).map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                    <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${variant === "backlinks"
                        ? "bg-orange-600 text-white"
                        : variant === "consulting"
                          ? "bg-emerald-700 text-white"
                          : variant === "industries"
                            ? "bg-purple-600 text-white"
                            : "bg-blue-600 text-white"
                      }`}>
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span className={isDark ? "text-slate-200" : "text-slate-700"}>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${d.btnBg}`}
              >
                <span>{ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {secondaryCtaText && (
                <Link
                  href={secondaryCtaHref}
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 ${isDark
                      ? "border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800"
                      : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 shadow-sm"
                    }`}
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>


            {/* Micro Stats Row (From Reference Image: 3M+ keywords, 2M+ leads, 10K+ happy clients) */}
            {!["growth", "ppc", "social", "web-design"].includes(variant) && (
              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-7 border-t border-slate-200/70 pt-5">
                {finalStats.map((st, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white shadow-xs border border-slate-200/80">
                      {st.icon || <TrendingUp className="w-3.5 h-3.5 text-blue-600" />}
                    </span>
                    <div className="leading-tight">
                      <span className="block text-xs font-extrabold text-slate-900 dark:text-white">
                        {st.value}
                      </span>
                      <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                        {st.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Realistic Interactive Graphic Mockup */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 flex justify-center lg:justify-end">

            {/* VARIANT 1: E-commerce Mockup (Laptop with Shoes Store + Shopify Floating Badge + Traffic Pill) */}
            {variant === "ecommerce" && (
              <div className="relative w-full max-w-[480px]">
                {/* Floating Metric Pill: Organic Traffic +286% */}
                <div className="absolute -top-3 right-4 z-20 flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:scale-105">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Organic Traffic</span>
                    <span className="text-sm font-black text-blue-600">+286%</span>
                  </div>
                  <div className="h-4 w-12 text-blue-500">
                    <svg viewBox="0 0 48 16" className="w-full h-full fill-none stroke-blue-500 stroke-2">
                      <path d="M1 12 Q 12 14, 24 6 T 47 2" />
                    </svg>
                  </div>
                </div>

                {/* Floating Shopify Brand Icon */}
                <div className="absolute top-1/3 -left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#95BF47] text-white shadow-xl ring-4 ring-white transition hover:rotate-6">
                  <ShoppingCart className="h-7 w-7" />
                </div>

                {/* Laptop Mockup Device Frame */}
                <div className="relative mx-auto rounded-2xl border-[5px] border-slate-800 bg-slate-900 p-1 shadow-2xl">
                  {/* Laptop Screen */}
                  <div className="overflow-hidden rounded-xl bg-white border border-slate-200">
                    {/* Browser topbar */}
                    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <div className="mx-auto flex h-4 w-40 items-center justify-center rounded bg-slate-200/80 text-[9px] text-slate-500 font-mono">
                        store.d2cbrand.com
                      </div>
                    </div>

                    {/* Storefront Content Preview */}
                    <div className="p-4 bg-gradient-to-b from-slate-50 to-white">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-800">Footwear Essentials</span>
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                          In Stock · Rank #1
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3 items-center">
                        <div className="rounded-xl bg-slate-100 p-3 flex flex-col items-center justify-center border border-slate-200/60 aspect-square">
                          <span className="text-3xl">👟</span>
                          <span className="mt-2 text-[10px] font-semibold text-slate-600">Pro Runner Elite</span>
                          <span className="text-xs font-black text-slate-900">$129.00</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full rounded bg-slate-200" />
                          <div className="h-2 w-3/4 rounded bg-slate-200" />
                          <div className="pt-2">
                            <span className="inline-block rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                              Add to Cart
                            </span>
                          </div>
                          <div className="flex items-center gap-1 pt-1 text-[10px] text-amber-500">
                            <span>★★★★★</span>
                            <span className="text-slate-400">(428)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base Bottom Notch */}
                  <div className="mx-auto h-2 w-28 rounded-b-md bg-slate-700" />
                </div>
              </div>
            )}

            {/* VARIANT 2: Powerful Backlinks Mockup */}
            {variant === "backlinks" && (
              <div className="relative w-full max-w-[480px]">
                {/* Floating Domain Authority Badge */}
                <div className="absolute -bottom-4 right-6 z-20 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Domain Authority</span>
                    <span className="text-base font-black text-orange-600">+78% Growth</span>
                  </div>
                </div>

                {/* Backlink Dashboard Card */}
                <div
                  className="rounded-3xl border border-orange-100 bg-white p-6 shadow-2xl"
                  role="img"
                  aria-label="Link building dashboard showing editorial backlinks and domain authority growth"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white">
                        <Link2 className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">Backlink Discovery Engine</span>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                      100% Do-Follow
                    </span>
                  </div>

                  {/* Publications pill badges */}
                  <div className="mt-5 space-y-2.5">
                    {[
                      { name: "Forbes", dr: "DR 92", stat: "Editorial Mention" },
                      { name: "Medium", dr: "DR 94", stat: "Contextual Link" },
                      { name: "TechCrunch", dr: "DR 93", stat: "High Authority PR" },
                    ].map((pub, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-100 hover:border-orange-200 transition">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white font-serif font-black text-xs text-slate-900 border border-slate-200">
                            {pub.name[0]}
                          </span>
                          <div>
                            <span className="block text-xs font-bold text-slate-900">{pub.name}</span>
                            <span className="block text-[10px] text-slate-500">{pub.stat}</span>
                          </div>
                        </div>
                        <span className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-black text-orange-700">
                          {pub.dr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT 3: Custom SEO Strategies Mockup (Graph + Checklist Pillars) */}
            {variant === "custom-seo" && (
              <div className="relative w-full max-w-[490px]">
                <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl">
                  {/* Header bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🔍</span>
                      <span className="text-xs font-bold text-slate-800">Organic Growth Engine</span>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                      Live Telemetry
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-12 gap-4 items-center">
                    {/* Mini Line Chart */}
                    <div className="col-span-7 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/40 p-4 border border-blue-100/80">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Search Impressions</span>
                      <div className="mt-2 text-2xl font-black text-slate-900">+420%</div>
                      {/* SVG Wave */}
                      <div className="mt-3 h-16 w-full">
                        <svg viewBox="0 0 200 60" className="w-full h-full">
                          <defs>
                            <linearGradient id="gradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,45 C40,48 60,35 90,25 C120,15 150,30 200,5 L200,60 L0,60 Z" fill="url(#gradBlue)" />
                          <path d="M0,45 C40,48 60,35 90,25 C120,15 150,30 200,5" fill="none" stroke="#2563EB" strokeWidth="3" />
                        </svg>
                      </div>
                    </div>

                    {/* SEO Pillar Checklist Pills */}
                    <div className="col-span-5 space-y-2">
                      {[
                        "Keyword Research",
                        "On-Page SEO",
                        "Technical SEO",
                        "Link Building",
                      ].map((pill, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 border border-slate-200/80 hover:border-blue-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT 4: SEO Consulting Mockup (Laptop with SEO Audit 92% Health + Checklist) */}
            {variant === "consulting" && (
              <div className="relative w-full max-w-[480px]">
                <div className="rounded-2xl border-[5px] border-slate-800 bg-slate-900 p-1 shadow-2xl">
                  <div className="rounded-xl bg-white p-4">
                    {/* Audit Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <span className="block text-xs font-extrabold text-slate-900">SEO Health Audit</span>
                        <span className="text-[10px] text-slate-400">Core Web Vitals & Indexation</span>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 font-black text-sm border-2 border-emerald-500">
                        92%
                      </div>
                    </div>

                    {/* Diagnostic List */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-2">
                        {["Technical SEO", "On-Page SEO", "Backlink Profile", "Competitor Analysis"].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-slate-700 font-medium">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl bg-emerald-50/60 p-3 border border-emerald-100 text-emerald-950 space-y-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">Outcomes</span>
                        <div className="flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Better Strategy</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Higher Rankings</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-bold">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>More Qualified Leads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto h-2 w-24 rounded-b-md bg-slate-700" />
                </div>
              </div>
            )}

            {/* VARIANT 5: Industries Cards Mockup */}
            {variant === "industries" && (
              <div className="relative w-full max-w-[490px]">
                <div className="grid grid-cols-3 gap-3">
                  {/* Startups */}
                  <div className="rounded-2xl bg-white p-3.5 text-center shadow-lg border border-purple-100 transition hover:-translate-y-1">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl">
                      🚀
                    </div>
                    <span className="mt-2.5 block text-xs font-bold text-slate-900">Startups</span>
                    <span className="text-[10px] text-purple-600 font-medium">More Visibility</span>
                  </div>

                  {/* Healthcare */}
                  <div className="rounded-2xl bg-white p-3.5 text-center shadow-lg border border-purple-100 transition hover:-translate-y-1">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                      🩺
                    </div>
                    <span className="mt-2.5 block text-xs font-bold text-slate-900">Healthcare</span>
                    <span className="text-[10px] text-blue-600 font-medium">More Patients</span>
                  </div>

                  {/* Real Estate */}
                  <div className="rounded-2xl bg-white p-3.5 text-center shadow-lg border border-purple-100 transition hover:-translate-y-1">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                      🏢
                    </div>
                    <span className="mt-2.5 block text-xs font-bold text-slate-900">Real Estate</span>
                    <span className="text-[10px] text-emerald-600 font-medium">More Inquiries</span>
                  </div>
                </div>

                <div className="mt-3 flex justify-end">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-purple-700 shadow-sm border border-purple-200 hover:bg-purple-50"
                  >
                    <span>View All Industries</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* VARIANT 6: Featured Case Study Mockup */}
            {variant === "case-study" && (
              <div className="relative w-full max-w-[490px]">
                {/* Floating 500K Metric */}
                <div className="absolute -top-3 -left-3 z-20 rounded-2xl bg-white px-4 py-2 shadow-xl border border-blue-100">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Organic Visits</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-blue-600">500K+</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">+412%</span>
                  </div>
                </div>

                {/* Floating Award Pill */}
                <div className="absolute -bottom-3 right-2 z-20 rounded-xl bg-white px-3.5 py-2 shadow-xl border border-slate-200 flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-800">D2C Fashion Brand</span>
                    <span className="block text-[10px] text-slate-400">Scale to 8-Figures · 2025</span>
                  </div>
                </div>

                {/* Laptop with Graph */}
                <div className="rounded-2xl border-[5px] border-slate-800 bg-slate-900 p-1 shadow-2xl">
                  <div className="rounded-xl bg-white p-4">
                    <div className="h-32 w-full">
                      <svg viewBox="0 0 240 100" className="w-full h-full">
                        <defs>
                          <linearGradient id="caseStudyGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,85 Q 50,80 90,60 T 170,30 T 240,8 L240,100 L0,100 Z" fill="url(#caseStudyGrad)" />
                        <path d="M0,85 Q 50,80 90,60 T 170,30 T 240,8" fill="none" stroke="#2563EB" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                  <div className="mx-auto h-2 w-24 rounded-b-md bg-slate-700" />
                </div>
              </div>
            )}

            {/* VARIANT 7: Full Growth Hub Mockup (Organic Traffic 245K + 85% Rankings) */}
            {variant === "growth" && (
              <div className="relative w-full max-w-[490px]">
                <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-blue-50/70 p-3.5 border border-blue-100">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Organic Traffic</span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900">245K</span>
                        <span className="text-xs font-bold text-emerald-600">↑ +150%</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-emerald-50/70 p-3.5 border border-emerald-100">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Top 3 Rankings</span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900">+85%</span>
                        <span className="text-xs font-bold text-emerald-600">↑ Gain</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["SEO Audit", "Technical SEO", "Link Building", "Conversion CRO"].map((tag, i) => (
                      <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT 8: PPC Google Ads Mockup (Dark Modern Smartphone with Google Sponsored Ad) */}
            {variant === "ppc" && (
              <div className="relative w-full max-w-[460px]">
                <div className="rounded-3xl border border-emerald-800/50 bg-[#0d2e23] p-5 shadow-2xl">
                  {/* Metric stats row */}
                  <div className="grid grid-cols-3 gap-2 pb-4 border-b border-emerald-800/40 text-center">
                    <div>
                      <span className="block text-base font-black text-emerald-400">+300%</span>
                      <span className="text-[10px] text-emerald-200">Average ROI</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-emerald-400">-40%</span>
                      <span className="text-[10px] text-emerald-200">Lower CPA</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-emerald-400">+200%</span>
                      <span className="text-[10px] text-emerald-200">Qualified Leads</span>
                    </div>
                  </div>

                  {/* Smartphone Simulation Frame */}
                  <div className="mt-4 mx-auto max-w-[280px] rounded-2xl bg-slate-900 p-3 border-2 border-slate-700 shadow-xl">
                    <div className="rounded-xl bg-white p-3 text-slate-900 text-left">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                        <span className="rounded bg-amber-400 px-1 py-0.2 text-[9px] text-slate-900 font-extrabold">Sponsored</span>
                        <span>www.yourwebsite.com</span>
                      </div>
                      <div className="mt-1 text-xs font-black text-blue-700">
                        Your Business — Get More Customers Today
                      </div>
                      <p className="mt-1 text-[10px] leading-tight text-slate-600">
                        High-intent search campaign with optimized ad copy and targeted landing pages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT 9: Social Media Mockup (Mobile Feed Preview) */}
            {variant === "social" && (
              <div className="relative w-full max-w-[460px]">
                <div className="rounded-3xl border border-pink-200/80 bg-white p-5 shadow-2xl">
                  <div className="grid grid-cols-3 gap-2 pb-4 border-b border-slate-100 text-center">
                    <div>
                      <span className="block text-base font-black text-[#E11D48]">+250%</span>
                      <span className="text-[10px] text-slate-500">Engagement</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-[#E11D48]">+180%</span>
                      <span className="text-[10px] text-slate-500">Brand Reach</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-[#E11D48]">+120%</span>
                      <span className="text-[10px] text-slate-500">Social Leads</span>
                    </div>
                  </div>

                  {/* Social App Frame */}
                  <div className="mt-4 mx-auto max-w-[260px] rounded-2xl bg-slate-50 p-3 border border-slate-200 shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600" />
                        <span className="text-xs font-bold text-slate-800">yourbrand</span>
                      </div>
                      <span className="text-xs">•••</span>
                    </div>
                    <div className="mt-2 aspect-square rounded-xl bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 flex items-center justify-center text-4xl">
                      📸
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm text-slate-700">
                      <span>❤️ 1.4K</span>
                      <span>💬 284</span>
                      <span>🚀 Share</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT 10: Web Design Mockup */}
            {variant === "web-design" && (
              <div className="relative w-full max-w-[480px]">
                <div className="rounded-3xl border border-blue-900/60 bg-[#09162e] p-5 shadow-2xl">
                  <div className="grid grid-cols-3 gap-2 pb-4 border-b border-blue-900/50 text-center">
                    <div>
                      <span className="block text-base font-black text-blue-400">+90%</span>
                      <span className="text-[10px] text-slate-300">UX Score</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-blue-400">+70%</span>
                      <span className="text-[10px] text-slate-300">Conversions</span>
                    </div>
                    <div>
                      <span className="block text-base font-black text-blue-400">100%</span>
                      <span className="text-[10px] text-slate-300">SEO Ready</span>
                    </div>
                  </div>

                  {/* Browser Mockup */}
                  <div className="mt-4 rounded-xl border border-blue-800/80 bg-slate-950 p-2 shadow-2xl">
                    <div className="flex items-center gap-1.5 pb-2 px-1">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="rounded-lg bg-[#0F2042] p-4 text-left">
                      <span className="text-[10px] font-bold text-blue-400">DIGITAL EXPERIENCE</span>
                      <h4 className="mt-1 text-sm font-bold text-white">Modern High-Converting Website</h4>
                      <p className="mt-1 text-[11px] text-slate-300">Built with Next.js, ultra-fast load speed & clean UX.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
