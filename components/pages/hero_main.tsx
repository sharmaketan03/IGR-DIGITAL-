"use client";
 
import { useRef } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import InfiniteScroller, { type InfiniteScrollerHandle } from "@/components/ui/infiniteScroller";
import ReviewBadgesRow from "@/components/ui/ReviewBadges";
 

export default function Hero({ herocontent }: { herocontent: any }) {
  const { stats } = herocontent;
  const scrollerRef = useRef<InfiniteScrollerHandle>(null);
 
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* ===== Background video ===== */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src={"/Hero.mp4"}
          poster={herocontent.posterSrc || "/hero/leadBanner.webp"}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
        {/* Dark gradient overlay so white text stays readable over any footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>
 
      {/* ===== Content ===== */}
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 pt-10 sm:pt-14">
        {/* Eyebrow */}
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 sm:text-sm">
          {herocontent.eyebrow}
        </p>

        {/* Hero Header + Right-Aligned Logos */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
          <div className="max-w-4xl flex-1">
            <h1 className="text-2xl font-extrabold leading-[1.09] text-white sm:text-3xl md:text-4xl lg:text-[54px]">
              {herocontent.headlineLine1}
              <br />
              {herocontent.headlineLine2}
            </h1>
 
            <h2 className="mt-5 max-w-3xl text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {herocontent.subheadline}
            </h2>
 
            <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              {herocontent.description}
            </p>
          </div>

          {/* Right Aligned Logos with Hero Header */}
          <div className="shrink-0 lg:pt-2 lg:max-w-md">
            <ReviewBadgesRow theme="dark" size="2xl" align="right" />
          </div>
        </div>

 
        {/* CTAs + avatar stack */}
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
          <Link
            href={herocontent.ctaPrimary.href}
            className="rounded-full bg-white px-5 py-3.5 text-sm font-bold text-google-blue shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:px-7 sm:text-base"
          >
            {herocontent.ctaPrimary.label}
          </Link>
          <Link
            href={herocontent.ctaSecondary.href}
            className="rounded-full bg-google-red px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:px-7 sm:text-base"
          >
            {herocontent.ctaSecondary.label}
          </Link>
 
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {herocontent.clientAvatarInitials.map((initial: string) => (
                <span
                  key={initial}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-google-blue text-sm font-bold text-white"
                >
                  {initial}
                </span>
              ))}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-google-red text-xs font-bold text-white">
                {herocontent.clientCount}
              </span>
            </div>
          </div>
        </div>

 
        {/* Arrow controls — drive the stats scroller below */}
        <div className="mt-6 hidden items-center gap-3 text-white/70 sm:flex">
          <button
            aria-label="Scroll stats left"
            onClick={() => scrollerRef.current?.scrollPrev()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            aria-label="Scroll stats right"
            onClick={() => scrollerRef.current?.scrollNext()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
 
      {/* ===== Overlapping auto-scrolling stats strip ===== */}
      <div className="relative mx-auto -translate-y-1/2 max-w-7xl px-4 sm:px-6 lg:px-8">
        <InfiniteScroller
          ref={scrollerRef}
          items={stats.map((stat: any) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/15 bg-ink/70 p-5 backdrop-blur-md sm:p-6"
            >
              <p className="text-base font-bold text-white sm:text-lg">{stat.title}</p>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">{stat.description}</p>
            </div>
          ))}
          itemClassName="w-[85%] sm:w-[45%] lg:w-[28%] xl:w-[27%]"
          gapClassName="gap-3 sm:gap-4"
          glideSeconds={1.1}
          pauseBetweenMs={900}
          pauseAtEndMs={1200}
          pauseAtStartMs={900}
        />
      </div>
 
      {/* ===== Floating WhatsApp button ===== */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-google-green text-white shadow-lg transition hover:brightness-110"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
}
 