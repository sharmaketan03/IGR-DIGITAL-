"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
    alt: "Digital marketing strategy",
    label: "Strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    alt: "Digital analytics dashboard",
    label: "Analytics",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    alt: "Digital growth team",
    label: "Growth",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    alt: "Marketing collaboration",
    label: "Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1600&auto=format&fit=crop",
    alt: "Digital marketing workspace",
    label: "Innovation",
  },
];

function shuffleArray(array: number[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function BlogHeroVisual() {
  const initialOrder = useMemo(
    () => shuffleArray(HERO_IMAGES.map((_, index) => index)),
    []
  );

  const [imageOrder, setImageOrder] = useState<number[]>(initialOrder);
  const [currentPosition, setCurrentPosition] = useState(0);

  const currentIndex = imageOrder[currentPosition] ?? 0;
  const currentImage = HERO_IMAGES[currentIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentPosition((position) => {
        const nextPosition = position + 1;

        // Current shuffled cycle complete.
        // Create a completely new random cycle.
        if (nextPosition >= imageOrder.length) {
          setImageOrder((previousOrder) => {
            let nextOrder = shuffleArray(
              HERO_IMAGES.map((_, index) => index)
            );

            // Don't allow the last image of previous cycle
            // to become the first image of the new cycle.
            if (
              nextOrder.length > 1 &&
              nextOrder[0] === previousOrder[previousOrder.length - 1]
            ) {
              [nextOrder[0], nextOrder[1]] = [
                nextOrder[1],
                nextOrder[0],
              ];
            }

            return nextOrder;
          });

          return 0;
        }

        return nextPosition;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [imageOrder.length]);

  return (
    <div className="relative mt-12 w-full lg:mt-16">
      {/* Main Visual */}
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100 shadow-[0_30px_100px_rgba(15,23,42,0.14)] sm:rounded-[36px]">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
                index === currentIndex
                  ? "scale-100 opacity-100"
                  : "scale-[1.04] opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === currentIndex}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
              />
            </div>
          ))}

          {/* Image overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65" />

          {/* Top glass bar */}
          <div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-6 sm:top-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                IGR Digital Insights
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="flex items-end justify-between gap-5">
              <div>
                <div className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1.5 shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4285F4]">
                    {currentImage.label}
                  </span>
                </div>

                <h3 className="max-w-xl text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  Ideas, strategies and insights built for modern brands.
                </h3>
              </div>

              <div className="hidden shrink-0 sm:flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-5 right-5 flex items-center gap-1.5 sm:bottom-7 sm:right-7">
            {imageOrder.map((imageIndex, position) => (
              <span
                key={`${imageIndex}-${position}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  position === currentPosition
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -bottom-5 -left-4 h-14 w-14 rounded-2xl bg-[#4285F4] shadow-[0_18px_40px_rgba(66,133,244,0.28)] sm:-left-7 sm:h-16 sm:w-16" />

      <div className="pointer-events-none absolute -right-3 -top-4 h-10 w-10 rounded-full bg-[#FBBC05] shadow-[0_15px_35px_rgba(251,188,5,0.25)] sm:-right-5 sm:-top-5 sm:h-12 sm:w-12" />

      <div className="pointer-events-none absolute bottom-8 right-[-18px] hidden h-7 w-7 rounded-lg bg-[#34A853] shadow-lg sm:block" />
    </div>
  );
}