import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceDataBySlug, servicesRegistry } from "@/components/Data/services";
import { getServiceUrl } from "@/components/Data/serviceRoutes";
import ServiceDynamicPageClient from "./ServiceDynamicPageClient";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all service slugs for static rendering and instant CDN serving
export async function generateStaticParams() {
  const serviceSlugs = [
    "ecommerce-seo",
    "shopify-seo",
    "wordpress-seo",
    "webflow-seo",
    "link-building",
    "guest-posting",
    "digital-pr",
    "custom-seo",
    "enterprise-seo",
    "on-page-seo",
    "local-seo",
    "technical-audit",
    "consultancy",
    "free-audit",
    "ai-seo",
    "aeo",
    "ppc",
    "google-ads",
    "meta-ads",
    "linkedin-ads",
    "content-marketing",
    "social-media",
    "ecommerce-marketing",
    "b2b-marketing",
    "performance-marketing",
  ];

  return serviceSlugs.map((slug) => ({ slug }));
}

// Generate Google Search Console & SEO-compliant dynamic metadata
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = getServiceDataBySlug(slug);

  if (slug === "ecommerce-seo") {
    const title = "Ecommerce SEO Services for Online Stores | IGR Digital";
    const description =
      "Grow organic sales with ecommerce SEO services: category and product page optimization, technical fixes and content. Request a free store audit.";
    const canonicalUrl = "https://igrdigital.com/ecommerce-seo-services/";

    return {
      title,
      description,
      keywords: [
        "ecommerce SEO services",
        "ecommerce SEO company",
        "ecommerce SEO packages",
        "ecommerce SEO audit",
        "ecommerce SEO consultant",
        "ecommerce category page SEO",
        "ecommerce SEO for small business",
        "product page SEO service",
        "ecommerce SEO services India",
        "ecommerce SEO pricing",
        "ecommerce SEO for D2C brands",
        "ecommerce SEO agency",
        "ecommerce SEO agency India",
        "best ecommerce SEO company",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "Ecommerce SEO dashboard showing organic traffic and revenue growth",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (slug === "shopify-seo") {
    const title = "Shopify SEO Agency | Rank & Sell More | IGR Digital";
    const description =
      "Shopify SEO services for collection pages, product pages, speed and structured data. Get more organic traffic and orders. Free Shopify SEO audit.";
    const canonicalUrl = "https://igrdigital.com/shopify-seo-agency/";

    return {
      title,
      description,
      keywords: [
        "Shopify SEO agency",
        "Shopify SEO services",
        "Shopify SEO expert",
        "Shopify SEO audit",
        "Shopify SEO consultant",
        "hire Shopify SEO expert",
        "Shopify technical SEO audit",
        "Shopify SEO for small stores",
        "Shopify collection page SEO",
        "Shopify SEO agency India",
        "Shopify SEO pricing",
        "Shopify SEO",
        "Shopify SEO company",
        "best Shopify SEO agency",
        "Shopify SEO experts India",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "Shopify SEO dashboard showing organic traffic and sales growth",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (slug === "wordpress-seo") {
    const title = "WordPress SEO Services & Agency | IGR Digital";
    const description =
      "WordPress SEO services covering technical fixes, speed optimization, on-page and content. Fix indexing and grow organic traffic. Get a free audit.";
    const canonicalUrl = "https://igrdigital.com/wordpress-seo-services/";

    return {
      title,
      description,
      keywords: [
        "WordPress SEO services",
        "WordPress SEO agency",
        "WordPress SEO company",
        "WordPress SEO audit",
        "WordPress SEO consultant",
        "WordPress speed optimization services",
        "WordPress technical SEO services",
        "hire WordPress SEO expert",
        "WordPress migration SEO",
        "WordPress SEO services India",
        "WordPress SEO pricing",
        "WordPress SEO",
        "WordPress SEO expert",
        "best WordPress SEO services",
        "WordPress SEO company India",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "WordPress SEO dashboard showing organic traffic and speed improvements",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (slug === "link-building") {
    const title = "Link Building Services | White Hat Links | IGR Digital";
    const description =
      "White hat link building services for SaaS, B2B and startups. Earn relevant, high-quality backlinks that grow authority. Get a custom link plan.";
    const canonicalUrl = "https://igrdigital.com/link-building-services/";

    return {
      title,
      description,
      keywords: [
        "link building services",
        "link building agency",
        "link building company",
        "SaaS link building services",
        "B2B link building services",
        "white hat link building for small business",
        "link building for startups",
        "manual link building services",
        "link building services India",
        "link building packages",
        "link building pricing",
        "affordable link building services",
        "backlink building service",
        "best link building services",
        "link building company India",
        "best link building agency",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "Link building dashboard showing editorial backlinks and domain authority growth",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (slug === "guest-posting") {
    const title = "Guest Posting Services | Real Traffic Sites | IGR Digital";
    const description =
      "Guest posting services on real, relevant sites with genuine traffic. Content, outreach and placement handled for you. Request a link plan.";
    const canonicalUrl = "https://igrdigital.com/guest-posting-services/";

    return {
      title,
      description,
      keywords: [
        "guest posting services",
        "guest post service",
        "guest blogging services",
        "guest posting services for SaaS",
        "guest post outreach service",
        "guest posting services with real traffic",
        "B2B guest post service",
        "guest post service for startups",
        "guest posting services India",
        "guest post packages",
        "guest posting pricing",
        "high authority guest posting services",
        "guest posting agency",
        "high quality guest posting services",
        "best guest posting services",
        "guest posting company India",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "Guest posting dashboard showing placements on relevant industry sites",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  if (slug === "webflow-seo") {
    const title = "Webflow SEO Agency | Rank Your Webflow Site | IGR Digital";
    const description =
      "Webflow SEO agency for SaaS and service brands: CMS structure, technical SEO, schema and content. Get found in Google and AI search. Free audit.";
    const canonicalUrl = "https://igrdigital.com/webflow-seo-agency/";

    return {
      title,
      description,
      keywords: [
        "Webflow SEO agency",
        "Webflow SEO services",
        "Webflow agency SEO",
        "Webflow SEO optimization",
        "Webflow SEO audit",
        "hire Webflow SEO expert",
        "Webflow SEO consultant",
        "Webflow CMS SEO",
        "Webflow SEO for SaaS",
        "Webflow SEO audit service",
        "Webflow SEO experts",
        "Webflow SEO",
        "Webflow SEO company",
        "Webflow SEO services India",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: "IGR Digital",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: "https://igrdigital.com/banner.png",
            width: 1200,
            height: 630,
            alt: "Webflow SEO dashboard showing organic traffic and lead growth",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://igrdigital.com/banner.png"],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const title = `${data.hero.eyebrow ? data.hero.eyebrow.toUpperCase() : "SEO & Growth"} Services | IGR Digital`;
  const description =
    data.hero.paragraph ||
    `Scale your organic traffic, search visibility, and revenue with custom ${slug} services from IGR Digital.`;
  const canonicalUrl = `https://igrdigital.com${getServiceUrl(slug)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "IGR Digital",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://igrdigital.com/banner.png",
          width: 1200,
          height: 630,
          alt: `${data.hero.eyebrow || slug} - IGR Digital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://igrdigital.com/banner.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ServiceDynamicPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = getServiceDataBySlug(slug);

  if (slug === "ecommerce-seo") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://igrdigital.com/ecommerce-seo-services/#service",
      name: "Ecommerce SEO Services",
      serviceType: "Ecommerce SEO",
      url: "https://igrdigital.com/ecommerce-seo-services/",
      description:
        "Ecommerce SEO services for online stores and D2C brands, covering category page SEO, product page SEO, technical SEO, content, link building and revenue-focused reporting.",
      provider: {
        "@id": "https://igrdigital.com/#organization",
      },
      areaServed: [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Online stores, D2C brands and ecommerce businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ecommerce SEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce SEO Audit",
              description:
                "A full review of crawlability, indexation, speed, duplicate content, structure and keyword gaps, with a prioritized fix list.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce Category Page SEO",
              description:
                "Optimization of category page targeting, headings, copy, internal links and filters so they rank for high-volume commercial keywords.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Page SEO Service",
              description:
                "Unique titles and descriptions, product schema, image optimization, review markup and internal linking.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO",
              description:
                "Site architecture, canonical tags, crawl budget, XML sitemaps, Core Web Vitals, pagination and faceted navigation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content and Keyword Strategy",
              description:
                "Buying guides, comparison pages and category content that reach shoppers early and guide them to purchase.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Link Building and Authority",
              description:
                "Relevant, quality backlinks and digital PR.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reporting and Analytics",
              description:
                "Dashboards for rankings, organic traffic, conversions and revenue.",
            },
          },
        ],
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://igrdigital.com/ecommerce-seo-services/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ecommerce SEO Services",
          item: "https://igrdigital.com/ecommerce-seo-services/",
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://igrdigital.com/ecommerce-seo-services/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best ecommerce SEO company for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best fit understands product and category pages, shows real ecommerce results and reports on revenue, not just rankings. For small stores, a focused plan around your highest-margin products usually beats a broad, expensive one.",
          },
        },
        {
          "@type": "Question",
          name: "How much do ecommerce SEO services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pricing depends on catalogue size, competition and goals. Small stores can start with a focused monthly package, while larger stores need custom plans. We recommend a plan after your free audit.",
          },
        },
        {
          "@type": "Question",
          name: "How long does ecommerce SEO take to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most stores see early improvements in 2-3 months and stronger revenue growth between 4 and 6 months. Competitive categories can take longer.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in an ecommerce SEO audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A technical review, on-page analysis of category and product pages, keyword gap analysis, competitor comparison and a prioritized action plan.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with Shopify, WooCommerce and Magento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work across all major platforms and custom builds.",
          },
        },
        {
          "@type": "Question",
          name: "Is ecommerce SEO better than paid ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "They work best together. Ads give quick traffic, while SEO builds long-term traffic that doesn't cost per click.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ecommerce SEO services in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We work with Indian online stores and D2C brands, as well as stores targeting the US, UK and other global markets.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  if (slug === "shopify-seo") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Shopify SEO Services",
      "name": "Shopify SEO Agency for Stores That Want More Organic Sales",
      "description":
        "Shopify SEO services for collection pages, product pages, speed and structured data. Get more organic traffic and orders. Free Shopify SEO audit.",
      "provider": {
        "@type": "Organization",
        "name": "IGR Digital",
        "url": "https://igrdigital.com",
      },
      "areaServed": ["India", "Worldwide"],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType":
          "Shopify stores, Shopify Plus brands and D2C ecommerce businesses",
      },
      "url": "https://igrdigital.com/shopify-seo-agency/",
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shopify SEO Agency",
          "item": "https://igrdigital.com/shopify-seo-agency/",
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best Shopify SEO agency for small stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The best fit knows Shopify's structure, shows real store results and reports on revenue, not just rankings. For small stores, a focused plan around your top collections and best-selling products usually beats a broad, expensive one.",
          },
        },
        {
          "@type": "Question",
          "name": "How much do Shopify SEO services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Pricing depends on catalogue size, competition and goals. Small stores can start with a focused monthly package, while larger stores need custom plans. We recommend a plan after your free audit.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does Shopify SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most stores see early improvements in 2-3 months and stronger revenue growth between 4 and 6 months. Competitive categories can take longer.",
          },
        },
        {
          "@type": "Question",
          "name": "What is included in a Shopify SEO audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "A technical review, on-page analysis of collection and product pages, theme and app speed checks, keyword gap analysis, competitor comparison and a prioritized action plan.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I hire a Shopify SEO expert or use apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Apps can help with small tasks like meta tags, but they can't build strategy, fix theme code or plan collection architecture. Many stores hire a Shopify SEO expert to guide the work and use apps only where they help.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you work with Shopify Plus stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We support Shopify and Shopify Plus stores, including multi-market and international setups.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer Shopify SEO services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We work with Indian online stores and D2C brands, as well as stores targeting the US, UK and other global markets.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  if (slug === "wordpress-seo") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "WordPress SEO Services",
      "name": "WordPress SEO Services to Fix, Speed Up and Rank Your Site",
      "description":
        "WordPress SEO services covering technical fixes, speed optimization, on-page and content. Fix indexing and grow organic traffic. Get a free audit.",
      "provider": {
        "@type": "Organization",
        "name": "IGR Digital",
        "url": "https://igrdigital.com",
      },
      "areaServed": ["India", "Worldwide"],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType":
          "Business websites, blogs, publishers and online stores on WordPress",
      },
      "url": "https://igrdigital.com/wordpress-seo-services/",
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "WordPress SEO Services",
          "item": "https://igrdigital.com/wordpress-seo-services/",
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which SEO plugin is best for WordPress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yoast SEO, Rank Math and All in One SEO are the most popular choices, and all three handle titles, meta descriptions, sitemaps and schema well. The right pick depends on your theme and needs, and a plugin alone will not fix speed, structure or content gaps.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you speed up a WordPress site for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We audit your theme and plugins, remove heavy scripts, set up caching, compress and lazy-load images, and fix Core Web Vitals issues. Faster pages help rankings and conversions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you fix WordPress indexing issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We check Search Console, robots rules, sitemaps, noindex tags, redirects and duplicate content, then fix what blocks Google from indexing your important pages.",
          },
        },
        {
          "@type": "Question",
          "name": "How much do WordPress SEO services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Pricing depends on site size, competition and goals. Small sites can start with a focused monthly plan, while large sites need custom plans. We recommend a plan after your free audit.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does WordPress SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most sites see early improvements in 2-3 months and stronger growth between 4 and 6 months. Competitive keywords can take longer.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I hire a WordPress SEO expert or use a plugin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Plugins handle settings, but they do not build strategy, fix theme code or plan content. Most businesses hire a WordPress SEO expert to guide the work and use plugins only as tools.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer WordPress SEO services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We work with Indian businesses and publishers, as well as sites targeting the US, UK and other global markets.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  if (slug === "webflow-seo") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Webflow SEO Services",
      "name": "Webflow SEO Agency for SaaS and Service Brands",
      "description":
        "Webflow SEO agency for SaaS and service brands: CMS structure, technical SEO, schema and content. Get found in Google and AI search. Free audit.",
      "provider": {
        "@type": "Organization",
        "name": "IGR Digital",
        "url": "https://igrdigital.com",
      },
      "areaServed": ["India", "Worldwide"],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType":
          "SaaS companies, agencies, freelancers and service brands on Webflow",
      },
      "url": "https://igrdigital.com/webflow-seo-agency/",
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Webflow SEO Agency",
          "item": "https://igrdigital.com/webflow-seo-agency/",
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Webflow good for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Webflow gives you clean code, fast hosting, editable meta tags, sitemaps and redirect controls. Rankings still depend on how you structure your CMS, write your content and handle technical details, which is where a Webflow SEO agency helps.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I optimize Webflow CMS pages for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Start with clear collection structure and URL slugs. Then set unique titles and meta descriptions in templates, add schema, link related items together, optimize images and avoid thin or duplicate pages.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you do a Webflow SEO audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Our Webflow SEO audit covers crawlability, indexing, CMS structure, redirects, schema, speed and keyword gaps, and ends with a prioritized action plan.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does Webflow SEO cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Pricing depends on site size, competition and goals. Small sites can start with a focused monthly plan, while large sites need custom plans. We recommend a plan after your free audit.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does Webflow SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most sites see early improvements in 2-3 months and stronger growth between 4 and 6 months. Competitive keywords can take longer.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you work with agencies and freelancers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Many design and development teams use us as their SEO partner for client sites built on Webflow.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer Webflow SEO services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  if (slug === "link-building") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://igrdigital.com/link-building-services/#service",
      "name": "Link Building Services",
      "url": "https://igrdigital.com/link-building-services/",
      "description":
        "White hat link building services for SaaS, B2B and startups. Earn relevant, high-quality backlinks that grow authority. Get a custom link plan.",
      "serviceType": [
        "Link Building",
        "White-Hat Link Building",
        "Backlink Building Services",
        "Contextual Backlink Building",
        "Digital PR",
        "Manual Link Outreach",
        "Backlink Audit",
        "Link Building for Service Pages",
      ],
      "provider": {
        "@type": "Organization",
        "@id": "https://igrdigital.com/#organization",
        "name": "IGR Digital",
        "url": "https://igrdigital.com/",
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "Country",
          "name": "United States",
        },
        {
          "@type": "Country",
          "name": "United Kingdom",
        },
      ],
      "audience": {
        "@type": "Audience",
        "audienceType":
          "SaaS companies, B2B businesses, startups and small businesses",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Link Building Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Starter Link Building Package",
              "description":
                "Backlink audit, competitor gap analysis, manual outreach, monthly link placements and reporting.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Growth Link Building Package",
              "description":
                "Higher monthly link volume, digital PR, linkable assets, anchor strategy and performance reviews.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Link Building Package",
              "description":
                "Dedicated link building team, digital PR, toxic link cleanup and custom reporting.",
            },
          },
        ],
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://igrdigital.com/link-building-services/#faq",
      "url": "https://igrdigital.com/link-building-services/#faq",
      "name": "Frequently Asked Questions About Link Building",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many backlinks do I need to rank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "There is no fixed number. It depends on your niche, competitors and the quality of the links. A few strong, relevant links often help more than dozens of weak ones. We compare your profile with top-ranking pages to set a realistic target.",
          },
        },
        {
          "@type": "Question",
          "name": "Is link building safe for my site?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, when it is done with white hat methods. We earn links from real, relevant sites through manual outreach and avoid private networks and paid link schemes that can lead to penalties.",
          },
        },
        {
          "@type": "Question",
          "name": "How much do link building services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Pricing depends on your niche, competition, link volume and goals. Startups can begin with a focused monthly plan, while larger brands need custom plans. We recommend a package after your free audit.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you measure link quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We check relevance to your niche, the site's real traffic, editorial standards, spam signals and the link's placement on the page. We share this in your report for every link.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does link building take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most sites see early movement within 2-3 months, with stronger gains between 4 and 6 months. Competitive niches can take longer.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer link building services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer backlink creation for businesses of all sizes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We offer backlink creation for businesses from early-stage startups to established brands. The plan, link volume and strategy change with your niche, competition and goals.",
          },
        },
      ],
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://igrdigital.com/link-building-services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Link Building Services",
          "item": "https://igrdigital.com/link-building-services/",
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  if (slug === "guest-posting") {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Guest Posting Services",
      "name": "Guest Posting Services on Real Sites With Real Traffic",
      "description":
        "Guest posting services on real, relevant sites with genuine traffic. Content, outreach and placement handled for you. Request a link plan.",
      "provider": {
        "@type": "Organization",
        "name": "IGR Digital",
        "url": "https://igrdigital.com/",
      },
      "areaServed": ["India", "Worldwide"],
      "url": "https://igrdigital.com/guest-posting-services/",
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://igrdigital.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guest Posting Services",
          "item": "https://igrdigital.com/guest-posting-services/",
        },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is guest posting still good for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, when it is done well. Guest posts on relevant, trusted sites earn contextual backlinks, new audiences and brand mentions. Low-quality, mass-produced guest posts do not help and can hurt, which is why site quality and content quality come first.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you choose guest post sites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We look at relevance to your niche, real organic traffic, editorial standards, audience quality and spam signals. We avoid sites that publish anything for a fee or that exist only to sell links.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you use private blog networks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. We do not use private blog networks, link farms or hidden links. Every placement is on a real site with a real audience.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a guest post cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cost depends on the site's quality, your niche and the number of placements. Startups can begin with a focused monthly plan, while larger brands need custom plans. We recommend a package after your free review.",
          },
        },
        {
          "@type": "Question",
          "name": "How long do guest posts take to go live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most placements take a few weeks from outreach to publication, depending on the site's editorial schedule. We keep you updated at every stage.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer guest posting services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
          },
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <ServiceDynamicPageClient slug={slug} />
      </>
    );
  }

  // JSON-LD structured data for Google Search Console (Service Schema + FAQ Schema + BreadcrumbList)
  const faqSchema = data.faqs?.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.hero.eyebrow || slug,
    provider: {
      "@type": "Organization",
      name: "IGR Digital",
      url: "https://igrdigital.com",
      logo: "https://igrdigital.com/Brand.jpeg",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    description: data.hero.paragraph,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.hero.eyebrow || slug} Plans`,
      itemListElement: data.pricing?.plans?.map((plan, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: plan.name,
        },
        price: plan.price ? plan.price.replace(/[^0-9]/g, "") : undefined,
        priceCurrency: "USD",
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://igrdigital.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://igrdigital.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.hero.eyebrow || slug,
        item: `https://igrdigital.com${getServiceUrl(slug)}`,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Client Layout Component */}
      <ServiceDynamicPageClient slug={slug} />
    </>
  );
}
