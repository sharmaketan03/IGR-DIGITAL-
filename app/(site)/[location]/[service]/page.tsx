import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageLayout from "@/components/services/LocationPageLayout";
import {
  TARGET_COUNTRIES,
  CORE_SERVICES,
  getCountryBySlug,
  getCityBySlug,
  getServiceBySlug,
} from "@/components/Data/locations";

interface LocationServicePageProps {
  params: Promise<{
    location: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  return [];
}

// Generate metadata for location + service combinations
export async function generateMetadata({
  params,
}: LocationServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { location: rawLocation, service: rawService } = resolvedParams;

  const country = getCountryBySlug(rawLocation);
  const cityResult = getCityBySlug(rawLocation);
  const service = getServiceBySlug(rawService);

  if ((!country && !cityResult) || !service) {
    return {
      title: "Service Not Found | IGR Digital",
      robots: { index: false },
    };
  }

  const locationName = cityResult
    ? `${cityResult.city.name}, ${cityResult.country.shortName}`
    : country!.name;

  const title = `${service.name} in ${locationName} | IGR Digital`;
  const description = `Looking for a top-rated ${service.name} agency in ${locationName}? IGR Digital delivers data-driven ${service.shortName} strategies, technical precision, and measurable ROI for ambitious brands.`;
  const canonicalUrl = `https://igrdigital.com/${rawLocation}/${rawService}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "IGR Digital",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocationServicePage({
  params,
}: LocationServicePageProps) {
  notFound();
}
