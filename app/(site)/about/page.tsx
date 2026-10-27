import React from "react";
import type { Metadata } from "next";
import WhoWeAreCustomView from "@/components/about/WhoWeAreCustomView";

export const metadata: Metadata = {
  title: "Who We Are | About IGR Digital - Modern Digital Marketing Agency",
  description:
    "Helping Small & Mid Size Businesses With Modern Digital Marketing Solutions. Over 22+ years of search excellence, 1.5M keywords ranked, and 18,500+ successful projects.",
  alternates: {
    canonical: "https://igrdigital.com/about",
  },
  openGraph: {
    title: "Who We Are | IGR Digital",
    description:
      "Modern digital marketing solutions for small and mid-size businesses. Meet our executive leadership, team, client stories, and reviews.",
    url: "https://igrdigital.com/about",
    siteName: "IGR Digital",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <WhoWeAreCustomView />
    </main>
  );
}
