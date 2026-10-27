"use client";

import IGRResultsHero from "./components/banner";
import ServicePageBanner from "@/components/services/ServicePageBanner";
import Awards from "@/components/pages/award_section";
import GoalBasedServiceSelector from "@/components/pages/servicepage";
import TrustedBrands from "@/components/pages/trustedBrand";
import WhyChooseUsSection from "@/components/pages/whychoose";
import ComparisonSection from "@/components/services/comparisonSection";
import CaseStudies from "@/components/pages/caseStudy";
import { CaseStudiesInteractiveTabsVariant } from "@/components/pages/CaseStudiesVariants";
import PricingSection from "@/components/pages/pricingsection";
import WhyChooseUs from "@/components/pages/whychooseus";
import ComparisonTable from "@/components/pages/comparison";
import HowWeWork from "@/components/pages/process";
import ServiceContent from "@/components/pages/serviceContent";
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
import { digitalMarketingServiceData } from "@/components/Data/servicePageData";

export default function ServicesPage() {
  const data = digitalMarketingServiceData;

  return (
    <>
      {/* 1. High Converting Service Hero (Matching Image Reference: SEO That Drives Real Business Growth) */}
      <ServicePageBanner
        variant="growth"
        categoryBadge={{
          label: "SEO SERVICES",
          theme: "blue",
        }}
        headlinePrefix="SEO That Drives"
        headlineHighlight=" Real Business Growth"
        description="We help businesses rank higher, attract qualified traffic and turn visitors into customers with data-driven SEO strategies."
        ctaText="Get a Free SEO Audit"
        ctaHref="/services/free-audit"
        secondaryCtaText="Talk to an Expert"
        secondaryCtaHref="/contact"
        ratingBadges={true}
      />

      {/* 2. Quick Trust Metrics & ROI Data Bar */}
      <QuickMetricsBar />

      {/* 2. Awards */}
      <section className="relative z-10 w-full bg-white">
        <Awards awardscontent={data.awards} />
      </section>

      {/* 3. Goal Based Services Carousel */}
      <section className="relative z-10 w-full bg-white">
        <GoalBasedServiceSelector />
      </section>

      {/* 4. Trusted Brands */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* 5. Why Choose Us (Agency Difference / Interactive Slides) */}
      <WhyChooseUsSection siteContent={data.agencyDifference} />

      {/* 6. Services Comparison Cards */}
      <ComparisonSection data={data.comparisonSection} />

      {/* 7. Case Studies (Comprehensive Multi-Industry Tabbed Experience) */}
      <CaseStudiesInteractiveTabsVariant initialCategory="ecommerce" />

      {/* 8. Pricing Section */}
      <PricingSection
        eyebrow={data.pricing.eyebrow}
        title={data.pricing.title}
        description={data.pricing.description}
        plans={data.pricing.plans}
      />

      {/* 9. Deliverables Matrix / Granular Scope Tabs */}
      <DeliverablesMatrix
        pageType="general"
        serviceName="Search & Full-Funnel Digital Growth"
      />

      {/* 10. Sprint Roadmap / 90-Day Execution Timeline */}
      <SprintRoadmap />

      {/* 11. Tech Stack & Enterprise Tooling Ecosystem */}
      <TechStackGrid />

      {/* 12. Free Interactive Audit & Blueprint Quote Intake */}
      <AuditQuoteWidget />

      {/* 13. Why Choose Us (Benefits Grid) */}
      <WhyChooseUs
        eyebrow={data.whyChooseUs.eyebrow}
        title={data.whyChooseUs.title}
        description={data.whyChooseUs.description}
        benefits={data.whyChooseUs.benefits}
      />

      {/* 14. Comparison Table */}
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

      {/* 15. Process (How We Work) */}
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

      {/* 16. Service Content & Sidebar */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* 17. Team About */}
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

      {/* 18. FAQs Section */}
      <FAQSection
        eyebrow={data.faqs?.eyebrow}
        title={data.faqs?.title}
        description={data.faqs?.description}
        faqs={data.faqs?.faqs}
      />

      {/* 19. Blog & Resources Preview */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow || "ENTERPRISE SEO & GROWTH INSIGHTS"}
        title={data.resources?.title || "Latest Search Engineering & Marketing Playbooks"}
        description={data.resources?.description || "In-depth case studies, technical teardowns, and actionable growth frameworks."}
        articles={data.resources?.articles || getBlogsByServiceSlug("seo")}
      />

      {/* 20. Final CTA + Big Numbers Closing Stats */}
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