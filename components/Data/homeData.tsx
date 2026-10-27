import type { LucideIcon } from "lucide-react";

import {
  ShoppingCart,
  Link2,
  Search,
  MessageSquare,
  Briefcase,
  Sparkles,
  TrendingDown,
  Wallet,
  MapPinOff,
  MousePointerClick,
  Trophy,
  Award,
  Star,
  Medal,
  ShieldCheck,
  Crown,
  Globe,

  Funnel,
  Brain,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  Check,
  Eye,
  Globe2,
  MousePointer2,

  Target,

  UserRound,
  X,





} from "lucide-react";

/* =========================================================
   REVENUE GROWTH TYPES
========================================================= */
export type RevenueIcon =
  | "google"
  | "ai"
  | "pipeline"
  | "revenue";
export type SlicePosition =
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left";




export type RevenueGradient = {
  from: string;
  to: string;
};

export type RevenueConnector = {
  enabled?: boolean;
  offset?: number;
  length?: number;
  curveX?: number;
  curveY?: number;
};

export type RevenueSlice = {
  id: string;

  label: string;

  title: string;

  description: string;

  color: string;

  textColor?: string;

  gradient?: RevenueGradient;

  position:
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left";

  contentPosition: "left" | "right";

  icons?: RevenueIcon[];

  labelFontSize?: number;

  connector?: RevenueConnector;
};

export type RevenueCapability = {
  title: string;
  description: string;
  icon?: LucideIcon;
};


/* =========================================================
   TYPES
========================================================= */
export type MarketingIconName =
  | "eye"
  | "mouse-pointer"
  | "user"
  | "chart"
  | "search"
  | "globe"
  | "target"
  | "cart";

export type MarketingCardItem = {
  title: string;
  text: string;
  icon: MarketingIconName;
};

export type MarketingContentCard = {
  title: string;
  text: string;
  icon: MarketingIconName;
}
export type MenuLink = {
  label: string;
  href: string;
  featured?: boolean;
};

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

export type StatItem = {
  value: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: {
    columns: MenuColumn[];
    featured?: FeaturedPanel;
    stats?: StatItem[];
    viewAll?: {
      label: string;
      href: string;
    };
  };
};

export type Testimonial = {
  name: string;
  role: string;
  videoSrc: string;
  posterSrc?: string;
};

export type ServiceLink = {
  title: string;
  href: string;
};

export type ServiceGridItem = {
  id: string;
  title: string;
  category: string;
  logoImage: string;
  description: string;
  description2: string;
  links: ServiceLink[];
};

export type ProblemSolution = {
  icon: LucideIcon;
  problem: string;
  problemDetail: string;
  solutionTitle: string;
  solutionDetail: string;
  stat: string;
  href: string;
};

export type AwardItem = {
  icon: LucideIcon;
  title: string;
  featured?: boolean;
};


