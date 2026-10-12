export interface ServiceDefinition {
  slug: string;
  name: string;
  shortName: string;
  targetQuery: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  marketContext: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CityDefinition {
  slug: string;
  name: string;
  stateOrRegion?: string;
  countrySlug: string;
  marketHighlights: string;
  businessLandscape: string;
  keyIndustries: string[];
  localSearchDynamics: string;
  customFaqs?: {
    question: string;
    answer: string;
  }[];
}

export interface CountryDefinition {
  slug: string;
  name: string;
  shortName: string;
  region: "North America" | "Europe" | "Asia-Pacific" | "Middle East";
  tier: 1 | 2;
  economicHub: string;
  marketOverview: string;
  businessEnvironment: string;
  digitalGrowthChallenges: string;
  localSearchBehavior: string;
  ppcMarketDynamics: string;
  ecommerceLandscape: string;
  b2bLandscape: string;
  topIndustries: string[];
  cities: CityDefinition[];
  customFaqs?: {
    question: string;
    answer: string;
  }[];
}

/* =========================================================================
   1. CORE 12 SERVICES WITH EXTENSIVE SPECIALIZED CONTEXT
   ========================================================================= */

export const CORE_SERVICES: Record<string, ServiceDefinition> = {
  "seo": {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    shortName: "SEO",
    targetQuery: "SEO Agency",
    heroHeadline: "Data-Driven SEO That Captures Market Share & Generates Organic Pipeline",
    heroSubheadline:
      "We build robust, white-hat SEO systems that help international businesses outrank established market incumbents and drive sustainable, compounding organic revenue.",
    overview:
      "Modern search engine optimization is no longer about isolated keywords or thin backlinks. It requires holistic entity optimization, semantic content coverage, airtight technical architecture, and editorial authority signals that search algorithms trust implicitly.",
    keyPillars: [
      {
        title: "Semantic Keyword Silos & Intent Clustering",
        description: "Mapping search queries across informational, commercial, and transactional intent to capture buyers at every stage of their evaluation cycle.",
      },
      {
        title: "Technical Foundation & Core Web Vitals",
        description: "Optimizing DOM structures, rendering efficiency, international hreflang tags, and mobile-first indexing to ensure 100% crawl budget utilization.",
      },
      {
        title: "Editorial Digital PR & Authority Building",
        description: "Earning permanent contextual backlinks and brand citations on reputable publications and industry news portals.",
      },
      {
        title: "Conversion-Focused Search Analytics",
        description: "Tracking qualified leads, closed sales, and assisted conversions back to organic landing pages via server-side GA4 pipelines.",
      },
    ],
    marketContext:
      "Businesses in competitive international markets face rising ad costs and fierce organic competition. A structured SEO engine provides long-term customer acquisition insulation against rising PPC bids.",
    faqs: [
      {
        question: "How long before we see measurable organic rank improvements?",
        answer: "Initial indexing and 'striking-distance' keyword movement typically occur within 30 to 45 days. Compounding revenue velocity and competitive category dominance mature between months 3 and 6.",
      },
      {
        question: "Do you use safe, white-hat optimization practices?",
        answer: "Yes, 100%. We adhere strictly to search engine quality guidelines, avoiding private blog networks (PBNs), automated content spam, or artificial link schemes.",
      },
      {
        question: "How do you tailor SEO to our specific industry?",
        answer: "We perform deep competitor gap analysis, analyze search intent variations, and construct customized topical authority maps tailored to your commercial margins.",
      },
    ],
  },

  "local-seo": {
    slug: "local-seo",
    name: "Local SEO & Geo-Targeted Visibility",
    shortName: "Local SEO",
    targetQuery: "Local SEO Agency",
    heroHeadline: "Dominate Local Search, Google Maps & High-Intent Geo-Queries",
    heroSubheadline:
      "Capture nearby customers the exact moment they search for your services with targeted Google Business Profile optimization, local citation networks, and localized landing pages.",
    overview:
      "Local SEO targets consumers within specific geographic radiuses who possess immediate buying intent. We optimize your local profiles, geo-relevance, customer reviews, and on-page location silos to secure top placement in local 3-packs.",
    keyPillars: [
      {
        title: "Google Business Profile (GBP) Optimization",
        description: "Complete category configuration, geo-tagged photo updates, service catalogs, and automated review generation protocols.",
      },
      {
        title: "Local Citations & NAP Consistency",
        description: "Building uniform Name, Address, and Phone Number citations across primary data aggregators, local directories, and industry registries.",
      },
      {
        title: "Geo-Grid Rank Tracking & Proximity Mapping",
        description: "Monitoring search rankings block-by-block across target neighborhoods to optimize local visibility radius.",
      },
      {
        title: "Hyper-Local Landing Page Silos",
        description: "Publishing localized service pages with embedded schema, local customer testimonials, and localized FAQs.",
      },
    ],
    marketContext:
      "Local consumers demand immediate proximity, authentic reviews, and seamless contact points. High-ranking local 3-pack visibility drives the highest conversion rates of any digital channel.",
    faqs: [
      {
        question: "Can you help multi-location or franchise businesses?",
        answer: "Yes, we specialize in scalable multi-location setups with localized schema, individualized GBP profiles, and separate city landing hubs.",
      },
      {
        question: "How do you handle negative local reviews?",
        answer: "We establish review management workflows that encourage verified positive customer feedback while addressing concerns constructively.",
      },
    ],
  },

  "technical-seo": {
    slug: "technical-seo",
    name: "Technical SEO & Architecture Diagnostics",
    shortName: "Technical SEO",
    targetQuery: "Technical SEO Agency",
    heroHeadline: "Engineering-First Technical SEO to Remove Crawl, Render & Speed Bottlenecks",
    heroSubheadline:
      "We diagnose and resolve code-level indexing blockers, JavaScript hydration failures, Core Web Vitals issues, and complex site architecture challenges.",
    overview:
      "Technical SEO is the non-negotiable foundation of all search visibility. Even the best content will fail to rank if search engine bots encounter crawl loops, render timeouts, duplicate facets, or slow server responses.",
    keyPillars: [
      {
        title: "Deep Crawl & Log File Analysis",
        description: "Evaluating bot request logs to detect crawl equity waste, orphan URLs, redirect chains, and indexing bloat.",
      },
      {
        title: "Core Web Vitals & INP Optimization",
        description: "Optimizing Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS) thresholds.",
      },
      {
        title: "Nested Schema & Structured Entity Graph",
        description: "Deploying comprehensive JSON-LD schemas for Organizations, Products, FAQs, Articles, and Service nodes.",
      },
      {
        title: "International Hreflang & Multi-Regional Routing",
        description: "Configuring multi-lingual and multi-country routing architectures to prevent cross-region cannibalization.",
      },
    ],
    marketContext:
      "Modern enterprise websites with complex CMS setups, JavaScript frameworks, and thousands of URLs require rigorous engineering to guarantee fast indexing and clean rendering.",
    faqs: [
      {
        question: "Do your developers implement the technical fixes directly?",
        answer: "Yes, we provide ready-to-deploy code snippets, pull requests, or collaborate directly with your in-house engineering team via GitHub or Jira.",
      },
      {
        question: "How often should enterprise technical audits be conducted?",
        answer: "We perform automated continuous monitoring supplemented by comprehensive sprint audits every quarter or prior to major website migrations.",
      },
    ],
  },

  "ai-seo": {
    slug: "ai-seo",
    name: "AI Search Engine Optimization (AI SEO)",
    shortName: "AI SEO",
    targetQuery: "AI SEO Agency",
    heroHeadline: "Secure Top Citations in Google AI Overviews, Gemini, ChatGPT & Claude",
    heroSubheadline:
      "Generative search is transforming organic discovery. We optimize your digital footprint to ensure your brand is cited as the primary authority in AI-generated answers.",
    overview:
      "AI search engines prioritize verified entity relationships, concise consensus data, and high-salience knowledge graph citations. We engineer content and schema so Large Language Models (LLMs) readily ground their summaries on your brand.",
    keyPillars: [
      {
        title: "AI Overview & SGE Snapshot Optimization",
        description: "Structuring conversational answers and direct definitions that match the formatting triggers of generative search algorithms.",
      },
      {
        title: "Vector Entity Clustering & Salience Modeling",
        description: "Aligning on-page semantic entities with trusted industry ontology models (Wikidata, Schema.org, Crunchbase).",
      },
      {
        title: "LLM Source Grounding & Press Placements",
        description: "Securing authoritative citations across tier-1 editorial sources heavily weighted in foundational LLM training datasets.",
      },
      {
        title: "Conversational Prompt Telemetry",
        description: "Monitoring brand sentiment and citation presence across leading conversational search models.",
      },
    ],
    marketContext:
      "As search engines incorporate AI Overviews into standard search results, traditional click-through dynamics are evolving. Brands that capture AI citations protect their organic market share.",
    faqs: [
      {
        question: "How does AI SEO differ from traditional SEO?",
        answer: "Traditional SEO focuses on keyword rankings and backlinks; AI SEO optimizes entity relationships, vector content similarity, and citation authority for LLM ingestion.",
      },
      {
        question: "Can you track when AI models cite our website?",
        answer: "Yes, we track AI Overview inclusion, generative snippet citations, and conversational referral telemetry.",
      },
    ],
  },

  "aeo": {
    slug: "aeo",
    name: "Answer Engine Optimization (AEO)",
    shortName: "AEO",
    targetQuery: "AEO Agency",
    heroHeadline: "Win Position Zero & Direct Citations in Perplexity, SearchGPT & Voice AI",
    heroSubheadline:
      "Optimize your content for zero-click answer engines so your brand becomes the definitive answer when buyers ask complex conversational questions.",
    overview:
      "Answer Engine Optimization (AEO) prepares digital assets for conversational interfaces where users receive a single synthesized answer rather than a list of blue links. We structure direct response blocks, microdata, and schema markup to capture these high-intent answer slots.",
    keyPillars: [
      {
        title: "Direct Answer Architecture",
        description: "Structuring 40-60 word concise summary blocks directly addressing commercial and technical buyer queries.",
      },
      {
        title: "Perplexity & SearchGPT Inclusion Engineering",
        description: "Optimizing indexation and authoritative signals favored by real-time conversational retrieval models.",
      },
      {
        title: "FAQ & How-To Microdata Integration",
        description: "Deploying nested question-answer structured data to maximize eligibility for rich snippet ingestion.",
      },
      {
        title: "Voice Search Intent Alignment",
        description: "Targeting natural spoken syntax and long-tail conversational phrasing used on mobile and smart assistant devices.",
      },
    ],
    marketContext:
      "Decision-makers increasingly use answer engines like Perplexity for rapid vendor shortlisting. Capturing direct answer slots positions your business as the category consensus.",
    faqs: [
      {
        question: "What is the difference between AEO and AI SEO?",
        answer: "AI SEO focuses broadly on generative search snapshots within Google/Gemini; AEO specifically targets direct answer engines like Perplexity, SearchGPT, and voice assistants.",
      },
    ],
  },

  "ppc": {
    slug: "ppc",
    name: "Pay-Per-Click (PPC) Advertising",
    shortName: "PPC",
    targetQuery: "PPC Agency",
    heroHeadline: "High-ROAS Paid Search Campaigns Built to Maximize Revenue Per Click",
    heroSubheadline:
      "Eliminate wasted ad spend with precision keyword targeting, rigorous negative keyword lists, and high-converting landing page experiences.",
    overview:
      "PPC advertising provides instant market visibility when executed with surgical precision. We build granular account structures, deploy Smart Bidding guardrails, and continuously optimize ad copy to ensure profitable customer acquisition.",
    keyPillars: [
      {
        title: "Granular Single-Theme Ad Groups (STAG)",
        description: "Aligning ad copy and landing pages tightly with exact query intent to maximize Google Quality Scores and lower CPCs.",
      },
      {
        title: "Aggressive Negative Keyword Management",
        description: "Preventing budget leakage on irrelevant searches, job seekers, and low-intent queries.",
      },
      {
        title: "Continuous Responsive Search Ad (RSA) Testing",
        description: "A/B testing dynamic headlines, value propositions, and emotional triggers to increase click-through rates.",
      },
      {
        title: "Offline Conversion Tracking (OCT) Sync",
        description: "Feeding closed-won deal data back to bidding algorithms to train them on actual revenue rather than cheap leads.",
      },
    ],
    marketContext:
      "High competitive bidding across major markets means agencies that rely on automated broad match without oversight burn budget rapidly. We enforce strict ROI thresholds on every dollar spent.",
    faqs: [
      {
        question: "How do you prevent ad spend wastage?",
        answer: "Through daily negative keyword pruning, exact/phrase match emphasis, bid caps, and strict audience exclusions.",
      },
    ],
  },

  "google-ads": {
    slug: "google-ads",
    name: "Google Ads Management",
    shortName: "Google Ads",
    targetQuery: "Google Ads Agency",
    heroHeadline: "Scale Inbound Demand With Expertly Managed Google Search & Shopping Ads",
    heroSubheadline:
      "Partner with certified Google Ads specialists who know how to unlock profitable scale across Search, Performance Max, YouTube, and Display.",
    overview:
      "Google Ads is the world's most powerful intent-driven advertising platform. We combine deep audience insights with advanced bidding algorithms to deliver predictable, profitable revenue streams for B2B, eCommerce, and professional services.",
    keyPillars: [
      {
        title: "Search & Performance Max Campaign Synergies",
        description: "Segmenting high-margin assets, brand protection campaigns, and non-brand acquisition silos.",
      },
      {
        title: "First-Party Audience Segmentation",
        description: "Leveraging Customer Match and high-intent remarketing lists to maximize lifetime customer value.",
      },
      {
        title: "Product Feed Optimization for Merchant Center",
        description: "Enhancing titles, attributes, and custom labels to improve Google Shopping placement quality.",
      },
      {
        title: "Server-Side Enhanced Conversions",
        description: "Restoring accurate measurement and attribution despite browser cookie restrictions.",
      },
    ],
    marketContext:
      "Managing Google Ads in competitive international sectors requires deep technical tracking, creative testing, and active bid management to stay ahead of automated competitor scripts.",
    faqs: [
      {
        question: "Do we retain complete ownership of our Google Ads account?",
        answer: "Yes, always. You own all campaign assets, data history, and billing directly in your account.",
      },
    ],
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    name: "Social Media Marketing & Paid Social",
    shortName: "Social Media Marketing",
    targetQuery: "Social Media Marketing Agency",
    heroHeadline: "Build Brand Authority & Scale Revenue Across Meta, LinkedIn & TikTok",
    heroSubheadline:
      "Transform social feeds into powerful revenue channels with scroll-stopping creative, native video content, and targeted paid social funnels.",
    overview:
      "Social media marketing requires a balance of cultural relevance and performance analytics. We engineer high-converting paid social campaigns and engaging organic content that captures attention and nurtures active community engagement.",
    keyPillars: [
      {
        title: "Performance Creative Testing Framework",
        description: "Testing 30+ visual hooks, UGC formats, and value propositions monthly to combat ad fatigue.",
      },
      {
        title: "Full-Funnel Paid Social Architecture",
        description: "Guiding prospects from cold awareness through consideration to high-converting retargeting.",
      },
      {
        title: "Native Short-Form Video Production",
        description: "Producing engaging Reels, TikToks, and Shorts that build authentic trust with modern audiences.",
      },
      {
        title: "First-Party Conversions API (CAPI) Integration",
        description: "Ensuring 100% data fidelity between social platforms and your business CRM.",
      },
    ],
    marketContext:
      "Audiences make buying decisions based on social proof and brand authenticity. A cohesive social media engine creates brand affinity that supports all other acquisition channels.",
    faqs: [
      {
        question: "Which social platforms are best for our business?",
        answer: "We recommend platforms based on your target buyer: LinkedIn for B2B enterprise; Meta and TikTok for eCommerce and consumer services.",
      },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    name: "Strategic Content Marketing",
    shortName: "Content Marketing",
    targetQuery: "Content Marketing Agency",
    heroHeadline: "Authority-Building Content That Educates Buyers & Drives Inbound Demand",
    heroSubheadline:
      "Move beyond generic blog posts. We produce research-backed whitepapers, comprehensive guides, and topic clusters that establish category leadership.",
    overview:
      "Content marketing is the vehicle that delivers search visibility, social engagement, and customer education. We engineer commercial content assets that solve tangible client problems and naturally funnel readers toward booking consultations or making purchases.",
    keyPillars: [
      {
        title: "Topic Cluster & Content Hub Architecture",
        description: "Developing pillar content libraries that demonstrate undeniable topical depth to search engines.",
      },
      {
        title: "Data Studies & Original Industry Research",
        description: "Conducting proprietary surveys and benchmarks that earn organic media citations and authoritative backlinks.",
      },
      {
        title: "Conversion-Focused Copywriting",
        description: "Embedding strategic lead magnets, calculators, and contextual CTAs that capture qualified buyers.",
      },
      {
        title: "Multi-Channel Repurposing Engine",
        description: "Transforming long-form guides into executive LinkedIn carousels, newsletters, and video scripts.",
      },
    ],
    marketContext:
      "B2B and high-ticket consumers read multiple pieces of content before reaching out to sales. High-caliber educational content shortens sales cycles significantly.",
    faqs: [
      {
        question: "Who writes the content?",
        answer: "Experienced industry writers with subject-matter expertise, supervised by senior growth strategists and technical editors.",
      },
    ],
  },

  "ecommerce-marketing": {
    slug: "ecommerce-marketing",
    name: "Full-Funnel E-commerce Marketing",
    shortName: "E-commerce Marketing",
    targetQuery: "Ecommerce Marketing Agency",
    heroHeadline: "Scale Online Store GMV with High-ROAS Ads, SEO & Customer Retention",
    heroSubheadline:
      "Grow your Shopify, WooCommerce, or Magento storefront with profitable Google Shopping campaigns, Meta Advantage+ ads, and automated email/SMS flows.",
    overview:
      "E-commerce marketing requires coordinating customer acquisition, on-site conversion rate optimization (CRO), and post-purchase customer lifetime value (LTV). We build cohesive growth loops that turn first-time visitors into repeat purchasers.",
    keyPillars: [
      {
        title: "Google Shopping & Performance Max Optimization",
        description: "Optimizing product catalog feeds, custom labels, and ROAS target bidding for top SKUs.",
      },
      {
        title: "Meta Advantage+ & Dynamic Product Ads",
        description: "Deploying high-converting catalog ads and UGC video creative that drive cart additions.",
      },
      {
        title: "Automated Email & SMS Retention Flows",
        description: "Configuring Klaviyo flows for abandoned carts, browse abandonment, post-purchase cross-sells, and VIP winbacks.",
      },
      {
        title: "Storefront UX & Checkout CRO",
        description: "Streamlining mobile navigation, product filtering, and cart checkout to minimize drop-offs.",
      },
    ],
    marketContext:
      "With rising customer acquisition costs in retail eCommerce, stores cannot rely on single-channel ads alone. A balanced acquisition and retention engine is essential for profit margins.",
    faqs: [
      {
        question: "Which eCommerce platforms do you support?",
        answer: "Shopify, Shopify Plus, WooCommerce, Magento (Adobe Commerce), BigCommerce, and headless setups.",
      },
    ],
  },

  "b2b-marketing": {
    slug: "b2b-marketing",
    name: "B2B Demand Generation & ABM",
    shortName: "B2B Marketing",
    targetQuery: "B2B Marketing Agency",
    heroHeadline: "Win Enterprise Deals With Targeted Account-Based Marketing & Demand Gen",
    heroSubheadline:
      "Engage C-suite and VP decision-makers across high-value target accounts with unified LinkedIn campaigns, search capture, and sales-enablement content.",
    overview:
      "B2B marketing operates on longer sales cycles, multiple stakeholders, and high deal values. We build targeted demand generation systems that create brand preference early in the buying cycle and accelerate pipeline velocity.",
    keyPillars: [
      {
        title: "Account-Based Marketing (ABM) Frameworks",
        description: "Targeting specific enterprise account tiers with tailored messaging across LinkedIn and programmatic display.",
      },
      {
        title: "High-Intent B2B Search Capture",
        description: "Dominating transactional software, consulting, and enterprise service keywords on Google Search.",
      },
      {
        title: "Executive Thought Leadership & Lead Gen Forms",
        description: "Deploying frictionless native LinkedIn forms paired with compelling research whitepapers.",
      },
      {
        title: "Full-Funnel CRM & Pipeline Attribution",
        description: "Integrating with HubSpot and Salesforce to track marketing influence on closed-won revenue.",
      },
    ],
    marketContext:
      "B2B buyers conduct over 70% of their research independently before talking to sales. Strong digital presence across decision-maker channels is critical for deal flow.",
    faqs: [
      {
        question: "How do you qualify B2B leads before passing them to sales?",
        answer: "We implement lead scoring based on company size, job title, engagement depth, and verified business email verification.",
      },
    ],
  },

  "performance-marketing": {
    slug: "performance-marketing",
    name: "Data-Driven Performance Marketing",
    shortName: "Performance Marketing",
    targetQuery: "Performance Marketing Agency",
    heroHeadline: "Scientific, Cross-Channel Media Buying Tuned for Maximum Blended ROAS",
    heroSubheadline:
      "We eliminate marketing guesswork. Every campaign is engineered around customer acquisition cost (CAC), lifetime value (LTV), and bottom-line margin expansion.",
    overview:
      "Performance marketing treats advertising capital as a strategic investment with measurable returns. We allocate media budgets dynamically across search, social, and display based on real-time margin performance and conversion telemetry.",
    keyPillars: [
      {
        title: "Algorithmic Cross-Channel Budget Allocation",
        description: "Shifting daily spend to whichever platform and creative asset delivers the lowest marginal CAC.",
      },
      {
        title: "Server-Side Multi-Touch Attribution",
        description: "Implementing first-party attribution modeling to properly credit top-of-funnel and assisted conversions.",
      },
      {
        title: "Rapid Creative Iteration Sprints",
        description: "Systematically testing variations in visual angles, copy hooks, and value drivers to continually lower acquisition costs.",
      },
      {
        title: "24/7 Real-Time Performance Dashboards",
        description: "Live Looker Studio reports tracking spend, blended ROAS, CPA, and revenue without vanity metrics.",
      },
    ],
    marketContext:
      "Scaling brands need predictable unit economics. Our performance frameworks protect profit margins while aggressively pursuing market share.",
    faqs: [
      {
        question: "What metrics do you prioritize in reporting?",
        answer: "We focus on Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Customer Lifetime Value (LTV), and net revenue generated.",
      },
    ],
  },
};

/* =========================================================================
   2. 10 TARGET COUNTRIES & THEIR CITIES WITH LOCALIZED CONTEXT
   ========================================================================= */

export const TARGET_COUNTRIES: CountryDefinition[] = [
  {
    slug: "usa",
    name: "United States",
    shortName: "USA",
    region: "North America",
    tier: 1,
    economicHub: "New York, San Francisco, Chicago",
    marketOverview:
      "The United States is the world's largest and most competitive digital advertising market. Brands competing in the US face elevated ad auction costs and sophisticated search algorithms, requiring strict technical precision, semantic content depth, and multi-channel attribution.",
    businessEnvironment:
      "American businesses prioritize rapid time-to-market, clear ROI metrics, and transparent growth partners. Decision-makers demand data-backed execution over generic promises.",
    digitalGrowthChallenges:
      "Elevated Google Ads cost-per-click (CPC) rates, aggressive competitor SEO investments, and rapid adoption of AI Overviews in standard search results.",
    localSearchBehavior:
      "US consumers rely heavily on Google Maps 3-packs, localized reviews, and conversational voice queries for regional purchasing decisions.",
    ppcMarketDynamics:
      "High auction density across commercial queries requires strict negative keyword hygiene, automated Smart Bidding guardrails, and landing page speed optimization.",
    ecommerceLandscape:
      "Dominated by Shopify Plus and Amazon integrations, where omnichannel presence, customer lifetime value (LTV), and Klaviyo retention flows dictate profitability.",
    b2bLandscape:
      "Longer buying cycles with multiple decision-makers; Account-Based Marketing (ABM) on LinkedIn and high-intent Google Search capture are essential for enterprise deal flow.",
    topIndustries: ["SaaS & Enterprise Tech", "E-commerce & D2C", "Healthcare & Telehealth", "Financial Services", "Real Estate"],
    cities: [
      {
        slug: "new-york",
        name: "New York",
        stateOrRegion: "NY",
        countrySlug: "usa",
        marketHighlights: "Global financial and media capital with intense commercial search competition and high client acquisition values.",
        businessLandscape: "Home to Fortune 500 headquarters, rapid-growth fintech startups, high-end retail brands, and prestigious professional service firms.",
        keyIndustries: ["Finance & Fintech", "Media & Advertising", "D2C Fashion & Luxury", "Corporate Law", "B2B Tech"],
        localSearchDynamics: "High mobile search volume with strong local 3-pack intent across Manhattan and the outer boroughs.",
      },
      {
        slug: "los-angeles",
        name: "Los Angeles",
        stateOrRegion: "CA",
        countrySlug: "usa",
        marketHighlights: "Creative capital of the world, driving lifestyle eCommerce, entertainment marketing, and direct-to-consumer brand innovation.",
        businessLandscape: "Thriving ecosystem of influencer-led brands, entertainment studios, wellness technology, and innovative consumer products.",
        keyIndustries: ["Entertainment & Media", "Beauty & Wellness D2C", "Consumer Tech", "Real Estate", "Apparel"],
        localSearchDynamics: "Visual search and social-first discovery play an outsized role in regional purchasing decisions.",
      },
      {
        slug: "chicago",
        name: "Chicago",
        stateOrRegion: "IL",
        countrySlug: "usa",
        marketHighlights: "Major Midwest commercial hub with strong enterprise B2B, industrial tech, and consumer goods distribution.",
        businessLandscape: "Balanced economy featuring manufacturing leaders, financial exchanges, food processing conglomerates, and enterprise SaaS companies.",
        keyIndustries: ["B2B Manufacturing", "Logistics & Supply Chain", "Fintech & Exchanges", "Healthcare", "Food & Beverage"],
        localSearchDynamics: "High commercial B2B search density and strong intent for established local business partners.",
      },
      {
        slug: "houston",
        name: "Houston",
        stateOrRegion: "TX",
        countrySlug: "usa",
        marketHighlights: "Energy and healthcare powerhouse experiencing rapid corporate expansion and international trade growth.",
        businessLandscape: "World-class medical complexes, energy transition innovators, engineering consultancies, and commercial development firms.",
        keyIndustries: ["Energy & Cleantech", "Healthcare & Life Sciences", "Aerospace", "Commercial Construction", "International Trade"],
        localSearchDynamics: "Expansive geographic metro footprint requiring multi-location geo-targeted SEO clusters.",
      },
      {
        slug: "miami",
        name: "Miami",
        stateOrRegion: "FL",
        countrySlug: "usa",
        marketHighlights: "Rapidly growing gateway to Latin America with surging tech investment, luxury real estate, and crypto commerce.",
        businessLandscape: "Dynamic market attracting international capital, venture-backed startups, hospitality groups, and luxury lifestyle brands.",
        keyIndustries: ["Luxury Real Estate", "Hospitality & Tourism", "Fintech & Web3", "International Trade", "Healthcare"],
        localSearchDynamics: "Bi-lingual search behavior (English & Spanish) requiring localized semantic content optimization.",
      },
      {
        slug: "san-francisco",
        name: "San Francisco",
        stateOrRegion: "CA",
        countrySlug: "usa",
        marketHighlights: "The global center of artificial intelligence, venture capital, and cutting-edge software development.",
        businessLandscape: "High density of tech startups, AI innovators, enterprise SaaS platforms, and digital-first venture funds.",
        keyIndustries: ["Artificial Intelligence", "Enterprise SaaS", "Venture Capital", "Biotech", "Developer Tools"],
        localSearchDynamics: "Extreme tech-literacy among buyers; priority placed on technical SEO, AEO, and developer-focused content.",
      },
      {
        slug: "austin",
        name: "Austin",
        stateOrRegion: "TX",
        countrySlug: "usa",
        marketHighlights: "Booming tech hub known as Silicon Hills, attracting major corporate relocations and high-growth startups.",
        businessLandscape: "Vibrant ecosystem of software enterprises, consumer brands, clean tech developers, and creative agencies.",
        keyIndustries: ["Technology & Software", "Consumer Packaged Goods (CPG)", "Clean Energy", "Real Estate", "Digital Media"],
        localSearchDynamics: "Rapid population expansion driving high local service search query volume.",
      },
    ],
  },

  {
    slug: "uk",
    name: "United Kingdom",
    shortName: "UK",
    region: "Europe",
    tier: 1,
    economicHub: "London, Manchester, Birmingham",
    marketOverview:
      "The UK possesses one of the highest eCommerce penetration rates globally and a mature, sophisticated digital marketing ecosystem. British consumers and businesses demand brand authenticity, data privacy compliance (GDPR), and clear commercial propositions.",
    businessEnvironment:
      "Companies in the UK value transparent reporting, adherence to British English tone and spelling, and proven case studies within competitive European verticals.",
    digitalGrowthChallenges:
      "Intense retail competition, stringent data protection regulations, and high CPCs across finance, legal, and luxury consumer goods.",
    localSearchBehavior:
      "Localized queries heavily feature postal codes, boroughs, and specific town centers. Google Maps 3-packs heavily influence foot traffic.",
    ppcMarketDynamics:
      "High mobile search usage requires aggressive bid adjustments for mobile shoppers and tightly targeted remarketing lists.",
    ecommerceLandscape:
      "One of the world's most developed online shopping markets; fast shipping guarantees, reviews, and Klarna/ClearPay options significantly boost checkout conversion.",
    b2bLandscape:
      "London serves as Europe's primary financial and legal hub, creating enormous demand for sophisticated B2B LinkedIn ads and thought-leadership content.",
    topIndustries: ["Fintech & Banking", "Fashion & Lifestyle Retail", "Professional Services", "Life Sciences", "Property & Real Estate"],
    cities: [
      {
        slug: "london",
        name: "London",
        countrySlug: "uk",
        marketHighlights: "Europe's leading financial and tech ecosystem with massive domestic and international digital demand.",
        businessLandscape: "Global banking headquarters, international retail flagships, scale-ups in Shoreditch, and top-tier legal consultancies.",
        keyIndustries: ["Fintech & Banking", "Global Luxury Retail", "Professional Services", "B2B SaaS", "Hospitality"],
        localSearchDynamics: "Borough-specific search queries (Westminster, City of London, Camden) require granular local SEO.",
      },
      {
        slug: "manchester",
        name: "Manchester",
        countrySlug: "uk",
        marketHighlights: "The digital powerhouse of Northern England, known for fast-fashion eCommerce and media innovation.",
        businessLandscape: "MediaCityUK hub, major D2C retail brands, creative technology agencies, and university research spin-offs.",
        keyIndustries: ["Fast Fashion & eCommerce", "Digital Media", "Tech Startups", "Healthcare", "Education"],
        localSearchDynamics: "High engagement on social commerce and rapid growth in regional business-to-business searches.",
      },
      {
        slug: "birmingham",
        name: "Birmingham",
        countrySlug: "uk",
        marketHighlights: "The UK's second city with extensive commercial redevelopment, advanced manufacturing, and financial services.",
        businessLandscape: "Centrally located commercial hub attracting major banking expansions and advanced engineering enterprises.",
        keyIndustries: ["Manufacturing & Engineering", "Commercial Banking", "Retail & Distribution", "Construction", "Professional Services"],
        localSearchDynamics: "Midlands regional commercial queries with emphasis on local supplier verification.",
      },
      {
        slug: "leeds",
        name: "Leeds",
        countrySlug: "uk",
        marketHighlights: "Major financial and legal services center with a rapidly expanding digital health and tech cluster.",
        businessLandscape: "Second only to London for financial services employment, with large insurance, banking, and medical tech firms.",
        keyIndustries: ["Financial & Legal Services", "Healthtech", "Digital Agencies", "Retail", "Manufacturing"],
        localSearchDynamics: "High commercial search intent for professional consulting and regional enterprise suppliers.",
      },
      {
        slug: "bristol",
        name: "Bristol",
        countrySlug: "uk",
        marketHighlights: "Creative, aerospace, and green technology leader in the South West with high digital adoption.",
        businessLandscape: "Renowned for sustainability enterprises, aerospace engineering, animation studios, and boutique software houses.",
        keyIndustries: ["Aerospace & Defense", "Clean Technology", "Creative Media", "Tech Startups", "Education"],
        localSearchDynamics: "Values-driven local search behavior emphasizing sustainability and authentic brand credentials.",
      },
    ],
  },

  {
    slug: "australia",
    name: "Australia",
    shortName: "Australia",
    region: "Asia-Pacific",
    tier: 1,
    economicHub: "Sydney, Melbourne, Brisbane",
    marketOverview:
      "Australia represents a high-purchasing-power market with strong digital consumption across major coastal metropolitan centers. Australian businesses value straightforward, no-nonsense growth partners who understand local consumer nuances and regional supply chains.",
    businessEnvironment:
      "Australian companies appreciate pragmatic, data-focused growth strategies. Regional time zones require localized support and customized pacing.",
    digitalGrowthChallenges:
      "High cost-per-acquisition across competitive metropolitan areas and geographic dispersion between state capitals.",
    localSearchBehavior:
      "Suburb-level search intent is critical; Australian consumers search by specific postcodes and coastal suburbs.",
    ppcMarketDynamics:
      "Concentrated competition in Sydney and Melbourne requires smart geo-fencing and negative keyword filtering to maximize ROI.",
    ecommerceLandscape:
      "Rapidly expanding eCommerce adoption with high mobile usage and emphasis on reliable domestic logistics and payment solutions like Afterpay.",
    b2bLandscape:
      "Strong demand for enterprise mining tech, financial services, and commercial real estate solutions across major CBD centers.",
    topIndustries: ["Mining & Resources Tech", "Financial Services", "Retail & D2C", "Construction & Real Estate", "Healthcare"],
    cities: [
      {
        slug: "sydney",
        name: "Sydney",
        stateOrRegion: "NSW",
        countrySlug: "australia",
        marketHighlights: "Australia's primary financial capital and tech headquarters hub with intensive commercial competition.",
        businessLandscape: "Leading corporate headquarters, venture-backed tech unicorns, major banks, and international luxury retail.",
        keyIndustries: ["Banking & Fintech", "Enterprise Software", "Commercial Real Estate", "Luxury Retail", "Tourism"],
        localSearchDynamics: "High density of CBD and suburban commercial searches across Eastern Suburbs, North Sydney, and Western Sydney.",
      },
      {
        slug: "melbourne",
        name: "Melbourne",
        stateOrRegion: "VIC",
        countrySlug: "australia",
        marketHighlights: "The cultural and retail capital of Australia, driving cutting-edge eCommerce, hospitality, and creative media.",
        businessLandscape: "Dense concentration of D2C lifestyle brands, creative agencies, biomedical research hubs, and hospitality leaders.",
        keyIndustries: ["Retail & D2C Fashion", "Biomedical & Healthcare", "Hospitality", "Creative Media", "Professional Services"],
        localSearchDynamics: "Community-centric search patterns with strong emphasis on reviews and localized brand stories.",
      },
      {
        slug: "brisbane",
        name: "Brisbane",
        stateOrRegion: "QLD",
        countrySlug: "australia",
        marketHighlights: "Rapidly expanding economic center gearing up for the 2032 Olympic Games with massive infrastructure growth.",
        businessLandscape: "Booming construction sector, tourism enterprises, mining services, and emerging tech startups.",
        keyIndustries: ["Infrastructure & Construction", "Tourism & Hospitality", "Resources & Energy", "Healthcare", "Tech Startups"],
        localSearchDynamics: "Significant influx of interstate relocations driving high local service search volume.",
      },
      {
        slug: "perth",
        name: "Perth",
        stateOrRegion: "WA",
        countrySlug: "australia",
        marketHighlights: "Global resource and mining headquarters hub with deep international capital connections across Asia.",
        businessLandscape: "High-value mining consultancies, engineering enterprises, maritime services, and commercial property.",
        keyIndustries: ["Mining & Resources", "Engineering & Construction", "Clean Energy", "Agriculture", "Commercial Services"],
        localSearchDynamics: "Heavy B2B commercial intent with international procurement search patterns.",
      },
      {
        slug: "adelaide",
        name: "Adelaide",
        stateOrRegion: "SA",
        countrySlug: "australia",
        marketHighlights: "Innovation hub recognized for defense manufacturing, space technology, and premium wine/food production.",
        businessLandscape: "Lot Fourteen innovation district, national defense shipbuilding, renewable energy projects, and agricultural exports.",
        keyIndustries: ["Defense & Aerospace", "Renewable Energy", "Agribusiness & Wine", "Health & Medical", "Education"],
        localSearchDynamics: "Tight-knit regional business community where verified reputation and local credibility are vital.",
      },
    ],
  },

  {
    slug: "canada",
    name: "Canada",
    shortName: "Canada",
    region: "North America",
    tier: 1,
    economicHub: "Toronto, Vancouver, Montreal",
    marketOverview:
      "Canada combines high consumer purchasing power with strong cross-border trade and a thriving technology ecosystem. Brands operating in Canada benefit from close alignment with North American consumer habits alongside distinct regional market characteristics.",
    businessEnvironment:
      "Canadian businesses value reliability, long-term partnerships, data compliance with PIPEDA, and bilingual capability in Quebec.",
    digitalGrowthChallenges:
      "Geographic distances impacting shipping economics, bilingual French/English requirements in eastern provinces, and competitive ad auctions in major metros.",
    localSearchBehavior:
      "Postal-code and neighborhood-level search intent dominate Canadian cities; Google Maps reviews heavily guide service selections.",
    ppcMarketDynamics:
      "Cost-effective alternative to US ad auctions while delivering similar customer lifetime value for international brands.",
    ecommerceLandscape:
      "High adoption of Shopify (founded in Canada), with consumers placing a premium on transparent customs/duties and domestic fulfillment.",
    b2bLandscape:
      "Dense B2B technology corridors in the Toronto-Waterloo region, Montreal's AI cluster, and Vancouver's clean tech corridor.",
    topIndustries: ["Fintech & Banking", "Artificial Intelligence & SaaS", "Clean Technology", "Natural Resources", "Retail & D2C"],
    cities: [
      {
        slug: "toronto",
        name: "Toronto",
        stateOrRegion: "ON",
        countrySlug: "canada",
        marketHighlights: "Canada's financial engine and fourth largest city in North America, with a bustling tech and commercial market.",
        businessLandscape: "Bay Street financial core, burgeoning AI startups in the downtown core, major media headquarters, and multinational corporations.",
        keyIndustries: ["Financial Services & Banking", "Enterprise Tech & AI", "Healthcare & Life Sciences", "Media", "Real Estate"],
        localSearchDynamics: "High volume of commercial queries across the Greater Toronto Area (GTA).",
      },
      {
        slug: "vancouver",
        name: "Vancouver",
        stateOrRegion: "BC",
        countrySlug: "canada",
        marketHighlights: "Pacific gateway city leading in clean technology, digital entertainment, and Asian trade corridors.",
        businessLandscape: "Thriving video game development, film production, green energy consultancies, and Asian-facing trade firms.",
        keyIndustries: ["Clean Tech & Green Building", "Digital Entertainment & Gaming", "International Trade", "Real Estate", "Tourism"],
        localSearchDynamics: "High mobile and lifestyle search adoption with strong demand for eco-conscious brands.",
      },
      {
        slug: "montreal",
        name: "Montreal",
        stateOrRegion: "QC",
        countrySlug: "canada",
        marketHighlights: "Bilingual cultural and technological metropolis renowned as a global powerhouse in deep learning and AI research.",
        businessLandscape: "MILA AI institute hub, aerospace manufacturing leaders, video game studios, and creative design consultancies.",
        keyIndustries: ["Artificial Intelligence & Deep Learning", "Aerospace", "Gaming & VFX", "Life Sciences", "Fashion Retail"],
        localSearchDynamics: "Bilingual search dynamics (French & English) requiring precise semantic localization.",
      },
      {
        slug: "calgary",
        name: "Calgary",
        stateOrRegion: "AB",
        countrySlug: "canada",
        marketHighlights: "Corporate energy capital of Canada with an accelerating diversification into agricultural technology and logistics.",
        businessLandscape: "Highest concentration of corporate head offices per capita in Canada, expanding into software and cleantech.",
        keyIndustries: ["Energy & Cleantech", "Agtech", "Transportation & Logistics", "Financial Services", "Aerospace"],
        localSearchDynamics: "High B2B procurement and commercial enterprise search volumes.",
      },
      {
        slug: "ottawa",
        name: "Ottawa",
        stateOrRegion: "ON",
        countrySlug: "canada",
        marketHighlights: "The nation's capital and a major telecommunications and government-tech research hub (Kanata North).",
        businessLandscape: "Kanata tech park, federal procurement, defense contractors, and SaaS leaders like Shopify.",
        keyIndustries: ["GovTech & Defense", "Telecommunications", "Software & SaaS", "Public Sector Services", "Healthcare"],
        localSearchDynamics: "Stable public-sector and enterprise B2B search behavior with emphasis on compliance.",
      },
    ],
  },

  {
    slug: "uae",
    name: "United Arab Emirates",
    shortName: "UAE",
    region: "Middle East",
    tier: 1,
    economicHub: "Dubai, Abu Dhabi, Sharjah",
    marketOverview:
      "The UAE is the premier business and financial crossroads of the Middle East, North Africa, and South Asia. With a tech-savvy expatriate population exceeding 85%, high mobile penetration, and visionary government initiatives, digital marketing in the Emirates operates at lightning speed.",
    businessEnvironment:
      "Companies in the UAE prioritize premium visual aesthetics, rapid WhatsApp communication channels, proven enterprise credentials, and agile delivery.",
    digitalGrowthChallenges:
      "Hyper-competitive international advertising space, multi-cultural audience segmentation, and the rapid pace of market expansion in Dubai.",
    localSearchBehavior:
      "Mobile search dominates over 90% of queries, with extensive use of Google Maps, WhatsApp instant chat buttons, and Instagram discovery.",
    ppcMarketDynamics:
      "Intense paid search competition across luxury real estate, financial services, healthcare, and tourism drives high demand for precision bidding and conversion optimization.",
    ecommerceLandscape:
      "Fast-growing luxury and retail eCommerce market with high average order values (AOV) and high expectation for same-day delivery and cash-on-delivery/Tabby options.",
    b2bLandscape:
      "Free-zone business setups, international trade consultancies, and sovereign wealth entities create lucrative demand for targeted B2B LinkedIn funnels and executive thought leadership.",
    topIndustries: ["Luxury Real Estate", "Fintech & Wealth Management", "Tourism & Hospitality", "International Trade & Logistics", "Healthcare & Aesthetics"],
    cities: [
      {
        slug: "dubai",
        name: "Dubai",
        countrySlug: "uae",
        marketHighlights: "Global commercial capital connecting East and West, renowned for bold innovation, luxury lifestyle, and rapid digital adoption.",
        businessLandscape: "DIFC financial hub, Dubai Internet City tech campus, massive luxury real estate developers, and international trading conglomerates.",
        keyIndustries: ["Luxury Real Estate", "Fintech & Web3", "Hospitality & Tourism", "E-commerce & Retail", "Corporate Services"],
        localSearchDynamics: "Extremely competitive search environment where first-page placement on commercial terms yields millions in deal flow.",
      },
      {
        slug: "abu-dhabi",
        name: "Abu Dhabi",
        countrySlug: "uae",
        marketHighlights: "The capital of the UAE and seat of sovereign wealth, driving energy transition, aerospace, and high-tech industry.",
        businessLandscape: "ADGM international financial center, sovereign wealth funds (ADIA, Mubadala), defense contractors, and energy conglomerates.",
        keyIndustries: ["Government & Sovereign Wealth", "Energy & Renewables", "Aerospace & Defense", "Healthcare", "Financial Services"],
        localSearchDynamics: "Enterprise B2B and institutional search intent with stringent verification and compliance demands.",
      },
      {
        slug: "sharjah",
        name: "Sharjah",
        countrySlug: "uae",
        marketHighlights: "The cultural, educational, and industrial manufacturing hub of the Emirates with strong domestic trading roots.",
        businessLandscape: "Extensive industrial zones, University City education campuses, publishing hubs, and logistics centers.",
        keyIndustries: ["Manufacturing & Industrial", "Education & Publishing", "Logistics & Maritime", "Construction Materials", "Retail"],
        localSearchDynamics: "Commercial B2B search queries focusing on manufacturing supply, equipment, and regional distribution.",
      },
    ],
  },

  {
    slug: "germany",
    name: "Germany",
    shortName: "Germany",
    region: "Europe",
    tier: 2,
    economicHub: "Berlin, Munich, Frankfurt, Hamburg",
    marketOverview:
      "Germany is Europe's largest economy, driven by world-leading industrial engineering, Mittelstand enterprises, and a burgeoning digital technology scene. Success in the German market demands rigorous data protection compliance (GDPR), meticulous technical execution, and formal, authoritative communication.",
    businessEnvironment:
      "German decision-makers demand concrete technical data, security certifications, and detailed project specifications over promotional marketing hype.",
    digitalGrowthChallenges:
      "Strict data privacy laws, cookie consent stringency, and a customer base that requires high trust before engaging.",
    localSearchBehavior:
      "Systematic search intent with high emphasis on reviews, certifications (TÜV, ISO), and thorough technical comparison reading.",
    ppcMarketDynamics:
      "High search query precision; German users use specific compound nouns requiring exhaustive keyword variation planning.",
    ecommerceLandscape:
      "Mature retail market with strong preference for invoice payment (Rechnungskauf) and high expectations for clear return policies.",
    b2bLandscape:
      "World-class industrial B2B market with massive demand for technical SEO, whitepapers, and engineering-focused inbound lead generation.",
    topIndustries: ["Automotive & Engineering", "Industrial Manufacturing", "Fintech & Banking", "Enterprise Software", "Chemicals & Life Sciences"],
    cities: [],
  },

  {
    slug: "singapore",
    name: "Singapore",
    shortName: "Singapore",
    region: "Asia-Pacific",
    tier: 2,
    economicHub: "Singapore CBD, Marina Bay, One-North",
    marketOverview:
      "Singapore is the primary financial and technology gateway to Southeast Asia. With hyper-fast connectivity, a business-friendly regulatory framework, and regional headquarters for Fortune 500 tech firms, Singapore represents a vital hub for regional digital campaigns.",
    businessEnvironment:
      "Efficient, transparent, and digitally advanced. Decision-makers expect rapid project initiation, structured communication, and regional scalability.",
    digitalGrowthChallenges:
      "Compact geographic market with intense competition among regional headquarters for qualified commercial traffic.",
    localSearchBehavior:
      "Near-100% smartphone search penetration with heavy reliance on Google Maps, WhatsApp business integrations, and conversational English search syntax.",
    ppcMarketDynamics:
      "High CPC rates in financial and enterprise technology verticals offset by high transaction values across ASEAN business networks.",
    ecommerceLandscape:
      "Highly developed online commerce ecosystem with cross-border shopping and seamless digital wallet payments (PayNow).",
    b2bLandscape:
      "Dense concentration of regional decision-makers; LinkedIn Ads and high-authority search marketing deliver direct access to ASEAN executives.",
    topIndustries: ["Fintech & Banking", "Regional Enterprise Tech", "Maritime & Logistics", "Wealth Management", "Biomedical Sciences"],
    cities: [],
  },

  {
    slug: "netherlands",
    name: "Netherlands",
    shortName: "Netherlands",
    region: "Europe",
    tier: 2,
    economicHub: "Amsterdam, Rotterdam, Utrecht, The Hague",
    marketOverview:
      "The Netherlands is one of Europe's most digitally connected and open economies. With exceptional English proficiency, a vibrant startup ecosystem in Amsterdam, and major European logistics gateways, the Dutch market offers immense digital growth opportunities.",
    businessEnvironment:
      "Direct, pragmatic, and highly receptive to digital innovation. Dutch companies value transparency, lean execution, and measurable outcomes.",
    digitalGrowthChallenges:
      "Compact but sophisticated market where consumers and businesses quickly spot and dismiss low-quality or generic marketing copy.",
    localSearchBehavior:
      "Dual search behavior in both Dutch and English across professional and technology sectors.",
    ppcMarketDynamics:
      "High click efficiency and fast conversion velocity when landing pages deliver concise, clear value propositions.",
    ecommerceLandscape:
      "Dominated by domestic payment solution iDEAL; smooth mobile checkout and rapid delivery expectations are mandatory.",
    b2bLandscape:
      "Strong demand for international software, logistics platforms, and sustainable agricultural/water technology services.",
    topIndustries: ["Fintech & Trade", "Transportation & Logistics", "Agtech & Horticulture", "Life Sciences", "Creative Technology"],
    cities: [],
  },

  {
    slug: "ireland",
    name: "Ireland",
    shortName: "Ireland",
    region: "Europe",
    tier: 2,
    economicHub: "Dublin, Cork, Galway",
    marketOverview:
      "Ireland is Europe's premier technology headquarters hub, hosting the European bases of Google, Meta, Apple, and Microsoft. Its English-speaking, pro-business environment makes it a strategic market for international B2B and SaaS marketing.",
    businessEnvironment:
      "Relationship-oriented and digitally native. Decision-makers appreciate agile teams that can scale campaigns across European markets.",
    digitalGrowthChallenges:
      "Competition for talent and visibility in Dublin's 'Silicon Docks' requires distinctive positioning and authentic proof points.",
    localSearchBehavior:
      "High local search reliance in Dublin and regional cities; personal recommendations and established brand reputation carry high weight.",
    ppcMarketDynamics:
      "High-performing test market for pan-European and North American B2B campaigns due to demographic similarities with the US and UK.",
    ecommerceLandscape:
      "Healthy eCommerce spending with growing preference for sustainable packaging and seamless cross-border UK/EU delivery.",
    b2bLandscape:
      "Exceptional density of SaaS and enterprise software buyers, creating fertile ground for Account-Based Marketing and digital PR.",
    topIndustries: ["Technology & SaaS", "Pharmaceuticals & MedTech", "Financial Services & Funds", "Agrifood", "Aviation Leasing"],
    cities: [],
  },

  {
    slug: "new-zealand",
    name: "New Zealand",
    shortName: "New Zealand",
    region: "Asia-Pacific",
    tier: 2,
    economicHub: "Auckland, Wellington, Christchurch",
    marketOverview:
      "New Zealand is an innovative, high-trust digital economy with a collaborative business culture. Kiwi businesses look for growth partners who appreciate the local market scale while bringing world-class international performance standards.",
    businessEnvironment:
      "Values authenticity, fair dealing, and sustainable practices. High word-of-mouth referral dynamics mean reputation is paramount.",
    digitalGrowthChallenges:
      "Smaller overall population base requiring highly efficient ad spending and tight conversion funnel management to maximize ROI.",
    localSearchBehavior:
      "Strong community and suburb-level search habits; local reviews and transparent pricing play decisive roles.",
    ppcMarketDynamics:
      "Lower average CPCs than the US and Australia, offering strong cost-per-lead economics for disciplined advertisers.",
    ecommerceLandscape:
      "Enthusiastic online shoppers who value transparent domestic shipping rates and clear delivery timeframes.",
    b2bLandscape:
      "Thriving agricultural technology, cloud accounting (Xero ecosystem), and creative SaaS sectors seeking global growth.",
    topIndustries: ["Agtech & Primary Industries", "SaaS & Cloud Software", "Tourism & Adventure", "Film & Creative Tech", "Clean Energy"],
    cities: [],
  },
];

/* =========================================================================
   3. HELPER FUNCTIONS FOR RETRIEVAL & LOOKUPS
   ========================================================================= */

export function getCountryBySlug(slug: string): CountryDefinition | undefined {
  const cleanSlug = slug.toLowerCase().replace(/^digital-marketing-agency-/, "");
  return TARGET_COUNTRIES.find((c) => c.slug === cleanSlug);
}

export function getCityBySlug(slug: string): { city: CityDefinition; country: CountryDefinition } | undefined {
  const cleanSlug = slug.toLowerCase().replace(/^digital-marketing-agency-/, "");
  for (const country of TARGET_COUNTRIES) {
    const city = country.cities.find((c) => c.slug === cleanSlug);
    if (city) {
      return { city, country };
    }
  }
  return undefined;
}

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return CORE_SERVICES[slug.toLowerCase()];
}

export function getAllLocationRoutes(): { path: string; title: string; priority: number }[] {
  const routes: { path: string; title: string; priority: number }[] = [];

  // Core Service pages
  Object.values(CORE_SERVICES).forEach((service) => {
    routes.push({
      path: `/services/${service.slug}`,
      title: `${service.name} | IGR Digital`,
      priority: 0.9,
    });
  });

  // Country Main Pages
  TARGET_COUNTRIES.forEach((country) => {
    routes.push({
      path: `/digital-marketing-agency-${country.slug}`,
      title: `Digital Marketing Agency in ${country.name} | IGR Digital`,
      priority: 0.85,
    });

    // Country + Service Pages
    Object.values(CORE_SERVICES).forEach((service) => {
      routes.push({
        path: `/digital-marketing-agency-${country.slug}/${service.slug}`,
        title: `${service.name} in ${country.name} | IGR Digital`,
        priority: 0.8,
      });
    });

    // City Pages
    country.cities.forEach((city) => {
      routes.push({
        path: `/digital-marketing-agency-${city.slug}`,
        title: `Digital Marketing Agency in ${city.name} | IGR Digital`,
        priority: 0.75,
      });

      // City + Service Pages
      Object.values(CORE_SERVICES).forEach((service) => {
        routes.push({
          path: `/digital-marketing-agency-${city.slug}/${service.slug}`,
          title: `${service.name} in ${city.name} | IGR Digital`,
          priority: 0.7,
        });
      });
    });
  });

  return routes;
}
