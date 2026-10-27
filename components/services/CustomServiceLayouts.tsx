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
  Check,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Layers,
  Sparkles,
  Search,
  Settings,
  Sliders,
} from "lucide-react";
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
import TrustedBrands from "@/components/pages/trustedBrand";
import ServiceContent from "@/components/pages/serviceContent";
import TeamAbout from "@/components/pages/teamProcess";
import FAQSection from "@/components/pages/faqSection";
import BlogResourcesPreview from "@/components/pages/blogResourcesPreview";
import { getBlogsByServiceSlug } from "@/components/Data/serviceSpecificBlogs";
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
import DualLayerSpotlightSection from "@/components/services/DualLayerSpotlightSection";
import BannerHeaderPricing from "@/components/services/BannerHeaderPricing";
import PaidMediaRoasStrip from "@/components/services/PaidMediaRoasStrip";
import AdCreativeShowcase from "@/components/services/AdCreativeShowcase";
import ExpertInsightChecklistSection from "@/components/services/ExpertInsightChecklistSection";
import TabbedFeatureShowcase from "@/components/services/TabbedFeatureShowcase";
import DetailedMatrixPricing from "@/components/services/DetailedMatrixPricing";
import HowWeDeliverResults from "@/components/pages/HowWeDeliverResults";
import ProblemsSolutions from "@/components/pages/Problemssolutions";
import IndustriesWeServe from "@/components/pages/industriesweserve";
import StruggleVsSolutionSection from "@/components/services/StruggleVsSolutionSection";
import VerticalTabsDeliverables from "@/components/services/VerticalTabsDeliverables";
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
  const isEcommerce = slug === "ecommerce-seo";
  const isShopify = slug === "shopify-seo";
  const isWordPress = slug === "wordpress-seo";
  const isWebflow = slug === "webflow-seo";

  return (
    <div className="bg-[#fcfdfd] text-slate-900">
      {/* Section 1: Hero */}
      <ServicePageBanner
        variant="ecommerce"
        categoryBadge={{
          label: isEcommerce
            ? "ECOMMERCE SEO SERVICES"
            : isShopify
            ? "SHOPIFY SEO AGENCY"
            : isWordPress
            ? "WORDPRESS SEO SERVICES"
            : isWebflow
            ? "WEBFLOW SEO AGENCY"
            : data.hero.eyebrow,
          theme: "blue",
        }}
        headlinePrefix={
          isEcommerce
            ? "Ecommerce SEO Services "
            : isShopify
            ? "Shopify SEO Agency "
            : isWordPress
            ? "WordPress SEO Services "
            : isWebflow
            ? "Webflow SEO Agency "
            : data.hero.headline.includes("That")
            ? data.hero.headline.split("That")[0]
            : data.hero.headline
        }
        headlineHighlight={
          isEcommerce
            ? "That Turn Search Traffic Into Sales"
            : isShopify
            ? "for Stores That Want More Organic Sales"
            : isWordPress
            ? "to Fix, Speed Up and Rank Your Site"
            : isWebflow
            ? "for SaaS and Service Brands"
            : data.hero.headline.includes("That")
            ? `That ${data.hero.headline.split("That")[1]}`
            : ""
        }
        description={data.hero.paragraph}
        features={
          isEcommerce
            ? [
                "Revenue-focused strategy, not vanity rankings",
                "Category, product and technical SEO under one roof",
                "Transparent monthly reporting tied to sales",
              ]
            : isShopify
            ? [
                "Built for Shopify's structure, themes and apps",
                "Collection, product and technical SEO under one roof",
                "Transparent monthly reporting tied to sales",
              ]
            : isWordPress
            ? [
                "Technical, speed and on-page SEO under one roof",
                "Plugin and theme clean-up without breaking your site",
                "Transparent monthly reporting tied to leads and sales",
              ]
            : isWebflow
            ? [
                "Built for Webflow's CMS, collections and custom code",
                "Technical, schema and content SEO under one roof",
                "Transparent monthly reporting tied to leads and revenue",
              ]
            : undefined
        }
        ctaText={
          isEcommerce
            ? "Get Your Free Store Audit"
            : isShopify
            ? "Get Your Free Shopify SEO Audit"
            : isWordPress
            ? "Get Your Free WordPress SEO Audit"
            : isWebflow
            ? "Get Your Free Webflow SEO Audit"
            : data.hero.ctaLabel || "Learn More"
        }
        ctaHref="/contact"
        secondaryCtaText={
          isEcommerce
            ? "Talk to an SEO Expert"
            : isShopify
            ? "Talk to a Shopify SEO Expert"
            : isWordPress
            ? "Talk to a WordPress SEO Expert"
            : isWebflow
            ? "Talk to a Webflow SEO Expert"
            : undefined
        }
        secondaryCtaHref="/contact"
      />

      {/* Section 2: Results Strip */}
      <QuickMetricsBar
        metrics={
          isEcommerce
            ? [
                {
                  value: "+150%",
                  title: "Organic traffic growth",
                  description:
                    "Average organic traffic growth driven by category, product and technical store optimizations.",
                },
                {
                  value: "+85%",
                  title: "Non-branded keyword ranking growth",
                  description:
                    "Helping high-intent shoppers discover your collections instead of only searching brand names.",
                },
                {
                  value: "+65%",
                  title: "Organic revenue growth",
                  description:
                    "Turning organic visitors directly into transactions, higher average order value, and recurring buyers.",
                },
                {
                  value: "+90%",
                  title: "Page speed and Core Web Vitals improvement",
                  description:
                    "Eliminating render blockers and catalog latency for seamless browsing and faster checkout.",
                },
              ]
            : isShopify
            ? [
                {
                  value: "+150%",
                  title: "Organic traffic growth",
                  description:
                    "Average organic traffic growth driven by collection, product and technical Shopify optimizations.",
                },
                {
                  value: "+85%",
                  title: "Non-branded keyword ranking growth",
                  description:
                    "Helping shoppers find your collections instead of only searching for your brand name.",
                },
                {
                  value: "+65%",
                  title: "Organic revenue growth",
                  description:
                    "Turning organic visits into transactions, higher order values and repeat buyers.",
                },
                {
                  value: "+90%",
                  title: "Page speed and Core Web Vitals improvement",
                  description:
                    "Liquid theme and app script clean-ups that speed up mobile browsing and checkout.",
                },
              ]
            : isWordPress
            ? [
                {
                  value: "+150%",
                  title: "Organic traffic growth",
                  description:
                    "Average organic traffic growth across corporate sites, blogs, and high-volume portals.",
                },
                {
                  value: "+85%",
                  title: "Non-branded keyword ranking growth",
                  description:
                    "Capturing high-intent commercial and service keywords instead of relying only on brand queries.",
                },
                {
                  value: "+65%",
                  title: "Conversion-rate-led organic growth",
                  description:
                    "Turning search visits directly into qualified leads, consultations, and closed clients.",
                },
                {
                  value: "+90%",
                  title: "Page speed and Core Web Vitals improvement",
                  description:
                    "Removing plugin bloat, optimizing caching, and passing mobile and desktop Core Web Vitals.",
                },
              ]
            : isWebflow
            ? [
                {
                  value: "+150%",
                  title: "Organic traffic growth",
                  description:
                    "Average organic traffic growth driven by CMS structure, technical fixes and content.",
                },
                {
                  value: "+85%",
                  title: "Non-branded keyword ranking growth",
                  description:
                    "Helping high-intent buyers discover your SaaS solutions and service pages.",
                },
                {
                  value: "+65%",
                  title: "Organic lead growth",
                  description:
                    "Turning organic search visitors directly into demo bookings, qualified inquiries and pipeline.",
                },
                {
                  value: "+90%",
                  title: "Page speed and Core Web Vitals improvement",
                  description:
                    "Clean code, asset optimization and fast rendering that pass mobile and desktop Core Web Vitals.",
                },
              ]
            : undefined
        }
      />

      {/* Section 3: Trusted by Brands */}
      <TrustedBrands
        trustedbrands={
          isEcommerce
            ? {
                ...data.trustedBrands,
                headline: "Trusted by Brands. Proven by",
                headlineHighlight: "Results.",
                description:
                  "Online stores and D2C brands choose IGR Digital for ecommerce SEO that is measurable, honest and built around revenue. Here are some of the brands we have worked with.",
              }
            : isShopify
            ? {
                ...data.trustedBrands,
                headline: "Trusted by Brands. Proven by",
                headlineHighlight: "Results.",
                description:
                  "Shopify stores and D2C brands choose IGR Digital for SEO that is measurable, honest and built around revenue. Here are some of the brands we have worked with.",
              }
            : isWordPress
            ? {
                ...data.trustedBrands,
                headline: "Trusted by Brands. Proven by",
                headlineHighlight: "Results.",
                description:
                  "Businesses, publishers and online stores trust IGR Digital for WordPress SEO that is measurable, honest and built around growth. Here are some of the brands we have worked with.",
              }
            : isWebflow
            ? {
                ...data.trustedBrands,
                headline: "Trusted by Brands. Proven by",
                headlineHighlight: "Results.",
                description:
                  "SaaS companies, agencies and service brands trust IGR Digital for Webflow SEO that is measurable, honest and built around growth. Here are some of the brands we have worked with.",
              }
            : data.trustedBrands
        }
      />

      {/* Section 4: Why Industry Leaders Trust Us / Problem and Solution */}
      {slug === "shopify-seo" || slug === "ecommerce-seo" ? (
        <StruggleVsSolutionSection
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          struggleHeaderTitle="Your Daily Struggles"
          solutionHeaderTitle="Our Proven Solution"
          items={
            isEcommerce
              ? [
                  {
                    struggleTitle: "Struggling to rank on non-branded searches",
                    struggleDesc:
                      "Your store only gets traffic from people who already know your name.",
                    solutionTitle: "Category architecture built for search",
                    solutionDesc:
                      "A clean structure so Google and shoppers reach the right page fast.",
                  },
                  {
                    struggleTitle: "Thousands of duplicate or thin pages",
                    struggleDesc:
                      "Filters, variants and URL parameters waste your crawl budget.",
                    solutionTitle: "Product page optimization",
                    solutionDesc:
                      "Titles, descriptions, schema and internal links that win clicks and sales.",
                  },
                  {
                    struggleTitle: "Weak category and product pages",
                    struggleDesc:
                      "They sit on page two and never convert.",
                    solutionTitle: "Technical clean-up",
                    solutionDesc:
                      "Crawl, index and speed issues fixed in order of revenue impact.",
                  },
                  {
                    struggleTitle: "No clear reporting",
                    struggleDesc:
                      "You can't see what SEO adds to revenue.",
                    solutionTitle: "Clear reporting",
                    solutionDesc:
                      "Organic sessions, assisted revenue and keyword growth in one dashboard.",
                  },
                ]
              : isShopify
              ? [
                  {
                    struggleTitle: "Struggling to rank on non-branded searches",
                    struggleDesc:
                      "Your store only gets traffic from people who already know your name.",
                    solutionTitle: "Collection architecture built for search",
                    solutionDesc:
                      "Clean structure and internal links so Google and shoppers reach the right page fast.",
                  },
                  {
                    struggleTitle: "Duplicate and thin pages",
                    struggleDesc:
                      "Collection filters, tags, variants and pagination create URLs that compete with each other.",
                    solutionTitle: "Product page optimization",
                    solutionDesc:
                      "Titles, descriptions, schema and image SEO that win clicks and sales.",
                  },
                  {
                    struggleTitle: "Slow, app-heavy themes",
                    struggleDesc:
                      "Too many apps and scripts drag down speed and Core Web Vitals.",
                    solutionTitle: "Technical Shopify clean-up",
                    solutionDesc:
                      "Canonicals, indexing, theme code and app scripts fixed in order of revenue impact.",
                  },
                  {
                    struggleTitle: "No clear reporting",
                    struggleDesc:
                      "You can't see what SEO adds to revenue.",
                    solutionTitle: "Clear reporting",
                    solutionDesc:
                      "Organic sessions, assisted revenue and keyword growth in one dashboard.",
                  },
                ]
              : undefined
          }
          benefits={data.whyChooseUs.benefits}
        />
      ) : (
        <section className="py-12 sm:py-16 bg-white">
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
      )}

      {/* Section 5: Enterprise Authority for CMS Platforms */}
      {slug === "shopify-seo" || slug === "ecommerce-seo" ? (
        <TabbedFeatureShowcase
          eyebrow="REVENUE BLUEPRINT"
          title="Engineered for Scalable Organic Revenue and"
          highlightText="High-AOV Search Visibility"
          description="Our blueprint rests on three things: architecture, technology and conversion. We target commercial-intent keywords that bring higher-value buyers, then optimize the full path from search result to checkout."
          tabs={
            isEcommerce
              ? [
                  {
                    id: "revenue-blueprint",
                    tabLabel: "Revenue Blueprint",
                    badge: "Tailored Growth",
                    title: "Tailored Growth Blueprints Built Around Real Revenue",
                    description:
                      "A fashion brand, an electronics seller and a skincare label each need a different plan. We build your roadmap around margins, catalogue size and best-selling categories, so your SEO budget goes where revenue is.",
                    bullets: [
                      "Catalogue and margin-focused commercial keyword targeting",
                      "Full search journey optimization from search result to checkout",
                      "Priority category siloing built around real store inventory",
                    ],
                    metricsTag: "High-AOV Focus",
                    ctaText: "Explore Our Approach",
                    ctaHref: "#process",
                    previewData: {
                      metricValue: "+65%",
                      metricLabel: "Organic Revenue",
                      subtext: "Compounding growth across category hubs",
                      chartTitle: "Organic Revenue Progression",
                    },
                  },
                ]
              : isShopify
              ? [
                  {
                    id: "revenue-blueprint",
                    tabLabel: "Revenue Blueprint",
                    badge: "Tailored Growth",
                    title: "Tailored Growth Blueprints Built Around Real Revenue",
                    description:
                      "A fashion brand, an electronics seller and a skincare label each need a different plan. We build your roadmap around margins, catalogue size and best-selling collections, so your SEO budget goes where revenue is.",
                    bullets: [
                      "Catalogue and margin-focused commercial keyword targeting",
                      "Full search journey optimization from search result to checkout",
                      "Priority collection siloing built around real store inventory",
                    ],
                    metricsTag: "High-AOV Focus",
                    ctaText: "Explore Our Approach",
                    ctaHref: "#process",
                    previewData: {
                      metricValue: "+65%",
                      metricLabel: "Organic Revenue",
                      subtext: "Compounding growth across collection hubs",
                      chartTitle: "Organic Revenue Progression",
                    },
                  },
                ]
              : undefined
          }
        />
      ) : (
        <HowWeDeliverResults
          eyebrow="ENTERPRISE AUTHORITY"
          title="How We Engineer Enterprise Authority for CMS Platforms"
          subtitle={
            isWebflow
              ? "Large Webflow sites need more than good design. We build the structure, speed and content systems that help hundreds or thousands of CMS pages rank together."
              : "Large WordPress sites need more than plugins. We build the structure, speed and content systems that help thousands of pages rank together."
          }
          cards={
            isWebflow
              ? [
                  {
                    icon: Search,
                    title: "Comprehensive Platform and Site Audit",
                    description:
                      "A full review of crawl, index, CMS, template and content health.",
                  },
                  {
                    icon: Settings,
                    title: "Technical and Architectural Optimization",
                    description:
                      "URL structure, collections, internal links and sitemaps built for scale.",
                  },
                  {
                    icon: Layers,
                    title: "Scalable CMS Content Strategy",
                    description:
                      "Templates and topic clusters that grow authority across many pages.",
                  },
                  {
                    icon: Sliders,
                    title: "Custom Code and Schema Alignment",
                    description:
                      "Structured data and custom code added cleanly, without bloat.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Ongoing Authority and Link Building",
                    description:
                      "Quality backlinks and digital PR that build lasting trust.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Monitoring and Reporting",
                    description:
                      "Rankings, speed and conversions tracked in one clear dashboard.",
                  },
                ]
              : isWordPress
              ? [
                  {
                    icon: Search,
                    title: "Comprehensive Platform and Site Audit",
                    description:
                      "A full review of crawl, index, theme, plugin and content health.",
                  },
                  {
                    icon: Settings,
                    title: "Technical and Architectural Optimization",
                    description:
                      "URL structure, categories, internal links and sitemaps built for scale.",
                  },
                  {
                    icon: Layers,
                    title: "Enterprise-Scale Content Strategy",
                    description:
                      "Topic clusters and templates that grow authority across many pages.",
                  },
                  {
                    icon: Sliders,
                    title: "Strategic Plugin and Theme Alignment",
                    description:
                      "We keep what helps, remove what slows you down and avoid conflicts.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Ongoing Authority and Link Building",
                    description:
                      "Quality backlinks and digital PR that build lasting trust.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Monitoring and Reporting",
                    description:
                      "Rankings, speed and conversions tracked in one clear dashboard.",
                  },
                ]
              : undefined
          }
        />
      )}

      {/* Section 6 & 7 & 8: Agency Positioning & AI Innovation */}
      <DeliverablesMatrix
        pageType={
          slug === "shopify-seo" || slug === "ecommerce-seo"
            ? "ecommerce"
            : slug === "wordpress-seo" || slug === "webflow-seo"
              ? "seo"
              : "general"
        }
        serviceName={data.hero.eyebrow}
        mainTitle={
          isEcommerce
            ? "The E-Commerce SEO Agency That Blends Architecture, Technology and Conversion to Deliver ROI"
            : isShopify
            ? "The Shopify SEO Agency That Blends Architecture, Technology and Conversion to Deliver ROI"
            : isWordPress
            ? "The WordPress SEO Company That Blends Expertise, Technology and Adaptability to Deliver ROI"
            : isWebflow
            ? "The Webflow SEO Company That Blends Expertise, Technology and Adaptability to Deliver ROI"
            : undefined
        }
        mainSubtitle={
          isEcommerce
            ? "As an ecommerce SEO agency, we don't treat your store like a blog. We understand faceted navigation, variant URLs, out-of-stock pages, seasonal collections and marketplace competition. That is what separates a specialist from a general SEO vendor."
            : isShopify
            ? "As a Shopify SEO company, we don't treat your store like a blog. We understand Liquid themes, collection and product URL patterns, variants, metafields, Shopify Markets and app conflicts. That is what separates a specialist from a general SEO vendor."
            : isWordPress
            ? "As a WordPress SEO company, we understand themes, page builders, plugins, hosting and caching, and how each one affects search. That is what separates a specialist from a general SEO vendor."
            : isWebflow
            ? "As a Webflow SEO company, we understand collections, dynamic templates, redirects, custom code and hosting settings, and how each one affects search. That is what separates a specialist from a general SEO vendor."
            : undefined
        }
        tabs={
          isEcommerce
            ? [
                {
                  id: "architecture",
                  tabLabel: "Architecture",
                  headlineTitle: "A dedicated e-commerce squad that feels like your own team",
                  headlineDescription:
                    "We don't treat your store like a blog. We assign a specialized team that understands complex catalogs, faceted URLs, and product inventory.",
                  bullets: [
                    "A strategist who owns your growth plan",
                    "Technical SEO and content specialists working on your store every week",
                    "Weekly updates and a monthly performance review",
                    "Clear priorities, so you always know what is being done and why",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Retail Lead",
                    role: "Dedicated E-Com Strategist",
                    avatar:
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "technology",
                  tabLabel: "Technology",
                  headlineTitle: "How Our Ecommerce SEO Experts Approach Your Store",
                  headlineDescription:
                    "We start with your Search Console, analytics, catalogue and competitors. Then we fix technical blockers, strengthen category and product pages, and build authority steadily. No shortcuts and no risky tactics.",
                  bullets: [
                    "Full Google Search Console & GA4 deep-dive audits",
                    "Automated catalog and faceted crawl waste detection",
                    "Real-time Shopify, WooCommerce and Magento data alignment",
                    "Revenue and assisted conversion attribution tracking",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Analytics Lead",
                    role: "Head of Retail Data",
                    avatar:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "conversion",
                  tabLabel: "Conversion",
                  headlineTitle: "Optimizing the Complete Path from Search to Checkout",
                  headlineDescription:
                    "Ranking is only half the battle. We connect commercial search terms to intuitive product discovery, fast loading speeds, and checkout trust signals.",
                  bullets: [
                    "Category page navigation and breadcrumb hierarchy",
                    "Rich Product Schema with prices, ratings and inventory",
                    "Sub-second Core Web Vitals mobile catalog performance",
                    "Conversion-led product copy and internal linking",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Conversion Lead",
                    role: "Retail Growth Strategist",
                    avatar:
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
                  },
                },
              ]
            : isShopify
            ? [
                {
                  id: "architecture",
                  tabLabel: "Architecture",
                  headlineTitle: "A dedicated Shopify squad that feels like your own team",
                  headlineDescription:
                    "We assign a specialized team that understands Shopify themes, collection structures and app ecosystems.",
                  bullets: [
                    "A strategist who owns your growth plan",
                    "Technical SEO and content specialists working on your store every week",
                    "Weekly updates and a monthly performance review",
                    "Clear priorities, so you always know what is being done and why",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Shopify Strategist",
                    role: "Dedicated Growth Lead",
                    avatar:
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "technology",
                  tabLabel: "Technology",
                  headlineTitle: "How Our Shopify SEO Experts Approach Your Store",
                  headlineDescription:
                    "We start with your Search Console, analytics, catalogue and competitors. Then we fix technical blockers, strengthen collection and product pages, and build authority steadily. No shortcuts and no risky tactics.",
                  bullets: [
                    "Search Console, analytics, catalogue and competitor audit",
                    "Technical blockers, Liquid canonicals and app code clean-up",
                    "Strengthening collection and product pages systematically",
                    "Steady authority and link building without shortcuts",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Shopify SEO Specialist",
                    role: "Technical SEO Expert",
                    avatar:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "conversion",
                  tabLabel: "Conversion",
                  headlineTitle: "Optimizing the Complete Path from Search to Checkout",
                  headlineDescription:
                    "Connecting commercial search terms directly to intuitive collection discovery, instant product page speeds and checkout trust.",
                  bullets: [
                    "Collection page navigation, filter indexing and breadcrumbs",
                    "Rich Product Schema with prices, ratings and merchant feeds",
                    "Fast Core Web Vitals across mobile and desktop themes",
                    "Conversion-led product copy and strategic internal links",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Conversion Lead",
                    role: "Shopify CRO Strategist",
                    avatar:
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
                  },
                },
              ]
            : isWordPress || isWebflow
            ? [
                {
                  id: "expertise",
                  tabLabel: "Expertise",
                  headlineTitle: "A dedicated team that feels like your own",
                  headlineDescription: isWebflow
                    ? "We assign a specialized Webflow growth squad that understands collections, dynamic templates, redirects, custom code and hosting settings."
                    : "We assign a specialized WordPress growth squad that understands themes, page builders, plugins and hosting.",
                  bullets: [
                    "A strategist who owns your growth plan",
                    "Technical SEO and content specialists working on your site every week",
                    "Weekly updates and a monthly performance review",
                    "Clear priorities, so you always know what is being done and why",
                  ],
                  ctaText: "Meet the Team →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: isWebflow ? "Webflow Lead" : "WordPress Lead",
                    role: "Senior Growth Strategist",
                    avatar:
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "technology",
                  tabLabel: "Technology",
                  headlineTitle: isWebflow
                    ? "How Our Webflow SEO Experts Approach Your Success"
                    : "How Our SEO Experts Approach Your Success",
                  headlineDescription: isWebflow
                    ? "We start with your Search Console, analytics, CMS and competitors. Then we fix technical blockers, improve speed, strengthen key pages and build authority steadily. No shortcuts and no risky tactics."
                    : "We start with your Search Console, analytics, content and competitors. Then we fix technical blockers, improve speed, strengthen key pages and build authority steadily. No shortcuts and no risky tactics.",
                  bullets: isWebflow
                    ? [
                        "Search Console, analytics, CMS and competitor audits",
                        "Collection mapping, template fixes and redirect resolution",
                        "Core Web Vitals acceleration and interaction tuning",
                        "Continuous tracking of non-branded keyword gains",
                      ]
                    : [
                        "Search Console, analytics, content and competitor audits",
                        "Plugin conflict resolution and database optimization",
                        "Core Web Vitals acceleration and caching layers",
                        "Continuous tracking of non-branded keyword gains",
                      ],
                  ctaText: "Meet the Team →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Technical Lead",
                    role: isWebflow ? "Webflow Architect" : "WordPress Architect",
                    avatar:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
                  },
                },
                {
                  id: "adaptability",
                  tabLabel: "Adaptability",
                  headlineTitle: "Scalable Search Architecture Without Bloat",
                  headlineDescription: isWebflow
                    ? "We preserve the look and interactions of your Webflow site while optimizing assets, ensuring your site stays agile through algorithm updates."
                    : "We preserve the look and functionality of your site while pruning heavy scripts, ensuring your site stays agile through algorithm updates.",
                  bullets: [
                    "Theme and builder clean-ups without design disruption",
                    "Safe updates and staging environment validations",
                    "Bi-weekly sprint deliverables and executive syncs",
                    "Transparent Looker Studio reporting and lead tracking",
                  ],
                  ctaText: "Meet the Team →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Strategy Lead",
                    role: "Technical SEO Expert",
                    avatar:
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
                  },
                },
              ]
            : undefined
        }
        midFeature={
          isEcommerce || isShopify
            ? {
                videoTitle: "RETAIL ARCHITECTURE",
                title: "What Retail Architecture Means for Conversion Optimization",
                description:
                  "Strong rankings still start with strong foundations: crawlable structure, fast pages and relevant content. On top of that, we use AI-assisted analysis to spot keyword gaps, group search intent, flag thin pages and prioritize fixes faster. Our specialists review every recommendation, so you get speed without guesswork.",
                pills: [
                  "Keyword clustering by buying intent",
                  "Faster audits across large catalogues",
                  "Smarter internal linking suggestions",
                  "Content briefs reviewed by human editors",
                ],
              }
            : isWordPress
            ? {
                videoTitle: "AI AND SEARCH INNOVATION",
                badgeText: "FOUNDATIONAL SEO MEETS AI",
                title: "What's Included in Our SEO Services",
                description:
                  "Strong rankings still start with strong foundations: crawlable structure, fast pages and useful content. On top of that, we use AI-assisted analysis to find keyword gaps, group search intent, flag thin pages and prioritize fixes faster. Our specialists review every recommendation, so you get speed without guesswork.",
                pills: [
                  "Technical audits",
                  "Keyword clustering",
                  "Content briefs",
                  "Internal linking",
                  "Schema setup",
                  "Speed testing",
                ],
              }
            : isWebflow
            ? {
                videoTitle: "AI AND SEARCH INNOVATION",
                badgeText: "FOUNDATIONAL SEO MEETS AI",
                title: "What's Included in Our SEO Services",
                description:
                  "Strong rankings still start with strong foundations: crawlable structure, fast pages and useful content. On top of that, we use AI-assisted analysis to find keyword gaps, group search intent, flag thin pages and prioritize fixes faster. We also shape your content so it can be understood and cited in AI search answers. Our specialists review every recommendation, so you get speed without guesswork.",
                pills: [
                  "CMS structure",
                  "Technical audits",
                  "Keyword clustering",
                  "Schema setup",
                  "Content briefs",
                  "Speed testing",
                ],
              }
            : undefined
        }
        expertQuote={
          isEcommerce
            ? {
                title: "How Our Ecommerce SEO Experts Approach Your Store",
                quote:
                  "We start with your Search Console, analytics, catalogue and competitors. Then we fix technical blockers, strengthen category and product pages, and build authority steadily. No shortcuts and no risky tactics.",
                authorName: "Ecommerce SEO Consultant",
                authorRole: "Reviewing store performance & organic revenue",
                avatarUrl:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
              }
            : isShopify
            ? {
                title: "How Our Shopify SEO Experts Approach Your Store",
                quote:
                  "We start with your Search Console, analytics, catalogue and competitors. Then we fix technical blockers, strengthen collection and product pages, and build authority steadily. No shortcuts and no risky tactics.",
                authorName: "Shopify SEO Expert",
                authorRole: "Reviewing store performance & organic revenue",
                avatarUrl:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
              }
            : isWordPress
            ? {
                title: "How Our SEO Experts Approach Your Success",
                quote:
                  "We start with your Search Console, analytics, content and competitors. Then we fix technical blockers, improve speed, strengthen key pages and build authority steadily. No shortcuts and no risky tactics.",
                authorName: "WordPress SEO Expert",
                authorRole: "Reviewing website performance & speed improvements",
                avatarUrl:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
              }
            : isWebflow
            ? {
                title: "How Our SEO Experts Approach Your Success",
                quote:
                  "We start with your Search Console, analytics, CMS and competitors. Then we fix technical blockers, improve speed, strengthen key pages and build authority steadily. No shortcuts and no risky tactics.",
                authorName: "Webflow SEO Expert",
                authorRole: "Reviewing website performance & CMS growth",
                avatarUrl:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
              }
            : undefined
        }
      />

      {/* Section 9: Process (id="process") */}
      <div id="process">
        <SprintRoadmap
          eyebrow="90-DAY ROADMAP"
          title="How We Drive Predictable Growth in"
          highlightText="90 Days"
          description="SEO takes time, but a 90-day plan gives you milestones, early wins and a roadmap for the quarters ahead."
          phases={
            isEcommerce
              ? [
                  {
                    phase: "Phase 1",
                    timeframe: "Days 1-30",
                    headline: "Days 1-30: Diagnose and Fix",
                    focus: "Full store audit and competitor analysis, keyword and category mapping, and critical technical fixes.",
                    deliverables: [
                      "Full store audit and competitor analysis",
                      "Keyword and category mapping",
                      "Critical technical fixes",
                    ],
                    expectedMilestone: "Crawl errors resolved, category mapping completed.",
                    tagColor: "blue",
                    roiMetric: "Technical Clean-Up",
                    speedBadge: "Diagnose & Fix",
                  },
                  {
                    phase: "Phase 2",
                    timeframe: "Days 31-60",
                    headline: "Days 31-60: Optimize and Build",
                    focus: "Optimize priority category and product pages, improve internal linking and site structure, launch content and schema improvements.",
                    deliverables: [
                      "Optimize priority category and product pages",
                      "Improve internal linking and site structure",
                      "Launch content and schema improvements",
                    ],
                    expectedMilestone: "Priority collections ranking; schema rich snippets indexed.",
                    tagColor: "yellow",
                    roiMetric: "Category & PDP Scale",
                    speedBadge: "Optimize & Build",
                  },
                  {
                    phase: "Phase 3",
                    timeframe: "Days 61-90",
                    headline: "Days 61-90: Scale and Compound",
                    focus: "Expand to more categories and keywords, start authority and link building, review performance and refine the roadmap.",
                    deliverables: [
                      "Expand to more categories and keywords",
                      "Start authority and link building",
                      "Review performance and refine the roadmap",
                    ],
                    expectedMilestone: "Compounding organic revenue and high-margin keyword dominance.",
                    tagColor: "green",
                    roiMetric: "Compounding GMV",
                    speedBadge: "Scale & Compound",
                  },
                ]
              : isShopify
              ? [
                  {
                    phase: "Phase 1",
                    timeframe: "Days 1-30",
                    headline: "Days 1-30: Diagnose and Fix",
                    focus: "Full Shopify SEO audit and competitor analysis, keyword and collection mapping, and critical technical fixes.",
                    deliverables: [
                      "Full Shopify SEO audit and competitor analysis",
                      "Keyword and collection mapping",
                      "Critical technical fixes",
                    ],
                    expectedMilestone: "Theme crawl errors resolved, collection mapping complete.",
                    tagColor: "blue",
                    roiMetric: "Technical Clean-Up",
                    speedBadge: "Diagnose & Fix",
                  },
                  {
                    phase: "Phase 2",
                    timeframe: "Days 31-60",
                    headline: "Days 31-60: Optimize and Build",
                    focus: "Optimize priority collection and product pages, improve internal linking and navigation, launch content, schema and speed improvements.",
                    deliverables: [
                      "Optimize priority collection and product pages",
                      "Improve internal linking and navigation",
                      "Launch content, schema and speed improvements",
                    ],
                    expectedMilestone: "Priority collections ranking, Product schema rich snippets indexed.",
                    tagColor: "yellow",
                    roiMetric: "Collection & PDP Scale",
                    speedBadge: "Optimize & Build",
                  },
                  {
                    phase: "Phase 3",
                    timeframe: "Days 61-90",
                    headline: "Days 61-90: Scale and Compound",
                    focus: "Expand to more collections and keywords, start authority and link building, review performance and refine the roadmap.",
                    deliverables: [
                      "Expand to more collections and keywords",
                      "Start authority and link building",
                      "Review performance and refine the roadmap",
                    ],
                    expectedMilestone: "Compounding organic orders and high-value search visibility.",
                    tagColor: "green",
                    roiMetric: "Compounding Sales",
                    speedBadge: "Scale & Compound",
                  },
                ]
              : isWordPress
              ? [
                  {
                    phase: "Phase 1",
                    timeframe: "Days 1-30",
                    headline: "Days 1-30: Diagnose and Fix",
                    focus: "Full WordPress SEO audit and competitor analysis, keyword and page mapping, and critical technical and indexing fixes.",
                    deliverables: [
                      "Full WordPress SEO audit and competitor analysis",
                      "Keyword and page mapping",
                      "Critical technical and indexing fixes",
                    ],
                    expectedMilestone: "Crawl and indexing blockers resolved, architecture map finalized.",
                    tagColor: "blue",
                    roiMetric: "Technical Clean-Up",
                    speedBadge: "Diagnose & Fix",
                  },
                  {
                    phase: "Phase 2",
                    timeframe: "Days 31-60",
                    headline: "Days 31-60: Optimize and Build",
                    focus: "Plugin, theme and speed optimization, on-page improvements for priority pages, schema, sitemap and internal linking updates.",
                    deliverables: [
                      "Plugin, theme and speed optimization",
                      "On-page improvements for priority pages",
                      "Schema, sitemap and internal linking updates",
                    ],
                    expectedMilestone: "Core Web Vitals passed, key service and pillar pages ranking.",
                    tagColor: "yellow",
                    roiMetric: "On-Page & Speed Scale",
                    speedBadge: "Optimize & Build",
                  },
                  {
                    phase: "Phase 3",
                    timeframe: "Days 61-90",
                    headline: "Days 61-90: Scale and Compound",
                    focus: "Content expansion and new keyword targets, authority and link building, performance review and roadmap refinement.",
                    deliverables: [
                      "Content expansion and new keyword targets",
                      "Start authority and link building",
                      "Review performance and refine the roadmap",
                    ],
                    expectedMilestone: "Compounding organic traffic and non-branded search leads.",
                    tagColor: "green",
                    roiMetric: "Compounding Traffic",
                    speedBadge: "Scale & Compound",
                  },
                ]
              : isWebflow
              ? [
                  {
                    phase: "Phase 1",
                    timeframe: "Days 1-30",
                    headline: "Days 1-30: Diagnose and Fix",
                    focus: "Full Webflow SEO audit and competitor analysis, keyword and page mapping, critical technical, redirect and indexing fixes.",
                    deliverables: [
                      "Full Webflow SEO audit and competitor analysis",
                      "Keyword and page mapping",
                      "Critical technical, redirect and indexing fixes",
                    ],
                    expectedMilestone: "CMS crawl blockers and 301 redirect map resolved.",
                    tagColor: "blue",
                    roiMetric: "Technical Clean-Up",
                    speedBadge: "Diagnose & Fix",
                  },
                  {
                    phase: "Phase 2",
                    timeframe: "Days 31-60",
                    headline: "Days 31-60: Optimize and Build",
                    focus: "CMS and collection template optimization, meta, Open Graph and schema setup, site speed and Core Web Vitals improvements.",
                    deliverables: [
                      "CMS and collection template optimization",
                      "Meta, Open Graph and schema setup",
                      "Site speed and Core Web Vitals improvements",
                    ],
                    expectedMilestone: "Collection templates ranking; Open Graph & schema live.",
                    tagColor: "yellow",
                    roiMetric: "CMS & Speed Scale",
                    speedBadge: "Optimize & Build",
                  },
                  {
                    phase: "Phase 3",
                    timeframe: "Days 61-90",
                    headline: "Days 61-90: Scale and Compound",
                    focus: "Content expansion and new keyword targets, start authority and link building, review performance and refine the roadmap.",
                    deliverables: [
                      "Content expansion and new keyword targets",
                      "Start authority and link building",
                      "Review performance and refine the roadmap",
                    ],
                    expectedMilestone: "Compounding organic traffic and steady demo/inquiry pipeline.",
                    tagColor: "green",
                    roiMetric: "Compounding Inquiries",
                    speedBadge: "Scale & Compound",
                  },
                ]
              : undefined
          }
        />
      </div>

      {/* Section 10: Tech Stack */}
      <TechStackGrid
        eyebrow="TOOLING & INFRASTRUCTURE"
        title="Powered by the Industry's Most"
        highlightText="Sophisticated Tech Stack"
        description="We use trusted SEO, analytics and crawling tools to find issues faster and track results accurately."
        tools={
          isEcommerce || isShopify || isWordPress || isWebflow
            ? [
                {
                  name: "Technical Audit",
                  category: "CRAWL & SPEED",
                  description: "Finds crawl, index and speed issues across every URL.",
                  badge: "Full Crawl",
                },
                {
                  name: "Keyword Research",
                  category: "BUYING INTENT",
                  description: isWebflow
                    ? "Uncovers buying-intent and product-led search opportunities."
                    : isWordPress
                    ? "Uncovers buying-intent and local-intent opportunities."
                    : isShopify
                    ? "Uncovers buying-intent terms and collection opportunities."
                    : "Uncovers buying-intent terms and category opportunities.",
                  badge: "Intent Clustering",
                },
                {
                  name: "Rank Tracking",
                  category: "SERP MONITORING",
                  description: isWebflow || isWordPress
                    ? "Monitors non-branded and priority keywords daily."
                    : "Monitors non-branded and product keywords daily.",
                  badge: "Daily Tracking",
                },
                {
                  name: "Core Web Vitals",
                  category: "SITE PERFORMANCE",
                  description: "Tests and improves mobile and desktop speed.",
                  badge: "Speed & UX",
                },
                {
                  name: "Analytics and Reporting",
                  category: "REVENUE ATTRIBUTION",
                  description: isWebflow || isWordPress
                    ? "Connects organic traffic to leads and revenue."
                    : "Connects organic traffic to revenue.",
                  badge: "GA4 & Orders",
                },
                {
                  name: "Schema and Structured Data",
                  category: "RICH RESULTS",
                  description: isWebflow || isWordPress
                    ? "Earns rich results for articles, products, reviews and FAQs."
                    : "Earns rich results for products, reviews and FAQs.",
                  badge: "Merchant Schema",
                },
              ]
            : undefined
        }
      />

      {/* Section 11: Free Audit Form */}
      <AuditQuoteWidget
        eyebrow={
          isWebflow
            ? "FREE WEBFLOW AUDIT"
            : isWordPress
            ? "FREE WORDPRESS AUDIT"
            : isShopify
            ? "FREE SHOPIFY AUDIT"
            : "FREE STORE AUDIT"
        }
        title="Discover What's Holding Your Website Back from Page #1"
        description={
          isWebflow
            ? "Get a free Webflow SEO audit covering your technical health, CMS structure, speed and biggest keyword opportunities. You get clear, actionable findings whether or not you work with us."
            : isWordPress
            ? "Get a free WordPress SEO audit covering your technical health, speed, indexing and biggest keyword opportunities. You get clear, actionable findings whether or not you work with us."
            : isShopify
            ? "Get a free Shopify SEO audit covering your technical health, collection and product page gaps, and your biggest keyword opportunities. You get clear, actionable findings whether or not you work with us."
            : "Get a free ecommerce SEO audit covering your technical health, category and product page gaps, and your biggest keyword opportunities. You get clear, actionable findings whether or not you work with us."
        }
      />

      {/* Section 12: Pricing */}
      <div id="pricing">
        {slug === "shopify-seo" || slug === "ecommerce-seo" || slug === "wordpress-seo" || slug === "webflow-seo" ? (
          <BannerHeaderPricing
            eyebrow={data.pricing.eyebrow}
            title={data.pricing.title}
            description={data.pricing.description}
            plans={data.pricing.plans}
            footerActionText={
              isWebflow || isWordPress || isShopify
                ? "All plans include transparent reporting and no surprise lock-ins."
                : "All ecommerce SEO packages include transparent reporting and no surprise lock-ins."
            }
            footerActionHref="#contact"
          />
        ) : (
          <DetailedMatrixPricing
            eyebrow={data.pricing.eyebrow}
            title={data.pricing.title}
            description={data.pricing.description}
          />
        )}
      </div>

      {/* Section 13: Long-Form Content With Side Table of Contents */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* Section 14: Case Study Feature (id="case-studies") */}
      {isWebflow ? (
        <div id="case-studies">
          <CaseStudiesMetricStripVariant
            studyKey="webflow"
            theme="blue"
            customEyebrow="IGR Digital x SaaS Brand: Webflow CMS Case Study"
            customTitle="How a SaaS Brand Scaled Its Webflow CMS Into a Steady Source of Organic Traffic"
          />
        </div>
      ) : isWordPress ? (
        <div id="case-studies">
          <CaseStudiesMetricStripVariant
            studyKey="wordpress"
            theme="blue"
            customEyebrow="IGR Digital x Legal Portal: Enterprise Content Case Study"
            customTitle="Overhauling a 2,000-Page WordPress Portal to Capture #1 Rankings Across 450 Legal Queries"
          />
        </div>
      ) : slug === "shopify-seo" || slug === "ecommerce-seo" ? (
        <DualLayerSpotlightSection
          eyebrow="PREDICTABLE STORE SALES"
          title="Turn Organic Search Traffic into"
          highlightText="Predictable Store Sales"
          description="Consistent SEO work compounds. Each optimized page, fixed issue and earned link builds on the last, giving you growth you can forecast."
          stats={
            isEcommerce || isShopify
              ? [
                  { value: "+186%", label: "Organic traffic", subtext: "Compounding growth" },
                  { value: "+45%", label: "Organic revenue", subtext: "Higher checkout volume" },
                  { value: "1,200+", label: "Keywords on page one", subtext: "Non-branded terms" },
                ]
              : [
                  { value: "+286.4%", label: "Organic Revenue", subtext: "Within 6 months" },
                  { value: "94%", label: "Store Retention", subtext: "Long-term partners" },
                  { value: "1,200+", label: "Collection Ranks", subtext: "Page #1 Google queries" },
                ]
          }
          clientName={isShopify ? "Shopify Partner Brand" : "Aura Luxury DTC Apparel"}
          clientIndustry="Shopify / E-Commerce"
          ctaText="See Case Studies"
          ctaHref="#case-studies"
        />
      ) : (
        <CaseStudiesMetricStripVariant
          studyKey="ecommerce"
          theme="blue"
        />
      )}

      {/* Section 15: Clean Architecture vs Plugin Bloat (dark section) */}
      <EditorialCalloutSection
        theme="navy"
        badge={
          isWebflow
            ? "ORGANIC SCALE"
            : isWordPress
            ? "CLEAN ARCHITECTURE"
            : isShopify
            ? "WHY SHOPIFY SEO"
            : "ONLINE STORE ESSENTIALS"
        }
        title={
          isWebflow
            ? "Unlocking Organic Scale for"
            : isWordPress
            ? "How Clean WordPress Architecture Wins Over"
            : isShopify
            ? "Why Shopify SEO Outperforms"
            : "Why Modern Platform SEO Is a Must for"
        }
        titleHighlight={
          isWebflow
            ? "Modern Webflow Builds"
            : isWordPress
            ? "Slow Plugin Bloat"
            : isShopify
            ? "Generic Store Optimization"
            : "Your Online Store Today"
        }
        introParagraph={
          isWebflow
            ? "Modern Webflow sites are fast and flexible. The right SEO setup turns that flexibility into rankings that grow with every new page you publish."
            : isWordPress
            ? "Every extra plugin adds code, requests and risk. A lean setup loads faster, is easier for Google to crawl and is simpler to maintain."
            : isShopify
            ? "Generic SEO advice ignores how Shopify actually works. A specialist plan fits your theme, your apps and your catalogue."
            : "The rapid evolution of consumer shopping habits and search engines means online stores cannot rely solely on basic product listings or expensive ads."
        }
        bulletPoints={
          isWebflow
            ? [
                "Clear collection and URL structure helps Google understand every CMS page.",
                "Reusable templates keep titles, meta and schema consistent at scale.",
                "Clean custom code and lean interactions protect your speed.",
                "Content built for search intent and AI answers earns more visibility.",
              ]
            : isWordPress
            ? [
                "Fewer plugins mean fewer conflicts, faster pages and better Core Web Vitals.",
                "A clean theme and clear permalinks help Google understand your site.",
                "Smart caching and image handling cut load time on mobile.",
                "Regular plugin and theme reviews keep your site secure and fast.",
              ]
            : isShopify
            ? [
                "Shopify's URL structure and duplicate product paths need specific canonical and internal link handling.",
                "Theme code and app scripts decide your speed, so clean-up gives real ranking gains.",
                "Collection pages are your biggest revenue pages and need their own keyword strategy.",
                "Product schema, reviews and merchant data help you win rich results and clicks.",
              ]
            : isEcommerce
            ? [
                "Shoppers start product searches on Google before they visit any store.",
                "Paid ads get costlier every year, while organic rankings keep paying back.",
                "Fast, mobile-friendly, well-structured stores rank and convert better.",
                "Marketplaces compete hard, so your own store needs its own search visibility.",
              ]
            : [
                "Over 68% of high-intent shoppers begin product discovery directly through commercial search engines.",
                "Faceted navigation optimization prevents index bloat while indexing high-intent product filters.",
                "Rich Product Schema and Merchant Center integration boost organic CTR by up to 35%.",
                "Bespoke internal linking structures route domain authority directly to high-margin collection pages.",
              ]
        }
        ctaText={
          isWebflow
            ? "Get Your Free Webflow SEO Audit"
            : isWordPress
            ? "Get Your Free WordPress SEO Audit"
            : isShopify
            ? "Get Your Free Shopify SEO Audit"
            : "Get Your Free Store Audit"
        }
        ctaHref="/contact"
      />

      {/* Section 16: Data-Driven SEO (dark blue block with form) */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow={
          isWebflow
            ? "DATA-DRIVEN WEBFLOW SEO"
            : isWordPress
            ? "DATA-DRIVEN WORDPRESS SEO"
            : isShopify
            ? "DATA-DRIVEN SHOPIFY SEO"
            : "DATA-DRIVEN ECOMMERCE SEO"
        }
        title="Turn High-Intent Searches into Confirmed Customers"
        highlightText="with Data-Driven SEO."
        description={
          isWebflow
            ? 'We focus on keywords that signal buying intent, such as "best", "pricing", "alternatives", "services" and "hire". Real search, analytics and conversion data decide what we work on next, so every decision has a reason behind it.'
            : isWordPress
            ? 'We focus on keywords that signal buying intent, such as "hire", "best", "services", "price" and "near me". Real search, analytics and conversion data decide what we work on next, so every decision has a reason behind it.'
            : isShopify
            ? 'We focus on keywords that signal buying intent, such as "buy", "best", "price" and specific product or collection names. Real search, analytics and revenue data decide what we work on next, so every decision has a reason behind it.'
            : 'We focus on keywords that signal buying intent, such as "buy", "best", "price" and specific product or category names. Real search, analytics and revenue data decide what we work on next, so every decision has a reason behind it.'
        }
        primaryCtaText="Book a Strategy Call"
        primaryCtaHref="/contact"
        secondaryCtaText="See How It Works"
        secondaryCtaHref="#process"
      />

      {/* Section 17: Comparison Table */}
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

      {/* Section 18: Growth Experts / Case Studies (id="case-studies" if not rendered above) */}
      <div id={isWordPress || isWebflow ? "growth-experts" : "case-studies"}>
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
      </div>

      {/* Section 19: FAQ (id="faq") */}
      <div id="faq">
        <FAQSection
          eyebrow={data.faqs?.eyebrow}
          title={data.faqs?.title}
          description={data.faqs?.description}
          faqs={data.faqs?.faqs}
        />
      </div>

      {/* Section 20: Proven Frameworks and Industry Insights */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
      />

      {/* Section 21: Final CTA */}
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
  const isLinkBuilding = slug === "link-building";
  const isGuestPosting = slug === "guest-posting";

  return (
    <div className="bg-[#f8fafc] text-slate-900">
      {/* Section 1: Hero */}
      <ServicePageBanner
        variant="backlinks"
        categoryBadge={{
          label: isLinkBuilding
            ? "Editorial Backlinks That Build Domain Authority and Unstoppable Rankings"
            : isGuestPosting
            ? "Contextual Guest Posts on Authoritative Industry Publications for Higher Rankings"
            : data.hero.eyebrow,
          theme: "orange",
        }}
        headlinePrefix={
          isLinkBuilding
            ? "Link Building Services "
            : isGuestPosting
            ? "Guest Posting Services on "
            : data.hero.headline.includes("That")
            ? data.hero.headline.split("That")[0]
            : data.hero.headline
        }
        headlineHighlight={
          isLinkBuilding
            ? "That Earn Relevant, High-Quality Backlinks"
            : isGuestPosting
            ? "Real Sites With Real Traffic"
            : data.hero.headline.includes("That")
            ? `That ${data.hero.headline.split("That")[1]}`
            : ""
        }
        description={data.hero.paragraph}
        features={
          isLinkBuilding
            ? [
                "100% manual, white-hat outreach",
                "Links from relevant sites with real audiences",
                "Transparent reporting on every link placed",
              ]
            : isGuestPosting
            ? [
                "Niche-relevant sites with real traffic",
                "Original, editor-approved content included",
                "Transparent reporting on every placement",
              ]
            : undefined
        }
        ctaText={
          isLinkBuilding
            ? "Get a Custom Link Plan"
            : isGuestPosting
            ? "Request a Link Plan"
            : "Learn More"
        }
        ctaHref="/contact"
        secondaryCtaText={
          isLinkBuilding
            ? "Talk to a Link Building Expert"
            : isGuestPosting
            ? "Talk to a Guest Posting Expert"
            : undefined
        }
        secondaryCtaHref={isLinkBuilding || isGuestPosting ? "/contact" : undefined}
      />

      {/* Section 2: Results Strip */}
      <QuickMetricsBar
        metrics={
          isLinkBuilding
            ? [
                {
                  value: "+310%",
                  title: "Top-10 keyword rankings",
                  description:
                    "Contextual backlinks directed strategically to target URLs create authoritative surges across competitive queries.",
                },
                {
                  value: "+18",
                  title: "Average domain rating increase",
                  description:
                    "Editorial links from vetted publications increase site-wide domain authority within the first 6 months.",
                },
                {
                  value: "100%",
                  title: "Manual, white-hat outreach",
                  description:
                    "Zero PBNs or link farms. We execute personalized outreach to real publications.",
                },
                {
                  value: "+88%",
                  title: "Organic traffic growth",
                  description:
                    "Compounding referral and organic search traffic uplift across commercial landing pages.",
                },
              ]
            : [
                {
                  value: "+310%",
                  title: "Top-3 Keyword Gains",
                  description:
                    "Contextual backlinks directed strategically to target URLs create authoritative surges across competitive queries.",
                },
                {
                  value: "+18 DR",
                  title: "Average Domain Rating Increase",
                  description:
                    "Editorial links from vetted publications increase site-wide domain authority within the first 6 months.",
                },
                {
                  value: "100%",
                  title: "Manual Outreach & White-Hat",
                  description:
                    "Zero PBNs or link farms. We execute personalized journalist pitching and genuine niche editorial relationships.",
                },
                {
                  value: "+88%",
                  title: "Organic Traffic Growth",
                  description:
                    "Compounding referral and organic search traffic uplift across commercial landing pages.",
                },
              ]
        }
      />

      {/* Section 3: White-Hat Outreach vs Traditional Link Sellers */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
              {data.comparisonTable.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B132B] sm:text-4xl">
              {data.comparisonTable.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              {data.comparisonTable.description}
            </p>
          </div>

          {/* Premium Modern Comparison Table Card */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="py-5 px-6 sm:px-8 text-sm font-extrabold uppercase tracking-wider text-slate-700 w-1/2">
                      What You Get
                    </th>
                    <th className="py-5 px-6 text-center text-sm font-bold text-slate-500 w-1/4">
                      {isGuestPosting ? "Typical Bulk Providers" : "Traditional Link Sellers"}
                    </th>
                    <th className="py-5 px-6 text-center text-sm font-extrabold text-blue-700 bg-blue-50/70 border-x border-blue-200/60 w-1/4">
                      <div className="inline-flex items-center gap-1.5">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        IGR Digital
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {isLinkBuilding ? (
                    [
                      {
                        metric: "Link source",
                        traditional: "Private networks and bulk sites",
                        igrdigital: "Real, relevant publications",
                      },
                      {
                        metric: "Outreach method",
                        traditional: "Automated or none",
                        igrdigital: "Manual, personalized",
                      },
                      {
                        metric: "Content relevance",
                        traditional: "Often unrelated",
                        igrdigital: "Closely matched to your niche",
                      },
                      {
                        metric: "Quality review",
                        traditional: "Rarely",
                        igrdigital: "Every link checked",
                      },
                      {
                        metric: "Risk to your site",
                        traditional: "High",
                        igrdigital: "Low",
                      },
                      {
                        metric: "Reporting",
                        traditional: "Basic list",
                        igrdigital: "Full details and anchor plan",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="transition-colors hover:bg-slate-50/70 group"
                      >
                        <td className="py-4.5 px-6 sm:px-8 font-semibold text-slate-800 flex items-center gap-3">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                          <span>{row.metric}</span>
                        </td>
                        <td className="py-4.5 px-6 text-center font-medium text-slate-500">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                            {row.traditional}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 text-center font-bold text-emerald-700 bg-blue-50/30 border-x border-blue-100/60">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/80 shadow-2xs">
                            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                            {row.igrdigital}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : isGuestPosting ? (
                    [
                      {
                        metric: "Site selection",
                        traditional: "Any site that accepts payment",
                        igrdigital: "Niche-relevant, real-traffic sites",
                      },
                      {
                        metric: "Content",
                        traditional: "Thin or reused articles",
                        igrdigital: "Original, useful, editor-ready",
                      },
                      {
                        metric: "Outreach",
                        traditional: "Automated or none",
                        igrdigital: "Manual and personalized",
                      },
                      {
                        metric: "Link placement",
                        traditional: "Footer or sidebar",
                        igrdigital: "Contextual, inside the article",
                      },
                      {
                        metric: "Quality review",
                        traditional: "Rarely",
                        igrdigital: "Every placement checked",
                      },
                      {
                        metric: "Reporting",
                        traditional: "Basic URL list",
                        igrdigital: "Live URLs, anchors and site metrics",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="transition-colors hover:bg-slate-50/70 group"
                      >
                        <td className="py-4.5 px-6 sm:px-8 font-semibold text-slate-800 flex items-center gap-3">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                          <span>{row.metric}</span>
                        </td>
                        <td className="py-4.5 px-6 text-center font-medium text-slate-500">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                            {row.traditional}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 text-center font-bold text-emerald-700 bg-blue-50/30 border-x border-blue-100/60">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/80 shadow-2xs">
                            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                            {row.igrdigital}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    data.comparisonTable.rows.map((row, idx) => {
                      const competitorText =
                        typeof row.competitors === "string"
                          ? row.competitors
                          : row.competitors
                          ? "Varies"
                          : "✕ Low Quality / Risky";

                      return (
                        <tr
                          key={idx}
                          className="transition-colors hover:bg-slate-50/70 group"
                        >
                          <td className="py-4.5 px-6 sm:px-8 font-semibold text-slate-800 flex items-center gap-3">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                            <span>{row.feature}</span>
                          </td>
                          <td className="py-4.5 px-6 text-center font-medium text-slate-500">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                              {competitorText}
                            </span>
                          </td>
                          <td className="py-4.5 px-6 text-center font-bold text-emerald-700 bg-blue-50/30 border-x border-blue-100/60">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/80 shadow-2xs">
                              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                              Guaranteed
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="border-t border-slate-100 bg-[#FBFBFA] px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                100% White-Hat Editorial Outreach & Quality Checked
              </span>
              <span className="font-bold text-blue-700">Zero Private Blog Networks (PBNs)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How We Secure Tier-1 Editorial Backlinks */}
      <HowWeWork
        eyebrow={data.process.eyebrow}
        title={data.process.title}
        highlightText={data.process.highlightText}
        description={data.process.description}
        steps={data.process.steps}
      />

      {/* Section 5, 6, 7: DeliverablesMatrix (Agency Positioning, Foundational SEO Meets AI, How Our Experts Approach) */}
      <DeliverablesMatrix
        pageType="backlinks"
        serviceName="High-Authority Link Acquisition & Digital PR"
        mainTitle={
          isLinkBuilding
            ? "The Digital PR and Link Building Agency That Blends Editorial Authority, Tech and High Trust to Deliver ROI"
            : isGuestPosting
            ? "The Digital PR and Link Agency That Blends Editorial Authority, Tech and High Trust to Deliver ROI"
            : undefined
        }
        mainSubtitle={
          isLinkBuilding
            ? "As a link building company, we focus on links that move rankings and bring real referral visits. Our backlink building for brands pairs experienced outreach specialists with smart tools, so campaigns are faster, safer and easier to measure."
            : isGuestPosting
            ? "As a guest posting company, we focus on placements that move rankings and send real referral traffic. We pair experienced outreach specialists with smart tools, so campaigns are faster, safer and easier to measure."
            : undefined
        }
        tabs={
          isLinkBuilding || isGuestPosting
            ? [
                {
                  id: isGuestPosting ? "expertise" : "legitimacy",
                  tabLabel: isGuestPosting ? "Expertise" : "Legitimacy",
                  headlineTitle: "A dedicated PR and media outreach squad",
                  headlineDescription: isGuestPosting
                    ? "Our outreach specialists and writers build relationships with editors to earn trusted, high-value guest post coverage."
                    : "Our outreach specialists build relationships with editors and bloggers to earn trusted, high-value coverage.",
                  bullets: isGuestPosting
                    ? [
                        "A strategist who owns your guest posting plan",
                        "Writers and outreach specialists who work with editors every week",
                        "Weekly updates and a monthly performance review",
                        "Clear priorities, so you always know what is being done and why",
                      ]
                    : [
                        "A strategist who owns your link plan",
                        "Outreach specialists who build relationships with editors and bloggers",
                        "Weekly updates and a monthly performance review",
                        "Clear priorities, so you always know what is being done and why",
                      ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "PR Director",
                    role: "Head of Media Outreach",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80",
                  },
                  teamMembers: [
                    { role: "Strategist", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
                    { role: "Outreach Specialist", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
                    { role: "Content Pitcher", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80" },
                    { role: "Quality Reviewer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
                  ],
                },
                {
                  id: "technology",
                  tabLabel: "Technology",
                  headlineTitle: "Proprietary Prospecting & Quality Metrics",
                  headlineDescription:
                    "AI-assisted research identifies relevant prospects and backlink gaps without risky automation.",
                  bullets: [
                    "Backlink gap analysis benchmarking competitor referring domains",
                    "Target prospecting for genuine organic search traffic",
                    "Automated live link indexation status monitoring",
                    "Spam signal and outbound link screening",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Outreach Lead",
                    role: "Senior PR Strategist",
                    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
                  },
                  teamMembers: [
                    { role: "Link Radar Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
                    { role: "Toxic Link Auditor", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
                  ],
                },
                {
                  id: "adaptability",
                  tabLabel: "Adaptability",
                  headlineTitle: "Agile Outreach & Linkable Asset Campaigns",
                  headlineDescription:
                    "We adapt pitches to trending industry stories and publisher editorial requirements for maximum placement rate.",
                  bullets: [
                    "Newsjacking and commentary outreach",
                    "Original research and linkable data stories",
                    "Weekly updates and monthly performance reviews",
                    "Transparent anchor text distribution planning",
                  ],
                  ctaText: "Meet the Squad →",
                  ctaHref: "/contact",
                  centerPerson: {
                    name: "Media Lead",
                    role: "VP of Digital PR",
                    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=crop&q=80",
                  },
                  teamMembers: [
                    { role: "Newsjack Strategist", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
                    { role: "Editorial Writer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
                  ],
                },
              ]
            : undefined
        }
        midFeature={
          isLinkBuilding
            ? {
                videoTitle: "OUR LINK SERVICES",
                title: "Where Foundational SEO Meets AI-Powered Outreach",
                subheading: "What's Included in Our Digital PR and Link Building Services",
                description:
                  "Strong SEO backlinks for websites start with strong SEO foundations. We use AI-assisted research to find relevant prospects, spot link gaps and shape pitches faster. Every site, pitch and placement is reviewed by a human specialist, so you get speed without risky automation.",
                pills: [
                  "Link gap analysis",
                  "Prospect research",
                  "Manual outreach",
                  "Digital PR",
                  "Linkable assets",
                  "Link quality checks",
                ],
              }
            : isGuestPosting
            ? {
                videoTitle: "OUR GUEST POST SERVICES",
                title: "Where Foundational SEO Meets AI-Powered Outreach",
                subheading: "What's Included in Our Digital PR and Link Building Services",
                description:
                  "Strong guest posts start with strong SEO foundations. We use AI-assisted research to find relevant sites, spot topic gaps and speed up pitching. Every site, article and placement is reviewed by a human specialist, so you get speed without risky automation.",
                pills: [
                  "Site research",
                  "Topic planning",
                  "Manual outreach",
                  "Content writing",
                  "Contextual placement",
                  "Link quality checks",
                ],
              }
            : undefined
        }
        expertQuote={
          isLinkBuilding
            ? {
                title: "How Our Digital PR Experts Approach Your Success",
                quote:
                  "We start with your site, your competitors and your goals. Then we build a link plan around the pages that matter most, earn placements steadily and track the impact on rankings and traffic. Our backlinks for website pages are chosen for relevance, with no shortcuts and no risky tactics.",
                authorName: "Liam Vance",
                authorRole: "Head of Editorial Outreach & Digital PR",
                avatarUrl:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
                avatarAlt: "Digital PR expert planning a link building campaign",
              }
            : isGuestPosting
            ? {
                title: "How Our Digital PR Experts Approach Your Success",
                quote:
                  "We start with your site, your competitors and your goals. Then we build a guest posting plan around the pages that matter most, earn placements steadily and track the impact on rankings and traffic. No shortcuts and no risky tactics.",
                authorName: "Liam Vance",
                authorRole: "Head of Editorial Outreach & Digital PR",
                avatarUrl:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
                avatarAlt: "Digital PR expert planning a guest posting campaign",
              }
            : undefined
        }
      />

      {/* Section 8: Editorial Standards Banner */}
      <ExpertInsightChecklistSection
        headlineMain="Strict Editorial Standards and"
        headlineHighlight="100% White-Hat Outreach"
        checklistItems={[
          "Minimum DR verified publications with real human organic search traffic.",
          "Strict zero PBNs, private blog networks, sponsored tags, or link farm guarantees.",
          "Natural in-content editorial anchors integrated seamlessly within native high-value articles.",
          "Transparent reporting and continuous live link verification.",
        ]}
        expertInsight={{
          expertName: "Liam Vance",
          expertRole: "Head of Editorial Outreach & Digital PR",
          companyName: "IGR Digital Outreach Squad",
          quote:
            "We only pursue links from real sites with real audiences. We do not use private blog networks, link farms, hidden links or paid link schemes that break search guidelines.",
        }}
      />

      {/* Section 9: Process (id="process") */}
      <SprintRoadmap
        id="process"
        eyebrow="90-DAY PREDICTABLE GROWTH"
        title="How We Drive Predictable Growth in"
        highlightText="90 Days"
        description="A structured 90-day roadmap with clear milestones, early placements and compounding authority."
        phases={
          isLinkBuilding
            ? [
                {
                  phase: "Phase 01",
                  timeframe: "Days 1-30: Audit and Plan",
                  headline: "Audit and Plan",
                  focus: "Backlink audit, competitor gap analysis and prospect mapping.",
                  deliverables: [
                    "Backlink audit and competitor gap analysis",
                    "Target page and keyword mapping for backlink building for website pages",
                    "Prospect list and pitch angles",
                  ],
                  expectedMilestone: "Complete competitor link gap audit and targeted prospect database ready for pitching.",
                  tagColor: "blue",
                  roiMetric: "Link Audit Complete",
                  speedBadge: "Sprint 01",
                },
                {
                  phase: "Phase 02",
                  timeframe: "Days 31-60: Outreach and Placement",
                  headline: "Outreach and Placement",
                  focus: "Manual outreach to relevant sites and securing first placements.",
                  deliverables: [
                    "Manual outreach to relevant sites",
                    "First editorial and blog placements",
                    "Link quality checks on every placement",
                  ],
                  expectedMilestone: "First wave of live contextual editorial backlinks verified and indexed.",
                  tagColor: "yellow",
                  roiMetric: "Live Placements",
                  speedBadge: "Sprint 02",
                },
                {
                  phase: "Phase 03",
                  timeframe: "Days 61-90: Scale and Compound",
                  headline: "Scale and Compound",
                  focus: "Expanding target assets and measuring ranking impact.",
                  deliverables: [
                    "Expand to more targets and linkable assets",
                    "Track ranking and traffic movement",
                    "Review results and refine the plan",
                  ],
                  expectedMilestone: "Compounding rank increases and quarterly roadmap optimization.",
                  tagColor: "green",
                  roiMetric: "Authority Compounding",
                  speedBadge: "Sprint 03",
                },
              ]
            : isGuestPosting
            ? [
                {
                  phase: "Phase 01",
                  timeframe: "Days 1-30: Audit and Plan",
                  headline: "Days 1-30: Audit and Plan",
                  focus: "Backlink audit, competitor gap analysis, target page mapping and topic ideas.",
                  deliverables: [
                    "Backlink audit and competitor gap analysis",
                    "Target page and keyword mapping",
                    "Site list and topic ideas",
                  ],
                  expectedMilestone: "Target URLs mapped and verified site prospect list approved.",
                  tagColor: "blue",
                  roiMetric: "Strategy Approved",
                  speedBadge: "Sprint 01",
                },
                {
                  phase: "Phase 02",
                  timeframe: "Days 31-60: Write and Place",
                  headline: "Days 31-60: Write and Place",
                  focus: "Original articles written for each site and manual outreach to editors.",
                  deliverables: [
                    "Original articles written for each site",
                    "Manual outreach and editor follow-up",
                    "First contextual placements go live",
                  ],
                  expectedMilestone: "First batch of guest post articles drafted, approved and published.",
                  tagColor: "yellow",
                  roiMetric: "Placements Live",
                  speedBadge: "Sprint 02",
                },
                {
                  phase: "Phase 03",
                  timeframe: "Days 61-90: Scale and Compound",
                  headline: "Days 61-90: Scale and Compound",
                  focus: "Expand to more relevant sites and topics, track movements and refine plan.",
                  deliverables: [
                    "Expand to more relevant sites and topics",
                    "Track ranking and traffic movement",
                    "Review results and refine the plan",
                  ],
                  expectedMilestone: "Compounding referral visits and keyword rank gains across target pages.",
                  tagColor: "green",
                  roiMetric: "Scale & Traffic",
                  speedBadge: "Sprint 03",
                },
              ]
            : undefined
        }
        closingLine={
          isGuestPosting
            ? "Guest posting takes time, but a 90-day plan gives you milestones, early placements and a roadmap for the quarters ahead."
            : "Link building takes time, but a 90-day plan gives you milestones, early placements and a roadmap for the quarters ahead."
        }
      />

      {/* Section 10: Tech Stack */}
      <TechStackGrid
        eyebrow="ENTERPRISE TOOLING & INFRASTRUCTURE"
        title="Powered by the Industry's Most"
        highlightText="Sophisticated Tech Stack"
        description="We use trusted SEO, outreach and analytics tools to find the right sites faster and track results accurately."
        tools={
          isLinkBuilding
            ? [
                {
                  name: "Backlink Analysis",
                  category: "LINK & GAP ANALYSIS",
                  description: "Reviews your link profile and competitor links.",
                  badge: "Enterprise API",
                },
                {
                  name: "Prospecting Tools",
                  category: "TARGET PROSPECTING",
                  description: "Finds relevant sites, blogs and journalists.",
                  badge: "Verified Traffic",
                },
                {
                  name: "Outreach Management",
                  category: "PITCH & EDITORIAL CRM",
                  description: "Tracks pitches, replies and placements.",
                  badge: "Outreach CRM",
                },
                {
                  name: "Link Quality Metrics",
                  category: "QUALITY ASSURANCE",
                  description: "Checks relevance, traffic and spam signals.",
                  badge: "Zero Spam",
                },
                {
                  name: "Rank Tracking",
                  category: "SERP PERFORMANCE",
                  description: "Monitors keyword movement after each placement.",
                  badge: "Daily Tracking",
                },
                {
                  name: "Reporting Dashboard",
                  category: "TRANSPARENT REPORTING",
                  description: "Shows every link, anchor and result in one place.",
                  badge: "Live Dashboards",
                },
              ]
            : isGuestPosting
            ? [
                {
                  name: "Backlink Analysis",
                  category: "LINK PROFILE",
                  description: "Reviews your link profile and competitor links.",
                  badge: "Gap Analysis",
                },
                {
                  name: "Site Prospecting",
                  category: "SITE RESEARCH",
                  description: "Finds relevant sites that accept quality contributions.",
                  badge: "Real Traffic",
                },
                {
                  name: "Outreach Management",
                  category: "EDITOR CRM",
                  description: "Tracks pitches, replies and placements.",
                  badge: "Pitch Tracking",
                },
                {
                  name: "Site Quality Metrics",
                  category: "QUALITY ASSURANCE",
                  description: "Checks relevance, real traffic and spam signals.",
                  badge: "Spam Checked",
                },
                {
                  name: "Rank Tracking",
                  category: "RANKING IMPACT",
                  description: "Monitors keyword movement after each placement.",
                  badge: "SERP Tracking",
                },
                {
                  name: "Reporting Dashboard",
                  category: "REPORTING",
                  description: "Shows every link, anchor and result in one place.",
                  badge: "Live URLs",
                },
              ]
            : undefined
        }
      />

      {/* Section 11: Free Link Audit / Link Plan Form */}
      <AuditQuoteWidget
        eyebrow={isGuestPosting ? "FREE LINK PLAN" : "FREE BACKLINK AUDIT"}
        title="Discover What's Holding Your Website Back from Page #1"
        description={
          isGuestPosting
            ? "Get a free review of your link profile, competitor gaps and the best guest post opportunities for your site. You get clear, actionable findings whether or not you work with us."
            : "Get a free backlink audit covering your link profile, competitor link gaps and your best link opportunities. You get clear, actionable findings whether or not you work with us."
        }
        formTitle={isGuestPosting ? "Request Your Free Link Plan" : "Request Your Free Link Audit"}
        buttonText={isGuestPosting ? "Request My Link Plan" : "Request My Free Audit"}
        isLinkAudit={isLinkBuilding || isGuestPosting}
      />

      {/* Section 12: Pricing (id="pricing") */}
      <div id="pricing">
        {slug === "guest-posting" || slug === "digital-pr" ? (
          <PricingSection
            eyebrow={data.pricing.eyebrow}
            title={data.pricing.title}
            description={data.pricing.description}
            plans={data.pricing.plans}
            bottomNote={
              isGuestPosting
                ? "All plans include original content, manual outreach, site quality review and transparent reporting."
                : undefined
            }
          />
        ) : (
          <PricingSection
            eyebrow={data.pricing.eyebrow}
            title={data.pricing.title}
            description={data.pricing.description}
            plans={data.pricing.plans}
            bottomNote={
              isLinkBuilding
                ? "All plans include manual outreach, link quality review and transparent reporting. Looking for affordable link building services? Start with the Starter plan and scale as results come in. Our high authority backlinks service is built on relevance, so we target sites with strong authority and real audiences, including DA 50+ backlinks where your niche allows, but we never guarantee a specific metric."
                : undefined
            }
          />
        )}
      </div>

      {/* Section 13: Long-Form Content With Side Table of Contents */}
      <ServiceContent
        eyebrow={data.serviceContent.eyebrow}
        title={data.serviceContent.title}
        intro={data.serviceContent.intro}
        content={data.serviceContent.content}
        sidebarTitle={data.serviceContent.sidebarTitle}
        sidebarDescription={data.serviceContent.sidebarDescription}
        sidebarGroups={data.serviceContent.sidebarGroups}
      />

      {/* Section 14: Case Study Feature (id="case-studies") */}
      <CaseStudiesShowcaseVariant
        id="case-studies"
        studyKey="content"
        theme="orange"
        customEyebrow={
          isGuestPosting
            ? "IGR Digital x Wealth Tech Brand: Guest Posting Case Study"
            : "IGR Digital x Wealth Tech Brand: Digital PR Case Study"
        }
        customTitle="Capturing Monthly Readers and AI Citations in a Competitive Wealth Tech Niche"
        ctaText="Read the Full Case Study"
        ctaHref="/case-studies"
      />

      {/* Section 15: CTA Banner */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow={isGuestPosting ? "HIGH-AUTHORITY GUEST POSTING" : "HIGH-AUTHORITY EDITORIAL ACQUISITION"}
        title={
          isGuestPosting
            ? "Ready to Build Authority Through Guest Posting and High-Tier Backlinks?"
            : "Ready to Build Authority Through Blogger Outreach and High-Tier Backlinks?"
        }
        description="Tell us about your site and goals. We will review your link profile, show you the gaps and share a clear plan, free of charge."
        primaryCtaText={isGuestPosting ? "Request a Link Plan" : "Get a Custom Link Plan"}
        primaryCtaHref="/contact"
        secondaryCtaText="Talk to an Expert"
        secondaryCtaHref="/contact"
      />

      {/* Section 16: Comparison Table */}
      <ComparisonTable
        theme="navy"
        title={isGuestPosting ? "SEO Built for Sustainable Growth" : "Our White-Hat Outreach vs Traditional Link Sellers"}
        description=""
        usLabel="IGR Digital"
        competitorsLabel={isGuestPosting ? "Typical Bulk Providers" : "Traditional Link Sellers"}
        inHouseLabel={isLinkBuilding || isGuestPosting ? undefined : data.comparisonTable.inHouseLabel}
        rows={
          isLinkBuilding
            ? [
                {
                  feature: "Manual, personalized outreach",
                  competitors: false,
                  us: true,
                },
                {
                  feature: "Relevant, real-audience sites",
                  competitors: "Rarely",
                  us: true,
                },
                {
                  feature: "Link quality review",
                  competitors: false,
                  us: true,
                },
                {
                  feature: "Safe, guideline-friendly methods",
                  competitors: "Risky",
                  us: true,
                },
                {
                  feature: "Transparent reporting",
                  competitors: "Basic",
                  us: "Detailed",
                },
              ]
            : isGuestPosting
            ? [
                {
                  feature: "Real-traffic, relevant sites",
                  competitors: "Rarely",
                  us: true,
                },
                {
                  feature: "Original content included",
                  competitors: "Thin or reused",
                  us: true,
                },
                {
                  feature: "Manual, personalized outreach",
                  competitors: false,
                  us: true,
                },
                {
                  feature: "Contextual links inside the article",
                  competitors: "Sometimes",
                  us: true,
                },
                {
                  feature: "Site quality review",
                  competitors: false,
                  us: true,
                },
                {
                  feature: "Transparent reporting",
                  competitors: "Basic",
                  us: "Detailed",
                },
              ]
            : data.comparisonTable.rows
        }
      />

      {/* Section 17: Relationships / Growth Experts */}
      <VerticalTabsDeliverables
        eyebrow={data.team.eyebrow}
        title={
          isGuestPosting
            ? "Guest Posting Engineered by Dedicated Growth Experts"
            : "Relationships Built by Senior Link Strategists"
        }
        description={data.team.description}
        cards={data.team.cards}
        footerTitle={data.team.footerTitle}
        footerDescription={data.team.footerDescription}
        ctaText={data.team.ctaText}
        ctaHref={data.team.ctaHref}
      />

      {/* Section 18: FAQ (id="faq") */}
      <div id="faq">
        <FAQSection
          eyebrow={data.faqs?.eyebrow}
          title={data.faqs?.title}
          description={data.faqs?.description}
          faqs={data.faqs?.faqs}
          supportTitle="Still have questions?"
          supportSubtitle="Speak directly with our senior growth strategists for a custom audit and tailored answers."
          supportCtaText="Talk to an Expert"
          supportCtaHref="/contact"
        />
      </div>

      {/* Section 19: Proven Frameworks and Industry Insights */}
      <BlogResourcesPreview
        eyebrow={data.resources?.eyebrow}
        title={data.resources?.title}
        description={data.resources?.description}
        articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
      />

      {/* Section 20: Final CTA */}
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

      {/* Section 21: Footer Tagline */}
      <section className="bg-[#04202C] text-white py-14 border-t border-cyan-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            The Sun Never Sets on IGR Digital
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-cyan-200 max-w-2xl mx-auto">
            Our team supports brands across time zones, so your SEO keeps moving every day of the week.
          </p>
        </div>
      </section>
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

      {/* Local SEO Struggle vs Solution Section */}
      <StruggleVsSolutionSection
        eyebrow={data.whyChooseUs.eyebrow}
        title={data.whyChooseUs.title}
        description={data.whyChooseUs.description}
        struggleHeaderTitle="Your Local Search Struggles"
        solutionHeaderTitle="Our Proven Solution"
        benefits={data.whyChooseUs.benefits}
      />




      {/* Interactive Process Accordion (Exact Match to Reference Screenshot) */}
      <InteractiveProcessAccordion
        title="Our Step-by-Step Process as the"
        titleHighlight="Best SEO Agency"
        titleSuffix="for Small Businesses"
        subtitle="Being the best SEO company for small businesses, we help them by providing customized SEO strategies that can improve their website's search engine rankings and generate more traffic. Here is how we make sure your online presence continues to grow and thrive."
        defaultOpenId="step-2"
      />

      {/* Local SEO Problems vs Solutions Breakdown */}
      <ProblemsSolutions
        content={{
          eyebrow: "LOCAL VISIBILITY PITFALLS & FIXES",
          headline: "Why Most Local Businesses Lose Customers to Nearby Competitors",
          description:
            "From inaccurate NAP citations to unoptimized Google Business Profiles and missing local landing pages, here is how we fix local search roadblocks.",
          items: [
            {
              problem: "Invisible in Google 3-Pack Map Results",
              problemDetail:
                "Your business doesn't appear when nearby customers search for 'best service near me' on their phones.",
              solutionTitle: "Geo-Grid Google Business Profile Optimization",
              solutionDetail:
                "We optimize categories, services, geo-tagged photos, and review signals to dominate map searches across your entire operating territory.",
              stat: "Top 3-Pack Positioning",
            },
            {
              problem: "Inconsistent NAP Directory Citations",
              problemDetail:
                "Mismatched phone numbers and addresses across Apple Maps, Yelp, and Bing confuse Google and hurt local trust.",
              solutionTitle: "Automated Multi-Platform Citation Sync",
              solutionDetail:
                "We clean up duplicates and synchronize 80+ tier-1 business directories with 100% NAP data consistency.",
              stat: "100% Citation Health",
            },
            {
              problem: "Low Review Velocity & Negative Star Drag",
              problemDetail:
                "Competitors with more frequent, authentic reviews win customer confidence and algorithmic map preferences.",
              solutionTitle: "Automated Local Review Generation Funnel",
              solutionDetail:
                "We set up automated customer review request workflows via SMS and email that compound positive 5-star ratings.",
              stat: "4.9+ Star Average Lift",
            },
          ],
        }}
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

      {/* Case Studies (Side-by-Side Dual Industry Proof: Healthcare & Local Enterprise) */}
      <CaseStudiesDualCardVariant primaryKey="local" secondaryKey="b2b" />

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
        articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
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
                  {step.details?.map((d, i) => (
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
          articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
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

        {/* Distinct Sector-by-Sector AI Overview & LLM Citation Readiness */}
        <IndustriesWeServe />

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
          articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
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

      {/* 2. Interactive Paid Media ROAS & Ad Spend Calculator (Placed immediately after hero) */}
      <PaidMediaRoasStrip initialMonthlySpend={15000} initialAov={140} />

      {/* 3. Ad Creative & High-Converting UGC Showcase */}
      <AdCreativeShowcase />

      {/* 4. Banner Header Pricing with Store/Building Badges (Moved forward so pricing is upfront) */}
      <BannerHeaderPricing
        eyebrow="PAID MEDIA & PPC RETAINERS"
        title="Predictable Pricing Designed Around Measurable ROAS"
        description="Transparent monthly management with zero lock-in contracts and complete live dashboard access."
        plans={data.pricing.plans}
        footerActionText="Review PPC Deliverables"
        footerActionHref="#channels"
      />

      {/* 5. Brands Bar */}
      <TrustedBrands trustedbrands={data.trustedBrands} />

      {/* 6. Quick Metrics Bar */}
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

      {/* 7. Case Studies (Dual Card High-Performance B2B / SaaS Variant) */}
      <CaseStudiesDualCardVariant primaryKey="b2b" secondaryKey="saas" />

      {/* 8. Deliverables Matrix: 3-Pill Switcher + Mid Feature + Expert Quote */}
      <DeliverablesMatrix pageType="ppc" serviceName="PPC & Performance Marketing" />

      {/* 9. Sprint Roadmap */}
      <SprintRoadmap
        eyebrow="90-DAY PROFITABLE SCALE TIMELINE"
        title="From Pilot to High-ROAS"
        highlightText="Scale Sprints"
        description="How we eliminate wasted budget in month 1, optimize conversions in month 2, and double down on profit in month 3."
      />

      {/* 10. Advance Advertising Perks Section */}
      <AdvancePerksSection
        headlineLine1="Advance Advertising"
        headlineHighlight="Perk That You Get From"
        headlineLine2="Our PPC Agency"
        description="We don't just hit 'publish' on your ads and walk away. At our PPC agency, we believe in full-service management that covers everything—from planning your campaign to tracking every result. You won't have to sit and wonder if your ad budget is working. We're all about performance. Our strategies are tested, refined, and made to deliver real results that help your business grow. Here's a closer look at what you get:"
      />

      {/* 11. Tech Stack */}
      <TechStackGrid
        eyebrow="PERFORMANCE MARKETING SUITE"
        title="Powered by Enterprise"
        highlightText="Ad Tech & Attribution"
        description="TripleWhale, Looker Studio, Google Ads API, Meta Conversions API (CAPI), and automated fraud click protection."
      />

      {/* 12. Audit Widget */}
      <AuditQuoteWidget
        eyebrow="FREE AD ACCOUNT & ROAS AUDIT"
        title="Uncover Wasted Ad Spend and High-Converting Growth Opportunities"
        description="Receive a confidential 12-point audit of your Google, Meta, or LinkedIn ad accounts with clear action items."
      />

      {/* Light Container for remaining distinct editorial & trust sections */}
      <div className="bg-white text-slate-950">
        <StruggleVsSolutionSection
          eyebrow={data.whyChooseUs.eyebrow}
          title={data.whyChooseUs.title}
          description={data.whyChooseUs.description}
          struggleHeaderTitle="Your Paid Media Struggles"
          solutionHeaderTitle="Our Proven Solution"
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

        <VerticalTabsDeliverables
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
          articles={data.resources?.articles || getBlogsByServiceSlug(slug)}
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
