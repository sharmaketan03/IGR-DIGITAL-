"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Globe2,
  MousePointer2,
  Search,
  ShoppingCart,
  Target,
  UserRound,
} from "lucide-react";

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
};

export type RevenueMarketingContent = {
  header: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
  };

  leftCards: MarketingCardItem[];

  rightCards: MarketingCardItem[];

  centerImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  contentCards: MarketingContentCard[];

  comparison: {
    traditional: {
      title: string;
      text: string;
    };
    dataDriven: {
      title: string;
      text: string;
    };
  };

  keywordContent: {
    heading: string;
    paragraphs: {
      text: string;
    }[];
  };

  cta: {
    label: string;
    href: string;
  };

  theme?: {
    sectionBackground?: string;
    cardBackground?: string;
    borderColor?: string;
    mutedText?: string;
  };
};

/* =========================================================
   ICON MAP
   IMPORTANT:
   siteContent.ts only contains string names.
   Actual Lucide components are resolved here.
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

/* =========================================================
   ICON HELPER
========================================================= */

function MarketingIcon({
  name,
  size = 22,
  strokeWidth = 1.8,
}: {
  name: MarketingIconName;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = marketingIcons[name];

  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

/* =========================================================
   CARD
========================================================= */

function MarketingCard({
  item,
  side,
}: {
  item: MarketingCardItem;
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <div className="group flex w-full items-start gap-4">
      {isLeft ? (
        <>
          {/* ICON */}
          <div className="order-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7F5EF] text-[#4285F4] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#34A853] group-hover:text-white">
            <MarketingIcon name={item.icon} />
          </div>

          {/* TEXT */}
          <div className="order-2 min-w-0 flex-1 text-left">
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1120]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[13px] leading-5 text-[#64748B]">
              {item.text}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* TEXT */}
          <div className="min-w-0 flex-1 text-left">
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#0B1120]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[13px] leading-5 text-[#64748B]">
              {item.text}
            </p>
          </div>

          {/* ICON */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7F5EF] text-[#4285F4] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#34A853] group-hover:text-white">
            <MarketingIcon name={item.icon} />
          </div>
        </>
      )}
    </div>
  );
}

/* =========================================================
   CONTENT CARD
========================================================= */

function ContentCard({
  item,
}: {
  item: MarketingContentCard;
}) {
  return (
    <article className="group h-full rounded-[24px] border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#34A853]/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F5EF] text-[#4285F4] transition-all duration-300 group-hover:bg-[#34A853] group-hover:text-white">
        <MarketingIcon name={item.icon} />
      </div>

      <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.025em] text-[#0B1120]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] leading-6 text-[#64748B]">
        {item.text}
      </p>
    </article>
  );
}

/* =========================================================
   COMPARISON CARD
========================================================= */

function ComparisonCard({
  title,
  text,
  type,
}: {
  title: string;
  text: string;
  type: "traditional" | "data";
}) {
  const isData = type === "data";

  return (
    <div
      className={[
        "relative h-full rounded-[24px] p-6",
        isData
          ? "bg-[#0B1120] text-white"
          : "border border-[#E2E8F0] bg-white",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "flex h-9 w-9 items-center justify-center rounded-xl",
            isData
              ? "bg-[#34A853] text-white"
              : "bg-[#F7F5EF] text-[#EA4335]",
          ].join(" ")}
        >
          {isData ? "✓" : "×"}
        </span>

        <h3
          className={[
            "text-[17px] font-semibold",
            isData ? "text-white" : "text-[#0B1120]",
          ].join(" ")}
        >
          {title}
        </h3>
      </div>

      <p
        className={[
          "mt-4 text-[14px] leading-6",
          isData ? "text-white/70" : "text-[#64748B]",
        ].join(" ")}
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function RevenueMarketingSection({
  revenueMarketingContent,
}: {
  revenueMarketingContent: RevenueMarketingContent;
}) {
  const content = revenueMarketingContent;

  return (
    <section
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
      style={{
        backgroundColor:
          content.theme?.sectionBackground || "#ffffff",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F7F5EF] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#34A853]" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#4285F4]">
              {content.header.badge}
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#0B1120] sm:text-4xl lg:text-5xl">
            {content.header.title}{" "}
            <span className="text-[#0B1120]">
              {content.header.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-[#64748B] sm:text-base">
            {content.header.description}
          </p>
        </div>

        {/* =================================================
            MAIN VISUAL
        ================================================= */}

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_320px_1fr] lg:gap-12">
          {/* LEFT */}
          <div className="order-2 space-y-8 lg:order-1">
            {content.leftCards.map((item) => (
              <MarketingCard
                key={`${item.title}-${item.icon}`}
                item={item}
                side="left"
              />
            ))}
          </div>

          {/* CENTER */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px]">
              <div className="absolute inset-6 rounded-full bg-[#F7F5EF]" />

              <div className="absolute inset-0 rounded-full border border-[#E2E8F0]" />

              <div className="absolute inset-8 rounded-full border border-[#4285F4]/10" />

              <div className="relative z-10">
                <Image
                  src={content.centerImage.src}
                  alt={content.centerImage.alt}
                  width={content.centerImage.width || 310}
                  height={content.centerImage.height || 310}
                  className="h-auto w-[210px] object-contain sm:w-[240px]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-3 space-y-8">
            {content.rightCards.map((item) => (
              <MarketingCard
                key={`${item.title}-${item.icon}`}
                item={item}
                side="right"
              />
            ))}
          </div>
        </div>

        {/* =================================================
            CONTENT CARDS
        ================================================= */}

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.contentCards.map((item) => (
            <ContentCard
              key={`${item.title}-${item.icon}`}
              item={item}
            />
          ))}
        </div>

        {/* =================================================
            COMPARISON
        ================================================= */}

        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#34A853]">
              A measurable growth approach
            </span>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#0B1120] sm:text-3xl">
              From disconnected marketing to measurable growth
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ComparisonCard
              title={content.comparison.traditional.title}
              text={content.comparison.traditional.text}
              type="traditional"
            />

            <ComparisonCard
              title={content.comparison.dataDriven.title}
              text={content.comparison.dataDriven.text}
              type="data"
            />
          </div>
        </div>

        {/* =================================================
            KEYWORD / SEO CONTENT
        ================================================= */}

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="rounded-[28px] bg-[#F7F5EF] p-7 sm:p-9 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#0B1120] sm:text-3xl">
              {content.keywordContent.heading}
            </h3>

            <div className="mt-6 space-y-5">
              {content.keywordContent.paragraphs.map(
                (paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.text.slice(0, 20)}`}
                    className="text-[14px] leading-7 text-[#64748B] sm:text-[15px]"
                  >
                    {paragraph.text}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div className="mt-12 flex justify-center">
          <Link
            href={content.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-[#34A853] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d9448] hover:shadow-[0_12px_30px_rgba(52,168,83,0.22)]"
          >
            {content.cta.label}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}