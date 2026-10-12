import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageLayout from "@/components/services/LocationPageLayout";
import {
  TARGET_COUNTRIES,
  getCountryBySlug,
  getCityBySlug,
} from "@/components/Data/locations";

interface LocationMainPageProps {
  params: Promise<{
    location: string;
  }>;
}

// Generate static params for all 10 countries and all listed cities
export async function generateStaticParams() {
  return [];
}

// Generate SEO Metadata for every country and city
export async function generateMetadata({
  params,
}: LocationMainPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawLocation = resolvedParams.location;

  const country = getCountryBySlug(rawLocation);
  const cityResult = getCityBySlug(rawLocation);

  if (!country && !cityResult) {
    return {
      title: "Location Not Found | IGR Digital",
      robots: { index: false },
    };
  }

  const name = cityResult
    ? `${cityResult.city.name}, ${cityResult.country.shortName}`
    : country!.name;

  const title = cityResult
    ? `Digital Marketing Agency in ${cityResult.city.name} | IGR Digital`
    : `Digital Marketing Agency in ${country!.name} | IGR Digital`;

  const description = cityResult
    ? `Partner with IGR Digital in ${cityResult.city.name}. Data-backed SEO, Google Ads, and performance marketing engineered for ambitious brands in ${cityResult.city.name}.`
    : `Leading digital marketing agency serving businesses in ${country!.name}. Data-driven SEO, PPC, and full-funnel acquisition strategies that deliver measurable ROI.`;

  const canonicalUrl = `https://igrdigital.com/${rawLocation}`;

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

export default async function LocationMainPage({
  params,
}: LocationMainPageProps) {
  notFound();
}
