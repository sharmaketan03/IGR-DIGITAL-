import {
  ShoppingBag,
  Search,
  Target,
  BarChart3,
  Rocket,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const shopifySeoData: ServicePageData = {
  hero: {
    eyebrow: "SHOPIFY & SHOPIFY PLUS SEO EXPERTS",
    headline: "Shopify SEO That Unlocks Organic Sales & Dominates Search",
    paragraph:
      "Overcome Shopify's URL limitations, duplicate tags, and theme speed hurdles. We fine-tune Shopify architectures to outrank competitors and scale your store's organic revenue consistently.",
    inputPlaceholder: "Enter your Shopify store domain",
    ctaLabel: "Get Shopify SEO Audit",
    circles: [
      {
        id: "shopify-growth",
        value: 195,
        suffix: "%",
        label: "ORGANIC REVENUE BOOST",
        sub: "Average client ROI",
        backText: "Scaling DTC brands on Shopify with technical precision.",
        className: "circle-blue",
      },
      {
        id: "shopify-keywords",
        value: 1400,
        suffix: "+",
        label: "PAGE 1 RANKINGS",
        sub: "High intent queries",
        backText: "Ranking collection pages and bestsellers at the top of Google.",
        className: "circle-violet",
      },
      {
        id: "shopify-stores",
        value: 85,
        suffix: "+",
        label: "SHOPIFY STORES SCALED",
        backText: "From startup Shopify stores to 8-figure Shopify Plus brands.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital fixed our Shopify collection URL duplicates and boosted our organic checkout volume by over 210%. Incredible team to work with!",
      reviewerInitial: "K",
      reviewerName: "Karan Singhal, COO of UrbanVibe Apparel",
      ratings: [
        { label: "Rated 5.0/5 on Shopify Experts" },
        { label: "Rated 4.9/5 on Google" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  pricing: {
    eyebrow: "Shopify SEO Packages",
    title: "Tailored SEO for fast-scaling Shopify brands",
    description:
      "Optimized for standard Shopify and high-volume Shopify Plus storefronts.",
    plans: [
      {
        name: "Shopify Starter",
        price: "$450",
        period: "/month",
        description:
          "Perfect for early-stage Shopify stores wanting clean indexing and organic discovery.",
        features: [
          "Liquid theme speed & schema audit",
          "Collection & product page optimization",
          "Duplicate URL canonical fix",
          "Monthly organic growth report",
        ],
        ctaText: "Start Shopify SEO",
        ctaHref: "/contact",
      },
      {
        name: "Shopify Plus Pro",
        price: "$850",
        period: "/month",
        popular: true,
        description:
          "For expanding brands looking to outrank big-box retailers in their niche.",
        features: [
          "Advanced collection hierarchy & tag SEO",
          "App bloat cleanup & speed boost",
          "Custom Product & Review Schema integration",
          "High-impact editorial backlink campaigns",
          "Dedicated Shopify SEO strategist",
        ],
        ctaText: "Scale Shopify Sales",
        ctaHref: "/contact",
      },
      {
        name: "Shopify Enterprise",
        description:
          "Custom growth roadmap for multi-market Shopify Markets and headless Hydrogen setups.",
        features: [
          "Shopify Markets multi-currency / geo SEO",
          "Headless Hydrogen / Next.js optimization",
          "Custom API & developer sync",
          "Executive growth dashboards",
        ],
        ctaText: "Request Proposal",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Why Choose Us for Shopify SEO",
    title: "We master Shopify's unique constraints so you win in search",
    description:
      "Shopify has known SEO quirks like /collections/.../products URL duplicates, forced URL structures, and app code bloat. We know exactly how to fix them for maximum ranking power.",
    benefits: [
      {
        icon: ShoppingBag,
        title: "Canonical URL Duplicate Fixes",
        description:
          "We modify Liquid code to stop Shopify from creating duplicate product links across multiple collections.",
      },
      {
        icon: Zap,
        title: "Liquid Speed Optimization",
        description:
          "We remove app residue and optimize theme rendering to deliver lightning-fast Core Web Vitals on mobile.",
      },
      {
        icon: Target,
        title: "Collection Silo Architecture",
        description:
          "We transform Shopify collections into authoritative topic clusters that Google loves to rank.",
      },
      {
        icon: BarChart3,
        title: "Shopify Analytics & GA4 Sync",
        description:
          "Get complete clarity on which search terms lead to completed Shopify checkout sessions.",
      },
      {
        icon: Globe,
        title: "Shopify Markets & International SEO",
        description:
          "Expand globally with proper subfolder structures, currencies, and localized hreflang tags.",
      },
      {
        icon: ShieldCheck,
        title: "App-Safe SEO Improvements",
        description:
          "We work directly with your theme files without breaking your existing apps or checkout flows.",
      },
    ],
  },

  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "Shopify SEO specialists vs general agencies",
    description:
      "See why specialized Shopify knowledge matters for your bottom line.",
    usLabel: "IGR Digital",
    competitorsLabel: "Generic Agencies",
    inHouseLabel: "DIY / Store Staff",
    rows: [
      {
        feature: "Liquid Code & Theme Architecture Fixes",
        us: true,
        competitors: "Can't touch code",
        inHouse: "Requires freelance dev",
      },
      {
        feature: "Shopify Product URL Canonicalization",
        us: true,
        competitors: "Ignore duplicate issues",
        inHouse: "Don't know how to fix",
      },
      {
        feature: "Eliminating App Residual Code",
        us: true,
        competitors: false,
        inHouse: false,
      },
      {
        feature: "Rich Schema (JSON-LD) for Products",
        us: true,
        competitors: "Rely on basic apps",
        inHouse: "Basic theme default",
      },
      {
        feature: "Bespoke Collection Strategy",
        us: true,
        competitors: true,
        inHouse: "Limited keyword knowledge",
      },
      {
        feature: "Revenue-Focused Monthly Reporting",
        us: true,
        competitors: "Traffic only",
        inHouse: true,
      },
    ],
  },

  process: {
    eyebrow: "Shopify SEO Process",
    title: "Our roadmap to",
    highlightText: "scale your Shopify store.",
    description:
      "A tested blueprint tailored to Shopify's ecosystem for lasting organic traffic and sales growth.",
    steps: [
      {
        number: "01",
        title: "Shopify Audit",
        label: "Analyze theme & Liquid code",
        description:
          "We uncover app bloat, duplicate collection URLs, broken redirects, and speed bottlenecks.",
        icon: Search,
        details: ["Liquid theme audit", "URL hierarchy scan", "Page speed check"],
      },
      {
        number: "02",
        title: "Technical Fixes",
        label: "Optimize store foundation",
        description:
          "We resolve canonical errors, implement advanced JSON-LD product schema, and clean up navigation.",
        icon: Zap,
        details: ["Canonical URL patch", "Merchant schema setup", "Sitemap cleanup"],
      },
      {
        number: "03",
        title: "Keyword & Collection Mapping",
        label: "Target high-intent searchers",
        description:
          "We align collection pages and bestselling products with transactional keywords shoppers use to buy.",
        icon: Target,
        details: ["Collection metadata", "Header tag structure", "Internal linking"],
      },
      {
        number: "04",
        title: "High-Tier Link Acquisition",
        label: "Build merchant authority",
        description:
          "We secure authoritative mentions, product reviews, and editorial links across your industry.",
        icon: Rocket,
        details: ["D2C media outreach", "Blogger review features", "Industry PR"],
      },
      {
        number: "05",
        title: "Conversion & Scale",
        label: "Compounding sales growth",
        description:
          "We monitor organic revenue in GA4 and Shopify Analytics, optimizing top-performing collections continuously.",
        icon: BarChart3,
        details: ["GA4 revenue attribution", "Seasonal collection pushes", "AOV growth"],
      },
    ],
    ctaText: "Ready to scale your Shopify revenue?",
    ctaButtonText: "Claim Your Shopify Audit",
    ctaHref: "#contact",
  },

  serviceContent: {
    eyebrow: "Shopify SEO",
    title: "Specialized Shopify SEO designed for serious online brands.",
    intro:
      "Shopify is one of the world's most powerful commerce platforms, but it comes with strict architecture rules. We know how to bend Shopify to Google's ranking guidelines to turn your store into a dominant organic revenue machine.",
    content: [
      {
        heading: "Solving the Notorious Shopify URL Duplication Issue",
        paragraphs: [
          "By default, Shopify links products inside collections with the format `/collections/category/products/item-name` while the canonical URL is `/products/item-name`. This splits internal link equity and confuses search crawlers.",
          "Our technical SEO engineers edit your Shopify Liquid theme files to ensure internal links always point directly to canonical product URLs, preserving PageRank and boosting rankings.",
        ],
        bullets: [
          "Direct product internal linking in Liquid",
          "Automated canonical consistency",
          "Enhanced crawl efficiency for large inventories",
        ],
      },
      {
        heading: "Speed Optimization for Shopify Themes",
        paragraphs: [
          "Online shoppers abandon slow stores. Installing and uninstalling multiple Shopify apps leaves hidden JavaScript that bogs down your store's mobile score. We systematically clean up dormant script tags and optimize asset loading to pass Google's Core Web Vitals.",
        ],
      },
      {
        heading: "Dominating Category & Collection Search Queries",
        paragraphs: [
          "Collections are where 80% of high-volume shopping searches happen. We optimize your title tags, meta descriptions, collection headers, and supporting copy to ensure your brand shows up when customers search for your product category.",
        ],
      },
    ],
    sidebarTitle: "Explore Platform SEO",
    sidebarDescription:
      "See other platforms we optimize or explore core search services.",
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
        title: "Off-Page SEO",
        links: [
          { label: "Link Building", href: "/services/link-building" },
          { label: "Digital PR", href: "/services/digital-pr" },
          { label: "Guest Posting", href: "/services/guest-posting" },
        ],
      },
    ],
  },

  team: {
    eyebrow: "Shopify Specialists",
    title: "Stores scaled by",
    highlightText: "certified Shopify SEO pros.",
    description:
      "Our strategists, Liquid developers, and copywriters have helped dozens of Shopify brands cross multi-million organic milestones.",
    cards: [
      {
        eyebrow: "Theme Architecture",
        title: "Liquid code optimization.",
        description:
          "Editing templates and schemas directly to eliminate indexing bugs without altering your store design.",
        image: "/images/team/technology.jpg",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Merchandising SEO",
        title: "Collection keyword mapping.",
        description:
          "Structuring tags, collections, and vendor pages to capture high-converting search intent.",
        image: "/images/team/strategy.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Speed & Performance",
        title: "Turbocharging checkout UX.",
        description:
          "Stripping bloat and optimizing images so your Shopify store passes mobile Core Web Vitals.",
        image: "/images/team/performance.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "D2C Brand PR",
        title: "Earning premium retail backlinks.",
        description:
          "Placing your products in relevant industry roundups and gift guides.",
        image: "/images/team/creative.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Growth Strategy",
        title: "Scaling with Shopify Plus.",
        description:
          "Supporting high-growth brands with multi-region and multi-currency growth roadmaps.",
        image: "/images/team/collaboration.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to scale your Shopify revenue organically?",
    footerDescription:
      "Get a complete diagnostic audit of your store's speed, indexing, and keyword gaps today.",
    ctaText: "Get Your Shopify Audit",
    ctaHref: "/contact",
  },
};
