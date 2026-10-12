"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  BarChart3,
  Rocket,
  Zap,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  MousePointerClick,
  Sparkles,
  Users,
  Play,
} from "lucide-react";
import Awards from "@/components/pages/award_section";
import TrustedBrands from "@/components/pages/trustedBrand";
import CaseStudies from "@/components/pages/caseStudy";
import { CaseStudiesBentoVariant } from "@/components/pages/CaseStudiesVariants";
import HowWeWork from "@/components/pages/process";
import TeamAbout from "@/components/pages/teamProcess";
import PricingSection from "@/components/pages/pricingsection";
import AdvancePerksSection from "@/components/pages/advancePerksSection";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import DeliverablesMatrix from "@/components/services/DeliverablesMatrix";
import { siteContent } from "@/components/Data/homeData";

const performanceChannels = [
  {
    title: "Google Ads (PPC)",
    slug: "google-ads",
    tag: "High Search Intent",
    highlight: "ROAS Focused",
    description:
      "Capture high-intent buyers the second they search. High-converting Search, Shopping, Performance Max, and YouTube campaigns tuned for direct profitability.",
    metrics: "4.8x Avg. ROAS",
    bullets: ["Performance Max & Search", "Negative Keyword Sculpting", "Conversion Rate Tracking", "A/B Landing Page Sync"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
  {
    title: "Meta Ads (FB & IG)",
    slug: "meta-ads",
    tag: "Scale & Creative",
    highlight: "Visual Discovery",
    description:
      "Scale revenue with dynamic catalog ads, UGC video creatives, and AI-driven broad audience targeting that reaches ready-to-buy consumers.",
    metrics: "3.9x Avg. ROAS",
    bullets: ["UGC & Video Creative Testing", "Lookalike & Broad Scaling", "Advantage+ Shopping Campaigns", "Retargeting Funnels"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
  {
    title: "LinkedIn Ads",
    slug: "linkedin-ads",
    tag: "B2B Lead Engine",
    highlight: "Decision Makers",
    description:
      "Engage C-suite executives, directors, and enterprise decision makers with account-based marketing (ABM) and high-quality lead generation forms.",
    metrics: "62% Qualified Leads",
    bullets: ["Job Title & Company Match", "Document & Lead Gen Forms", "ABM Account Retargeting", "Pipeline & Deal Attribution"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    tag: "Organic Moat",
    highlight: "Brand Authority",
    description:
      "Authority-building articles, data studies, and conversion-focused copy that educates your market and pulls organic buyers through your funnel.",
    metrics: "320% Traffic Growth",
    bullets: ["Topic Cluster Architecture", "Original Research & Whitepapers", "Conversion Copywriting", "Multi-Channel Distribution"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
  {
    title: "Social Media Management",
    slug: "social-media",
    tag: "Community & Retention",
    highlight: "Brand Presence",
    description:
      "Transform casual followers into brand advocates. We handle creative storytelling, short-form reels, community management, and consistent viral engagement.",
    metrics: "4.5x Engagement Rate",
    bullets: ["Short-Form Video & Reels", "Brand Voice Architecture", "Community Engagement", "Social Proof & UGC Syndication"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
  {
    title: "Omnichannel Growth Strategy",
    slug: "digital-marketing",
    tag: "Full-Funnel System",
    highlight: "Unified Stack",
    description:
      "Connect paid search, social media, and retention email loops into one cohesive growth engine that maximizes customer lifetime value (LTV).",
    metrics: "48% Lower Blended CAC",
    bullets: ["Cross-Channel Attribution", "Full-Funnel CRO Testing", "LTV & Churn Mitigation", "Weekly Executive Dashboards"],
    accent: "from-blue-600/10 to-indigo-900/5",
    border: "group-hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
  },
];

export default function DigitalMarketingLandingPage() {
  return (
    <div className="bg-[#fcfdfd] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ========================================================
          HERO SECTION — PERFORMANCE MARKETING LIGHT
      ======================================================== */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] border-b border-slate-200">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-teal-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#4285F4]">
              <span className="flex h-2 w-2 rounded-full bg-[#4285F4] animate-pulse" />
              PERFORMANCE-FIRST DIGITAL MARKETING
            </div>

            {/* Title */}
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-[#0B1120] sm:text-6xl lg:text-7xl">
              Turn Ad Spend & Content Into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                Compounding Revenue.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl">
              We engineer full-funnel digital marketing systems — connecting Google Ads, Meta Ads, high-authority content, and social media to scale businesses profitably.
            </p>

            {/* CTA Group */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0B1120] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-[#1e293b] hover:scale-[1.02]"
              >
                <span>Scale Your Revenue</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#channels"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-[#0B1120] transition hover:bg-slate-50 shadow-sm"
              >
                <span>Explore All Channels</span>
                <ArrowUpRight className="h-4 w-4 text-slate-600" />
              </Link>
            </div>

            {/* Floating KPI Cards Banner */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {[
                { value: "$45M+", label: "Client Revenue Generated" },
                { value: "4.4x", label: "Average Blended ROAS" },
                { value: "92%", label: "Client Retention Rate" },
                { value: "1.2M+", label: "High-Intent Leads Captured" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center transition hover:border-[#4285F4] hover:shadow-md"
                >
                  <p className="text-2xl font-black text-[#0B1120] sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CHANNELS GRID SECTION — CORE SERVICES
      ======================================================== */}
      <section id="channels" className="relative py-24 sm:py-28 lg:py-32 bg-[#f4f5fa] border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4285F4]">
              Our Core Growth Channels
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1120] sm:text-4xl lg:text-5xl">
              Precision Marketing. Measurable ROI.
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Select a specialized channel or deploy an integrated cross-channel growth engine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {performanceChannels.map((channel) => (
              <div
                key={channel.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4285F4] hover:shadow-xl shadow-sm"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#4285F4]">
                      {channel.tag}
                    </span>
                    <span className="text-xs font-bold text-[#4285F4]">
                      {channel.metrics}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#0B1120] group-hover:text-[#4285F4] transition-colors">
                    {channel.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {channel.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                    {channel.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4285F4]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={`/services/${channel.slug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all hover:bg-[#0B1120] hover:text-white"
                  >
                    <span>Explore {channel.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 1: Mid-Funnel Performance Marketing Banner */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow="HIGH-VELOCITY PAID ACQUISITION"
        title="Ready to Stop Wasting Ad Spend and Unlock Scalable 4x+ ROAS?"
        description="We audit your Google, Meta, and paid media funnels to identify profit leaks and launch high-converting creative engines."
        primaryCtaText="Claim Free Ad Audit"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 2ND IMAGE EXACT MATCH: 3-Pill Switcher + Mid Feature Pills + Soft Blue Tint Quote Card */}
      <DeliverablesMatrix
        pageType="ppc"
        serviceName="Digital Marketing & Performance Media"
      />


      {/* ========================================================
          ADVANCE PERKS GRID (REFERENCE SECTION)
      ======================================================== */}
      <div className="bg-[#f4f5fa]">
        <AdvancePerksSection
          headlineLine1="Advance Advertising"
          headlineHighlight="Perk That You Get From"
          headlineLine2="Our PPC & Growth Agency"
          description="We don't just hit 'publish' on your ads and walk away. At our performance agency, we believe in full-service management that covers everything—from planning your campaign to tracking every result. You won't have to sit and wonder if your ad budget is working. We're all about performance. Our strategies are tested, refined, and made to deliver real results that help your business grow. Here's a closer look at what you get:"
        />
      </div>

      {/* ========================================================
          LIGHT SECTIONS WRAPPER FOR CONTRAST
      ======================================================== */}
      <div className="bg-[#f4f5fa] text-slate-900">
        {/* Awards */}
        <div className="bg-white">
          <Awards awardscontent={siteContent.awardsContent} />
        </div>

        {/* Trusted Brands */}
        <div className="bg-[#f4f5fa]">
          <TrustedBrands trustedbrands={siteContent?.tustedBrands} />
        </div>

        {/* BANNER 2: Mid-Section Navy Enterprise Banner */}
        <UniversalCtaBanner
          variant="navy-consult"
          eyebrow="ENTERPRISE GROWTH FRAMEWORK"
          title="Turn Ad Spend Into Predictable, Compounding Company Revenue"
          description="Join 450+ high-growth brands who scaled customer acquisition with our data-driven growth squads."
          primaryCtaText="Book Strategy Session"
          primaryCtaHref="/contact"
          secondaryCtaText="Talk on WhatsApp"
          secondaryCtaHref="https://wa.me/919876543210"
        />

        {/* Case Studies (High-Performance B2B & Full-Funnel Bento Variant) */}
        <CaseStudiesBentoVariant
          studyKey="saas"
          customEyebrow="Multi-Channel Performance Case Study"
          customTitle="5.4X Enterprise Pipeline Growth Engineered Through Full-Funnel Digital Marketing"
        />

        {/* Process */}
        <div className="bg-white">
          <HowWeWork
            eyebrow="Our Marketing Protocol"
            title="From data insights to"
            highlightText="predictable scale."
            description="A rigorous testing and scaling methodology built to identify winning creatives, optimize bidding, and capture maximum market share."
          />
        </div>

        {/* Pricing */}
        <div className="bg-[#f4f5fa]">
          <PricingSection
            eyebrow="Marketing Retainers"
            title="Growth retainers designed around measurable ROI"
            description="Transparent monthly management with zero lock-in contracts and complete live dashboard access."
            plans={[
              {
                name: "Growth Ad Plan",
                price: "$750",
                period: "/month",
                description:
                  "Ideal for businesses ready to scale up to $10,000/month in ad spend across Google or Meta.",
                features: [
                  "Full ad account management & audit",
                  "Weekly creative & copy testing",
                  "Advanced GA4 conversion tracking",
                  "Bi-weekly performance review call",
                ],
                ctaText: "Launch Growth Campaign",
                ctaHref: "/contact",
              },
              {
                name: "Scale Omnichannel",
                price: "$1,450",
                period: "/month",
                popular: true,
                description:
                  "Multi-channel mastery across Paid Search, Social Ads, and Content Marketing.",
                features: [
                  "Google Ads + Meta Ads management",
                  "Custom creative & video ad production",
                  "Landing page CRO optimization",
                  "Weekly live strategy calls",
                  "Slack channel access with strategists",
                ],
                ctaText: "Start Scaling Omnichannel",
                ctaHref: "/contact",
              },
              {
                name: "Enterprise Brand",
                description:
                  "For high-volume brands spending $30K+/month requiring bespoke dedicated growth squads.",
                features: [
                  "Dedicated Growth Director & Creative Squad",
                  "Omnichannel attribution modeling",
                  "Daily ad optimization & pacing",
                  "Executive revenue dashboards",
                ],
                ctaText: "Request Enterprise Deck",
                ctaHref: "/contact",
              },
            ]}
          />
        </div>

        {/* Team */}
        <div className="bg-white">
          <TeamAbout
            eyebrow="Growth Squad"
            title="Performance marketing backed by"
            highlightText="real strategists."
            description="We are a collective of media buyers, copywriters, data analysts, and creative designers dedicated to maximizing your return on ad spend."
          />
        </div>
      </div>

      {/* ========================================================
          BOTTOM CTA HERO
      ======================================================== */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] text-center border-t border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4285F4]">
            Let’s Grow Together
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#0B1120] sm:text-5xl">
            Ready to Turn Your Ad Spend Into Predictable Revenue?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
            Schedule a free 30-minute growth strategy session. We'll audit your current ad accounts and show you the exact revenue leaks costing you money.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1120] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition hover:bg-[#1e293b] hover:scale-105"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
