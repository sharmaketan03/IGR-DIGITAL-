import {
  ShoppingBag,
  Zap,
  Target,
  BarChart3,
  Search,
  Rocket,
  ShieldCheck,
  Globe,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const shopifySeoData: ServicePageData = {
  // Section 1: Hero
  hero: {
    eyebrow: "SHOPIFY SEO AGENCY",
    headline: "Shopify SEO Agency for Stores That Want More Organic Sales",
    paragraph:
      "Great products are not enough if shoppers can't find your store. IGR Digital is a Shopify SEO agency that helps your collection pages, product pages and blog content rank for keywords buyers actually search, so organic traffic turns into orders, not just visits.",
    inputPlaceholder: "Enter your Shopify store URL",
    ctaLabel: "Get Your Free Shopify SEO Audit",
    circles: [
      {
        id: "shopify-traffic",
        value: 150,
        suffix: "%",
        label: "ORGANIC TRAFFIC GROWTH",
        sub: "Non-branded growth",
        backText: "Built for Shopify's structure, themes and apps.",
        className: "circle-blue",
      },
      {
        id: "shopify-keywords",
        value: 85,
        suffix: "%",
        label: "NON-BRANDED RANKINGS",
        sub: "Commercial terms",
        backText: "Collection, product and technical SEO under one roof.",
        className: "circle-violet",
      },
      {
        id: "shopify-revenue",
        value: 65,
        suffix: "%",
        label: "ORGANIC REVENUE GROWTH",
        backText: "Transparent monthly reporting tied to sales.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital helped our Shopify collection pages and products rank for high-intent search terms, turning organic traffic directly into orders.",
      reviewerInitial: "I",
      reviewerName: "IGR Digital Shopify Partner",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "5.0/5 Trustpilot" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,

  // Section 4: Problem and Solution
  whyChooseUs: {
    eyebrow: "PROBLEM AND SOLUTION",
    title: "We Master Shopify's Unique Constraints So You Win in Search",
    description:
      "Shopify is easy to launch and tricky to rank. Fixed URL structures, theme code, app bloat and duplicate collection URLs can quietly hold your store back. We know where these limits are and how to work around them.",
    benefits: [
      {
        icon: ShoppingBag,
        title: "Collection Architecture Built for Search",
        description:
          "Clean structure and internal links so Google and shoppers reach the right page fast.",
      },
      {
        icon: Target,
        title: "Product Page Optimization",
        description:
          "Titles, descriptions, schema and image SEO that win clicks and sales.",
      },
      {
        icon: Zap,
        title: "Technical Shopify Clean-up",
        description:
          "Canonicals, indexing, theme code and app scripts fixed in order of revenue impact.",
      },
      {
        icon: BarChart3,
        title: "Clear Reporting",
        description:
          "Organic sessions, assisted revenue and keyword growth in one dashboard.",
      },
    ],
  },

  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  // Section 11: Pricing
  pricing: {
    eyebrow: "Shopify SEO Pricing",
    title: "Tailored SEO for Fast-Scaling Shopify Brands",
    description:
      "Shopify SEO pricing depends on catalogue size, competition and goals. These plans are a starting point, and we tailor every proposal after your free audit.",
    plans: [
      {
        name: "Shopify Starter",
        price: "Custom quote",
        period: "",
        description:
          "For small stores getting started. Ideal for Shopify SEO for small stores.",
        features: [
          "Shopify SEO audit and keyword research",
          "Optimization of key collection and product pages",
          "Basic technical fixes",
          "Monthly reporting",
        ],
        ctaText: "Get Starter Quote",
        ctaHref: "/contact",
      },
      {
        name: "Shopify Growth",
        price: "Custom quote",
        period: "",
        popular: true,
        description: "For growing stores that want faster results.",
        features: [
          "Everything in Starter",
          "Ongoing collection and product page optimization",
          "Content and link building",
          "Conversion-focused improvements",
          "Bi-weekly calls",
        ],
        ctaText: "Get Growth Quote",
        ctaHref: "/contact",
      },
      {
        name: "Custom",
        price: "Let's talk",
        period: "",
        description:
          "For large catalogues, Shopify Plus and multi-market stores.",
        features: [
          "Dedicated SEO team",
          "Advanced technical SEO and migrations",
          "International and multi-store SEO",
          "Custom reporting and strategy",
        ],
        ctaText: "Talk to Us",
        ctaHref: "/contact",
      },
    ],
  },

  // Section 16: Comparison Table
  comparisonTable: {
    eyebrow: "Specialists vs Generalists",
    title: "Shopify SEO Specialists vs General Agencies",
    description:
      "Why partnering with dedicated Shopify SEO experts delivers measurable revenue outcomes.",
    usLabel: "IGR Digital",
    competitorsLabel: "Typical Freelancer or General Agency",
    inHouseLabel: "DIY / Store Staff",
    rows: [
      {
        feature: "Collection and product page optimization",
        us: true,
        competitors: "Partial",
        inHouse: "Basic",
      },
      {
        feature: "Shopify theme and app speed fixes",
        us: true,
        competitors: "Basic",
        inHouse: false,
      },
      {
        feature: "Revenue-focused reporting",
        us: true,
        competitors: false,
        inHouse: "Traffic only",
      },
      {
        feature: "Dedicated Shopify specialists",
        us: true,
        competitors: "Rarely",
        inHouse: false,
      },
      {
        feature: "Content and link building",
        us: true,
        competitors: "Add-on",
        inHouse: "Limited",
      },
    ],
  },

  // Section 8: Process (id="process")
  process: {
    eyebrow: "90-DAY PROCESS",
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
          "Full Shopify SEO audit and competitor analysis, keyword and collection mapping, and critical technical fixes.",
        icon: Search,
        details: [
          "Full Shopify SEO audit and competitor analysis",
          "Keyword and collection mapping",
          "Critical technical fixes",
        ],
      },
      {
        number: "02",
        title: "Days 31-60: Optimize and Build",
        label: "Phase 2",
        description:
          "Optimize priority collection and product pages, improve internal linking and navigation, launch content, schema and speed improvements.",
        icon: Zap,
        details: [
          "Optimize priority collection and product pages",
          "Improve internal linking and navigation",
          "Launch content, schema and speed improvements",
        ],
      },
      {
        number: "03",
        title: "Days 61-90: Scale and Compound",
        label: "Phase 3",
        description:
          "Expand to more collections and keywords, start authority and link building, review performance and refine the roadmap.",
        icon: Rocket,
        details: [
          "Expand to more collections and keywords",
          "Start authority and link building",
          "Review performance and refine the roadmap",
        ],
      },
    ],
    ctaText: "Ready to scale your Shopify store?",
    ctaButtonText: "Talk to a Shopify SEO Expert",
    ctaHref: "/contact",
  },

  // Section 12: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "Shopify SEO Guide",
    title: "Specialized Shopify SEO Designed for Serious Online Brands",
    intro:
      "Traffic only matters if it buys. Beyond rankings, we improve how your pages present products, build trust and guide shoppers to checkout: clearer headings, better product information, review signals, links to related products and faster load times. You get more qualified visitors and a better chance that each one becomes a customer.",
    content: [
      {
        id: "what-is",
        heading: "What Is Shopify SEO?",
        paragraphs: [
          "Shopify SEO is the process of optimizing your Shopify store so it appears higher in Google when shoppers search for products you sell. It covers collection pages, product pages, theme code, page speed, structured data, content and backlinks.",
          "Shopify handles some basics for you, like sitemaps and canonical tags. But it also brings its own limits: fixed URL paths, duplicate product URLs inside collections, tag pages and app-injected code. A good Shopify SEO expert knows which settings to trust and which to fix.",
          "Done well, Shopify SEO brings steady, high-intent traffic without paying for every click. Ads stop the moment you stop paying. SEO keeps working.",
        ],
      },
      {
        id: "deliver",
        heading: "Shopify SEO: What We Deliver",
        paragraphs: [],
        bullets: [
          "Shopify SEO Audit: A full Shopify technical SEO audit covering crawlability, indexation, speed, duplicate content, theme code and keyword gaps, with a prioritized fix list.",
          "Shopify Collection Page SEO: Collection pages usually drive the most revenue. We optimize targeting, headings, copy, internal links and filters so they rank for high-volume commercial keywords.",
          "Product Page SEO: Unique titles and descriptions, product schema, image optimization, review markup and internal linking built to improve rankings and conversions.",
          "Technical SEO: Canonical tags, crawl budget, robots.txt, XML sitemaps, Core Web Vitals, pagination, redirects and app script clean-up.",
          "Content and Keyword Strategy: Buying guides, comparison pages and blog content that reach shoppers early and guide them to purchase.",
          "Link Building and Authority: Relevant, quality backlinks and digital PR. No spammy links.",
          "Reporting and Analytics: Clear dashboards for rankings, organic traffic, conversions and revenue.",
        ],
      },
      {
        id: "who-needs",
        heading: "Who Needs Shopify SEO?",
        paragraphs: [
          "Based in India or selling globally? Our team of Shopify SEO experts in India supports domestic and international stores, including Shopify Plus and multi-market setups.",
        ],
        bullets: [
          "You run a small or growing store: You want sales without depending only on ads.",
          "You are a D2C brand: You want to own your traffic instead of renting it from social platforms.",
          "You have a large catalogue: Hundreds or thousands of products need structure, not guesswork.",
          "Your ad costs keep rising: Organic traffic lowers your cost per acquisition over time.",
          "You are migrating or redesigning: Moving to Shopify or changing themes can wipe out your rankings if done wrong.",
        ],
      },
      {
        id: "pricing",
        heading: "Shopify SEO Pricing and Packages",
        paragraphs: [
          "Every store has a different catalogue, competition level and growth goal, so we price each plan after reviewing your store. Share your store link for a free audit and a clear quote. See the plans above for what each package includes.",
        ],
        buttonText: "Get a Custom Quote",
        buttonHref: "/contact",
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription:
      "Jump directly to any section of our comprehensive Shopify SEO breakdown.",
    sidebarGroups: [
      {
        title: "Navigation",
        links: [
          { label: "What Is Shopify SEO?", href: "#what-is" },
          { label: "Shopify SEO: What We Deliver", href: "#deliver" },
          { label: "Our Shopify SEO Process", href: "#process" },
          { label: "Who Needs Shopify SEO?", href: "#who-needs" },
          { label: "Shopify SEO Pricing and Packages", href: "#pricing" },
          { label: "Shopify SEO Results and Case Studies", href: "#case-studies" },
          { label: "Frequently Asked Questions About Shopify SEO", href: "#faq" },
        ],
      },
    ],
  },

  // Section 17: Case Studies (id="case-studies")
  team: {
    eyebrow: "CASE STUDIES",
    title: "Stores Scaled by",
    highlightText: "Certified Shopify SEO Pros",
    description: "Here is how our approach helps Shopify stores grow.",
    cards: [
      {
        eyebrow: "Fashion Shopify Store",
        title: "Higher rankings for commercial collection keywords and steady growth in organic orders.",
        description:
          "Challenge: Strong products, but collection pages stuck beyond page two.\n\nWhat we did: Restructured collections, optimized product pages and fixed duplicate URL issues.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
      {
        eyebrow: "Home and Lifestyle Store",
        title: "Faster pages, better rankings and improved conversion rate.",
        description:
          "Challenge: Slow theme and heavy app scripts hurting speed.\n\nWhat we did: Theme and app clean-up, image optimization and Core Web Vitals fixes.",
        image:
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
      {
        eyebrow: "D2C Beauty Brand",
        title: "Lower cost per acquisition as organic orders grew.",
        description:
          "Challenge: Heavy dependence on paid ads.\n\nWhat we did: Product page SEO, buying guides and schema markup.",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-4 min-h-[340px]",
      },
    ],
    footerTitle: "Ready to scale your Shopify store?",
    footerDescription:
      "Read our full collection of client transformations and revenue-focused case studies.",
    ctaText: "Read All Case Studies",
    ctaHref: "/case-studies",
  },

  // Section 18: FAQ (id="faq")
  faqs: {
    eyebrow: "FAQS",
    title: "Frequently Asked Questions About Shopify SEO",
    description:
      "Everything you need to know about optimizing your Shopify store for Google search and revenue.",
    faqs: [
      {
        question: "What is the best Shopify SEO agency for small stores?",
        answer:
          "The best fit knows Shopify's structure, shows real store results and reports on revenue, not just rankings. For small stores, a focused plan around your top collections and best-selling products usually beats a broad, expensive one.",
      },
      {
        question: "How much do Shopify SEO services cost?",
        answer:
          "Pricing depends on catalogue size, competition and goals. Small stores can start with a focused monthly package, while larger stores need custom plans. We recommend a plan after your free audit.",
      },
      {
        question: "How long does Shopify SEO take to show results?",
        answer:
          "Most stores see early improvements in 2-3 months and stronger revenue growth between 4 and 6 months. Competitive categories can take longer.",
      },
      {
        question: "What is included in a Shopify SEO audit?",
        answer:
          "A technical review, on-page analysis of collection and product pages, theme and app speed checks, keyword gap analysis, competitor comparison and a prioritized action plan.",
      },
      {
        question: "Should I hire a Shopify SEO expert or use apps?",
        answer:
          "Apps can help with small tasks like meta tags, but they can't build strategy, fix theme code or plan collection architecture. Many stores hire a Shopify SEO expert to guide the work and use apps only where they help.",
      },
      {
        question: "Do you work with Shopify Plus stores?",
        answer:
          "Yes. We support Shopify and Shopify Plus stores, including multi-market and international setups.",
      },
      {
        question: "Do you offer Shopify SEO services in India?",
        answer:
          "Yes. We work with Indian online stores and D2C brands, as well as stores targeting the US, UK and other global markets.",
      },
    ],
  },

  // Section 19: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "INSIGHTS & GUIDES",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on collection pages, Shopify speed, product schema and store migrations.",
    articles: [
      {
        title: "How to Optimize Shopify Collection Pages for More Sales",
        category: "Collection SEO",
        readTime: "7 min read",
        excerpt:
          "A practical framework for ranking collection pages on commercial keywords.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Shopify Duplicate URLs and Canonical Tags Explained",
        category: "Technical SEO",
        readTime: "6 min read",
        excerpt:
          "How to keep product and collection URLs from competing.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Shopify Migration SEO Checklist",
        category: "Migrations",
        readTime: "9 min read",
        excerpt:
          "Protect your rankings when you move to Shopify or redesign.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  // Section 20: Final CTA
  finalCta: {
    eyebrow: "START SCALING",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free audit and a clear 90-day plan to grow your Shopify store's organic sales.",
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
