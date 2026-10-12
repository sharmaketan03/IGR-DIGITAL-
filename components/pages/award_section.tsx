"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/reveal";
import InfiniteScroller, {
  type InfiniteScrollerHandle,
} from "@/components/ui/infiniteScroller";

import { siteContent } from "@/components/Data/homeData";

type Award = {
  title: string;
  image: string;
};

type AwardsContent = {
  eyebrow: string;
  headlinePlain: string;
  headlineHighlight: string;
  description: string;
  awards: Award[];
};

export default function Awards({
  awardscontent = siteContent?.awardsContent,
}: {
  awardscontent?: AwardsContent;
}) {
  const content = awardscontent || siteContent?.awardsContent;
  const {
    eyebrow,
    headlinePlain,
    headlineHighlight,
    description,
    awards,
  } = content || {};

  const scrollerRef = useRef<InfiniteScrollerHandle>(null);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal>
          {/* <p className="text-sm font-bold uppercase tracking-[0.2em] text-google-red">
            {eyebrow}
          </p> */}

          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            {headlinePlain}{" "}
            <span className="">{headlineHighlight}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>

        {/* Awards */}
        <Reveal delayMs={150}>
          <div className="mt-14 overflow-hidden rounded-md bg-white   shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)]">
            {/* Arrows */}
           
            <InfiniteScroller
              ref={scrollerRef}
              items={awards.map((award, index) => (
                <div
                  key={`${award.title}-${index}`}
                  className="
                    group relative flex flex-col items-center justify-center
                    gap-5 overflow-hidden
                    border-b border-r border-border
                    px-4 py-10
                    transition-colors duration-300
                    hover:bg-gradient-to-br
                    hover:from-google-red/[0.03]
                    hover:to-google-red/[0.01]
                    sm:px-6 sm:py-12
                  "
                >
                  {/* Hover side line */}
                  <span
                    className="
                      absolute inset-y-0 left-0 w-[3px]
                      origin-top scale-y-0
                      
                     
                      opacity-0
                      transition-all duration-500 ease-out
                      group-hover:scale-y-100
                      group-hover:opacity-100
                    "
                  />

                  {/* Image */}
                  <div
                    className="
                      relative flex
                      h-20 w-28
                      items-center justify-center
                      transition-all duration-300
                      group-hover:-translate-y-1
                      sm:h-24 sm:w-36
                    "
                  >
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="
                        object-contain
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Title */}
                  <p
                    className="
                      text-sm font-semibold text-slate-700
                      transition-colors duration-300
                      group-hover:text-ink
                      sm:text-base
                    "
                  >
                    {award.title}
                  </p>
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
        </Reveal>
      </div>
    </section>
  );
}