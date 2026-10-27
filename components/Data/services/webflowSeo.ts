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
  Code,
  Layout,
  Target,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const webflowSeoData: ServicePageData = {
  // Section 1: Hero
  hero: {
    eyebrow: "WEBFLOW SEO AGENCY",
    headline: "Webflow SEO Agency for SaaS and Service Brands",
    paragraph:
      "Webflow gives you a fast, beautiful site. It does not give you rankings by default. IGR Digital is a Webflow SEO agency that sets up your CMS, technical foundation and content so design-led companies and startups get found in Google and AI search, and turn that traffic into demos, leads and sales.",
    inputPlaceholder: "Enter your Webflow site URL",
    ctaLabel: "Get Your Free Webflow SEO Audit",
    circles: [
      {
        id: "wf-traffic",
        value: 150,
        suffix: "%",
        label: "ORGANIC TRAFFIC GROWTH",
        sub: "CMS & technical foundation",
        backText: "Built for Webflow's CMS, collections and custom code.",
        className: "circle-blue",
      },
      {
        id: "wf-keywords",
        value: 85,
        suffix: "%",
        label: "NON-BRANDED RANKINGS",
        sub: "Target commercial queries",
        backText: "Technical, schema and content SEO under one roof.",
        className: "circle-violet",
      },
      {
        id: "wf-leads",
        value: 65,
        suffix: "%",
        label: "ORGANIC LEAD GROWTH",
        sub: "Demos & sales pipeline",
        backText: "Transparent monthly reporting tied to leads and revenue.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital transformed our Webflow CMS architecture, fixed indexation roadblocks, and expanded high-converting non-branded search visibility without touching our custom interactions.",
      reviewerInitial: "W",
      reviewerName: "Webflow SaaS Partner",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "5.0/5 Trustpilot" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,

  // Section 4: Why Industry Leaders Trust Us (6 cards)
  whyChooseUs: {
    eyebrow: "WHY INDUSTRY LEADERS TRUST US",
    title: "Why Industry Leaders Trust Our Webflow SEO",
    description:
      "We combine Webflow know-how with search strategy, so every fix respects your design and moves your rankings.",
    benefits: [
      {
        icon: Target,
        title: "Strategy Built Around You",
        description:
          "Every plan starts with your goals, audience and competitors, not a template.",
      },
      {
        icon: Layout,
        title: "Design-Safe Optimization",
        description:
          "We improve SEO without breaking layouts, interactions or brand.",
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
    eyebrow: "Webflow SEO Pricing",
    title: "Webflow SEO Packages for High-Growth Teams. Choose Your Growth Tier.",
    description:
      "Webflow SEO pricing depends on site size, competition and goals. These tiers are a starting point, and we tailor every proposal after your free audit.",
    plans: [
      {
        name: "Starter",
        price: "Custom quote",
        period: "",
        description: "For small business sites and early-stage startups.",
        features: [
          "Webflow SEO audit and keyword research",
          "On-page and meta optimization for key pages",
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
        description: "For growing SaaS and service sites that want faster results.",
        features: [
          "Everything in Starter",
          "CMS and collection optimization",
          "Schema and content work",
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
        description: "For large sites, multi-collection builds and scale-ups.",
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
      "See why specialized Webflow CMS engineering delivers long-term search dominance.",
    usLabel: "IGR Digital",
    competitorsLabel: "Typical Freelancer or General Agency",
    inHouseLabel: "DIY / In-House",
    rows: [
      {
        feature: "Webflow CMS and collection planning",
        us: true,
        competitors: "Rarely",
        inHouse: false,
      },
      {
        feature: "Technical SEO, redirects and sitemaps",
        us: true,
        competitors: "Basic",
        inHouse: false,
      },
      {
        feature: "Schema, meta and Open Graph setup",
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
          "Full Webflow SEO audit and competitor analysis, keyword and page mapping, critical technical, redirect and indexing fixes.",
      },
      {
        number: "02",
        title: "Days 31-60: Optimize and Build",
        label: "Phase 2",
        description:
          "CMS and collection template optimization, meta, Open Graph and schema setup, site speed and Core Web Vitals improvements.",
      },
      {
        number: "03",
        title: "Days 61-90: Scale and Compound",
        label: "Phase 3",
        description:
          "Content expansion and new keyword targets, start authority and link building, review performance and refine the roadmap.",
      },
    ],
  },

  // Section 13: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "WEBFLOW SEO SERVICES",
    title: "Webflow SEO Built Around Your Business Growth Goals",
    intro:
      "Traffic only matters if it brings demos, enquiries and sales. Beyond rankings, we improve how your pages load, read and convert: faster speed, clearer headings, stronger content and a cleaner CMS structure. You get more qualified visitors and a better chance that each one becomes a customer.",
    content: [
      {
        id: "what-is",
        heading: "What Is Webflow SEO?",
        paragraphs: [
          "Webflow SEO is the process of optimizing your Webflow site so it ranks higher in Google and shows up in AI search answers. It covers CMS and collection structure, meta tags, redirects, sitemaps, schema, page speed, content and backlinks.",
          "Webflow gives you clean code, built-in hosting and strong SEO controls. But those controls only help when they are used well. Weak collection structure, missing schema, thin CMS pages and unplanned redirects can hold a beautiful site back. A good Webflow SEO expert knows which settings to use and where custom code is needed.",
          "Done well, Webflow SEO brings steady, high-intent traffic without paying for every click. Ads stop the moment you stop paying. SEO keeps working.",
        ],
      },
      {
        id: "deliver",
        heading: "Webflow SEO: What We Deliver",
        subsections: [
          {
            subheading: "Webflow CMS and Collection Structure",
            paragraphs: [
              "Webflow CMS SEO starts with structure. We plan collections, templates, slugs, categories and internal links so every dynamic page has a clear purpose and a strong chance to rank.",
            ],
          },
          {
            subheading: "Technical SEO, Redirects and Sitemaps",
            paragraphs: [
              "We fix crawl and indexing issues, set up 301 redirects, clean your sitemap, review robots rules and handle canonical tags, so Google can find and trust the right pages.",
            ],
          },
          {
            subheading: "Schema, Meta and Open Graph Setup",
            paragraphs: [
              "Title tags, meta descriptions, Open Graph tags and structured data added at page and template level, so your listings stand out in search and social.",
            ],
          },
          {
            subheading: "Webflow Site Speed and Core Web Vitals",
            paragraphs: [
              "Image, font, script and interaction optimization that keeps your design sharp and your pages fast on mobile and desktop.",
            ],
          },
        ],
      },
      {
        id: "our-process",
        heading: "Our Webflow SEO Process",
        subsections: [
          {
            subheading: "Audit and Research",
            paragraphs: [
              "We review your site, CMS, competitors, keywords and analytics to find the biggest opportunities.",
            ],
          },
          {
            subheading: "Strategy and Roadmap",
            paragraphs: [
              "You get a clear plan with priorities, timelines and expected impact.",
            ],
          },
          {
            subheading: "Implementation",
            paragraphs: [
              "Our team applies technical fixes, CMS updates, on-page changes and content, with testing on staging before anything goes live.",
            ],
          },
          {
            subheading: "Reporting and Optimization",
            paragraphs: [
              "We track rankings, traffic, speed and leads, then refine the plan every month.",
            ],
          },
        ],
      },
      {
        id: "who-needs",
        heading: "Who Needs Webflow SEO?",
        subsections: [
          {
            subheading: "SaaS Companies on Webflow",
            paragraphs: [
              "Product-led and B2B SaaS brands that need to rank for solution, comparison and use-case keywords. This is where Webflow SEO for SaaS pays off most.",
            ],
          },
          {
            subheading: "Agencies and Freelancers Needing an SEO Partner",
            paragraphs: [
              "Design and development teams that build great Webflow sites and want a trusted partner to handle search for their clients.",
            ],
          },
          {
            subheading: "Brands Migrating to Webflow",
            paragraphs: [
              "A move to Webflow without an SEO plan can wipe out rankings. We protect URLs, redirects and content during the switch.",
              "Based in India or serving global clients? Our Webflow SEO services in India support SaaS, service and ecommerce brands across domestic and international markets.",
            ],
          },
        ],
      },
      {
        id: "pricing",
        heading: "Webflow SEO Pricing and Packages",
        paragraphs: [
          "Every site has a different size, competition level and growth goal, so we price each plan after reviewing your website. Share your site link for a free audit and a clear quote. See the plans above for what each tier includes.",
        ],
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription: "Jump to any section on this page",
    sidebarGroups: [
      {
        title: "Page Navigation",
        links: [
          { label: "1. What Is Webflow SEO?", href: "#what-is" },
          { label: "2. Webflow SEO: What We Deliver", href: "#deliver" },
          { label: "3. Our Webflow SEO Process", href: "#our-process" },
          { label: "4. Who Needs Webflow SEO?", href: "#who-needs" },
          { label: "5. Webflow SEO Pricing and Packages", href: "#pricing" },
          { label: "6. Webflow SEO Results and Case Studies", href: "#case-studies" },
          { label: "7. Frequently Asked Questions About Webflow SEO", href: "#faq" },
        ],
      },
    ],
  },

  // Section 18: Growth Experts (id="growth-experts")
  team: {
    eyebrow: "DEDICATED GROWTH EXPERTS",
    title: "Webflow SEO Engineered by",
    highlightText: "Dedicated Growth Experts",
    description:
      "Meet the specialists who work on your site every week and see how they deliver results.",
    cards: [
      {
        eyebrow: "SaaS Webflow Project",
        title: "Results Driven by Real Sites",
        description: "Proof from live Webflow projects, not theory.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
        ctaText: "See Results",
        ctaHref: "/case-studies",
      },
      {
        eyebrow: "Quality Implementation",
        title: "High-Quality Page Fixes",
        description:
          "On-page and technical improvements applied safely, tested on staging.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
        ctaText: "See Our Work",
        ctaHref: "/case-studies",
      },
      {
        eyebrow: "Sprint Execution",
        title: "Strategy That Starts From Day One",
        description: "A clear roadmap in the first month.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
        ctaText: "Book a Call",
        ctaHref: "/contact",
      },
    ],
    footerTitle: "Ready to scale your Webflow site?",
    footerDescription:
      "Book a strategic consultation with our senior Webflow SEO specialists today.",
    ctaText: "Book a Call",
    ctaHref: "/contact",
  },

  // Section 19: FAQ (id="faq")
  faqs: {
    eyebrow: "FAQS",
    title: "Frequently Asked Questions About Webflow SEO",
    description:
      "Everything you need to know about optimizing your Webflow site for Google search and AI answers.",
    faqs: [
      {
        question: "Is Webflow good for SEO?",
        answer:
          "Yes. Webflow gives you clean code, fast hosting, editable meta tags, sitemaps and redirect controls. Rankings still depend on how you structure your CMS, write your content and handle technical details, which is where a Webflow SEO agency helps.",
      },
      {
        question: "How do I optimize Webflow CMS pages for SEO?",
        answer:
          "Start with clear collection structure and URL slugs. Then set unique titles and meta descriptions in templates, add schema, link related items together, optimize images and avoid thin or duplicate pages.",
      },
      {
        question: "Can you do a Webflow SEO audit?",
        answer:
          "Yes. Our Webflow SEO audit covers crawlability, indexing, CMS structure, redirects, schema, speed and keyword gaps, and ends with a prioritized action plan.",
      },
      {
        question: "How much does Webflow SEO cost?",
        answer:
          "Pricing depends on site size, competition and goals. Small sites can start with a focused monthly plan, while large sites need custom plans. We recommend a plan after your free audit.",
      },
      {
        question: "How long does Webflow SEO take to show results?",
        answer:
          "Most sites see early improvements in 2-3 months and stronger growth between 4 and 6 months. Competitive keywords can take longer.",
      },
      {
        question: "Do you work with agencies and freelancers?",
        answer:
          "Yes. Many design and development teams use us as their SEO partner for client sites built on Webflow.",
      },
      {
        question: "Do you offer Webflow SEO services in India?",
        answer:
          "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
      },
    ],
  },

  // Section 20: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "INSIGHTS & GUIDES",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on Webflow CMS, redirects, schema and migrations.",
    articles: [
      {
        title: "Webflow CMS SEO: A Practical Framework",
        category: "CMS Structure",
        readTime: "7 min read",
        excerpt:
          "How to structure collections and templates for search.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Webflow Redirects and Sitemaps Explained",
        category: "Technical SEO",
        readTime: "6 min read",
        excerpt:
          "Keep your rankings safe when URLs change.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Webflow Migration SEO Checklist",
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
    eyebrow: "START SCALING",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free audit and a clear 90-day plan to grow your Webflow site's organic traffic.",
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
