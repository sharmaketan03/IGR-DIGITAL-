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
    eyebrow: "ECOMMERCE SEO SERVICES",
    headline: "Ecommerce SEO Services That Turn Search Traffic Into Sales",
    paragraph:
      "Most online stores don't have a traffic problem. They have a buying-traffic problem. IGR Digital is an ecommerce SEO company that helps your category pages, product pages and collections rank for the keywords shoppers actually buy on, so organic traffic turns into orders instead of just visits.",
    inputPlaceholder: "Enter your store URL",
    ctaLabel: "Get Your Free Store Audit",
    circles: [
      {
        id: "traffic-growth",
        value: 150,
        suffix: "%",
        label: "ORGANIC TRAFFIC",
        sub: "Non-branded growth",
        backText: "Revenue-focused strategy, not vanity rankings.",
        className: "circle-blue",
      },
      {
        id: "keyword-growth",
        value: 85,
        suffix: "%",
        label: "KEYWORD RANKINGS",
        sub: "Commercial terms",
        backText: "Category, product and technical SEO under one roof.",
        className: "circle-violet",
      },
      {
        id: "revenue-growth",
        value: 65,
        suffix: "%",
        label: "ORGANIC REVENUE",
        backText: "Transparent monthly reporting tied to sales.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital helped our category pages and collections rank for buying keywords, converting organic traffic directly into orders.",
      reviewerInitial: "I",
      reviewerName: "IGR Digital Ecommerce Partner",
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

  // Section 11: Pricing
  pricing: {
    eyebrow: "Ecommerce SEO Plans",
    title: "Ecommerce SEO Plans Built for Store Revenue",
    description:
      "Ecommerce SEO pricing depends on catalogue size, competition and goals. These plans are a starting point, and we tailor every proposal after your free audit.",
    plans: [
      {
        name: "Starter",
        price: "Custom quote",
        period: "",
        description: "For small stores getting started.",
        features: [
          "Store audit and keyword research",
          "Optimization of key category and product pages",
          "Basic technical fixes",
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
        description: "For growing stores that want faster results.",
        features: [
          "Everything in Starter",
          "Ongoing category and product page optimization",
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
        description: "For large catalogues and enterprise stores.",
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

  // Section 4: Problem and Solution
  whyChooseUs: {
    eyebrow: "Problem and Solution",
    title: "Ecommerce SEO Tuned for Checkout Conversion, Not Just Impressions",
    description:
      "Ranking is only half the job. We connect your SEO strategy to what happens after the click: product discovery, trust and checkout.",
    benefits: [
      {
        icon: ShoppingCart,
        title: "Category architecture built for search",
        description:
          "A clean structure so Google and shoppers reach the right page fast.",
      },
      {
        icon: Target,
        title: "Product page optimization",
        description:
          "Titles, descriptions, schema and internal links that win clicks and sales.",
      },
      {
        icon: Zap,
        title: "Technical clean-up",
        description:
          "Crawl, index and speed issues fixed in order of revenue impact.",
      },
      {
        icon: BarChart3,
        title: "Clear reporting",
        description:
          "Organic sessions, assisted revenue and keyword growth in one dashboard.",
      },
    ],
  },

  // Section 16: Comparison Table
  comparisonTable: {
    eyebrow: "Comparison",
    title: "How Our Ecommerce SEO Delivers More Sales",
    description:
      "See how our dedicated ecommerce SEO specialists and revenue-focused reporting deliver superior sales performance.",
    usLabel: "IGR Digital",
    competitorsLabel: "Typical Freelancer or Generic Agency",
    inHouseLabel: "In-House Team",
    rows: [
      {
        feature: "Product and category page optimization",
        us: "Yes",
        competitors: "Partial",
        inHouse: "Partial",
      },
      {
        feature: "Technical and crawl budget fixes",
        us: "Advanced",
        competitors: "Basic",
        inHouse: "Basic",
      },
      {
        feature: "Revenue-focused reporting",
        us: "Yes",
        competitors: "No",
        inHouse: "Partial",
      },
      {
        feature: "Dedicated ecommerce specialists",
        us: "Yes",
        competitors: "Rarely",
        inHouse: "Rarely",
      },
      {
        feature: "Content and link building",
        us: "Included",
        competitors: "Add-on",
        inHouse: "Add-on",
      },
    ],
  },

  // Section 8: Process (id="process")
  process: {
    eyebrow: "90-Day Roadmap",
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
          "Full store audit and competitor analysis, keyword and category mapping, and critical technical fixes.",
        icon: Search,
        details: [
          "Full store audit and competitor analysis",
          "Keyword and category mapping",
          "Critical technical fixes",
        ],
      },
      {
        number: "02",
        title: "Days 31-60: Optimize and Build",
        label: "Phase 2",
        description:
          "Optimize priority category and product pages, improve internal linking and site structure, launch content and schema improvements.",
        icon: Target,
        details: [
          "Optimize priority category and product pages",
          "Improve internal linking and site structure",
          "Launch content and schema improvements",
        ],
      },
      {
        number: "03",
        title: "Days 61-90: Scale and Compound",
        label: "Phase 3",
        description:
          "Expand to more categories and keywords, start authority and link building, review performance and refine the roadmap.",
        icon: TrendingUp,
        details: [
          "Expand to more categories and keywords",
          "Start authority and link building",
          "Review performance and refine the roadmap",
        ],
      },
    ],
    ctaText: "SEO takes time, but a 90-day plan gives you milestones, early wins and a roadmap for the quarters ahead.",
    ctaButtonText: "Get Your Free Store Audit",
    ctaHref: "/contact",
  },

  // Section 12: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "Ecommerce SEO",
    title: "Ecommerce SEO Built to Turn Browsers into Loyal Buyers",
    intro:
      "Traffic only matters if it buys. Beyond rankings, we improve how your pages present products, build trust and guide shoppers to checkout: clearer headings, better product information, review signals, links to related products and faster load times. You get more qualified visitors and a better chance that each one becomes a customer.",
    content: [
      {
        heading: "What Is Ecommerce SEO?",
        paragraphs: [
          "Ecommerce SEO is the process of optimizing your online store so it appears higher in Google when shoppers search for products you sell. It covers category pages, product pages, site structure, page speed, content and backlinks.",
          "Unlike regular SEO, it deals with hundreds or thousands of pages, duplicate content from filters and variants, and buyers who are close to purchasing. Done well, it brings steady, high-intent traffic without paying for every click.",
          "For most stores, organic search becomes the most cost-efficient sales channel over time. Ads stop the moment you stop paying. SEO keeps working.",
        ],
      },
      {
        heading: "Ecommerce SEO: What We Deliver",
        paragraphs: [],
        bullets: [
          "Ecommerce SEO Audit: A full review of crawlability, indexation, speed, duplicate content, structure and keyword gaps, with a prioritized fix list.",
          "Ecommerce Category Page SEO: Category pages usually drive the most revenue. We optimize targeting, headings, copy, internal links and filters so they rank for high-volume commercial keywords.",
          "Product Page SEO Service: Unique titles and descriptions, product schema, image optimization, review markup and internal linking built to improve rankings and conversions.",
          "Technical SEO: Site architecture, canonical tags, crawl budget, XML sitemaps, Core Web Vitals, pagination and faceted navigation.",
          "Content and Keyword Strategy: Buying guides, comparison pages and category content that reach shoppers early and guide them to purchase.",
          "Link Building and Authority: Relevant, quality backlinks and digital PR. No spammy links.",
          "Reporting and Analytics: Clear dashboards for rankings, organic traffic, conversions and revenue.",
        ],
      },
      {
        heading: "Who Needs Ecommerce SEO?",
        paragraphs: [
          "Based in India or selling globally? Our ecommerce SEO services in India support Shopify, WooCommerce, Magento, BigCommerce and custom platforms for domestic and international markets.",
        ],
        bullets: [
          "You run a small or growing store: You want sales without depending only on ads. This is where ecommerce SEO for small business pays off.",
          "You are a D2C brand: You want to own your traffic instead of renting it from social platforms.",
          "You have a large catalogue: Thousands of SKUs need structure, not guesswork.",
          "Your ad costs keep rising: Organic traffic lowers your cost per acquisition over time.",
          "You are migrating or redesigning: A badly handled migration can wipe out your rankings.",
        ],
      },
      {
        heading: "Ecommerce SEO Pricing and Packages",
        paragraphs: [
          "Every store has a different catalogue, competition level and growth goal, so we price each plan after reviewing your site. Share your store link for a free audit and a clear quote. See the plans above for what each package includes.",
        ],
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription:
      "Quickly navigate through our ecommerce SEO service deliverables and guides.",
    sidebarGroups: [
      {
        title: "On This Page",
        links: [
          { label: "1. What Is Ecommerce SEO?", href: "#what-is" },
          { label: "2. Ecommerce SEO: What We Deliver", href: "#deliver" },
          { label: "3. Our Ecommerce SEO Process", href: "#process" },
          { label: "4. Who Needs Ecommerce SEO?", href: "#who-needs" },
          { label: "5. Ecommerce SEO Pricing and Packages", href: "#pricing" },
          { label: "6. Ecommerce SEO Results and Case Studies", href: "#case-studies" },
          { label: "7. Frequently Asked Questions About Ecommerce SEO", href: "#faq" },
        ],
      },
      {
        title: "Related Solutions",
        links: [
          { label: "About IGR Digital", href: "/about" },
          { label: "Technical SEO Audit", href: "/technical-audit-services/" },
          { label: "Link Building Services", href: "/link-building-services/" },
          { label: "Client Case Studies", href: "/case-studies" },
          { label: "Request Free Store Audit", href: "/contact" },
        ],
      },
    ],
  },

  // Section 17: Case Studies (id="case-studies")
  team: {
    eyebrow: "Proven Retail Outcomes",
    title: "Ecommerce Growth Built by",
    highlightText: "Retail SEO Experts",
    description: "Here is how our approach helps online stores grow.",
    cards: [
      {
        eyebrow: "Fashion Ecommerce Store",
        title: "Commercial category keywords and steady order growth.",
        description:
          "Challenge: Strong products, but category pages stuck beyond page two. What we did: Restructured categories, optimized product pages and fixed crawl issues. Result: Higher rankings for commercial category keywords and steady growth in organic orders.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Home and Lifestyle Store",
        title: "Cleaned duplicate filters and grew non-branded clicks.",
        description:
          "Challenge: Thousands of duplicate filter pages diluting rankings. What we did: Canonical and indexing clean-up, plus new category content. Result: Faster indexing and more non-branded clicks.",
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "D2C Beauty Brand",
        title: "Lowered CAC as organic orders compounded.",
        description:
          "Challenge: Heavy dependence on paid ads. What we did: Product page SEO, buying guides and schema markup. Result: Lower cost per acquisition as organic orders grew.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Technical Commerce",
        title: "Eliminating filter & crawl bloat.",
        description:
          "Speeding up catalog loading and solving complex headless and faceted navigation challenges.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Store Partnership",
        title: "Working as your in-house growth wing.",
        description:
          "Coordinating closely with your merchandising, inventory, and development teams.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to scale your ecommerce revenue?",
    footerDescription:
      "Get a custom audit of your store's architecture, indexing, and keyword gaps.",
    ctaText: "Read All Case Studies",
    ctaHref: "/case-studies",
  },

  // Section 18: FAQ (id="faq")
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Frequently Asked Questions About Ecommerce SEO",
    description: "Still have questions? Talk to an expert.",
    faqs: [
      {
        question: "What is the best ecommerce SEO company for small businesses?",
        answer:
          "The best fit understands product and category pages, shows real ecommerce results and reports on revenue, not just rankings. For small stores, a focused plan around your highest-margin products usually beats a broad, expensive one.",
      },
      {
        question: "How much do ecommerce SEO services cost?",
        answer:
          "Pricing depends on catalogue size, competition and goals. Small stores can start with a focused monthly package, while larger stores need custom plans. We recommend a plan after your free audit.",
      },
      {
        question: "How long does ecommerce SEO take to show results?",
        answer:
          "Most stores see early improvements in 2-3 months and stronger revenue growth between 4 and 6 months. Competitive categories can take longer.",
      },
      {
        question: "What is included in an ecommerce SEO audit?",
        answer:
          "A technical review, on-page analysis of category and product pages, keyword gap analysis, competitor comparison and a prioritized action plan.",
      },
      {
        question: "Do you work with Shopify, WooCommerce and Magento?",
        answer:
          "Yes. We work across all major platforms and custom builds.",
      },
      {
        question: "Is ecommerce SEO better than paid ads?",
        answer:
          "They work best together. Ads give quick traffic, while SEO builds long-term traffic that doesn't cost per click.",
      },
      {
        question: "Do you offer ecommerce SEO services in India?",
        answer:
          "Yes. We work with Indian online stores and D2C brands, as well as stores targeting the US, UK and other global markets.",
      },
    ],
  },

  // Section 19: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "Industry Insights",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on category pages, faceted navigation, product schema and store migrations.",
    articles: [
      {
        title: "How to Optimize Ecommerce Category Pages for More Sales",
        category: "Category SEO",
        readTime: "7 min read",
        excerpt:
          "A practical framework for ranking category pages on commercial keywords.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Faceted Navigation and Crawl Budget Explained",
        category: "Technical SEO",
        readTime: "8 min read",
        excerpt:
          "How to stop filters from creating duplicate pages.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Ecommerce Migration SEO Checklist",
        category: "Store Migration",
        readTime: "6 min read",
        excerpt:
          "Protect your rankings when you change platforms or redesign.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  // Section 20: Final CTA
  finalCta: {
    eyebrow: "GET YOUR FREE 90-DAY ROADMAP",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free audit and a clear 90-day plan to grow your store's organic sales.",
    primaryCtaText: "Request Your Free Strategy Session",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Talk to an SEO Expert",
    secondaryCtaHref: "/contact",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "4.9/5", label: "Client rating" },
      { value: "$45M+", label: "Revenue generated" },
      { value: "98%", label: "Client retention" },
    ],
  },
};
