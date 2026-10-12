import {
  MapPin,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const localSeoData: ServicePageData = {
  hero: {
    eyebrow: "LOCAL SEO & GOOGLE MAPS RANKING EXPERTS",
    headline: "Dominate Google Local 3-Pack & Drive High-Intent Local Customers",
    paragraph:
      "Get your business featured at the very top of Google Maps and local search. We optimize your Google Business Profile (GBP), local citations, reviews, and geo-targeted landing pages to turn nearby searchers into phone calls and visits.",
    inputPlaceholder: "Enter your business name or website",
    ctaLabel: "Get Free Local SEO Audit",
    circles: [
      {
        id: "call-lift",
        value: 185,
        suffix: "%",
        label: "LOCAL PHONE CALLS LIFT",
        sub: "Via Google Business Profile",
        backText: "Driving direct inquiries from high-intent local customers.",
        className: "circle-blue",
      },
      {
        id: "map-pack",
        value: 94,
        suffix: "%",
        label: "MAPS 3-PACK RANKINGS",
        sub: "Primary service areas",
        backText: "Securing top-3 map positions across your local service radius.",
        className: "circle-violet",
      },
      {
        id: "locations",
        value: 350,
        suffix: "+",
        label: "LOCATIONS OPTIMIZED",
        backText: "From single-location practices to multi-city franchise brands.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "Our dental clinic went from invisible on Google Maps to #1 for 'emergency dentist near me' across our entire city within 90 days. New patient calls jumped by 160%!",
      reviewerInitial: "D",
      reviewerName: "Dr. Rajesh K., Clinic Director",
      ratings: [
        { label: "Rated 5.0/5 on Google Reviews" },
        { label: "Verified Client" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  pricing: {
    eyebrow: "Local SEO Pricing",
    title: "Transparent local plans built for inquiries and footfall",
    description:
      "Proven local SEO campaigns designed for clinics, law firms, home service providers, and multi-location franchises.",
    plans: [
      {
        name: "Single Location",
        price: "$350",
        period: "/month",
        description:
          "Complete local search dominance for one storefront or single-city service area.",
        features: [
          "Google Business Profile (GBP) complete overhaul",
          "50+ Premium local directory citations (NAP sync)",
          "Review generation & response strategy",
          "Geo-grid local ranking tracker",
        ],
        ctaText: "Rank in Local 3-Pack",
        ctaHref: "/contact",
      },
      {
        name: "Multi-City Growth",
        price: "$699",
        period: "/month",
        popular: true,
        description:
          "For expanding businesses covering 2-5 suburbs or regional target markets.",
        features: [
          "Multi-location GBP management",
          "Custom city landing page architecture",
          "Local schema markup (LocalBusiness JSON-LD)",
          "Local community PR & backlink outreach",
          "Call & direction request tracking",
        ],
        ctaText: "Scale Multi-City Reach",
        ctaHref: "/contact",
      },
      {
        name: "Franchise & Enterprise",
        description:
          "Custom strategy for regional chains and enterprise franchises with 10+ locations.",
        features: [
          "Bulk Google Business Profile API sync",
          "Franchise locator page optimization",
          "Dedicated Local Account Director",
          "Custom executive multi-location reporting",
        ],
        ctaText: "Talk to Local Director",
        ctaHref: "/contact",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "Why Choose Our Local SEO",
    title: "We focus on real phone calls, store directions, and booked appointments",
    description:
      "Ranking in Google's Local 3-Pack requires a distinct combination of GBP optimization, localized reviews, consistent NAP data, and proximity signals. We optimize every single trigger.",
    benefits: [
      {
        icon: MapPin,
        title: "Google Map 3-Pack Domination",
        description:
          "We optimize primary and secondary categories, service lists, and geotagged updates to secure top-3 visibility.",
      },
      {
        icon: ShieldCheck,
        title: "NAP Consistency & Citation Cleanup",
        description:
          "We fix mismatched Name, Address, and Phone numbers across directories like Apple Maps, Bing, Yelp, and YellowPages.",
      },
      {
        icon: Target,
        title: "Geo-Targeted City Landing Pages",
        description:
          "We build location-specific landing pages with authentic local copy, driving organic rank across surrounding zip codes.",
      },
      {
        icon: PhoneCall,
        title: "Direct Call & Lead Tracking",
        description:
          "Track organic phone calls, form fills, and direction requests so you know your exact local customer acquisition cost.",
      },
      {
        icon: CheckCircle2,
        title: "LocalBusiness Schema Markup",
        description:
          "Implement rich structured data with opening hours, coordinates, services offered, and accepted payments.",
      },
      {
        icon: BarChart3,
        title: "Geo-Grid Rank Heatmaps",
        description:
          "Visual heatmap tracking showing your rankings mile-by-mile across your city so progress is crystal clear.",
      },
    ],
  },

  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "Our hyper-local approach vs generic marketing agencies",
    description:
      "Why localized optimization requires a dedicated agency with local search mastery.",
    usLabel: "IGR Digital",
    competitorsLabel: "Generic Agencies",
    inHouseLabel: "DIY Effort",
    rows: [
      {
        feature: "Google Business Profile Algorithmic Optimization",
        us: true,
        competitors: "Basic profile fill-out",
        inHouse: true,
      },
      {
        feature: "Geo-Grid Ranking Heatmaps Tracking",
        us: true,
        competitors: "Single zip code rank only",
        inHouse: false,
      },
      {
        feature: "Manual NAP Citation Audit & Duplicate Removal",
        us: true,
        competitors: "Automated software only",
        inHouse: "Time prohibitive",
      },
      {
        feature: "Local Neighborhood Backlink Acquisition",
        us: true,
        competitors: "Generic national links",
        inHouse: "No outreach system",
      },
      {
        feature: "LocalBusiness JSON-LD Schema Integration",
        us: true,
        competitors: "Often missing",
        inHouse: false,
      },
      {
        feature: "Call Tracking & Appointment Attribution",
        us: true,
        competitors: "Reports impressions only",
        inHouse: true,
      },
    ],
  },

  process: {
    eyebrow: "Local Growth Process",
    title: "Our proven 5-step roadmap to",
    highlightText: "top local rankings.",
    description:
      "A tested local SEO framework that turns nearby searches into walk-ins, phone calls, and paying clients.",
    steps: [
      {
        number: "01",
        title: "Local Audit & Geo-Grid",
        label: "Benchmark local visibility",
        description:
          "We run a geo-grid scan across your service radius to see where your business currently ranks mile-by-mile.",
        icon: Search,
        details: ["Geo-grid heatmap", "NAP citation audit", "Competitor local analysis"],
      },
      {
        number: "02",
        title: "GBP Complete Overhaul",
        label: "Tune Google Business Profile",
        description:
          "We optimize your primary categories, description, service catalog, business attributes, and visual assets.",
        icon: Target,
        details: ["Category selection", "Services menu setup", "Photo geotagging"],
      },
      {
        number: "03",
        title: "Citation Sync & Cleanup",
        label: "Eliminate conflicting NAP data",
        description:
          "We claim, update, and harmonize your business details across 50+ leading directories and data aggregators.",
        icon: ShieldCheck,
        details: ["Aggregator submissions", "Duplicate listing deletion", "Industry directories"],
      },
      {
        number: "04",
        title: "City Landing Pages & Schema",
        label: "Expand organic reach",
        description:
          "We deploy hyper-targeted location pages and inject detailed LocalBusiness JSON-LD structured data.",
        icon: MapPin,
        details: ["City landing pages", "Local schema markup", "Google Maps embed"],
      },
      {
        number: "05",
        title: "Review Strategy & Growth",
        label: "Boost customer trust signals",
        description:
          "We set up review generation workflows and monitor call volume, reviews, and direction requests weekly.",
        icon: BarChart3,
        details: ["Review acquisition playbook", "Call tracking dashboard", "Ranking reviews"],
      },
    ],
    ctaText: "Ready to dominate your city's local search?",
    ctaButtonText: "Claim Your Free Local Audit",
    ctaHref: "#contact",
  },

  serviceContent: {
    eyebrow: "Local SEO",
    title: "Local SEO engineered to capture customers ready to buy right now.",
    intro:
      "Near me searches have exploded by over 500% in recent years. When customers search for your service locally, 78% of mobile searches result in an offline purchase within 24 hours. We make sure your business is the first option they see and choose.",
    content: [
      {
        heading: "The Power of the Google Local 3-Pack",
        paragraphs: [
          "The Google Local 3-Pack appears above regular organic search results and commands the lion's share of mobile clicks and phone calls. Ranking here requires more than just keywords on a website — it demands high profile authority, accurate local citations, and active customer reviews.",
          "Our local SEO specialists use proven ranking factors to place your business directly in front of nearby customers at the exact moment they need your service.",
        ],
        bullets: [
          "Direct click-to-call buttons on mobile devices",
          "Integrated Google Maps direction requests",
          "Prominent review stars that establish immediate credibility",
          "Instant capture of high-urgency local demand",
        ],
      },
      {
        heading: "Multi-Location and Service Area Business (SAB) SEO",
        paragraphs: [
          "Whether you run a brick-and-mortar storefront or provide services at your customer's location (like plumbers, electricians, or consultants), we properly configure service area radius signals so you rank in neighboring towns without violating Google guidelines.",
        ],
      },
      {
        heading: "Review Velocity and Reputation Optimization",
        paragraphs: [
          "Google's algorithm heavily weights the frequency, sentiment, and keyword richness of your customer reviews. We guide your team on collecting authentic 5-star reviews that naturally incorporate target service keywords, boosting both rankings and conversion rates.",
        ],
      },
    ],
    sidebarTitle: "Explore Core SEO",
    sidebarDescription:
      "Explore other specialized SEO solutions for your business.",
    sidebarGroups: [
      {
        title: "Core SEO Services",
        links: [
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "Custom SEO", href: "/services/custom-seo" },
          { label: "Enterprise SEO", href: "/services/enterprise-seo" },
          { label: "On-Page SEO", href: "/services/on-page-seo" },
        ],
      },
      {
        title: "Consulting & Audits",
        links: [
          { label: "SEO Consultancy", href: "/services/consultancy" },
          { label: "Free Website Audit", href: "/services/free-audit" },
          { label: "Technical Audit", href: "/services/technical-audit" },
        ],
      },
    ],
  },

  team: {
    eyebrow: "Local SEO Experts",
    title: "Local dominance built by",
    highlightText: "city ranking specialists.",
    description:
      "Our local strategists have helped hundreds of medical practices, law firms, and service contractors become market leaders in their cities.",
    cards: [
      {
        eyebrow: "GBP Strategist",
        title: "Google Business Profile mastery.",
        description:
          "Fine-tuning local categories, products, and map signals for maximum 3-Pack visibility.",
        image: "/images/team/strategy.jpg",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Geo Analysis",
        title: "Geo-grid radius analysis.",
        description:
          "Mapping rankings across neighborhoods to identify weak spots and outflank local competitors.",
        image: "/images/team/technology.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Local Citations",
        title: "Precision NAP data syndication.",
        description:
          "Cleaning up messy address data across global aggregators and niche local directories.",
        image: "/images/team/creative.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Call Tracking",
        title: "Tracking every phone call & visit.",
        description:
          "Monitoring real phone lead generation and measuring customer acquisition costs.",
        image: "/images/team/performance.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Reputation Lead",
        title: "Review velocity & trust.",
        description:
          "Assisting clients in generating consistent 5-star customer reviews that feed Google's algorithm.",
        image: "/images/team/collaboration.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "Ready to become the #1 choice in your city?",
    footerDescription:
      "Get a free geo-grid ranking scan and citation analysis for your business today.",
    ctaText: "Get Free Local Audit",
    ctaHref: "/contact",
  },
};
