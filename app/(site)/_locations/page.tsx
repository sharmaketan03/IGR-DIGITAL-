import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import LocationBreadcrumbs from "@/components/services/LocationBreadcrumbs";
import QuickMetricsBar from "@/components/services/QuickMetricsBar";
import FinalCtaFooterStats from "@/components/pages/finalCtaStats";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import { TARGET_COUNTRIES, CORE_SERVICES } from "@/components/Data/locations";
import { digitalMarketingServiceData } from "@/components/Data/servicePageData";

export const metadata: Metadata = {
  title: "Worldwide Locations Directory | IGR Digital",
  description:
    "Explore IGR Digital's international locations across North America, Europe, Asia-Pacific, and the Middle East. Data-driven SEO and performance marketing worldwide.",
  alternates: {
    canonical: "https://igrdigital.com/locations",
  },
};

export default function LocationsHubPage() {
  const regions = [
    {
      name: "North America",
      countries: TARGET_COUNTRIES.filter((c) => c.region === "North America"),
      color: "from-blue-600/10 to-indigo-600/10",
      accent: "text-[#4285F4]",
    },
    {
      name: "Europe",
      countries: TARGET_COUNTRIES.filter((c) => c.region === "Europe"),
      color: "from-blue-600/10 to-indigo-600/10",
      accent: "text-[#0B1120]",
    },
    {
      name: "Asia-Pacific",
      countries: TARGET_COUNTRIES.filter((c) => c.region === "Asia-Pacific"),
      color: "from-blue-600/10 to-indigo-600/10",
      accent: "text-[#4285F4]",
    },
    {
      name: "Middle East",
      countries: TARGET_COUNTRIES.filter((c) => c.region === "Middle East"),
      color: "from-blue-600/10 to-indigo-600/10",
      accent: "text-[#0B1120]",
    },
  ];

  return (
    <div className="bg-[#f4f5fa] text-slate-900">
      {/* Breadcrumbs */}
      <LocationBreadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] py-20 text-slate-900 border-b border-slate-200 lg:py-24">
        <div className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4]">
            <Globe2 className="h-3.5 w-3.5 text-[#4285F4]" />
            INTERNATIONAL PRESENCE & REGIONAL HUBS
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#0B1120]">
            Worldwide Growth Centers & Locations
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            IGR Digital partners with ambitious brands across North America, Europe, Asia-Pacific, and the Middle East, delivering data-backed SEO, Google Ads, and revenue marketing.
          </p>
        </div>
      </section>

      {/* Metrics Snapshot */}
      <QuickMetricsBar
        headline="GLOBAL CAMPAIGN REACH & BENCHMARKS"
        metrics={[
          {
            value: "10",
            label: "Tier 1 & Tier 2 Markets",
            sublabel: "Specialized regional strategy frameworks",
            change: "Global Scale",
            highlightColor: "blue",
          },
          {
            value: "25+",
            label: "Metropolitan City Hubs",
            sublabel: "Geo-targeted commercial search pipelines",
            change: "Local Depth",
            highlightColor: "green",
          },
          {
            value: "450+",
            label: "International Growth Accounts",
            sublabel: "Clients scaling across global markets",
            change: "Audited ROI",
            highlightColor: "yellow",
          },
          {
            value: "24/7",
            label: "Time-Zone Aligned Support",
            sublabel: "Dedicated strategists for each territory",
            change: "Full Telemetry",
            highlightColor: "red",
          },
        ]}
      />

      {/* BANNER 1: Mid-Page Worldwide Strategy Banner */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow="GLOBAL SEARCH EXPANSION"
        title="Ready to Capture High-Intent Traffic in 10+ International Markets?"
        description="Our international strategists combine localized SERP intelligence, multilingual keyword research, and localized conversion tracking."
        primaryCtaText="Get a Global Strategy Plan"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Chat on WhatsApp"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* Regional Directory Section */}
      <section className="py-20 lg:py-28 bg-[#f4f5fa]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <span className={`text-xl font-black ${region.accent}`}>
                    {region.name}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                    {region.countries.length} Target {region.countries.length === 1 ? "Market" : "Markets"}
                  </span>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {region.countries.map((country) => (
                    <div
                      key={country.slug}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#fcfcfb] p-6 transition-all duration-300 hover:border-[#4285F4] hover:bg-white hover:shadow-lg"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Tier-{country.tier} Economy
                            </span>
                            <h3 className="text-xl font-bold text-[#16213a] group-hover:text-[#4285F4] transition-colors mt-0.5">
                              {country.name}
                            </h3>
                          </div>
                          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-mono font-bold text-[#4285F4]">
                            {country.shortName}
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-600">
                          {country.marketOverview.slice(0, 160)}...
                        </p>

                        {/* Cities Pill List */}
                        {country.cities.length > 0 && (
                          <div className="mt-5 border-t border-slate-100 pt-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              Target City Hubs:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {country.cities.map((city) => (
                                <Link
                                  key={city.slug}
                                  href={`/digital-marketing-agency-${city.slug}`}
                                  className="rounded-md bg-white border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-700 hover:border-[#4285F4] hover:text-[#4285F4] transition"
                                >
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <Link
                          href={`/digital-marketing-agency-${country.slug}`}
                          className="flex items-center justify-between text-xs font-bold text-[#4285F4] group-hover:text-blue-700"
                        >
                          <span>Explore {country.name} Growth Hub</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER 2: Multi-Market Performance Banner */}
      <UniversalCtaBanner
        variant="blue-gradient"
        eyebrow="CROSS-BORDER REVENUE GROWTH"
        title="Expanding Into the US, UK, Europe, Australia, or UAE?"
        description="We align time zones, currency telemetry, and commercial search algorithms to make your market expansion profitable from month 1."
        primaryCtaText="Schedule Market Entry Call"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="WhatsApp Us Direct"
        secondaryCtaHref="https://wa.me/919876543210"
      />

      {/* Global Services Grid */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">
              GLOBAL SERVICE EXPERTISE
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#16213a] sm:text-4xl">
              Available Across All International Markets
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Every international location is supported by dedicated subject-matter specialists across search, paid media, and revenue architecture.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Object.values(CORE_SERVICES).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-[#fbfbfa] p-4 text-center transition hover:border-[#4285F4] hover:bg-white hover:shadow-md"
              >
                <div className="text-xs font-bold text-[#16213a] group-hover:text-[#4285F4] transition-colors">
                  {service.name}
                </div>
                <span className="mt-2 inline-flex items-center text-[10px] font-bold text-slate-400 group-hover:text-[#4285F4]">
                  <span>Explore Service</span>
                  <ArrowRight className="h-2.5 w-2.5 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaFooterStats
        eyebrow="EXPAND YOUR GLOBAL FOOTPRINT"
        headline="Ready to Scale Your Digital Revenue in Key International Markets?"
        subheadline="Schedule a consultation with our international growth strategists. We will evaluate your cross-border search footprint and construct a tailored market expansion roadmap."
        stats={digitalMarketingServiceData.finalCta?.stats}
      />
    </div>
  );
}
