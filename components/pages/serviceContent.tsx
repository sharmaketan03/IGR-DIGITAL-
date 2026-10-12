"use client";

import React from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export type ContentBlock = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SidebarGroup = {
  title?: string;
  links: {
    label: string;
    href?: string;
  }[];
};

export type AdditionalContent = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceContentProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  content: ContentBlock[];
  sidebarTitle?: string;
  sidebarDescription?: string;
  sidebarGroups?: SidebarGroup[];
  additionalContent?: AdditionalContent[];
};

/* =========================================================
   COMPONENT: ServiceContent
   Structure requested by User:
   1. TOP PART: Two columns:
      - Left column: ONLY the specific editorial article text, links & bullets.
      - Right column: "Learn More" sidebar with red underline and sticky scrollable list.
   2. BOTTOM PART: Starts right below the divider border and spans 100% full width across the page.
========================================================= */

export default function ServiceContent({
  title,
  intro,
  sidebarTitle = "Learn More",
  sidebarGroups = [],
}: ServiceContentProps) {
  // Extract links from sidebarGroups if provided, else use default SEO resource links
  const allSidebarLinks = sidebarGroups.flatMap((group) => group.links);

  const defaultLinks = [
    { label: "Top 10 Website Analysis Tools in 2026 - Boost Your SEO Performance", href: "/blog/website-analysis-tools" },
    { label: "Top 5 SEO Blogs 2026: Mastering Social Media & Search Trends", href: "/blog/top-seo-blogs-2026" },
    { label: "What Are SEO Services in 2026 & Why They Matter", href: "/services/custom-seo" },
    { label: "Google Clarifies AEO & GEO for AI Search", href: "/services/aeo" },
    { label: "SEO for Indian Startups: The Roadmap to Your First 100K Visitors", href: "/industries/startups" },
    { label: "What Is Domain Authority? Boost Your Website's Power in 2026", href: "/services/link-building" },
    { label: "Top 5 DA PA Checker Tools Every SEO Expert Must Use", href: "/services/technical-audit" },
    { label: "Robots.txt for SEO: What It Is, How It Works, and Why It Matters", href: "/services/technical-audit" },
    { label: "What Is Semantic SEO and Topic Clustering?", href: "/services/on-page-seo" },
    { label: "E-commerce SEO Strategies to Boost Online Sales", href: "/services/ecommerce-seo" },
    { label: "Technical SEO Audit Checklist for Modern Web Apps", href: "/services/technical-audit" },
  ];

  const displayedLinks = allSidebarLinks.length > 0 ? allSidebarLinks : defaultLinks;

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-t border-slate-100">
      
      {/* =========================================================
          TOP TWO-COLUMN SECTION:
          - Left: ONLY the exact requested editorial copy
          - Right: Sticky "Learn More" Sidebar
          - Standard site margins (max-w-7xl mx-auto)
          ========================================================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px] lg:gap-14 items-start w-full">
          
          {/* LEFT COLUMN: ONLY user specified content */}
          <div className="w-full min-w-0">
            {/* Main Heading */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-black tracking-tight text-[#161c2d] leading-[1.25]">
              {title || "Data-Driven Performance Marketing built around your business growth goals."}
            </h2>

            {/* Intro paragraphs */}
            <div className="mt-6 text-[14.5px] sm:text-[15.5px] leading-[1.8] text-[#334155] space-y-4">
              <p>
                {intro || (
                  <>
                    No vanity metrics. We deploy cross-channel paid media (Search, Social, Display, Retargeting) tightly synchronized to your customer acquisition costs (CAC) and customer lifetime value (LTV).
                  </>
                )}
              </p>

              <p>
                Whether you need local SEO services,{" "}
                <Link
                  href="/services/enterprise-seo"
                  className="font-bold text-[#0f172a] underline decoration-[#0f172a] underline-offset-2 hover:text-blue-600 transition"
                >
                  enterprise SEO services
                </Link>{" "}
                or a comprehensive SEO strategy, we offer cost-effective solutions designed to drive sustainable growth.
              </p>
            </div>

            {/* Bullet points with bold titles & underlined keywords */}
            <div className="mt-7">
              <ul className="space-y-3.5 text-[14px] sm:text-[15px] leading-relaxed text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#1e293b] shrink-0" />
                  <span>
                    <strong className="font-bold text-[#0f172a]">Budget-friendly SEO packages:</strong> Get expert optimization at a price that fits your business.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#1e293b] shrink-0" />
                  <span>
                    <strong className="font-bold text-[#0f172a]">Custom SEO Solutions:</strong> Choose from local SEO services or full-scale SEO strategies or tailored solutions from a specialized{" "}
                    <Link
                      href="/services/b2b-marketing"
                      className="font-bold text-[#0f172a] underline decoration-[#0f172a] underline-offset-2 hover:text-blue-600 transition"
                    >
                      SEO agency for B2B tech
                    </Link>
                    .
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#1e293b] shrink-0" />
                  <span>
                    <strong className="font-bold text-[#0f172a]">Quality Without Compromise:</strong> Affordable pricing without sacrificing effectiveness.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#1e293b] shrink-0" />
                  <span>
                    <strong className="font-bold text-[#0f172a]">Scalable for Every Business:</strong> Flexible plans for startups, small businesses, B2B companies, and growing enterprises.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[#1e293b] shrink-0" />
                  <span>
                    <strong className="font-bold text-[#0f172a]">Guaranteed Results:</strong> Drive traffic, improve rankings, and maximise conversions with our proven SEO strategies.
                  </span>
                </li>
              </ul>
            </div>

            {/* Closing statement */}
            <p className="mt-7 text-[14.5px] sm:text-[15px] leading-relaxed text-[#334155]">
              With our affordable SEO services, you get the best value for your investment, ensuring long-term digital success.
            </p>
          </div>

          {/* RIGHT COLUMN: "Learn More" Sticky Sidebar */}
          <div className="w-full h-full">
            <aside className="sticky top-24 rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
              
              {/* Header: "Learn More" with red bottom underline rule */}
              <div className="relative pb-3 border-b-2 border-[#E11D48] flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#161c2d]">
                  {sidebarTitle}
                </h3>
              </div>

              {/* Scroll Container with directional indicators */}
              <div className="relative mt-3">
                {/* Top arrow indicator */}
                <div className="flex justify-end pr-1 text-slate-300">
                  <ChevronUp className="w-3.5 h-3.5" />
                </div>

                {/* Scrollable list of links */}
                <div className="max-h-[460px] overflow-y-auto pr-3 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  {displayedLinks.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] leading-snug">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                      <Link
                        href={item.href || "#"}
                        className="text-[#64748b] hover:text-[#0f172a] hover:underline transition-colors"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Bottom arrow indicator */}
                <div className="flex justify-end pr-1 pt-1 text-slate-300">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </aside>
          </div>

        </div>
      </div>

      {/* =========================================================
          FULL-WIDTH DIVIDER BORDER & SECOND SECTION:
          Divider border extends across, and content has standard site margins
          ========================================================= */}
      <div className="mt-14 w-full border-t border-slate-200" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="w-full space-y-4 text-[14.5px] sm:text-[15.5px] leading-[1.85] text-[#334155]">
          <p className="w-full">
            Every industry has unique search trends, customer behavior, and competitive challenges. That's why IGR Digital delivers customized SEO strategies designed for your specific business niche. From healthcare, legal, SaaS, ecommerce, and real estate to hospitality, home services, and manufacturing, our industry-focused SEO solutions help improve search visibility, attract qualified traffic, and drive long-term business growth.
          </p>
          <p className="w-full">
            Explore our complete range of{" "}
            <Link
              href="/services"
              className="font-bold text-[#0f172a] underline decoration-[#0f172a] underline-offset-2 hover:text-blue-600 transition"
            >
              industry-specific SEO services
            </Link>{" "}
            to find the right strategy for your business.
          </p>
        </div>
      </div>

    </section>
  );
}