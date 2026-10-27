export interface KeywordRankRow {
  keyword: string;
  baselineRank: string | number;
  currentRank: string | number;
}

export interface KpiMetricRow {
  kpi: string;
  before: string;
  after: string;
  growth: string;
}

export interface SemrushSummary {
  authorityScore: number;
  organicSearchTraffic: string;
  paidSearchTraffic: string;
  backlinks: string;
  organicGraphImage?: string;
}

export interface DetailedCaseStudy {
  id: string;
  client: string;
  websiteUrl: string;
  websiteDisplay: string;
  country: string;
  countryFlag: string;
  lastUpdated: string;
  industry: string;
  category: "restaurant" | "education" | "automobile" | "realestate" | "healthcare" | "ecommerce";
  badge: string;
  headlineSummary: string;
  screenshotImage: string;
  screenshotAlt: string;
  semrushOverview: SemrushSummary;
  keywordsTable: KeywordRankRow[];
  kpiTable: KpiMetricRow[];
}

export const CASE_STUDIES_PAGE_DATA: DetailedCaseStudy[] = [
  // 1. RESTAURANT & HOSPITALITY - PJ DHABA
  {
    id: "pj-dhaba",
    client: "PJ DHABA",
    websiteUrl: "https://pjdhaba.com",
    websiteDisplay: "www.pjdhaba.com",
    country: "India",
    countryFlag: "🇮🇳",
    lastUpdated: "12 October 2026",
    industry: "Hospitality & Multi-Cuisine Dining",
    category: "restaurant",
    badge: "Local SEO & Footfall Scaling",
    headlineSummary: "500% user growth, 240% more backlinks, and 14.2K keywords ranked — strong SEO results.",
    screenshotImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "PJ Dhaba live portal and dining floor",
    semrushOverview: {
      authorityScore: 48,
      organicSearchTraffic: "153K",
      paidSearchTraffic: "6.5K",
      backlinks: "8.5K",
    },
    keywordsTable: [
      { keyword: "best family dhaba near me", baselineRank: 29, currentRank: 2 },
      { keyword: "highway multi-cuisine dhaba", baselineRank: 25, currentRank: 1 },
      { keyword: "pure veg punjabi thali", baselineRank: 35, currentRank: 3 },
      { keyword: "late night dining dhaba", baselineRank: 44, currentRank: 2 },
      { keyword: "highway food stop family", baselineRank: 40, currentRank: 5 },
      { keyword: "best dal makhani near highway", baselineRank: 57, currentRank: 2 },
      { keyword: "family restaurant highway route", baselineRank: 28, currentRank: 1 },
      { keyword: "fresh tandoori kulcha spot", baselineRank: 74, currentRank: 2 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "25K", after: "150K", growth: "500%" },
      { kpi: "New Users", before: "12K", after: "120K", growth: "900.00%" },
      { kpi: "Backlinks", before: "2.5K", after: "8.5K", growth: "240.00%" },
      { kpi: "Referring Domains", before: "825", after: "1.2K", growth: "45.45%" },
      { kpi: "Keywords (All)", before: "4.6K", after: "14.2K", growth: "208.70%" },
    ],
  },

  // 2. EDUCATION - ST. JOSEPH SCHOOL DHOLPUR
  {
    id: "st-joseph-dholpur",
    client: "ST. JOSEPH SCHOOL DHOLPUR",
    websiteUrl: "https://stjosephdholpur.edu.in",
    websiteDisplay: "www.stjosephdholpur.edu.in",
    country: "India",
    countryFlag: "🇮🇳",
    lastUpdated: "18 October 2026",
    industry: "K-12 Education & Academic Institution",
    category: "education",
    badge: "Admissions Search Authority",
    headlineSummary: "380% online enquiry jump, 92% local SERP dominance, and 9.8K monthly parent visits.",
    screenshotImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "St Joseph School campus portal and admission section",
    semrushOverview: {
      authorityScore: 42,
      organicSearchTraffic: "98.5K",
      paidSearchTraffic: "2.1K",
      backlinks: "5.4K",
    },
    keywordsTable: [
      { keyword: "best school in dholpur", baselineRank: 18, currentRank: 1 },
      { keyword: "english medium cbse school dholpur", baselineRank: 32, currentRank: 1 },
      { keyword: "top convent school dholpur", baselineRank: 27, currentRank: 2 },
      { keyword: "school admission 2026 dholpur", baselineRank: 41, currentRank: 1 },
      { keyword: "best sports school campus", baselineRank: 52, currentRank: 3 },
      { keyword: "dholpur primary school ranking", baselineRank: 39, currentRank: 2 },
      { keyword: "st joseph dholpur fee structure", baselineRank: 15, currentRank: 1 },
      { keyword: "science stream high school", baselineRank: 48, currentRank: 2 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "18K", after: "86K", growth: "377.78%" },
      { kpi: "New Users", before: "9K", after: "74K", growth: "722.22%" },
      { kpi: "Backlinks", before: "1.4K", after: "5.4K", growth: "285.71%" },
      { kpi: "Referring Domains", before: "310", after: "740", growth: "138.71%" },
      { kpi: "Keywords (All)", before: "2.1K", after: "8.6K", growth: "309.52%" },
    ],
  },

  // 3. AUTOMOBILE - RAJASTHAN CAR WORLD
  {
    id: "rajasthan-car-world",
    client: "RAJASTHAN CAR WORLD",
    websiteUrl: "https://rajasthancarworld.com",
    websiteDisplay: "www.rajasthancarworld.com",
    country: "India",
    countryFlag: "🇮🇳",
    lastUpdated: "21 October 2026",
    industry: "Automobile Dealership & Showrooms",
    category: "automobile",
    badge: "Buyer Lead Acquisition",
    headlineSummary: "326% more test drive bookings, 79% reduction in customer acquisition cost.",
    screenshotImage:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "Rajasthan Car World virtual vehicle inventory showroom",
    semrushOverview: {
      authorityScore: 45,
      organicSearchTraffic: "112K",
      paidSearchTraffic: "4.8K",
      backlinks: "6.8K",
    },
    keywordsTable: [
      { keyword: "certified used cars rajasthan", baselineRank: 36, currentRank: 2 },
      { keyword: "best pre-owned car showroom", baselineRank: 28, currentRank: 1 },
      { keyword: "used luxury cars inspection", baselineRank: 45, currentRank: 3 },
      { keyword: "second hand car dealership near me", baselineRank: 51, currentRank: 2 },
      { keyword: "verified car valuation instant", baselineRank: 42, currentRank: 4 },
      { keyword: "pre-owned suv finance deals", baselineRank: 64, currentRank: 3 },
      { keyword: "multi-brand car showroom rajasthan", baselineRank: 31, currentRank: 1 },
      { keyword: "used diesel automatic sedans", baselineRank: 59, currentRank: 2 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "21K", after: "98K", growth: "366.67%" },
      { kpi: "New Users", before: "11K", after: "82K", growth: "645.45%" },
      { kpi: "Backlinks", before: "1.8K", after: "6.8K", growth: "277.78%" },
      { kpi: "Referring Domains", before: "420", after: "910", growth: "116.67%" },
      { kpi: "Keywords (All)", before: "3.2K", after: "11.4K", growth: "256.25%" },
    ],
  },

  // 4. REAL ESTATE - DREAM HOUSE GROUP
  {
    id: "dream-house-group",
    client: "DREAM HOUSE GROUP",
    websiteUrl: "https://dreamhousegroup.in",
    websiteDisplay: "www.dreamhousegroup.in",
    country: "India",
    countryFlag: "🇮🇳",
    lastUpdated: "24 October 2026",
    industry: "Luxury Real Estate & Infrastructure",
    category: "realestate",
    badge: "High-Ticket Property Leads",
    headlineSummary: "310% jump in site inspections, ₹18Cr+ directly closed residential sales pipeline.",
    screenshotImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "Dream House Group modern luxury property portfolio",
    semrushOverview: {
      authorityScore: 51,
      organicSearchTraffic: "168K",
      paidSearchTraffic: "8.2K",
      backlinks: "11.2K",
    },
    keywordsTable: [
      { keyword: "luxury 3bhk flats for sale", baselineRank: 33, currentRank: 2 },
      { keyword: "premium residential apartments", baselineRank: 29, currentRank: 1 },
      { keyword: "gated community luxury villas", baselineRank: 44, currentRank: 3 },
      { keyword: "rera approved apartments project", baselineRank: 38, currentRank: 1 },
      { keyword: "penthouse with private terrace", baselineRank: 58, currentRank: 4 },
      { keyword: "nri property investment deals", baselineRank: 47, currentRank: 2 },
      { keyword: "new construction residential society", baselineRank: 31, currentRank: 1 },
      { keyword: "ready to move flats price", baselineRank: 62, currentRank: 3 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "28K", after: "142K", growth: "407.14%" },
      { kpi: "New Users", before: "14K", after: "118K", growth: "742.86%" },
      { kpi: "Backlinks", before: "3.1K", after: "11.2K", growth: "261.29%" },
      { kpi: "Referring Domains", before: "680", after: "1.4K", growth: "105.88%" },
      { kpi: "Keywords (All)", before: "5.1K", after: "16.8K", growth: "229.41%" },
    ],
  },

  // 5. HEALTHCARE - REGAIN ROOTS
  {
    id: "regain-roots",
    client: "REGAIN ROOTS AESTHETICS",
    websiteUrl: "https://regainroots.com",
    websiteDisplay: "www.regainroots.com",
    country: "India",
    countryFlag: "🇮🇳",
    lastUpdated: "25 October 2026",
    industry: "Dermatology & Medical Aesthetics",
    category: "healthcare",
    badge: "Medical Search Authority",
    headlineSummary: "360% surge in verified patient consultations, 81.7% lower patient acquisition cost.",
    screenshotImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "Regain Roots modern aesthetics clinic consultation portal",
    semrushOverview: {
      authorityScore: 47,
      organicSearchTraffic: "128K",
      paidSearchTraffic: "5.1K",
      backlinks: "7.9K",
    },
    keywordsTable: [
      { keyword: "fue hair transplant cost", baselineRank: 24, currentRank: 2 },
      { keyword: "best dermatologist clinic near me", baselineRank: 31, currentRank: 1 },
      { keyword: "prp therapy hair restoration", baselineRank: 42, currentRank: 2 },
      { keyword: "laser skin rejuvenation doctors", baselineRank: 39, currentRank: 3 },
      { keyword: "certified aesthetic surgeon clinic", baselineRank: 48, currentRank: 1 },
      { keyword: "hair loss treatment consultation", baselineRank: 55, currentRank: 2 },
      { keyword: "pigmentation laser clinic reviews", baselineRank: 36, currentRank: 1 },
      { keyword: "acne scar permanent removal", baselineRank: 60, currentRank: 4 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "19K", after: "94K", growth: "394.74%" },
      { kpi: "New Users", before: "9.5K", after: "79K", growth: "731.58%" },
      { kpi: "Backlinks", before: "2.1K", after: "7.9K", growth: "276.19%" },
      { kpi: "Referring Domains", before: "510", after: "1.1K", growth: "115.69%" },
      { kpi: "Keywords (All)", before: "3.8K", after: "12.6K", growth: "231.58%" },
    ],
  },

  // 6. LUXURY JEWELLERY - JAWAHARAT
  {
    id: "jawaharat",
    client: "JAWAHARAT JEWELLERY",
    websiteUrl: "https://jawaharatjewellery.com",
    websiteDisplay: "www.jawaharatjewellery.com",
    country: "UAE / India",
    countryFlag: "🇦🇪",
    lastUpdated: "26 October 2026",
    industry: "Fine Gold, Diamond & Bridal Jewellery",
    category: "ecommerce",
    badge: "Omnichannel D2C & Showroom",
    headlineSummary: "326% VIP showroom appointments, 280% organic bridal diamond catalog volume.",
    screenshotImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    screenshotAlt: "Jawaharat fine diamond jewellery online catalog and bridal display",
    semrushOverview: {
      authorityScore: 53,
      organicSearchTraffic: "184K",
      paidSearchTraffic: "9.4K",
      backlinks: "14.6K",
    },
    keywordsTable: [
      { keyword: "certified diamond bridal necklace", baselineRank: 27, currentRank: 1 },
      { keyword: "22k hallmark gold bridal set", baselineRank: 34, currentRank: 2 },
      { keyword: "custom solitaire engagement rings", baselineRank: 41, currentRank: 1 },
      { keyword: "luxury diamond jewellery showroom", baselineRank: 39, currentRank: 3 },
      { keyword: "polki jadau bridal collection", baselineRank: 46, currentRank: 2 },
      { keyword: "certified loose diamonds price", baselineRank: 52, currentRank: 4 },
      { keyword: "designer gold earrings lightweight", baselineRank: 29, currentRank: 1 },
      { keyword: "vip jewellery appointment booking", baselineRank: 48, currentRank: 2 },
    ],
    kpiTable: [
      { kpi: "Active Users", before: "31K", after: "162K", growth: "422.58%" },
      { kpi: "New Users", before: "15K", after: "135K", growth: "800.00%" },
      { kpi: "Backlinks", before: "3.8K", after: "14.6K", growth: "284.21%" },
      { kpi: "Referring Domains", before: "760", after: "1.6K", growth: "110.53%" },
      { kpi: "Keywords (All)", before: "5.9K", after: "18.4K", growth: "211.86%" },
    ],
  },
];
