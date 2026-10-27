import React from "react";
import type { Metadata } from "next";
import CaseStudiesHero from "@/components/pages/CaseStudiesHero";
import CaseStudiesGrid from "@/components/pages/CaseStudiesGrid";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import FAQSection from "@/components/pages/faqSection";
import FinalLeadFormSection from "@/components/pages/FinalLeadFormSection";

export const metadata: Metadata = {
  title: "Case Studies & Client ROI | Verifiable SEO Results | IGR Digital",
  description:
    "Explore real-world case studies of PJ Dhaba, St. Joseph School Dholpur, Regain Roots Clinic, and Jawaharat. See how IGR Digital's SEO, Google Maps optimization, and performance campaigns deliver compounding revenue.",
  alternates: {
    canonical: "https://igrdigital.com/case-studies",
  },
  openGraph: {
    title: "Case Studies & Verified Client Growth | IGR Digital",
    description:
      "Real businesses, real rankings, verifiable organic search and footfall growth. Browse client breakthroughs across hospitality, education, healthcare, and retail.",
    url: "https://igrdigital.com/case-studies",
    type: "website",
  },
};

const CASE_STUDIES_FAQS = [
  {
    question: "How long does it typically take to see measurable traffic gains?",
    answer:
      "Most local businesses, schools, and medical practices see significant ranking jumps and direction request increases within 60 to 90 days. For competitive national e-commerce or commercial queries, compounding exponential traffic growth accelerates from month 4 to month 6 onwards.",
  },
  {
    question: "Can these results be replicated for my specific city or industry?",
    answer:
      "Yes. Our growth frameworks are built on fundamental search intent, high-authority backlink outreach, and technical excellence. Whether you operate a regional restaurant, an educational institution, a healthcare clinic, or a D2C store, we adapt our roadmap to your market competitors.",
  },
  {
    question: "Do you use safe, Google-approved white-hat techniques?",
    answer:
      "100%. We strictly avoid private blog networks (PBNs), automated link blasts, or deceptive spam methods. All placements, Google Business Profile enhancements, and structured schema follow Google's Webmaster Guidelines for long-term algorithmic safety.",
  },
  {
    question: "How do you track and report campaign progress?",
    answer:
      "You receive 24/7 access to live Looker Studio dashboards synchronized with Google Search Console, Google Analytics 4, and Google Business Profile telemetry. Additionally, your dedicated squad lead conducts bi-weekly check-ins to review progress.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* 1. HERO SECTION: High-Trust Visual Header without video dependency */}
      <CaseStudiesHero />

      {/* 2. CASE STUDIES DETAILED BREAKDOWN GRID: Mixed UI of Image 1 & 2 */}
      <CaseStudiesGrid />

      {/* 3. UNIVERSAL AUTHORITY CTA BANNER: Deep Navy authority strip */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow="READY FOR YOUR BREAKTHROUGH?"
        title="Ready to Scale Your Business to Page #1 on Google?"
        description="Schedule a 1-on-1 discovery call with our senior search strategists. We will audit your current search visibility, analyze competitor gaps, and map out a custom growth blueprint."
        primaryCtaText="Request Free Growth Blueprint"
        primaryCtaHref="/contact"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection
        eyebrow="COMMONLY ASKED QUESTIONS"
        title="Frequently Asked About Our"
        highlightText="Results & Execution"
        description="Learn how we measure ROI, establish ranking dominance, and protect your website against algorithmic shifts."
        faqs={CASE_STUDIES_FAQS}
        supportTitle="Need a custom proposal?"
        supportSubtitle="Speak directly with an enterprise growth strategist to get answers tailored to your business."
        supportCtaText="Contact Us Today"
        supportCtaHref="/contact"
      />

      {/* 5. FINAL LEAD CAPTURE FORM SECTION */}
      <FinalLeadFormSection />
    </main>
  );
}
