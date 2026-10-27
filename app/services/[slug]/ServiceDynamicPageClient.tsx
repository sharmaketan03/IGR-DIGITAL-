"use client";

import React from "react";
import ServicePageBanner from "@/components/services/ServicePageBanner";
import Awards from "@/components/pages/award_section";
import GoalBasedServiceSelector from "@/components/pages/servicepage";
import TrustedBrands from "@/components/pages/trustedBrand";
import WhyChooseUsSection from "@/components/pages/whychoose";
import ComparisonSection from "@/components/services/comparisonSection";
import CaseStudies from "@/components/pages/caseStudy";
import {
  CaseStudiesBentoVariant,
  CaseStudiesShowcaseVariant,
  CaseStudiesInteractiveTabsVariant,
} from "@/components/pages/CaseStudiesVariants";
import {
  CaseStudiesMetricStripVariant,
  CaseStudiesDualCardVariant,
} from "@/components/pages/CaseStudiesAlternativeVariants";
import PricingSection from "@/components/pages/pricingsection";
import WhyChooseUs from "@/components/pages/whychooseus";
import StruggleVsSolutionSection from "@/components/services/StruggleVsSolutionSection";
import ComparisonTable from "@/components/pages/comparison";
import HowWeWork from "@/components/pages/process";
import ServiceContent from "@/components/pages/serviceContent";
import FreeAuditLandingClient from "@/components/pages/FreeAuditLandingClient";
import TeamAbout from "@/components/pages/teamProcess";
import FAQSection from "@/components/pages/faqSection";
import BlogResourcesPreview from "@/components/pages/blogResourcesPreview";
import { getBlogsByServiceSlug } from "@/components/Data/serviceSpecificBlogs";
import FinalCtaFooterStats from "@/components/pages/finalCtaStats";
import QuickMetricsBar from "@/components/services/QuickMetricsBar";
import DeliverablesMatrix from "@/components/services/DeliverablesMatrix";
import SprintRoadmap from "@/components/services/SprintRoadmap";
import TechStackGrid from "@/components/services/TechStackGrid";
import AuditQuoteWidget from "@/components/services/AuditQuoteWidget";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import TabbedFeatureShowcase from "@/components/services/TabbedFeatureShowcase";
import SearchMarketingIntro from "@/components/pages/SearchMarketingIntro";
import { getServiceDataBySlug } from "@/components/Data/services";
import type { ServicePageData } from "@/components/Data/servicePageData";
import {
  PlatformSeoLayout,
  OffPageSeoLayout,
  LocalSeoLayout,
  TechnicalAuditLayout,
  AiAeoServiceLayout,
  PerformanceMarketingLayout,
} from "@/components/services/CustomServiceLayouts";

interface ServiceDynamicPageClientProps {
  slug: string;
}

