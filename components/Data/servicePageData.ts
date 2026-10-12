import {
  BarChart3,
  CheckCircle2,
  Headphones,
  Rocket,
  ShieldCheck,
  Target,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";

/* =========================================================================
   TYPES FOR REUSABLE SERVICE PAGE DATA
   ========================================================================= */

export interface StatCircleItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sub?: string;
  backText: string;
  className: "circle-blue" | "circle-violet" | "circle-navy";
}

export interface ServiceHeroContent {
  eyebrow: string;
  headline: string;
  paragraph: string;
  inputPlaceholder: string;
  ctaLabel: string;
  circles: StatCircleItem[];
  testimonial: {
    quote: string;
    reviewerInitial: string;
    reviewerName: string;
    ratings: { label: string }[];
  };
}

export interface PricingPlan {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export interface PricingSectionData {
  eyebrow?: string;
  title: string;
  description: string;
  plans: PricingPlan[];
}

export interface WhyChooseBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  title: string;
  description: string;
  benefits: WhyChooseBenefit[];
}

export interface ComparisonRow {
  feature: string;
  us: boolean | string;
  competitors: boolean | string;
  inHouse: boolean | string;
}

export interface ComparisonTableData {
  eyebrow: string;
  title: string;
  description: string;
  usLabel?: string;
  competitorsLabel?: string;
  inHouseLabel?: string;
  rows: ComparisonRow[];
}

