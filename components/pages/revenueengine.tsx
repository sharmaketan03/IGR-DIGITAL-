"use client";

import React, { useId, useMemo, useState } from "react";
import {
  Cell,
  Pie as RechartsPie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";

const Pie = RechartsPie as unknown as React.ComponentType<any>;



/* =========================================================
   TYPES
========================================================= */

export type IconType =
  | "google"
  | "ai"
  | "pipeline"
  | "revenue";

export type SlicePosition =
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left";

export type RevenueSlice = {
  label: string;
  color: string;
  gradient: string;
  textColor: string;
  title: string;
  description: string;
  position: SlicePosition;
  contentPosition: "left" | "right";
  icons: IconType[];
};

export type RevenueCapability = {
  title: string;
  subtitle: string;
  color: string;
};

export type RevenueGrowthSectionProps = {
  revenueGrowth: {
    eyebrow?: string;
    title?: React.ReactNode;
    description?: string;
    secondaryDescription?: string;

    primaryCta?: string;
    secondaryCta?: string;

    slices: RevenueSlice[];

    capabilities?: RevenueCapability[];

    showCapabilities?: boolean;
    showBackgroundGrid?: boolean;
  };

  className?: string;
};

/* =========================================================
   CHART CONFIG
========================================================= */

const CHART = {
  size: 430,
  center: 215,

  outerRadius: 120,
  innerRadius: 86,
  hoverInnerRadius: 66,

  connectorRadius: 142,
};

/* =========================================================
   HELPERS
========================================================= */

const RADIAN = Math.PI / 180;

function point(radius: number, angle: number) {
  const radians = -angle * RADIAN;

  return {
    x:
      CHART.center +
      radius * Math.cos(radians),

    y:
      CHART.center +
      radius * Math.sin(radians),
  };
}

/* =========================================================
   GOOGLE ICON
========================================================= */

function GoogleIcon() {
  return (
    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.14)]">
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M21.35 12.27c0-.79-.07-1.54-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
        />

        <path
          fill="#34A853"
          d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.04H3.26v2.53A9.75 9.75 0 0 0 12 21.75Z"
        />

        <path
          fill="#FBBC05"
          d="M6.51 13.82a5.87 5.87 0 0 1 0-3.64V7.65H3.26a9.75 9.75 0 0 0 0 8.7l3.25-2.53Z"
        />

        <path
          fill="#EA4335"
          d="M12 6.14c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.24 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.74 5.4l3.25 2.53C7.29 7.86 9.45 6.14 12 6.14Z"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   AI ICON
========================================================= */

function AIIcon() {
  return (
    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.14)]">
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
          fill="#202020"
        />

        <path
          d="M18.5 14L19.3 16.7L22 17.5L19.3 18.3L18.5 21L17.7 18.3L15 17.5L17.7 16.7L18.5 14Z"
          fill="#087FF5"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   PIPELINE ICON
========================================================= */

function PipelineIcon() {
  return (
    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.14)]">
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 6H20M7 12H17M10 18H14"
          stroke="#20BDBD"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="4"
          cy="6"
          r="2"
          fill="#20BDBD"
        />

        <circle
          cx="20"
          cy="6"
          r="2"
          fill="#20BDBD"
        />

        <circle
          cx="7"
          cy="12"
          r="2"
          fill="#20BDBD"
        />

        <circle
          cx="17"
          cy="12"
          r="2"
          fill="#20BDBD"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   REVENUE ICON
========================================================= */

function RevenueIcon() {
  return (
    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.14)]">
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3V21"
          stroke="#20C978"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M16 7.5C16 6.12 14.21 5 12 5C9.79 5 8 6.12 8 7.5C8 8.88 9.79 10 12 10C14.21 10 16 11.12 16 12.5C16 13.88 14.21 15 12 15C9.79 15 8 13.88 8 12.5"
          stroke="#20C978"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   ICON RENDERER
========================================================= */

function renderIcon(icon: IconType) {
  switch (icon) {
    case "google":
      return <GoogleIcon />;

    case "ai":
      return <AIIcon />;

    case "pipeline":
      return <PipelineIcon />;

    case "revenue":
      return <RevenueIcon />;

    default:
      return null;
  }
}

/* =========================================================
   HOVER ICONS
========================================================= */

function HoverIcons({
  slice,
}: {
  slice: RevenueSlice;
}) {
  const positionClass = {
    "top-left":
      "left-[22%] top-[38%]",

    "top-right":
      "right-[22%] top-[38%]",

    "bottom-right":
      "right-[22%] bottom-[38%]",

    "bottom-left":
      "left-[22%] bottom-[38%]",
  }[slice.position];

  const secondPosition =
    slice.position === "top-left"
      ? "left-[15%] top-[45%]"
      : positionClass;

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {slice.icons.map((icon, index) => (
        <div
          key={`${icon}-${index}`}
          className={`absolute ${index === 1
            ? secondPosition
            : positionClass
            }`}
          style={{
            animation:
              "revenueIconPop 280ms ease-out both",
          }}
        >
          {renderIcon(icon)}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   CURVED SLICE LABEL
========================================================= */

function SliceLabel(props: any) {
  const {
    cx = CHART.center,
    cy = CHART.center,
    innerRadius = CHART.innerRadius,
    outerRadius = CHART.outerRadius,
    name = "",
    startAngle = 0,
    endAngle = 0,
    idPrefix = "revenue",
  } = props;

  const textRadius =
    innerRadius +
    (outerRadius - innerRadius) * 0.5;

  const GAP = 8;

  const pathStartAngle =
    startAngle - GAP;

  const pathEndAngle =
    endAngle + GAP;

  const startRadians =
    -pathStartAngle * RADIAN;

  const endRadians =
    -pathEndAngle * RADIAN;

  const startX =
    cx +
    textRadius *
    Math.cos(startRadians);

  const startY =
    cy +
    textRadius *
    Math.sin(startRadians);

  const endX =
    cx +
    textRadius *
    Math.cos(endRadians);

  const endY =
    cy +
    textRadius *
    Math.sin(endRadians);

  const safeName = String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const pathId =
    `${idPrefix}-curved-label-${safeName}`;

  const pathD = `
    M ${startX} ${startY}
    A ${textRadius} ${textRadius}
      0 0 1
      ${endX} ${endY}
  `;

  const isAI =
    name === "AI Intelligence";

  const fontSize = isAI ? 11 : 13;

  return (
    <g
      pointerEvents="none"
      aria-hidden="true"
    >
      <defs>
        <path
          id={pathId}
          d={pathD}
          fill="none"
        />
      </defs>

      <text
        fill="#ffffff"
        fontSize={fontSize}
        fontWeight={700}
        letterSpacing="-0.15px"
        pointerEvents="none"
      >
        <textPath
          href={`#${pathId}`}
          xlinkHref={`#${pathId}`}
          startOffset="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {name}
        </textPath>
      </text>
    </g>
  );
}

/* =========================================================
   FIXED OUTER CONNECTORS
========================================================= */

function ChartDecorations() {
  const r = CHART.connectorRadius;

  const blue = point(r, 135);
  const cyan = point(r, 45);
  const green = point(r, 315);
  const purple = point(r, 225);

  const LEFT = 0;
  const RIGHT = CHART.size;

  const BLUE_START_Y = 174;
  const CYAN_START_Y = 174;

  const PURPLE_START_Y = 256;
  const GREEN_START_Y = 256;

  const CURVE_X = 42;

  return (
    <svg
      viewBox={`0 0 ${CHART.size} ${CHART.size}`}
      preserveAspectRatio="xMidYMid meet"
      className="
        pointer-events-none
        absolute
        inset-0
        z-[1]
        h-full
        w-full
        overflow-visible
      "
      aria-hidden="true"
    >
      {/* BLUE CONNECTOR */}

      <path
        d={`
          M ${LEFT} ${BLUE_START_Y}

          H ${blue.x - 60}

          C ${blue.x - 45} ${BLUE_START_Y},
            ${blue.x - CURVE_X} ${blue.y},
            ${blue.x} ${blue.y}
        `}
        fill="none"
        stroke="#087FF5"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={blue.x}
        cy={blue.y}
        r="4"
        fill="#087FF5"
      />

      {/* CYAN CONNECTOR */}

      <path
        d={`
          M ${RIGHT} ${cyan.y + 90}

          H ${cyan.x + 50}

          C ${cyan.x + 40} ${cyan.y + 90},
            ${cyan.x + 66} ${cyan.y + 100},
            ${cyan.x} ${cyan.y}
        `}
        fill="none"
        stroke="#20BDBD"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={cyan.x}
        cy={cyan.y}
        r="4"
        fill="#20BDBD"
      />

      {/* PURPLE CONNECTOR */}

      <path
        d={`
          M ${LEFT} ${PURPLE_START_Y}

          H ${purple.x - 60}

          C ${purple.x - 45} ${PURPLE_START_Y},
            ${purple.x - CURVE_X} ${purple.y},
            ${purple.x} ${purple.y}
        `}
        fill="none"
        stroke="#B32BB2"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={purple.x}
        cy={purple.y}
        r="4"
        fill="#B32BB2"
      />

      {/* GREEN CONNECTOR */}

      <path
        d={`
          M ${RIGHT} ${GREEN_START_Y}

          H ${green.x + 60}

          C ${green.x + 45} ${GREEN_START_Y},
            ${green.x + CURVE_X} ${green.y},
            ${green.x} ${green.y}
        `}
        fill="none"
        stroke="#20C978"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx={green.x}
        cy={green.y}
        r="4"
        fill="#20C978"
      />
    </svg>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities({
  items,
}: {
  items: RevenueCapability[];
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-y-5 sm:gap-y-4">
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          {index > 0 && (
            <span className="mx-5 hidden h-[32px] w-px bg-[#d9ddd9] sm:block lg:mx-6" />
          )}

          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{
                color: item.color,
              }}
            >
              {item.title}
            </div>

            <div className="mt-1 text-[11px] text-[#68737e]">
              {item.subtitle}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function RevenueGrowthSection({
  revenueGrowth,
  className = "",
}: RevenueGrowthSectionProps) {
  const {
    eyebrow = "Digital Marketing That Drives Growth",

    title = (
      <>
        Grow Faster.
        <br />
        Market Smarter.
        <br />
        Build What&apos;s Next.
      </>
    ),

    description = `We help ambitious brands turn digital marketing into measurable business growth through SEO, paid media, content, social, AI, and data-driven strategies.`,

    secondaryDescription = `From attracting the right audience to generating qualified leads and improving conversions, every strategy is built around your growth goals.`,

    primaryCta = "Get Your Free Growth Plan",

    secondaryCta = "Explore Our Services",

    slices,

    capabilities = [],

    showCapabilities = true,

    showBackgroundGrid = true,
  } = revenueGrowth;

  const [
    hoveredIndex,
    setHoveredIndex,
  ] = useState<number | null>(null);

  /* =======================================================
     UNIQUE SVG ID
  ======================================================= */

  const uniqueId = useId();

  const idPrefix = uniqueId.replace(
    /[^a-zA-Z0-9_-]/g,
    ""
  );

  /* =======================================================
     SAFE SLICES
  ======================================================= */

  const safeSlices = useMemo(
    () => slices.slice(0, 4),
    [slices]
  );

  /* =======================================================
     CHART DATA
  ======================================================= */

  const chartData = useMemo(
    () =>
      safeSlices.map((slice) => ({
        name: slice.label,
        value: 25,
        color: slice.color,
        gradient: slice.gradient,
      })),
    [safeSlices]
  );

  /* =======================================================
     ACTIVE SLICE
  ======================================================= */

  const activeSlice =
    hoveredIndex !== null
      ? safeSlices[hoveredIndex]
      : null;

  /* =======================================================
     ACTIVE SHAPE
  ======================================================= */

  const renderActiveShape = (
    props: any
  ) => {
    const {
      cx,
      cy,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    const index =
      chartData.findIndex(
        (item) =>
          item.name === payload?.name
      );

    const hovered =
      index === hoveredIndex;

    const innerRadius = hovered
      ? CHART.hoverInnerRadius
      : CHART.innerRadius;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={CHART.outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cornerRadius={
            hovered ? 10 : 7
          }
        />

        {hovered && (
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={
              innerRadius - 2
            }
            outerRadius={
              innerRadius + 3
            }
            startAngle={startAngle}
            endAngle={endAngle}
            fill={payload?.color}
            opacity={0.95}
          />
        )}
      </g>
    );
  };

  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-white
        pt-10
        sm:pt-12
        lg:pt-16
        ${className}
      `}
    >
      {/* ===================================================
          BACKGROUND GRID
      =================================================== */}

      {showBackgroundGrid && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[230px] overflow-hidden opacity-50">
          <div
            className="absolute bottom-[-170px] left-[-15%] h-[430px] w-[130%]"
            style={{
              transform:
                "perspective(650px) rotateX(58deg)",

              transformOrigin:
                "center top",

              backgroundImage: `
                linear-gradient(
                  rgba(73,157,245,0.09) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(73,157,245,0.09) 1px,
                  transparent 1px
                )
              `,

              backgroundSize:
                "75px 50px",
            }}
          />
        </div>
      )}

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-center lg:grid-cols-[53%_47%] xl:grid-cols-[55%_45%]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 pb-10 lg:pb-16">

            {/* EYEBROW */}

            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-[6px] w-[6px] rounded-full bg-[#34A853]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4285F4] sm:text-[12px]">
                {eyebrow}
              </span>
            </div>

            {/* TITLE */}

            <h2 className="max-w-[680px] text-[38px] font-extrabold leading-[1.03] tracking-[-2px] text-[#111827] sm:text-[46px] md:text-[52px] lg:text-[49px] xl:text-[56px] 2xl:text-[60px]">
              {title}
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[600px] text-[15px] leading-[1.7] text-[#4b5563] sm:text-[16px] lg:text-[17px]">
              {description}
            </p>

            <p className="mt-3 max-w-[570px] text-[13px] leading-[1.65] text-[#68737e] sm:text-[14px]">
              {secondaryDescription}
            </p>

            {/* CTA */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="group inline-flex h-[52px] items-center justify-center gap-2 bg-[#34A853] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#2f984b] hover:shadow-[0_12px_28px_rgba(52,168,83,0.22)] sm:text-[15px]"
              >
                {primaryCta}

                <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                type="button"
                className="group inline-flex h-[52px] items-center justify-center gap-2 border border-[#c5c9c6] bg-transparent px-6 text-[14px] font-bold text-[#202020] transition-all duration-300 hover:border-[#4285F4] hover:text-[#4285F4] sm:text-[15px]"
              >
                {secondaryCta}

                <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </div>

            {/* TRUST */}

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-[#68737e]">
              <span>
                ✓ No long-term commitment
              </span>

              <span>
                ✓ Strategy tailored to your business
              </span>
            </div>

            {/* CAPABILITIES */}

            {showCapabilities &&
              capabilities.length > 0 && (
                <Capabilities
                  items={capabilities}
                />
              )}
          </div>

          {/* =================================================
              RIGHT CHART
          ================================================= */}

          <div className="relative flex min-h-[450px] items-center justify-center overflow-visible sm:min-h-[500px] lg:min-h-[540px]">
            <div
              className="
                relative
                aspect-square
                w-[92vw]
                max-w-[430px]
                overflow-visible

                sm:w-[76vw]
                md:w-[58vw]
                lg:w-[38vw]
                xl:w-[35vw]
                2xl:w-[32vw]
              "
            >

              {/* =================================================
                  OUTER CONNECTORS
              ================================================= */}

              <ChartDecorations />

              {/* =================================================
                  PIE CHART
              ================================================= */}

              <div className="absolute inset-0 z-[2] overflow-visible">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <PieChart>

                    {/* =================================================
                        GRADIENTS
                    ================================================= */}

                    <defs>

                      {/* BLUE */}

                      <linearGradient
                        id={`${idPrefix}-blueSlice`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#087FF5"
                        />

                        <stop
                          offset="100%"
                          stopColor="#126CEB"
                        />
                      </linearGradient>

                      {/* CYAN */}

                      <linearGradient
                        id={`${idPrefix}-cyanSlice`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#29C5C5"
                        />

                        <stop
                          offset="100%"
                          stopColor="#20B7B8"
                        />
                      </linearGradient>

                      {/* GREEN */}

                      <linearGradient
                        id={`${idPrefix}-greenSlice`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1FCB7A"
                        />

                        <stop
                          offset="100%"
                          stopColor="#22C878"
                        />
                      </linearGradient>

                      {/* PURPLE */}

                      <linearGradient
                        id={`${idPrefix}-purpleSlice`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#B72AB5"
                        />

                        <stop
                          offset="100%"
                          stopColor="#A929B0"
                        />
                      </linearGradient>

                    </defs>

                    {/* =================================================
                        PIE
                    ================================================= */}

                    {/* @ts-ignore */}
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={
                        CHART.innerRadius
                      }
                      outerRadius={
                        CHART.outerRadius
                      }
                      startAngle={180}
                      endAngle={-180}
                      paddingAngle={2}
                      cornerRadius={7}
                      stroke="none"
                      label={(props: any) => (
                        <SliceLabel
                          {...props}
                          idPrefix={
                            idPrefix
                          }
                        />
                      )}
                      labelLine={false}
                      isAnimationActive={false}
                      activeIndex={
                        hoveredIndex ??
                        undefined
                      }
                      activeShape={
                        renderActiveShape
                      }
                      onMouseEnter={(
                        _: any,
                        index: number
                      ) => {
                        setHoveredIndex(
                          index
                        );
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(
                          null
                        );
                      }}
                    >
                      {chartData.map(
                        (entry) => (
                          <Cell
                            key={
                              entry.name
                            }
                            fill={`url(#${idPrefix}-${entry.gradient})`}
                          />
                        )
                      )}
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* =================================================
                  HOVER ICONS
              ================================================= */}

              {activeSlice && (
                <HoverIcons
                  slice={activeSlice}
                />
              )}

              {/* =================================================
                  CENTER CIRCLE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  z-[5]
                  flex
                  h-[112px]
                  w-[112px]
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  border-[2px]
                  border-[#c6dff7]
                  bg-[#fffefa]
                  text-center
                  shadow-[0_0_28px_rgba(8,127,245,0.06)]

                  sm:h-[140px]
                  sm:w-[140px]

                  lg:h-[150px]
                  lg:w-[150px]
                "
              >
                <div className="text-[15px] font-bold leading-none text-[#202020] sm:text-[18px]">
                  IGR
                </div>

                <div className="mt-1.5 text-[12px] font-bold leading-tight text-[#10264c] sm:text-[15px]">
                  Revenue Engine
                </div>

                <div className="mt-1.5 text-[8px] font-medium text-[#52606d] sm:text-[10px]">
                  <span className="font-bold text-[#087FF5]">
                    Growth
                  </span>{" "}
                  Powered by Data + AI
                </div>

                <div className="relative z-[10] mt-3 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#087FF5] shadow-[0_5px_14px_rgba(8,127,245,0.22)] sm:h-[30px] sm:w-[30px]">
                  <span className="ml-[2px] h-0 w-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-t-transparent border-l-white" />
                </div>
              </div>

              {/* =================================================
                  HOVER CONTENT
              ================================================= */}

              {activeSlice && (
                <div
                  className={`
                    absolute
                    z-[10]
                    hidden
                    w-[180px]
                    lg:block
                    xl:w-[195px]

                    ${activeSlice.contentPosition ===
                      "left"
                      ? "left-[-105px]"
                      : "right-[-110px]"
                    }

                    ${activeSlice.position.includes(
                      "top"
                    )
                      ? "top-[72px]"
                      : "bottom-[72px]"
                    }
                  `}
                >
                  <div
                    className="text-[13px] font-bold leading-[1.3] xl:text-[14px]"
                    style={{
                      color:
                        activeSlice.textColor,
                    }}
                  >
                    {activeSlice.title}
                  </div>

                  <p className="mt-2.5 text-[11px] leading-[1.55] text-[#424242] xl:text-[12px]">
                    {
                      activeSlice.description
                    }
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes revenueIconPop {
          0% {
            opacity: 0;
            transform:
              scale(0.65)
              translateY(6px);
          }

          60% {
            opacity: 1;
            transform:
              scale(1.08)
              translateY(-1px);
          }

          100% {
            opacity: 1;
            transform:
              scale(1)
              translateY(0);
          }
        }
      `}</style>
    </section>
  );
}