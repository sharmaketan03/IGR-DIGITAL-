  "use client";

  import {
    useRef,
    type ReactNode,
  } from "react";

  import {
    Search,
    BarChart3,
    Gauge,
    CheckCircle2,
    XCircle,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    Zap,
    MousePointerClick,
  } from "lucide-react";

  import InfiniteScroller, {
    type InfiniteScrollerHandle,
  } from "@/components/ui/infiniteScroller";

  /* ---------------------------------------------------------------- */
  /* TYPES                                                            */
  /* ---------------------------------------------------------------- */

  export type VisualType = "serp" | "analytics" | "speed" | string;

  export type WhyChooseSlide = {
    fileLabel: string;
    fileTitle: string;
    fileDesc: string;

    eyebrow: string;

    headingLine1: string;
    headingLine2: string;

    proofTitle: string;
    proofBody: string;

    otherTitle: string;
    otherBody: string;

    footNote: string;

    visual: VisualType;
  };

  export type WhyChooseUsContent = {
    eyebrow: string;
    headline: string;
    description: string;

    statusLabel: string;

    autoAdvanceText: string;
    pausedText: string;

    slides: WhyChooseSlide[];
  };

  export type WhyChooseUsProps = {
    siteContent: WhyChooseUsContent;
  };

  /* ---------------------------------------------------------------- */
  /* SERP MOCKUP                                                      */
  /* ---------------------------------------------------------------- */

  function SerpMockup() {
    const rows = [
      {
        q: "best digital marketing agency",
        rank: '#1 for "best digital marketing agency"',
      },
      {
        q: "best seo agency",
        rank: '#1 for "best seo agency"',
      },
      {
        q: "ai seo agency",
        rank: '#1 for "ai seo agency"',
      },
    ];

    return (
      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.q}
            className="rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted">
              <Search className="h-3.5 w-3.5 shrink-0 text-google-blue" />

              <span className="truncate">
                {row.q}
              </span>
            </div>

            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-google-green/10">
                <div className="h-2 w-2 rounded-full bg-google-green" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] text-muted">
                  igrdigital.com
                </p>

                <p className="truncate text-sm font-medium text-google-blue">
                  Digital Marketing Agency for Small Businesses | IGR Digital
                </p>

                <p className="mt-1 line-clamp-2 text-xs text-muted">
                  Award-winning SEO & digital marketing agency focused on
                  measurable digital growth.
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs font-semibold text-ink">
              {row.rank}
            </p>
          </div>
        ))}
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* ANALYTICS MOCKUP                                                 */
  /* ---------------------------------------------------------------- */

  function AnalyticsMockup() {
    const keywordRows = [
      {
        keyword: "digital marketing agency",
        volume: "246,000",
        competition: "High",
      },
      {
        keyword: "seo agency near me",
        volume: "165,000",
        competition: "High",
      },
      {
        keyword: "ai seo services",
        volume: "135,000",
        competition: "High",
      },
    ];

    return (
      <div className="flex flex-col gap-4">
        {/* Traffic Analytics */}
        <div className="rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink">
              Traffic Analytics
            </p>

            <span className="rounded-full bg-google-green/10 px-2 py-0.5 text-[10px] font-medium text-google-green">
              +1.6% users
            </span>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border p-2">
              <p className="text-[10px] text-muted">
                Users
              </p>

              <p className="text-sm font-bold text-ink">
                8.7K
              </p>
            </div>

            <div className="rounded-lg border border-border p-2">
              <p className="text-[10px] text-muted">
                Sessions
              </p>

              <p className="text-sm font-bold text-ink">
                11K
              </p>
            </div>

            <div className="rounded-lg border border-border p-2">
              <p className="text-[10px] text-muted">
                Engagement
              </p>

              <p className="text-sm font-bold text-ink">
                58.9%
              </p>
            </div>
          </div>

          <svg
            viewBox="0 0 240 60"
            className="h-14 w-full"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              stroke="var(--google-red)"
              strokeWidth="2"
              points="0,40 20,20 40,45 60,25 80,42 100,22 120,44 140,20 160,40 180,15 200,38 220,18 240,30"
            />
          </svg>
        </div>

        {/* Keyword Research */}
        <div className="rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <p className="mb-3 text-xs font-semibold text-ink">
            Keyword Research Snapshot
          </p>

          <div className="space-y-2">
            {keywordRows.map((row) => (
              <div
                key={row.keyword}
                className="flex items-center justify-between border-b border-border pb-2 text-xs last:border-0 last:pb-0"
              >
                <span className="truncate pr-2 text-ink">
                  {row.keyword}
                </span>

                <span className="whitespace-nowrap text-muted">
                  {row.volume}

                  <span className="ml-2 font-medium text-google-red">
                    {row.competition}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* SPEED MOCKUP                                                     */
  /* ---------------------------------------------------------------- */

  function SpeedMockup() {
    return (
      <div className="flex flex-col gap-4">
        {/* PageSpeed */}
        <div className="flex items-center gap-4 rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="relative h-16 w-16 shrink-0">
            <svg
              viewBox="0 0 36 36"
              className="h-16 w-16 -rotate-90"
              aria-hidden="true"
            >
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="3"
              />

              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="var(--google-green)"
                strokeWidth="3"
                strokeDasharray="97.4"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-google-green">
              100
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold text-ink">
              PageSpeed Insights
            </p>

            <p className="text-[11px] text-muted">
              Mobile performance score
            </p>
          </div>
        </div>

        {/* GTmetrix */}
        <div className="flex items-center gap-4 rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-google-green/10">
            <span className="text-xl font-extrabold text-google-green">
              A
            </span>
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold text-ink">
              GTmetrix Grade
            </p>

            <div className="mt-1 flex gap-4 text-[11px] text-muted">
              <span>
                Performance{" "}
                <b className="text-ink">
                  96%
                </b>
              </span>

              <span>
                Structure{" "}
                <b className="text-ink">
                  98%
                </b>
              </span>
            </div>
          </div>

          <Zap className="h-4 w-4 shrink-0 text-google-yellow" />
        </div>

        {/* Search Console */}
        <div className="rounded-xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-ink">
              Search Console
            </p>

            <MousePointerClick className="h-3.5 w-3.5 text-google-blue" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-[10px] text-muted">
                Total clicks
              </p>

              <p className="text-sm font-bold text-google-blue">
                10.4K
              </p>
            </div>

            <div>
              <p className="text-[10px] text-muted">
                Total impressions
              </p>

              <p className="text-sm font-bold text-ink">
                4.32M
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* VISUAL RENDERER                                                  */
  /* ---------------------------------------------------------------- */

  function SlideVisual({
    type,
  }: {
    type: VisualType;
  }) {
    switch (type) {
      case "serp":
        return <SerpMockup />;

      case "analytics":
        return <AnalyticsMockup />;

      case "speed":
        return <SpeedMockup />;

      default:
        return null;
    }
  }

  /* ---------------------------------------------------------------- */
  /* ICON                                                             */
  /* ---------------------------------------------------------------- */

  function SlideIcon({
    type,
  }: {
    type: VisualType;
  }) {
    switch (type) {
      case "serp":
        return <Search className="h-4 w-4" />;

      case "analytics":
        return <BarChart3 className="h-4 w-4" />;

      case "speed":
        return <Gauge className="h-4 w-4" />;

      default:
        return null;
    }
  }

  /* ---------------------------------------------------------------- */
  /* BACKGROUND                                                       */
  /* ---------------------------------------------------------------- */

  function getVisualBackground(type: VisualType) {
    switch (type) {
      case "serp":
        return `
          radial-gradient(
            circle at 75% 20%,
            rgba(66, 133, 244, 0.42),
            transparent 32%
          ),
          radial-gradient(
            circle at 15% 85%,
            rgba(52, 168, 83, 0.16),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #07111f 0%,
            #0b2340 48%,
            #123b68 100%
          )
        `;

      case "analytics":
        return `
          radial-gradient(
            circle at 25% 80%,
            rgba(52, 168, 83, 0.34),
            transparent 34%
          ),
          radial-gradient(
            circle at 85% 20%,
            rgba(66, 133, 244, 0.25),
            transparent 32%
          ),
          linear-gradient(
            135deg,
            #07111f 0%,
            #0b2a2c 48%,
            #123b32 100%
          )
        `;

      case "speed":
        return `
          radial-gradient(
            circle at 80% 25%,
            rgba(251, 188, 5, 0.30),
            transparent 30%
          ),
          radial-gradient(
            circle at 20% 85%,
            rgba(66, 133, 244, 0.28),
            transparent 34%
          ),
          linear-gradient(
            135deg,
            #07111f 0%,
            #112b48 50%,
            #172f50 100%
          )
        `;

      default:
        return "linear-gradient(135deg, #07111f, #0b2340)";
    }
  }

  /* ---------------------------------------------------------------- */
  /* SINGLE SLIDE                                                     */
  /* ---------------------------------------------------------------- */

  function WhyChooseSlideCard({
    slide,
    statusLabel,
  }: {
    slide: WhyChooseSlide;
    statusLabel: string;
  }) {
    return (
      <div className="grid min-h-[520px] w-full grid-cols-1 lg:grid-cols-2">

        {/* ======================================================== */}
        {/* LEFT CONTENT                                             */}
        {/* ======================================================== */}

        <div className="p-6 sm:p-10 lg:p-12">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full  px-3 py-1 text-[11px] font-bold tracking-wider text-google-blue">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h3 className="mb-6 text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {slide.headingLine1}

            <br />

            <span className="text-ink">
              {slide.headingLine2}
            </span>
          </h3>

          {/* Proof */}
          <div className="mb-3 rounded-xl border border-google-green/20 bg-google-green/5 p-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-google-green" />

              <div>
                <p className="mb-1 text-sm font-semibold text-ink">
                  {slide.proofTitle}
                </p>

                <p className="text-sm leading-relaxed text-muted">
                  {slide.proofBody}
                </p>
              </div>
            </div>
          </div>

          {/* VS */}
          <div className="relative z-10 -my-1 flex justify-center">
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-white">
              VS
            </span>
          </div>

          {/* Other Agencies */}
          <div className="mt-3 mb-6 rounded-xl border border-google-red/20 bg-google-red/5 p-4">
            <div className="flex items-start gap-2.5">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-google-red" />

              <div>
                <p className="mb-1 text-sm font-semibold text-ink">
                  {slide.otherTitle}
                </p>

                <p className="text-sm leading-relaxed text-muted">
                  {slide.otherBody}
                </p>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="border-t border-border pt-5 text-sm leading-relaxed text-muted">
            {slide.footNote}
          </p>
        </div>

        {/* ======================================================== */}
        {/* RIGHT VISUAL                                             */}
        {/* ======================================================== */}

        <div
          className="relative min-h-[520px] overflow-hidden p-6 sm:p-10 lg:p-12"
          style={{
            background: getVisualBackground(slide.visual),
          }}
        >
          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Large Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-google-blue/20 blur-3xl" />

          {/* Bottom Glow */}
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-google-green/10 blur-3xl" />

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute right-10 top-20 h-32 w-32 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute right-16 top-[104px] h-20 w-20 rounded-full border border-white/10" />

          {/* Status */}
          <span className="absolute right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-google-green/40 bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-wide text-google-green backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-google-green opacity-75" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-google-green" />
            </span>

            {statusLabel}
          </span>

          {/* Visual */}
          <div className="relative z-10 mt-10">
            <SlideVisual type={slide.visual} />
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* MAIN COMPONENT                                                   */
  /* ---------------------------------------------------------------- */

  export default function WhyChooseUsSection({
    siteContent,
  }: WhyChooseUsProps) {
    const content = siteContent;
    const slides = content.slides;

    const scrollerRef =
      useRef<InfiniteScrollerHandle>(null);

    if (!slides?.length) {
      return null;
    }

    /*
    * InfiniteScroller doesn't expose active index.
    * So the top tabs are handled independently.
    *
    * The reusable scroller itself controls the actual
    * horizontal movement.
    */

    const slideItems: ReactNode[] = slides.map(
      (slide) => (
        <WhyChooseSlideCard
          key={slide.fileLabel}
          slide={slide}
          statusLabel={content.statusLabel}
        />
      )
    );

    return (
      <section
        className="w-full   py-16 sm:py-20 lg:py-24 !bg-white"
        aria-label={content.headline}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* ====================================================== */}
          {/* HEADER                                                  */}
          {/* ====================================================== */}

          <div className="mb-10 text-center sm:mb-14">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-google-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-google-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-google-blue" />

              {content.eyebrow}
            </span>

            <h2 className="text-ink">
              {content.headline}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              {content.description}
            </p>
          </div>

          {/* ====================================================== */}
          {/* CATEGORY CARDS                                          */}
          {/* ====================================================== */}

          <div
            className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
            role="tablist"
            aria-label="Comparison categories"
          >
            {slides.map((item) => (
              <button
                key={item.fileLabel}
                type="button"
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition-all duration-300 hover:border-google-blue/40 hover:shadow-sm"
                onClick={() => {
                  const index = slides.findIndex(
                    (slide) =>
                      slide.fileLabel === item.fileLabel
                  );

                  if (index === -1) {
                    return;
                  }

                  /*
                  * Manual step based on the difference
                  * between current visual and requested tab
                  * cannot be known from the reusable component.
                  *
                  * Therefore these buttons are visual labels,
                  * while arrows below control the reusable scroller.
                  */
                }}
              >
                {/* Icon */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                  <span className="text-google-blue">
                    <SlideIcon type={item.visual} />
                  </span>
                </span>

                {/* Text */}
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold tracking-wider text-muted">
                    {item.fileLabel}
                  </span>

                  <span className="block truncate text-sm font-semibold text-ink">
                    {item.fileTitle}
                  </span>

                  <span className="block truncate text-[11px] text-muted">
                    {item.fileDesc}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* ====================================================== */}
          {/* MAIN REUSABLE CAROUSEL                                  */}
          {/* ====================================================== */}

          <div className="relative overflow-hidden rounded-2xl border border-border  shadow-sm">

            <InfiniteScroller
              ref={scrollerRef}
              items={slideItems}
              glideSeconds={1.1}
              pauseBetweenMs={3000}
              pauseAtEndMs={1200}
              pauseAtStartMs={900}
              autoPlay={true}
              pauseOnHover={true}
              gapClassName="gap-0"
              itemClassName="w-full"
              className="w-full"
            />

            {/* ================================================== */}
            {/* FOOTER CONTROLS                                    */}
            {/* ================================================== */}

            <div className="flex flex-col gap-4 border-t border-border  px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Auto advance */}
              <div className="flex items-center gap-2 text-xs text-muted">
                <TrendingUp className="h-3.5 w-3.5 shrink-0" />

                <span>
                  {content.autoAdvanceText}
                </span>
              </div>

              {/* Indicators */}
              <div
                className="flex items-center gap-2"
                aria-label="Carousel indicators"
              >
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === 0
                        ? "w-7 bg-google-blue"
                        : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() =>
                    scrollerRef.current?.scrollPrev()
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-all hover:border-google-blue hover:bg-google-blue hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() =>
                    scrollerRef.current?.scrollNext()
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-all hover:border-google-blue hover:bg-google-blue hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* MOBILE COUNTER                                         */}
          {/* ====================================================== */}

          <div className="mt-4 flex justify-center lg:hidden">
            <span className="text-xs font-medium text-muted">
              Swipe to explore
            </span>
          </div>
        </div>
      </section>
    );
  }