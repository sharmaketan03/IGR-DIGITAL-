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
    eyebrow: "HIGH-AUTHORITY WHITE-HAT LINK BUILDING",
    headline: "Editorial Backlinks That Build Domain Authority & Unstoppable Rankings",
    paragraph:
      "Move the needle on competitive keywords. We secure contextual, editorial backlinks on real, high-DR websites with genuine traffic — strictly 100% white-hat and penalty-proof.",
    inputPlaceholder: "Enter your website domain",
    ctaLabel: "Get Link Building Strategy",
    circles: [
      {
        id: "dr-lift",
        value: 18,
        suffix: "+",
        label: "AVG. DR INCREASE",
        sub: "Within 6 months",
        backText: "Strengthening overall domain trust and page-level ranking power.",
        className: "circle-blue",
      },
      {
        id: "traffic-growth",
        value: 310,
        suffix: "%",
        label: "TOP-3 KEYWORD GAINS",
        sub: "Post-link campaigns",
        backText: "Backlinks directed strategically to your highest-value commercial URLs.",
        className: "circle-violet",
      },
      {
        id: "links-built",
        value: 5000,
        suffix: "+",
        label: "EDITORIAL LINKS BUILT",
        backText: "Zero PBNs, zero spam directories. Only real editor relationships.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital built 35 DR70+ contextual links for our SaaS platform. We jumped from page 4 to #1 for our top three target queries.",
      reviewerInitial: "V",
      reviewerName: "Vikram R., VP of Marketing at CloudScale",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "100% Editorial Guarantee" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  pricing: {
    eyebrow: "Link Building Packages",
    title: "Quality-focused backlink acquisition packages",
    description:
      "Every link is vetted for real organic traffic, high Domain Rating (DR), and strict topical relevance.",
    plans: [
      {
        name: "Authority Booster",
        price: "$650",
        period: "/month",
        description:
          "5 High-DR editorial links (DR 50+) with contextual anchor placement and custom outreach.",
        features: [
          "5 Editorial backlinks (DR 50-65)",
          "Minimum 5K+ monthly organic traffic",
          "Custom content & native placement",
          "Dofollow & permanent placement guarantee",
        ],
        ctaText: "Acquire Quality Links",
        ctaHref: "/contact",
      },
      {
        name: "Hyper-Growth",
        price: "$1,250",
        period: "/month",
        popular: true,
        description:
          "10 High-authority links (DR 65-80+) with competitor backlink gap replication.",
        features: [
          "10 Premium editorial links (DR 65-80+)",
          "Minimum 15K+ monthly organic traffic",
          "Competitor backlink gap analysis",
          "Custom anchor text distribution audit",
          "Monthly live link tracking report",
        ],
        ctaText: "Accelerate Domain Authority",
        ctaHref: "/contact",
      },
      {
        name: "Enterprise Digital PR",
        description:
          "Tier-1 media placements, data-driven journalism studies, and Forbes/TechCrunch tier coverage.",
        features: [
          "Tier-1 industry media placements",
          "Original research & data study PR",
          "Dedicated link acquisition manager",
          "Guaranteed syndication coverage",
        ],
        ctaText: "Discuss Custom Campaign",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Why Choose Our Link Building",
    title: "We don't buy spam links. We build genuine brand authority.",
    description:
      "Most agencies cut corners with private blog networks (PBNs) or paid link farms that put your site at risk of Google penalties. We execute 100% manual outreach to real industry publications.",
    benefits: [
      {
        icon: ShieldCheck,
        title: "Zero PBNs & Zero Link Farms",
        description:
          "We thoroughly vet every site for organic traffic trends, indexation health, and outbound link ratios to ensure 100% Google safety.",
      },
      {
        icon: Target,
        title: "Exact Competitor Link Replicaton",
        description:
          "We analyze your #1 ranking competitor's backlink profile and systematically acquire the same and better link sources.",
      },
      {
        icon: Award,
        title: "High Minimum Criteria (DR 50+)",
        description:
          "No low-tier filler sites. Every placement meets strict thresholds for Ahrefs DR, Semrush AS, and genuine search traffic.",
      },
      {
        icon: Zap,
        title: "Natural Anchor Text Distribution",
        description:
          "We map anchor text profiles carefully (brand, partial match, naked URLs) to avoid over-optimization algorithmic penalties.",
      },
      {
        icon: BarChart3,
        title: "Targeted Page-Level Equity",
        description:
          "We send link power directly to money pages, category hubs, and bottom-of-funnel service URLs that drive revenue.",
      },
      {
        icon: TrendingUp,
        title: "Permanent Placement Guarantee",
        description:
          "If any link drops or turns nofollow within 12 months, we replace it free of charge immediately.",
      },
    ],
  },

  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "Our white-hat outreach vs traditional link sellers",
    description:
      "Protect your business reputation while earning top rankings that compound over time.",
    usLabel: "IGR Digital",
    competitorsLabel: "Link Broker Agencies",
    inHouseLabel: "DIY In-House",
    rows: [
      {
        feature: "Manual Editorial Outreach",
        us: true,
        competitors: "Buy from public spreadsheets",
        inHouse: true,
      },
      {
        feature: "Sites with 5K+ Organic Search Traffic",
        us: true,
        competitors: "Zero traffic PBNs",
        inHouse: "Hard to verify",
      },
      {
        feature: "Anchor Text Safety Architecture",
        us: true,
        competitors: "Over-optimized risk",
        inHouse: "Requires experience",
      },
      {
        feature: "Topical Relevance Matching",
        us: true,
        competitors: "Random multi-niche blogs",
        inHouse: true,
      },
      {
        feature: "12-Month Replacement Guarantee",
        us: true,
        competitors: false,
        inHouse: "N/A",
      },
      {
        feature: "Transparent Monthly Reporting",
        us: true,
        competitors: "Secretive placement lists",
        inHouse: true,
      },
    ],
  },

  process: {
    eyebrow: "Outreach Methodology",
    title: "How we secure",
    highlightText: "tier-1 editorial backlinks.",
    description:
      "A relationship-first, data-backed outreach engine that earns links on websites your customers actually visit.",
    steps: [
      {
        number: "01",
        title: "Backlink Gap Analysis",
        label: "Benchmark competitors",
        description:
          "We identify the exact backlink opportunities and referring domains propelling your competitors to page 1.",
        icon: Search,
        details: ["Domain Rating analysis", "Anchor text profiling", "Target URL selection"],
      },
      {
        number: "02",
        title: "Target Prospecting",
        label: "Curate authoritative targets",
        description:
          "We filter prospective sites for genuine organic traffic, topical relevance, and editorial guidelines.",
        icon: Target,
        details: ["Traffic verification", "Spam score screening", "Editorial check"],
      },
      {
        number: "03",
        title: "Custom Content Pitching",
        label: "Craft value-driven angles",
        description:
          "Our content team creates tailored, expert insights and pitch angles that editors are eager to publish.",
        icon: Zap,
        details: ["Original research", "Expert commentary", "Editorial drafts"],
      },
      {
        number: "04",
        title: "Publication & Placement",
        label: "Secure live contextual links",
        description:
          "We secure live, dofollow links naturally woven into high-quality articles with proper anchor text.",
        icon: Link2,
        details: ["Contextual placement", "Dofollow verification", "Indexation check"],
      },
      {
        number: "05",
        title: "Tracking & Compounding",
        label: "Monitor ranking lifts",
        description:
          "We track link equity transfer in Search Console and monitor target keyword ranking improvements.",
        icon: TrendingUp,
        details: ["Keyword position tracking", "Domain rating monitoring", "Replacement checks"],
      },
    ],
    ctaText: "Ready to build unmatched domain authority?",
    ctaButtonText: "Start Building Links",
    ctaHref: "#contact",
  },

  serviceContent: {
    eyebrow: "Link Building",
    title: "Link building engineered for algorithmic authority and trust.",
    intro:
      "Google's algorithms still rely fundamentally on backlinks as votes of confidence. But the game has changed: low-quality directory links and spam guest posts do more harm than good. We execute strategic digital PR and editorial link acquisition that moves rankings safely and consistently.",
    content: [
      {
        heading: "The Reality of Modern Backlinks in Google's Algorithm",
        paragraphs: [
          "Google's Helpful Content System and SpamBrain update aggressively penalize sites participating in automated link schemes. High rankings require links from real websites that possess actual organic traffic, authority in your specific niche, and genuine editorial standards.",
          "A single contextual backlink from an authoritative industry publication is worth more than 100 low-quality blog network links. We prioritize quality over volume every single time.",
        ],
        bullets: [
          "Passes authentic PageRank and topical authority",
          "Shields your domain from negative SEO and spam penalties",
          "Generates direct referral traffic from qualified readers",
          "Accelerates new content indexation and page 1 movement",
        ],
      },
      {
        heading: "Strategic Anchor Text Distribution",
        paragraphs: [
          "One of the fastest ways to trigger an algorithmic filter is over-optimizing exact match anchor text. We calculate your current anchor text distribution and strategically blend branded, partial match, topical phrase, and naked URL anchors to maintain a completely natural profile.",
        ],
      },
      {
        heading: "Replicating Competitor Link Profiles",
        paragraphs: [
          "We use enterprise tools like Ahrefs and Semrush to conduct deep gap analysis. We pinpoint the exact authoritative links your top 5 competitors share and build custom outreach campaigns to win those placements for your brand.",
        ],
      },
    ],
    sidebarTitle: "Explore Off-Page SEO",
    sidebarDescription:
      "Discover all our authority-building and digital PR services.",
    sidebarGroups: [
      {
        title: "Off-Page SEO Services",
        links: [
          { label: "Link Building", href: "/services/link-building" },
          { label: "Digital PR", href: "/services/digital-pr" },
          { label: "Guest Posting", href: "/services/guest-posting" },
        ],
      },
      {
        title: "Core SEO Solutions",
        links: [
          { label: "Custom SEO", href: "/services/custom-seo" },
          { label: "Technical Audit", href: "/services/technical-audit" },
          { label: "On-Page SEO", href: "/services/on-page-seo" },
          { label: "Enterprise SEO", href: "/services/enterprise-seo" },
        ],
      },
    ],
  },

  team: {
    eyebrow: "Outreach Team",
    title: "Relationships built by",
    highlightText: "senior link strategists.",
    description:
      "Our outreach team maintains direct relationships with editors, journalists, and publications across tech, retail, finance, and healthcare.",
    cards: [
      {
        eyebrow: "Outreach Lead",
        title: "Editorial relationship management.",
        description:
          "Connecting your brand directly with senior editors and publication contributors.",
        image: "/images/team/strategy.jpg",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Competitor Intel",
        title: "Backlink gap research.",
        description:
          "Deconstructing competitor authority to uncover their highest-leverage link sources.",
        image: "/images/team/performance.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Editorial Content",
        title: "High-caliber guest articles.",
        description:
          "Crafting insightful, data-driven content that passes the strictest editorial standards.",
        image: "/images/team/creative.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Quality Assurance",
        title: "Vetting site metrics & spam score.",
        description:
          "Reviewing traffic histories, outbound link patterns, and penalty risks before outreach.",
        image: "/images/team/technology.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Authority Growth",
        title: "Compounding rank increases.",
        description:
          "Aligning link acquisition schedules with core product and service revenue goals.",
        image: "/images/team/collaboration.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to climb to position #1 with authoritative backlinks?",
    footerDescription:
      "Let our team analyze your backlink gap and build a custom acquisition roadmap.",
    ctaText: "Get Free Backlink Analysis",
    ctaHref: "/contact",
  },
};
