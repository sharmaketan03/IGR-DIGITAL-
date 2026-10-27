import {
  Settings,
  Zap,
  TrendingUp,
  BarChart3,
  Layers,
  Search,
  ShieldCheck,
  Globe,
  Sliders,
  Sparkles,
  Rocket,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const wordpressSeoData: ServicePageData = {
  // Section 1: Hero
  hero: {
    eyebrow: "WORDPRESS SEO SERVICES",
    headline: "WordPress SEO Services to Fix, Speed Up and Rank Your Site",
    paragraph:
      "A WordPress site can look great and still stay invisible on Google. IGR Digital is a WordPress SEO agency that fixes the technical issues, speeds up your pages and builds content that ranks, so more of the right visitors find you and enquire.",
    inputPlaceholder: "Enter your WordPress site URL",
    ctaLabel: "Get Your Free WordPress SEO Audit",
    circles: [
      {
        id: "wp-traffic",
        value: 150,
        suffix: "%",
        label: "ORGANIC TRAFFIC GROWTH",
        sub: "Technical & speed fixes",
        backText: "Technical, speed and on-page SEO under one roof.",
        className: "circle-blue",
      },
      {
        id: "wp-keywords",
        value: 85,
        suffix: "%",
        label: "NON-BRANDED RANKINGS",
        sub: "Target buyer terms",
        backText: "Plugin and theme clean-up without breaking your site.",
        className: "circle-violet",
      },
      {
        id: "wp-conversion",
        value: 65,
        suffix: "%",
        label: "ORGANIC GROWTH",
        sub: "Conversion-rate-led",
        backText: "Transparent monthly reporting tied to leads and sales.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital fixed our technical indexing roadblocks, accelerated page load times under 1 second, and drove consistent high-intent inbound inquiries.",
      reviewerInitial: "I",
      reviewerName: "IGR Digital WordPress Partner",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "5.0/5 Trustpilot" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,

  // Section 4: Why Industry Leaders Trust Us
  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    title: "Why Industry Leaders Trust Our WordPress SEO",
    description:
      "We combine WordPress know-how with search strategy, so fixes are safe, fast and tied to results.",
    benefits: [
      {
        icon: Settings,
        title: "Strategy Built Around You",
        description:
          "Every plan starts with your goals, audience and competitors, not a template.",
      },
      {
        icon: Zap,
        title: "Speed-Driven Results",
        description:
          "Faster pages improve rankings, user experience and conversions.",
      },
      {
        icon: Rocket,
        title: "Accelerated Growth",
        description:
          "Priority fixes first, so you see early wins within weeks.",
      },
      {
        icon: BarChart3,
        title: "Data-Led Decisions",
        description:
          "Search Console, analytics and crawl data decide every next step.",
      },
      {
        icon: Sliders,
        title: "Every Detail Optimized",
        description:
          "Titles, schema, internal links, images and indexing, all covered.",
      },
      {
        icon: ShieldCheck,
        title: "Transparent Support",
        description:
          "Clear updates, a named contact and reports you can actually read.",
      },
    ],
  },

  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  // Section 12: Pricing
  pricing: {
    eyebrow: "WordPress SEO Pricing",
    title: "WordPress SEO Plans Built for Performance. Choose Your Growth Tier.",
    description:
      "WordPress SEO pricing depends on site size, competition and goals. These tiers are a starting point, and we tailor every proposal after your free audit.",
    plans: [
      {
        name: "Starter",
        price: "Custom quote",
        period: "",
        description: "For small business sites and blogs.",
        features: [
          "WordPress SEO audit and keyword research",
          "On-page optimization for key pages",
          "Basic technical and speed fixes",
          "Monthly reporting",
        ],
        ctaText: "Get Starter Quote",
        ctaHref: "/contact",
      },
      {
        name: "Growth",
        price: "Custom quote",
        period: "",
        popular: true,
        description: "For growing sites that want faster results.",
        features: [
          "Everything in Starter",
          "Ongoing on-page and content work",
          "Plugin and speed optimization",
          "Link building",
          "Bi-weekly calls",
        ],
        ctaText: "Get Growth Quote",
        ctaHref: "/contact",
      },
      {
        name: "Enterprise",
        price: "Let's talk",
        period: "",
        description: "For large sites, publishers and multi-site setups.",
        features: [
          "Dedicated SEO team",
          "Advanced technical SEO and migrations",
          "Large-scale content strategy",
          "Custom reporting and strategy",
        ],
        ctaText: "Talk to Us",
        ctaHref: "/contact",
      },
    ],
  },

  // Section 17: Comparison Table
  comparisonTable: {
    eyebrow: "SUSTAINABLE OUTCOMES",
    title: "SEO Built for Sustainable Growth",
    description:
      "See why specialized WordPress engineering delivers long-term search dominance.",
    usLabel: "IGR Digital",
    competitorsLabel: "Typical Freelancer or General Agency",
    inHouseLabel: "DIY / In-House",
    rows: [
      {
        feature: "WordPress technical and speed fixes",
        us: true,
        competitors: "Basic",
        inHouse: false,
      },
      {
        feature: "Plugin and theme review",
        us: true,
        competitors: "Rarely",
        inHouse: false,
      },
      {
        feature: "Indexing and schema setup",
        us: true,
        competitors: "Partial",
        inHouse: "Basic",
      },
      {
        feature: "Lead and revenue-focused reporting",
        us: true,
        competitors: false,
        inHouse: "Traffic only",
      },
      {
        feature: "Content and link building",
        us: true,
        competitors: "Add-on",
        inHouse: "Limited",
      },
    ],
  },

  // Section 9: Process (id="process")
  process: {
    eyebrow: "90-DAY ROADMAP",
    title: "How We Drive Predictable Growth in",
    highlightText: "90 Days",
    description:
      "SEO takes time, but a 90-day plan gives you milestones, early wins and a roadmap for the quarters ahead.",
    steps: [
      {
        number: "01",
        title: "Days 1-30: Diagnose and Fix",
        label: "Phase 1",
        description:
          "Full WordPress SEO audit and competitor analysis, keyword and page mapping, and critical technical and indexing fixes.",
        icon: Search,
        details: [
          "Full WordPress SEO audit and competitor analysis",
          "Keyword and page mapping",
          "Critical technical and indexing fixes",
        ],
      },
      {
        number: "02",
        title: "Days 31-60: Optimize and Build",
        label: "Phase 2",
        description:
          "Plugin, theme and speed optimization, on-page improvements for priority pages, and schema, sitemap and internal linking updates.",
        icon: Zap,
        details: [
          "Plugin, theme and speed optimization",
          "On-page improvements for priority pages",
          "Schema, sitemap and internal linking updates",
        ],
      },
      {
        number: "03",
        title: "Days 61-90: Scale and Compound",
        label: "Phase 3",
        description:
          "Content expansion and new keyword targets, authority and link building, and performance review to refine the roadmap.",
        icon: Rocket,
        details: [
          "Content expansion and new keyword targets",
          "Start authority and link building",
          "Review performance and refine the roadmap",
        ],
      },
    ],
    ctaText: "Ready to accelerate your WordPress site?",
    ctaButtonText: "Talk to a WordPress SEO Expert",
    ctaHref: "/contact",
  },

  // Section 13: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "WordPress SEO Guide",
    title: "WordPress SEO Built Around Your Business Growth Goals",
    intro:
      "Traffic only matters if it brings enquiries and sales. Beyond rankings, we improve how your pages load, read and convert: faster speed, clearer headings, stronger content and cleaner structure. You get more qualified visitors and a better chance that each one becomes a customer.",
    content: [
      {
        id: "what-is",
        heading: "What Is WordPress SEO?",
        paragraphs: [
          "WordPress SEO is the process of optimizing your WordPress website so it ranks higher in Google and brings in more organic traffic. It covers technical setup, page speed, themes and plugins, on-page content, schema, sitemaps, indexing and backlinks.",
          "WordPress is flexible, which is also why sites can go wrong. Heavy themes, too many plugins, bad permalinks, duplicate archives and missing schema often hold rankings back. A good WordPress SEO expert knows which settings to trust and which to fix.",
          "Done well, WordPress SEO brings steady, high-intent traffic without paying for every click. Ads stop the moment you stop paying. SEO keeps working.",
        ],
      },
      {
        id: "deliver",
        heading: "WordPress SEO: What We Deliver",
        paragraphs: [
          "WordPress Technical SEO Audit: Our WordPress SEO audit reviews crawlability, indexation, redirects, duplicate content, sitemaps, theme code and speed, then gives you a prioritized fix list.",
          "Plugin, Theme and Speed Optimization: Our WordPress speed optimization services cover caching, image compression, script clean-up, plugin audits and Core Web Vitals, so pages load fast without losing features.",
          "Schema, Sitemaps and Indexing Setup: Clean XML sitemaps, correct robots rules, structured data and indexing fixes, so Google can find, understand and show the right pages.",
          "Content and On-Page Optimization: Titles, headings, internal links, images and copy improved for search intent, plus new content that fills keyword gaps.",
        ],
      },
      {
        id: "our-process",
        heading: "Our WordPress SEO Process",
        paragraphs: [
          "Audit and Research: We review your site, competitors, keywords and analytics to find the biggest opportunities.",
          "Strategy and Roadmap: You get a clear plan with priorities, timelines and expected impact.",
          "Implementation: Our team applies technical fixes, speed improvements, on-page changes and content updates, with backups and testing on every change.",
          "Reporting and Optimization: We track rankings, traffic, speed and leads, then refine the plan every month.",
        ],
      },
      {
        id: "who-needs",
        heading: "Who Needs WordPress SEO?",
        paragraphs: [
          "Business and Service Websites: Companies that rely on enquiries and want to rank for service and location keywords. This is where hiring a WordPress SEO consultant pays off.",
          "Blogs and Content Publishers: Sites with many posts that need better structure, internal links and speed to keep traffic growing.",
          "Sites Migrating To or From WordPress: A move without a plan can wipe out rankings. Our WordPress migration SEO work protects URLs, redirects and content during the switch.",
          "Based in India or serving global clients? Our WordPress SEO services in India support business sites, publishers and online stores across domestic and international markets.",
        ],
      },
      {
        id: "pricing",
        heading: "WordPress SEO Pricing and Packages",
        paragraphs: [
          "Every site has a different size, competition level and growth goal, so we price each plan after reviewing your website. Share your site link for a free audit and a clear quote. See the plans above for what each tier includes.",
        ],
        buttonText: "Get a Custom Quote",
        buttonHref: "/contact",
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription:
      "Navigate through our complete WordPress SEO breakdown.",
    sidebarGroups: [
      {
        title: "Table of Contents",
        links: [
          { label: "What Is WordPress SEO?", href: "#what-is" },
          { label: "WordPress SEO: What We Deliver", href: "#deliver" },
          { label: "Our WordPress SEO Process", href: "#our-process" },
          { label: "Who Needs WordPress SEO?", href: "#who-needs" },
          { label: "WordPress SEO Pricing and Packages", href: "#pricing" },
          { label: "WordPress SEO Results and Case Studies", href: "#case-studies" },
          { label: "Frequently Asked Questions About WordPress SEO", href: "#faq" },
        ],
      },
    ],
  },

  // Section 18: Growth Experts
  team: {
    eyebrow: "GROWTH EXPERTS",
    title: "WordPress SEO Engineered by",
    highlightText: "Dedicated Growth Experts",
    description:
      "Meet the specialists who work on your site every week and see how they deliver results.",
    cards: [
      {
        eyebrow: "Proven Outcomes",
        title: "Results Driven by Real Sites",
        description:
          "Proof from live WordPress projects, not theory. We test, measure and document real organic growth.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
      {
        eyebrow: "Technical Precision",
        title: "High-Quality Page Fixes",
        description:
          "On-page and technical improvements applied safely, with backups and staging environment validations.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
      {
        eyebrow: "Immediate Impact",
        title: "Strategy That Starts From Day One",
        description:
          "A clear roadmap in the first month prioritizing high-impact speed and indexing wins.",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
    ],
    footerTitle: "Ready to scale your WordPress site?",
    footerDescription:
      "Read our full collection of client transformations and revenue-focused case studies.",
    ctaText: "Read All Case Studies",
    ctaHref: "/case-studies",
  },

  // Section 19: FAQ (id="faq")
  faqs: {
    eyebrow: "FAQS",
    title: "Frequently Asked Questions About WordPress SEO",
    description:
      "Everything you need to know about fixing, speeding up and ranking your WordPress website.",
    faqs: [
      {
        question: "Which SEO plugin is best for WordPress?",
        answer:
          "Yoast SEO, Rank Math and All in One SEO are the most popular choices, and all three handle titles, meta descriptions, sitemaps and schema well. The right pick depends on your theme and needs, and a plugin alone will not fix speed, structure or content gaps.",
      },
      {
        question: "How do you speed up a WordPress site for SEO?",
        answer:
          "We audit your theme and plugins, remove heavy scripts, set up caching, compress and lazy-load images, and fix Core Web Vitals issues. Faster pages help rankings and conversions.",
      },
      {
        question: "Can you fix WordPress indexing issues?",
        answer:
          "Yes. We check Search Console, robots rules, sitemaps, noindex tags, redirects and duplicate content, then fix what blocks Google from indexing your important pages.",
      },
      {
        question: "How much do WordPress SEO services cost?",
        answer:
          "Pricing depends on site size, competition and goals. Small sites can start with a focused monthly plan, while large sites need custom plans. We recommend a plan after your free audit.",
      },
      {
        question: "How long does WordPress SEO take to show results?",
        answer:
          "Most sites see early improvements in 2-3 months and stronger growth between 4 and 6 months. Competitive keywords can take longer.",
      },
      {
        question: "Should I hire a WordPress SEO expert or use a plugin?",
        answer:
          "Plugins handle settings, but they do not build strategy, fix theme code or plan content. Most businesses hire a WordPress SEO expert to guide the work and use plugins only as tools.",
      },
      {
        question: "Do you offer WordPress SEO services in India?",
        answer:
          "Yes. We work with Indian businesses and publishers, as well as sites targeting the US, UK and other global markets.",
      },
    ],
  },

  // Section 20: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "INSIGHTS & GUIDES",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on WordPress speed, indexing, plugins and migrations.",
    articles: [
      {
        title: "How to Speed Up WordPress for Better Rankings",
        category: "Speed & Core Web Vitals",
        readTime: "7 min read",
        excerpt:
          "A practical guide to caching, images and Core Web Vitals.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "WordPress Indexing Problems and How to Fix Them",
        category: "Technical SEO",
        readTime: "6 min read",
        excerpt:
          "Why pages go missing from Google and what to do.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "WordPress Migration SEO Checklist",
        category: "Migrations",
        readTime: "8 min read",
        excerpt:
          "Protect your rankings when you move or redesign.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  // Section 21: Final CTA
  finalCta: {
    eyebrow: "GET YOUR 90-DAY PLAN",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free audit and a clear 90-day plan to grow your WordPress site's organic traffic.",
    primaryCtaText: "Request Your Free Strategy Session",
    primaryCtaHref: "/contact",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "4.9/5", label: "Client rating" },
      { value: "$45M+", label: "Revenue generated" },
      { value: "98%", label: "Client retention" },
    ],
  },
};
