import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "recharts"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|mp4|woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // 1. Ecommerce SEO
      { source: "/ecommerce-seo-services", destination: "/services/ecommerce-seo" },
      { source: "/ecommerce-seo-services/", destination: "/services/ecommerce-seo" },

      // 2. Shopify SEO
      { source: "/shopify-seo-services", destination: "/services/shopify-seo" },
      { source: "/shopify-seo-services/", destination: "/services/shopify-seo" },
      { source: "/shopify-seo-agency", destination: "/services/shopify-seo" },
      { source: "/shopify-seo-agency/", destination: "/services/shopify-seo" },

      // 3. WordPress SEO
      { source: "/wordpress-seo-services", destination: "/services/wordpress-seo" },
      { source: "/wordpress-seo-services/", destination: "/services/wordpress-seo" },

      // 4. Webflow SEO
      { source: "/webflow-seo-services", destination: "/services/webflow-seo" },
      { source: "/webflow-seo-services/", destination: "/services/webflow-seo" },
      { source: "/webflow-seo-agency", destination: "/services/webflow-seo" },
      { source: "/webflow-seo-agency/", destination: "/services/webflow-seo" },

      // 5. Link Building
      { source: "/link-building-services", destination: "/services/link-building" },
      { source: "/link-building-services/", destination: "/services/link-building" },

      // 6. Guest Posting
      { source: "/guest-posting-services", destination: "/services/guest-posting" },
      { source: "/guest-posting-services/", destination: "/services/guest-posting" },

      // 7. Digital PR
      { source: "/digital-pr-services", destination: "/services/digital-pr" },
      { source: "/digital-pr-services/", destination: "/services/digital-pr" },

      // 8. Custom SEO
      { source: "/custom-seo-services", destination: "/services/custom-seo" },
      { source: "/custom-seo-services/", destination: "/services/custom-seo" },

      // 9. Local SEO
      { source: "/local-seo-services", destination: "/services/local-seo" },
      { source: "/local-seo-services/", destination: "/services/local-seo" },

      // 10. Enterprise SEO
      { source: "/enterprise-seo-services", destination: "/services/enterprise-seo" },
      { source: "/enterprise-seo-services/", destination: "/services/enterprise-seo" },

      // 11. On-Page SEO
      { source: "/on-page-seo-services", destination: "/services/on-page-seo" },
      { source: "/on-page-seo-services/", destination: "/services/on-page-seo" },

      // 12. Technical Audit
      { source: "/technical-audit-services", destination: "/services/technical-audit" },
      { source: "/technical-audit-services/", destination: "/services/technical-audit" },

      // 13. SEO Consultancy
      { source: "/seo-consultancy-services", destination: "/services/consultancy" },
      { source: "/seo-consultancy-services/", destination: "/services/consultancy" },

      // 14. Free Website Audit
      { source: "/free-website-audit-services", destination: "/services/free-audit" },
      { source: "/free-website-audit-services/", destination: "/services/free-audit" },

      // 15. AI SEO Optimization
      { source: "/ai-seo-services", destination: "/services/ai-seo" },
      { source: "/ai-seo-services/", destination: "/services/ai-seo" },

      // 16. Answer Engine (AEO)
      { source: "/aeo-services", destination: "/services/aeo" },
      { source: "/aeo-services/", destination: "/services/aeo" },

      // 17. PPC Advertising
      { source: "/ppc-advertising-services", destination: "/services/ppc" },
      { source: "/ppc-advertising-services/", destination: "/services/ppc" },

      // 18. Google Ads
      { source: "/google-ads-services", destination: "/services/google-ads" },
      { source: "/google-ads-services/", destination: "/services/google-ads" },

      // 19. Meta Ads
      { source: "/meta-ads-services", destination: "/services/meta-ads" },
      { source: "/meta-ads-services/", destination: "/services/meta-ads" },

      // 20. LinkedIn Ads
      { source: "/linkedin-ads-services", destination: "/services/linkedin-ads" },
      { source: "/linkedin-ads-services/", destination: "/services/linkedin-ads" },

      // 21. Content Marketing
      { source: "/content-marketing-services", destination: "/services/content-marketing" },
      { source: "/content-marketing-services/", destination: "/services/content-marketing" },

      // 22. Social Media Management
      { source: "/social-media-services", destination: "/services/social-media" },
      { source: "/social-media-services/", destination: "/services/social-media" },

      // 23. E-commerce Marketing
      { source: "/ecommerce-marketing-services", destination: "/services/ecommerce-marketing" },
      { source: "/ecommerce-marketing-services/", destination: "/services/ecommerce-marketing" },

      // 24. B2B Marketing
      { source: "/b2b-marketing-services", destination: "/services/b2b-marketing" },
      { source: "/b2b-marketing-services/", destination: "/services/b2b-marketing" },

      // 25. Performance Marketing
      { source: "/performance-marketing-services", destination: "/services/performance-marketing" },
      { source: "/performance-marketing-services/", destination: "/services/performance-marketing" },
    ];
  },
};

export default withPayload(nextConfig);