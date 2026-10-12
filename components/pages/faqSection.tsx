"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  faqs?: FAQItem[];
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What is SEO for small businesses?",
    answer:
      "SEO for small businesses is a targeted strategy designed to help local and growing companies rank higher on Google search results. It drives qualified local and commercial traffic, connects with in-market consumers, and lowers dependence on expensive paid ads.",
  },
  {
    question: "How are small business SEO services different from enterprise SEO?",
    answer:
      "Small business SEO focuses primarily on agility, local visibility, high-intent transactional search queries, and high-impact quick wins. Enterprise SEO, by comparison, involves multi-million URL architectures, complex internationalization, and large cross-department workflows.",
  },
  {
    question: "Why do small businesses need search engine optimization (SEO)?",
    answer:
      "Over 90% of buyers search online before choosing a product or local vendor. SEO gives your company consistent, 24/7 visibility when qualified buyers are actively looking for the solutions you offer.",
  },
  {
    question: "How soon can SEO services for small businesses show results?",
    answer:
      "Most businesses begin seeing measurable keyword ranking jumps and organic traffic increases within 60 to 90 days. Sustainable compound pipeline growth and high revenue returns typically accelerate from month 4 onwards.",
  },
  {
    question: "What does an SEO company for small businesses actually do?",
    answer:
      "We handle technical audit fixes, speed optimization, strategic keyword mapping, high-converting content creation, on-page SEO, authoritative backlink acquisition, and continuous monthly ROI tracking.",
  },
  {
    question: "Why do the best SEO services for small businesses focus on content?",
    answer:
      "Search engines reward helpful, high-authority content that addresses specific user pain points. Conversion-led content brings qualified searchers right to your solution and converts visitors into paying customers.",
  },
  {
    question: "Why choose the best SEO company for small businesses over a general agency?",
    answer:
      "General agencies spread resources across too many disciplines without deep search specialism. A dedicated SEO growth partner understands algorithmic shifts, technical architectures, and high-ROI positioning.",
  },
  {
    question: "Is AI SEO important for small businesses, and does SEO Discovery provide it?",
    answer:
      "Yes. Generative search engines (Google AI Overviews, ChatGPT Search, Perplexity) are reshaping search. We optimize your website entities, structured data, and citations to ensure your brand appears inside AI search answers.",
  },
  {
    question: "How can SEO services for small businesses increase my leads?",
    answer:
      "By directing searchers with high commercial intent to optimized conversion landing pages with clear value propositions, trust proof, and streamlined inquiry forms.",
  },
  {
    question: "What makes IGR Digital the best SEO company for small businesses?",
    answer:
      "We don't sell vanity metrics like impressions or empty clicks. Every campaign is directly tied to pipeline revenue, transparent real-time dashboards, and no restrictive lock-in contracts.",
  },
  {
    question: "What is the cost of SEO services for small businesses?",
    answer:
      "Our flexible retainers are structured around your business size, competitive landscape, and specific target market, ensuring a positive return on investment from day one.",
  },
  {
    question: "How can I begin working with IGR Digital for small business SEO services?",
    answer:
      "Simply book a free 30-minute growth discovery call. We will review your current website performance, identify competitor gaps, and build a tailored SEO roadmap.",
  },
];

export default function FAQSection({
  eyebrow,
  title = "FAQs About",
  highlightText = "SEO Services for Small Businesses",
  description = "Find answers to common questions about how our SEO services help businesses grow online and attract more customers.",
  faqs = DEFAULT_FAQS,
}: FAQSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Helper to split title and highlight if highlightText not explicitly passed
  let displayTitle = title;
  let displayHighlight = highlightText;

  if (!highlightText && title.includes("About")) {
    const parts = title.split("About");
    displayTitle = parts[0] + "About";
    displayHighlight = parts.slice(1).join("About").trim();
  }

  return (
    <section className="relative overflow-hidden bg-[#fbfcfd] py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-slate-400">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1120] sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
            {displayTitle}{" "}
            {displayHighlight && (
              <span>{displayHighlight}</span>
            )}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              {description}
            </p>
          )}
        </div>

        {/* 2-Column FAQ Cards Grid (Exact match to reference image) */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className={`self-start rounded-2xl bg-white border transition-all duration-200 ${
                  isOpen
                    ? "border-orange-200 shadow-md ring-1 ring-orange-400/20"
                    : "border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-slate-200 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="pr-4 text-base sm:text-[17px] font-bold text-[#0B1120] leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-800 transition-colors ${
                      isOpen ? "bg-orange-50 text-orange-600" : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-700">
                    <div className="border-t border-slate-100 pt-3.5">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-14 rounded-2xl border border-slate-200/80 bg-white p-7 text-center shadow-sm sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#0B1120]">
              Still have questions about our services?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Speak directly with our senior growth strategists for a custom audit and tailored answers.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center rounded-full bg-[#ea580c] px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-[#c2410c] hover:-translate-y-0.5"
          >
            Chat with a Specialist
          </a>
        </div>
      </div>
    </section>
  );
}

