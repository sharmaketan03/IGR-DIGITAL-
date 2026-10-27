import {
  FileSearch,
  Code2,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const technicalAuditData: ServicePageData = {
  hero: {
    eyebrow: "COMPREHENSIVE TECHNICAL SEO AUDIT & REMEDIATION",
    headline: "Uncover Hidden Technical SEO Errors Sabotaging Your Google Rankings",
    paragraph:
      "Find and fix crawl bloat, broken architecture, JavaScript rendering gaps, and Core Web Vitals bottlenecks. We deliver actionable developer-ready blueprints that unlock immediate organic traffic growth.",
    inputPlaceholder: "Enter your website URL",
    ctaLabel: "Request Technical Audit",
    circles: [
      {
        id: "issues-fixed",
        value: 120,
        suffix: "+",
        label: "CHECKPOINTS AUDITED",
        sub: "Crawl, index, & code",
        backText: "Inspecting every single angle of your technical SEO foundation.",
        className: "circle-blue",
      },
      {
        id: "traffic-recovery",
        value: 165,
        suffix: "%",
        label: "AVG. TRAFFIC RECOVERY",
        sub: "Post-audit fix implementation",
        backText: "Resolving penalties and indexation blocks that restrict growth.",
        className: "circle-violet",
      },
      {
        id: "speed-score",
        value: 95,
        suffix: "/100",
        label: "AVG. PAGESPEED SCORE",
        sub: "Mobile Core Web Vitals",
        backText: "Optimizing LCP, INP, and CLS for seamless search engine crawling.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital's technical audit discovered a catastrophic canonical loop and JavaScript hydration issue that 3 previous agencies missed. Our organic traffic doubled within 60 days of the fix.",
      reviewerInitial: "S",
      reviewerName: "Sanjay Patel, Head of Engineering at FinServe",
      ratings: [
        { label: "Rated 5.0/5 for Technical Rigor" },
        { label: "Enterprise Ready" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  pricing: {
    eyebrow: "Audit Packages",
    title: "In-depth technical audits with code-level fix guides",
    description:
      "No automated surface-level PDF dumps. You receive hands-on code solutions, Jira tickets, and developer walkthroughs.",
    plans: [
      {
        name: "Standard Audit",
        price: "$749",
        period: "/one-time",
        description:
          "Comprehensive health check for websites with up to 10,000 pages.",
        features: [
          "Complete site crawl (Screaming Frog / Sitebulb)",
          "Indexation & canonical tag audit",
          "Mobile Core Web Vitals diagnosis",
          "Prioritized action plan with dev notes",
        ],
        ctaText: "Order Technical Audit",
        ctaHref: "/contact",
      },
      {
        name: "Enterprise & Headless",
        price: "$1,849",
        period: "/one-time",
        popular: true,
        description:
          "Deep dive for complex architectures, large ecommerce catalogs, and JavaScript/Next.js frameworks.",
        features: [
          "JavaScript rendering & SSR verification",
          "Faceted navigation & crawl budget optimization",
          "Structured data & schema validation",
          "Direct engineer-to-engineer review call",
          "30-day post-implementation verification crawl",
        ],
        ctaText: "Book Enterprise Audit",
        ctaHref: "/contact",
      },
      {
        name: "Audit + Full Remediation",
        description:
          "Our senior technical SEO developers implement all fixes directly in your codebase or CMS.",
        features: [
          "Hands-on code fixes (React, Next.js, WordPress, Shopify)",
          "Redirect map execution & staging QA",
          "Core Web Vitals code-level optimization",
          "Guaranteed penalty-recovery roadmap",
        ],
        ctaText: "Get Remediation Quote",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Why Choose Our Technical Audits",
    title: "We don't hand you an automated PDF. We solve real engineering problems.",
    description:
      "Most agencies press a button in an automated tool and hand you a 50-page confusing report. We dig into your source code, server headers, and DOM to find the exact root causes holding your rankings back.",
    benefits: [
      {
        icon: Code2,
        title: "Developer-Ready Jira Tasks",
        description:
          "We write clear, engineer-friendly specifications with exact code snippets and expected outcomes.",
      },
      {
        icon: FileSearch,
        title: "JavaScript & SSR Rendering Analysis",
        description:
          "We inspect what Googlebot renders vs what human users see to prevent JavaScript indexing black holes.",
      },
      {
        icon: Zap,
        title: "Crawl Budget Optimization",
        description:
          "Stop search bots from wasting requests on thin or useless URLs so your high-value pages get crawled faster.",
      },
      {
        icon: ShieldCheck,
        title: "Penalty & Algorithmic Drop Diagnosis",
        description:
          "Identify exact dates and technical causes behind sudden organic visibility drops and core update hits.",
      },
      {
        icon: Target,
        title: "International Hreflang Validation",
        description:
          "Ensure global multi-language and multi-region sites serve the right localized versions to the right users.",
      },
      {
        icon: BarChart3,
        title: "Post-Implementation Verification",
        description:
          "We rerun crawls once your team applies changes to certify all errors have been cleanly resolved.",
      },
    ],
  },

  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "IGR technical audits vs automated software exports",
    description:
      "See the difference between superficial checklists and deep engineering diagnostics.",
    usLabel: "IGR Digital",
    competitorsLabel: "Generic Agencies",
    inHouseLabel: "In-House Devs",
    rows: [
      {
        feature: "Manual Source Code & DOM Inspection",
        us: true,
        competitors: "Automated scanner only",
        inHouse: "Often lack SEO context",
      },
      {
        feature: "Developer-Friendly Jira Action Items",
        us: true,
        competitors: "Vague generic bullet points",
        inHouse: "N/A",
      },
      {
        feature: "JavaScript (React / Next.js) Rendering Audit",
        us: true,
        competitors: "Miss client-side rendering",
        inHouse: true,
      },
      {
        feature: "Live Engineer-to-Engineer Walkthrough Call",
        us: true,
        competitors: "Email PDF only",
        inHouse: true,
      },
      {
        feature: "30-Day Follow-Up Crawl Verification",
        us: true,
        competitors: "Charge extra fee",
        inHouse: "No specialized tooling",
      },
      {
        feature: "Root-Cause Algorithmic Penalty Analysis",
        us: true,
        competitors: "Guesswork",
        inHouse: false,
      },
    ],
  },

  process: {
    eyebrow: "Technical Audit Roadmap",
    title: "How we diagnose and",
    highlightText: "fix your technical SEO.",
    description:
      "A systematic, 5-phase engineering protocol to ensure your website is 100% crawlable, indexable, and search engine friendly.",
    steps: [
      {
        number: "01",
        title: "Full-Site Deep Crawl",
        label: "Simulate Googlebot rendering",
        description:
          "We crawl every page, resource, and API endpoint using custom Googlebot user agents and headless browsers.",
        icon: Search,
        details: ["Log file analysis", "Robots.txt evaluation", "XML sitemap verification"],
      },
      {
        number: "02",
        title: "Architecture & Indexation",
        label: "Identify index bloat",
        description:
          "We audit canonical tags, noindex directives, pagination, and internal link depth distributions.",
        icon: Target,
        details: ["Canonical loops", "Orphaned page discovery", "Redirect chain cleanup"],
      },
      {
        number: "03",
        title: "Core Web Vitals & Speed",
        label: "Benchmark speed & rendering",
        description:
          "We analyze Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
        icon: Zap,
        details: ["JavaScript execution time", "Render-blocking resources", "Image compression"],
      },
      {
        number: "04",
        title: "Schema & Structured Data",
        label: "Rich snippet validation",
        description:
          "We inspect structured data formatting (Organization, Product, Article, FAQ) for syntax and entity accuracy.",
        icon: Code2,
        details: ["JSON-LD debugging", "Entity connection", "Rich snippet preview"],
      },
      {
        number: "05",
        title: "Dev Brief & Walkthrough",
        label: "Implementation support",
        description:
          "We deliver prioritized recommendations, host a technical review with your engineers, and verify fixes post-deployment.",
        icon: BarChart3,
        details: ["Jira-ready tickets", "Dev team Q&A call", "Verification re-crawl"],
      },
    ],
    ctaText: "Ready to eliminate technical ranking barriers?",
    ctaButtonText: "Book Your Technical Audit",
    ctaHref: "#contact",
  },

  serviceContent: {
    eyebrow: "Technical SEO",
    title: "Technical SEO audits designed to unlock your site's full potential.",
    intro:
      "No amount of content or backlinks will help your website rank if search engine crawlers cannot efficiently access, render, and index your pages. Our technical SEO audits eliminate the hidden friction between your website code and Google's ranking algorithms.",
    content: [
      {
        heading: "Why Technical SEO is the Bedrock of Organic Growth",
        paragraphs: [
          "Search engines have finite crawl budgets and complex rendering pipelines. If your site has redirect chains, 404 error loops, slow server response times, or broken canonical references, crawlers abandon pages before discovering your best content.",
          "We analyze your server log files, rendering behaviors, and internal architecture to ensure search bots can traverse and understand every single dollar-generating URL on your site.",
        ],
        bullets: [
          "Maximized crawl efficiency and indexation speed",
          "Resolution of duplicate content and canonical dilution",
          "Improved mobile UX and Core Web Vitals compliance",
          "Smooth site migrations without losing existing rankings",
        ],
      },
      {
        heading: "JavaScript SEO and Modern Framework Challenges",
        paragraphs: [
          "Websites built on modern JavaScript frameworks like React, Next.js, Vue, or Angular often experience severe rendering delays where Googlebot sees blank HTML. We inspect server-side rendering (SSR), dynamic rendering, and hydration bottlenecks to guarantee complete indexing.",
        ],
      },
      {
        heading: "Actionable Dev Tasks Over Generic Checklists",
        paragraphs: [
          "Our audit deliverables are designed specifically for software engineers. Instead of vague suggestions like 'improve speed,' we pinpoint the exact JavaScript files causing main-thread blockage and provide the code changes needed to resolve them.",
        ],
      },
    ],
    sidebarTitle: "Explore Consulting",
    sidebarDescription:
      "Discover our consulting, auditing, and strategy services.",
    sidebarGroups: [
      {
        title: "Consulting & Audits",
        links: [
          { label: "Technical Audit", href: "/technical-audit-services/" },
          { label: "SEO Consultancy", href: "/seo-consultancy-services/" },
          { label: "Free Website Audit", href: "/free-website-audit-services/" },
        ],
      },
      {
        title: "Platform SEO Services",
        links: [
          { label: "E-commerce SEO", href: "/ecommerce-seo-services/" },
          { label: "Shopify SEO", href: "/shopify-seo-services/" },
          { label: "WordPress SEO", href: "/wordpress-seo-services/" },
          { label: "Webflow SEO", href: "/webflow-seo-services/" },
        ],
      },
    ],
  },

  team: {
    eyebrow: "Technical Engineers",
    title: "Diagnostics led by",
    highlightText: "senior SEO engineers.",
    description:
      "Our team combines deep computer science and web development experience with advanced search engine algorithmic expertise.",
    cards: [
      {
        eyebrow: "Lead Tech Architect",
        title: "Crawl architecture & log analysis.",
        description:
          "Uncovering hidden server errors and crawl budget waste on multi-million URL databases.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "JavaScript SEO",
        title: "Next.js & React hydration auditing.",
        description:
          "Ensuring modern headless web apps render perfectly inside Googlebot's headless browser.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Web Vitals Specialist",
        title: "Core Web Vitals optimization.",
        description:
          "Shaving seconds off LCP and eliminating layout shifts on complex responsive templates.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Schema Engineer",
        title: "Complex JSON-LD knowledge graphs.",
        description:
          "Structuring nested schemas to win rich snippets and establish clear brand entities.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Engineering Liaison",
        title: "Dev team collaboration & QA.",
        description:
          "Translating technical SEO into actionable tickets and verifying fixes on staging environments.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to fix your technical SEO roadblocks?",
    footerDescription:
      "Schedule a technical audit scoping call with our senior SEO architects.",
    ctaText: "Schedule Technical Scope Call",
    ctaHref: "/contact",
  },
};
