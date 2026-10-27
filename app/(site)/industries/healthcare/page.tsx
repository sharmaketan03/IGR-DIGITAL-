import React from "react";
import type { Metadata } from "next";
import HealthcareLandingClient from "@/components/pages/HealthcareLandingClient";

export const metadata: Metadata = {
  title: "Best SEO Agency for Doctors & Medical Practices | Healthcare SEO Services",
  description:
    "Maximize your organic patient bookings, hospital rankings, and doctor clinic visibility with specialized medical SEO and HIPAA-compliant healthcare marketing strategies.",
  alternates: {
    canonical: "https://igrdigital.com/industries/healthcare",
  },
};

export default function HealthcarePage() {
  return <HealthcareLandingClient />;
}
