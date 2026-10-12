import type { ServicePageData } from "@/components/Data/servicePageData";
import { digitalMarketingServiceData } from "@/components/Data/servicePageData";
import { ecommerceSeoData } from "./ecommerceSeo";
import { shopifySeoData } from "./shopifySeo";
import { linkBuildingData } from "./linkBuilding";
import { localSeoData } from "./localSeo";
import { technicalAuditData } from "./technicalAudit";

/* =========================================================================
   GENERATE DERIVED SERVICE DATA FOR ALL SERVICES
   ========================================================================= */

function createServiceData(
  title: string,
  eyebrow: string,
  headline: string,
  paragraph: string,
  stat1: { value: number; suffix: string; label: string; sub?: string },
  stat2: { value: number; suffix: string; label: string; sub?: string },
  stat3: { value: number; suffix: string; label: string; sub?: string },
  pricingTitle: string,
  pricingDesc: string,
  contentBullets: string[],
  relatedLinks: { label: string; href: string }[]
): ServicePageData {
  return {
    ...digitalMarketingServiceData,
    hero: {
      ...digitalMarketingServiceData.hero,
      eyebrow,
      headline,
      paragraph,
      circles: [
        {
          id: "stat-1",
          value: stat1.value,
          suffix: stat1.suffix,
          label: stat1.label,
          sub: stat1.sub,
          backText: "Measurable impact on organic visibility and business growth.",
          className: "circle-blue",
        },
        {
          id: "stat-2",
          value: stat2.value,
          suffix: stat2.suffix,
          label: stat2.label,
          sub: stat2.sub,
          backText: "Focused on conversion-driven search engine outcomes.",
          className: "circle-violet",
        },
        {
          id: "stat-3",
          value: stat3.value,
          suffix: stat3.suffix,
          label: stat3.label,
          sub: stat3.sub,
          backText: "Managed end-to-end by dedicated search specialists.",
          className: "circle-navy",
        },
      ],
    },
    pricing: {
      ...digitalMarketingServiceData.pricing,
      title: pricingTitle,
      description: pricingDesc,
    },
    serviceContent: {
      ...digitalMarketingServiceData.serviceContent,
      eyebrow,
      title: `${title} built around your business growth goals.`,
      intro: paragraph,
      content: [
        {
          heading: `What Makes Our ${title} Different?`,
          paragraphs: [
            `${title} is designed to give your business an undeniable organic advantage. We align search intent with technical best practices to build sustainable search market share.`,
            `Our approach connects audience research, competitor intelligence, and on-page precision to attract visitors ready to engage and convert.`,
          ],
          bullets: contentBullets,
        },
        {
          heading: `Strategic Execution & Measurable Results`,
          paragraphs: [
            `We continuously analyze search trends, user engagement, and algorithmic shifts to refine your strategy and defend your market visibility against aggressive competitors.`,
          ],
        },
      ],
      sidebarGroups: [
        {
          title: "Related Services",
          links: relatedLinks,
        },
        ...digitalMarketingServiceData.serviceContent.sidebarGroups,
      ],
    },
  };
}

/* =========================================================================
   SERVICES REGISTRY MAP (MATCHES ALL MENU & MEGA MENU SLUGS)
   ========================================================================= */

