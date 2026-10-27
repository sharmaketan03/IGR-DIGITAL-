"use client";

import React from "react";
import { Cpu, Terminal, Database, Code, Globe2, Layers, Search, ShieldCheck } from "lucide-react";

export default function EngineeringStandard() {
  const pillars = [
    {
      icon: Terminal,
      title: "Raw Server Log & Crawl Intelligence",
      description: "We don't rely on third-party estimates alone. We inspect Googlebot hit frequencies, response code distributions, and cache invalidation directly.",
      techStack: ["Screaming Frog Enterprise", "Google Cloud BigQuery", "ELK Stack"],
    },
    {
      icon: Database,
      title: "Topical Graph & Entity Mapping",
      description: "We construct deep multi-intent semantic graphs that align with Google's Knowledge Graph and Wikidata entities, eliminating search intent cannibalization.",
      techStack: ["Diffbot Knowledge Graph", "Python SpaCy NLP", "Schema.org Graphs"],
    },
    {
      icon: Code,
      title: "Front-End Hydration & Core Web Vitals",
      description: "Our engineers refactor DOM hierarchies, eliminate render-blocking CSS/JS, and implement optimal dynamic hydration to achieve green Core Web Vital scores.",
      techStack: ["Next.js App Router", "Sub-second LCP & INP", "Shopify Liquid Refactor"],
    },
    {
      icon: ShieldCheck,
      title: "Deterministic Conversion Tracking",
      description: "Zero data leakage from ad blockers or cookie restrictions. 100% server-to-server tracking integrated with your internal billing and checkout databases.",
      techStack: ["Google Tag Manager Server", "Meta CAPI", "Looker Studio Enterprise"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070D1B] py-20 lg:py-28 text-white">
      {/* Background Tech Wireframe Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-bold tracking-wider text-cyan-300">
            <Cpu className="h-3.5 w-3.5" />
            THE ENGINEERING DIFFERENCE
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.18] text-white">
            We Treat SEO as Software Architecture, Not Casual Marketing
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Most agencies guess with surface-level blog posts. We engineer technical parity, eliminate algorithmic bottlenecks, and build compounding search authority.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 mb-6">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-400 mb-6">
                  {p.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {p.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
