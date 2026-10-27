
import {
  Link2,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const linkBuildingData: ServicePageData = {
  hero: {
    eyebrow: "Editorial Backlinks That Build Domain Authority and Unstoppable Rankings",
    headline: "Link Building Services That Earn Relevant, High-Quality Backlinks",
    paragraph:
      "Great content and a strong site still struggle without trusted backlinks. IGR Digital is a link building company and link building agency that earns relevant, high quality backlinks from real publications and blogs through manual outreach, digital PR and linkable assets. No private blog networks, no link farms, no shortcuts.",
    inputPlaceholder: "Enter your website domain",
    ctaLabel: "Get a Custom Link Plan",
    circles: [
      {
        id: "traffic-growth",
        value: 310,
        suffix: "%",
        label: "Top-10 keyword rankings",
        sub: "Rankings lift",
        backText: "Contextual backlinks directed strategically to target URLs create authoritative surges.",
        className: "circle-blue",
      },
      {
        id: "dr-lift",
        value: 18,
        suffix: "+",
        label: "Average domain rating increase",
        sub: "Within 6 months",
        backText: "Editorial links from vetted publications increase site-wide domain authority.",
        className: "circle-violet",
      },
      {
        id: "links-built",
        value: 100,
        suffix: "%",
        label: "Manual, white-hat outreach",
        sub: "Zero shortcuts",
        backText: "Zero PBNs or link farms. We execute personalized outreach to real publications.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital built high-tier contextual links that earned relevant authority for our platform and compounded our keyword rankings.",
      reviewerInitial: "I",
      reviewerName: "IGR Digital Client Partner",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "100% White-Hat Guarantee" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  // Section 12: Pricing
  pricing: {
    eyebrow: "Link Building Packages",
    title: "Quality-Focused Backlink Acquisition Packages",
    description:
      "Link building pricing depends on your niche, competition and goals. These link building packages are a starting point, and we tailor every proposal after your free audit.",
    plans: [
      {
        name: "Starter",
        price: "Custom quote",
        period: "",
        description: "For startups and small businesses building first authority.",
        features: [
          "Backlink audit and competitor gap",
          "Manual outreach to relevant sites",
          "Monthly link placements",
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
        description: "For SaaS and B2B brands that want faster results.",
        features: [
          "Everything in Starter",
          "Higher monthly link volume",
          "Digital PR and linkable assets",
          "Anchor and page strategy",
          "Bi-weekly calls",
        ],
        ctaText: "Get Growth Quote",
        ctaHref: "/contact",
      },
      {
        name: "Custom",
        price: "Let's talk",
        period: "",
        description: "For large brands and competitive niches.",
        features: [
          "Dedicated link team",
          "Large-scale digital PR",
          "Toxic link cleanup",
          "Custom reporting and strategy",
        ],
        ctaText: "Talk to Us",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Strict Editorial Standards",
    title: "Strict Editorial Standards and 100% White-Hat Outreach",
    description:
      "We only pursue links from real sites with real audiences. We do not use private blog networks, link farms, hidden links or paid link schemes that break search guidelines.",
    benefits: [
      {
        icon: ShieldCheck,
        title: "100% Manual, White-Hat Outreach",
        description:
          "Every pitch is personal, useful and written for the editor's audience.",
      },
      {
        icon: Target,
        title: "Links from Relevant Sites with Real Audiences",
        description:
          "We build lasting contacts with editors and bloggers, not one-off transactions.",
      },
      {
        icon: Award,
        title: "Transparent Reporting on Every Link Placed",
        description:
          "Every link is checked for relevance, traffic and safety before we report it.",
      },
    ],
  },

  // Section 3 & 16: White-Hat Outreach vs Traditional Link Sellers
  comparisonTable: {
    eyebrow: "White-Hat Outreach vs Traditional Link Sellers",
    title: "Our White-Hat Outreach vs Traditional Link Sellers",
    description:
      "Not all backlinks help. Cheap links can put your site at risk, while high quality website backlinks from real publications build lasting trust. Here is how our approach compares.",
    usLabel: "IGR Digital",
    competitorsLabel: "Traditional Link Sellers",
    inHouseLabel: "DIY In-House",
    rows: [
      {
        feature: "Link source",
        us: "Real, relevant publications",
        competitors: "Private networks and bulk sites",
        inHouse: "Niche specific",
      },
      {
        feature: "Outreach method",
        us: "Manual, personalized",
        competitors: "Automated or none",
        inHouse: "Manual",
      },
      {
        feature: "Content relevance",
        us: "Closely matched to your niche",
        competitors: "Often unrelated",
        inHouse: "Matched",
      },
      {
        feature: "Quality review",
        us: "Every link checked",
        competitors: "Rarely",
        inHouse: "Internal",
      },
      {
        feature: "Risk to your site",
        us: "Low",
        competitors: "High",
        inHouse: "Low",
      },
      {
        feature: "Reporting",
        us: "Full details and anchor plan",
        competitors: "Basic list",
        inHouse: "Manual log",
      },
    ],
  },

  // Section 4: How We Secure Tier-1 Editorial Backlinks
  process: {
    eyebrow: "Tier-1 Editorial Methodology",
    title: "How We Secure",
    highlightText: "Tier-1 Editorial Backlinks",
    description:
      "Editorial links are earned, not bought. Our contextual backlink building services combine research, relationships and useful content to win placements that search engines trust.",
    steps: [
      {
        number: "01",
        title: "Backlink Gap Analysis",
        label: "Competitive Intelligence",
        description:
          "We study your competitors' links to find the best opportunities for you.",
        icon: Search,
        details: [
          "Domain authority gap review",
          "Anchor text distribution",
          "High-value target mapping",
        ],
      },
      {
        number: "02",
        title: "Target Prospecting",
        label: "Niche Research",
        description:
          "We build a list of relevant sites, blogs and journalists in your niche.",
        icon: Target,
        details: [
          "Real organic traffic screening",
          "Editorial relevance vetting",
          "Spam and safety verification",
        ],
      },
      {
        number: "03",
        title: "Custom Content Pitching",
        label: "Personalized Outreach",
        description:
          "Every pitch is personal, useful and written for the editor's audience.",
        icon: Zap,
        details: [
          "Original story angles",
          "Data-driven pitches",
          "Audience value creation",
        ],
      },
      {
        number: "04",
        title: "Relationship Building",
        label: "Editorial Connections",
        description:
          "We build lasting contacts with editors and bloggers, not one-off transactions.",
        icon: Award,
        details: [
          "Long-term publisher trust",
          "Repeat placement potential",
          "Journalist relationships",
        ],
      },
      {
        number: "05",
        title: "Placement and Follow-Up",
        label: "Live Publishing",
        description:
          "We manage replies, edits and publishing until the link goes live.",
        icon: Link2,
        details: [
          "Editorial feedback management",
          "Anchor placement precision",
          "Live URL verification",
        ],
      },
      {
        number: "06",
        title: "Link Quality Review",
        label: "Quality Assurance",
        description:
          "Every link is checked for relevance, traffic and safety before we report it.",
        icon: ShieldCheck,
        details: [
          "Live indexation audit",
          "Outbound link profile check",
          "Dofollow safety confirmation",
        ],
      },
    ],
    ctaText: "Ready to build authority through blogger outreach and high-tier backlinks?",
    ctaButtonText: "Get a Custom Link Plan",
    ctaHref: "/contact",
  },

  // Section 13: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "Authority & Trust Architecture",
    title: "Link Building Engineered for Algorithmic Authority and Trust",
    intro:
      "Backlinks remain one of the strongest signals of trust in search. The key is quality over quantity: relevant sites, natural placements and a clear plan. Our link building services focus on links that help your rankings and send real readers to your site.",
    content: [
      {
        id: "what-is",
        heading: "What Is Link Building?",
        paragraphs: [
          "Link building is the process of earning backlinks from other websites to yours. Search engines treat quality links as votes of trust, so relevant links from respected sites help your pages rank higher and reach more people.",
          "Not every link is helpful. Links from spammy, unrelated or paid-network sites can do harm. Good link building focuses on relevance, real audiences and natural placement, and it works best alongside strong content and technical SEO.",
          "Done well, a backlink building service builds authority that keeps paying off for months and years, not just for a single campaign.",
        ],
      },
      {
        id: "deliver",
        heading: "Link Building: What We Deliver",
        subBlocks: [
          {
            heading: "Manual Outreach and Relationship Building",
            paragraph:
              "Our manual link building services start with personal outreach to editors, bloggers and site owners in your niche. We build real relationships, so links come from trust, not templates.",
          },
          {
            heading: "SaaS and B2B Link Building",
            paragraph:
              "SaaS link building services need a different approach from consumer brands. We target industry blogs, tool roundups, comparison pages and expert publications that your buyers read. Our B2B link building services focus on relevance and referral value.",
          },
          {
            heading: "Linkable Assets and Digital PR",
            paragraph:
              "We create useful assets such as research, data stories, guides and tools that earn links naturally, and pitch them to journalists and publishers through digital PR.",
          },
          {
            heading: "Link Building for Service Pages and Homepage Link Building",
            paragraph:
              "Your service pages and homepage carry your main revenue keywords. Our link building for service pages and homepage link building plans send relevant links to the pages that convert, with varied anchors and natural placement.",
          },
          {
            heading: "Backlinks for Landing Pages",
            paragraph:
              "Campaign and product pages need trust too. We build backlinks for landing pages through relevant content placements, so both paid and organic visitors land on pages that rank and convert.",
          },
          {
            heading: "Backlink Audit and Toxic Link Cleanup",
            paragraph:
              "We review your existing links, find harmful or low-quality ones and clean them up, so your link profile stays healthy as it grows.",
          },
        ],
      },
      {
        id: "our-process",
        heading: "Our Link Building Process",
        subBlocks: [
          {
            heading: "Backlink Audit and Competitor Gap",
            paragraph:
              "We review your current links and compare them with competitors to find the biggest gaps.",
          },
          {
            heading: "Link Strategy and Target List",
            paragraph:
              "You get a clear plan with target pages, anchor approach, priority sites and timelines.",
          },
          {
            heading: "Outreach and Placement",
            paragraph:
              "Our team pitches, follows up and manages each placement until the link is live.",
          },
          {
            heading: "Reporting and Link Quality Review",
            paragraph:
              "We check every link for relevance and quality, then share a report with live URLs, anchors and ranking impact.",
          },
        ],
      },
      {
        id: "who-needs",
        heading: "Who Needs Link Building?",
        subBlocks: [
          {
            heading: "SaaS and B2B Companies",
            paragraph:
              "Brands in competitive software and services markets that need trusted links to compete for high-value keywords.",
          },
          {
            heading: "Startups Building First Authority",
            paragraph:
              "New sites with little or no backlink profile. White hat link building for small business and startups gives you a safe, steady start. Link building for startups works best when it is paired with strong core pages.",
          },
          {
            heading: "New Websites",
            paragraph:
              "Fresh domains need a careful start. Our backlink creation for new websites builds a natural profile step by step, with no sudden spikes that look unnatural.",
          },
          {
            heading: "Small and Growing Businesses",
            paragraph:
              "Our backlink creation for small businesses is focused and budget-aware, so every link has a purpose. We also handle backlinks for business websites in service, ecommerce and local markets.",
          },
          {
            heading: "Brands Recovering From Poor Backlinks",
            paragraph:
              "Sites hurt by low-quality links or past link schemes. We audit, clean up and rebuild with safe, relevant links.",
          },
        ],
        paragraphs: [
          "Based in India or serving global clients? Our link building services in India support SaaS, B2B, service and ecommerce brands across domestic and international markets. We also pair link building with ecommerce SEO, WordPress SEO, Shopify SEO and Webflow SEO for platform-specific growth.",
        ],
      },
      {
        id: "pricing",
        heading: "Link Building Pricing and Packages",
        paragraphs: [
          "Every site has a different niche, competition level and goal, so we price each plan after reviewing your website. Share your site link for a free audit and a clear quote. See the plans above for what each package includes.",
        ],
        buttonText: "Get a Custom Quote",
        buttonHref: "/contact",
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription:
      "Quickly jump to any section of our Link Building Services guide.",
    sidebarGroups: [
      {
        title: "On This Page",
        links: [
          { label: "1. What Is Link Building?", href: "#what-is" },
          { label: "2. Link Building: What We Deliver", href: "#deliver" },
          { label: "3. Our Link Building Process", href: "#our-process" },
          { label: "4. Who Needs Link Building?", href: "#who-needs" },
          { label: "5. Link Building Pricing and Packages", href: "#pricing" },
          { label: "6. Link Building Results and Case Studies", href: "#case-studies" },
          { label: "7. Frequently Asked Questions About Link Building", href: "#faq" },
        ],
      },
      {
        title: "Explore Core SEO Services",
        links: [
          { label: "Link Building Company (About)", href: "/about" },
          { label: "Ecommerce SEO Services", href: "/ecommerce-seo-services/" },
          { label: "WordPress SEO Services", href: "/wordpress-seo-services/" },
          { label: "Shopify SEO Agency", href: "/shopify-seo-services/" },
          { label: "Webflow SEO Agency", href: "/webflow-seo-services/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Free Audit", href: "/free-website-audit-services/" },
        ],
      },
    ],
  },

  // Section 17: Relationships Built by Senior Link Strategists
  team: {
    eyebrow: "Senior Link Strategists",
    title: "Relationships built by",
    highlightText: "senior link strategists.",
    description:
      "Good links come from good relationships. Our senior strategists spend time building trust with editors and bloggers, so your brand earns repeat coverage, not one-time placements.",
    cards: [
      {
        eyebrow: "Senior Link Strategists",
        title: "Compounding Rank Increases",
        description:
          "Each quality link adds to the last. As your authority grows, new pages rank faster and older pages hold their positions.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Competitor Intel",
        title: "Backlink Gap Analysis",
        description:
          "We study your competitors' links to find the best opportunities for you.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Target Prospecting",
        title: "Target Prospecting",
        description:
          "We build a list of relevant sites, blogs and journalists in your niche.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Custom Content",
        title: "Custom Content Pitching",
        description:
          "Every pitch is personal, useful and written for the editor's audience.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Quality Review",
        title: "Link Quality Review",
        description:
          "Every link is checked for relevance, traffic and safety before we report it.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to build authority through blogger outreach and high-tier backlinks?",
    footerDescription:
      "Tell us about your site and goals. We will review your link profile, show you the gaps and share a clear plan, free of charge.",
    ctaText: "Book a Strategy Call",
    ctaHref: "/contact",
  },

  // Section 18: FAQ
  faqs: {
    eyebrow: "FAQS ABOUT LINK BUILDING SERVICES",
    title: "Frequently Asked Questions About Link Building",
    description:
      "Everything you need to know about our manual white-hat outreach, editorial standards, and pricing.",
    faqs: [
      {
        question: "How many backlinks do I need to rank?",
        answer:
          "There is no fixed number. It depends on your niche, competitors and the quality of the links. A few strong, relevant links often help more than dozens of weak ones. We compare your profile with top-ranking pages to set a realistic target.",
      },
      {
        question: "Is link building safe for my site?",
        answer:
          "Yes, when it is done with white hat methods. We earn links from real, relevant sites through manual outreach and avoid private networks and paid link schemes that can lead to penalties.",
      },
      {
        question: "How much do link building services cost?",
        answer:
          "Pricing depends on your niche, competition, link volume and goals. Startups can begin with a focused monthly plan, while larger brands need custom plans. We recommend a package after your free audit.",
      },
      {
        question: "How do you measure link quality?",
        answer:
          "We check relevance to your niche, the site's real traffic, editorial standards, spam signals and the link's placement on the page. We share this in your report for every link.",
      },
      {
        question: "How long does link building take to show results?",
        answer:
          "Most sites see early movement within 2-3 months, with stronger gains between 4 and 6 months. Competitive niches can take longer.",
      },
      {
        question: "Do you offer link building services in India?",
        answer:
          "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
      },
      {
        question: "Do you offer backlink creation for businesses of all sizes?",
        answer:
          "Yes. We offer backlink creation for businesses from early-stage startups to established brands. The plan, link volume and strategy change with your niche, competition and goals.",
      },
    ],
  },

  // Section 19: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "KNOWLEDGE HUB & INSIGHTS",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on link building, digital PR and backlink quality.",
    articles: [
      {
        title: "White Hat Link Building: A Practical Framework",
        category: "Link Building",
        readTime: "7 min read",
        excerpt: "How to earn links safely and steadily through manual outreach and editorial relationships.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "SaaS Link Building Strategies That Work",
        category: "SaaS SEO",
        readTime: "6 min read",
        excerpt: "Where to find links that matter for software brands and how to win tool roundups and comparison placements.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "How to Audit Your Backlink Profile",
        category: "Technical SEO",
        readTime: "8 min read",
        excerpt: "Spot weak links and find new opportunities to accelerate your domain authority growth safely.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  // Section 20: Final CTA
  finalCta: {
    eyebrow: "READY TO SCALE DOMAIN AUTHORITY?",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free audit and a clear 90-day plan to grow your authority and organic traffic.",
    primaryCtaText: "Request Your Free Strategy Session",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Talk to an Expert",
    secondaryCtaHref: "/contact",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "4.9/5", label: "Client rating" },
      { value: "$45M+", label: "Revenue generated" },
      { value: "98%", label: "Client retention" },
    ],
  },
};