export const servicesRegistry: Record<string, ServicePageData> = {
  // 1. Digital Marketing Main
  "digital-marketing": digitalMarketingServiceData,

  // 2. Platform SEO
  "ecommerce-seo": ecommerceSeoData,
  "shopify-seo": shopifySeoData,
  "wordpress-seo": createServiceData(
    "WordPress SEO",
    "WORDPRESS SEO SPECIALISTS",
    "WordPress SEO That Outranks Competitors & Speeds Up Growth",
    "Optimize your WordPress site structure, plugins, and Core Web Vitals to turn WordPress into an organic ranking powerhouse.",
    { value: 175, suffix: "%", label: "ORGANIC TRAFFIC UPLIFT", sub: "Avg. 6 months" },
    { value: 92, suffix: "%", label: "CORE WEB VITALS SCORE", sub: "Mobile & Desktop" },
    { value: 150, suffix: "+", label: "WP SITES OPTIMIZED" },
    "WordPress SEO plans built for performance",
    "Custom optimization for WooCommerce, Elementor, and custom WordPress themes.",
    ["Plugin bloat audit & cleanup", "Yoast / RankMath schema configuration", "Database & image compression", "Custom post type SEO hierarchy"],
    [
      { label: "Shopify SEO", href: "/services/shopify-seo" },
      { label: "Webflow SEO", href: "/services/webflow-seo" },
      { label: "Technical Audit", href: "/services/technical-audit" },
    ]
  ),
  "webflow-seo": createServiceData(
    "Webflow SEO",
    "WEBFLOW SEO EXPERTS",
    "Webflow SEO for Modern Design-Led Companies & Startups",
    "Harness Webflow's clean semantic code. We optimize CMS collections, dynamic multi-reference fields, and structured data for maximum visibility.",
    { value: 210, suffix: "%", label: "SEARCH VISIBILITY LIFT", sub: "In 90 days" },
    { value: 98, suffix: "/100", label: "CLEAN CODE AUDIT", sub: "Semantic HTML" },
    { value: 80, suffix: "+", label: "WEBFLOW BUILDS SCALED" },
    "Webflow SEO packages for high-growth teams",
    "Structured optimization roadmaps for Webflow CMS, animations, and responsive layouts.",
    ["CMS collection template SEO", "Dynamic Schema markup integration", "Webflow redirect rules & 301 maps", "Fast mobile rendering"],
    [
      { label: "WordPress SEO", href: "/services/wordpress-seo" },
      { label: "Custom SEO", href: "/services/custom-seo" },
      { label: "Technical Audit", href: "/services/technical-audit" },
    ]
  ),

  // 3. Off-Page SEO
  "link-building": linkBuildingData,
  "guest-posting": createServiceData(
    "Guest Posting",
    "PREMIUM GUEST POSTING & EDITORIAL PLACEMENT",
    "Contextual Guest Posts on Authoritative Industry Publications",
    "Boost your search rankings with naturally embedded contextual backlinks on genuine, high-traffic blogs in your niche.",
    { value: 45, suffix: "+", label: "MINIMUM DOMAIN RATING", sub: "Ahrefs DR" },
    { value: 100, suffix: "%", label: "DOFOLLOW GUARANTEE", sub: "Permanent links" },
    { value: 2500, suffix: "+", label: "ARTICLES PUBLISHED" },
    "Guest posting packages designed for authority",
    "100% manual outreach with custom-written, native editorial content.",
    ["Niche-relevant blog vetting", "High organic traffic verification", "Natural anchor text distribution", "Permanent dofollow placements"],
    [
      { label: "Link Building", href: "/services/link-building" },
      { label: "Digital PR", href: "/services/digital-pr" },
      { label: "Custom SEO", href: "/services/custom-seo" },
    ]
  ),
  "digital-pr": createServiceData(
    "Digital PR",
    "DATA-DRIVEN DIGITAL PR CAMPAIGNS",
    "Earn Tier-1 News Mentions, Press Coverage & Authoritative Links",
    "Turn unique data stories and industry insights into viral media coverage, high-DR press features, and massive brand awareness.",
    { value: 80, suffix: "+", label: "TOP TIER MEDIA REACH", sub: "DR 70-90+ publications" },
    { value: 350, suffix: "%", label: "REFERRING DOMAIN GAIN", sub: "Over 12 months" },
    { value: 45, suffix: "+", label: "PRESS CAMPAIGNS EXECUTED" },
    "High-impact Digital PR packages",
    "Creative campaign angles, custom data studies, and personalized journalist pitching.",
    ["Original data studies & surveys", "Journalist & newsroom outreach", "Syndicated press coverage", "Unlinked brand mention reclamation"],
    [
      { label: "Link Building", href: "/services/link-building" },
      { label: "Guest Posting", href: "/services/guest-posting" },
      { label: "Enterprise SEO", href: "/services/enterprise-seo" },
    ]
  ),

  // 4. Core SEO
  "custom-seo": createServiceData(
    "Custom SEO",
    "BESPOKE SEO STRATEGIES FOR UNIQUE BUSINESSES",
    "Custom SEO Roadmaps Built Around Your Growth Objectives",
    "No generic cookie-cutter templates. We architect a custom search strategy based on your audience, competition, and revenue milestones.",
    { value: 280, suffix: "%", label: "AVG. TRAFFIC INCREASE", sub: "Over 12 months" },
    { value: 95, suffix: "%", label: "CLIENT RETENTION", sub: "Partnership model" },
    { value: 200, suffix: "+", label: "CUSTOM ROADMAPS DELIVERED" },
    "Tailored SEO plans engineered for ROI",
    "Flexible engagement models built around your exact growth targets.",
    ["Custom competitor vulnerability mapping", "High-intent transactional keyword capture", "Technical site architecture fixes", "Full-funnel organic attribution"],
    [
      { label: "Enterprise SEO", href: "/services/enterprise-seo" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Technical Audit", href: "/services/technical-audit" },
    ]
  ),
  "local-seo": localSeoData,
  "enterprise-seo": createServiceData(
    "Enterprise SEO",
    "SCALE AT ENTERPRISE VOLUME",
    "Enterprise SEO for Large-Scale Websites & Global Brands",
    "Manage millions of URLs, multi-language architectures, and departmental workflows with enterprise-grade technical SEO.",
    { value: 420, suffix: "%", label: "SEARCH IMPRESSION LIFT", sub: "Millions of queries" },
    { value: 50, suffix: "M+", label: "PAGES CRAWLED & OPTIMIZED" },
    { value: 30, suffix: "+", label: "ENTERPRISE BRANDS SERVED" },
    "Enterprise SEO solutions for complex web ecosystems",
    "Dedicated SEO directors, custom API automation, and cross-functional engineering alignment.",
    ["Multi-million URL crawl budget optimization", "International hreflang & multi-regional SEO", "Automated internal linking architectures", "Executive C-suite reporting & attribution"],
    [
      { label: "Custom SEO", href: "/services/custom-seo" },
      { label: "Technical Audit", href: "/services/technical-audit" },
      { label: "Link Building", href: "/services/link-building" },
    ]
  ),
  "on-page-seo": createServiceData(
    "On-Page SEO",
    "PRECISION ON-PAGE OPTIMIZATION",
    "On-Page SEO That Aligns Search Intent with Top Rankings",
    "Fine-tune content, headings, meta tags, and internal link structure to send unmistakable relevance signals to Google.",
    { value: 160, suffix: "%", label: "ORGANIC CTR INCREASE", sub: "Via rich metadata" },
    { value: 85, suffix: "%", label: "FIRST PAGE KEYWORD RATIO" },
    { value: 500, suffix: "+", label: "PAGES SYSTEMATICALLY OPTIMIZED" },
    "On-page optimization plans for immediate impact",
    "Detailed page-by-page content enhancements and semantic keyword tuning.",
    ["Search intent & SERP feature alignment", "Title, H1-H3 & meta description rewriting", "Semantic LSI & NLP entity integration", "Internal link silo architecture"],
    [
      { label: "Custom SEO", href: "/services/custom-seo" },
      { label: "Technical Audit", href: "/services/technical-audit" },
      { label: "Content Marketing", href: "/services/content-marketing" },
    ]
  ),

  // 5. Consulting
  "consultancy": createServiceData(
    "SEO Consultancy",
    "STRATEGIC SEO ADVISORY FOR LEADERSHIP TEAMS",
    "Senior SEO Consulting to Drive Confident Growth Decisions",
    "Get high-level strategic guidance, technical second opinions, and customized roadmaps from seasoned search marketing directors.",
    { value: 15, suffix: "+", label: "YEARS SEARCH EXPERIENCE" },
    { value: 100, suffix: "%", label: "DATA-DRIVEN STRATEGIES" },
    { value: 120, suffix: "+", label: "CONSULTING SESSIONS EXECUTED" },
    "High-impact SEO consulting engagements",
    "Direct 1-on-1 access to veteran SEO strategists for audits, migrations, and team training.",
    ["Website migration risk mitigation", "In-house team training & SOP creation", "Algorithmic penalty recovery analysis", "Quarterly organic growth roadmaps"],
    [
      { label: "Technical Audit", href: "/services/technical-audit" },
      { label: "Free Website Audit", href: "/services/free-audit" },
      { label: "Enterprise SEO", href: "/services/enterprise-seo" },
    ]
  ),
  "free-audit": createServiceData(
    "Free Website Audit",
    "INSTANT SEARCH DIAGNOSTICS & GAP ANALYSIS",
    "Claim Your Comprehensive Website & Competitor SEO Audit",
    "Discover what is holding your website back from top rankings. We analyze your technical health, keyword opportunities, and backlink gaps.",
    { value: 48, suffix: "hr", label: "DELIVERY TIMELINE" },
    { value: 35, suffix: "+", label: "POINTS INSPECTED" },
    { value: 100, suffix: "%", label: "FREE & NO OBLIGATION" },
    "Actionable audit delivered by real search strategists",
    "Identify your top 3 lowest-hanging organic growth opportunities immediately.",
    ["Indexation & crawl health overview", "Top competitor keyword gap comparison", "Mobile speed & Core Web Vitals score", "Prioritized quick-win checklist"],
    [
      { label: "Technical Audit", href: "/services/technical-audit" },
      { label: "SEO Consultancy", href: "/services/consultancy" },
      { label: "Custom SEO", href: "/services/custom-seo" },
    ]
  ),
  "technical-audit": technicalAuditData,

  // 6. Paid Media & Digital Marketing (from MegaMenu)
  "google-ads": createServiceData(
    "Google Ads (PPC)",
    "GOOGLE ADS & PPC MANAGEMENT EXPERTS",
    "High-ROI Google Ads Campaigns That Turn Searches Into Sales",
    "Stop wasting ad spend on low-intent clicks. We build high-converting Search, Shopping, Performance Max, and YouTube campaigns engineered for profitable return on ad spend (ROAS).",
    { value: 480, suffix: "%", label: "AVERAGE ROAS", sub: "E-comm & Lead Gen" },
    { value: 38, suffix: "%", label: "LOWER COST PER ACQUISITION", sub: "Through negative keyword sculpting" },
    { value: 25, suffix: "M+", label: "AD SPEND MANAGED" },
    "Performance-driven Google Ads management plans",
    "Bespoke campaign structure, ad creative testing, and daily bid optimizations.",
    [
      "Performance Max & Smart Bidding optimization",
      "Strict negative keyword sculpting to eliminate budget waste",
      "High-converting ad copy and extension testing",
      "Complete GA4 & offline conversion attribution",
    ],
    [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
      { label: "E-commerce SEO", href: "/services/ecommerce-seo" },
    ]
  ),

  "meta-ads": createServiceData(
    "Meta Ads (Facebook & Instagram)",
    "META ADS & SOCIAL ADVERTISING SPECIALISTS",
    "Scale Customer Acquisition With High-Impact Meta Ad Campaigns",
    "Reach and convert ready-to-buy consumers across Facebook and Instagram. We combine viral creative testing, UGC production, and broad AI targeting to scale revenue profitably.",
    { value: 420, suffix: "%", label: "SCALED REVENUE GROWTH", sub: "Across Meta campaigns" },
    { value: 65, suffix: "%", label: "HIGHER CLICK-TO-PURCHASE RATE", sub: "Via dynamic catalog ads" },
    { value: 500, suffix: "+", label: "HIGH-CONVERTING CREATIVES TESTED" },
    "Meta Ads packages built to scale ad spend profitably",
    "Creative strategy, UGC video sourcing, and aggressive full-funnel remarketing.",
    [
      "Advantage+ Shopping and Catalog campaign scaling",
      "High-converting video and static ad creative production",
      "First-party Conversions API (CAPI) server tracking",
      "Cross-channel retargeting funnels",
    ],
    [
      { label: "Google Ads (PPC)", href: "/services/google-ads" },
      { label: "Social Media Management", href: "/services/social-media" },
      { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
    ]
  ),

  "linkedin-ads": createServiceData(
    "LinkedIn B2B Ads",
    "B2B LEAD GENERATION & LINKEDIN ADVERTISING",
    "Generate Enterprise Pipeline & Qualified Decision-Maker Leads",
    "Put your brand directly in front of VP, C-Suite, and enterprise buyers. We deploy Account-Based Marketing (ABM) and high-converting native Lead Gen forms.",
    { value: 68, suffix: "%", label: "DECISION-MAKER ENGAGEMENT", sub: "VP & Director level" },
    { value: 52, suffix: "%", label: "QUALIFIED LEAD RATE", sub: "Via native lead forms" },
    { value: 180, suffix: "+", label: "B2B PIPELINES BUILT" },
    "B2B LinkedIn Ad programs built for deal flow",
    "Strategic targeting by job title, company size, revenue tier, and industry vertical.",
    [
      "Account-Based Marketing (ABM) list matching",
      "Frictionless native LinkedIn Lead Gen Forms",
      "Thought leadership and Sponsored Content distribution",
      "CRM & HubSpot closed-loop deal attribution",
    ],
    [
      { label: "Google Ads (PPC)", href: "/services/google-ads" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Enterprise SEO", href: "/services/enterprise-seo" },
    ]
  ),

  "content-marketing": createServiceData(
    "Content Marketing",
    "AUTHORITY CONTENT & INBOUND REVENUE",
    "Content Marketing That Educates, Ranks, and Converts Readers Into Buyers",
    "Stop publishing generic blogs that nobody reads. We engineer high-value data studies, strategic topic clusters, and customer acquisition copy that drives organic pipelines.",
    { value: 340, suffix: "%", label: "INBOUND TRAFFIC GROWTH", sub: "Over 12 months" },
    { value: 45, suffix: "%", label: "MORE LEADS CAPTURED", sub: "Through contextual lead magnets" },
    { value: 1200, suffix: "+", label: "HIGH-RANKING ASSETS PUBLISHED" },
    "Content marketing retainers focused on customer acquisition",
    "End-to-end editorial calendar, expert writing, graphic design, and search syndication.",
    [
      "Topic cluster & content pillar strategy",
      "Original industry research, whitepapers, and reports",
      "Conversion-focused copywriting with embedded CTAs",
      "Multi-channel content syndication and newsletter repurposing",
    ],
    [
      { label: "Social Media Management", href: "/services/social-media" },
      { label: "On-Page SEO", href: "/services/on-page-seo" },
      { label: "Digital PR", href: "/services/digital-pr" },
    ]
  ),

  "social-media": createServiceData(
    "Social Media Management",
    "BRAND ENGAGEMENT & COMMUNITY BUILDING",
    "Transform Casual Followers Into Loyal, Repeat Brand Advocates",
    "Build a magnetic social media presence. We take care of viral short-form video production, daily community management, brand voice consistency, and high-engagement reels.",
    { value: 380, suffix: "%", label: "ENGAGEMENT RATE LIFT", sub: "Across all channels" },
    { value: 250, suffix: "K+", label: "REACH PER CAMPAIGN", sub: "Organic discovery" },
    { value: 98, suffix: "%", label: "COMMUNITY RESPONSE RATE" },
    "Social media management plans for modern brands",
    "Daily posting, reels production, influencer partnerships, and audience interaction.",
    [
      "Short-form video scripting, editing, and reels production",
      "Daily community engagement and direct message management",
      "Brand aesthetic & cohesive visual feed curation",
      "Social listening, trend-jacking, and viral format testing",
    ],
    [
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Digital PR", href: "/services/digital-pr" },
    ]
  ),

  /* =========================================================================
     NEW REQUESTED SERVICES: AI-SEO, AEO, PPC, ECOM-MARKETING, B2B, PERF-MKTG
     ========================================================================= */

  "ai-seo": createServiceData(
    "AI Search Engine Optimization (AI SEO)",
    "NEXT-GEN SEARCH VISIBILITY & LLM CITATIONS",
    "Dominate AI Overviews, Gemini, and Generative Search Engines",
    "Search is changing rapidly. We optimize your brand to be the #1 cited authority in Google AI Overviews, ChatGPT, Gemini, and Claude search summaries.",
    { value: 410, suffix: "%", label: "AI OVERVIEW CITATION RATE", sub: "Featured in AI snapshots" },
    { value: 82, suffix: "%", label: "TOPICAL ENTITY COVERAGE", sub: "Knowledge graph authority" },
    { value: 15, suffix: "Days", label: "AVG. TIME TO FIRST AI CITATION" },
    "AI SEO Optimization retainers built for the future of search",
    "Structured data, entity salience modeling, vector search readiness, and brand knowledge graphs.",
    [
      "AI Overview & Google SGE snapshot optimization",
      "Entity-based vector content clustering & schema markup",
      "LLM source grounding via authoritative citations and press mentions",
      "Continuous prompt response tracking across ChatGPT, Gemini & Perplexity",
    ],
    [
      { label: "Answer Engine Optimization (AEO)", href: "/services/aeo" },
      { label: "Technical SEO Audit", href: "/services/technical-audit" },
      { label: "Digital PR & Authority", href: "/services/digital-pr" },
    ]
  ),

  "aeo": createServiceData(
    "Answer Engine Optimization (AEO)",
    "ZERO-CLICK CITATIONS & AI ANSWER DOMINANCE",
    "Win Position Zero Across Perplexity, SearchGPT & Voice Assistants",
    "Users don't just click blue links anymore—they ask conversational questions. We structure your digital assets so AI answer engines quote your brand as the definitive answer.",
    { value: 3.8, suffix: "x", label: "ZERO-CLICK BRAND REACH", sub: "Conversational answer capture" },
    { value: 89, suffix: "%", label: "FAQ SCHEMA ACCREDITATION", sub: "Direct answer ingestion" },
    { value: 24, suffix: "/7", label: "AI BOT TELEMETRY MONITORING" },
    "Answer Engine Optimization (AEO) strategy & deployment",
    "Conversational intent mapping, direct answer blocks, nested JSON-LD, and authoritative consensus building.",
    [
      "Perplexity AI & SearchGPT source inclusion engineering",
      "Direct answer concise formatting & microdata injection",
      "Entity graph validation on Wikidata, Crunchbase & Schema.org",
      "Voice search & conversational prompt modeling",
    ],
    [
      { label: "AI Search Optimization", href: "/services/ai-seo" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Custom SEO", href: "/services/custom-seo" },
    ]
  ),

  "ppc": createServiceData(
    "Pay-Per-Click (PPC) Advertising",
    "HIGH-INTENT PAID SEARCH & INSTANT PIPELINE",
    "Precision PPC Campaigns Engineered to Maximize Revenue Per Click",
    "Stop burning ad budget on low-intent search terms. We build tightly themed ad groups, high-converting landing pages, and aggressive negative keyword lists that generate immediate leads.",
    { value: 5.4, suffix: "x", label: "AVERAGE PPC ROAS", sub: "Across Google & Bing Ads" },
    { value: 38, suffix: "%", label: "LOWER COST PER ACQUISITION (CPA)", sub: "Against industry average" },
    { value: 100, suffix: "%", label: "CLICK FRAUD & SPEND MONITORING" },
    "Full-service PPC management focused on closed revenue",
    "Search ads, Performance Max, remarketing, landing page CRO, and real-time conversion API sync.",
    [
      "Granular single-keyword/theme ad group architecture (SKAG/STAG)",
      "High-intent transactional keyword bid management & Dayparting",
      "Continuous A/B split testing of ad copy, headlines, and responsive assets",
      "Direct CRM attribution with offline conversion tracking",
    ],
    [
      { label: "Google Ads (PPC)", href: "/services/google-ads" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "B2B Marketing", href: "/services/b2b-marketing" },
    ]
  ),

  "ecommerce-marketing": createServiceData(
    "Full-Funnel E-commerce Marketing",
    "D2C & STOREFRONT REVENUE ACCELERATION",
    "Turn Browsers Into Buyers With High-Converting Full-Funnel E-commerce Marketing",
    "Scale your online store profitably. We integrate high-ROAS Meta and Google Shopping campaigns with automated email/SMS retention flows and store conversion rate optimization.",
    { value: 460, suffix: "%", label: "GMV REVENUE INCREASE", sub: "Average first 6 months" },
    { value: 3.8, suffix: "x", label: "BLENDED STORE ROAS", sub: "Paid + Organic + Retention" },
    { value: 32, suffix: "%", label: "REPEAT CUSTOMER RATE", sub: "Via Klaviyo automation" },
    "End-to-end ecommerce growth retainers for modern brands",
    "Google Shopping, Meta Advantage+ catalogs, TikTok Shop, Klaviyo email/SMS, and checkout CRO.",
    [
      "Google Performance Max & Shopping product feed optimization",
      "High-converting UGC video creatives & Instagram Shopping funnels",
      "Klaviyo automated flows: abandoned cart, browse abandonment, post-purchase winback",
      "Average Order Value (AOV) upsell and cross-sell architecture",
    ],
    [
      { label: "E-commerce SEO", href: "/services/ecommerce-seo" },
      { label: "Shopify SEO", href: "/services/shopify-seo" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
    ]
  ),

  "b2b-marketing": createServiceData(
    "B2B & Account-Based Marketing (ABM)",
    "QUALIFIED PIPELINE & HIGH-TICKET DEALS",
    "Win High-Value Enterprise Deals with Targeted Account-Based Marketing",
    "Shorten sales cycles and engage real decision-makers. We build unified B2B demand generation funnels across LinkedIn, Google Ads, executive thought leadership, and gated assets.",
    { value: 72, suffix: "%", label: "SALES-QUALIFIED PIPELINE", sub: "Enterprise accounts" },
    { value: 4.2, suffix: "x", label: "OPPORTUNITY VELOCITY", sub: "Faster deal closing" },
    { value: 92, suffix: "%", label: "DECISION-MAKER MATCH RATE", sub: "Target account lists" },
    "Full-funnel B2B demand generation and ABM retainers",
    "LinkedIn Ads, programmatic IP account targeting, HubSpot CRM syncing, and high-ticket sales collateral.",
    [
      "Named account Account-Based Marketing (ABM) targeting by company and tier",
      "Executive thought leadership and LinkedIn sponsored content",
      "High-converting B2B whitepapers, calculators, and demo booking pages",
      "Lead scoring, automated qualification, and multi-touch pipeline attribution",
    ],
    [
      { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "PPC Advertising", href: "/services/ppc" },
    ]
  ),

  "performance-marketing": createServiceData(
    "Data-Driven Performance Marketing",
    "CROSS-CHANNEL SCALE & MAXIMUM ROAS",
    "Scale Your Business with Scientific, Data-Backed Performance Marketing",
    "No vanity metrics. We deploy cross-channel paid media (Search, Social, Display, Retargeting) tightly synchronized to your customer acquisition costs (CAC) and customer lifetime value (LTV).",
    { value: 5.2, suffix: "x", label: "BLENDED CAMPAIGN ROAS", sub: "Profitable scaling" },
    { value: 42, suffix: "%", label: "LOWER BLENDED CAC", sub: "Customer acquisition cost" },
    { value: 100, suffix: "%", label: "REVENUE ATTRIBUTION TRANSPARENCY" },
    "Performance marketing retainers built for rapid scale",
    "Media buying, multi-variant creative testing, server-side tracking, and Looker Studio real-time dashboards.",
    [
      "Omnichannel budget allocation across Google, Meta, TikTok, and Bing",
      "Continuous creative testing sprints (50+ hooks & angles per month)",
      "Server-side tracking (CAPI) and multi-touch algorithmic attribution",
      "Weekly strategic pacing calls and transparent margin monitoring",
    ],
    [
      { label: "PPC Advertising", href: "/services/ppc" },
      { label: "E-commerce Marketing", href: "/services/ecommerce-marketing" },
      { label: "B2B Marketing", href: "/services/b2b-marketing" },
    ]
  ),
};

/* =========================================================================
   HELPER FUNCTION TO RETRIEVE DATA BY SLUG WITH FALLBACK
   ========================================================================= */

export function getServiceDataBySlug(slug: string): ServicePageData {
  return servicesRegistry[slug] || digitalMarketingServiceData;
}
