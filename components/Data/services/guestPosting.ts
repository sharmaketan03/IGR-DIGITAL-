import {
  Link2,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";
import { siteContent } from "@/components/Data/homeData";
import { servicesComparison } from "@/components/Data/servicedata";
import type { ServicePageData } from "@/components/Data/servicePageData";

export const guestPostingData: ServicePageData = {
  hero: {
    eyebrow: "Contextual Guest Posts on Authoritative Industry Publications for Higher Rankings",
    headline: "Guest Posting Services on Real Sites With Real Traffic",
    paragraph:
      "A backlink only helps when it sits on a site people actually read. IGR Digital is a guest posting agency that writes useful articles, pitches the right editors and places contextual links on relevant sites with genuine audiences. We handle content, outreach and placement, so you get links that build authority and bring real visitors.",
    inputPlaceholder: "Enter your website domain",
    ctaLabel: "Request a Link Plan",
    circles: [
      {
        id: "traffic-growth",
        value: 310,
        suffix: "%",
        label: "Top-10 keyword rankings",
        sub: "Rankings lift",
        backText: "Contextual guest posts placed on real industry sites create authoritative surges across target keywords.",
        className: "circle-blue",
      },
      {
        id: "dr-lift",
        value: 18,
        suffix: "+",
        label: "Average domain rating increase",
        sub: "Within 6 months",
        backText: "Editorial links from vetted publications increase site-wide domain authority.",
        className: "circle-violet",
      },
      {
        id: "links-built",
        value: 100,
        suffix: "%",
        label: "Manual, white-hat outreach",
        sub: "Zero shortcuts",
        backText: "Zero PBNs or link farms. We execute personalized outreach to real editors and blogs.",
        className: "circle-navy",
      },
    ],
    testimonial: {
      quote:
        "IGR Digital placed contextual guest posts on authoritative industry sites that brought genuine referral visits and boosted our rankings.",
      reviewerInitial: "I",
      reviewerName: "IGR Digital Client Partner",
      ratings: [
        { label: "Rated 4.9/5 on Clutch" },
        { label: "100% White-Hat Guarantee" },
      ],
    },
  },

  awards: siteContent.awardsContent,
  trustedBrands: siteContent?.tustedBrands,
  agencyDifference: siteContent.whyChooseUs,
  comparisonSection: servicesComparison,
  caseStudies: siteContent?.caseStudies,

  // Section 12: Pricing
  pricing: {
    eyebrow: "Guest Posting Packages",
    title: "Guest Posting Packages Designed for Authority",
    description:
      "Guest posting pricing depends on your niche, site quality and link volume. These guest post packages are a starting point, and we tailor every proposal after your free review.",
    plans: [
      {
        name: "Starter",
        price: "Custom quote",
        period: "",
        description: "For startups and small businesses building early authority.",
        features: [
          "Site research and topic plan",
          "Original article writing",
          "Manual outreach and placement",
          "Monthly reporting",
        ],
        ctaText: "Get Starter Quote",
        ctaHref: "/contact",
      },
      {
        name: "Growth",
        price: "Custom quote",
        period: "",
        popular: true,
        description: "For SaaS and B2B brands that want faster results.",
        features: [
          "Everything in Starter",
          "Higher monthly placement volume",
          "Anchor and page strategy",
          "Higher-authority site targets",
          "Bi-weekly calls",
        ],
        ctaText: "Get Growth Quote",
        ctaHref: "/contact",
      },
      {
        name: "Custom",
        price: "Let's talk",
        period: "",
        description: "For large brands and competitive niches.",
        features: [
          "Dedicated outreach team",
          "Premium publication targets",
          "Digital PR support",
          "Custom reporting and strategy",
        ],
        ctaText: "Talk to Us",
        ctaHref: "/contact",
      },
    ],
  },

  // Section 8: Editorial Standards Banner
  whyChooseUs: {
    eyebrow: "Strict Editorial Standards",
    title: "Strict Editorial Standards and 100% White-Hat Outreach",
    description:
      "We only place guest posts on real sites with real audiences. We do not use private blog networks, link farms, hidden links or sites that exist only to sell links.",
    benefits: [
      {
        icon: ShieldCheck,
        title: "100% Manual, White-Hat Outreach",
        description:
          "Personal pitches to editors and site owners in your niche, written for their specific audience.",
      },
      {
        icon: Target,
        title: "Real Sites with Real Audiences",
        description:
          "Vetted industry blogs, publications and tool portals with active organic traffic and readers.",
      },
      {
        icon: Award,
        title: "Original, Editor-Approved Content",
        description:
          "High-value, informative articles written by subject-matter specialists and tailored to editorial standards.",
      },
      {
        icon: BarChart3,
        title: "Contextual In-Content Placements",
        description:
          "Natural editorial mentions and anchors embedded directly in body copy for maximum algorithmic value.",
      },
      {
        icon: Zap,
        title: "Strict Quality Review",
        description:
          "Every site checked for organic traffic trends, index status, editorial standards and spam score.",
      },
      {
        icon: Link2,
        title: "Transparent Performance Reporting",
        description:
          "Complete monthly reports with live URLs, anchor text, target landing pages and ranking impact.",
      },
    ],
  },

  // Section 3 & 16: SEO Built for Sustainable Growth (comparison)
  comparisonTable: {
    eyebrow: "SEO Built for Sustainable Growth",
    title: "SEO Built for Sustainable Growth",
    description:
      "Not every guest post service is the same. Here is how our approach compares with typical bulk providers.",
    usLabel: "IGR Digital",
    competitorsLabel: "Typical Bulk Providers",
    inHouseLabel: "DIY In-House",
    rows: [
      {
        feature: "Site selection",
        competitors: "Any site that accepts payment",
        us: "Niche-relevant, real-traffic sites",
      },
      {
        feature: "Content",
        competitors: "Thin or reused articles",
        us: "Original, useful, editor-ready",
      },
      {
        feature: "Outreach",
        competitors: "Automated or none",
        us: "Manual and personalized",
      },
      {
        feature: "Link placement",
        competitors: "Footer or sidebar",
        us: "Contextual, inside the article",
      },
      {
        feature: "Quality review",
        competitors: "Rarely",
        us: "Every placement checked",
      },
      {
        feature: "Reporting",
        competitors: "Basic URL list",
        us: "Live URLs, anchors and site metrics",
      },
    ],
  },

  // Section 4: From Strategy to Measurable Growth
  process: {
    eyebrow: "Four-Step Methodology",
    title: "From Strategy to",
    highlightText: "Measurable Growth",
    description:
      "A simple four-step approach keeps every guest post tied to your goals.",
    steps: [
      {
        number: "01",
        title: "Discover",
        label: "Opportunity Analysis",
        description:
          "We review your site, competitors and link profile to find the best opportunities.",
        icon: Search,
        details: [
          "Domain authority gap review",
          "Target URL audit",
          "Niche publication mapping",
        ],
      },
      {
        number: "02",
        title: "Strategize",
        label: "Editorial Planning",
        description:
          "We choose target pages, anchors and site types that match your goals.",
        icon: Target,
        details: [
          "Target landing pages selection",
          "Anchor text distribution planning",
          "Site quality tier requirements",
        ],
      },
      {
        number: "03",
        title: "Execute",
        label: "Writing & Placement",
        description:
          "We write, pitch and place your guest posts on relevant sites.",
        icon: Zap,
        details: [
          "Original article drafting",
          "Editor pitch negotiation",
          "Contextual link publication",
        ],
      },
      {
        number: "04",
        title: "Optimize",
        label: "Refinement & Scale",
        description:
          "We track rankings, traffic and link quality, then refine the plan.",
        icon: TrendingUp,
        details: [
          "Keyword movement monitoring",
          "Live URL verification",
          "Roadmap iteration for next sprint",
        ],
      },
    ],
    ctaText: "Explore Our Full Outreach Process",
    ctaButtonText: "Request a Link Plan",
    ctaHref: "/contact",
  },

  // Section 18: FAQ
  faqs: {
    eyebrow: "Frequently Asked Questions",
    title: "Frequently Asked Questions About Guest Posting",
    description:
      "Everything you need to know about our manual outreach, editorial standards, and transparent guest posting workflows.",
    faqs: [
      {
        question: "Is guest posting still good for SEO?",
        answer:
          "Yes, when it is done well. Guest posts on relevant, trusted sites earn contextual backlinks, new audiences and brand mentions. Low-quality, mass-produced guest posts do not help and can hurt, which is why site quality and content quality come first.",
      },
      {
        question: "How do you choose guest post sites?",
        answer:
          "We look at relevance to your niche, real organic traffic, editorial standards, audience quality and spam signals. We avoid sites that publish anything for a fee or that exist only to sell links.",
      },
      {
        question: "Do you use private blog networks?",
        answer:
          "No. We do not use private blog networks, link farms or hidden links. Every placement is on a real site with a real audience.",
      },
      {
        question: "How much does a guest post cost?",
        answer:
          "Cost depends on the site's quality, your niche and the number of placements. Startups can begin with a focused monthly plan, while larger brands need custom plans. We recommend a package after your free review.",
      },
      {
        question: "How long do guest posts take to go live?",
        answer:
          "Most placements take a few weeks from outreach to publication, depending on the site's editorial schedule. We keep you updated at every stage.",
      },
      {
        question: "Do you offer guest posting services in India?",
        answer:
          "Yes. We work with Indian businesses and startups, as well as brands targeting the US, UK and other global markets.",
      },
    ],
  },

  // Section 17: Team & Growth Squad
  team: {
    eyebrow: "Senior Outreach Specialists",
    title: "Guest Posting Engineered by Dedicated Growth Experts",
    highlightText: "Dedicated Growth Experts",
    description:
      "Our specialists plan, write and place every guest post, so you do not have to manage writers, editors and sites yourself.",
    cards: [
      {
        eyebrow: "Editorial Outreach",
        title: "Lead Link Strategist",
        description:
          "Specializing in Tier-1 media outreach, editorial relationships and high-DR contextual link acquisitions.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Content & Pitches",
        title: "Senior Content Strategist",
        description:
          "Overseeing bespoke research articles, journalist angles, and editor pitch customization across industry sectors.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
      {
        eyebrow: "Quality Assurance",
        title: "Quality Review Lead",
        description:
          "Auditing domain traffic trends, anchor profiles, indexation status and search safety on every live URL.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
        className: "lg:col-span-4 min-h-[270px]",
      },
    ],
    footerTitle: "Transparent Sprint Communication",
    footerDescription:
      "Work runs in clear sprints. You get regular updates on pitches, approvals and live placements, so you always know where things stand.",
    ctaText: "Book a Strategy Call",
    ctaHref: "/contact",
  },

  // Section 13: Long-Form Content With Side Table of Contents
  serviceContent: {
    eyebrow: "Comprehensive Guide",
    title: "Guest Posting Built Around Your Business Growth Goals",
    intro:
      "Guest posting works when it is done with care: the right site, a useful article and a natural link. Our guest posting services focus on quality over volume, so every placement supports your rankings and your brand.",
    content: [
      {
        id: "what-is",
        heading: "What Is Guest Posting?",
        paragraphs: [
          "Guest posting, also called guest blogging, is writing an original article for another website in your industry and earning a link back to your own site. When it is done well, you reach a new audience, build brand trust and earn a backlink that search engines value.",
          "Quality matters more than quantity. A guest post on a relevant site with real readers is worth far more than dozens on sites that exist only to sell links. That is why a good guest post service starts with careful site selection.",
          "Done well, guest posting builds authority that keeps working long after the article goes live.",
        ],
      },
      {
        id: "deliver",
        heading: "Guest Posting: What We Deliver",
        subBlocks: [
          {
            heading: "Niche-Relevant Site Selection",
            paragraph:
              "We choose sites that match your industry, have real organic traffic and publish to an engaged audience. Our guest posting services with real traffic avoid link farms and sites that sell placements to anyone.",
          },
          {
            heading: "Content Writing and Editorial Outreach",
            paragraph:
              "Our writers create original, useful articles tailored to each site. Our guest post outreach service pitches editors personally and handles feedback and edits until the article is approved.",
          },
          {
            heading: "Placement With Contextual Links",
            paragraph:
              "Your link is placed naturally inside the article, with a fitting anchor and a relevant destination page, not in a footer or sidebar.",
          },
          {
            heading: "Reporting on Placement and Site Metrics",
            paragraph:
              "You get a clear report with the live URL, anchor text, target page and site quality metrics for every placement.",
          },
        ],
      },
      {
        id: "our-process",
        heading: "Our Guest Posting Process",
        subBlocks: [
          {
            heading: "Backlink Audit and Competitor Gap",
            paragraph:
              "We review your current links and compare them with competitors to find the biggest gaps.",
          },
          {
            heading: "Link Strategy and Target List",
            paragraph:
              "You get a clear plan with target pages, anchor approach, priority sites and timelines.",
          },
          {
            heading: "Outreach and Placement",
            paragraph:
              "Our team writes, pitches, follows up and manages each placement until the article is live.",
          },
          {
            heading: "Reporting and Link Quality Review",
            paragraph:
              "We check every placement for relevance and quality, then share a report with live URLs, anchors and ranking impact.",
          },
        ],
      },
      {
        id: "who-needs",
        heading: "Who Needs Guest Posting?",
        subBlocks: [
          {
            heading: "SaaS and B2B Brands",
            paragraph:
              "Software and service companies in competitive markets that need trusted links and visibility with buyers. Our guest posting services for SaaS and B2B guest post service target industry blogs and publications your customers read.",
          },
          {
            heading: "Startups Needing Early Authority",
            paragraph:
              "New sites with a small backlink profile. A guest post service for startups gives you a safe, steady way to build trust from the start.",
          },
          {
            heading: "Ecommerce and Service Businesses",
            paragraph:
              "Stores and local or national service brands that want more visibility for key pages and a stronger link profile.",
          },
        ],
        paragraphs: [
          "Based in India or serving global clients? Our guest posting services in India support SaaS, B2B, ecommerce and service brands across domestic and international markets.",
        ],
      },
      {
        id: "pricing",
        heading: "Guest Posting Pricing and Packages",
        paragraphs: [
          "Every site has a different niche, competition level and goal, so we price each plan after reviewing your website. Share your site link for a free review and a clear quote. See the plans above for what each package includes.",
        ],
        buttonText: "Get a Custom Quote",
        buttonHref: "/contact",
      },
    ],
    sidebarTitle: "Table of Contents",
    sidebarDescription:
      "Quickly jump to any section of our Guest Posting Services guide.",
    sidebarGroups: [
      {
        title: "On This Page",
        links: [
          { label: "1. What Is Guest Posting?", href: "#what-is" },
          { label: "2. Guest Posting: What We Deliver", href: "#deliver" },
          { label: "3. Our Guest Posting Process", href: "#our-process" },
          { label: "4. Who Needs Guest Posting?", href: "#who-needs" },
          { label: "5. Guest Posting Pricing and Packages", href: "#pricing" },
          { label: "6. Guest Posting Results and Case Studies", href: "#case-studies" },
          { label: "7. Frequently Asked Questions About Guest Posting", href: "#faq" },
        ],
      },
    ],
  },

  // Section 19: Proven Frameworks and Industry Insights
  resources: {
    eyebrow: "Industry Insights",
    title: "Proven Frameworks and Industry Insights",
    description:
      "Practical guides from our team on guest posting, outreach and link quality.",
    articles: [
      {
        title: "Guest Posting for SEO: A Practical Framework",
        category: "Guest Posting",
        readTime: "7 min read",
        excerpt: "How to earn links safely and steadily through manual outreach and editor-approved content.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "How to Choose High-Quality Guest Post Sites",
        category: "Link Quality",
        readTime: "6 min read",
        excerpt: "The checks that separate real sites from link farms and protect your domain reputation.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Guest Post Outreach Templates That Get Replies",
        category: "Outreach & PR",
        readTime: "8 min read",
        excerpt: "What editors want to see in a pitch and how to craft subject lines that win placements.",
        href: "/blog",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  // Section 20: Final CTA
  finalCta: {
    eyebrow: "READY TO SCALE WITH REAL TRAFFIC SITES?",
    headline: "Stop Guessing. Start Scaling with Predictable Digital Revenue.",
    subheadline:
      "Get a free review and a clear 90-day plan to grow your authority and organic traffic.",
    primaryCtaText: "Request Your Free Strategy Session",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Talk to an Expert",
    secondaryCtaHref: "/contact",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "4.9/5", label: "Client rating" },
      { value: "$45M+", label: "Revenue generated" },
      { value: "98%", label: "Client retention" },
    ],
  },
};
