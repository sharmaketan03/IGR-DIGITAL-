"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export interface PillarTabItem {
  id: string;
  tabLabel: string;
  headlineTitle: string;
  headlineDescription: string;
  bullets: string[];
  ctaText?: string;
  ctaHref?: string;
  centerPerson?: { name: string; role: string; avatar: string };
  teamMembers?: Array<{ role: string; avatar: string }>;
}

export interface WebFxPpcExpertiseSectionProps {
  pageType?: "ppc" | "ecommerce" | "seo" | "location" | "technical" | "ai" | "backlinks" | "general";
  serviceName?: string;
  locationName?: string;
  eyebrow?: string;
  mainTitle?: string;
  mainSubtitle?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  tabs?: PillarTabItem[];
  midFeature?: {
    badgeText?: string;
    videoThumbnail?: string;
    videoTitle?: string;
    title: string;
    description: string;
    pills: string[];
  };
  expertQuote?: {
    title: string;
    quote: string;
    authorName: string;
    authorRole: string;
    avatarUrl?: string;
  };
}

export default function DeliverablesMatrix({
  pageType = "general",
  serviceName,
  locationName,
  eyebrow,
  mainTitle,
  mainSubtitle,
  title,
  highlightText,
  description,
  tabs,
  midFeature,
  expertQuote,
}: WebFxPpcExpertiseSectionProps) {
  // Infer page context from pageType and serviceName
  const sName = (serviceName || "").toLowerCase();
  const isEcom = pageType === "ecommerce" || sName.includes("commerce") || sName.includes("shopify");
  const isBacklinks = pageType === "backlinks" || sName.includes("link") || sName.includes("outreach") || sName.includes("off-page") || sName.includes("guest");
  const isTech = pageType === "technical" || sName.includes("tech") || sName.includes("audit") || sName.includes("speed") || sName.includes("consult");
  const isAi = pageType === "ai" || sName.includes("ai") || sName.includes("aeo") || sName.includes("answer engine") || sName.includes("chatgpt");
  const isLoc = pageType === "location" || Boolean(locationName);
  const isPpc = pageType === "ppc" || sName.includes("ppc") || sName.includes("paid") || sName.includes("performance") || sName.includes("ads") || sName.includes("google-ads") || sName.includes("meta-ads");

  const locTitle = locationName || "Your Region";

  // 1. DYNAMIC MAIN TITLE & SUBTITLE PER PAGE CONTEXT
  const resolvedMainTitle =
    mainTitle ||
    (title && highlightText ? `${title} ${highlightText}` : title) ||
    (isEcom
      ? "The E-Commerce SEO Agency That Blends Architecture, Technology & Conversion to Deliver ROI"
      : isBacklinks
      ? "The Digital PR & Link Agency That Blends Editorial Authority, Tech & High Trust to Deliver ROI"
      : isTech
      ? "The Technical SEO Agency That Blends Code Precision, Speed & Crawl Health to Deliver ROI"
      : isAi
      ? "The AI Search Agency That Blends Entity Grounding, Vector Tech & Knowledge Graphs to Deliver ROI"
      : isLoc
      ? `The Digital Marketing Agency That Blends Local Intent, Technology & Reach in ${locTitle} to Deliver ROI`
      : isPpc
      ? "The PPC & Performance Agency That Blends Human Strategy, Machine Bidding & Creative to Deliver ROI"
      : "The SEO Agency That Blends Expertise, Technology & Adaptability to Deliver ROI");

  const resolvedMainSubtitle =
    mainSubtitle ||
    description ||
    (isEcom
      ? "At IGR Digital, e-commerce scale isn't driven by one thing — it's built from the synergy of three: commercial collection architecture, real-time inventory schemas, and relentless conversion optimization (alongside a 94% retail client retention rate)."
      : isBacklinks
      ? "At IGR Digital, domain authority isn't built on dangerous shortcuts — it's built from genuine editorial relationships, data-backed digital PR studies, and tier-1 white-hat outreach (with a 98% permanent index guarantee)."
      : isTech
      ? "At IGR Digital, technical performance isn't guesswork — it's built from surgical server log diagnostics, sub-second Core Web Vitals optimization, and clean JavaScript hydration (yielding 100% crawl budget efficiency)."
      : isAi
      ? "At IGR Digital, generative visibility is engineered systematically — combining Wikidata entity knowledge graphs, conversational prompt modeling, and verified zero-click citation architecture across ChatGPT, Perplexity, and Google AI."
      : isLoc
      ? `At IGR Digital, regional dominance in ${locTitle} is built from hyper-localized consumer intent modeling, verified local authority citations, and dedicated growth leads operating in your timezone (yielding 96% client retention).`
      : isPpc
      ? "At IGR Digital, paid advertising scale is built from the synergy of three: human conversion psychology, 24/7 algorithmic auction monitoring, and proactive creative testing (alongside an average 4.8x verified ROAS)."
      : "At IGR Digital, success isn't driven by one thing — it's built from the synergy of three: industry leading expertise, proprietary technology, and the agility to adapt as search evolves. Together, they deliver measurable growth for every client we partner with (alongside a 93% client satisfaction rate).");

  // 2. DYNAMIC 3 TABS (PART 1) WITH PAGE-SPECIFIC SPECIALISTS & IMAGES
  const resolvedTabs: PillarTabItem[] =
    tabs ||
    (isEcom
      ? [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: "A Dedicated E-Commerce Squad That Feels Like Your Own",
            headlineDescription:
              "Unlike generic agencies, you don't just get an account manager. We pair your online store with a retail SEO squad including catalog architects, CRO conversion experts, and Shopify/WooCommerce technical specialists.",
            bullets: [
              "Experience in 120+ retail product verticals",
              "25+ person dedicated e-commerce squad",
              "8:1 specialist-to-client store ratio",
              "Dedicated faceted filter crawl budget engineers",
              "AI merchandising insights, human retail execution",
            ],
            ctaText: "About Our E-Commerce Team →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Retail Lead",
              role: "Dedicated E-Com Strategist",
              avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Conversion Rate Specialist", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Catalog Architect", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { role: "Product Copywriter", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" },
              { role: "Technical Shopify Lead", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80" },
              { role: "Feed & Schema SME", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80" },
              { role: "Digital PR Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Commercial Data Analyst", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: "Proprietary Retail Analytics & Catalog Crawl Diagnostics",
            headlineDescription:
              "Our internal tools map multi-thousand SKU stores in real time, detecting out-of-stock crawl waste, orphan product collections, and merchant center schema drift instantly.",
            bullets: [
              "Automated SKU-level rank & inventory correlation",
              "Faceted URL canonical leak detection",
              "Real-time Shopify & Magento API sync",
              "Predictive seasonal demand keyword forecasting",
              "Looker Studio multi-touch retail revenue attribution",
            ],
            ctaText: "Explore Our Retail Tech →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Analytics Lead",
              role: "Head of Retail Data",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "API Integration Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Data Pipeline Engineer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Stock Forecast Lead", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Algorithm Monitor", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80" },
              { role: "Attribution Specialist", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: "Fast Retail Pivot & Rapid Category Scaling",
            headlineDescription:
              "We don't wait for quarterly reviews. As consumer trends shift or seasonal peaks approach (BFCM, Summer sales), our squad accelerates category launches with zero client bottlenecks.",
            bullets: [
              "72-hour turnaround for seasonal promo collection hubs",
              "Real-time algorithmic update defense & re-crawling",
              "Weekly sprint velocity with direct Slack access",
              "Transparent milestone roadmaps & ROI dashboards",
            ],
            ctaText: "See Sprint Roadmaps →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Sprint Lead",
              role: "Retail Growth Director",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Campaign Director", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Creative Strategist", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Rapid Deployment Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]
      : isBacklinks
      ? [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: "A Dedicated Digital PR & Media Outreach Squad",
            headlineDescription:
              "Unlike automated link farms, we operate an in-house media desk of experienced journalists, PR pitch specialists, and content researchers who get your brand featured on tier-1 publications.",
            bullets: [
              "Direct relationships with 500+ verified journalists",
              "Dedicated in-house media researchers & data journalists",
              "Zero PBNs, zero link farms — 100% white-hat editorial pitching",
              "Permanent link retention guarantee across DR 60+ to 90+ outlets",
              "Strategic anchor text distribution protecting algorithmic health",
            ],
            ctaText: "About Our PR Team →",
            ctaHref: "/contact",
            centerPerson: {
              name: "PR Director",
              role: "Head of Media Outreach",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Journalist Relations", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Data Survey Lead", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Industry SME", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80" },
              { role: "Digital PR Strategist", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { role: "Newsroom Pitch Lead", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: "Proprietary Media Monitoring & Backlink Health Intelligence",
            headlineDescription:
              "We track journalist queries (HARO, Connectively, Qwoted) in real time and monitor live backlinks 24/7 to catch broken or nofollowed links instantly.",
            bullets: [
              "Real-time journalist query radar with sub-10 minute alert response",
              "24/7 automated dofollow link indexation status monitoring",
              "Toxic spam link detection & automated disavow recommendations",
              "Competitor link velocity reverse engineering dashboard",
            ],
            ctaText: "See Outreach Tech →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Outreach Lead",
              role: "Senior PR Strategist",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Link Radar Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Toxic Link Auditor", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "HARO Fast-Response", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: "Agile Story Angling & Viral PR Capitalization",
            headlineDescription:
              "When breaking industry news or algorithm shifts happen, our team rapidly pivots angles to pitch your brand as the leading commentary authority to national outlets.",
            bullets: [
              "Rapid newsjacking protocol for breaking industry topics",
              "Quarterly proprietary research study production & distribution",
              "Direct Slack coordination with your PR spokesperson",
            ],
            ctaText: "Explore Media Network →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Media Lead",
              role: "VP of Digital PR",
              avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Newsjack Strategist", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Editorial Writer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]
      : isAi
      ? [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: "A Dedicated AI Knowledge Graph & Entity Modeling Squad",
            headlineDescription:
              "Generative AI models don't just read pages; they extract factual knowledge graphs. Our specialized team builds authoritative entity relationships so ChatGPT, Perplexity, and Google AI cite your brand as the definitive source.",
            bullets: [
              "Entity schema architecture across Wikidata and Crunchbase",
              "Information gain copywriting structured for LLM synthesis",
              "Conversational prompt reverse engineering across top LLMs",
              "Zero-click SERP snippet capture protocols",
              "Dedicated AI search specialists and vector engineers",
            ],
            ctaText: "About Our AI Search Team →",
            ctaHref: "/contact",
            centerPerson: {
              name: "AI Lead",
              role: "Head of AI Search & Vector Modeling",
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Entity Graph Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Prompt Engineer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "RAG Retrieval SME", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Vector Content Lead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { role: "Knowledge Graph Dev", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: "Proprietary AI Brand Sentiment & Prompt Radar",
            headlineDescription:
              "Our automated radar tests thousands of commercial prompts weekly on ChatGPT, Claude, Gemini, and Perplexity to measure your brand citation frequency versus competitors.",
            bullets: [
              "Automated synthetic prompt testing across 5+ major LLMs",
              "Entity trust score & semantic distance benchmarking",
              "AI Overviews carousel presence monitoring",
              "Real-time alerts when competitor citations replace your URLs",
            ],
            ctaText: "Explore AI Radar Tech →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Data Lead",
              role: "Chief AI Data Scientist",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "LLM Pipeline Dev", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80" },
              { role: "Citation Analyst", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: "Rapid Adaptation to Evolving LLM Update Cycles",
            headlineDescription:
              "As AI engines release new weights and citation policies, our team recalibrates your entity grounding to keep your brand at the forefront of conversational recommendations.",
            bullets: [
              "Continuous schema updates aligned with latest Google AI guidelines",
              "Rapid content modularization for direct answer extraction",
              "Bi-weekly executive updates on AI search market share",
            ],
            ctaText: "See AI Strategy Roadmap →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Strategy Lead",
              role: "VP of Generative Search",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "AEO Specialist", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Search Architect", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]
      : isLoc
      ? [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: `A Dedicated Growth Squad That Understands ${locTitle}`,
            headlineDescription:
              `Unlike remote generalists who don't know your market, your business gets dedicated strategists who understand regional buyer behavior, local search competition, and regional customer intent in ${locTitle}.`,
            bullets: [
              `Extensive market data across ${locTitle} and regional metro hubs`,
              "Dedicated local search and Google Business Profile leads",
              "9:1 specialist-to-client squad ratio for deep attention",
              "Local citations & regional media relationship desk",
              "Strategic localized copywriting tuned to buyer dialect",
            ],
            ctaText: `About Our ${locTitle} Squad →`,
            ctaHref: "/contact",
            centerPerson: {
              name: "Regional Director",
              role: `Dedicated ${locTitle} Strategist`,
              avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Local Map-Pack Lead", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Regional Copywriter", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
              { role: "Local Citation SME", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Geo-Ads Manager", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Inbound Lead CRO", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: `Geo-Grid Map Tracking & Real-Time Local Lead Attribution`,
            headlineDescription:
              `Our geo-grid radar visualizes your rank in ${locTitle} block by block, showing exactly where your business appears in Google's Top 3 local map pack.`,
            bullets: [
              "Mile-by-mile local geo-grid rank heatmaps",
              "Automated Google Business Profile duplicate detection",
              "Call tracking & CRM revenue attribution integration",
              "Regional competitor price & review pacing alerts",
            ],
            ctaText: "See Geo-Grid Technology →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Geo-Tech Lead",
              role: "Local Grid Specialist",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Map Algorithm Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Call Attribution Dev", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: `Proactive Regional Strategy Synchronized in Your Business Hours`,
            headlineDescription:
              "No waiting for international time zones. Your dedicated strategist is available in your working hours with monthly executive strategy syncs and direct Slack channels.",
            bullets: [
              "Rapid campaign optimizations aligned with local seasonal spikes",
              "Zero long-term lock-in: month-to-month accountability",
              "Bi-weekly live performance and lead quality reviews",
            ],
            ctaText: "Book Local Consultation →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Client Lead",
              role: `Regional Lead · ${locTitle}`,
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Account Director", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Operations Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]
      : isPpc
      ? [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: "A Dedicated Paid Media & ROAS Scaling Squad",
            headlineDescription:
              "Unlike agencies that set and forget automated campaigns, our performance squad pairs machine-learning bidding with human creative strategy, daily negative mining, and high-converting landing page tests.",
            bullets: [
              "Certified Google Premier & Meta Media Buyer leads",
              "In-house copywriters & motion graphic ad designers",
              "Value-Based Bidding (VBB) & Performance Max specialists",
              "Dedicated click fraud & bot suppression analysts",
              "Direct Slack communication with your senior ad lead",
            ],
            ctaText: "About Our PPC Team →",
            ctaHref: "/contact",
            centerPerson: {
              name: "PPC Director",
              role: "Head of Paid Acquisition",
              avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Google Ads Specialist", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Meta Ad Buyer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { role: "Creative Strategist", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Landing Page CRO", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Attribution Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: "24/7 Automated Auction Monitoring & CAPI Attribution",
            headlineDescription:
              "We implement server-side Meta Conversions API (CAPI), Google Enhanced Conversions, and Looker Studio dashboards so every ad dollar is tied directly to qualified revenue.",
            bullets: [
              "Server-side CAPI tracking eliminating iOS cookie drop-off",
              "Real-time CPC surge and competitor outbidding alerts",
              "Automated invalid click suppression saving 15%+ ad spend",
              "Looker Studio multi-touch pipeline attribution",
            ],
            ctaText: "Explore Ad Tech Stack →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Attribution Lead",
              role: "Senior Tracking Engineer",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "CAPI Server Engineer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Looker Studio Dev", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: "Proactive Weekly Creative Sprints & ROAS Pacing",
            headlineDescription:
              "We don't wait for monthly reports. Every week, our team rotates new ad angles, tests creative variations, and adjusts budgets based on actual CRM pipeline value.",
            bullets: [
              "Weekly creative fatigue analysis and new hook deployments",
              "Dynamic seasonal and promotional budget scaling",
              "Bi-weekly live ROAS strategy reviews with your executive team",
            ],
            ctaText: "See Performance Roadmap →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Media Lead",
              role: "Senior Growth Strategist",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Creative Producer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Performance Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]
      : [
          {
            id: "expertise",
            tabLabel: "Expertise",
            headlineTitle: "A Dedicated Team That Feels Like Your Own",
            headlineDescription:
              "Unlike most agencies, you don't just get one generalist account manager with IGR Digital. Our SEO agency equips your business with a team of experts including an industry expert, business strategy expert, copywriters, and more.",
            bullets: [
              "Experience in 200+ industries",
              "30+ person content team",
              "9:1 IGRer per client ratio",
              "Dedicated off-page SEO team",
              "AI insights, human execution",
            ],
            ctaText: "About Us →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Dedicated Lead",
              role: "Dedicated Internet Marketer",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Conversion Rate Optimizer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Industry SME", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
              { role: "Chief Principal Industry Strategist", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80" },
              { role: "Industry SME", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { role: "Digital PR Lead", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80" },
              { role: "SEO Content Strategist", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" },
              { role: "Solutions Architect", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "technology",
            tabLabel: "Technology",
            headlineTitle: "Proprietary Tech That Outsmarts the Competition",
            headlineDescription:
              "Our internal software suite monitors search algorithms 24/7, catching sudden ranking shifts, competitor link spikes, and crawl errors before your traffic drops.",
            bullets: [
              "24/7 automated crawl & index monitoring",
              "Machine learning content gap detection",
              "Real-time Looker Studio multi-touch pipeline attribution",
              "Entity schema graph validation & rich snippet tracking",
              "Competitor backlink velocity reverse engineering",
            ],
            ctaText: "Explore Technology Stack →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Tech Director",
              role: "Head of Marketing Tech",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Data Engineer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
              { role: "Algorithm Analyst", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Crawl Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80" },
            ],
          },
          {
            id: "adaptability",
            tabLabel: "Adaptability",
            headlineTitle: "Proactive Strategy That Never Sleeps",
            headlineDescription:
              "Search evolves every week. We don't wait for monthly reports to react. Our squad continuously audits your organic health and deploys high-impact improvements in continuous agile sprints.",
            bullets: [
              "Continuous bi-weekly sprint deliverables",
              "Rapid recovery protocols for core algorithm changes",
              "Dedicated senior strategists in your exact timezone",
              "Zero long-term contracts: transparent performance",
            ],
            ctaText: "See Agile Roadmap →",
            ctaHref: "/contact",
            centerPerson: {
              name: "Strategy Lead",
              role: "Client Strategy Director",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80",
            },
            teamMembers: [
              { role: "Agile Scrum Lead", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { role: "Executive Strategist", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
            ],
          },
        ]);

  // 3. MID FEATURE (PART 2) - PAGE-SPECIFIC VIDEO TITLE, DESCRIPTION, PILLS & IMAGE
  const midFeatureGirlImg = isEcom
    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=350&auto=format&fit=crop&q=80"
    : isBacklinks
    ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=350&auto=format&fit=crop&q=80"
    : isAi
    ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=350&auto=format&fit=crop&q=80"
    : isLoc
    ? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=350&auto=format&fit=crop&q=80"
    : isPpc
    ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&auto=format&fit=crop&q=80"
    : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=350&auto=format&fit=crop&q=80";

  const resolvedMidFeature =
    midFeature ||
    (isEcom
      ? {
          videoTitle: "OUR E-COMMERCE SEO SERVICES",
          title: "Where Retail Architecture Meets Conversion Optimization: What's Included in IGR Digital E-Commerce SEO Services",
          description:
            "These core deliverables form the foundation of our retail SEO management services — but where IGR Digital truly stands apart is how we use technology to scale sales velocity.",
          pills: [
            "Custom, Data-Driven Catalog Strategies",
            "Prioritized Action Plans",
            "Faceted Navigation Hygiene",
            "Product Schema Implementation",
            "Transparent, Actionable Monthly Reporting",
            "High-Converting Category Copy",
            "Attributable Revenue & ROI Tracking",
            "Core Web Vitals Maintenance",
            "On-Page Optimization",
            "Off-Page Brand Authority",
            "Proactive Recommendations",
            "Advanced Competitor Monitoring",
          ],
        }
      : isBacklinks
      ? {
          videoTitle: "OUR DIGITAL PR & LINK SERVICES",
          title: "Where Tier-1 Editorial Outreach Meets Authority Building: What's Included in IGR Digital Link Building Services",
          description:
            "These core deliverables form the foundation of our authority acquisition services — but where IGR Digital truly stands apart is our direct relationships with verified newsroom journalists.",
          pills: [
            "Tier-1 Editorial Pitching",
            "Prioritized Action Plans",
            "Original Research & Link Magnets",
            "Zero PBN / Zero Spam Guarantee",
            "Transparent, Actionable Monthly Reporting",
            "Contextual Dofollow Placements",
            "Attributable Revenue & ROI Tracking",
            "Anchor Text Equity Modeling",
            "Toxic Link Hygiene Audits",
            "Off-Page Brand Authority",
            "Proactive Recommendations",
            "Advanced Competitor Monitoring",
          ],
        }
      : isAi
      ? {
          videoTitle: "OUR AI & ANSWER ENGINE SERVICES",
          title: "Where Entity Knowledge Graphs Meet Conversational Synthesis: What's Included in IGR Digital AI SEO Services",
          description:
            "These core deliverables form the foundation of our generative search optimization — but where IGR Digital truly stands apart is how we ground your brand across ChatGPT, Claude, and Google AI Overviews.",
          pills: [
            "Entity Schema & Wikidata Modeling",
            "Prioritized AI Action Plans",
            "Conversational Prompt Mapping",
            "Information Gain Optimization",
            "Transparent, Actionable Monthly Reporting",
            "Vector RAG Content Formatting",
            "Attributable AI Referral Tracking",
            "Zero-Click Query Capture",
            "Entity Citation Seeding",
            "Off-Page Brand Authority",
            "Proactive Recommendations",
            "Advanced LLM Competitor Radar",
          ],
        }
      : isLoc
      ? {
          videoTitle: `OUR ${locTitle.toUpperCase()} GROWTH SERVICES`,
          title: `Where Local Intent Meets Regional Authority: What's Included in IGR Digital ${locTitle} Marketing Services`,
          description:
            `These core deliverables form the foundation of our regional growth services — but where IGR Digital truly stands apart is our hyper-localized search and conversion architecture for ${locTitle}.`,
          pills: [
            "Regional Market Analysis",
            "Prioritized Action Plans",
            "Google Map-Pack 3-Pack SEO",
            "Geo-Targeted Landing Pages",
            "Transparent, Actionable Monthly Reporting",
            "Regional PR & Media Outreach",
            "Attributable Inbound Lead Tracking",
            "High-Converting Local CRO",
            "On-Page Optimization",
            "Off-Page Brand Authority",
            "Proactive Recommendations",
            "Advanced Competitor Monitoring",
          ],
        }
      : isPpc
      ? {
          videoTitle: "OUR PPC & PAID AD SERVICES",
          title: "Where Real-Time Auction Bidding Meets Creative Psychology: What's Included in IGR Digital PPC Services",
          description:
            "These core deliverables form the foundation of our performance advertising services — but where IGR Digital truly stands apart is how we eliminate ad waste through automated auction engineering.",
          pills: [
            "Weekly Campaign Optimization",
            "Custom High-Converting Ad Creative",
            "Server-Side CAPI Tracking",
            "Click Fraud Bot Protection",
            "Transparent, Actionable Monthly Reporting",
            "Landing Page CRO Testing",
            "Attributable Revenue & ROAS Tracking",
            "Value-Based Bidding (VBB)",
            "Competitor Ad Reverse-Engineering",
            "Continuous Negative Keyword Mining",
            "Proactive Budget Scaling",
            "Dedicated Paid Media Squad",
          ],
        }
      : {
          videoTitle: "OUR SEO SERVICES",
          title: "Where Foundational SEO Meets AI-Powered Innovation: What's Included in IGR Digital SEO Services",
          description:
            "These core deliverables form the foundation of our SEO management services — but where IGR Digital truly stands apart is how we use technology to amplify each one.",
          pills: [
            "Custom, Data-Driven Strategies",
            "Prioritized Action Plans",
            "Transparent, Actionable Monthly Reporting",
            "Content Creation",
            "Attributable Revenue & ROI Tracking",
            "Technical SEO Maintenance",
            "On-Page Optimization",
            "Off-Page Brand Authority",
            "Proactive Recommendations",
            "Advanced Competitor Monitoring",
          ],
        });

  // 4. EXPERT QUOTE (PART 3) - UNIQUE EXPERT QUOTE & PORTRAIT PER PAGE TYPE
  const resolvedExpertQuote =
    expertQuote ||
    (isEcom
      ? {
          title: "How Our E-Commerce SEO Experts Approach Your Success",
          quote:
            "Retail algorithms don't just judge keywords — they evaluate shopper intent, stock accuracy, and speed. When you combine clean faceted architecture with strategic category siloing, your catalog captures shoppers at the moment they are ready to purchase.",
          authorName: "Sarah Chen",
          authorRole: "Head of E-Commerce Search Performance",
          avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        }
      : isBacklinks
      ? {
          title: "How Our Digital PR Experts Approach Your Success",
          quote:
            "A single high-tier editorial link on a legitimate news publication passes more sustainable algorithmic trust than hundreds of directory links. We craft proprietary industry data studies that journalists naturally want to quote and hyperlink.",
          authorName: "Julian Ross",
          authorRole: "Head of Digital PR & Media Outreach",
          avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        }
      : isAi
      ? {
          title: "How Our AI & AEO Strategists Position Your Brand in LLMs",
          quote:
            "Generative AI engines like ChatGPT and Perplexity don't just index keywords; they retrieve trusted semantic entities. By structuring your content around verifiable entity attributes and question-answer data models, your brand becomes the default cited recommendation in AI searches.",
          authorName: "Elena Rostova",
          authorRole: "Head of AI Search & Vector Modeling",
          avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        }
      : isLoc
      ? {
          title: `How Our ${locTitle} Regional Leads Approach Your Success`,
          quote:
            `In competitive markets like ${locTitle}, winning local search dominance requires understanding regional buyer behavior. When you pair localized intent modeling with high-authority local PR, ready-to-buy customers find your brand first.`,
          authorName: "Marcus Vance",
          authorRole: `Regional Director of Client Strategy · ${locTitle}`,
          avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        }
      : isPpc
      ? {
          title: "How Our Paid Performance Leads Approach Your Success",
          quote:
            "In an era where every ad platform uses AI automated bidding, creative testing and conversion rate engineering are your only real unfair advantages. We constantly test high-converting angles that capture intent while ruthlessly eliminating wasted ad spend.",
          authorName: "Kayla Jenkins",
          authorRole: "Senior Director of Paid Performance",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        }
      : {
          title: "How Our SEO Experts Approach Your Success",
          quote:
            "Most of the things that quietly hurt organic performance never announce themselves, whether it's an algorithm update or a crawler getting blocked at your firewall. We watch for them daily so you hear it from us first, with a plan attached, instead of finding it in a traffic report.",
          authorName: "Jordan D.",
          authorRole: "Head of Search Performance",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        });

  const [activeTabId, setActiveTabId] = useState(resolvedTabs[0]?.id || "expertise");
  const currentTab = resolvedTabs.find((t) => t.id === activeTabId) || resolvedTabs[0];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      {/* Container width expanded to max-w-7xl for more spacious premium layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-24">

        {/* ==============================================================
            PART 1 (TOP): TITLE + 3 TABS (PLAIN TEXT WITH ACTIVE RECTANGLE)
            + SOFT LIGHT-BLUE BACKGROUND CARD WITH CIRCULAR TEAM DIAGRAM
           ============================================================== */}
        <div>
          {/* Main Centered Header */}
          <div className="mx-auto max-w-4xl text-center">
            {eyebrow && (
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0066CC] mb-3">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0B1222] tracking-tight leading-snug">
              {resolvedMainTitle}
            </h2>
            <p className="mt-4 text-xs sm:text-[14px] leading-relaxed text-[#64748B] max-w-3xl mx-auto font-normal">
              {resolvedMainSubtitle}
            </p>
          </div>

          {/* 3 Tabs Bar (Exact Image: Pure horizontal tabs with light blue rounded active box) */}
          <div className="mt-10 flex justify-center items-center gap-6 sm:gap-14 md:gap-20">
            {resolvedTabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-9 py-3 text-sm sm:text-[16px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "rounded-xl bg-[#E3F2FD] text-[#0066CC] shadow-xs"
                      : "text-[#475569] hover:text-[#0066CC] bg-transparent"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Soft Light Blue Tint Card (Full-width bg-[#EAF5FE] with rounded-3xl) */}
          <div className="mt-10 rounded-3xl bg-[#EAF5FE] p-8 sm:p-12 lg:p-14 border border-blue-100/80 shadow-xs">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              
              {/* Left Column: Heading, Paragraph, Emoji Bullets, CTA link */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-[#0F172A] leading-snug">
                  {currentTab.headlineTitle}
                </h3>
                <p className="mt-3.5 text-xs sm:text-[14px] leading-relaxed text-[#475569]">
                  {currentTab.headlineDescription}
                </p>

                {/* Bullets with exact emojis matching reference */}
                <div className="mt-6 space-y-2.5">
                  {currentTab.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-[13.5px] font-bold text-[#0F172A]">
                      <span className="shrink-0 text-base">
                        {i === 0 ? "📈" : i === 1 ? "📝" : i === 2 ? "👥" : i === 3 ? "🔗" : "💻"}
                      </span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* About Us / CTA Link with Blue Arrow */}
                <div className="mt-8">
                  <Link
                    href={currentTab.ctaHref || "/contact"}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0066CC] hover:underline"
                  >
                    <span>{currentTab.ctaText || "About Us →"}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Circular Radial Team Illustration Network */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[390px] aspect-square flex items-center justify-center">
                  
                  {/* Subtle connecting faint radial lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
                    <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="84%" y2="24%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="88%" y2="58%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="72%" y2="88%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="28%" y2="88%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="12%" y2="58%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="50%" x2="16%" y2="24%" stroke="#0066CC" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>

                  {/* CENTER NODE: Highlighted Blue Ring with Dedicated Lead & Label Below */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-full border-[3.5px] border-[#0066CC] overflow-hidden shadow-md bg-white">
                      <Image
                        src={
                          currentTab.centerPerson?.avatar ||
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80"
                        }
                        alt="Dedicated Strategist"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-1.5 rounded-sm bg-[#0066CC] px-2.5 py-0.5 text-[9px] font-bold text-white shadow-xs whitespace-nowrap">
                      {currentTab.centerPerson?.role || "Dedicated Internet Marketer"}
                    </div>
                  </div>

                  {/* SURROUNDING NODES */}
                  {/* 1. Top (12 o'clock) */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[8px] font-semibold text-[#475569] mb-0.5 whitespace-nowrap">
                      {currentTab.teamMembers?.[0]?.role || "Conversion Rate Optimizer"}
                    </span>
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[0]?.avatar || "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 2. Top-Right (2 o'clock) */}
                  <div className="absolute top-10 right-4 flex flex-col items-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[1]?.avatar || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[8px] font-semibold text-[#475569] mt-0.5 whitespace-nowrap">
                      {currentTab.teamMembers?.[1]?.role || "Industry SME"}
                    </span>
                  </div>

                  {/* 3. Bottom-Right (4 o'clock) */}
                  <div className="absolute bottom-12 right-2 flex flex-col items-center max-w-[85px] text-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[2]?.avatar || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[7.5px] leading-tight font-semibold text-[#475569] mt-0.5">
                      {currentTab.teamMembers?.[2]?.role || "Chief Principal Industry Strategist"}
                    </span>
                  </div>

                  {/* 4. Bottom-Center-Right (5:30 o'clock) */}
                  <div className="absolute -bottom-2 right-14 flex flex-col items-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[3]?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[8px] font-semibold text-[#475569] mt-0.5 whitespace-nowrap">
                      {currentTab.teamMembers?.[3]?.role || "Industry SME"}
                    </span>
                  </div>

                  {/* 5. Bottom-Center-Left (6:30 o'clock) */}
                  <div className="absolute -bottom-2 left-14 flex flex-col items-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[4]?.avatar || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 5"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[8px] font-semibold text-[#475569] mt-0.5 whitespace-nowrap">
                      {currentTab.teamMembers?.[4]?.role || "Digital PR"}
                    </span>
                  </div>

                  {/* 6. Middle-Left (9 o'clock) */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col items-center max-w-[75px] text-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[5]?.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 6"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[7.5px] leading-tight font-semibold text-[#475569] mt-0.5">
                      {currentTab.teamMembers?.[5]?.role || "SEO Content Strategist"}
                    </span>
                  </div>

                  {/* 7. Top-Left (10 o'clock) */}
                  <div className="absolute top-10 left-6 flex flex-col items-center max-w-[75px] text-center">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-xs bg-white">
                      <Image
                        src={currentTab.teamMembers?.[6]?.avatar || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"}
                        alt="Member 7"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[7.5px] leading-tight font-semibold text-[#475569] mt-0.5">
                      {currentTab.teamMembers?.[6]?.role || "Solutions Architect"}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ==============================================================
            PART 2 (MIDDLE): EXPANDED HEIGHT & WIDTH VIDEO / GRAPHIC SECTION
            Left: Blue card with girl pointing, "OUR SEO SERVICES" + Play button
            Right: "Where Foundational SEO Meets AI-Powered Innovation..." + Pills
           ============================================================== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left: Expanded Width (col-span-5 to col-span-6 on larger screens) & Height (min-h-[310px]) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-[#CFE7FC] p-7 sm:p-8 shadow-sm border border-blue-200/90 flex flex-col justify-between min-h-[300px] sm:min-h-[330px]">
              {/* Graphic Title */}
              <div className="relative z-10 flex justify-end">
                <div className="text-right">
                  <span className="block text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-none uppercase">
                    {resolvedMidFeature.videoTitle ? resolvedMidFeature.videoTitle.split(" ")[0] : "OUR"}
                  </span>
                  <span className="block text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight leading-none uppercase mt-1">
                    {resolvedMidFeature.videoTitle ? resolvedMidFeature.videoTitle.split(" ").slice(1).join(" ") : "SEO SERVICES"}
                  </span>
                </div>
              </div>

              {/* Girl photo on left + Play button + Magnifying glass at bottom */}
              <div className="relative mt-4 flex items-end justify-between">
                {/* Smiling Girl - Enlarged for richer visual punch */}
                <div className="relative h-36 w-36 sm:h-44 sm:w-44 -ml-3 rounded-2xl overflow-hidden shadow-xs">
                  <Image
                    src={midFeatureGirlImg}
                    alt="SEO Expert Lead"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Blue Play Button */}
                <div className="absolute left-32 sm:left-38 top-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066CC] text-white shadow-lg transition hover:scale-110 cursor-pointer">
                  <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-0.5" />
                </div>

                {/* White Search Bar with Magnifying Glass Graphic */}
                <div className="relative w-44 sm:w-52 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center px-4 mb-2">
                  <span className="text-slate-300 font-mono text-sm mr-auto">|</span>
                  <span className="text-2xl -mr-1">🔍</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Headline + Description + Light Grey Pill Tags */}
          <div className="lg:col-span-7 xl:col-span-7">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0F172A] leading-snug">
              <span className="text-[#0066CC]">Where Foundational SEO Meets AI-Powered Innovation:</span>{" "}
              {resolvedMidFeature.title.replace(/^Where Foundational SEO Meets AI-Powered Innovation:\s*/i, "")}
            </h3>
            <p className="mt-3.5 text-xs sm:text-[14px] leading-relaxed text-[#475569]">
              {resolvedMidFeature.description}
            </p>

            {/* Gray Pills Grid with comfortable spacing */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {resolvedMidFeature.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-xs sm:text-[12.5px] font-semibold text-[#475569] border border-slate-200/70 shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==============================================================
            PART 3 (BOTTOM): SOFT CYAN/BLUE QUOTE CARD
            Left: Bold Blue Quote, Right: Portrait photo with Verified Blue Checkmark
           ============================================================== */}
        <div className="rounded-3xl border border-blue-100/90 bg-[#EAF5FE] p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left: Headline + Quote + Author Attribution */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0066CC] leading-snug">
                  {resolvedExpertQuote.title}
                </h3>
                <blockquote className="mt-4 text-xs sm:text-[14px] leading-relaxed text-[#1E293B] font-normal">
                  &ldquo;{resolvedExpertQuote.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-7 pt-4 border-t border-blue-200/70">
                <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">{resolvedExpertQuote.authorName}</h4>
                <p className="text-xs sm:text-sm font-medium text-[#64748B]">{resolvedExpertQuote.authorRole}</p>
              </div>
            </div>

            {/* Right: Portrait Card with Verified Check Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 sm:w-56 md:w-60 aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-md border border-blue-100">
                <Image
                  src={
                    resolvedExpertQuote.avatarUrl ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                  }
                  alt={resolvedExpertQuote.authorName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 220px, 260px"
                />

                {/* Verified Blue Check Badge */}
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0066CC] text-white shadow-sm ring-2 ring-white">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
