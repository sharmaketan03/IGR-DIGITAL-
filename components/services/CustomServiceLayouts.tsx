"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  TrendingUp,
  Target,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Layers,
  Sparkles,
  Search,
} from "lucide-react";
import CaseStudies from "@/components/pages/caseStudy";
import {
  CaseStudiesBentoVariant,
  CaseStudiesShowcaseVariant,
  CaseStudiesInteractiveTabsVariant,
} from "@/components/pages/CaseStudiesVariants";
import PricingSection from "@/components/pages/pricingsection";
import TrustedBrands from "@/components/pages/trustedBrand";
import ServiceContent from "@/components/pages/serviceContent";
import TeamAbout from "@/components/pages/teamProcess";
import FAQSection from "@/components/pages/faqSection";
import BlogResourcesPreview from "@/components/pages/blogResourcesPreview";
import FinalCtaFooterStats from "@/components/pages/finalCtaStats";
import ComparisonTable from "@/components/pages/comparison";
import WhyChooseUs from "@/components/pages/whychooseus";
import QuickMetricsBar from "@/components/services/QuickMetricsBar";
import DeliverablesMatrix from "@/components/services/DeliverablesMatrix";
import DeliverablesCardsGrid from "@/components/services/DeliverablesCardsGrid";
import SprintRoadmap from "@/components/services/SprintRoadmap";
import TechStackGrid from "@/components/services/TechStackGrid";
import AuditQuoteWidget from "@/components/services/AuditQuoteWidget";
import ServicePageBanner from "@/components/services/ServicePageBanner";
import InteractiveHeroBanner from "@/components/services/InteractiveHeroBanner";
import AdvancePerksSection from "@/components/pages/advancePerksSection";
import HowWeWork from "@/components/pages/process";
import EditorialCalloutSection from "@/components/pages/EditorialCalloutSection";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import InteractiveProcessAccordion from "@/components/services/InteractiveProcessAccordion";
import type { ServicePageData } from "@/components/Data/servicePageData";

interface CustomServiceLayoutProps {
  data: ServicePageData;
  slug: string;
}

/* =========================================================================
   1. PLATFORM SEO (Ecommerce, Shopify, WordPress, Webflow)
   Vibe: Tech & Conversion focused, Product Siloing, Schema & Architecture
   ========================================================================= */
