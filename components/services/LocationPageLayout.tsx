"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Globe2,
  Compass,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import LocationBreadcrumbs from "./LocationBreadcrumbs";
import InternalLinksHub from "./InternalLinksHub";
import QuickMetricsBar from "./QuickMetricsBar";
import DeliverablesMatrix from "./DeliverablesMatrix";
import SprintRoadmap from "./SprintRoadmap";
import TechStackGrid from "./TechStackGrid";
import AuditQuoteWidget from "./AuditQuoteWidget";
import ReviewBadgesRow from "@/components/ui/ReviewBadges";
import TrustedBrands from "@/components/pages/trustedBrand";
import WhyChooseUs from "@/components/pages/whychooseus";
import ComparisonTable from "@/components/pages/comparison";
import HowWeWork from "@/components/pages/process";
import CaseStudies from "@/components/pages/caseStudy";
import PricingSection from "@/components/pages/pricingsection";
import TeamAbout from "@/components/pages/teamProcess";
import FAQSection from "@/components/pages/faqSection";
import BlogResourcesPreview from "@/components/pages/blogResourcesPreview";
import FinalCtaFooterStats from "@/components/pages/finalCtaStats";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import { digitalMarketingServiceData } from "@/components/Data/servicePageData";
import {
  CORE_SERVICES,
  type CountryDefinition,
  type CityDefinition,
  type ServiceDefinition,
} from "@/components/Data/locations";

interface LocationPageLayoutProps {
  country: CountryDefinition;
  city?: CityDefinition;
  service?: ServiceDefinition;
}