export interface ProcessStep {
  number: string;
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ProcessSectionData {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  steps: ProcessStep[];
  ctaText?: string;
  ctaButtonText?: string;
  ctaHref?: string;
}

export interface ContentBlock {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SidebarGroup {
  title?: string;
  links: {
    label: string;
    href?: string;
  }[];
}

export interface ServiceContentSectionData {
  eyebrow?: string;
  title: string;
  intro: string;
  content: ContentBlock[];
  sidebarTitle?: string;
  sidebarDescription?: string;
  sidebarGroups: SidebarGroup[];
  additionalContent?: ContentBlock[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface TeamCardItem {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

export interface TeamSectionData {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  cards: TeamCardItem[];
  footerTitle?: string;
  footerDescription?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface ServicePageData {
  hero: ServiceHeroContent;
  awards: typeof siteContent.awardsContent;
  trustedBrands: typeof siteContent.tustedBrands;
  agencyDifference: typeof siteContent.whyChooseUs;
  comparisonSection: typeof servicesComparison;
  caseStudies: typeof siteContent.caseStudies;
  pricing: PricingSectionData;
  whyChooseUs: WhyChooseUsData;
  comparisonTable: ComparisonTableData;
  process: ProcessSectionData;
  serviceContent: ServiceContentSectionData;
  team: TeamSectionData;
  faqs?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    faqs?: { question: string; answer: string }[];
  };
  resources?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    articles?: any[];
  };
  finalCta?: {
    eyebrow?: string;
    headline?: string;
    subheadline?: string;
    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    stats?: { value: string; label: string }[];
  };
}

/* =========================================================================
   DIGITAL MARKETING SERVICE PAGE DATA (DEFAULT)
   ========================================================================= */

export const digitalMarketingServiceData: ServicePageData = {
  // 1. Hero Banner
  hero: {
    eyebrow: "DRIVING MEASURABLE GROWTH FOR BRANDS WORLDWIDE",
    headline: "Results-Driven Digital Marketing That Delivers Real ROI",
    paragraph:
      "More leads. More sales. More revenue. IGR Digital combines expert specialists with AI-powered technology to build and optimize digital strategies that drive measurable business growth.",
    inputPlaceholder: "Enter your website",
    ctaLabel: "Send Me a Proposal",
    circles: [
      {
        id: "retention",
        value: 91,
        suffix: "%",
        label: "RETENTION RATE",
        sub: "Industry average: 50%",
        backText: "We treat every client like a long-term growth partner, not a project.",
        className: "circle-blue",
      },
      {
        id: "satisfaction",
        value: 93,
        suffix: "%",
        label: "CLIENT SATISFACTION",
        sub: "Industry average: 72%",
        backText: "Real strategists, real support — no black-box reporting.",
        className: "circle-violet",
      },
      {
        id: "campaigns",
        value: 40,
        suffix: "+",
        label: "GROWTH CAMPAIGNS",
        backText: "From strategy to execution — fully managed end to end.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital understands both strategy and technology — the results speak for themselves.",
      reviewerInitial: "R",
      reviewerName: "Rohan S, Verified Client Review",
      ratings: [
        { label: "Rated 4.9/5 on Google" },
        { label: "Rated 4.9/5 on Clutch" },
      ],
    },
  },

  // 2. Awards
  awards: siteContent.awardsContent,

  // 3. Trusted Brands
  trustedBrands: siteContent?.tustedBrands,

  // 4. Agency Difference
  agencyDifference: siteContent.whyChooseUs,

  // 5. Comparison Section (Cards)
  comparisonSection: servicesComparison,

  // 6. Case Studies
  caseStudies: siteContent?.caseStudies,

  // 7. Pricing Section
  pricing: {
    eyebrow: "Pricing",
    title: "SEO plans built for sustainable growth",
    description:
      "Flexible SEO plans designed around your website, competition, and growth goals.",
    plans: [
      {
        name: "Starter SEO",
        price: "$250",
        period: "/month",
        description:
          "A strong SEO foundation for small businesses ready to grow their organic visibility.",
        features: [
          "Keyword research & strategy",
          "On-page optimization",
          "Technical SEO monitoring",
          "Monthly performance report",
        ],
        ctaText: "Get Started",
        ctaHref: "/contact",
      },
      {
        name: "Growth SEO",
        price: "$500",
        period: "/month",
        popular: true,
        description:
          "A complete SEO strategy focused on increasing qualified traffic and search visibility.",
        features: [
          "Advanced keyword strategy",
          "On-page & technical SEO",
          "Content optimization",
          "Authority building",
          "Monthly SEO reporting",
        ],
        ctaText: "Start Growing",
        ctaHref: "/contact",
      },
      {
        name: "Enterprise",
        description:
          "Custom SEO strategies for businesses with complex websites and ambitious growth goals.",
        features: [
          "Custom SEO roadmap",
          "Enterprise technical SEO",
          "Content & authority strategy",
          "Dedicated SEO support",
          "Custom reporting",
        ],
        ctaText: "Request a Quote",
        ctaHref: "/contact",
      },
    ],
  },

  // 8. Why Choose Us (Benefits Grid)
  whyChooseUs: {
    eyebrow: "Why Choose Our SEO Services",
    title: "SEO that turns search visibility into real growth",
    description:
      "We build data-driven SEO strategies that improve rankings, attract qualified traffic, and create sustainable long-term growth.",
    benefits: [
      {
        icon: Target,
        title: "Strategy Built Around You",
        description:
          "Every SEO strategy is tailored around your business, audience, competition, and growth goals.",
      },
      {
        icon: BarChart3,
        title: "Data-Driven Decisions",
        description:
          "We use search data, competitor insights, and performance analytics to guide every optimization.",
      },
      {
        icon: Rocket,
        title: "Sustainable Growth",
        description:
          "Our focus is on building organic visibility and qualified traffic that continues to compound over time.",
      },
      {
        icon: ShieldCheck,
        title: "White-Hat SEO",
        description:
          "We follow search-engine-friendly practices designed to build lasting authority without risky shortcuts.",
      },
      {
        icon: CheckCircle2,
        title: "Every Detail Optimized",
        description:
          "From technical SEO to content and on-page improvements, we optimize the elements that influence search performance.",
      },
      {
        icon: Headphones,
        title: "Transparent Support",
        description:
          "You get clear communication, regular reporting, and ongoing guidance throughout your SEO journey.",
      },
    ],
  },

  // 9. Comparison Table
  comparisonTable: {
    eyebrow: "Why IGR Digital",
    title: "SEO built for sustainable growth",
    description:
      "See how our strategic SEO approach compares with traditional agencies and managing SEO completely in-house.",
    usLabel: "IGR Digital",
    competitorsLabel: "Other Agencies",
    inHouseLabel: "In-House",
    rows: [
      {
        feature: "Customized SEO Strategy",
        us: true,
        competitors: "Often standardized",
        inHouse: "Depends on internal expertise",
      },
      {
        feature: "Technical SEO Optimization",
        us: true,
        competitors: "Varies by agency",
        inHouse: "Requires specialist expertise",
      },
      {
        feature: "Keyword & Search Intent Research",
        us: true,
        competitors: "Varies",
        inHouse: true,
      },
      {
        feature: "Content Optimization",
        us: true,
        competitors: "Varies",
        inHouse: "Depends on resources",
      },
      {
        feature: "Competitor SEO Analysis",
        us: true,
        competitors: true,
        inHouse: "May be limited",
      },
      {
        feature: "On-Page SEO",
        us: true,
        competitors: true,
        inHouse: true,
      },
      {
        feature: "Technical Audits",
        us: true,
        competitors: "Varies",
        inHouse: "Requires technical expertise",
      },
      {
        feature: "Continuous Optimization",
        us: true,
        competitors: "Varies by plan",
        inHouse: "Depends on workload",
      },
      {
        feature: "Performance Tracking",
        us: true,
        competitors: true,
        inHouse: true,
      },
      {
        feature: "Transparent SEO Reporting",
        us: true,
        competitors: "Varies",
        inHouse: true,
      },
    ],
  },

  // 10. Process (How We Work)
  process: {
    eyebrow: "How We Work",
    title: "From strategy to",
    highlightText: "measurable growth.",
    description:
      "A clear, collaborative process designed to turn your goals into focused execution, continuous optimization, and measurable business results.",
    steps: [
      {
        number: "01",
        title: "Discover",
        label: "Understand the business",
        description:
          "We start by understanding your business, audience, competitors, goals, and current digital performance.",
        icon: Search,
        details: ["Business goals", "Audience research", "Competitor analysis"],
      },
      {
        number: "02",
        title: "Strategize",
        label: "Build the right roadmap",
        description:
          "We turn our research into a focused strategy with clear priorities, channels, campaigns, and measurable KPIs.",
        icon: Target,
        details: ["Growth roadmap", "Channel strategy", "KPI definition"],
      },
      {
        number: "03",
        title: "Execute",
        label: "Turn strategy into action",
        description:
          "Our team puts the strategy into action through campaigns, content, technical improvements, tracking, and optimization.",
        icon: Rocket,
        details: ["Implementation", "Campaign launch", "Tracking setup"],
      },
      {
        number: "04",
        title: "Optimize",
        label: "Improve what matters",
        description:
          "We continuously monitor performance, identify opportunities, and refine campaigns to improve efficiency and results.",
        icon: BarChart3,
        details: ["Performance tracking", "A/B testing", "Continuous optimization"],
      },
      {
        number: "05",
        title: "Scale",
        label: "Grow what works",
        description:
          "Once we identify winning strategies, we double down on them and expand opportunities for sustainable growth.",
        icon: TrendingUp,
        details: ["Scale winners", "New opportunities", "Long-term growth"],
      },
    ],
    ctaText: "Let’s build your growth roadmap.",
    ctaButtonText: "Start a Conversation",
    ctaHref: "#contact",
  },

  // 11. Service Deep-Dive Content & Sidebar
  serviceContent: {
    eyebrow: "Digital Marketing",
    title: "Digital marketing built around your business goals.",
    intro:
      "We combine strategy, technology, creativity, data, and performance marketing to help businesses build stronger digital visibility, reach relevant audiences, and create measurable growth.",
    content: [
      {
        heading: "What Is Digital Marketing?",
        paragraphs: [
          "Digital marketing is the process of promoting a business, product, or service through digital channels such as search engines, websites, social media, paid advertising, email, content platforms, and other online experiences.",
          "A strong digital marketing strategy does more than generate website traffic. It connects your business with the right audience, builds visibility, creates demand, generates qualified leads, and helps turn visitors into customers.",
        ],
        bullets: [
          "Search Engine Optimization",
          "Paid Search & Google Ads",
          "Social Media Marketing",
          "Content Marketing",
        ],
      },
      {
        heading: "Why Digital Marketing Matters for Modern Businesses",
        paragraphs: [
          "Customers increasingly use digital channels to discover brands, research products, compare solutions, read reviews, and make purchasing decisions. This makes a strong online presence an important part of reaching and engaging potential customers.",
          "Digital marketing allows businesses to reach audiences based on factors such as search intent, interests, location, demographics, behavior, and previous interactions with a brand.",
        ],
      },
      {
        heading: "Our Digital Marketing Strategy",
        paragraphs: [
          "Our approach starts with understanding your business objectives, target audience, competitive landscape, existing digital presence, and measurable growth opportunities.",
          "We then create a channel strategy that connects organic search, paid media, content, social platforms, analytics, and conversion optimization according to your specific business requirements.",
        ],
        bullets: [
          "Audience & Market Research",
          "Competitor Analysis",
          "Channel Strategy",
          "Performance Tracking",
        ],
      },
    ],
    sidebarTitle: "Explore Digital Marketing",
    sidebarDescription:
      "Explore digital marketing services, strategies, channels, and growth solutions.",
    sidebarGroups: [
      {
        title: "Digital Marketing",
        links: [
          {
            label: "Digital Marketing Services",
            href: "/services/digital-marketing",
          },
          {
            label: "Digital Marketing Strategy",
            href: "/services/digital-marketing",
          },
          {
            label: "Performance Marketing",
            href: "/services/performance-marketing",
          },
          {
            label: "Growth Marketing",
            href: "/services/growth-marketing",
          },
          {
            label: "Online Marketing Services",
            href: "/services/digital-marketing",
          },
        ],
      },
      {
        title: "SEO & Search",
        links: [
          {
            label: "SEO Services",
            href: "/services/seo",
          },
          {
            label: "Technical SEO",
            href: "/services/seo",
          },
          {
            label: "Local SEO",
            href: "/services/local-seo",
          },
          {
            label: "International SEO",
            href: "/services/international-seo",
          },
          {
            label: "Ecommerce SEO",
            href: "/services/ecommerce-seo",
          },
          {
            label: "AI SEO",
            href: "/services/ai-seo",
          },
          {
            label: "AEO Services",
            href: "/services/aeo",
          },
        ],
      },
      {
        title: "Paid Advertising",
        links: [
          {
            label: "Google Ads Management",
            href: "/services/google-ads",
          },
          {
            label: "PPC Management",
            href: "/services/ppc",
          },
          {
            label: "Paid Search",
            href: "/services/ppc",
          },
          {
            label: "Display Advertising",
            href: "/services/ppc",
          },
          {
            label: "Remarketing",
            href: "/services/ppc",
          },
        ],
      },
      {
        title: "Global Markets",
        links: [
          {
            label: "Digital Marketing Agency India",
            href: "#",
          },
          {
            label: "Digital Marketing Agency USA",
            href: "#",
          },
          {
            label: "Digital Marketing Agency UK",
            href: "#",
          },
          {
            label: "Digital Marketing Agency Canada",
            href: "#",
          },
          {
            label: "Digital Marketing Agency Australia",
            href: "#",
          },
          {
            label: "International Digital Marketing",
            href: "#",
          },
          {
            label: "Global Digital Marketing",
            href: "#",
          },
        ],
      },
    ],
  },

  // 12. Team About Section
  team: {
    eyebrow: "The People Behind IGR",
    title: "Digital growth is built by",
    highlightText: "people who care.",
    description:
      "Behind every strategy, campaign and result is a group of people bringing different perspectives to the table. We combine strategy, creativity, technology and data to help ambitious brands move forward.",
    cards: [
      {
        eyebrow: "Strategy",
        title: "Ideas that start with understanding.",
        description:
          "We begin by understanding your business, audience and goals before building a digital growth strategy.",
        image: "/images/team/strategy.jpg",
        className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
      },
      {
        eyebrow: "Creative",
        title: "Creativity with a purpose.",
        description:
          "Design and storytelling come together to create digital experiences that people remember.",
        image: "/images/team/creative.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
      {
        eyebrow: "Technology & AI",
        title: "Technology that moves faster.",
        description:
          "We use modern technology, automation and AI to make digital growth smarter and more scalable.",
        image: "/images/team/technology.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Performance",
        title: "Every decision backed by data.",
        description:
          "From search to paid media, we measure what matters and continuously improve performance.",
        image: "/images/team/performance.jpg",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Collaboration",
        title: "Your goals become our goals.",
        description:
          "We work closely with ambitious brands to turn ideas into meaningful digital growth.",
        image: "/images/team/collaboration.jpg",
        className: "lg:col-span-3 min-h-[270px]",
      },
    ],
    footerTitle: "One team. Different perspectives.",
    footerDescription:
      "Strategy, creativity, technology and performance working together.",
    ctaText: "Meet the people behind IGR",
    ctaHref: "/about",
  },
};
