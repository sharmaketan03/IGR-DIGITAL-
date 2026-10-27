export interface IndustryCaseStudy {
  id: string;
  client: string;
  industry: string;
  serviceCategory: string; // e.g. "E-Commerce", "Local SEO", "B2B SaaS", "Technical SEO"
  badge: string;
  title: string;
  tagline: string;
  narrative: string;
  solutionPoints: string[];
  image: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
    sublabel: string;
    isHighlight?: boolean;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  duration: string;
  impactVerdict: string;
  tags: string[];
}

export const DIVERSE_CASE_STUDIES: Record<string, IndustryCaseStudy> = {
  ecommerce: {
    id: "ecommerce",
    client: "Aura Luxury Apparel",
    industry: "Fashion & Direct-to-Consumer",
    serviceCategory: "E-Commerce SEO & Performance Ads",
    badge: "E-Commerce Scaling",
    title: "How Aura Scaled Organic Revenue by 380% with Catalog SEO & Google Shopping",
    tagline: "4.2X ROAS on High-Intent Commercial SKU Campaigns",
    narrative:
      "Aura was burning cash on fragmented Meta ads while their 4,500+ SKU store suffered from faceted crawl-depth traps and duplicate canonicals. We completely overhauled their faceted collection taxonomy, enriched schema for Google Merchant Center, and deployed high-intent Shopping funnels.",
    solutionPoints: [
      "Faceted navigation canonicalization unlocking 24,000 indexable long-tail search nodes",
      "Dynamic Product structured data markup yielding 32% boost in Merchant CTR",
      "Segmented Target-ROAS Google Shopping campaigns filtering negative search terms",
      "High-converting mobile PDP checkout funnel optimization dropping cart abandons by 22%",
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Aura Luxury Fashion E-commerce storefront analytics",
    stats: [
      { value: "380%", label: "Revenue Surge", sublabel: "YoY online store GMV", isHighlight: true },
      { value: "4.2X", label: "Blended ROAS", sublabel: "from paid acquisition" },
      { value: "+185%", label: "Organic Search", sublabel: "commercial buyer visits" },
      { value: "22%", label: "Cart Recovery", sublabel: "checkout conversion uplift" },
    ],
    testimonial: {
      quote:
        "IGR transformed our store from being purely ad-dependent into an organic revenue machine. Our catalog now dominates competitive fashion queries.",
      author: "Elena Rostova",
      role: "VP of Digital Commerce",
      company: "Aura Apparel",
    },
    duration: "6 Months Execution",
    impactVerdict: "Dominated Tier-1 fashion product search intent across US & UK",
    tags: ["Shopify Plus", "Catalog SEO", "Performance Max", "Faceted Navigation"],
  },

  shopify: {
    id: "shopify",
    client: "Nordic Minimalist Living",
    industry: "Home Decor & D2C Furniture",
    serviceCategory: "Shopify Plus SEO & Liquid Theme Speed",
    badge: "Shopify Plus Growth",
    title: "How Nordic Living Achieved $3.2M Annual GMV via Shopify Collection Architecture",
    tagline: "310% Surge in Non-Brand Organic Checkout Revenue",
    narrative:
      "Nordic Living was struggling with app bloat, slow Liquid rendering, and duplicate product tagging that confused Google's index. We reconstructed their collection tree, stripped 14 unused apps, injected custom Product JSON-LD, and scaled ranking across 1,200 commercial interior queries.",
    solutionPoints: [
      "Liquid theme architecture refactored to achieve mobile LCP under 1.1s",
      "Hierarchical collection tag navigation eliminating 15,000 duplicate URLs",
      "Dynamic Rich Snippets for price drops, stock availability, and review ratings",
      "Multi-market Shopify Markets international indexing for US, UK, and EU",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Nordic Living modern D2C storefront and order logistics",
    stats: [
      { value: "310%", label: "Store GMV Lift", sublabel: "YoY Shopify sales", isHighlight: true },
      { value: "1.1s", label: "Mobile LCP", sublabel: "sub-second load speed" },
      { value: "+240%", label: "Collection Rank", sublabel: "top 3 product rankings" },
      { value: "3.6X", label: "Organic ROAS", sublabel: "blended commercial ROI" },
    ],
    testimonial: {
      quote:
        "IGR solved our Liquid indexing issues in week one. Our store has never loaded this fast, and our organic conversion rate hit an all-time high.",
      author: "Henrik Lindqvist",
      role: "Co-Founder & CEO",
      company: "Nordic Minimalist",
    },
    duration: "5 Months Execution",
    impactVerdict: "$3.2M organic GMV unlocked with zero increase in ad spend",
    tags: ["Shopify Plus", "Liquid Speed", "Collection SEO", "D2C Scaling"],
  },

  wordpress: {
    id: "wordpress",
    client: "Apex Legal & Advisory Group",
    industry: "Corporate Law & Legal Services",
    serviceCategory: "WordPress Enterprise SEO & Core Web Vitals",
    badge: "WordPress Dominance",
    title: "Overhauling a 2,000-Page WordPress Portal to Capture #1 Rankings Across 450 Legal Queries",
    tagline: "520% Surge in Qualified High-Retainer Corporate Client Consultations",
    narrative:
      "Apex Legal had bloated Elementor page builders and conflicting SEO plugins causing crawling stalls and 4-second load times. We refactored their template hierarchy, migrated to lightweight Gutenberg blocks, rebuilt their legal schema graph, and secured top rankings for competitive practice areas.",
    solutionPoints: [
      "Custom Gutenberg blocks replacing heavy builder plugins, cutting DOM size by 65%",
      "Comprehensive Schema.org LegalService and Attorney JSON-LD markup",
      "Authoritative practice area topic clusters routing authority from 300+ legal guides",
      "Database query optimization dropping Time To First Byte (TTFB) to 120ms",
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Corporate legal counsel conference room and digital strategy",
    stats: [
      { value: "520%", label: "Retainer Inquiries", sublabel: "qualified client leads", isHighlight: true },
      { value: "98/100", label: "PageSpeed Score", sublabel: "mobile Core Web Vitals" },
      { value: "450+", label: "Page #1 Ranks", sublabel: "high-value legal terms" },
      { value: "-72%", label: "Bounce Rate", sublabel: "instant page response" },
    ],
    testimonial: {
      quote:
        "Our previous agency blamed WordPress for poor speed. IGR came in and made our massive legal portal load instantly while ranking us above the largest national law firms.",
      author: "Julian Crawford",
      role: "Senior Partner",
      company: "Apex Legal Group",
    },
    duration: "6 Months Execution",
    impactVerdict: "Dominated corporate legal search across 5 metropolitan areas",
    tags: ["WordPress SEO", "Core Web Vitals", "Legal E-E-A-T", "Schema Graph"],
  },

  webflow: {
    id: "webflow",
    client: "Synthetix AI Design Studio",
    industry: "Next-Gen SaaS & Product Design",
    serviceCategory: "Webflow CMS SEO & Semantic Taxonomy",
    badge: "Webflow Scale",
    title: "How Synthetix Scaled Webflow CMS to 180,000 Monthly Product Designers",
    tagline: "Programmatic CMS Architecture Unlocking 3,400 Indexable Design Nodes",
    narrative:
      "Synthetix had award-winning Webflow interactions but suffered from empty CMS template indexing, unoptimized asset delivery, and zero non-branded reach. We architected clean dynamic collections, multi-reference schema connections, and automated image CDN optimization.",
    solutionPoints: [
      "Architected 6 relational Webflow CMS collections targeting bottom-funnel product design keywords",
      "Automated Webflow OpenGraph and dynamic Twitter Cards for viral social syndication",
      "Client-first semantic HTML naming ensuring flawless accessibility and crawler parsing",
      "Embedded interactive design ROI calculators capturing 650+ high-tier SaaS MQLs monthly",
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Synthetix design studio digital interface and modern laptop",
    stats: [
      { value: "180K", label: "Monthly Visits", sublabel: "qualified design leaders", isHighlight: true },
      { value: "3,400", label: "CMS Pages", sublabel: "ranking in Google Index" },
      { value: "4.8X", label: "Product MQLs", sublabel: "inbound demo bookings" },
      { value: "99/100", label: "Semantic Audit", sublabel: "clean Webflow structure" },
    ],
    testimonial: {
      quote:
        "IGR showed us how to turn Webflow into an organic customer machine without sacrificing our custom animations or design aesthetic.",
      author: "Maya Lin",
      role: "Head of Product",
      company: "Synthetix Studio",
    },
    duration: "4 Months Execution",
    impactVerdict: "180K monthly organic visits and #1 ranking for SaaS UI design queries",
    tags: ["Webflow CMS", "Programmatic SEO", "SaaS Growth", "Design Systems"],
  },

  saas: {
    id: "saas",
    client: "PulseFlow Cloud",
    industry: "B2B SaaS / DevOps Infrastructure",
    serviceCategory: "Technical SEO & Inbound Demand Gen",
    badge: "Enterprise SaaS Growth",
    title: "Engineering a 5.4X Pipeline Expansion for Enterprise Cloud Infrastructure",
    tagline: "From Zero High-Ticket Enterprise MQLs to $2.8M Closed ARR Pipeline",
    narrative:
      "PulseFlow had cutting-edge Kubernetes monitoring tech but zero presence for non-branded engineering searches. We architected a programmatic comparative hub ('Tool vs Tool'), technical documentation SEO, and high-trust architectural whitepaper acquisition funnels.",
    solutionPoints: [
      "Built 80+ comparative technical matrix pages targeting mid-to-bottom funnel software evaluations",
      "Core Web Vitals overhaul bringing Next.js documentation portal LCP under 0.9s",
      "Architected interactive Cloud Cost ROI calculator generating 420+ monthly qualified enterprise leads",
      "Digital PR outreach acquiring 90+ tier-1 editorial links from GitHub, HackerNews, and Dev.to",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "PulseFlow SaaS analytics enterprise dashboard",
    stats: [
      { value: "5.4X", label: "SQL Pipeline", sublabel: "qualified enterprise leads", isHighlight: true },
      { value: "$2.8M", label: "Pipeline ARR", sublabel: "sourced from organic search" },
      { value: "310%", label: "Organic Traffic", sublabel: "high-intent developer visits" },
      { value: "0.85s", label: "Core Web Vitals", sublabel: "flawless sub-second LCP" },
    ],
    testimonial: {
      quote:
        "Our sales team went from outbound cold calling to being fully booked with Tier-1 enterprise demos. The comparative content strategy was a home run.",
      author: "Marcus Vance",
      role: "Chief Revenue Officer",
      company: "PulseFlow Cloud",
    },
    duration: "9 Months Execution",
    impactVerdict: "$2.8M ARR pipeline generated with zero wasted click spend",
    tags: ["B2B SaaS", "Programmatic SEO", "Tech Specs", "Product-Led Growth"],
  },

  local: {
    id: "local",
    client: "Premier Apex Health Clinics",
    industry: "Healthcare & Specialized Medicine",
    serviceCategory: "Multi-Location Local SEO & Google Maps",
    badge: "Local Authority",
    title: "Dominating Local Map Packs Across 14 Specialized Medical Clinic Locations",
    tagline: "460% Surge in High-Value Patient Consultation Bookings",
    narrative:
      "With 14 urban clinics competing against established hospital networks, Premier Apex was invisible in Google Local 3-Packs. We audited and synced NAP across 120 directories, built localized symptom-intent service hubs, and automated verified patient review collection.",
    solutionPoints: [
      "Consolidated multi-location Google Business Profiles with geotagged service schemas",
      "Engineered localized health problem hubs ranking #1 for 'specialist near me' keywords",
      "Automated HIPPA-compliant review funnel generating 1,200+ 5-star verified patient reviews",
      "Hyper-targeted geo-fenced Google Local Services Ads capturing emergency appointment searches",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Medical center clinic consultations and digital local patient bookings",
    stats: [
      { value: "460%", label: "Appointments", sublabel: "verified online bookings", isHighlight: true },
      { value: "Top 3", label: "Map Pack Rank", sublabel: "across 92% of target zip codes" },
      { value: "1,200+", label: "5-Star Reviews", sublabel: "organic patient sentiment" },
      { value: "-44%", label: "Cost Per Patient", sublabel: "acquisition cost reduction" },
    ],
    testimonial: {
      quote:
        "Every single clinic is now operating at near capacity. We went from wondering how to fill next month's schedule to planning 4 new facility openings.",
      author: "Dr. Alistair Finch",
      role: "Clinical Director",
      company: "Premier Apex Health",
    },
    duration: "5 Months Execution",
    impactVerdict: "#1 Map Pack visibility in 14 metropolitan medical corridors",
    tags: ["Google Business Profile", "Local 3-Pack", "Healthcare SEO", "Geo-Targeting"],
  },

  b2b: {
    id: "b2b",
    client: "Vanguard Industrial Robotics",
    industry: "Manufacturing & Supply Chain Automation",
    serviceCategory: "High-Ticket B2B Lead Generation",
    badge: "High-Ticket B2B",
    title: "Closing $14M in Manufacturing Contracts via Precision Commercial Search",
    tagline: "Converting Low-Volume, High-Contract-Value Industrial Engineering Queries",
    narrative:
      "Vanguard manufactures automated warehouse conveyor systems with $250k+ average contract sizes. Broad marketing was throwing away budget. We architected a surgical search campaign capturing OEM specifiers, supply chain directors, and plant managers.",
    solutionPoints: [
      "Mapped 450 deep-technical CAD spec and automation engineering queries",
      "Built interactive 'Factory Line Efficiency & ROI Calculator' gate",
      "Account-based retargeting tracking Fortune 500 IP visits on technical spec sheets",
      "Bespoke whitepapers that became mandatory reading for manufacturing procurement boards",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Industrial automation factory robotics manufacturing",
    stats: [
      { value: "$14.2M", label: "Closed Value", sublabel: "verified contract pipeline", isHighlight: true },
      { value: "34", label: "Enterprise Deals", sublabel: "$250k+ average deal size" },
      { value: "72%", label: "Spec Downloaders", sublabel: "converted to sales discovery" },
      { value: "3.8X", label: "Deal Velocity", sublabel: "shortened 12-mo cycle to 3.2-mo" },
    ],
    testimonial: {
      quote:
        "In industrial manufacturing, generic leads are worthless. IGR brought us direct calls from VP-level plant engineers with immediate budget approvals.",
      author: "Kurt Hendersen",
      role: "Managing Director",
      company: "Vanguard Robotics",
    },
    duration: "12 Months Execution",
    impactVerdict: "Sourced 34 multi-million dollar supply chain automation contracts",
    tags: ["Industrial SEO", "Contract Acquisition", "Account-Based Marketing", "High-Ticket"],
  },

  content: {
    id: "content",
    client: "Wealth Tech Brand",
    industry: "Wealth Tech",
    serviceCategory: "Digital PR & Link Building",
    badge: "Digital PR",
    title: "Capturing Monthly Readers and AI Citations in a Competitive Wealth Tech Niche",
    tagline: "IGR Digital x Wealth Tech Brand: Digital PR Case Study",
    narrative:
      "A wealth tech brand in a crowded niche had strong content but few trusted backlinks, so it struggled to rank against larger competitors.",
    solutionPoints: [
      "Built linkable research assets",
      "Pitched them to finance and technology publications",
      "Ran manual outreach to relevant blogs",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Link building case study results for a wealth tech brand",
    stats: [
      { value: "+310%", label: "Keyword Rankings", sublabel: "top-10 rankings surge", isHighlight: true },
      { value: "DR 78+", label: "Editorial Links", sublabel: "respected media placements" },
      { value: "85%", label: "AI Answers", sublabel: "mentions in AI-generated answers" },
      { value: "+18 DR", label: "Authority Lift", sublabel: "average domain rating increase" },
    ],
    testimonial: {
      quote:
        "Placements on respected sites, stronger rankings for competitive keywords and growing visibility, including mentions in AI-generated answers.",
      author: "Wealth Tech Marketing Lead",
      role: "VP of Growth",
      company: "Wealth Tech Brand",
    },
    duration: "90 Days Execution",
    impactVerdict: "Placements on respected sites, stronger rankings for competitive keywords and growing visibility",
    tags: ["Digital PR", "Editorial Backlinks", "AI Citations", "Wealth Tech"],
  },
};
