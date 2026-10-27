/**
 * SERVICE ROUTES CONFIGURATION
 * Single source of truth for all service slugs, their canonical clean URLs (/<name>-services/),
 * labels, and mappings.
 */

export interface ServiceRouteConfig {
  slug: string;
  cleanUrl: string; // e.g. "/ecommerce-seo-services/"
  label: string;
}

export const SERVICE_ROUTES: Record<string, ServiceRouteConfig> = {
  "ecommerce-seo": {
    slug: "ecommerce-seo",
    cleanUrl: "/ecommerce-seo-services/",
    label: "E-commerce SEO",
  },
  "shopify-seo": {
    slug: "shopify-seo",
    cleanUrl: "/shopify-seo-services/",
    label: "Shopify SEO",
  },
  "wordpress-seo": {
    slug: "wordpress-seo",
    cleanUrl: "/wordpress-seo-services/",
    label: "WordPress SEO",
  },
  "webflow-seo": {
    slug: "webflow-seo",
    cleanUrl: "/webflow-seo-services/",
    label: "Webflow SEO",
  },
  "link-building": {
    slug: "link-building",
    cleanUrl: "/link-building-services/",
    label: "Link Building",
  },
  "guest-posting": {
    slug: "guest-posting",
    cleanUrl: "/guest-posting-services/",
    label: "Guest Posting",
  },
  "digital-pr": {
    slug: "digital-pr",
    cleanUrl: "/digital-pr-services/",
    label: "Digital PR",
  },
  "custom-seo": {
    slug: "custom-seo",
    cleanUrl: "/custom-seo-services/",
    label: "Custom SEO",
  },
  "local-seo": {
    slug: "local-seo",
    cleanUrl: "/local-seo-services/",
    label: "Local SEO",
  },
  "enterprise-seo": {
    slug: "enterprise-seo",
    cleanUrl: "/enterprise-seo-services/",
    label: "Enterprise SEO",
  },
  "on-page-seo": {
    slug: "on-page-seo",
    cleanUrl: "/on-page-seo-services/",
    label: "On-Page SEO",
  },
  "technical-audit": {
    slug: "technical-audit",
    cleanUrl: "/technical-audit-services/",
    label: "Technical Audit",
  },
  "consultancy": {
    slug: "consultancy",
    cleanUrl: "/seo-consultancy-services/",
    label: "SEO Consultancy",
  },
  "free-audit": {
    slug: "free-audit",
    cleanUrl: "/free-website-audit-services/",
    label: "Free Website Audit",
  },
  "ai-seo": {
    slug: "ai-seo",
    cleanUrl: "/ai-seo-services/",
    label: "AI SEO Optimization",
  },
  "aeo": {
    slug: "aeo",
    cleanUrl: "/aeo-services/",
    label: "Answer Engine (AEO)",
  },
  "ppc": {
    slug: "ppc",
    cleanUrl: "/ppc-advertising-services/",
    label: "PPC Advertising",
  },
  "google-ads": {
    slug: "google-ads",
    cleanUrl: "/google-ads-services/",
    label: "Google Ads (PPC)",
  },
  "meta-ads": {
    slug: "meta-ads",
    cleanUrl: "/meta-ads-services/",
    label: "Meta Ads",
  },
  "linkedin-ads": {
    slug: "linkedin-ads",
    cleanUrl: "/linkedin-ads-services/",
    label: "LinkedIn Ads",
  },
  "content-marketing": {
    slug: "content-marketing",
    cleanUrl: "/content-marketing-services/",
    label: "Content Marketing",
  },
  "social-media": {
    slug: "social-media",
    cleanUrl: "/social-media-services/",
    label: "Social Media Management",
  },
  "ecommerce-marketing": {
    slug: "ecommerce-marketing",
    cleanUrl: "/ecommerce-marketing-services/",
    label: "E-commerce Marketing",
  },
  "b2b-marketing": {
    slug: "b2b-marketing",
    cleanUrl: "/b2b-marketing-services/",
    label: "B2B Marketing & ABM",
  },
  "performance-marketing": {
    slug: "performance-marketing",
    cleanUrl: "/performance-marketing-services/",
    label: "Performance Marketing",
  },
};

/**
 * Returns the clean URL for a given service slug (e.g., 'shopify-seo' -> '/shopify-seo-services/')
 */
export function getServiceUrl(slug: string): string {
  return SERVICE_ROUTES[slug]?.cleanUrl || `/services/${slug}`;
}

/**
 * Lookup slug from clean URL path (e.g. '/shopify-seo-services/' -> 'shopify-seo')
 */
export function getSlugByCleanUrl(cleanUrl: string): string | undefined {
  const normalized = cleanUrl.replace(/\/+$/, "") + "/";
  const found = Object.values(SERVICE_ROUTES).find(
    (item) => item.cleanUrl === normalized || item.cleanUrl.replace(/\/+$/, "") === normalized.replace(/\/+$/, "")
  );
  return found?.slug;
}