export default function LocationPageLayout({
  country,
  city,
  service,
}: LocationPageLayoutProps) {
  const locationName = city ? `${city.name}, ${country.shortName}` : country.name;
  const isServicePage = !!service;
  const currentService = service || CORE_SERVICES["seo"];

  // Page specific titles and headlines
  const pageTitle = isServicePage
    ? `${service.name} in ${locationName}`
    : `Digital Marketing Agency in ${locationName}`;

  const heroEyebrow = isServicePage
    ? `INTERNATIONAL ${service.shortName.toUpperCase()} SPECIALISTS · ${locationName.toUpperCase()}`
    : `GLOBAL DIGITAL GROWTH PARTNER · ${locationName.toUpperCase()}`;

  const heroHeadline = isServicePage
    ? `${service.shortName} Services Engineered for Businesses in ${locationName}`
    : `Results-Driven Digital Marketing Agency for Ambitious Brands in ${locationName}`;

  const heroDescription = isServicePage
    ? `Scale your organic pipeline and search dominance in the ${locationName} market. We combine technical rigor, localized semantic authority, and real-time conversion tracking.`
    : `More leads. Higher ROAS. Compounding organic revenue. IGR Digital delivers data-backed SEO, paid acquisition, and performance marketing for companies competing in ${locationName}.`;

  // Breadcrumbs items
  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    {
      label: country.name,
      href: `/digital-marketing-agency-${country.slug}`,
    },
  ];

  if (city) {
    breadcrumbItems.push({
      label: city.name,
      href: `/digital-marketing-agency-${city.slug}`,
    });
  }

  if (service) {
    breadcrumbItems.push({
      label: service.shortName,
      href: city
        ? `/digital-marketing-agency-${city.slug}/${service.slug}`
        : `/digital-marketing-agency-${country.slug}/${service.slug}`,
    });
  }

  // Localized market challenge points
  const localizedMarketPoints = [
    {
      title: "Market Dynamics & Competitive Density",
      description: city
        ? `${city.name} is a high-velocity business hub with concentrated commercial activity across ${city.keyIndustries.join(", ")}.`
        : country.marketOverview,
    },
    {
      title: "Local Search & Consumer Intent Behavior",
      description: city ? city.localSearchDynamics : country.localSearchBehavior,
    },
    {
      title: "PPC & Acquisition Auction Realities",
      description: country.ppcMarketDynamics,
    },
    {
      title: "Scalable B2B & E-commerce Opportunity",
      description: `${country.b2bLandscape} ${country.ecommerceLandscape}`,
    },
  ];

  // Combine default FAQs with specialized localized FAQs
  const combinedFaqs = [
    ...(service ? service.faqs : []),
    {
      question: `Why should our business in ${locationName} choose an international growth agency?`,
      answer: `IGR Digital brings international performance benchmarks, enterprise-grade tooling (Ahrefs, Semrush, Looker Studio, CAPI), and proven multi-market playbooks, offering higher technical caliber and greater agility than local boutique providers without inflated local overhead.`,
    },
    {
      question: `How do you adapt campaigns to local search intent in ${locationName}?`,
      answer: `We perform localized keyword research, analyze geographic search volumes, configure local schemas, and optimize specifically for the localized commercial queries your buyers search in ${locationName}.`,
    },
    {
      question: `What reporting and communication channels do you offer for ${country.shortName} clients?`,
      answer: `You receive 24/7 access to live Looker Studio dashboards, a dedicated Slack channel with your senior strategists, and scheduled video calls timed conveniently for ${country.name} business hours.`,
    },
  ];

  // JSON-LD Structured Data (Service + LocalBusiness / Organization)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://igrdigital.com/#organization`,
        name: "IGR Digital",
        url: "https://igrdigital.com",
        logo: "https://igrdigital.com/logo/logo.png",
        description: `International digital marketing, SEO, and performance marketing agency serving clients in ${locationName} and worldwide.`,
        areaServed: {
          "@type": city ? "City" : "Country",
          name: locationName,
        },
      },
      {
        "@type": "Service",
        name: pageTitle,
        provider: {
          "@type": "Organization",
          name: "IGR Digital",
        },
        areaServed: locationName,
        serviceType: service ? service.name : "Digital Marketing Services",
        description: heroDescription,
      },
    ],
  };

  return (
    <div className="bg-[#f4f5fa] text-slate-900">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. Breadcrumbs */}
      <LocationBreadcrumbs items={breadcrumbItems} />

      {/* 2. Hero Section - Clean Light & High Contrast */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] pt-16 pb-20 text-slate-900 border-b border-slate-200 lg:pt-20 lg:pb-24">
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Header Row: Eyebrow on left & Larger Badges on top right */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                <Globe2 className="h-3.5 w-3.5 text-[#4285F4]" />
                {heroEyebrow}
              </span>
            </div>
            <div className="shrink-0">
              <ReviewBadgesRow theme="light" size="2xl" align="right" />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1120] sm:text-5xl lg:text-6xl">
                {heroHeadline}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
                {heroDescription}
              </p>

              {/* Consultation / Audit Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <input
                  type="text"
                  placeholder="Enter your website URL (e.g. company.com)"
                  className="h-12 w-full max-w-md rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 shadow-sm"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0B1120] px-6 text-sm font-bold text-white shadow-md transition hover:bg-[#1e293b]"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>


              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Verified Performance Agency
                </span>
                <span>•</span>
                <span>Dedicated {country.shortName} Strategy Pod</span>
                <span>•</span>
                <span>No Long-Term Contracts</span>
              </div>
            </div>

            {/* Right Live Visual Simulation Card - Clean White Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-[#0B1120] uppercase tracking-wider">
                      {locationName} Market Telemetry
                    </span>
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-[#4285F4]">
                    Live Tracking
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Target Region</div>
                      <div className="text-sm font-bold text-[#0B1120] mt-0.5">{locationName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-600 font-bold">Tier-{country.tier} Market</div>
                      <div className="text-[11px] text-slate-500">{country.region}</div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Specialization Focus</div>
                      <div className="text-sm font-bold text-[#0B1120] mt-0.5">{currentService.shortName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#4285F4] font-bold">100% White-Hat</div>
                      <div className="text-[11px] text-slate-500">Audited Playbook</div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Average First-Page Velocity</div>
                      <div className="text-sm font-bold text-[#0B1120] mt-0.5">30 – 60 Days</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-600 font-bold">+284% Organic Lift</div>
                      <div className="text-[11px] text-slate-500">Verified Client Metric</div>
                    </div>
                  </div>
                </div>

                {/* Regional Testimonial Quote */}
                <div className="mt-6 rounded-2xl bg-blue-50/70 p-4 border border-blue-100">
                  <p className="text-xs italic text-slate-700 leading-relaxed">
                    &ldquo;IGR Digital took our search footprint from flat to consistent page-1 rankings across key international target queries. Their technical communication and data transparency are unmatched.&rdquo;
                  </p>
                  <p className="mt-2 text-[11px] font-bold text-[#4285F4]">
                    — Verified International Client Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Trust Metrics Bar */}
      <QuickMetricsBar
        headline={`VERIFIED PERFORMANCE BENCHMARKS · ${locationName.toUpperCase()}`}
        metrics={[
          {
            value: "284%",
            label: "Avg. Organic Traffic Lift",
            sublabel: `Client accounts scaling visibility in ${country.name}`,
            change: "+48% YoY",
            highlightColor: "green",
          },
          {
            value: "4.8x",
            label: "Direct Return on Ad Spend (ROAS)",
            sublabel: "Paid acquisition campaigns managed internationally",
            change: "+1.2x Benchmark",
            highlightColor: "blue",
          },
          {
            value: "14 Days",
            label: "Time to First Sprint Deployment",
            sublabel: "Rapid turnaround on technical fixes & quick wins",
            change: "Guaranteed SLA",
            highlightColor: "yellow",
          },
          {
            value: "94.8%",
            label: "Client Retention Rate",
            sublabel: "Long-term growth partners across 20+ countries",
            change: "Industry High",
            highlightColor: "red",
          },
        ]}
      />

      {/* 4. Trusted Brands */}
      <TrustedBrands trustedbrands={digitalMarketingServiceData.trustedBrands} />

      {/* 5. Why Businesses in {Location} Need Digital Growth (Localized Market Section) */}
      <section className="py-20 lg:py-28 bg-[#f4f5fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#34A853]">
              <Compass className="h-3.5 w-3.5 text-[#34A853]" />
              MARKET INTELLIGENCE & ACQUISITION REALITIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#16213a] sm:text-4xl lg:text-5xl">
              Why Businesses in {locationName} Require a Strategic Growth Engine
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
              Navigating search algorithms, competitive ad auctions, and modern consumer intent in {locationName} requires disciplined, data-backed execution.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {localizedMarketPoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#4285F4] font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#16213a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Top Industries Served in this Market */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4285F4]">
                  Key Sector Expertise
                </span>
                <h4 className="text-lg font-bold text-[#16213a]">
                  High-Performing Industry Verticals in {locationName}
                </h4>
              </div>
              <span className="text-xs text-slate-500">
                Tailored acquisition silos for commercial margins
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {(city ? city.keyIndustries : country.topIndustries).map((ind, i) => (
                <span
                  key={i}
                  className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#4285F4] transition cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANNER 1: Cross-Border Growth Banner */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow={`CROSS-BORDER DOMINANCE · ${locationName.toUpperCase()}`}
        title={`Accelerate Inbound Pipeline & Keyword Dominance in ${locationName}`}
        description={`Our global marketing architects craft high-ROI search campaigns, authoritative PR, and high-converting acquisition funnels tailored for businesses in ${locationName}.`}
        primaryCtaText="Claim Free Market Audit"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="WhatsApp Direct"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 6. Deliverables Matrix / Granular Scope Tabs (2nd Image Reference) */}
      <DeliverablesMatrix
        pageType="location"
        locationName={locationName}
        serviceName={service ? service.shortName : "Digital Growth"}
      />

      {/* 7. Sprint Roadmap (90-Day Execution Timeline) */}
      <SprintRoadmap
        eyebrow="TRANSPARENT 90-DAY EXECUTION TIMELINE"
        title="Predictable Sprint Milestones for"
        highlightText={locationName}
        description="Clear sprint-by-sprint transparency. From diagnostic audits in month 1 to revenue scaling in month 3."
      />

      {/* 8. Tech Stack & Enterprise Tooling Ecosystem */}
      <TechStackGrid
        eyebrow="ENTERPRISE TOOLING & INFRASTRUCTURE"
        title="Powered by the Industry's Most"
        highlightText="Sophisticated Tech Stack"
        description="Ahrefs, Semrush, Screaming Frog, Looker Studio, GA4, CAPI server telemetry, and automated fraud click protection."
      />

      {/* 9. Free Interactive Audit & Blueprint Quote Intake */}
      <AuditQuoteWidget
        eyebrow={`FREE ${locationName.toUpperCase()} GROWTH AUDIT`}
        title={`Discover What's Holding Your Website Back from Page #1 in ${locationName}`}
        description={`Enter your details to receive a 15-page diagnostic audit prepared by a senior growth strategist, customized to ${locationName} competitor density.`}
      />

      {/* 10. Transparent Pricing */}
      <PricingSection
        eyebrow={digitalMarketingServiceData.pricing.eyebrow}
        title={digitalMarketingServiceData.pricing.title}
        description={`Flexible growth retainers tailored to businesses targeting customers in ${locationName} and global markets.`}
        plans={digitalMarketingServiceData.pricing.plans}
      />

      {/* 11. Why Choose Us Benefits Grid */}
      <WhyChooseUs
        eyebrow="THE IGR DIGITAL ADVANTAGE"
        title={`Why Leading Brands in ${locationName} Partner with Us`}
        description="We eliminate vanity metrics like clicks and impressions that don't convert. Everything connects directly to commercial pipeline."
        benefits={digitalMarketingServiceData.whyChooseUs.benefits}
      />

      {/* Mid-Funnel Location Outreach Banner (Matching user reference image style) */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow={`EXPAND YOUR MARKET IN ${locationName.toUpperCase()}`}
        title={`Ready to Build Sustainable Market Authority in ${locationName}?`}
        description={`Our global marketing architects craft high-ROI search campaigns, authoritative PR, and high-converting acquisition funnels tailored for businesses in ${locationName}.`}
        primaryCtaText="Get a Free Consultation"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 12. Comparison Table (Us vs Other Agencies vs In-House) */}
      <ComparisonTable
        theme="navy"
        eyebrow="TRANSPARENT EVALUATION"
        title="How We Compare Against Typical Alternatives"
        description={`See how IGR Digital's international specialist model delivers greater velocity and technical capability than local agencies in ${locationName}.`}
        usLabel="IGR Digital"
        competitorsLabel="Local Agencies"
        inHouseLabel="In-House Hiring"
        rows={digitalMarketingServiceData.comparisonTable.rows}
      />

      {/* 13. Verified Case Studies with Real Numbers */}
      <CaseStudies content={digitalMarketingServiceData.caseStudies} />

      {/* 14. Senior Leadership & Specialist Team */}
      <TeamAbout
        eyebrow="HUMAN EXPERTISE + AI SPEED"
        title="Meet the Strategists Powering Your Growth"
        highlightText={`in ${locationName}`}
        description="You collaborate directly with experienced growth engineers, not junior account managers or offshore coordinators."
        cards={digitalMarketingServiceData.team.cards}
      />

      {/* 15. Comprehensive Localized FAQ Section */}
      <FAQSection
        eyebrow={`QUESTIONS & ANSWERS · ${locationName.toUpperCase()}`}
        title={`Frequently Asked Questions for Businesses in ${locationName}`}
        description={`Everything you need to know about our workflow, service agreements, communication cadence, and results delivery in ${locationName}.`}
        faqs={combinedFaqs}
      />

      {/* 16. Internal Linking Hub (Connected Country, City & Service Directory) */}
      <InternalLinksHub
        country={country}
        city={city}
        currentServiceSlug={service?.slug}
      />

      {/* 17. Final CTA + Big Numbers Closing Stats */}
      <FinalCtaFooterStats
        eyebrow={`ACCELERATE YOUR ${locationName.toUpperCase()} REVENUE`}
        headline={`Ready to Dominate Search & Scaled Acquisition in ${locationName}?`}
        subheadline={`Schedule a 1-on-1 strategy call with our senior growth directors. We will analyze your competitive gap in ${locationName} and provide a custom growth roadmap.`}
        primaryCtaText="Request Free Growth Blueprint"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Book a 1-on-1 Consultation"
        secondaryCtaHref="https://wa.me/919876543210"
        stats={digitalMarketingServiceData.finalCta?.stats}
      />
    </div>
  );
}
