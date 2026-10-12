import type { LucideIcon } from "lucide-react";
import { Search, Sparkles, Target, Link2, Share2, MapPin, Code2, Layers } from "lucide-react";

export type DescSegment = { text: string; href?: string };

export type ServiceGridItem = {
  icon: LucideIcon;
  title: string;
  segments: DescSegment[];
  accent: "blue" | "red" | "yellow" | "green";
};

 export  const serviceCards = [
  {
    id: "01",
    title: "Platform SEO",
    category: "SEO Services",

    logoImage: "/images/services/platform-seo.svg",

    description:
      "Build a stronger search presence across the platforms that power your business. Our platform SEO services are designed to improve visibility, technical performance, and organic growth across modern website platforms.",

    description2:
      "From ecommerce stores to CMS-based websites, we optimize your platform's structure, content, and search experience to create a strong foundation for sustainable rankings.",

    links: [
      {
        title: "E-commerce SEO",
        href: "/services/ecommerce-seo",
      },
      {
        title: "Shopify SEO",
        href: "/services/shopify-seo",
      },
      {
        title: "WordPress SEO",
        href: "/services/wordpress-seo",
      },
      {
        title: "Webflow SEO",
        href: "/services/webflow-seo",
      },
    ],
  },

  {
    id: "02",
    title: "Off-Page SEO",
    category: "SEO Services",

    logoImage: "/images/services/off-page-seo.svg",

    description:
      "Strengthen your website's authority and reputation with strategic off-page SEO campaigns built around high-quality links, digital PR, and meaningful brand visibility.",

    description2:
      "We focus on building relevant authority signals that support stronger rankings, improve brand credibility, and create long-term organic growth.",

    links: [
      {
        title: "Link Building",
        href: "/services/link-building",
      },
      {
        title: "Guest Posting",
        href: "/services/guest-posting",
      },
      {
        title: "Digital PR",
        href: "/services/digital-pr",
      },
    ],
  },

  {
    id: "03",
    title: "Core SEO",
    category: "SEO Services",

    logoImage: "/images/services/core-seo.svg",

    description:
      "Create a technically strong and search-focused website with SEO strategies built around your business goals, audience, and competitive landscape.",

    description2:
      "From on-page optimization to enterprise and local search, we improve the elements that help search engines understand, trust, and rank your website.",

    links: [
      {
        title: "Custom SEO",
        href: "/services/custom-seo",
      },
      {
        title: "Local SEO",
        href: "/services/local-seo",
      },
      {
        title: "Enterprise SEO",
        href: "/services/enterprise-seo",
      },
      {
        title: "On-Page SEO",
        href: "/services/on-page-seo",
      },
    ],
  },

  {
    id: "04",
    title: "Consulting",
    category: "SEO Services",

    logoImage: "/images/services/seo-consulting.svg",

    description:
      "Get a clear SEO strategy backed by data, technical expertise, and a practical roadmap designed around your specific business objectives.",

    description2:
      "Whether you need an expert second opinion, a complete SEO roadmap, or help identifying growth opportunities, our consultants help you make confident decisions.",

    links: [
      {
        title: "SEO Consultancy",
        href: "/services/consultancy",
      },
      {
        title: "Free Website Audit",
        href: "/services/free-audit",
      },
      {
        title: "Technical Audit",
        href: "/services/technical-audit",
      },
    ],
  },

  {
    id: "05",
    title: "Industries",
    category: "SEO Services",

    logoImage: "/images/services/industries.svg",

    description:
      "SEO strategies built around the unique search behavior, competition, and customer journey of your industry.",

    description2:
      "We adapt our approach to your market so your website can attract the right audience, generate qualified traffic, and turn organic visibility into measurable business growth.",

    links: [
      {
        title: "For Startups",
        href: "/industries/startups",
      },
      {
        title: "For Healthcare",
        href: "/industries/healthcare",
      },
      {
        title: "For Real Estate",
        href: "/industries/real-estate",
      },
      {
        title: "View All Industries",
        href: "/industries",
      },
    ],
  },

  {
    id: "06",
    title: "Paid Media",
    category: "Digital Marketing",

    logoImage: "/images/services/paid-media.svg",

    description:
      "Turn advertising spend into measurable growth with targeted paid media campaigns designed to reach the right audience at the right moment.",

    description2:
      "From search campaigns to social advertising, we build, optimize, and scale performance campaigns around clicks, conversions, leads, and revenue.",

    links: [
      {
        title: "Google Ads (PPC)",
        href: "/services/google-ads",
      },
      {
        title: "Meta Ads",
        href: "/services/meta-ads",
      },
      {
        title: "LinkedIn Ads",
        href: "/services/linkedin-ads",
      },
    ],
  },

  {
    id: "07",
    title: "Content & Social",
    category: "Digital Marketing",

    logoImage: "/images/services/content-social.svg",

    description:
      "Build a recognizable digital presence through content and social strategies that attract audiences, strengthen your brand, and keep customers engaged.",

    description2:
      "We combine valuable content with consistent social media execution to create meaningful brand visibility across the channels where your audience spends time.",

    links: [
      {
        title: "Content Marketing",
        href: "/services/content-marketing",
      },
      {
        title: "Social Media Management",
        href: "/services/social-media",
      },
    ],
  },
];