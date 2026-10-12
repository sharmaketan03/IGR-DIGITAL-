import {
  ShoppingCart,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Zap,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const ecommerceSeoData: ServicePageData = {
  hero: {
    eyebrow: "ECOMMERCE SEO & STORE GROWTH SPECIALISTS",
    headline: "Ecommerce SEO That Drives Organic Revenue & High-Value Buyers",
    paragraph:
      "Transform search engines into your highest-converting sales channel. We optimize product pages, category architecture, and faceted navigation to turn Google search traffic into loyal customers and compounding GMV.",
    inputPlaceholder: "Enter your store URL",
    ctaLabel: "Get Ecommerce Audit",
    circles: [
      {
        id: "revenue",
        value: 240,
        suffix: "%",
        label: "AVG. REVENUE UPLIFT",
        sub: "Over 12 months",
        backText: "Laser-focused on revenue growth and transactional query capture.",
        className: "circle-blue",
      },
      {
        id: "roas",
        value: 88,
        suffix: "%",
        label: "ORGANIC CONVERSION",
        sub: "Intent-matched visitors",
        backText: "Attracting high purchase-intent shoppers who ready to buy.",
        className: "circle-violet",
      },
      {
        id: "stores",
        value: 120,
        suffix: "+",
        label: "STORES SCALED",
        backText: "Shopify Plus, Magento, WooCommerce & Custom headless setups.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital scaled our organic ecommerce revenue by 3.4x in just 9 months. Their technical SEO for product filters and categories was a game changer.",
      reviewerInitial: "A",
      reviewerName: "Aditya Verma, Founder at TrendStyle D2C",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "5.0/5 Trustpilot" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  pricing: {
    eyebrow: "Ecommerce Plans",
    title: "Ecommerce SEO plans built for store revenue",
    description:
      "Scalable optimization roadmaps tailored for catalog size, platform tech stack, and category competition.",
    plans: [
      {
        name: "Growth Store",
        price: "$499",
        period: "/month",
        description:
          "Ideal for growing stores with up to 1,000 SKUs looking to rank core product categories.",
        features: [
          "Category & collection SEO",
          "Product Schema & rich snippets",
          "Technical crawl budget audit",
          "Monthly organic sales tracking",
        ],
        ctaText: "Scale Your Store",
        ctaHref: "/contact",
      },
      {
        name: "Scale Ecommerce",
        price: "$999",
        period: "/month",
        popular: true,
        description:
          "Full-funnel optimization for multi-brand stores, high catalog volume, and aggressive revenue targets.",
        features: [
          "Faceted navigation optimization",
          "Product variant canonicalization",
          "High-authority retail backlink outreach",
          "Internal linking automation audit",
          "Weekly strategy sync",
        ],
        ctaText: "Start Scaling",
        ctaHref: "/contact",
      },
      {
        name: "Enterprise D2C",
        description:
          "Custom setups for global stores, multi-currency architectures, and headless frameworks.",
        features: [
          "International multi-region SEO (hreflang)",
          "Headless Next.js/Shopify SEO",
          "Dedicated Senior Ecommerce Strategist",
          "Custom Google Search Console dashboards",
        ],
        ctaText: "Book Consultation",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Why Choose Us for Ecommerce SEO",
    title: "Ecommerce SEO tuned for checkout conversion, not just impressions",
    description:
      "Unlike generic SEO agencies, we prioritize transactional intent, category hierarchies, and site speed to guarantee top Google rankings convert into cart orders.",
    benefits: [
      {
        icon: ShoppingCart,
        title: "Category Architecture Mastery",
        description:
          "We structure your collection pages and internal siloing to maximize ranking power for high-volume shopping keywords.",
      },
      {
        icon: Zap,
        title: "Faceted Navigation Control",
        description:
          "We eliminate duplicate content and crawl bloat caused by filters, colors, and sorting options without hurting UX.",
      },
      {
        icon: Target,
        title: "Product Schema & Rich Results",
        description:
          "Gain star ratings, pricing, and stock status directly in Google search snippets to boost organic CTR.",
      },
      {
        icon: BarChart3,
        title: "Revenue & ROAS Attribution",
        description:
          "We integrate GA4 eCommerce tracking so you see exactly which keywords, categories, and blogs generate orders.",
      },
      {
        icon: Rocket,
        title: "Core Web Vitals for Storefronts",
        description:
          "Fast loading speeds mean higher conversion rates. We optimize LCP and INP on heavy catalog pages.",
      },
      {
        icon: ShieldCheck,
        title: "White-Hat Product PR & Links",
        description:
          "Earn contextual editorial links and reviews on trusted lifestyle, shopping, and industry authority publications.",
      },
    ],
  },

  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "How our ecommerce SEO delivers more sales",
    description:
      "Compare our retail-focused technical execution against typical agencies and in-house limitations.",
    usLabel: "IGR Digital",
    competitorsLabel: "Generic Agencies",
    inHouseLabel: "In-House Team",
    rows: [
      {
        feature: "Product Schema & Merchant Center",
        us: true,
        competitors: "Basic setup",
        inHouse: "Often overlooked",
      },
      {
        feature: "Faceted Filter & Indexation Control",
        us: true,
        competitors: "Creates duplicate bloat",
        inHouse: "Requires dev help",
      },
      {
        feature: "Transactional Intent Keyword Targeting",
        us: true,
        competitors: "Target informational terms",
        inHouse: true,
      },
      {
        feature: "Out-of-Stock URL Strategy",
        us: true,
        competitors: "Leads to 404 errors",
        inHouse: "Rarely handled",
      },
      {
        feature: "GA4 Ecommerce Revenue Reporting",
        us: true,
        competitors: "Only report traffic & clicks",
        inHouse: true,
      },
      {
        feature: "High-Authority Digital PR Backlinks",
        us: true,
        competitors: "Spam directory links",
        inHouse: "Limited outreach bandwidth",
      },
    ],
  },

  process: {
    eyebrow: "Our Ecommerce Roadmap",
    title: "How we scale your store from",
    highlightText: "traffic to transactions.",
    description:
      "A systematic 5-step methodology built exclusively for online retail stores to dominate search results and maximize catalog revenue.",
    steps: [
      {
        number: "01",
        title: "Catalog Audit",
        label: "Audit technical foundation",
        description:
          "Deep dive into indexation, duplicate content, canonical tags, site speed, and structured data across your entire catalog.",
        icon: Search,
        details: ["Crawl budget analysis", "Filter bloat detection", "Mobile Core Web Vitals"],
      },
      {
        number: "02",
        title: "Architecture Strategy",
        label: "Restructure for high intent",
        description:
          "We build keyword-rich category hubs, parent-child relationships, and internal linking to distribute PageRank to priority products.",
        icon: Target,
        details: ["Collection tree hierarchy", "Faceted filter rules", "Keyword mapping"],
      },
      {
        number: "03",
        title: "On-Page & Schema",
        label: "Optimize for buyer clicks",
        description:
          "Implement rich merchant schema, high-converting product descriptions, and dynamic metadata across thousands of SKUs.",
        icon: Rocket,
        details: ["Product schema markup", "Title tag automation", "Image compression & alt tags"],
      },
      {
        number: "04",
        title: "Authority & PR",
        label: "Build brand authority",
        description:
          "Earn editorial features, buyer guide inclusions, and product roundups on high-domain-authority publications.",
        icon: TrendingUp,
        details: ["Gift guide outreach", "Product review outreach", "Unlinked brand mentions"],
      },
      {
        number: "05",
        title: "Revenue Scaling",
        label: "Maximize conversion rate",
        description:
          "Continually monitor sales metrics, double down on winning keywords, and capture emerging seasonal demand spikes.",
        icon: BarChart3,
        details: ["Seasonal campaign pushes", "A/B search testing", "Revenue attribution"],
      },
    ],
    ctaText: "Ready to dominate ecommerce search?",
    ctaButtonText: "Get Your Store Audit",
    ctaHref: "#contact",
  },

  serviceContent: {
    eyebrow: "Ecommerce SEO",
    title: "Ecommerce SEO built to turn browsers into loyal buyers.",
    intro:
      "Running an online store requires specialized SEO. Standard tactics don't solve complex challenges like faceted navigation, seasonal inventory spikes, and competing against Amazon. We build bespoke ecommerce SEO systems that drive measurable sales.",
    content: [
      {
        heading: "Why Ecommerce SEO Is Crucial for Online Stores",
        paragraphs: [
          "Paid advertising costs (CAC) continue to climb every quarter across Google Ads and Meta. Relying solely on paid channels creates thin margins. Ecommerce SEO provides an organic customer acquisition channel that compounds over time without recurring ad spend.",
          "Over 70% of product research starts on search engines. If your product and collection pages aren't ranking on page 1 for high-intent queries, you are giving direct revenue to your competitors.",
        ],
        bullets: [
          "Decreases Customer Acquisition Cost (CAC)",
          "Establishes long-term organic market share",
          "Attracts shoppers with immediate purchase intent",
          "Boosts brand equity and trust in your niche",
        ],
      },
      {
        heading: "Solving Technical Challenges in Online Retail",
        paragraphs: [
          "Large ecommerce sites often suffer from index bloat, duplicate products across categories, and broken pagination. Our technical team configures precise canonical tags, robots directives, and sitemap structures to ensure search engines crawl only your highest-value pages.",
          "We also implement structured Product Schema (prices, availability, reviews, shipping) so your store commands rich results that skyrocket click-through rates.",
        ],
      },
      {
        heading: "Category & Collection Page Optimization",
        paragraphs: [
          "Category pages represent the highest search volume queries in ecommerce. We optimize category titles, headers, internal anchor text, and introductory content to rank for broad shopping keywords, while routing link equity seamlessly down to individual product pages.",
        ],
        bullets: [
          "Strategic commercial search intent matching",
          "Breadcrumb schema navigation",
          "Contextual buying guides connected to products",
          "Optimized sub-category filtering",
        ],
      },
    ],
    sidebarTitle: "Explore Platform SEO",
    sidebarDescription:
      "Discover tailored SEO strategies for different ecommerce and CMS platforms.",
    sidebarGroups: [
      {
        title: "Platform SEO Services",
        links: [
          { label: "E-commerce SEO", href: "/services/ecommerce-seo" },
          { label: "Shopify SEO", href: "/services/shopify-seo" },
          { label: "WordPress SEO", href: "/services/wordpress-seo" },
          { label: "Webflow SEO", href: "/services/webflow-seo" },
        ],
      },
      {
        title: "Core SEO Solutions",
        links: [
          { label: "Custom SEO", href: "/services/custom-seo" },
          { label: "Technical Audit", href: "/services/technical-audit" },
          { label: "Link Building", href: "/services/link-building" },
          { label: "On-Page SEO", href: "/services/on-page-seo" },
        ],
      },
    ],
  },

  team: {
    eyebrow: "The Specialists",
    title: "Ecommerce growth built by",
    highlightText: "retail SEO experts.",
    description:
      "Our team has optimized millions of SKUs across Shopify Plus, Magento, BigCommerce, and custom headless storefronts.",
    cards: [
      {
        eyebrow: "Catalog Strategy",
        title: "Architecting stores for scale.",
        description:
          "Transforming thousands of messy products into clean, high-ranking category hierarchies.",
        image: "/images/team/strategy.jpg",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Technical Commerce",
        title: "Eliminating filter & crawl bloat.",
        description:
          "Speeding up catalog loading and solving complex headless and faceted navigation challenges.",
        image: "/images/team/technology.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Retail PR",
        title: "Placing products in top publications.",
        description:
          "Securing authoritative links and features on popular shopping guides and media sites.",
        image: "/images/team/creative.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Revenue Analytics",
        title: "Data tracking tied to checkout.",
        description:
          "Measuring real bottom-line revenue, average order value (AOV), and repeat customer traffic.",
        image: "/images/team/performance.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Store Partnership",
        title: "Working as your in-house growth wing.",
        description:
          "Coordinating closely with your merchandising, inventory, and development teams.",
        image: "/images/team/collaboration.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to scale your ecommerce revenue?",
    footerDescription:
      "Get a custom audit of your store's architecture, indexing, and keyword gaps.",
    ctaText: "Schedule Store Strategy Call",
    ctaHref: "/contact",
  },
};
