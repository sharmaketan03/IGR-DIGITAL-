import dynamic from "next/dynamic";
import Awards from "@/components/pages/award_section";
import Hero from "@/components/pages/hero_main";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import MarketingBanner from "@/components/pages/marketingBanner";
import { revenueGrowth, siteContent } from "@/components/Data/homeData";

// Lazy-load below-the-fold heavy interactive and graphic sections for 95+ PageSpeed & Core Web Vitals
const RevenueEngine = dynamic(() => import("../pages/revenueengine"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-slate-50" />,
});

const RevenueMarketingSection = dynamic(() => import("../pages/revenueMarketingSection"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const Pricing = dynamic(() => import("../pages/pricesection"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const ProvenResults = dynamic(() => import("@/components/pages/ourresults"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const IndustriesWeServe = dynamic(() => import("@/components/pages/industriesweserve"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const GrowthProcess = dynamic(() => import("@/components/pages/growthprocess"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const SearchMarketingIntro = dynamic(() => import("@/components/pages/SearchMarketingIntro"), {
  loading: () => <div className="h-60 w-full animate-pulse bg-slate-50" />,
});

const EditorialCalloutSection = dynamic(() => import("@/components/pages/EditorialCalloutSection"), {
  loading: () => <div className="h-60 w-full animate-pulse bg-slate-50" />,
});

const ProblemsSolutions = dynamic(() => import("@/components/pages/Problemssolutions"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const GoalBasedServiceSelector = dynamic(() => import("@/components/pages/servicepage"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

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

const FAQSection = dynamic(() => import("@/components/pages/faqSection"), {
  loading: () => <div className="h-80 w-full animate-pulse bg-slate-50" />,
});

const FinalLeadFormSection = dynamic(() => import("@/components/pages/FinalLeadFormSection"), {
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
            MID-PAGE BANNER 1: Section 4 Pipeline banner (blue)
        ===================================================== */}
        <section className="relative z-10 w-full">
          <UniversalCtaBanner
            variant="navy-consult"
            eyebrow="Pipeline and performance"
            title="Build a Marketing Pipeline You Can Measure"
            description="We find where visibility and conversions are leaking, then build organic and paid acquisition around those gaps. Every campaign is tracked from first click to enquiry, so you can see what produces leads and what does not."
            primaryCtaText="Get a Free SEO Audit"
            primaryCtaHref="/free-seo-audit/"
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
            EDITORIAL INTELLIGENCE CALLOUT (Section 13: AI Search Visibility)
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <EditorialCalloutSection
            theme="emerald"
            badge="AI search visibility"
            title="Why AI and ChatGPT Search Visibility Matters for"
            titleHighlight="Your Business"
            introParagraph="People now ask ChatGPT, Perplexity and Google’s AI Overviews the questions they used to type into a search box. That changes how businesses are discovered and shortlisted."
            bulletPoints={[
              "AI answers often draw on a small set of sources, so clear, credible and well-structured content improves your chances of being mentioned.",
              "Strong Google rankings and AI visibility are related but not identical, so both need attention.",
              "Buyers increasingly use AI assistants early in research, when they build a shortlist.",
              "No agency can guarantee a mention in an AI answer. The work is making your site easy to understand, trustworthy and well referenced across the web.",
            ]}
            secondaryParagraphs={[
              "Answer engine optimization (AEO) structures your content so it can be quoted as a direct answer. Generative engine optimization (GEO) builds the entity signals, citations and structured data that help AI systems understand who you are and what you offer. We combine both with core SEO, so you are not choosing between Google and AI.",
            ]}
            conclusion="The practical approach is hybrid: built for search engines, clear enough for AI assistants and designed to turn visitors into enquiries."
            ctaText="Get a Free SEO Audit"
            ctaHref="/free-seo-audit/"
            secondaryCtaText="Learn About AI SEO"
            secondaryCtaHref="/services/ai-search/"
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
            TEAM
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <MeetTheExperts />
        </section>

        {/* =====================================================
            FAQ (Section 19)
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <FAQSection />
        </section>

        {/* =====================================================
            FINAL CALL TO ACTION AND LEAD FORM (Section 20)
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <FinalLeadFormSection />
        </section>

        {/* =====================================================
            TESTIMONIALS & REVIEWS
        ===================================================== */}
        <section className="relative z-10 w-full bg-white">
          <Testimonials />
        </section>

        <ClientReviews />

        {/* =====================================================
            GLOBAL REACH / MAP
        ===================================================== */}
        <section className="relative z-10 w-full bg-[#f4f5fa]">
          <GlobalReachSection />
        </section>

      </main>
    </div>
  );
}