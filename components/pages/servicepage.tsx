
"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceCards = [
  {
    id: "01",
    title: "Platform SEO",
    category: "SEO Services",
    logoImage: "/services/seo.png",
    description:
      "Build a stronger search presence across the platforms that power your business. Our platform SEO services are designed to improve visibility, technical performance, and organic growth across modern website platforms.",
    description2:
      "From ecommerce stores to CMS-based websites, we optimize your platform's structure, content, and search experience to create a strong foundation for sustainable rankings.",
    links: [
      { title: "E-commerce SEO", href: "/services/ecommerce-seo" },
      { title: "Shopify SEO", href: "/services/shopify-seo" },
      { title: "WordPress SEO", href: "/services/wordpress-seo" },
      { title: "Webflow SEO", href: "/services/webflow-seo" },
    ],
  },

  {
    id: "02",
    title: "Off-Page SEO",
    category: "SEO Services",
    logoImage: "/services/ofpage.png",
    description:
      "Strengthen your website’s authority and market reputation with strategic off-page SEO campaigns. We build high-quality links, execute digital PR, and drive meaningful brand visibility to ensure your business stands out where it matters most.",
    description2:
      "We focus on creating relevant authority signals that support stronger search engine rankings, elevate your brand's credibility, and deliver sustainable, long-term organic growth that beats the competition.",
    links: [
      { title: "Link Building", href: "/services/link-building" },
      { title: "Guest Posting", href: "/services/guest-posting" },
      { title: "Digital PR", href: "/services/digital-pr" },
    ],
  },

  {
    id: "03",
    title: "Core SEO",
    category: "SEO Services",
    logoImage: "/images/services/core-seo.svg",
    description:
      "Create a technically strong and search-focused website with SEO strategies built around your business goals, audience, and competitive landscape.",
    description2:
      "From on-page optimization to enterprise and local search, we improve the elements that help search engines understand, trust, and rank your website.",
    links: [
      { title: "Custom SEO", href: "/services/custom-seo" },
      { title: "Local SEO", href: "/services/local-seo" },
      { title: "Enterprise SEO", href: "/services/enterprise-seo" },
      { title: "On-Page SEO", href: "/services/on-page-seo" },
    ],
  },

  {
    id: "04",
    title: "Consulting",
    category: "SEO Services",
    logoImage: "/images/services/seo-consulting.svg",
    description:
      "Get a clear SEO strategy backed by data, technical expertise, and a practical roadmap designed around your specific business objectives.",
    description2:
      "Whether you need an expert second opinion, a complete SEO roadmap, or help identifying growth opportunities, our consultants help you make confident decisions.",
    links: [
      { title: "SEO Consultancy", href: "/services/consultancy" },
      { title: "Free Website Audit", href: "/services/free-audit" },
      { title: "Technical Audit", href: "/services/technical-audit" },
    ],
  },

  {
    id: "05",
    title: "Industries",
    category: "SEO Services",
    logoImage: "/images/services/industries.svg",
    description:
      "SEO strategies built around the unique search behavior, competition, and customer journey of your industry.",
    description2:
      "We adapt our approach to your market so your website can attract the right audience, generate qualified traffic, and turn organic visibility into measurable business growth.",
    links: [
      { title: "For Startups", href: "/industries/startups" },
      { title: "For Healthcare", href: "/industries/healthcare" },
      { title: "For Real Estate", href: "/industries/real-estate" },
      { title: "View All Industries", href: "/industries" },
    ],
  },

  // NEW
  {
    id: "06",
    title: "SEO Services",
    category: "SEO Services",
    logoImage: "/services/seo.png",
    description:
      "Rank higher and grow faster with our data-driven SEO strategies. We optimize your digital presence from the ground up, turning search engine algorithms into powerful growth drivers that bring continuous qualified buyers directly to your business.",
    description2:
      "We focus on sustainable organic growth that goes beyond simple traffic. By aligning target keywords with user intent, we maximize your market visibility, build bulletproof brand trust, and secure top positions on search engines.",
    links: [
      { title: "Keyword Strategy", href: "/services/keyword-strategy" },
      { title: "Content Optimization", href: "/services/content-optimization" },
      { title: "Audience Growth", href: "/services/audience-growth" },
    ],
  },

  // NEW
  {
    id: "07",
    title: "AI Search & Visibility",
    category: "SEO Services",
    logoImage: "/services/ai-seo.png",
    description:
      "Be found, grow faster, and stay ahead with next-generation AI SEO strategies. We optimize your website for modern search engine algorithms, ensuring your business gets featured at the very top of AI-generated overviews and organic search results.",
    description2:
      "We combine traditional SEO expertise with advanced AI search optimization to build unbeatable digital authority. Our data-driven approach drives higher traffic, cements brand trust, and delivers massive business growth in a rapidly changing digital world.",
    links: [
      {
        title: "AI Overview Optimization",
        href: "/services/ai-overview-optimization",
      },
      {
        title: "Smart Search Visibility",
        href: "/services/smart-search-visibility",
      },
      {
        title: "Multi-Platform Growth",
        href: "/services/multi-platform-growth",
      },
    ],
  },

  // NEW
  {
    id: "08",
    title: "On-Page SEO",
    category: "SEO Services",
    logoImage: "/services/onpage.png",
    description:
      "Optimize your website for better rankings by fine-tuning every element on your pages. We clean up your site's internal structure and align your layout with search engine standards to ensure search crawlers easily understand and rank your business high.",
    description2:
      "We focus on maximizing your on-site visibility and driving higher conversions. By strategically placing high-value keywords and delivering seamless user experiences, we convert casual organic visitors into paying customers.",
    links: [
      {
        title: "Keyword & Meta Optimization",
        href: "/services/keyword-meta-optimization",
      },
      {
        title: "High-Quality Content Structure",
        href: "/services/content-structure",
      },
      {
        title: "Mobile & Technical Performance",
        href: "/services/mobile-technical-performance",
      },
    ],
  },

  {
    id: "09",
    title: "Paid Media",
    category: "Digital Marketing",
    logoImage: "/services/digitalMarketing.png",
    description:
      "Turn advertising spend into measurable growth with targeted paid media campaigns designed to reach the right audience at the right moment.",
    description2:
      "From search campaigns to social advertising, we build, optimize, and scale performance campaigns around clicks, conversions, leads, and revenue.",
    links: [
      { title: "Google Ads (PPC)", href: "/services/google-ads" },
      { title: "Meta Ads", href: "/services/meta-ads" },
      { title: "LinkedIn Ads", href: "/services/linkedin-ads" },
    ],
  },

  // NEW
  {
    id: "10",
    title: "Paid Marketing",
    category: "Digital Marketing",
    logoImage: "/services/digitalMarketing.png",
    description:
      "Target right, reach more, and grow faster with high-converting paid campaigns. We design data-driven advertising strategies that put your brand directly in front of active buyers, turning your ad spend into a powerful engine for instant traffic and quality leads.",
    description2:
      "We focus on maximizing your return on investment (ROI) across all major platforms. By continuously optimizing targets and tracking results, we eliminate wasted budget, boost conversion rates, and deliver predictable business growth that scales seamlessly.",
    links: [
      {
        title: "Search & Social Ads",
        href: "/services/search-social-ads",
      },
      {
        title: "Video & B2B Campaigns",
        href: "/services/video-b2b-campaigns",
      },
      {
        title: "High-ROI Retargeting Strategies",
        href: "/services/retargeting",
      },
    ],
  },

  // NEW
  {
    id: "11",
    title: "Web Development",
    category: "Digital Marketing",
    logoImage: "/services/webdevelopment.png",
    description:
      "Turn your ideas into powerful websites that build strong digital brands. We craft high-performing websites tailored to your business needs, ensuring clean code, smooth functionality, and an exceptional user experience that keeps visitors engaged from the very first click.",
    description2:
      "We focus on building future-ready websites that load instantly and scale seamlessly as your business grows. By blending modern UI/UX design with robust backend development, we create digital solutions that look stunning and convert traffic into customers.",
    links: [
      {
        title: "Custom Development & Modern Design",
        href: "/services/custom-web-development",
      },
      {
        title: "Fully Responsive & High Performance",
        href: "/services/responsive-web-development",
      },
      {
        title: "Secure, Scalable & SEO-Friendly Architecture",
        href: "/services/seo-friendly-development",
      },
    ],
  },

  // NEW
  {
    id: "12",
    title: "Digital Marketing",
    category: "Digital Marketing",
    logoImage: "/services/digitalMarketing.png",
    description:
      "Grow your brand and dominate the digital landscape with our all-in-one marketing strategies. We connect your business with the right audience across the web, using a mix of proven channels to increase your reach, generate premium leads, and maximize your market presence.",
    description2:
      "We focus on data-driven marketing campaigns that deliver measurable business growth. By combining social media management, brand positioning, and smart audience targeting, we turn your online footprint into a consistent source of revenue and customer loyalty.",
    links: [
      {
        title: "Omnichannel Brand Strategy & Positioning",
        href: "/services/brand-strategy",
      },
      {
        title: "Targeted Audience Outreach & Engagement",
        href: "/services/audience-engagement",
      },
      {
        title: "End-to-End Performance Tracking & Growth",
        href: "/services/performance-tracking",
      },
    ],
  },

  {
    id: "13",
    title: "Content & Social",
    category: "Digital Marketing",
    logoImage: "/services/socialmedia.png",
    description:
      "Build a recognizable digital presence through content and social strategies that attract audiences, strengthen your brand, and keep customers engaged.",
    description2:
      "We combine valuable content with consistent social media execution to create meaningful brand visibility across the channels where your audience spends time.",
    links: [
      {
        title: "Content Marketing",
        href: "/services/content-marketing",
      },
      {
        title: "Social Media Management",
        href: "/services/social-media",
      },
    ],
  },

  // NEW
  {
    id: "14",
    title: "Social Media Marketing",
    category: "Digital Marketing",
    logoImage: "/services/socialmedia.png",
    description:
      "Build a powerful online community and turn casual scrollers into loyal customers. We design data-driven social media strategies that elevate your brand voice, boost engagement across all key networks, and create high-performing content that sparks meaningful conversations with your target audience.",
    description2:
      "We focus on multi-channel growth that connects your business with active users where they hang out most. By blending creative storytelling, trend tracking, and audience insight analytics, we transform your social channels into a highly profitable revenue driver.",
    links: [
      {
        title: "Creative Content & Video Production",
        href: "/services/social-content-production",
      },
      {
        title: "Strategic Community Management & Engagement",
        href: "/services/community-management",
      },
      {
        title: "Campaign Planning & Analytics",
        href: "/services/social-campaigns",
      },
    ],
  },

  // NEW
  {
    id: "15",
    title: "Content Marketing",
    category: "Digital Marketing",
    logoImage: "/services/contentmarketing.png",
    description:
      "Attract, educate, and convert your ideal audience with value-driven content marketing. We create high-quality, informative content that answers your customers' biggest questions, builds industry trust, and subtly guides visitors along every stage of the buying journey.",
    description2:
      "We focus on establishing your business as a market authority. From high-ranking articles to engaging visual stories, our content strategies are built to command attention, improve your organic search footprint, and nurture long-term customer relationships.",
    links: [
      {
        title: "Authority-Building Strategy & Copywriting",
        href: "/services/content-strategy",
      },
      {
        title: "Multi-Format Content Creation",
        href: "/services/content-creation",
      },
      {
        title: "Content Distribution & Optimization",
        href: "/services/content-distribution",
      },
    ],
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

              <h2 className="text-[58px] font-medium leading-none tracking-[-0.055em] text-[#0B1120] xl:text-[64px]">
                Platform Services
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
                  h-[520px]
                  w-[84vw]
                  max-w-[1480px]
                  min-w-[1100px]
                  shrink-0
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/[0.055]
                  bg-white
                  shadow-[0_20px_60px_rgba(15,23,42,0.09)]
                "
              >
                {/* =================================================
                    LEFT VISUAL PANEL — 40%
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-full
                    w-[40%]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#eef2f6]
                  "
                >
                  {/* Background gradients */}

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

                    <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#4285F4]/[0.08] blur-3xl" />

                    <div className="absolute -bottom-24 left-1/3 h-[260px] w-[260px] rounded-full bg-[#EA4335]/[0.05] blur-3xl" />
                  </div>

                  {/* Grid */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-[0.35]
                      [background-image:linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
                      [background-size:42px_42px]
                    "
                  />

                  {/* Category */}

                  <div className="absolute left-8 top-7 z-20">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#64748B] shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Number */}

                  <span className="absolute bottom-7 left-8 z-20 text-[11px] font-semibold tracking-[0.2em] text-black/25">
                    {service.id}
                  </span>

                  {/* Logo */}

                  {service.logoImage ? (
                    <div className="relative z-10 flex h-full w-full items-center justify-center ">
                      <Image
                        src={service.logoImage}
                        alt={`${service.title} logo`}
                        width={500}
                        height={300}
                        priority={service.id === "01"}
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 text-3xl font-semibold tracking-[-0.04em] text-[#0B1120]">
                      {service.title}
                    </div>
                  )}
                </div>

                {/* =================================================
                    RIGHT CONTENT PANEL — 60%
                ================================================= */}

                <div className="flex h-full w-[60%] flex-col justify-center px-12 py-12 xl:px-16">
                  {/* Category */}

                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#4285F4]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#64748B]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.045em] text-[#0B1120] xl:text-[40px]">
                    {service.title}
                  </h3>

                  {/* Descriptions */}

                  <div className="mt-6 flex max-w-[850px] gap-8">
                    <p className="w-1/2 text-[14px] leading-[1.7] text-[#64748B] xl:text-[15px]">
                      {service.description}
                    </p>

                    <p className="w-1/2 border-l border-black/[0.06] pl-8 text-[14px] leading-[1.7] text-[#64748B] xl:text-[15px]">
                      {service.description2}
                    </p>
                  </div>

                  {/* Links */}

                  <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                    {service.links.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-[13px]
                          font-semibold
                          text-[#303030]
                          transition-colors
                          duration-300
                          hover:text-[#4285F4]
                        "
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4285F4] transition-transform duration-300 group-hover:scale-150" />

                        <span className="underline-offset-4 group-hover:underline">
                          {link.title}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom */}

                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                      {service.title}
                    </span>

                    <span className="text-[10px] font-medium text-black/30">
                      Scroll to explore →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET
      ====================================================== */}

      <div className="px-5 pb-20 pt-16 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4285F4]">
            What We Do
          </p>

          <h2 className="text-4xl font-medium leading-none tracking-[-0.05em] text-[#0B1120] sm:text-5xl">
            Platform Services
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
                  border-black/[0.06]
                  bg-white
                  shadow-[0_16px_45px_rgba(15,23,42,0.08)]
                "
              >
                {/* MOBILE VISUAL PANEL */}

                <div
                  className="
                    relative
                    flex
                    min-h-[360px]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#eef2f6]
                    sm:min-h-[400px]
                  "
                >
                  {/* Background */}

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-16 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

                    <div className="absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-[#4285F4]/[0.07] blur-3xl" />

                    <div className="absolute -bottom-16 left-1/3 h-[190px] w-[190px] rounded-full bg-[#EA4335]/[0.05] blur-3xl" />
                  </div>

                  {/* Grid */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-[0.3]
                      [background-image:linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)]
                      [background-size:36px_36px]
                    "
                  />

                  {/* Category */}

                  <div className="absolute left-5 top-5 z-20">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#64748B] shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Number */}

                  <span className="absolute bottom-5 left-5 z-20 text-[10px] font-semibold tracking-[0.18em] text-black/25">
                    {service.id}
                  </span>

                  {/* Logo */}

                  {service.logoImage ? (
                    <div className="relative z-10 flex h-full w-full items-center justify-center p-10">
                      <Image
                        src={service.logoImage}
                        alt={`${service.title} logo`}
                        width={400}
                        height={250}
                        className="
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 text-3xl font-semibold text-[#0B1120]">
                      {service.title}
                    </div>
                  )}
                </div>

                {/* CONTENT */}

                <div className="p-7 sm:p-9">
                  {/* Category */}

                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#4285F4]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748B]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#0B1120] sm:text-[32px]">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-[14px] leading-7 text-[#64748B]">
                    {service.description}
                  </p>

                  <p className="mt-5 text-[14px] leading-7 text-[#64748B]">
                    {service.description2}
                  </p>

                  {/* Links */}

                  <div className="mt-7 grid gap-3">
                    {service.links.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          text-[14px]
                          font-semibold
                          text-[#303030]
                          transition-colors
                          hover:text-[#4285F4]
                        "
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4285F4] transition-transform duration-300 group-hover:scale-150" />

                        <span className="underline-offset-4 group-hover:underline">
                          {link.title}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom */}

                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                      {service.title}
                    </span>

                    <span className="text-[11px] text-black/30">
                      Explore →
                    </span>
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
