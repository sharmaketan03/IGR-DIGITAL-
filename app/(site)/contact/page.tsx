import React from "react";
import type { Metadata } from "next";
import ContactHero from "@/components/pages/ContactHero";
import ContactAuthoritySection from "@/components/pages/ContactAuthoritySection";
import ContactStatsSection from "@/components/pages/ContactStatsSection";
import ContactOfficesBanner from "@/components/pages/ContactOfficesBanner";
import ContactSupportCardSection from "@/components/pages/ContactSupportCardSection";
import ContactNewsletterStrip from "@/components/pages/ContactNewsletterStrip";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with IGR Digital Growth Specialists",
  description:
    "Get close to perfection. Contact IGR Digital for a free consultation, custom SEO & Google Ads quote, and strategic digital marketing guidance.",
  alternates: {
    canonical: "https://igrdigital.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#f4f5fa] text-slate-900">
      {/* 1. TOP HERO: 60vh Blue Banner + Overlapping 'STAY IN TOUCH WITH US' Form */}
      <ContactHero />

      {/* 2. AUTHORITY SECTION: 'We Create Authority And Reputation Like Never Before' with Milestones carousel */}
      <div className="bg-[#f4f5fa]">
        <ContactAuthoritySection />
      </div>

      {/* 3. STATS SECTION: 'With 10K+ Trust Invested, You Can Count On Us' (7000+ Projects, 700+ Happy Clients, 67+ Countries, 2377+ Clients) */}
      <div className="bg-white">
        <ContactStatsSection />
      </div>

      {/* 4. DUAL OFFICE BANNER 1: 'We Are There, Where The Technology Is!' (India HQ Jaipur + US Office Dallas) */}
      <ContactOfficesBanner />

      {/* 5. MID-PAGE SUPPORT CARD: 'Discover How We Can Help Your Business Grow.' (Quote Form + Female Support Agent) */}
      <div className="bg-[#f4f5fa]">
        <ContactSupportCardSection />
      </div>

      {/* 6. NEWSLETTER BANNER STRIP 2: (Electric Cyan-Blue bar) */}
      <ContactNewsletterStrip />
    </div>
  );
}
