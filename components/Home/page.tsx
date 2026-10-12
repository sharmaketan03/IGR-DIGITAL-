import dynamic from "next/dynamic";
import Awards from "@/components/pages/award_section";
import GrowthProcess from "@/components/pages/growthprocess";
import Hero from "@/components/pages/hero_main";
import IndustriesWeServe from "@/components/pages/industriesweserve";
import MarketingBanner from "@/components/pages/marketingBanner";
import ProvenResults from "@/components/pages/ourresults";
import ProblemsSolutions from "@/components/pages/Problemssolutions";
import SearchMarketingIntro from "@/components/pages/SearchMarketingIntro";
import GoalBasedServiceSelector from "@/components/pages/servicepage";
import EditorialCalloutSection from "@/components/pages/EditorialCalloutSection";
import RevenueMarketingSection from "../pages/revenueMarketingSection";
import RevenueEngine from "../pages/revenueengine";
import Pricing from "../pages/pricesection";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import { revenueGrowth, siteContent } from "@/components/Data/homeData";
// Lazy-load heavy below-the-fold sections for instant initial rendering & Core Web Vitals
const GlobalReachSection = dynamic(() => import("@/components/pages/GlobalPersentation"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
});

const CaseStudies = dynamic(() => import("@/components/pages/caseStudy"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
});

const ClientReviews = dynamic(() => import("../pages/rviewsection"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
});

const Testimonials = dynamic(() => import("@/components/pages/testimonial"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const MeetTheExperts = dynamic(() => import("@/components/pages/teamsection"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

export default function HomeSection() {
  return (
    <div className="relative w-full overflow-x-hidden">

      {/* =====================================================
          HERO BACKGROUND
          ALWAYS FIXED BEHIND ALL SECTIONS
      ===================================================== */}
      <div
        // className="
        //   // pointer-events-none
        //   // fixed
        //   // inset-0
        //   // z-0
        //   // h-screen
        //   // w-full
        //   // top-30
        //   // overflow-hidden
        // "
      >
        <Hero herocontent={siteContent?.heroContent} />
      </div>

      {/* =====================================================
          MAIN SCROLLING CONTENT
      ===================================================== */}
      <main className="relative z-10 w-full">

        {/* HERO SPACE */}
        {/* <div className="h-screen w-full" /> */}



        <section className="relative z-10 w-full bg-white">
          <Awards awardscontent={siteContent.awardsContent} />
        </section>


        {/* =====================================================
            REVENUE ENGINE
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <div className="w-full max-w-[1600px] mx-auto">
            <RevenueEngine revenueGrowth={revenueGrowth as any} />
          </div>
        </section>

        {/* =====================================================
            MID-PAGE BANNER 1: High Velocity Scale Banner
        ===================================================== */}
        <section className="relative z-10 w-full">
          <UniversalCtaBanner
            variant="navy-consult"
            eyebrow="HIGH-VELOCITY PERFORMANCE ARCHITECTURE"
            title="Accelerate Inbound Pipeline With Predictable 4.2x+ Average ROAS"
            description="Our full-funnel digital architects diagnose search gaps, fix revenue leaks, and launch data-backed organic & paid acquisition funnels."
            primaryCtaText="Claim Free Growth Audit"
            primaryCtaHref="https://wa.me/919876543210"
            secondaryCtaText="Chat on WhatsApp"
            secondaryCtaHref="https://wa.me/919876543210"
          />
        </section>

        {/* =====================================================
            REVENUE MARKETING
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <RevenueMarketingSection revenueMarketingContent={siteContent?.revenueMarketingContent as any} />
        </section>

        {/* =====================================================
            PRICING
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <Pricing />
        </section>

        {/* =====================================================
            PROVEN RESULTS
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <ProvenResults content={siteContent?.provenResults} />
        </section>

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <IndustriesWeServe />
        </section>

        {/* =====================================================
            GROWTH PROCESS
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <GrowthProcess />
        </section>

        {/* =====================================================
            SEARCH MARKETING
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <SearchMarketingIntro />
        </section>

        {/* =====================================================
            EDITORIAL INTELLIGENCE CALLOUT (Reference Style)
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <EditorialCalloutSection
            theme="emerald"
            badge="AI SEARCH VISIBILITY & FUTURE READINESS"
            title="Why AI & ChatGPT Search Visibility Is a Must for"
            titleHighlight="Your Business Today"
            introParagraph="The rapid adoption of AI-driven search models—such as ChatGPT, Perplexity, and Google AI Overviews—is fundamentally reshaping not only how people find information, but how businesses get discovered and chosen."
            bulletPoints={[
              "AI search summaries now capture over 38% of all primary clicks across modern search queries.",
              "There is a 73% overlap between ChatGPT search SEO results and top rankings on Bing and Google entity indexes.",
              "SearchGPT and conversational assistants are becoming the first touchpoint for high-intent B2B and consumer research.",
              "Brands optimized for Answer Engine Optimization (AEO) achieve a 25%+ lift in qualified inbound commercial inquiries.",
            ]}
            secondaryParagraphs={[
              "Answer Engine Optimization (AEO) opens an organic discovery channel that traditional keyword stuffing cannot reach. It is not a passing trend—it is a permanent paradigm shift in user behavior and search algorithms.",
              "Content is now directly synthesized by language models before traditional blue links are evaluated. Aligning your website for conversational search guarantees persistent market authority.",
            ]}
            conclusion="The future of digital marketing is hybrid: engineered for Google crawlers, optimized for LLM answer engines, and built for maximum conversion."
            ctaText="Request Free Growth Blueprint"
            ctaHref="/contact"
          />
        </section>

        {/* =====================================================
            CASE STUDIES
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <CaseStudies content={siteContent?.caseStudies} />
        </section>

        {/* =====================================================
            PROBLEMS → SOLUTIONS
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <ProblemsSolutions content={siteContent.problemsSolutions} />
        </section>

        {/* =====================================================
            MARKETING CTA BANNER 2 (Brand Hero Banner)
        ===================================================== */}
        <section className="relative z-10 w-full">
          <MarketingBanner />
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <GoalBasedServiceSelector />
        </section>

        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <Testimonials />
        </section>

        {/* =====================================================
            TEAM
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <MeetTheExperts />
        </section>
           

        <ClientReviews />
        {/* =====================================================
            GLOBAL REACH
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <GlobalReachSection />
        </section>
    
      </main>
    </div>
  );
}