export default function ServiceDynamicPageClient({
  slug,
}: ServiceDynamicPageClientProps) {
  const data = getServiceDataBySlug(slug);

  /* =======================================================================
     DISTINCT THEMATIC LAYOUTS PER SERVICE TYPE
     ======================================================================= */

  // 1. Platform SEO Layout (Ecommerce, Shopify, WordPress, Webflow)
  if (
    slug === "ecommerce-seo" ||
    slug === "shopify-seo" ||
    slug === "wordpress-seo" ||
    slug === "webflow-seo"
  ) {
    return <PlatformSeoLayout data={data} slug={slug} />;
  }

  // 2. Off-Page & Authority Building Layout (Link Building, Guest Posting, Digital PR)
  if (
    slug === "link-building" ||
    slug === "guest-posting" ||
    slug === "digital-pr"
  ) {
    return <OffPageSeoLayout data={data} slug={slug} />;
  }

  // 3. Local SEO Layout (Local SEO, Geo-targeting)
  if (slug === "local-seo") {
    return <LocalSeoLayout data={data} slug={slug} />;
  }

  // 4. Free Website Audit Dedicated Interactive Landing Page
  if (slug === "free-audit") {
    return <FreeAuditLandingClient />;
  }

  // 5. Technical Audit & Consulting Layout (Technical Audit, Code diagnostics, Consultancy)
  if (
    slug === "technical-audit" ||
    slug === "consultancy"
  ) {
    return <TechnicalAuditLayout data={data} slug={slug} />;
  }

  // 5. AI SEO & Answer Engine Optimization Layout (AI SEO, AEO, Perplexity/SearchGPT)
  if (slug === "ai-seo" || slug === "aeo") {
    return <AiAeoServiceLayout data={data} slug={slug} />;
  }

  // 6. Paid Media & Performance Marketing Layout (PPC, Performance Marketing, Ecommerce & B2B)
  if (
    slug === "ppc" ||
    slug === "performance-marketing" ||
    slug === "ecommerce-marketing" ||
    slug === "b2b-marketing" ||
    slug === "google-ads" ||
    slug === "meta-ads" ||
    slug === "linkedin-ads"
  ) {
    return <PerformanceMarketingLayout data={data} slug={slug} />;
  }

  // 7. Default Enterprise & Core SEO Layout (Custom SEO, Enterprise SEO, etc.)
  return (
    <>
      {/* 1. Results Hero matching the modern reference design */}
      <ServicePageBanner
        variant={
          slug === "custom-seo" || slug === "on-page-seo" || slug === "enterprise-seo"
            ? "custom-seo"
            : slug === "case-studies"
              ? "case-study"
              : "ecommerce"
        }
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

      {/* 2. Quick Trust Metrics & ROI Data Bar */}
      <QuickMetricsBar />

      {/* 3. Search Marketing Editorial Authority Intro */}
      <SearchMarketingIntro />

      {/* 4. Trusted Brands */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* 5. Tabbed Feature Showcase (Enterprise Keyword & Revenue Modeling) */}
      <TabbedFeatureShowcase
        eyebrow="ENTERPRISE SEARCH ARCHITECTURE"
        title="Custom Organic Growth Blueprints Designed Around Real Revenue"
        description="We analyze competitive keyword revenue deficits, map multi-intent topical clusters, and eliminate canonical roadblocks."
      />

      {/* 6. Services Comparison Cards */}
      <ComparisonSection data={data.comparisonSection} />

      {/* 8. Dynamic Case Studies Section (Completely distinct layout per service type) */}
      {(() => {
        if (slug.includes("saas") || slug.includes("technical") || slug.includes("audit")) {
          return <CaseStudiesBentoVariant studyKey="saas" theme="dark-navy" />;
        }
        if (slug.includes("ai") || slug.includes("aeo")) {
          return <CaseStudiesBentoVariant studyKey="content" theme="purple" />;
        }
        if (slug.includes("local") || slug.includes("near-me") || slug.includes("google-my-business")) {
          return <CaseStudiesDualCardVariant primaryKey="local" secondaryKey="b2b" />;
        }
        if (slug.includes("b2b") || slug.includes("enterprise") || slug.includes("manufacturing")) {
          return <CaseStudiesDualCardVariant primaryKey="b2b" secondaryKey="saas" />;
        }
        if (slug.includes("content") || slug.includes("link") || slug.includes("guest") || slug.includes("pr")) {
          return <CaseStudiesShowcaseVariant studyKey="content" theme="orange" />;
        }
        if (slug.includes("commerce") || slug.includes("shopify") || slug.includes("store")) {
          return <CaseStudiesMetricStripVariant studyKey="ecommerce" theme="blue" />;
        }
        if (slug.includes("social") || slug.includes("media") || slug.includes("meta")) {
          return <CaseStudiesShowcaseVariant studyKey="ecommerce" theme="pink" />;
        }
        return <CaseStudiesInteractiveTabsVariant initialCategory="ecommerce" theme="blue" />;
      })()}

      {/* 9. Deliverables Matrix / Granular Scope Tabs */}
      <DeliverablesMatrix
        pageType={
          slug.includes("commerce") || slug.includes("shopify")
            ? "ecommerce"
            : slug.includes("link") || slug.includes("guest")
              ? "backlinks"
              : slug.includes("ppc") || slug.includes("ads") || slug.includes("marketing")
                ? "ppc"
                : slug.includes("ai") || slug.includes("aeo")
                  ? "ai"
                  : "seo"
        }
        serviceName={data.hero.eyebrow || slug}
        mainTitle={`The ${data.hero.eyebrow ? data.hero.eyebrow.split(" ").slice(0, 3).join(" ") : "SEO"} Agency That Blends Expertise, Technology & Adaptability to Deliver ROI`}
      />

      {/* 10. Sprint Roadmap / 90-Day Execution Timeline */}
      <SprintRoadmap />

      {/* 11. Tech Stack & Enterprise Tooling Ecosystem */}
      <TechStackGrid />

      {/* 12. Free Interactive Audit & Blueprint Quote Intake */}
      <AuditQuoteWidget />

      {/* 13. Pricing Section */}
      <PricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        plans={data.pricing.plans}
      />

      {/* 14. Why Choose Us (Struggle vs Solution for Custom/B2B SEO vs Standard 6-Card Grid) */}
      {slug === "custom-seo" || slug === "enterprise-seo" || slug === "content-marketing" ? (
        <StruggleVsSolutionSection
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          struggleHeaderTitle="Your Search Market Struggles"
          solutionHeaderTitle="Our Enterprise Solution"
          benefits={data.whyChooseUs.benefits}
        />
      ) : (
        <WhyChooseUs
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          benefits={data.whyChooseUs.benefits}
        />
      )}

      {/* Mid-Funnel Conversion Banner */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow={`READY TO ACCELERATE YOUR ${slug.replace(/-/g, " ").toUpperCase()}?`}
        title={`Ready to Build Sustainable Authority Through Proven ${slug.replace(/-/g, " ")}?`}
        description={`Our expert growth consultants secure measurable ranking improvements, qualified search traffic, and predictable long-term ROI.`}
        primaryCtaText="Get a Free Consultation"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 15. Comparison Table */}
      <ComparisonTable
        theme={
          slug.includes("link") || slug.includes("guest") || slug.includes("pr")
            ? "orange"
            : slug.includes("local")
              ? "emerald"
              : slug.includes("audit") || slug.includes("consult")
                ? "emerald"
                : slug.includes("ai") || slug.includes("aeo")
                  ? "purple"
                  : slug.includes("ppc") || slug.includes("performance")
                    ? "emerald"
                    : "blue"
        }
        eyebrow={data.comparisonTable.eyebrow}
        title={data.comparisonTable.title}
        description={data.comparisonTable.description}
        usLabel={data.comparisonTable.usLabel}
        competitorsLabel={data.comparisonTable.competitorsLabel}
        inHouseLabel={data.comparisonTable.inHouseLabel}
        rows={data.comparisonTable.rows}
      />

      {/* 16. Process (How We Work) */}
      <HowWeWork
        eyebrow={data.process.eyebrow}
        title={data.process.title}
        highlightText={data.process.highlightText}
        description={data.process.description}
        steps={data.process.steps}
        ctaText={data.process.ctaText}
        ctaButtonText={data.process.ctaButtonText}
        ctaHref={data.process.ctaHref}
      />

      {/* 17. Service Content & Sidebar */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* 18. Team About */}
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

      {/* 19. Mid-Bottom Conversion Banner */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow="FULL-FUNNEL EXECUTION SQUAD"
        title="Ready to Scale Your Inbound Pipeline With Predictable Revenue Growth?"
        description="Stop leaving search revenue on the table. Our performance specialists audit your funnel and deploy proven acquisition systems."
        primaryCtaText="Claim Free Strategy Session"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 20. FAQs Section */}
      <FAQSection
        eyebrow={data.faqs?.eyebrow}
        title={data.faqs?.title}
        description={data.faqs?.description}
        faqs={data.faqs?.faqs}
      />

      {/* 21. Blog & Resources Preview */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
      />

      {/* 22. Final CTA + Big Numbers Closing Stats */}
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
    </>
  );
}