/* =========================================================
   SINGLE CONTENT OBJECT
========================================================= */
const marketingIcons = {
  eye: Eye,
  "mouse-pointer": MousePointer2,
  user: UserRound,
  chart: BarChart3,
  search: Search,
  globe: Globe2,
  target: Target,
  cart: ShoppingCart,
} as const;
export const siteContent = {
  /* =======================================================
     SITE
  ======================================================= */

  site: {
    name: "IGR Digital",
    tagline: "Award-Winning Digital Growth Partner",

    topBar: {
      badgeText: "Integrated Growth Results",
      email: "hello@igrdigital.com",
      phone: "+91 98765 43210",
      whatsappHref: "https://wa.me/919876543210",
    },

    ctas: {
      secondary: {
        label: "Hire Us",
        href: "/hire-us",
      },

      primary: {
        label: "Book a Meeting",
        href: "/book-a-meeting",
      },
    },
  },


  /* =======================================================
     HERO
  ======================================================= */

  heroContent: {
    eyebrow: "Integrated Growth Results: SEO, AI Search, Paid Media and Content",
    headlineLine1: "SEO and Digital Marketing Agency That",
    headlineLine2: "Turns Search Into Qualified Leads",
    subheadline: "",
    description:
      "IGR Digital combines SEO, AI search optimization, Google Ads and conversion-focused content so your marketing produces enquiries you can act on. You get a clear plan, honest reporting and one team accountable for the numbers that matter to your business.",
    ctaPrimary: { label: "Get a Free SEO Audit", href: "/free-seo-audit/" },
    ctaSecondary: { label: "Book a Discovery Call", href: "/book-a-meeting" },
    clientCount: "6K+",
    clientAvatarInitials: ["A", "R", "S", "M"],
    stats: [
      {
        title: "1. Organic Growth Focus",
        description:
          "Technical SEO, content optimization and authority building designed to attract qualified traffic and drive meaningful conversions.",
      },
      {
        title: "2. 8+ Years of Industry Experience",
        description:
          "An experienced team delivering SEO, paid media and content strategies for businesses across multiple industries.",
      },
      {
        title: "3. One Integrated Team",
        description:
          "SEO, paid media, content and analytics working together under one unified growth strategy.",
      },
      {
        title: "4. Transparent Reporting",
        description:
          "Clear performance reports focused on leads, conversions and customer acquisition costs—not just keyword rankings.",
      },
      {
        title: "5. Data-Driven Strategies",
        description:
          "Campaign decisions guided by search insights, audience behavior and performance data to identify growth opportunities.",
      },
      {
        title: "6. AI-Powered Marketing",
        description:
          "AI-assisted research, insights and workflow optimization combined with human expertise to improve marketing efficiency.",
      },
      {
        title: "7. Customized Growth Plans",
        description:
          "Marketing strategies tailored to your business goals, target audience, industry competition and budget.",
      },
      {
        title: "8. Conversion-Focused Execution",
        description:
          "Landing page optimization, audience targeting and campaign improvements designed to turn website visitors into potential customers.",
      },
    ],
    videoSrc: "/public/Hero.mp4",
    posterSrc: "/public/Hero/hero-poster.jpg",
  },


  /* =======================================================
     NAVIGATION
  ======================================================= */

  navigation: {
    items: [
      {
        label: "Home",
        href: "/",
      },

      {
        label: "Who We Are",
        href: "/about",
      },

      {
        label: "Services",
        href: "/services",

        megaMenu: {
          columns: [
            {
              title: "Platform SEO",
              icon: ShoppingCart,

              links: [
                {
                  label: "E-commerce SEO",
                  href: "/services/ecommerce-seo",
                },

                {
                  label: "Shopify SEO",
                  href: "/services/shopify-seo",
                },

                {
                  label: "WordPress SEO",
                  href: "/services/wordpress-seo",
                },

                {
                  label: "Webflow SEO",
                  href: "/services/webflow-seo",
                },
              ],
            },

            {
              title: "Off-Page SEO",
              icon: Link2,

              links: [
                {
                  label: "Link Building",
                  href: "/services/link-building",
                },

                {
                  label: "Guest Posting",
                  href: "/services/guest-posting",
                },

                {
                  label: "Digital PR",
                  href: "/services/digital-pr",
                },
              ],
            },

            {
              title: "Core SEO",
              icon: Search,

              links: [
                {
                  label: "Custom SEO",
                  href: "/services/custom-seo",
                  featured: true,
                },

                {
                  label: "Local SEO",
                  href: "/services/local-seo",
                },

                {
                  label: "Enterprise SEO",
                  href: "/services/enterprise-seo",
                },

                {
                  label: "On-Page SEO",
                  href: "/services/on-page-seo",
                },
              ],
            },

            {
              title: "Consulting",
              icon: MessageSquare,

              links: [
                {
                  label: "SEO Consultancy",
                  href: "/services/consultancy",
                },

                {
                  label: "Free Website Audit",
                  href: "/services/free-audit",
                },

                {
                  label: "Technical Audit",
                  href: "/services/technical-audit",
                },
              ],
            },

            {
              title: "Industries",
              icon: Briefcase,

              links: [
                {
                  label: "For Startups",
                  href: "/industries/startups",
                },

                {
                  label: "For Healthcare",
                  href: "/industries/healthcare",
                },

                {
                  label: "For Real Estate",
                  href: "/industries/real-estate",
                },

                {
                  label: "View All Industries",
                  href: "/industries",
                },
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
            {
              value: "3M+",
              label: "keywords ranked",
            },

            {
              value: "2M+",
              label: "leads generated",
            },

            {
              value: "10K+",
              label: "happy clients",
            },
          ],

          viewAll: {
            label: "View all services",
            href: "/services",
          },
        },
      },

      {
        label: "Digital Marketing",
        href: "/digital-marketing",

        megaMenu: {
          columns: [
            {
              title: "Paid Media",
              icon: Sparkles,

              links: [
                {
                  label: "Google Ads (PPC)",
                  href: "/services/google-ads",
                },

                {
                  label: "Meta Ads",
                  href: "/services/meta-ads",
                },

                {
                  label: "LinkedIn Ads",
                  href: "/services/linkedin-ads",
                },
              ],
            },

            {
              title: "Content & Social",
              icon: MessageSquare,

              links: [
                {
                  label: "Content Marketing",
                  href: "/services/content-marketing",
                },

                {
                  label: "Social Media Management",
                  href: "/services/social-media",
                },
              ],
            },
          ],

          viewAll: {
            label: "View all digital marketing",
            href: "/digital-marketing",
          },
        },
      },

      {
        label: "Case Studies",
        href: "/case-studies",
      },

      {
        label: "Resources",
        href: "/resources",
      },
    ] as NavItem[],
  },


  /* =======================================================
     SERVICES
  ======================================================= */

  services: [
    {
      id: "01",
      title: "Platform SEO",
      category: "SEO Services",

      logoImage: "/images/services/platform-seo.svg",

      description:
        "Build a stronger search presence across the platforms that power your business. Our platform SEO services are designed to improve visibility, technical performance, and organic growth across modern website platforms.",

      description2:
        "From ecommerce stores to CMS-based websites, we optimize your platform's structure, content, and search experience to create a strong foundation for sustainable rankings.",

      links: [
        {
          title: "E-commerce SEO",
          href: "/services/ecommerce-seo",
        },

        {
          title: "Shopify SEO",
          href: "/services/shopify-seo",
        },

        {
          title: "WordPress SEO",
          href: "/services/wordpress-seo",
        },

        {
          title: "Webflow SEO",
          href: "/services/webflow-seo",
        },
      ],
    },

    {
      id: "02",
      title: "Off-Page SEO",
      category: "SEO Services",

      logoImage: "/images/services/off-page-seo.svg",

      description:
        "Strengthen your website's authority and reputation with strategic off-page SEO campaigns built around high-quality links, digital PR, and meaningful brand visibility.",

      description2:
        "We focus on building relevant authority signals that support stronger rankings, improve brand credibility, and create long-term organic growth.",

      links: [
        {
          title: "Link Building",
          href: "/services/link-building",
        },

        {
          title: "Guest Posting",
          href: "/services/guest-posting",
        },

        {
          title: "Digital PR",
          href: "/services/digital-pr",
        },
      ],
    },

    {
      id: "03",
      title: "Core SEO",
      category: "SEO Services",

      logoImage: "/images/services/core-seo.svg",

      description:
        "Create a technically strong and search-focused website with SEO strategies built around your business goals, audience, and competitive landscape.",

      description2:
        "From on-page optimization to enterprise and local search, we improve the elements that help search engines understand, trust, and rank your website.",

      links: [
        {
          title: "Custom SEO",
          href: "/services/custom-seo",
        },

        {
          title: "Local SEO",
          href: "/services/local-seo",
        },

        {
          title: "Enterprise SEO",
          href: "/services/enterprise-seo",
        },

        {
          title: "On-Page SEO",
          href: "/services/on-page-seo",
        },
      ],
    },

    {
      id: "04",
      title: "Consulting",
      category: "SEO Services",

      logoImage: "/images/services/seo-consulting.svg",

      description:
        "Get a clear SEO strategy backed by data, technical expertise, and a practical roadmap designed around your specific business objectives.",

      description2:
        "Whether you need an expert second opinion, a complete SEO roadmap, or help identifying growth opportunities, our consultants help you make confident decisions.",

      links: [
        {
          title: "SEO Consultancy",
          href: "/services/consultancy",
        },

        {
          title: "Free Website Audit",
          href: "/services/free-audit",
        },

        {
          title: "Technical Audit",
          href: "/services/technical-audit",
        },
      ],
    },

    {
      id: "05",
      title: "Industries",
      category: "SEO Services",

      logoImage: "/images/services/industries.svg",

      description:
        "SEO strategies built around the unique search behavior, competition, and customer journey of your industry.",

      description2:
        "We adapt our approach to your market so your website can attract the right audience, generate qualified traffic, and turn organic visibility into measurable business growth.",

      links: [
        {
          title: "For Startups",
          href: "/industries/startups",
        },

        {
          title: "For Healthcare",
          href: "/industries/healthcare",
        },

        {
          title: "For Real Estate",
          href: "/industries/real-estate",
        },

        {
          title: "View All Industries",
          href: "/industries",
        },
      ],
    },

    {
      id: "06",
      title: "Paid Media",
      category: "Digital Marketing",

      logoImage: "/images/services/paid-media.svg",

      description:
        "Turn advertising spend into measurable growth with targeted paid media campaigns designed to reach the right audience at the right moment.",

      description2:
        "From search campaigns to social advertising, we build, optimize, and scale performance campaigns around clicks, conversions, leads, and revenue.",

      links: [
        {
          title: "Google Ads (PPC)",
          href: "/services/google-ads",
        },

        {
          title: "Meta Ads",
          href: "/services/meta-ads",
        },

        {
          title: "LinkedIn Ads",
          href: "/services/linkedin-ads",
        },
      ],
    },

    {
      id: "07",
      title: "Content & Social",
      category: "Digital Marketing",

      logoImage: "/images/services/content-social.svg",

      description:
        "Build a recognizable digital presence through content and social strategies that attract audiences, strengthen your brand, and keep customers engaged.",

      description2:
        "We combine valuable content with consistent social media execution to create meaningful brand visibility across the channels where your audience spends time.",

      links: [
        {
          title: "Content Marketing",
          href: "/services/content-marketing",
        },

        {
          title: "Social Media Management",
          href: "/services/social-media",
        },
      ],
    },
  ] as ServiceGridItem[],


  /* =======================================================
     PROBLEMS → SOLUTIONS
  ======================================================= */



  // ...

  problemsSolutions: {
    eyebrow: "Sound Familiar",

    headline: "Turning Marketing Problems Into Growth",

    description:
      "These are the common marketing challenges businesses face — and how IGR Digital helps turn them into measurable growth opportunities.",

    items: [
      {
        icon: Search,

        problem:
          "We rank for keywords that don't bring in customers.",

        problemDetail:
          "Traffic looks fine in reports, but it's not the traffic that converts.",

        solutionTitle: "Custom SEO Strategy",

        solutionDetail:
          "We rebuild your keyword strategy around buyer intent — not just search volume — so traffic starts turning into leads.",

        stat: "Avg. 3x qualified organic traffic",

        href: "/services/custom-seo",
      },

      {
        icon: TrendingDown,

        problem:
          "Our rankings dropped overnight and we don't know why.",

        problemDetail:
          "No warning, no explanation — just a sudden traffic cliff.",

        solutionTitle: "Technical SEO Audit",

        solutionDetail:
          "A full technical audit finds the crawl, indexing, or Core Web Vitals issue behind the drop — and fixes it.",

        stat: "100+ point technical checklist",

        href: "/services/technical-audit",
      },

      {
        icon: Wallet,

        problem:
          "We're spending more on ads but cost-per-lead keeps rising.",

        problemDetail:
          "The budget keeps growing, but the return doesn't.",

        solutionTitle: "Google Ads Management",

        solutionDetail:
          "We rebuild campaign structure and targeting to cut wasted spend and lower your cost-per-lead.",

        stat: "Avg. 25% lower cost-per-lead",

        href: "/services/google-ads",
      },

      {
        icon: MapPinOff,

        problem:
          "Customers can't find us in local search or Google Maps.",

        problemDetail:
          "Nearby customers are searching — but a competitor shows up first.",

        solutionTitle: "Local SEO",

        solutionDetail:
          "We optimise your Google Business Profile and local citations to get you into the map pack.",

        stat: "Top-3 map pack rankings",

        href: "/services/local-seo",
      },

      {
        icon: MousePointerClick,

        problem:
          "Our website gets traffic, but it isn't turning into leads.",

        problemDetail:
          "Visitors land, scroll, and leave — with nothing to convert them.",

        solutionTitle: "Content Marketing",

        solutionDetail:
          "We build content around real keyword research and clear conversion paths — written to rank and to convert.",

        stat: "Content built to rank and convert",

        href: "/services/content-marketing",
      },

      {
        icon: Trophy,

        problem:
          "A competitor keeps outranking us for our own brand terms.",

        problemDetail:
          "Even branded searches are landing on someone else's page.",

        solutionTitle: "Digital PR & Link Building",

        solutionDetail:
          "We build the domain authority that supports stronger search visibility over time.",

        stat: "Stronger domain authority over time",

        href: "/services/digital-pr",
      },
    ],
  },




  /* =======================================================
     TESTIMONIALS
  ======================================================= */

  testimonials: {
    headline: "Clients Recommend Us",

    description:
      "Our digital marketing services have made a real difference for the brands we work with. Hear directly from our clients about how we've helped them grow their online business.",

    testimonials: [
      {
        name: "Client Name",
        role: "Business Owner",
        videoSrc:
          "/videos/testimonials/client-1.mp4",
      },

      {
        name: "Client Name",
        role: "Founder, Startup",
        videoSrc:
          "/videos/testimonials/client-2.mp4",
      },

      {
        name: "Client Name",
        role: "Marketing Head",
        videoSrc:
          "/videos/testimonials/client-3.mp4",
      },

      {
        name: "Client Name",
        role: "E-commerce Brand",
        videoSrc:
          "/videos/testimonials/client-4.mp4",
      },
    ] as Testimonial[],
  },


  /* =======================================================
     AWARDS
  ======================================================= */

  awardsContent: {
    eyebrow: "Certifications",
    headlinePlain: "Certifications and",
    headlineHighlight: "Partnerships",
    description:
      "Platforms and programmes that recognise our work.",

    awards: [
      {
        title: "Semrush Certified Agency Partner",
        image: "/awards/footer-enquiry-form.jpeg",
        alt: "Semrush Certified Agency Partner badge",
      },
      {
        title: "Clutch",
        image: "/awards/clutch.webp",
        alt: "Clutch agency badge",
      },
      {
        title: "Meta Marketing Partner",
        image: "/awards/facebook-marketing.webp",
        alt: "Meta Marketing Partners badge",
      },
      {
        title: "Top Rated 2022",
        image: "/awards/fitsmallbusiness.webp",
        alt: "Top Rated 2022 agency badge",
      },
      {
        title: "Google Partner",
        image: "/awards/google-partner.webp",
        alt: "Google Partner badge",
      },
      {
        title: "Microsoft Advertising Partner",
        image: "/awards/bing.webp",
        alt: "Microsoft Advertising Partner badge for Bing Ads services",
      },
    ],
  },
  tustedBrands: {
    eyebrow: "Trusted by ambitious businesses",

    headline: "Trusted by brands.",

    headlineHighlight: "Proven by results.",

    description:
      "We partner with ambitious businesses to build visibility, generate qualified demand and create measurable, long-term growth.",

    logoHeading: "Businesses we've worked with & inspired by",

    brands: [
      {
        name: "Google",
        logo: "/images/brands/google.svg",
      },
      {
        name: "Microsoft",
        logo: "/images/brands/microsoft.svg",
      },
      {
        name: "Amazon",
        logo: "/images/brands/amazon.svg",
      },
      {
        name: "Tata",
        logo: "/images/brands/tata.svg",
      },
      {
        name: "Reliance",
        logo: "/images/brands/reliance.svg",
      },
      {
        name: "Infosys",
        logo: "/images/brands/infosys.svg",
      },
      {
        name: "Wipro",
        logo: "/images/brands/wipro.svg",
      },
      {
        name: "HDFC Bank",
        logo: "/images/brands/hdfc-bank.svg",
      },
      {
        name: "Apollo",
        logo: "/images/brands/apollo.svg",
      },
      {
        name: "Zomato",
        logo: "/images/brands/zomato.svg",
      },
      {
        name: "PhonePe",
        logo: "/images/brands/phonepe.svg",
      },
      {
        name: "Deloitte",
        logo: "/images/brands/deloitte.svg",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "WHY IGR DIGITAL",
    headline: "Built for Growth. Backed by Technology.",
    description:
      "We combine search strategy, performance marketing, AI-powered insights, and technical execution to build digital growth systems that are measurable and scalable.",

    statusLabel: "SYSTEM ACTIVE",

    autoAdvanceText: "Auto advancing",
    pausedText: "Paused — hover to resume",

    slides: [
      {
        fileLabel: "01 / VISIBILITY",
        fileTitle: "Search Visibility",
        fileDesc: "Turn search demand into qualified traffic",

        eyebrow: "SEARCH-FIRST GROWTH",

        headingLine1: "We don't just target",
        headingLine2: "keywords. We build visibility.",

        proofTitle: "Search strategy built around intent",
        proofBody:
          "Our SEO approach combines technical optimization, content strategy, authority building, and search-intent mapping to help your brand become easier to discover across modern search journeys.",

        otherTitle: "The traditional approach",
        otherBody:
          "Many campaigns focus on publishing content and tracking rankings without connecting search visibility to business goals, user intent, and conversion opportunities.",

        footNote:
          "From technical SEO to content and authority, every activity is designed to strengthen your organic search presence over time.",

        visual: "serp",
      },

      {
        fileLabel: "02 / INTELLIGENCE",
        fileTitle: "Data & AI Intelligence",
        fileDesc: "Turn marketing data into smarter decisions",

        eyebrow: "AI-POWERED INTELLIGENCE",

        headingLine1: "From scattered data",
        headingLine2: "to actionable growth signals.",

        proofTitle: "Data-driven decisions",
        proofBody:
          "We connect search, audience, content, and performance signals to identify opportunities, understand user intent, and continuously improve your digital growth strategy.",

        otherTitle: "The dashboard-only approach",
        otherBody:
          "Reporting numbers without understanding why they changed can make it difficult to identify the next opportunity or decide where marketing effort should go.",

        footNote:
          "AI-assisted research and analysis help our team move faster while keeping strategy, human judgment, and business objectives at the center.",

        visual: "analytics",
      },

      {
        fileLabel: "03 / PERFORMANCE",
        fileTitle: "Technical Performance",
        fileDesc: "Fast experiences built for users and search",

        eyebrow: "PERFORMANCE ENGINEERING",

        headingLine1: "Better technology",
        headingLine2: "creates better experiences.",

        proofTitle: "Performance built into the experience",
        proofBody:
          "We focus on technical foundations, Core Web Vitals, responsive experiences, efficient assets, and clean implementation so users can navigate your digital presence with less friction.",

        otherTitle: "The afterthought approach",
        otherBody:
          "When performance is considered only after a website is built, fixing heavy assets, inefficient code, and technical bottlenecks can become much harder.",

        footNote:
          "Performance is treated as part of the growth system — supporting usability, search visibility, engagement, and conversion.",

        visual: "speed",
      },
    ],
  },

  revenueMarketingContent: {
    header: {
      badge: "Digital marketing that drives business growth",

      title: "Digital Marketing Built Around",

      highlight: "Visibility, Leads and Revenue",

      description:
        "From search rankings to sales conversations, every service is chosen for the business result it supports.",
    },

    leftCards: [
      {
        title: "Brand Visibility",
        text:
          "Appear where buyers look: Google, AI answers, maps and social platforms.",
        icon: "eye",
      },
      {
        title: "Website Traffic",
        text:
          "Attract relevant visitors through organic search, paid media and content, not just more visitors.",
        icon: "mouse-pointer",
      },
      {
        title: "Lead Generation",
        text:
          "Turn visits into enquiries with focused landing pages, forms and follow-up.",
        icon: "user",
      },
      {
        title: "Marketing Data",
        text:
          "See rankings, traffic, conversions and cost per lead in one place.",
        icon: "chart",
      },
    ],

    rightCards: [
      {
        title: "SEO Growth",
        text:
          "Technical, on-page, off-page and local SEO, plus optimization for AI search.",
        icon: "search",
      },
      {
        title: "Qualified Traffic",
        text:
          "Reach people who are actively searching for what you sell.",
        icon: "globe",
      },
      {
        title: "Better Conversions",
        text:
          "Improve page experience, calls to action and funnels so more visitors enquire.",
        icon: "target",
      },
      {
        title: "Business Revenue",
        text:
          "Connect marketing activity to leads, sales and customer acquisition.",
        icon: "cart",
      },
    ],

    centerImage: {
      src: "/hero/funnel.webp",
      alt: "Digital marketing and revenue growth funnel",
      width: 310,
      height: 310,
    },

    contentCards: [
      {
        title: "Search Engine Optimization",
        text:
          "Technical SEO, on-page optimization, keyword research, content strategy, internal linking, schema markup, local SEO and link building, plus visibility in AI search.",
        icon: "search",
        href: "/services/seo/",
      },
      {
        title: "Performance Marketing",
        text:
          "Google Ads, paid search, remarketing, social ads, ecommerce campaigns and landing page optimization focused on lead quality and cost per acquisition.",
        icon: "mouse-pointer",
        href: "/services/ppc/",
      },
      {
        title: "Analytics and Growth",
        text:
          "Conversion tracking, reporting dashboards, lead attribution and conversion rate optimization that show what is working.",
        icon: "chart",
        href: "/services/performance-marketing/",
      },
    ],

    comparison: {
      traditional: {
        title: "Traditional Digital Marketing",
        text:
          "When SEO, ads, content and analytics sit with different vendors, nobody owns the full picture. Reports show activity, but not which work produced leads or revenue.",
      },

      dataDriven: {
        title: "Data-Driven Digital Marketing",
        text:
          "We plan SEO, paid media, content, website optimization and analytics together, so each channel supports the others and reporting tracks leads and customer acquisition.",
      },
    },

    keywordContent: {
      heading: "Digital Marketing Services Organised Around Your Goals",

      paragraphs: [
        {
          text:
            "Most businesses need a mix of channels, not just one. We group our work into four areas:\n•Search: technical SEO, on-page SEO, local, ecommerce and enterprise SEO, and link building.\n•AI search: AI SEO, answer engine optimization (AEO) and generative engine optimization (GEO), so your brand is clear and credible to AI assistants as well as search engines.\n•Paid media: Google Ads, Meta ads, LinkedIn ads and ecommerce campaigns.\n•Content, social and conversion: content marketing, social media management, landing pages and conversion rate optimization.",
        },
        {
          text:
            "We also help with email marketing, influencer marketing, online reputation management, website optimization and analytics. Not sure what you need first? Start with an assessment of your website and competitors, and we will show you where the biggest opportunities are.",
        },
      ],
    },

    cta: {
      label: "Explore Digital Marketing Services",
      href: "/services/",
    },

    theme: {
      sectionBackground: "#ffffff",
      cardBackground: "#ffffff",
      borderColor: "#E2E8F0",
      mutedText: "#64748B",
    },
  },

  provenResults: {
    eyebrow: "Proven Results",

    title: "Work that speaks",

    titleHighlight: "in numbers.",

    description:
      "We measure success by the growth that happens after the strategy goes live — not just by the work delivered.",

    exploreLabel: "Explore Case Study",

    caseStudies: [
      // =====================================================
      // 01. DREAM HOUSE GROUP — REAL ESTATE
      // =====================================================
      {
        id: "dream-house-group",
        client: "Dream House Group",
        category: "Real Estate",
        description:
          "A focused digital growth strategy helped Dream House Group strengthen real estate search visibility, attract high-intent property buyers and generate more qualified enquiries.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/dream-house-group",
        results: [
          {
            value: "3.6×",
            label: "Organic Traffic",
          },
          {
            value: "240+",
            label: "Property Keywords",
          },
        ],
      },

      // =====================================================
      // 02. EDUCATION SYSTEM
      // =====================================================
      {
        id: "education-system",
        client: "Education System",
        category: "Education",
        description:
          "An education-focused SEO and digital marketing strategy improved search visibility, strengthened local presence and helped connect prospective students and parents with the right programs.",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/education-system",
        results: [
          {
            value: "2.9×",
            label: "Organic Growth",
          },
          {
            value: "150+",
            label: "Keywords Ranked",
          },
        ],
      },

      // =====================================================
      // 03. CHATTO
      // =====================================================
      {
        id: "chatto",
        client: "Chatto",
        category: "Beauty & Personal Care",
        description:
          "Strategic SEO, stronger content visibility and focused search execution helped Chatto turn organic search into a measurable growth channel.",
        image:
          "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/chatto",
        results: [
          {
            value: "4×",
            label: "Boost Traffic Rate",
          },
          {
            value: "500+",
            label: "Backlinks Created",
          },
        ],
      },

      // =====================================================
      // 04. RAJASTHAN CAR WORLD
      // =====================================================
      {
        id: "rajasthan-car-world",
        client: "Rajasthan Car World",
        category: "Automobile",
        description:
          "A focused search strategy improved local visibility, captured high-intent searches and created a stronger flow of qualified enquiries.",
        image:
          "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/rajasthan-car-world",
        results: [
          {
            value: "3.2×",
            label: "Organic Traffic",
          },
          {
            value: "180+",
            label: "Keywords Improved",
          },
        ],
      },

      // =====================================================
      // 05. REGAIN ROOTS
      // =====================================================
      {
        id: "regain-roots",
        client: "Regain Roots",
        category: "Healthcare",
        description:
          "A search-first growth strategy combining technical SEO, content authority and relevant healthcare queries increased qualified organic visibility.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/regain-roots",
        results: [
          {
            value: "2.8×",
            label: "Organic Growth",
          },
          {
            value: "120+",
            label: "Keywords Ranked",
          },
        ],
      },

      // =====================================================
      // 06. JAWAHARAT
      // =====================================================
      {
        id: "jawaharat",
        client: "Jawaharat",
        category: "Jewellery",
        description:
          "Local SEO, content strategy and technical improvements helped the brand strengthen its digital presence and reach customers actively searching for jewellery.",
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85",
        href: "/case-studies/jawaharat",
        results: [
          {
            value: "210%",
            label: "Search Growth",
          },
          {
            value: "90+",
            label: "Top Keywords",
          },
        ],
      },
    ],

    bottomText: "Different industries. Different challenges.",

    bottomHighlight: "One consistent focus — measurable growth.",
  },




  caseStudies: {
    eyebrow: "Case Studies",

    title: "Real Strategies.",

    titleHighlight: "Real Results.",

    description:
      "Explore how our digital marketing strategies help businesses generate more traffic, leads and revenue.",

    viewCaseStudyLabel: "View Full Case Study",

    startProjectLabel: "Start a Project",

    startProjectHref: "/contact",

    caseStudies: [
      {
        id: "ecommerce",

        category: "E-COMMERCE",

        tabName: "E-commerce",

        title:
          "Scaled an E-commerce Brand to 4X Revenue",

        description:
          "A performance-driven digital marketing strategy that increased revenue, improved ROAS and created a consistent flow of high-intent customers.",

        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",

        imageAlt:
          "E-commerce digital marketing case study",

        icon: "shopping-cart",

        color: "blue",

        points: [
          "Performance marketing focused on high-intent audiences",

          "Conversion-focused landing page optimization",

          "Retargeting strategy to increase repeat purchases",
        ],

        results: [
          {
            value: "4X",

            title: "Revenue Growth",

            description: "overall revenue",

            icon: "trending-up",
          },

          {
            value: "280%",

            title: "ROI Growth",

            description: "from ad spend",

            icon: "rocket",
          },

          {
            value: "160%",

            title: "Traffic Growth",

            description: "organic + paid",

            icon: "users",
          },

          {
            value: "45%",

            title: "Conversion Growth",

            description: "landing pages",

            icon: "phone-call",
          },
        ],
      },

      {
        id: "healthcare",

        category: "HEALTHCARE",

        tabName: "Healthcare",

        title:
          "Increased Patient Bookings by 250%",

        description:
          "A local SEO and Google Ads strategy designed to improve online visibility, build trust and drive qualified healthcare appointments.",

        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",

        imageAlt:
          "Healthcare digital marketing case study",

        icon: "heart-pulse",

        color: "green",

        points: [
          "Local SEO strategy targeting high-intent searches",

          "Google Ads campaigns focused on qualified patients",

          "Conversion optimization for appointment pages",
        ],

        results: [
          {
            value: "250%",

            title: "Patient Bookings",

            description: "increase in bookings",

            icon: "phone-call",
          },

          {
            value: "190%",

            title: "Lead Growth",

            description: "qualified leads",

            icon: "users",
          },

          {
            value: "140%",

            title: "Organic Traffic",

            description: "local searches",

            icon: "trending-up",
          },

          {
            value: "3.2X",

            title: "ROI",

            description: "marketing spend",

            icon: "rocket",
          },
        ],
      },

      {
        id: "education",

        category: "EDUCATION",

        tabName: "Education",

        title:
          "Boosted Admissions by 200%",

        description:
          "A full-funnel digital marketing strategy that helped an education brand generate more qualified leads and convert them into admissions.",

        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",

        imageAlt:
          "Education digital marketing case study",

        icon: "graduation-cap",

        color: "red",

        points: [
          "Google Search campaigns targeting admission keywords",

          "High-converting admission landing pages",

          "Lead nurturing and remarketing campaigns",
        ],

        results: [
          {
            value: "200%",

            title: "Admissions",

            description: "increase in admissions",

            icon: "graduation-cap",
          },

          {
            value: "300%",

            title: "Lead Growth",

            description: "qualified enquiries",

            icon: "users",
          },

          {
            value: "170%",

            title: "Traffic Growth",

            description: "organic + paid",

            icon: "trending-up",
          },

          {
            value: "42%",

            title: "Conversion Rate",

            description: "landing pages",

            icon: "phone-call",
          },
        ],
      },

      {
        id: "hospitality",

        category: "HOSPITALITY",

        tabName: "Hospitality",

        title:
          "Increased Restaurant Reservations by 180%",

        description:
          "A local SEO and social media strategy that improved restaurant visibility, increased customer engagement and generated more reservations.",

        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",

        imageAlt:
          "Hospitality digital marketing case study",

        icon: "utensils",

        color: "yellow",

        points: [
          "Google Business Profile and local SEO optimization",

          "Social media campaigns focused on local audiences",

          "Reservation funnel and landing page optimization",
        ],

        results: [
          {
            value: "180%",

            title: "Reservations",

            description: "increase in bookings",

            icon: "utensils",
          },

          {
            value: "220%",

            title: "Engagement",

            description: "social media",

            icon: "users",
          },

          {
            value: "150%",

            title: "Local Traffic",

            description: "Google searches",

            icon: "trending-up",
          },

          {
            value: "3X",

            title: "ROI Growth",

            description: "marketing spend",

            icon: "rocket",
          },
        ],
      },
    ],
  },
}



export const revenueGrowth = {
  eyebrow: "Integrated growth results",

  title: "One Team for SEO, Paid Media, Content and Analytics",

  description:
    "IGR stands for Integrated Growth Results, and that is how we work. Instead of running SEO, ads, content and reporting as separate projects, we plan them together around one goal: more qualified enquiries and customers from your digital channels.",

  secondaryDescription:
    "Our IGR Revenue Engine shows how the pieces connect: attract the right audience, turn interest into pipeline, learn from the data, then put budget behind what works.",

  primaryCta: "Get a Free SEO Audit",

  secondaryCta: "Explore Our Services",

  slices: [
    {
      label: "Acquisition",
      color: "#087FF5",
      gradient: "blueSlice",
      textColor: "#087FF5",
      title: "Drive More Qualified Traffic",
      description:
        "Attract the right visitors with SEO, paid media, content, and social strategies that fuel your top of funnel.",
      position: "top-left",
      contentPosition: "left",
      icons: ["google", "ai"],
    },

    {
      label: "Pipeline",
      color: "#20BDBD",
      gradient: "cyanSlice",
      textColor: "#20BDBD",
      title: "Generate More Qualified Leads",
      description:
        "Turn visitors into form fills, calls, and conversations that seamlessly move into your sales pipeline.",
      position: "top-right",
      contentPosition: "right",
      icons: ["pipeline"],
    },

    {
      label: "Revenue",
      color: "#20C978",
      gradient: "greenSlice",
      textColor: "#20C978",
      title: "Close More Deals & Grow Revenue",
      description:
        "Convert more opportunities into customers and build a repeatable, predictable revenue engine.",
      position: "bottom-right",
      contentPosition: "right",
      icons: ["revenue"],
    },

    {
      label: "AI Intelligence",
      color: "#B32BB2",
      gradient: "purpleSlice",
      textColor: "#B32BB2",
      title: "Make Smarter Marketing Decisions",
      description:
        "Use AI-powered insights and easy-to-read dashboards to optimize marketing investments.",
      position: "bottom-left",
      contentPosition: "left",
      icons: ["ai"],
    },
  ],

  capabilities: [
    {
      title: "SEO",
      subtitle: "Organic Growth",
      color: "#4285F4",
    },

    {
      title: "PPC",
      subtitle: "Paid Growth",
      color: "#EA4335",
    },

    {
      title: "AI",
      subtitle: "Smarter Marketing",
      color: "#34A853",
    },

    {
      title: "Analytics",
      subtitle: "Measurable Results",
      color: "#B32BB2",
    },
  ],

  showCapabilities: true,

  showBackgroundGrid: true,
} satisfies any;


/* =========================================================
   OPTIONAL: TYPE OF COMPLETE CONTENT OBJECT
========================================================= */

export type SiteContent = typeof siteContent;