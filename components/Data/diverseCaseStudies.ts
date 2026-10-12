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
    client: "Finova Wealth Advisory",
    industry: "Fintech & Investment Capital",
    serviceCategory: "Authoritative Content & AI Search Authority",
    badge: "Financial Authority",
    title: "Capturing 1.2M Monthly Readers & LLM Citations in Competitive Wealth Tech",
    tagline: "Ranked #1 for Over 850 High-Net-Worth Advisory & Tax Planning Topics",
    narrative:
      "Finova needed to stand out in Google's strict YMYL (Your Money Your Life) algorithms while getting cited by ChatGPT and Perplexity. We built an accredited Subject Matter Expert (SME) editorial engine, structured data citations, and comprehensive financial calculators.",
    solutionPoints: [
      "Full E-E-A-T overhaul with verified CFP/CFA author schema and peer-reviewed disclaimers",
      "Answer Engine Optimization (AEO) securing direct answers in Perplexity, Claude, and Gemini",
      "Created 14 proprietary financial modelling calculators driving 45,000 monthly natural backlinks",
      "Zero-click search capture via structured FAQ and HowTo schema across 200+ pillar guides",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Fintech analytics charts and wealth management dashboard",
    stats: [
      { value: "1.2M", label: "Monthly Readers", sublabel: "qualified financial traffic", isHighlight: true },
      { value: "850+", label: "Page 1 Ranks", sublabel: "strict financial search queries" },
      { value: "68%", label: "LLM Visibility", sublabel: "cited in Perplexity & ChatGPT" },
      { value: "3.5X", label: "Lead Inflow", sublabel: "inbound wealth advisory requests" },
    ],
    testimonial: {
      quote:
        "The level of technical and financial rigor IGR brought to our content was unmatched. They satisfied Google's toughest YMYL quality thresholds effortlessly.",
      author: "Samantha Thorne",
      role: "Head of Marketing",
      company: "Finova Wealth",
    },
    duration: "8 Months Execution",
    impactVerdict: "1.2M monthly high-net-worth readers and dominating AI answer engines",
    tags: ["YMYL SEO", "E-E-A-T Authority", "AEO / Perplexity", "Financial Calculators"],
  },
};
