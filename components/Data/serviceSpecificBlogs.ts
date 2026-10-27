import type { ResourceArticle } from "@/components/pages/blogResourcesPreview";

export const SERVICE_SPECIFIC_BLOGS: Record<string, ResourceArticle[]> = {
  // 1. SHOPIFY SEO
  "shopify-seo": [
    {
      title: "How to Fix Shopify Duplicate Collection URLs in Liquid Code",
      category: "Shopify SEO",
      readTime: "6 min read",
      excerpt: "Step-by-step guide to removing /collections/collection-name/products/ URLs to stop cannibalization and consolidate product rank authority.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Shopify Core Web Vitals: Removing App Bloat and Speeding Up Checkout",
      category: "Shopify SEO",
      readTime: "7 min read",
      excerpt: "How unused app scripts drag down mobile LCP and INP scores, and how to safely audit theme files without breaking conversion flows.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Optimizing Shopify Collection Silos for High-Margin Category Queries",
      category: "Shopify SEO",
      readTime: "8 min read",
      excerpt: "Transforming standard Shopify collections into authoritative topic clusters that rank on Google page #1 for transactional buyer terms.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 2. E-COMMERCE SEO
  "ecommerce-seo": [
    {
      title: "Faceted Navigation SEO: Crawl Budget Hygiene for 50,000+ SKU Catalogs",
      category: "E-Commerce SEO",
      readTime: "9 min read",
      excerpt: "How to handle color, size, and price filters without creating millions of duplicate URLs that waste Googlebot crawl resources.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Product Schema JSON-LD: Unlocking Google Merchant Center Free Listings",
      category: "E-Commerce SEO",
      readTime: "6 min read",
      excerpt: "Implementing advanced Offer, AggregateRating, and InStock structured data to capture rich visual snippets in Google search results.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Out-of-Stock Products SEO: Avoiding 404 Disasters During Peak Seasons",
      category: "E-Commerce SEO",
      readTime: "5 min read",
      excerpt: "Best practices for handling discontinued vs temporarily out-of-stock inventory while preserving accumulated backlink equity.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 3. WORDPRESS SEO
  "wordpress-seo": [
    {
      title: "Cleaning Up WordPress Plugin Bloat to Maximize Google Crawl Efficiency",
      category: "WordPress SEO",
      readTime: "7 min read",
      excerpt: "How database overhead, autoloaded options, and unused JS assets kill Core Web Vitals on Elementor and custom WordPress themes.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Custom Post Type & Taxonomy Architecture for Enterprise WordPress",
      category: "WordPress SEO",
      readTime: "8 min read",
      excerpt: "Building scalable content silos using custom taxonomies without triggering category and tag duplicate content penalties.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Yoast vs RankMath vs Native Schema: Which Wins in 2026?",
      category: "WordPress SEO",
      readTime: "6 min read",
      excerpt: "A deep dive into schema markup implementation, performance benchmarks, and automated metadata management in modern WordPress.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 4. WEBFLOW SEO
  "webflow-seo": [
    {
      title: "Harnessing Webflow CMS Collections for Automated Programmatic SEO",
      category: "Webflow SEO",
      readTime: "7 min read",
      excerpt: "How to use multi-reference fields, dynamic templates, and clean semantic markup to generate hundreds of high-ranking landing pages.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Managing Webflow 301 Redirect Maps During Major Site Redesigns",
      category: "Webflow SEO",
      readTime: "5 min read",
      excerpt: "Avoiding traffic drops during domain migrations using Webflow wildcard redirects and regex path preservation.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Webflow Core Web Vitals: Optimizing Lottie Animations & Interactions",
      category: "Webflow SEO",
      readTime: "6 min read",
      excerpt: "Ensuring smooth interaction to next paint (INP) without sacrificing the stunning interactive visual animations Webflow is loved for.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 5. LINK BUILDING & OFF-PAGE
  "link-building": [
    {
      title: "The Manual Outreach Blueprint: Earning DR 70+ Backlinks with Zero Spam",
      category: "Link Building",
      readTime: "8 min read",
      excerpt: "Why automated link templates get ignored and how bespoke relationship-based pitching secures permanent editorial placements.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Anchor Text Diversity: How to Scale Links Without Triggering Algorithmic Penalties",
      category: "Link Building",
      readTime: "7 min read",
      excerpt: "Analyzing natural backlink distributions across top-ranking competitors to build an unbeatable, safe link profile.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Reverse-Engineering Competitor Backlinks: Finding Untapped Media Opportunities",
      category: "Link Building",
      readTime: "6 min read",
      excerpt: "Using backlink gap analysis to identify publications linking to all top three competitors and pitching superior editorial angles.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 6. GUEST POSTING & DIGITAL PR
  "guest-posting": [
    {
      title: "Editorial Pitching Secrets: Getting Featured on Industry-Leading News Portals",
      category: "Guest Posting",
      readTime: "7 min read",
      excerpt: "How crafting data-backed, non-promotional editorial stories gets your articles accepted by top tier publications.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Evaluating Publication Authority: Spotting Link Farms vs Real Traffic Sites",
      category: "Guest Posting",
      readTime: "6 min read",
      excerpt: "Why high Domain Rating (DR) alone is misleading, and how verifying genuine search traffic protects your domain reputation.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Contextual Internal Linking in Guest Articles to Maximize Ranking Equity",
      category: "Guest Posting",
      readTime: "5 min read",
      excerpt: "How natural contextual mentions pass significantly more search authority than isolated author bio links.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "digital-pr": [
    {
      title: "Data-Driven Digital PR: Turning Proprietary Industry Studies Into Viral News",
      category: "Digital PR",
      readTime: "8 min read",
      excerpt: "How surveying your customer base and publishing unique datasets earns natural Tier-1 media mentions across Forbes, Bloomberg, and TechCrunch.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Reclaiming Unlinked Brand Mentions: The Quickest Authority Wins in PR",
      category: "Digital PR",
      readTime: "5 min read",
      excerpt: "Automating brand mention monitoring and executing friendly outreach to turn plain text mentions into high-value dofollow links.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Newsjacking & Reactive PR: Responding to Breaking Trends Under 2 Hours",
      category: "Digital PR",
      readTime: "6 min read",
      excerpt: "How monitoring journalist query radars (Connectively, Qwoted) helps quote your leadership team on breaking news events.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 7. LOCAL SEO
  "local-seo": [
    {
      title: "Google Business Profile Optimization: Winning the Local Map 3-Pack",
      category: "Local SEO",
      readTime: "7 min read",
      excerpt: "Primary category selection, weekly geotagged updates, and automated review capture funnels that push your listing to position #1.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "NAP Consistency: Auditing and Suppressing Duplicate Local Citations",
      category: "Local SEO",
      readTime: "6 min read",
      excerpt: "How inconsistent business names, old suite numbers, and mismatched phone numbers quietly suppress local search visibility.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Multi-Location SEO Architecture: Scaling City Landing Pages Without Spam",
      category: "Local SEO",
      readTime: "8 min read",
      excerpt: "Creating localized landing pages with unique local schema, driving directions, and local testimonials for multi-city businesses.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 8. TECHNICAL AUDIT
  "technical-audit": [
    {
      title: "JavaScript SEO & Server-Side Rendering (SSR): Diagnostics for Next.js & Nuxt",
      category: "Technical Audit",
      readTime: "9 min read",
      excerpt: "How client-side rendering leads to delayed indexation and how to verify Googlebot renders your full DOM correctly.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Core Web Vitals INP Optimization: Fixing Interaction Delays on Complex Sites",
      category: "Technical Audit",
      readTime: "7 min read",
      excerpt: "Diagnosing long main-thread tasks and heavy event listeners that cause poor Interaction to Next Paint (INP) scores.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Crawl Budget Optimization: Preventing Crawler Traps in Large Taxonomies",
      category: "Technical Audit",
      readTime: "8 min read",
      excerpt: "Using server logs to see where search spiders waste time on infinite filter loops and non-indexable utility URLs.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 9. AI SEO & ANSWER ENGINE (AEO)
  "ai-seo": [
    {
      title: "Ranking in Google AI Overviews: Entity Salience and Knowledge Graph Grounding",
      category: "AI SEO",
      readTime: "8 min read",
      excerpt: "How Google's generative search summaries extract consensus from trusted entity nodes and how to structure your brand data.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vector Search Readiness: Formatting Content for Semantic Retrieval and RAG",
      category: "AI SEO",
      readTime: "9 min read",
      excerpt: "Structuring articles with concise summary headers, entity definitions, and nested JSON-LD schema for LLM ingestion.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tracking Brand Citations Across ChatGPT, Claude & Perplexity",
      category: "AI SEO",
      readTime: "6 min read",
      excerpt: "Measuring non-click AI mindshare: how to monitor prompt mentions and ensure AI models recommend your product.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "aeo": [
    {
      title: "Position Zero Across Perplexity & SearchGPT: Conversational Question Modeling",
      category: "Answer Engine Optimization",
      readTime: "7 min read",
      excerpt: "Formatting direct answer paragraphs under 50 words to win top conversational quotes when users ask multi-layered questions.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Schema.org Deep Dive: Connecting Wikidata, Crunchbase & Schema Entities",
      category: "Answer Engine Optimization",
      readTime: "8 min read",
      excerpt: "Using sameAs schema attributes to prove brand authority to answer engine crawlers and build undeniable entity consensus.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Zero-Click Search Strategy: Monetizing AI Citations Without Direct Page Visits",
      category: "Answer Engine Optimization",
      readTime: "6 min read",
      excerpt: "When users don't click, how does brand recall generate direct searches and high-ticket enterprise sales? We break down the data.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 10. GOOGLE ADS & PPC
  "google-ads": [
    {
      title: "Performance Max Campaign Scaling: Asset Group Architecture for Direct ROAS",
      category: "Google Ads",
      readTime: "7 min read",
      excerpt: "Combining first-party customer audience signals, high-res lifestyle visuals, and negative search themes to maximize PMax efficiency.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Negative Keyword Sculpting: Eliminating 35%+ Wasted Spend in High-CPC Niches",
      category: "Google Ads",
      readTime: "6 min read",
      excerpt: "How broad match algorithms bid on irrelevant long-tail searches and how daily negative keyword mining preserves your budget.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Value-Based Bidding (VBB) & Offline Conversion Tracking in GA4",
      category: "Google Ads",
      readTime: "8 min read",
      excerpt: "Training Google AI bidding on actual closed CRM revenue rather than generic form submits to capture high-ticket customers.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "ppc": [
    {
      title: "High-Converting PPC Landing Page Playbook: Turning Clicks Into Signed Contracts",
      category: "PPC Advertising",
      readTime: "7 min read",
      excerpt: "Hero headline alignment with search keywords, sub-second load times, and single-field intake forms that double conversion rates.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Click Fraud Suppression: Protecting Ad Budgets from Scraper Bots & Competitors",
      category: "PPC Advertising",
      readTime: "6 min read",
      excerpt: "How invalid traffic quietly burns ad spend and how automated IP exclusions recover up to 15% of your paid media investment.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Single-Theme Ad Group Architecture (STAG): Maintaining 10/10 Quality Scores",
      category: "PPC Advertising",
      readTime: "8 min read",
      excerpt: "Organizing ad accounts into hyper-targeted keyword clusters to pay the lowest possible CPC while commanding top ad positions.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 11. META ADS & SOCIAL MEDIA
  "meta-ads": [
    {
      title: "Advantage+ Shopping Campaigns (ASC): The 2026 Meta Scaling Architecture",
      category: "Meta Ads",
      readTime: "7 min read",
      excerpt: "How broad AI targeting outperforms manual lookalikes and why dynamic product creative feeds are essential for 4x+ ROAS.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Server-Side Meta Conversions API (CAPI): Zero Signal Loss Post-iOS",
      category: "Meta Ads",
      readTime: "6 min read",
      excerpt: "Eliminating ad-blocker and browser tracking drop-offs with direct server-to-server event synchronization.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "UGC Video Creative Testing: 40 Hooks, 3 Angles, 1 Scalable Winner",
      category: "Meta Ads",
      readTime: "8 min read",
      excerpt: "Our systematic process for scripting, sourcing, and testing short-form video hooks to prevent creative fatigue.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "social-media": [
    {
      title: "Short-Form Video Virality: Structuring Reels & TikToks for Algorithmic Reach",
      category: "Social Media",
      readTime: "6 min read",
      excerpt: "The first 3-second visual hook, audio trending alignment, and retention loops that drive explosive organic impressions.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Management: Turning Casual Followers Into Vocal Brand Advocates",
      category: "Social Media",
      readTime: "5 min read",
      excerpt: "How responsive DM conversations and genuine comment engagement increase customer lifetime value (LTV).",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Proof Syndication: Repurposing Customer Reviews Across Channels",
      category: "Social Media",
      readTime: "6 min read",
      excerpt: "Transforming customer unboxings and testimonials into high-performing organic carousels and paid ad creatives.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 12. LINKEDIN ADS & B2B MARKETING
  "linkedin-ads": [
    {
      title: "Account-Based Marketing (ABM) on LinkedIn: Targeting C-Suite Decision Makers",
      category: "B2B Marketing",
      readTime: "8 min read",
      excerpt: "Matching CRM tier-1 target company lists with VP and Director job titles to generate high-value enterprise pipeline.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Native LinkedIn Lead Gen Forms vs External Landing Pages: The Conversion Data",
      category: "B2B Marketing",
      readTime: "6 min read",
      excerpt: "Why frictionless pre-filled mobile lead forms generate 3x more qualified sales meetings for B2B SaaS companies.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Thought Leadership Ads: Leveraging Founder Profiles for 60% Lower CPL",
      category: "B2B Marketing",
      readTime: "7 min read",
      excerpt: "Promoting personal founder posts rather than corporate company pages to build authentic executive trust.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "b2b-marketing": [
    {
      title: "Full-Funnel B2B Demand Generation: Shortening 9-Month Sales Cycles",
      category: "B2B Marketing",
      readTime: "9 min read",
      excerpt: "Connecting top-of-funnel whitepaper downloads with retargeting nurture sequences and direct sales outbound alignment.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "HubSpot Closed-Loop Attribution: Proving Paid Media Pipeline Revenue to the CFO",
      category: "B2B Marketing",
      readTime: "7 min read",
      excerpt: "Tracking first-touch ad clicks all the way to closed-won Salesforce and HubSpot enterprise opportunities.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gated vs Ungated Content: The Modern Inbound Playbook for SaaS",
      category: "B2B Marketing",
      readTime: "6 min read",
      excerpt: "When to ask for business email addresses and when to give away high-value calculators to maximize brand search volume.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 13. PERFORMANCE MARKETING & DIGITAL MARKETING MAIN
  "performance-marketing": [
    {
      title: "Blended ROAS & Multi-Touch Attribution: Beyond Last-Click Myopia",
      category: "Performance Marketing",
      readTime: "8 min read",
      excerpt: "Why relying solely on platform reported ROAS leads to budget waste and how blended Marketing Efficiency Ratio (MER) guides profitable scaling.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Omnichannel Budget Allocation: Balancing Google Search Intent with Meta Discovery",
      category: "Performance Marketing",
      readTime: "7 min read",
      excerpt: "How investing in top-of-funnel Meta awareness directly increases low-CPC branded Google search volume.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Customer Acquisition Cost (CAC) vs Lifetime Value (LTV): Profitable Growth Economics",
      category: "Performance Marketing",
      readTime: "9 min read",
      excerpt: "The exact unit economics required to scale monthly ad spend from $10,000 to $100,000+ while protecting net operating margins.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  "digital-marketing": [
    {
      title: "Building an Unbeatable Growth Engine: Aligning Organic Search with Paid Media",
      category: "Digital Marketing",
      readTime: "8 min read",
      excerpt: "How top-performing brands dominate both paid ads and organic positions to capture over 65% of all category search clicks.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Creative Testing Flywheel: Generating 50+ Ad Concepts Monthly",
      category: "Digital Marketing",
      readTime: "7 min read",
      excerpt: "How our in-house creative lab produces viral UGC reels, founder interviews, and static graphics that convert ready-to-buy consumers.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Omnichannel Marketing Retainers: What Enterprise Brands Need in 2026",
      category: "Digital Marketing",
      readTime: "6 min read",
      excerpt: "Why hiring siloed single-channel freelancers fails and how unified growth squads scale company valuation faster.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // 14. CONTENT MARKETING
  "content-marketing": [
    {
      title: "Topic Cluster Architecture: Building Defensible Organic Search Moats",
      category: "Content Marketing",
      readTime: "8 min read",
      excerpt: "Mapping pillar pages, supporting clusters, and contextual internal linking to send unmistakable topical authority signals to Google.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Content Decay Audits: Refreshing Declining Rankings for Immediate 40%+ Traffic Gains",
      category: "Content Marketing",
      readTime: "6 min read",
      excerpt: "How updating old blog posts with fresh data, new expert quotes, and modern search intent outperforms publishing brand-new articles.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-E-A-T Compliance: Demonstrating First-Hand Experience in Your Content",
      category: "Content Marketing",
      readTime: "7 min read",
      excerpt: "Adding verified author bios, original screenshots, and unique proprietary insights to satisfy Google's quality raters.",
      href: "/blog",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

/**
 * Returns 3 tailored blog articles for the given service slug or keyword
 */
export function getBlogsByServiceSlug(slug: string): ResourceArticle[] {
  const cleanSlug = (slug || "").toLowerCase().trim();

  // Direct match
  if (SERVICE_SPECIFIC_BLOGS[cleanSlug]) {
    return SERVICE_SPECIFIC_BLOGS[cleanSlug];
  }

  // Keyword / Substring match
  for (const [key, articles] of Object.entries(SERVICE_SPECIFIC_BLOGS)) {
    if (cleanSlug.includes(key) || key.includes(cleanSlug)) {
      return articles;
    }
  }

  // Domain fallback groups
  if (cleanSlug.includes("shopify")) return SERVICE_SPECIFIC_BLOGS["shopify-seo"];
  if (cleanSlug.includes("ecom") || cleanSlug.includes("store") || cleanSlug.includes("cart")) return SERVICE_SPECIFIC_BLOGS["ecommerce-seo"];
  if (cleanSlug.includes("wp") || cleanSlug.includes("wordpress")) return SERVICE_SPECIFIC_BLOGS["wordpress-seo"];
  if (cleanSlug.includes("flow") || cleanSlug.includes("webflow")) return SERVICE_SPECIFIC_BLOGS["webflow-seo"];
  if (cleanSlug.includes("link") || cleanSlug.includes("backlink") || cleanSlug.includes("outreach")) return SERVICE_SPECIFIC_BLOGS["link-building"];
  if (cleanSlug.includes("guest")) return SERVICE_SPECIFIC_BLOGS["guest-posting"];
  if (cleanSlug.includes("pr") || cleanSlug.includes("press")) return SERVICE_SPECIFIC_BLOGS["digital-pr"];
  if (cleanSlug.includes("local") || cleanSlug.includes("map") || cleanSlug.includes("near")) return SERVICE_SPECIFIC_BLOGS["local-seo"];
  if (cleanSlug.includes("audit") || cleanSlug.includes("tech")) return SERVICE_SPECIFIC_BLOGS["technical-audit"];
  if (cleanSlug.includes("ai") || cleanSlug.includes("gpt") || cleanSlug.includes("gemini")) return SERVICE_SPECIFIC_BLOGS["ai-seo"];
  if (cleanSlug.includes("aeo") || cleanSlug.includes("answer")) return SERVICE_SPECIFIC_BLOGS["aeo"];
  if (cleanSlug.includes("google") || cleanSlug.includes("adwords")) return SERVICE_SPECIFIC_BLOGS["google-ads"];
  if (cleanSlug.includes("meta") || cleanSlug.includes("facebook") || cleanSlug.includes("instagram")) return SERVICE_SPECIFIC_BLOGS["meta-ads"];
  if (cleanSlug.includes("social") || cleanSlug.includes("reel")) return SERVICE_SPECIFIC_BLOGS["social-media"];
  if (cleanSlug.includes("linkedin") || cleanSlug.includes("abm")) return SERVICE_SPECIFIC_BLOGS["linkedin-ads"];
  if (cleanSlug.includes("b2b")) return SERVICE_SPECIFIC_BLOGS["b2b-marketing"];
  if (cleanSlug.includes("ppc") || cleanSlug.includes("paid")) return SERVICE_SPECIFIC_BLOGS["ppc"];
  if (cleanSlug.includes("content")) return SERVICE_SPECIFIC_BLOGS["content-marketing"];

  // Default Digital Marketing
  return SERVICE_SPECIFIC_BLOGS["digital-marketing"];
}
