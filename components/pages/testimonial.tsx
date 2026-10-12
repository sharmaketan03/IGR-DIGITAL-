"use client";
 
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, User } from "lucide-react";
import { testimonialsContent } from "@/components/Data/testimonials";
import InfiniteScroller, { type InfiniteScrollerHandle } from "@/components/ui/infiniteScroller";
import Reveal from "@/components/ui/reveal";
 
function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsContent.testimonials)[number] }) {
  const [playing, setPlaying] = useState(false);
 
  return (
    <div className="group relative aspect-[9/5] w-full overflow-hidden bg-ink sm:aspect-[8/4]">
      {playing ? (
        <video
          src={testimonial.videoSrc}
          poster={testimonial.posterSrc}
          className="h-full w-full object-cover"
          controls
          autoPlay
        />
      ) : (
        <>
          {/* Placeholder thumbnail — swap for testimonial.posterSrc via next/image once available */}
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-ink">
            <User className="h-16 w-16 text-white/20" strokeWidth={1} aria-hidden="true" />
          </div>
 
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play testimonial from ${testimonial.name}`}
            className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-google-blue shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
          </button>
 
          <div className="absolute bottom-5 left-5 right-20">
            <p className="text-base font-bold text-white sm:text-lg">{testimonial.name}</p>
            <p className="text-sm text-white/75">{testimonial.role}</p>
          </div>
        </>
      )}
    </div>
  );
}
 
export default function Testimonials() {
  const { headline, description, testimonials } = testimonialsContent;
  const scrollerRef = useRef<InfiniteScrollerHandle>(null);
 
  return (
    <section className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl md:text-5xl">{headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
        </Reveal>
      </div>
 
      <Reveal delayMs={150}>
        <div className="relative mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <InfiniteScroller
            ref={scrollerRef}
            items={testimonials.map((t) => (
              <TestimonialCard key={t.name + t.role} testimonial={t} />
            ))}
            itemClassName="w-[80%] sm:w-[46%] lg:w-[31%]"
            gapClassName="gap-4 sm:gap-5"
            autoPlay={false}
          />
 
          <button
            aria-label="Previous testimonial"
            onClick={() => scrollerRef.current?.scrollPrev()}
            className="absolute left-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-google-blue p-2.5 text-white shadow-lg transition hover:brightness-110 sm:-left-4 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => scrollerRef.current?.scrollNext()}
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-google-blue p-2.5 text-white shadow-lg transition hover:brightness-110 sm:-right-4 sm:flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Reveal>
 
      <p className="mx-auto mt-8 max-w-2xl px-4 text-center text-xs text-muted">
        Placeholder client slots — replace with your real clients' names, roles, and video
        testimonials in <code className="rounded bg-slate-100 px-1 py-0.5">lib/testimonialsContent.ts</code>.
      </p>
    </section>
  );
}
 