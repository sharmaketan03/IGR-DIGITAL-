import React from "react";
import type { Metadata } from "next";
import FreeAuditLandingClient from "@/components/pages/FreeAuditLandingClient";

export const metadata: Metadata = {
  title: "Free Website Audit Services | In-Depth SEO & Technical Diagnostic | IGR Digital",
  description:
    "Claim your 100% free comprehensive website & competitor SEO audit. Uncover hidden crawl bottlenecks, Core Web Vitals speed penalties, and high-value keyword gaps.",
  alternates: {
    canonical: "https://igrdigital.com/free-website-audit-services",
  },
};

export default function FreeWebsiteAuditPage() {
  return <FreeAuditLandingClient />;
}
