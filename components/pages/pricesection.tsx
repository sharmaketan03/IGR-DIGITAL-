
"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";

const services = [
  {
    name: "SEO",
    usd: "$250",
    inr: "₹15,000",
    description:
      "Get higher rankings, more website traffic, and better site performance.",
    accent: "bg-google-blue",
    text: "text-google-blue",
    soft: "bg-google-blue/8",
    popular: false,
    view: "View SEO Plans",
  },
  {
    name: "PPC",
    usd: "$200",
    inr: "₹10,000",
    description:
      "Get more leads and sales with optimized paid advertising campaigns.",
    accent: "bg-google-red",
    text: "text-google-red",
    soft: "bg-google-red/8",
    popular: false,
    view: "View PPC Plans",
  },
  {
    name: "AI SEO",
    usd: "$300",
    inr: "₹18,000",
    description:
      "Improve visibility in ChatGPT, Gemini, Perplexity and AI search results.",
    accent: "bg-google-blue",
    text: "text-google-blue",
    soft: "bg-google-blue/8",
    popular: true,
    view: "View AI SEO Plans",
  },
  {
    name: "Digital Marketing",
    usd: "$350",
    inr: "₹25,000",
    description:
      "Grow your brand through social media, content, and targeted campaigns.",
    accent: "bg-google-yellow",
    text: "text-[#B88600]",
    soft: "bg-google-yellow/10",
    popular: false,
    view: "View Plans",
  },
  {
    name: "Link Building",
    usd: "$200",
    inr: "₹15,000",
    description:
      "Build quality backlinks to improve rankings, authority, and visibility.",
    accent: "bg-google-green",
    text: "text-google-green",
    soft: "bg-google-green/8",
    popular: false,
    view: "View Plans",
  },
];

export default function Pricing() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-surface py-12 sm:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-google-blue/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-google-blue/5 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-google-blue">
            <Sparkles size={13} />
            SIMPLE & TRANSPARENT PRICING
          </div>

          <h2 className="whitespace-nowrap text-ink text-[28px] sm:text-[32px] md:text-[38px]">
  Our Cost-Effective{" "}
  <span className="">Service Pricing</span>
</h2>

          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Our mission is to make digital marketing affordable for startups,
            SMBs and enterprises, helping them grow first. Every business
            deserves a chance to thrive online.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 xl:mt-10 xl:gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className={`group relative flex w-full max-w-[220px] flex-col rounded-2xl bg-white p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(11,17,32,0.09)] ${
                service.popular
                  ? "border-2 border-google-blue shadow-[0_12px_35px_rgba(66,133,244,0.12)]"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-google-blue px-3 py-1 text-[8px] font-bold tracking-[0.12em] text-white shadow-md">
                  <span>★</span>
                  MOST POPULAR
                </div>
              )}

              {/* Accent Icon */}
              <div
                className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${service.soft}`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${service.accent}`}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold tracking-tight text-ink">
                {service.name}
              </h3>

              {/* Pricing */}
              <div className="mt-3">
                <p className="text-[9px] font-medium uppercase tracking-wider text-muted">
                  Starting from
                </p>

                <div className="mt-0.5 flex items-baseline gap-1">
                  <span className="text-[25px] font-bold leading-none text-ink">
                    {service.usd}
                  </span>

                  <span className="text-[10px] text-muted">/mo</span>
                </div>

                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className={`text-sm font-bold ${service.text}`}>
                    {service.inr}
                  </span>

                  <span className="text-[9px] text-muted">
                    / month INR
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 min-h-[60px] flex-1 text-[11px] leading-[1.45] text-muted">
                {service.description}
              </p>

              {/* Divider */}
              <div className="my-3 h-px bg-border" />

              {/* Buttons */}
              <div className="space-y-1.5">
                <button
                  className={`flex w-full items-center justify-center gap-1 rounded-lg px-2.5 py-2 text-[10px] font-semibold transition-all duration-300 ${
                    service.popular
                      ? "bg-google-blue text-white hover:bg-google-blue/90"
                      : "bg-ink text-white hover:bg-google-blue"
                  }`}
                >
                  {service.view}

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>

                <button className="flex w-full items-center justify-center rounded-lg border border-border px-2.5 py-2 text-[10px] font-semibold text-ink transition-all duration-300 hover:border-google-blue hover:text-google-blue">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-center">
          <Check size={13} className="text-google-green" />

          <p className="text-[10px] text-muted">
            No long-term contracts.{" "}
            <span className="font-semibold text-ink">
              Flexible plans built around your goals.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