export function PlatformSeoLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#fcfdfd] text-slate-900">
      <ServicePageBanner
        variant="ecommerce"
        categoryBadge={{
          label: data.hero.eyebrow,
          theme: "blue",
        }}
        headlinePrefix={data.hero.headline.includes("That") ? data.hero.headline.split("That")[0] : data.hero.headline}
        headlineHighlight={data.hero.headline.includes("That") ? `That ${data.hero.headline.split("That")[1]}` : ""}
        description={data.hero.paragraph}
        ctaText={data.hero.ctaLabel || "Learn More"}
        ctaHref="/contact"
      />

      {/* Real Impact Metrics Cards (Matching Second Image Reference) */}
      <QuickMetricsBar />

      {/* Brands Bar */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* Unique Benefit Cards for Platform */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {data.whyChooseUs.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {data.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              {data.whyChooseUs.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyChooseUs.benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-7 transition hover:border-blue-500 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Technical Process Workflow (Using responsive page-specific steps & styling) */}
      <HowWeWork
        eyebrow={data.process.eyebrow}
        title={data.process.title}
        highlightText={data.process.highlightText}
        description={data.process.description}
        steps={data.process.steps}
      />

      {/* Deliverables Matrix / Granular Scope Tabs */}
      <DeliverablesMatrix pageType="ecommerce" serviceName={data.hero.eyebrow} />

      {/* Sprint Roadmap / 90-Day Execution Timeline */}
      <SprintRoadmap />

      {/* Tech Stack & Enterprise Tooling Ecosystem */}
      <TechStackGrid />

      {/* Free Interactive Audit & Blueprint Quote Intake */}
      <AuditQuoteWidget />

      {/* Pricing */}
      <PricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        plans={data.pricing.plans}
      />

      {/* Deep-Dive Content */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* Case Studies (Tailored Showcase style matching Ecommerce Blue Hero) */}
      <CaseStudiesShowcaseVariant studyKey="ecommerce" theme="blue" />

      {/* Editorial Intelligence Callout Section (Matching Reference Style) */}
      <EditorialCalloutSection
        theme="navy"
        badge="STRATEGIC E-COMMERCE SEO ADVANTAGE"
        title="Why Modern Platform SEO Is a Must for"
        titleHighlight="Your Online Store Today"
        introParagraph="The rapid evolution of consumer shopping habits and AI-driven search means online stores cannot rely solely on basic product listings. Scaling sustainably requires deep technical architecture and search authority."
        bulletPoints={[
          "Over 68% of high-intent shoppers begin their product discovery directly through commercial search engines.",
          "Faceted navigation optimization prevents index bloat while indexing high-intent product filters for Google.",
          "Rich Product Schema and Merchant Center integration boost organic click-through rates by up to 35%.",
          "Bespoke internal linking structures route domain authority directly to high-margin collection pages.",
        ]}
        secondaryParagraphs={[
          "Search-driven platform optimization opens an organic revenue channel that compounds over time without recurring cost-per-click expenses. It is not just about rankings—it is about turning search impressions into confirmed checkout orders.",
          "By aligning product schemas with conversational search assistants and traditional crawlers, your storefront secures prime visibility across every touchpoint in the modern buyer journey.",
        ]}
        conclusion="Modern e-commerce SEO is hybrid: engineered for Google crawlers, optimized for LLM answer engines, and designed for customer conversion."
        ctaText="Request Free Store SEO Blueprint"
        ctaHref="/contact"
      />

      {/* Mid-Funnel Conversion Banner */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow="READY TO SCALE YOUR STORE REVENUE?"
        title="Turn High-Intent Searchers Into Confirmed Customers"
        highlightText="With Data-Driven SEO."
        description="Stop leaving search revenue on the table. Our technical specialists audit and execute search strategies built for high store conversion."
        primaryCtaText="Get a Free Consultation"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* Comparison Table */}
      <ComparisonTable
        theme="blue"
        eyebrow={data.comparisonTable.eyebrow}
        title={data.comparisonTable.title}
        description={data.comparisonTable.description}
        usLabel={data.comparisonTable.usLabel}
        competitorsLabel={data.comparisonTable.competitorsLabel}
        inHouseLabel={data.comparisonTable.inHouseLabel}
        rows={data.comparisonTable.rows}
      />

      {/* Team Section */}
      <TeamAbout
        eyebrow={data.team.eyebrow}
        title={data.team.title}
        highlightText={data.team.highlightText}
        description={data.team.description}
        cards={data.team.cards}
        footerTitle={data.team.footerTitle}
        footerDescription={data.team.footerDescription}
        ctaText={data.team.ctaText}
        ctaHref={data.team.ctaHref}
      />

      {/* FAQs Section */}
      <FAQSection
        eyebrow={data.faqs?.eyebrow}
        title={data.faqs?.title}
        description={data.faqs?.description}
        faqs={data.faqs?.faqs}
      />

      {/* Blog & Resources Preview */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles}
      />

      {/* Final CTA + Big Numbers Closing Stats */}
      <FinalCtaFooterStats
        eyebrow={data.finalCta?.eyebrow}
        headline={data.finalCta?.headline}
        subheadline={data.finalCta?.subheadline}
        primaryCtaText={data.finalCta?.primaryCtaText}
        primaryCtaHref={data.finalCta?.primaryCtaHref}
        secondaryCtaText={data.finalCta?.secondaryCtaText}
        secondaryCtaHref={data.finalCta?.secondaryCtaHref}
        stats={data.finalCta?.stats}
      />
    </div>
  );
}

/* =========================================================================
   2. OFF-PAGE & LINK BUILDING LAYOUT
   Vibe: High Domain Authority, Strict Editorial Integrity, Clean Minimalist UI
   ========================================================================= */
export function OffPageSeoLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#f8fafc] text-slate-900">
      {/* Replaced with design matching image reference: Powerful Backlinks */}
      <ServicePageBanner
        variant="backlinks"
        categoryBadge={{
          label: data.hero.eyebrow,
          theme: "orange",
        }}
        headlinePrefix={data.hero.headline.includes("That") ? data.hero.headline.split("That")[0] : data.hero.headline}
        headlineHighlight={data.hero.headline.includes("That") ? `That ${data.hero.headline.split("That")[1]}` : ""}
        description={data.hero.paragraph}
        ctaText="Learn More"
        ctaHref="/contact"
      />

      {/* Real Impact Metrics Cards (Matching Second Image Reference) */}
      <QuickMetricsBar
        metrics={[
          {
            value: "+310%",
            title: "Top-3 Keyword Gains",
            description: "Contextual backlinks directed strategically to target URLs create authoritative surges across competitive queries.",
          },
          {
            value: "+18 DR",
            title: "Average Domain Rating Increase",
            description: "Editorial links from vetted publications increase site-wide domain authority within the first 6 months.",
          },
          {
            value: "100%",
            title: "Manual Outreach & White-Hat",
            description: "Zero PBNs or link farms. We execute personalized journalist pitching and genuine niche editorial relationships.",
          },
          {
            value: "+88%",
            title: "Organic Traffic Growth",
            description: "Compounding referral and organic search traffic uplift across commercial landing pages.",
          },
        ]}
      />

      {/* Comparison vs Spam Backlink Brokers */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              {data.comparisonTable.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              {data.comparisonTable.title}
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              {data.comparisonTable.description}
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-sm font-bold text-slate-900">Link Quality Metric</th>
                  <th className="p-4 text-center text-sm font-bold text-sky-600 bg-sky-50">IGR Digital</th>
                  <th className="p-4 text-center text-sm font-bold text-slate-600">Link Brokers / PBNs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {data.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-800">{row.feature}</td>
                    <td className="p-4 text-center font-bold text-emerald-600 bg-sky-50/30">
                      ✓ Guaranteed
                    </td>
                    <td className="p-4 text-center text-slate-400 font-medium">
                      {typeof row.competitors === "string" ? row.competitors : "✕ Low Quality"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Outreach Roadmap (Clean 4-step modern process) */}
      <HowWeWork
        eyebrow={data.process.eyebrow}
        title={data.process.title}
        highlightText={data.process.highlightText}
        description={data.process.description}
        steps={data.process.steps}
      />

      {/* Granular Scope Matrix */}
      <DeliverablesMatrix pageType="backlinks" serviceName="High-Authority Link Acquisition & Digital PR" />

      {/* 90-Day Execution Timeline */}
      <SprintRoadmap />

      {/* Tooling & Intelligence Suite */}
      <TechStackGrid />

      {/* Free Interactive Audit / Proposal Intake */}
      <AuditQuoteWidget />

      {/* Pricing */}
      <PricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        plans={data.pricing.plans}
      />

      {/* Service Content */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* Case Studies (Authority & Content SEO Benchmark matching Orange Hero) */}
      <CaseStudiesShowcaseVariant studyKey="content" theme="orange" customEyebrow="Off-Page Editorial Case Study" />

      {/* Mid-Funnel Outreach Banner (Matching user reference image exactly) */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow="HIGH-AUTHORITY EDITORIAL ACQUISITION"
        title="Ready to Build Authority Through Blogger Outreach & High-Tier Backlinks?"
        description="Our link outreach specialists secure contextual backlinks from trusted publishers that improve rankings and drive long-term SEO growth."
        primaryCtaText="Get a Free Consultation"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* Comparison Table */}
      <ComparisonTable
        theme="orange"
        eyebrow={data.comparisonTable.eyebrow}
        title={data.comparisonTable.title}
        description={data.comparisonTable.description}
        usLabel={data.comparisonTable.usLabel}
        competitorsLabel={data.comparisonTable.competitorsLabel}
        inHouseLabel={data.comparisonTable.inHouseLabel}
        rows={data.comparisonTable.rows}
      />

      {/* Team Section */}
      <TeamAbout
        eyebrow={data.team.eyebrow}
        title={data.team.title}
        highlightText={data.team.highlightText}
        description={data.team.description}
        cards={data.team.cards}
        footerTitle={data.team.footerTitle}
        footerDescription={data.team.footerDescription}
        ctaText={data.team.ctaText}
        ctaHref={data.team.ctaHref}
      />

      {/* FAQs Section */}
      <FAQSection
        eyebrow={data.faqs?.eyebrow}
        title={data.faqs?.title}
        description={data.faqs?.description}
        faqs={data.faqs?.faqs}
      />

      {/* Blog & Resources Preview */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles}
      />

      {/* Final CTA + Big Numbers Closing Stats */}
      <FinalCtaFooterStats
        eyebrow={data.finalCta?.eyebrow}
        headline={data.finalCta?.headline}
        subheadline={data.finalCta?.subheadline}
        primaryCtaText={data.finalCta?.primaryCtaText}
        primaryCtaHref={data.finalCta?.primaryCtaHref}
        secondaryCtaText={data.finalCta?.secondaryCtaText}
        secondaryCtaHref={data.finalCta?.secondaryCtaHref}
        stats={data.finalCta?.stats}
      />
    </div>
  );
}

/* =========================================================================
   3. LOCAL SEO LAYOUT
   Vibe: Map Focus, Google Business Profile (GBP), Geo-grid Pinpoint visuals
   ========================================================================= */
export function LocalSeoLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#fcfdfd] text-slate-900">
      {/* Geo-Grid Visual Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-[#07111e] pt-28 pb-20 text-white lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute -top-40 right-10 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                📍 {data.hero.eyebrow}
              </span>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {data.hero.headline}
              </h1>

              <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
                {data.hero.paragraph}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-emerald-400"
                >
                  <span>Claim #1 Local 3-Pack</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Google Map 3-Pack Graphic Simulation */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Google Maps Simulation
                  </span>
                  <span className="text-xs text-slate-400">Geo-Grid Active</span>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { rank: "#1", name: "Your Business", rating: "5.0 ★★★★★ (184)", status: "Top 3-Pack Leader", active: true },
                    { rank: "#2", name: "Local Competitor A", rating: "4.4 ★★★★☆ (42)", status: "Below Your Profile", active: false },
                    { rank: "#3", name: "Local Competitor B", rating: "4.1 ★★★★☆ (18)", status: "Below Your Profile", active: false },
                  ].map((store, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl p-4 transition ${store.active
                        ? "bg-emerald-500/20 border border-emerald-400/40 text-white"
                        : "bg-white/5 border border-white/5 text-slate-400"
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{store.name}</span>
                        <span className={`text-xs font-black ${store.active ? "text-emerald-400" : "text-slate-500"}`}>
                          {store.rank} Rank
                        </span>
                      </div>
                      <p className="text-xs text-amber-300 mt-1">{store.rating}</p>
                      <p className="text-[11px] text-slate-300 mt-1">{store.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              {data.whyChooseUs.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              {data.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              {data.whyChooseUs.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyChooseUs.benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 hover:border-emerald-500 hover:bg-white transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Interactive Process Accordion (Exact Match to Reference Screenshot) */}
      <InteractiveProcessAccordion
        title="Our Step-by-Step Process as the"
        titleHighlight="Best SEO Agency"
        titleSuffix="for Small Businesses"
        subtitle="Being the best SEO company for small businesses, we help them by providing customized SEO strategies that can improve their website's search engine rankings and generate more traffic. Here is how we make sure your online presence continues to grow and thrive."
        defaultOpenId="step-2"
      />

      {/* Free Local Audit Quote Widget */}
      <AuditQuoteWidget />

      {/* Local Pricing */}
      <PricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        plans={data.pricing.plans}
      />

      {/* Local Content & FAQ */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* Case Studies (Local Search & Google Maps Benchmark matching Dark Emerald Hero) */}
      <CaseStudiesShowcaseVariant studyKey="local" theme="emerald" customEyebrow="Multi-Location Local SEO Case Study" />

      {/* Mid-Funnel Local SEO Growth Banner (Dark Emerald theme) */}
      <UniversalCtaBanner
        variant="dark-emerald"
        eyebrow="DOMINATE LOCAL SEARCH & GOOGLE MAPS"
        title="Ready to Rank in Google's Top 3-Pack and Attract Local Customers?"
        description="We optimize your Google Business Profile, geo-citations, and local landing pages so nearby customers find you before your competitors."
        primaryCtaText="Claim Local SEO Audit"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* Comparison Table */}
      <ComparisonTable
        theme="emerald"
        eyebrow={data.comparisonTable.eyebrow}
        title={data.comparisonTable.title}
        description={data.comparisonTable.description}
        usLabel={data.comparisonTable.usLabel}
        competitorsLabel={data.comparisonTable.competitorsLabel}
        inHouseLabel={data.comparisonTable.inHouseLabel}
        rows={data.comparisonTable.rows}
      />

      {/* Team Section */}
      <TeamAbout
        eyebrow={data.team.eyebrow}
        title={data.team.title}
        highlightText={data.team.highlightText}
        description={data.team.description}
        cards={data.team.cards}
        footerTitle={data.team.footerTitle}
        footerDescription={data.team.footerDescription}
        ctaText={data.team.ctaText}
        ctaHref={data.team.ctaHref}
      />

      {/* FAQs Section */}
      <FAQSection
        eyebrow={data.faqs?.eyebrow}
        title={data.faqs?.title}
        description={data.faqs?.description}
        faqs={data.faqs?.faqs}
      />

      {/* Blog & Resources Preview */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles}
      />

      {/* Final CTA + Big Numbers Closing Stats */}
      <FinalCtaFooterStats
        eyebrow={data.finalCta?.eyebrow}
        headline={data.finalCta?.headline}
        subheadline={data.finalCta?.subheadline}
        primaryCtaText={data.finalCta?.primaryCtaText}
        primaryCtaHref={data.finalCta?.primaryCtaHref}
        secondaryCtaText={data.finalCta?.secondaryCtaText}
        secondaryCtaHref={data.finalCta?.secondaryCtaHref}
        stats={data.finalCta?.stats}
      />
    </div>
  );
}

/* =========================================================================
   4. TECHNICAL AUDIT & CONSULTING LAYOUT
   Vibe: Code Diagnostics, Engineering Excellence, Dark & Monospace Elements
   ========================================================================= */
export function TechnicalAuditLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#0b101b] text-white">
      {/* Interactive Diagnostic Console Hero matching high-end technical audit design */}
      <InteractiveHeroBanner
        pageType="technical-audit"
        eyebrow={data.hero.eyebrow}
        headlineTitle={data.hero.headline.includes("That") ? data.hero.headline.split("That")[0] : data.hero.headline}
        headlineHighlight={data.hero.headline.includes("That") ? `That ${data.hero.headline.split("That")[1]}` : ""}
        description={data.hero.paragraph}
        primaryCtaText={data.hero.ctaLabel || "Get Your Technical Audit Blueprint"}
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Talk to a Technical Specialist"
        secondaryCtaHref="/contact"
      />

      {/* Real Impact Metrics Cards (Matching Second Image Reference) */}
      <QuickMetricsBar
        metrics={[
          {
            value: "92%",
            title: "Average Technical Health Score",
            description: "Eliminating crawl anomalies, duplicate canonicals, and Core Web Vital bottlenecks across JavaScript rendering.",
          },
          {
            value: "-60%",
            title: "Page Load Time Reduction",
            description: "Deep server-side caching, image payload compression, and asset deferral optimize time-to-first-byte (TTFB).",
          },
          {
            value: "+100%",
            title: "Indexation Parity",
            description: "Ensuring 100% of high-intent commercial endpoints are cleanly crawled and indexed by search bots.",
          },
          {
            value: "+75%",
            title: "Crawl Efficiency Uplift",
            description: "Optimized XML sitemaps and faceted URL handling streamline Googlebot crawl budget allocation.",
          },
        ]}
      />

      {/* Technical Process Steps */}
      <section className="py-20 bg-[#0f172a] border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Engineering Protocol
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {data.process.title} {data.process.highlightText}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {data.process.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-cyan-400 font-bold">{step.number}</span>
                  <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-1 text-[11px] text-slate-500">
                  {step.details.map((d, i) => (
                    <div key={i}>• {d}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing in Contrast */}
      <div className="bg-white text-slate-950">
        {/* Technical Deliverables Scope Grid */}
        <DeliverablesCardsGrid
          eyebrow="TECHNICAL AUDIT & DIAGNOSTIC SCOPE"
          title="Everything Included in Our"
          highlightText="Technical Architecture"
          description="From deep server log inspections to Core Web Vitals optimization and clean JavaScript hydration."
        />

        {/* Technical 90-Day Execution Timeline */}
        <SprintRoadmap />

        {/* Diagnostic Spiders & Analysis Suite */}
        <TechStackGrid />

        {/* Free Code & Architecture Audit Request */}
        <AuditQuoteWidget />

        <PricingSection
          eyebrow={data.pricing.eyebrow}
          title={data.pricing.title}
          description={data.pricing.description}
          plans={data.pricing.plans}
        />

        {/* Deep Content */}
        <ServiceContent
          eyebrow={data.serviceContent.eyebrow}
          title={data.serviceContent.title}
          intro={data.serviceContent.intro}
          content={data.serviceContent.content}
          sidebarTitle={data.serviceContent.sidebarTitle}
          sidebarDescription={data.serviceContent.sidebarDescription}
          sidebarGroups={data.serviceContent.sidebarGroups}
        />

        {/* Case Studies (Modern High-Tech Bento Layout matching Dark Technical Hero) */}
        <CaseStudiesBentoVariant studyKey="saas" theme="dark-navy" customEyebrow="Technical Infrastructure Case Study" />

        {/* Comparison Table */}
        <ComparisonTable
          theme="emerald"
          eyebrow={data.comparisonTable.eyebrow}
          title={data.comparisonTable.title}
          description={data.comparisonTable.description}
          usLabel={data.comparisonTable.usLabel}
          competitorsLabel={data.comparisonTable.competitorsLabel}
          inHouseLabel={data.comparisonTable.inHouseLabel}
          rows={data.comparisonTable.rows}
        />

        {/* Team Section */}
        <TeamAbout
          eyebrow={data.team.eyebrow}
          title={data.team.title}
          highlightText={data.team.highlightText}
          description={data.team.description}
          cards={data.team.cards}
          footerTitle={data.team.footerTitle}
          footerDescription={data.team.footerDescription}
          ctaText={data.team.ctaText}
          ctaHref={data.team.ctaHref}
        />

        {/* FAQs Section */}
        <FAQSection
          eyebrow={data.faqs?.eyebrow}
          title={data.faqs?.title}
          description={data.faqs?.description}
          faqs={data.faqs?.faqs}
        />

        {/* Blog & Resources Preview */}
        <BlogResourcesPreview
          eyebrow={data.resources?.eyebrow}
          title={data.resources?.title}
          description={data.resources?.description}
          articles={data.resources?.articles}
        />

        {/* Final CTA + Big Numbers Closing Stats */}
        <FinalCtaFooterStats
          eyebrow={data.finalCta?.eyebrow}
          headline={data.finalCta?.headline}
          subheadline={data.finalCta?.subheadline}
          primaryCtaText={data.finalCta?.primaryCtaText}
          primaryCtaHref={data.finalCta?.primaryCtaHref}
          secondaryCtaText={data.finalCta?.secondaryCtaText}
          secondaryCtaHref={data.finalCta?.secondaryCtaHref}
          stats={data.finalCta?.stats}
        />
      </div>
    </div>
  );
}

/* =========================================================================
   5. AI SEO & ANSWER ENGINE (AEO) SPECIALIZED LAYOUT
   Vibe: Future-facing, Neural Graphs, LLM Citation Readiness, High-Tech Violet/Blue
   ========================================================================= */
export function AiAeoServiceLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#0c0f1d] text-white">
      {/* Dynamic High-End Interactive Hero (Perplexity Smartphone UI for AEO, Neural Knowledge Graph for AI SEO) */}
      <InteractiveHeroBanner
        pageType={slug === "aeo" ? "aeo" : "ai-seo"}
        eyebrow={data.hero.eyebrow}
        headlineTitle={data.hero.headline.includes("That") ? data.hero.headline.split("That")[0] : data.hero.headline}
        headlineHighlight={data.hero.headline.includes("That") ? `That ${data.hero.headline.split("That")[1]}` : ""}
        description={data.hero.paragraph}
        primaryCtaText={data.hero.ctaLabel}
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText={slug === "aeo" ? "Book a Strategy Call" : "Explore SGE Roadmap"}
        secondaryCtaHref="/contact"
      />

      {/* Quick Metrics Bar */}
      <QuickMetricsBar
        headline="AI SEARCH ENGINE BENCHMARK METRICS"
        metrics={[
          {
            value: "410%",
            label: "AI Overview Citation Growth",
            sublabel: "Featured in Google SGE & Gemini answers",
            change: "+85% MoM",
            highlightColor: "blue",
          },
          {
            value: "Position #0",
            label: "Answer Engine Dominance",
            sublabel: "Primary source in Perplexity & SearchGPT",
            change: "Direct Citations",
            highlightColor: "green",
          },
          {
            value: "82.4%",
            label: "Knowledge Graph Authority",
            sublabel: "Wikidata & entity correlation score",
            change: "Top Tier",
            highlightColor: "yellow",
          },
          {
            value: "15 Days",
            label: "Time to First AI Citation",
            sublabel: "Rapid entity grounding & schema ingestion",
            change: "Guaranteed SLA",
            highlightColor: "red",
          },
        ]}
      />

      {/* Trusted Brands */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* Deliverables Matrix */}
      <DeliverablesMatrix
        pageType="ai"
        serviceName="AI SEO & Answer Engine Optimization"
        eyebrow="AI & AEO SCOPE OF WORK"
      />

      {/* Sprint Roadmap */}
      <SprintRoadmap
        eyebrow="90-DAY AI SEO SPRINT ROADMAP"
        title="How We Ground Your Brand in"
        highlightText="AI Overviews"
        description="A clear sprint-by-sprint protocol to achieve persistent citations in ChatGPT, Perplexity, and Google AI."
      />

      {/* Tech Stack */}
      <TechStackGrid
        eyebrow="AI ANALYSIS & VECTOR TOOLS"
        title="Powered by Leading Edge"
        highlightText="AI Search Intelligence"
        description="NLP analyzers, vector similarity tools, knowledge graph checkers, and automated LLM prompt trackers."
      />

      {/* Audit Widget */}
      <AuditQuoteWidget
        eyebrow="FREE AI CITATION AUDIT"
        title="Find Out if AI Search Engines Are Citing Your Competitors Instead"
        description="We scan Perplexity, ChatGPT, and Google AI Overviews to map your brand entity visibility and provide an action plan."
      />

      {/* Light Container for remaining standard sections */}
      <div className="bg-white text-slate-950">
        <PricingSection
          eyebrow={data.pricing.eyebrow}
          title={data.pricing.title}
          description={data.pricing.description}
          plans={data.pricing.plans}
        />

        <WhyChooseUs
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          benefits={data.whyChooseUs.benefits}
        />

        <ServiceContent
          eyebrow={data.serviceContent.eyebrow}
          title={data.serviceContent.title}
          intro={data.serviceContent.intro}
          content={data.serviceContent.content}
          sidebarTitle={data.serviceContent.sidebarTitle}
          sidebarDescription={data.serviceContent.sidebarDescription}
          sidebarGroups={data.serviceContent.sidebarGroups}
        />

        {/* Case Studies (AEO & AI Search Bento Matrix matching AI Violet Hero) */}
        <CaseStudiesBentoVariant studyKey="content" theme="purple" customEyebrow="AI Search & Answer Engine Optimization" />

        {/* Editorial Intelligence Callout Section (Exact Match to Reference Screenshot) */}
        <EditorialCalloutSection
          theme="emerald"
          badge="ANSWER ENGINE OPTIMIZATION (AEO)"
          title="Why ChatGPT & AI SEO Is a Must for"
          titleHighlight="Your Business Today"
          introParagraph="The adoption of AI-driven services such as ChatGPT, Perplexity, and Google AI Overviews are changing not only the way people find what they are looking for — but also how a business can be found."
          bulletPoints={[
            "AI summaries now capture over 38% of all initial clicks on Google SGE & AI Overview results.",
            "There's a 73% overlap between ChatGPT search SEO results and Bing's top rankings—if you rank on Bing, you're likely ranking on ChatGPT too.",
            "SearchGPT (live conversational search) is quickly turning into one of the main sources of commercial product information for millions.",
            "Entity-based AI SEO solutions have resulted in a 25%+ increase in qualified ranking authority for top brands.",
          ]}
          secondaryParagraphs={[
            "ChatGPT and AI search optimization opens a new pathway that captures high-intent traffic unreachable through regular SEO alone. It is not just a trend; it is a permanent paradigm shift in both Answer Engine Optimization and consumer behavior.",
            "Content is now synthesized directly in AI models and knowledge graphs before users ever see traditional blue links. Failing to optimize for generative engines leaves your market share open to early adopters.",
          ]}
          conclusion="SEO is going to be hybrid in the future: semi-traditional, half conversational, and fully AI conscious."
          ctaText="Audit Your AI Brand Citations"
          ctaHref="/contact"
        />

        <ComparisonTable
          theme="purple"
          eyebrow={data.comparisonTable.eyebrow}
          title={data.comparisonTable.title}
          description={data.comparisonTable.description}
          usLabel={data.comparisonTable.usLabel}
          competitorsLabel={data.comparisonTable.competitorsLabel}
          inHouseLabel={data.comparisonTable.inHouseLabel}
          rows={data.comparisonTable.rows}
        />

        <TeamAbout
          eyebrow={data.team.eyebrow}
          title={data.team.title}
          highlightText={data.team.highlightText}
          description={data.team.description}
          cards={data.team.cards}
          footerTitle={data.team.footerTitle}
          footerDescription={data.team.footerDescription}
          ctaText={data.team.ctaText}
          ctaHref={data.team.ctaHref}
        />

        <FAQSection
          eyebrow={data.faqs?.eyebrow}
          title={data.faqs?.title}
          description={data.faqs?.description}
          faqs={data.faqs?.faqs}
        />

        <BlogResourcesPreview
          eyebrow={data.resources?.eyebrow}
          title={data.resources?.title}
          description={data.resources?.description}
          articles={data.resources?.articles}
        />

        <FinalCtaFooterStats
          eyebrow={data.finalCta?.eyebrow}
          headline={data.finalCta?.headline}
          subheadline={data.finalCta?.subheadline}
          primaryCtaText={data.finalCta?.primaryCtaText}
          primaryCtaHref={data.finalCta?.primaryCtaHref}
          secondaryCtaText={data.finalCta?.secondaryCtaText}
          secondaryCtaHref={data.finalCta?.secondaryCtaHref}
          stats={data.finalCta?.stats}
        />
      </div>
    </div>
  );
}

/* =========================================================================
   6. PERFORMANCE MARKETING, PPC & B2B/ECOM SPECIALIZED LAYOUT
   Vibe: High ROI, Conversion Attribution, Live Telemetry & Growth Engine
   ========================================================================= */
export function PerformanceMarketingLayout({ data, slug }: CustomServiceLayoutProps) {
  return (
    <div className="bg-[#09101d] text-white">
      {/* Replaced with design matching image reference: Pay-Per-Click Advertising That Delivers ROI */}
      <ServicePageBanner
        variant="ppc"
        categoryBadge={{
          label: data.hero.eyebrow,
          theme: "emerald",
        }}
        headlinePrefix={data.hero.headline.includes("That") ? data.hero.headline.split("That")[0] : data.hero.headline}
        headlineHighlight={data.hero.headline.includes("That") ? `That ${data.hero.headline.split("That")[1]}` : ""}
        description={data.hero.paragraph}
        ctaText="Get a PPC Strategy"
        ctaHref="/contact"
        secondaryCtaText="Schedule a Call"
        secondaryCtaHref="/book-a-meeting"
      />

      {/* Quick Metrics Bar (Second Image Style) */}
      <QuickMetricsBar
        headline="MEASURABLE PAID MEDIA & PIPELINE IMPACT"
        metrics={[
          {
            value: "+5.2x",
            title: "Blended Return on Ad Spend (ROAS)",
            description: "Direct conversion-driven paid media execution across Google Ads, Meta Advantage+ and LinkedIn pipelines.",
          },
          {
            value: "-42%",
            title: "Customer Acquisition Cost (CAC)",
            description: "Lower cost per closed sale or qualified lead through algorithmic bid optimization and negative keyword sculpting.",
          },
          {
            value: "100%",
            title: "Server-Side Attribution (CAPI)",
            description: "Zero data signal loss from iOS and ad-blockers with direct CRM and offline conversion synchronization.",
          },
          {
            value: "+96%",
            title: "Client Retention Rate",
            description: "High satisfaction with complete margin transparency, weekly syncs, and real-time Looker Studio dashboards.",
          },
        ]}
      />

      {/* Brands Bar */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* 2nd Image Reference Complete Section: 3-Pill Switcher + Mid Feature + Expert Quote Card */}
      <DeliverablesMatrix pageType="ppc" serviceName="PPC & Performance Marketing" />

      {/* Sprint Roadmap */}
      <SprintRoadmap
        eyebrow="90-DAY PROFITABLE SCALE TIMELINE"
        title="From Pilot to High-ROAS"
        highlightText="Scale Sprints"
        description="How we eliminate wasted budget in month 1, optimize conversions in month 2, and double down on profit in month 3."
      />

      {/* Tech Stack */}
      <TechStackGrid
        eyebrow="PERFORMANCE MARKETING SUITE"
        title="Powered by Enterprise"
        highlightText="Ad Tech & Attribution"
        description="TripleWhale, Looker Studio, Google Ads API, Meta Conversions API (CAPI), and automated fraud click protection."
      />

      {/* Audit Widget */}
      <AuditQuoteWidget
        eyebrow="FREE AD ACCOUNT & ROAS AUDIT"
        title="Uncover Wasted Ad Spend and High-Converting Growth Opportunities"
        description="Receive a confidential 12-point audit of your Google, Meta, or LinkedIn ad accounts with clear action items."
      />

      {/* Advance Advertising Perks Section (Dedicated to PPC & Paid Performance) */}
      <AdvancePerksSection
        headlineLine1="Advance Advertising"
        headlineHighlight="Perk That You Get From"
        headlineLine2="Our PPC Agency"
        description="We don't just hit 'publish' on your ads and walk away. At our PPC agency, we believe in full-service management that covers everything—from planning your campaign to tracking every result. You won't have to sit and wonder if your ad budget is working. We're all about performance. Our strategies are tested, refined, and made to deliver real results that help your business grow. Here's a closer look at what you get:"
      />

      {/* Light Container for remaining standard sections */}
      <div className="bg-white text-slate-950">
        <PricingSection
          eyebrow={data.pricing.eyebrow}
          title={data.pricing.title}
          description={data.pricing.description}
          plans={data.pricing.plans}
        />

        <WhyChooseUs
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          benefits={data.whyChooseUs.benefits}
        />

        <ServiceContent
          eyebrow={data.serviceContent.eyebrow}
          title={data.serviceContent.title}
          intro={data.serviceContent.intro}
          content={data.serviceContent.content}
          sidebarTitle={data.serviceContent.sidebarTitle}
          sidebarDescription={data.serviceContent.sidebarDescription}
          sidebarGroups={data.serviceContent.sidebarGroups}
        />

        {/* Case Studies (Interactive Multi-Industry Tabbed Grid matching PPC Emerald Hero) */}
        <CaseStudiesInteractiveTabsVariant initialCategory="b2b" theme="emerald" />

        <ComparisonTable
          theme="emerald"
          eyebrow={data.comparisonTable.eyebrow}
          title={data.comparisonTable.title}
          description={data.comparisonTable.description}
          usLabel={data.comparisonTable.usLabel}
          competitorsLabel={data.comparisonTable.competitorsLabel}
          inHouseLabel={data.comparisonTable.inHouseLabel}
          rows={data.comparisonTable.rows}
        />

        <TeamAbout
          eyebrow={data.team.eyebrow}
          title={data.team.title}
          highlightText={data.team.highlightText}
          description={data.team.description}
          cards={data.team.cards}
          footerTitle={data.team.footerTitle}
          footerDescription={data.team.footerDescription}
          ctaText={data.team.ctaText}
          ctaHref={data.team.ctaHref}
        />

        <FAQSection
          eyebrow={data.faqs?.eyebrow}
          title={data.faqs?.title}
          description={data.faqs?.description}
          faqs={data.faqs?.faqs}
        />

        <BlogResourcesPreview
          eyebrow={data.resources?.eyebrow}
          title={data.resources?.title}
          description={data.resources?.description}
          articles={data.resources?.articles}
        />

        <FinalCtaFooterStats
          eyebrow={data.finalCta?.eyebrow}
          headline={data.finalCta?.headline}
          subheadline={data.finalCta?.subheadline}
          primaryCtaText={data.finalCta?.primaryCtaText}
          primaryCtaHref={data.finalCta?.primaryCtaHref}
          secondaryCtaText={data.finalCta?.secondaryCtaText}
          secondaryCtaHref={data.finalCta?.secondaryCtaHref}
          stats={data.finalCta?.stats}
        />
      </div>
    </div>
  );
}
