"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  ShieldCheck,
  TrendingUp,
  MapPin,
  CalendarCheck,
  Star,
  Users2,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Activity,
  Award,
} from "lucide-react";
import UniversalCtaBanner from "@/components/services/UniversalCtaBanner";
import { CaseStudiesMetricStripVariant } from "@/components/pages/CaseStudiesAlternativeVariants";

export default function HealthcareLandingClient() {
  const highlights = [
    {
      icon: CalendarCheck,
      stat: "460%",
      label: "Increase in Patient Appointments",
      desc: "Engineered high-intent medical search funnels capturing patients actively seeking specialized clinical care.",
    },
    {
      icon: MapPin,
      stat: "Top 3",
      label: "Google Maps 3-Pack Rankings",
      desc: "Dominate local hospital, doctor, and clinic keywords in your specific metropolitan zip codes.",
    },
    {
      icon: Star,
      stat: "1,200+",
      label: "Verified 5-Star Reviews",
      desc: "HIPAA-compliant, automated patient satisfaction workflows that build peerless online trust.",
    },
    {
      icon: Activity,
      stat: "-44%",
      label: "Lower Patient Acquisition Cost",
      desc: "Sustainable organic visibility replacing expensive emergency paid ads and third-party portal fees.",
    },
  ];

  const services = [
    {
      title: "Local Medical & Doctor Clinic SEO",
      desc: "Rank in the top 3 spots of Google Maps when local patients search for nearby specialists, pediatricians, dentists, and clinics.",
      points: [
        "Google Business Profile optimization with medical categories",
        "Geotagged treatment & symptom service pages",
        "Multi-location directory syndication (120+ platforms)",
      ],
    },
    {
      title: "HIPAA-Compliant Patient Conversion Funnels",
      desc: "Streamlined medical booking systems designed with strict privacy standards to convert visitors into booked consultations.",
      points: [
        "One-click teleconsultation & appointment routing",
        "Fast-loading mobile experiences for emergency visits",
        "Verified patient intake tracking & attribution",
      ],
    },
    {
      title: "Medical Authority & Digital PR",
      desc: "Establish your physicians and practice as trusted authority figures across Google E-E-A-T and news media.",
      points: [
        "Medical expert authorship & schema markup",
        "Syndicated health features & high-authority PR",
        "Evidence-backed clinical content hubs",
      ],
    },
  ];

  return (
    <div className="relative w-full bg-white text-slate-800">
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061e24] via-[#092a33] to-[#04151a] text-white py-20 sm:py-28">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-emerald-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-300">
              <Stethoscope className="h-4 w-4" />
              <span>Specialized Healthcare & Medical Practice SEO</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Drive Predictable Patient Bookings &amp; Local Clinic Dominance
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              We help doctors, dental groups, multi-specialty hospitals, and telehealth innovators rank #1 on Google Maps and search results with HIPAA-compliant, high-conversion growth marketing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://wa.me/919876543210"
                className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 hover:-translate-y-0.5"
              >
                Claim Free Clinic Audit
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY STATS STRIP
          ========================================================= */}
      <section className="relative -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 hover:border-teal-300 transition"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{item.stat}</div>
                  <div className="text-xs font-bold text-teal-700">{item.label}</div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
          ========================================================= */}
      <section className="py-20 bg-slate-50 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Tailored Healthcare Solutions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Engineered Specifically for Modern Medical Practices
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Generic SEO tactics don't work for healthcare. You need specialized Google E-E-A-T expertise, HIPAA adherence, and local intent modeling.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{srv.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED HEALTHCARE CASE STUDY STRIP
          ========================================================= */}
      <CaseStudiesMetricStripVariant
        studyKey="local"
        theme="emerald"
        customEyebrow="Verified Healthcare Case Study"
        customTitle="Dominating Local Map Packs Across 14 Medical Clinic Locations"
      />

      {/* =========================================================
          BOTTOM CTA
          ========================================================= */}
      <UniversalCtaBanner
        variant="navy-consult"
        eyebrow="READY TO GROW YOUR PATIENT BASE?"
        title="Get a Complete Diagnostic of Your Local Medical Search Presence"
        description="We will analyze your Google Map Pack visibility, local competitor keywords, and patient conversion funnel with zero obligation."
        primaryCtaText="Claim Your Free Audit"
        primaryCtaHref="https://wa.me/919876543210"
        secondaryCtaText="Contact Our Medical Team"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
