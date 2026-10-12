import React from "react";
import Link from "next/link";
import { ArrowRight, Globe2, MapPin, Sparkles, Building2 } from "lucide-react";
import { TARGET_COUNTRIES, CORE_SERVICES, type CountryDefinition, type CityDefinition } from "@/components/Data/locations";

interface InternalLinksHubProps {
  country?: CountryDefinition;
  city?: CityDefinition;
  currentServiceSlug?: string;
}

export default function InternalLinksHub({
  country,
  city,
  currentServiceSlug,
}: InternalLinksHubProps) {
  const locationPrefix = city
    ? `/digital-marketing-agency-${city.slug}`
    : country
    ? `/digital-marketing-agency-${country.slug}`
    : "/services";

  const locationName = city ? city.name : country ? country.name : "International";

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#fbfbfa] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#4285F4]">
            <Globe2 className="h-3.5 w-3.5 text-[#4285F4]" />
            CONNECTED DIGITAL GROWTH ECOSYSTEM
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#16213a] sm:text-3xl">
            Explore Services & Regional Hubs for {locationName}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Discover tailored digital acquisition strategies across key commercial sectors and neighboring markets.
          </p>
        </div>

        {/* 1. Services in this Location */}
        <div className="mt-12">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Sparkles className="h-4 w-4 text-[#EA4335]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#16213a]">
              Core Growth Services in {locationName}
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {Object.values(CORE_SERVICES).map((service) => {
              const isActive = service.slug === currentServiceSlug;
              const href = `${locationPrefix}/${service.slug}`;
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className={`group rounded-xl border p-3 transition text-center flex flex-col justify-between ${
                    isActive
                      ? "border-[#4285F4] bg-blue-50/50 shadow-sm"
                      : "border-slate-200 bg-[#fcfcfb] hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <span className="text-xs font-semibold text-[#16213a] group-hover:text-[#4285F4] transition-colors leading-snug">
                    {service.shortName}
                  </span>
                  <span className="mt-2 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:text-[#4285F4]">
                    <span>View Hub</span>
                    <ArrowRight className="h-2.5 w-2.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2. City Hubs if viewing a Country or City */}
        {country && country.cities.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Building2 className="h-4 w-4 text-[#34A853]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#16213a]">
                Major Commercial City Hubs in {country.name}
              </h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {country.cities.map((c) => {
                const isCurrentCity = city?.slug === c.slug;
                const cityHref = currentServiceSlug
                  ? `/digital-marketing-agency-${c.slug}/${currentServiceSlug}`
                  : `/digital-marketing-agency-${c.slug}`;
                return (
                  <Link
                    key={c.slug}
                    href={cityHref}
                    className={`group rounded-xl border p-3 transition text-center flex flex-col justify-between ${
                      isCurrentCity
                        ? "border-[#34A853] bg-emerald-50/50 shadow-sm"
                        : "border-slate-200 bg-[#fcfcfb] hover:border-slate-400 hover:bg-white"
                    }`}
                  >
                    <span className="text-xs font-semibold text-[#16213a] group-hover:text-[#34A853] transition-colors">
                      {c.name}
                    </span>
                    <span className="mt-1.5 text-[10px] text-slate-400 group-hover:text-[#34A853] flex items-center justify-center">
                      <MapPin className="h-2.5 w-2.5 mr-0.5" />
                      <span>{c.stateOrRegion || country.shortName}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Global Tier-1 Countries Directory */}
        <div className="mt-12">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Globe2 className="h-4 w-4 text-[#FBBC05]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#16213a]">
              Global Regional Markets Served by IGR Digital
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {TARGET_COUNTRIES.map((cntry) => {
              const isCurrent = country?.slug === cntry.slug;
              const targetHref = currentServiceSlug
                ? `/digital-marketing-agency-${cntry.slug}/${currentServiceSlug}`
                : `/digital-marketing-agency-${cntry.slug}`;
              return (
                <Link
                  key={cntry.slug}
                  href={targetHref}
                  className={`group rounded-xl border p-3.5 transition flex items-center justify-between ${
                    isCurrent
                      ? "border-[#4285F4] bg-blue-50/50 font-bold"
                      : "border-slate-200 bg-[#fcfcfb] hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-[#16213a] group-hover:text-[#4285F4] transition-colors">
                      {cntry.name}
                    </div>
                    <div className="text-[10px] text-slate-400">{cntry.region}</div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#4285F4] group-hover:translate-x-0.5 transition" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Link to Main Locations Directory */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4] hover:underline"
          >
            <span>View Full Worldwide Locations Directory</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
