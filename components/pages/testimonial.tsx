"use client";
 
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, User, Star, Quote } from "lucide-react";
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
 
      {/* =========================================================
          VERIFIED CLIENT REVIEWS (Exact 1:1 match of screenshot 2)
          ========================================================= */}
      <div className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              quote:
                "“IGR Digital took our organic traffic from flat to 3x in two quarters. Their strategy, communication and execution have been outstanding.”",
              name: "D. Patel",
              location: "Austin, US",
              avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            },
            {
              quote:
                "“They actually understand our market — not a copy-paste playbook. Working with IGR Digital has been a game changer for our brand.”",
              name: "S. Khan",
              location: "Dubai, UAE",
              avatar:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
            },
            {
              quote:
                "“They helped us grow organically, improve our rankings and bring in quality leads. The team is professional, responsive and results-driven.”",
              name: "L. Meyer",
              location: "Berlin, DE",
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            },
            {
              quote:
                "“Best SEO partner we’ve worked with across four countries. Their expertise, transparency and support are unmatched.”",
              name: "M. Chen",
              location: "Toronto, CA",
              avatar:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* 5 Prominent Yellow Stars + Lavender Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[#fbbf24]">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        size={20}
                        className="fill-[#fbbf24] text-[#fbbf24] drop-shadow-xs"
                      />
                    ))}
                  </div>
                  <Quote
                    size={26}
                    className="fill-[#a5b4fc] text-[#a5b4fc] opacity-80"
                  />
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] leading-relaxed text-slate-700 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Divider & Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover shrink-0 shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <span className="text-slate-400">📍</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 