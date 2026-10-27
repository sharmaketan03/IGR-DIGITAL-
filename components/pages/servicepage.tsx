
"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceCards = [
  {
    id: "01",
    title: "Organic Search and Technical SEO",
    category: "SEO Services",
    logoImage: "/services/onpage.webp",
    overviewMetrics: [
      { highlight: "Rankings Focus", label: "Intent Driven" },
      { highlight: "White-Hat Methods", label: "Sustainable" },
      { highlight: "Full Technical Audits", label: "Precision" },
    ],
    description:
      "Capture buyer intent with data-backed SEO, from technical architecture to authority building.",
    description2:
      "We eliminate search bottlenecks across crawlability, platform indexing, and keyword intent—transforming organic traffic into a predictable revenue generator for your business.",
    servicesList: [
      { title: "Platform SEO", href: "/ecommerce-seo-services/" },
      { title: "Shopify SEO", href: "/shopify-seo-services/" },
      { title: "WordPress SEO", href: "/wordpress-seo-services/" },
      { title: "Webflow SEO", href: "/webflow-seo-services/" },
      { title: "On-Page SEO", href: "/on-page-seo-services/" },
      { title: "Enterprise SEO", href: "/enterprise-seo-services/" },
      { title: "Local SEO", href: "/local-seo-services/" },
      { title: "Technical Audit", href: "/technical-audit-services/" },
    ],
    mainHref: "/ecommerce-seo-services/",
  },

  {
    id: "02",
    title: "Authority and Link Building",
    category: "Off-Page SEO",
    logoImage: "/services/ofpage.webp",
    overviewMetrics: [
      { highlight: "Editorial Links", label: "High Tier" },
      { highlight: "Relevant Placements", label: "Contextual" },
      { highlight: "Digital PR", label: "Brand Authority" },
    ],
    description:
      "Build the authority behind stronger rankings with editorial links, guest posts and digital PR.",
    description2:
      "Our search intelligence framework ensures your brand is referenced and recommended by high-authority industry publishers and target decision-makers.",
    servicesList: [
      { title: "Link Building", href: "/link-building-services/" },
      { title: "Guest Posting", href: "/guest-posting-services/" },
      { title: "Digital PR", href: "/digital-pr-services/" },
      { title: "Free Website Audit", href: "/free-website-audit-services/" },
    ],
    mainHref: "/link-building-services/",
  },

  {
    id: "03",
    title: "AI SEO and Answer Engine Optimization",
    category: "AI and Search Innovation",
    logoImage: "/services/aisearchvisibility.webp",
    overviewMetrics: [
      { highlight: "AEO Optimization", label: "Direct Answers" },
      { highlight: "GEO Readiness", label: "Generative Signals" },
      { highlight: "AI Citation", label: "Brand Presence" },
    ],
    description:
      "Be understood and cited by AI assistants as well as search engines, with AI SEO, AEO and GEO.",
    description2:
      "We structure your website data, entity footprint, and authoritative topical coverage so AI engines like ChatGPT, Perplexity, and Gemini cite you as a trusted source.",
    servicesList: [
      { title: "AI SEO", href: "/ai-seo-services/" },
      { title: "Answer Engine (AEO)", href: "/aeo-services/" },
      { title: "GEO", href: "/aeo-services/" },
      { title: "Technical SEO Audit", href: "/technical-audit-services/" },
    ],
    mainHref: "/ai-seo-services/",
  },

  {
    id: "04",
    title: "PPC and Performance Marketing",
    category: "Paid Media",
    logoImage: "/services/digitalMarketing.webp",
    overviewMetrics: [
      { highlight: "Google Ads", label: "Buyer Intent" },
      { highlight: "Meta Ads", label: "Visual Scale" },
      { highlight: "LinkedIn Ads", label: "B2B Precision" },
    ],
    description:
      "Reach high-intent customers with Google Ads, Meta ads and LinkedIn ads built around cost per lead.",
    description2:
      "Every dollar spent is audited and tracked against actual pipeline revenue, lowering acquisition costs while scaling qualified customer acquisition across every customer touchpoint.",
    servicesList: [
      { title: "Google Ads", href: "/google-ads-services/" },
      { title: "Meta Ads", href: "/meta-ads-services/" },
      { title: "LinkedIn Ads", href: "/linkedin-ads-services/" },
      { title: "E-commerce Marketing", href: "/ecommerce-marketing-services/" },
      { title: "B2B Marketing and ABM", href: "/b2b-marketing-services/" },
    ],
    mainHref: "/ppc-advertising-services/",
  },

  {
    id: "05",
    title: "Content, Social Media and Website Growth",
    category: "Content, Social and Web",
    logoImage: "/services/socialmedia.webp",
    overviewMetrics: [
      { highlight: "High Conversion", label: "Funnels & Copy" },
      { highlight: "Brand Trust", label: "Social Reach" },
      { highlight: "Fast & Clean", label: "Modern Web" },
    ],
    description:
      "Content, social media and website improvements that bring visitors in and turn them into enquiries.",
    description2:
      "From high-converting landing pages to value-driven authority copywriting and active social engagement, we ensure every visitor experiences a polished brand journey.",
    servicesList: [
      { title: "Custom Web Development", href: "/content-marketing-services/" },
      { title: "Content Marketing", href: "/content-marketing-services/" },
      { title: "Social Media Strategy", href: "/social-media-services/" },
      { title: "UI/UX and Speed Optimization", href: "/content-marketing-services/" },
      { title: "Startup Growth Suite", href: "/content-marketing-services/" },
      { title: "Healthcare and Real Estate", href: "/content-marketing-services/" },
    ],
    mainHref: "/content-marketing-services/",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const cards =
          gsap.utils.toArray<HTMLElement>(".service-horizontal-card");

        if (cards.length <= 1) return;

        /*
         * Card width is intentionally kept in sync
         * with the Tailwind width below.
         */
        const getCardWidth = () =>
          Math.min(window.innerWidth * 0.84, 1480);

        const getGap = () => 34;

        const getScrollDistance = () =>
          (getCardWidth() + getGap()) * (cards.length - 1);

        gsap.set(track, {
          x: 0,
        });

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f8f9fb] text-[#171717]"
    >
      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="hidden min-h-screen lg:block">
        {/* HEADING */}

        <div className="relative z-20 mx-auto max-w-[1600px] px-10 pt-10 xl:px-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4285F4]">
                What We Do
              </p>

              <h2 className="text-[44px] font-medium leading-none tracking-[-0.055em] text-[#0B1120] xl:text-[54px]">
                SEO and Digital Marketing Services by Platform
              </h2>
            </div>

            <p className="mb-1 max-w-[300px] text-sm leading-6 text-[#64748B]">
              Strategies designed around your platform, audience and growth
              goals.
            </p>
          </div>
        </div>

        {/* CAROUSEL */}

        <div className="relative flex min-h-[calc(100vh-145px)] w-full items-center overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex
              w-max
              shrink-0
              items-center
              gap-[34px]
              pl-[8vw]
            "
          >
            {serviceCards.map((service) => (
              <article
                key={service.id}
                className="
                  service-horizontal-card
                  relative
                  flex
                  h-[500px]
                  w-[84vw]
                  max-w-[1360px]
                  min-w-[1020px]
                  shrink-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-slate-200/90
                  bg-white
                  shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                "
              >
                {/* =================================================
                    LEFT EDITORIAL CONTENT PANEL — 58% (Matching Image 2)
                ================================================= */}
                <div className="flex h-full w-[58%] flex-col justify-between p-8 xl:p-11">
                  {/* Top Branding / Logo Header */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200/60 p-1.5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="h-5 w-5 text-amber-600"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 3v3" />
                          <path d="M12 18v3" />
                          <path d="M3 12h3" />
                          <path d="M18 12h3" />
                          <path d="M5.6 5.6l2.1 2.1" />
                          <path d="M16.3 16.3l2.1 2.1" />
                          <path d="M5.6 18.4l2.1-2.1" />
                          <path d="M16.3 7.7l2.1-2.1" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-black tracking-wider text-slate-900">
                          {service.category.toUpperCase()}
                        </span>
                        <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
                          Core Practice Area #{service.id}
                        </div>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-slate-900 xl:text-[26px]">
                      {service.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 line-clamp-2 xl:text-[13.5px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Middle / Bottom: Metrics & Internal Sub-services */}
                  <div className="space-y-4 pt-2">
                    {/* 3-Column Highlights Strip with Vertical Dividers */}
                    {service.overviewMetrics && (
                      <div className="flex items-center divide-x divide-slate-200 border-y border-slate-100 py-2.5">
                        {service.overviewMetrics.map((met, idx) => (
                          <div
                            key={idx}
                            className={`${idx === 0 ? "pr-5" : "px-5"} first:pl-0`}
                          >
                            <div className="text-[13.5px] font-black text-slate-900 leading-tight">
                              {met.highlight}
                            </div>
                            <div className="text-[10.5px] text-slate-500 leading-tight mt-0.5">
                              {met.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Integrated Internal Linking: Sub-services Chips */}
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Included Services & Platform Specializations:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.servicesList.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="inline-flex items-center gap-1 rounded-md border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                          >
                            <span>{subItem.title}</span>
                            <span className="text-[9px] opacity-40">↗</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Know More Pill Button */}
                    <div className="pt-1">
                      <Link
                        href={service.mainHref}
                        className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-slate-300
                          bg-white
                          px-5
                          py-2
                          text-xs
                          font-semibold
                          text-slate-800
                          shadow-xs
                          transition-all
                          duration-200
                          hover:border-slate-900
                          hover:bg-slate-900
                          hover:text-white
                        "
                      >
                        <span>Know More</span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    RIGHT VISUAL HERO IMAGE PANEL — 42% (Matching Image 2)
                ================================================= */}
                <div className="relative h-full w-[42%] shrink-0 overflow-hidden bg-slate-100">
                  {service.logoImage ? (
                    <Image
                      src={service.logoImage}
                      alt={`${service.title} visual`}
                      fill
                      priority={service.id === "01"}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400 font-bold text-xl">
                      {service.title}
                    </div>
                  )}
                  {/* Subtle soft gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET (Matching 2nd Image Layout)
      ====================================================== */}

      <div className="px-5 pb-20 pt-16 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4285F4]">
            What We Do
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-[-0.05em] text-[#0B1120] sm:text-4xl">
            SEO and Digital Marketing Services by Platform
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#64748B]">
            Strategies designed around your platform, audience and growth
            goals.
          </p>

          {/* Cards */}

          <div className="mt-10 space-y-8">
            {serviceCards.map((service) => (
              <article
                key={service.id}
                className="
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-slate-200/90
                  bg-white
                  shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                "
              >
                {/* Top Image on mobile */}
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100 sm:h-[260px]">
                  {service.logoImage ? (
                    <Image
                      src={service.logoImage}
                      alt={`${service.title} visual`}
                      fill
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400 font-bold text-xl">
                      {service.title}
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Content Panel on mobile */}
                <div className="p-6 sm:p-8">
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-200/60 p-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-4 w-4 text-amber-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 3v3" />
                        <path d="M12 18v3" />
                        <path d="M3 12h3" />
                        <path d="M18 12h3" />
                      </svg>
                    </div>
                    <span className="text-xs font-black tracking-wider text-slate-900 uppercase">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Highlights Strip */}
                  {service.overviewMetrics && (
                    <div className="mt-4 grid grid-cols-3 gap-2 border-y border-slate-100 py-3">
                      {service.overviewMetrics.map((met, idx) => (
                        <div key={idx}>
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {met.highlight}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {met.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Included Internal Links */}
                  <div className="mt-4">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Included Services:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.servicesList.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="inline-flex items-center gap-1 rounded-md border border-slate-200/80 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                        >
                          <span>{subItem.title}</span>
                          <span className="text-[9px] opacity-40">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Know More Button */}
                  <div className="mt-6">
                    <Link
                      href={service.mainHref}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-300
                        bg-white
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        text-slate-800
                        shadow-xs
                        transition-all
                        hover:border-slate-900
                        hover:bg-slate-900
                        hover:text-white
                      "
                    >
                      <span>Know More</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
