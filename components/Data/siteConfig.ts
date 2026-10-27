import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart,
  Link2,
  Search,
  MessageSquare,
  Briefcase,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Globe2,
} from "lucide-react";

export const siteConfig = {
  name: "IGR Digital",
  tagline: "Award-Winning Digital Growth Partner",
  topBar: {
    badgeText: "Integrated Growth Results",
    email: "hello@igrdigital.com",
    phone: "+91 98765 43210",
    whatsappHref: "https://wa.me/919876543210",
  },
  ctas: {
    secondary: { label: "Hire Us", href: "/hire-us" },
    primary: { label: "Book a Meeting", href: "/book-a-meeting" },
  },
};

export type MenuLink = { label: string; href: string; featured?: boolean };

export type MenuColumn = {
  title: string;
  icon: LucideIcon;
  links: MenuLink[];
};

export type FeaturedPanel = {
  eyebrow: string;
  headline: string;
  highlight: string;
  meta: string;
  ctaLabel: string;
  ctaHref: string;
};

export type StatItem = { value: string; label: string };

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  megaMenu?: {
    columns: MenuColumn[];
    featured?: FeaturedPanel;
    stats?: StatItem[];
    viewAll?: { label: string; href: string };
  };
};

// NOTE: All category names, stats, and copy below are original placeholder
// content for IGR Digital — replace with your real services/numbers.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      columns: [
        {
          title: "Platform SEO",
          icon: ShoppingCart,
          links: [
            { label: "E-commerce SEO", href: "/ecommerce-seo-services/" },
            { label: "Shopify SEO", href: "/shopify-seo-services/" },
            { label: "WordPress SEO", href: "/wordpress-seo-services/" },
            { label: "Webflow SEO", href: "/webflow-seo-services/" },
          ],
        },
        {
          title: "Off-Page SEO",
          icon: Link2,
          links: [
            { label: "Link Building", href: "/link-building-services/" },
            { label: "Guest Posting", href: "/guest-posting-services/" },
            { label: "Digital PR", href: "/digital-pr-services/" },
          ],
        },
        {
          title: "Core SEO",
          icon: Search,
          links: [
            { label: "Custom SEO", href: "/custom-seo-services/", featured: true },
            { label: "Local SEO", href: "/local-seo-services/" },
            { label: "Enterprise SEO", href: "/enterprise-seo-services/" },
            { label: "On-Page SEO", href: "/on-page-seo-services/" },
          ],
        },
        {
          title: "Consulting",
          icon: MessageSquare,
          links: [
            { label: "SEO Consultancy", href: "/seo-consultancy-services/" },
            { label: "Free Website Audit", href: "/free-website-audit-services/" },
            { label: "Technical Audit", href: "/technical-audit-services/" },
          ],
        },
        {
          title: "Industries",
          icon: Briefcase,
          links: [
            { label: "For Startups", href: "/industries/startups" },
            { label: "For Healthcare", href: "/industries/healthcare" },
            { label: "For Real Estate", href: "/industries/real-estate" },
            { label: "View All Industries", href: "/industries" },
          ],
        },
      ],
      featured: {
        eyebrow: "Featured Case Study",
        headline: "From 0 to 500K organic visits",
        highlight: "500K",
        meta: "D2C Fashion Brand · 2025",
        ctaLabel: "Read the case study",
        ctaHref: "/case-studies/d2c-fashion",
      },
      stats: [
        { value: "3M+", label: "keywords ranked" },
        { value: "2M+", label: "leads generated" },
        { value: "10K+", label: "happy clients" },
      ],
      viewAll: { label: "View all services", href: "/services" },
    },
  },
  {
    label: "Digital Marketing",
    href: "/digital-marketing",
    megaMenu: {
      columns: [
        {
          title: "Paid Media & PPC",
          icon: Sparkles,
          links: [
            { label: "PPC Advertising", href: "/ppc-advertising-services/", featured: true },
            { label: "Google Ads (PPC)", href: "/google-ads-services/" },
            { label: "Meta Ads", href: "/meta-ads-services/" },
            { label: "LinkedIn Ads", href: "/linkedin-ads-services/" },
          ],
        },
        {
          title: "AI & Search Innovation",
          icon: Cpu,
          links: [
            { label: "AI SEO Optimization", href: "/ai-seo-services/", featured: true },
            { label: "Answer Engine (AEO)", href: "/aeo-services/" },
            { label: "Technical SEO Audit", href: "/technical-audit-services/" },
          ],
        },
        {
          title: "Full-Funnel Growth",
          icon: TrendingUp,
          links: [
            { label: "Performance Marketing", href: "/performance-marketing-services/", featured: true },
            { label: "E-commerce Marketing", href: "/ecommerce-marketing-services/" },
            { label: "B2B Marketing & ABM", href: "/b2b-marketing-services/" },
          ],
        },
        {
          title: "Content & Social",
          icon: MessageSquare,
          links: [
            { label: "Content Marketing", href: "/content-marketing-services/" },
            { label: "Social Media Management", href: "/social-media-services/" },
          ],
        },
      ],
      viewAll: { label: "View all digital marketing", href: "/digital-marketing" },
    },
  },
  // {
  //   label: "Locations",
  //   href: "/locations",
  //   megaMenu: {
  //     columns: [
  //       {
  //         title: "North America",
  //         icon: Globe2,
  //         links: [
  //           { label: "United States (USA)", href: "/digital-marketing-agency-usa", featured: true },
  //           { label: "Canada", href: "/digital-marketing-agency-canada" },
  //           { label: "New York City", href: "/digital-marketing-agency-new-york" },
  //           { label: "Los Angeles", href: "/digital-marketing-agency-los-angeles" },
  //           { label: "Toronto", href: "/digital-marketing-agency-toronto" },
  //         ],
  //       },
  //       {
  //         title: "Europe & UK",
  //         icon: Globe2,
  //         links: [
  //           { label: "United Kingdom (UK)", href: "/digital-marketing-agency-uk", featured: true },
  //           { label: "Germany", href: "/digital-marketing-agency-germany" },
  //           { label: "Netherlands", href: "/digital-marketing-agency-netherlands" },
  //           { label: "Ireland", href: "/digital-marketing-agency-ireland" },
  //           { label: "London Hub", href: "/digital-marketing-agency-london" },
  //         ],
  //       },
  //       {
  //         title: "Asia-Pacific",
  //         icon: Globe2,
  //         links: [
  //           { label: "Australia", href: "/digital-marketing-agency-australia", featured: true },
  //           { label: "Singapore", href: "/digital-marketing-agency-singapore" },
  //           { label: "New Zealand", href: "/digital-marketing-agency-new-zealand" },
  //           { label: "Sydney Hub", href: "/digital-marketing-agency-sydney" },
  //           { label: "Melbourne Hub", href: "/digital-marketing-agency-melbourne" },
  //         ],
  //       },
  //       {
  //         title: "Middle East",
  //         icon: Globe2,
  //         links: [
  //           { label: "United Arab Emirates", href: "/digital-marketing-agency-uae", featured: true },
  //           { label: "Dubai Hub", href: "/digital-marketing-agency-dubai" },
  //           { label: "Abu Dhabi", href: "/digital-marketing-agency-abu-dhabi" },
  //           { label: "Sharjah", href: "/digital-marketing-agency-sharjah" },
  //         ],
  //       },
  //     ],
  //     featured: {
  //       eyebrow: "Global Presence",
  //       headline: "Scale across 10+ international markets",
  //       highlight: "10+",
  //       meta: "Global Growth & SEO Strategies",
  //       ctaLabel: "View all locations",
  //       ctaHref: "/locations",
  //     },
  //     stats: [
  //       { value: "10", label: "target countries" },
  //       { value: "25+", label: "metro hubs" },
  //       { value: "24/7", label: "time-zone coverage" },
  //     ],
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Knowledge Hub & Blog", href: "/blog" },
      { label: "Free Website Audit", href: "/free-website-audit-services/" },
    ],
  },
];
