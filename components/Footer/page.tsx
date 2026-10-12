"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Mail,
  Phone,
  MessageCircle,
  Building2,
  GraduationCap,
  Users2,
  Briefcase,
  Share2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ---------------------------------------------------------------------- */
/* DATA FOR GLOBAL PRESENCE (TOP RIBBON OF FOOTER)                        */
/* ---------------------------------------------------------------------- */
const GLOBAL_OFFICES = [
  {
    country: "India (HQ)",
    city: "Jaipur, Rajasthan",
    address: "Mansarovar & Malviya Nagar Tech Corridor, Jaipur, Rajasthan 302020",
    phone: "+91 98765 43210",
    email: "hello@igrdigital.com",
    tag: "Headquarters",
    flag: "🇮🇳",
  },
  {
    country: "United States",
    city: "New York / Austin",
    address: "One World Trade Center, Suite 8500, New York, NY 10007",
    phone: "+1 (800) 412-9856",
    email: "usa@igrdigital.com",
    tag: "North America Hub",
    flag: "🇺🇸",
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "30 St Mary Axe, City of London, London EC3A 8EP",
    phone: "+44 20 7946 0921",
    email: "uk@igrdigital.com",
    tag: "Europe Hub",
    flag: "🇬🇧",
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "DIFC Gate Precinct 4, Level 5, Dubai, UAE",
    phone: "+971 4 312 8900",
    email: "uae@igrdigital.com",
    tag: "MENA Hub",
    flag: "🇦🇪",
  },
  {
    country: "Australia",
    city: "Sydney",
    address: "Barangaroo International Towers, Tower 3, Sydney NSW 2000",
    phone: "+61 2 8015 5234",
    email: "au@igrdigital.com",
    tag: "APAC Hub",
    flag: "🇦🇺",
  },
];

/* ---------------------------------------------------------------------- */
/* NAVIGATION LINK COLUMNS                                                */
/* ---------------------------------------------------------------------- */
const FOOTER_COLUMNS = [
  {
    title: "Our Company",
    links: [
      { label: "About IGR Digital", href: "/about" },
      { label: "Our Core Team", href: "/team" },
      { label: "Case Studies & ROI", href: "/case-studies" },
      { label: "Awards & Honors", href: "/awards" },
      { label: "Client Testimonials", href: "/testimonials" },
      { label: "Locations Directory", href: "/locations" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Core Services",
    links: [
      { label: "SEO Services", href: "/services/seo" },
      { label: "AI Search & AEO", href: "/services/ai-seo" },
      { label: "Google Ads & PPC", href: "/services/google-ads" },
      { label: "Social Media Growth", href: "/services/social-media-marketing" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Ecommerce Marketing", href: "/services/ecommerce-marketing" },
      { label: "B2B Performance", href: "/services/b2b-marketing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Growth Knowledge Hub", href: "/blog" },
      { label: "Free Website Audit", href: "/services/free-audit" },
      { label: "Technical SEO Checklist", href: "/resources/technical-checklist" },
      { label: "Competitor Telemetry", href: "/resources/competitor-intel" },
      { label: "Agency Comparison", href: "/resources/comparison" },
      { label: "Sitemap Index", href: "/sitemap.xml" },
    ],
  },
  {
    title: "Growth Packages",
    links: [
      { label: "Starter Brand Retainer", href: "/services#pricing" },
      { label: "Enterprise Scale Retainer", href: "/services#pricing" },
      { label: "International Multi-Region", href: "/services#pricing" },
      { label: "AI Optimization Blueprint", href: "/services/ai-seo" },
      { label: "Full-Funnel Paid Acquisition", href: "/services/ppc" },
    ],
  },
];

/* ---------------------------------------------------------------------- */
/* ACTION PILL BUTTONS (TRAINING, PARTNER, CAREER, REFERRAL)              */
/* ---------------------------------------------------------------------- */
const ACTION_CARDS = [
  {
    title: "Academy & Training",
    desc: "Master high-performance digital marketing",
    icon: GraduationCap,
    href: "/contact?topic=training",
  },
  {
    title: "Reseller Partner",
    desc: "White-label agency growth infrastructure",
    icon: Building2,
    href: "/contact?topic=reseller",
  },
  {
    title: "Join Our Team",
    desc: "Work with elite international growth engineers",
    icon: Briefcase,
    href: "/contact?topic=career",
  },
  {
    title: "Referral Program",
    desc: "Earn lucrative ongoing commission fees",
    icon: Share2,
    href: "/contact?topic=referral",
  },
];

export default function GlobalFooter() {
  return (
    <footer className="relative bg-[#151337] text-slate-200 font-sans border-t border-white/10">
      {/* ================================================================ */}
      {/* 1. TOP GLOBAL REACH HEADLINE & LOCATIONS RIBBON                  */}
      {/* ================================================================ */}
      <div className="border-b border-white/10 bg-[#0f0d28] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-teal-300">
              <Globe2 className="h-3.5 w-3.5 text-teal-400" />
              24/7 Global Campaign Operations
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              The Sun Never Sets on <span className="text-[#4285F4]">IGR</span>{" "}
              <span className="text-[#EA4335]">Digital</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
              Delivering high-velocity organic rankings, scaled paid acquisition, and enterprise data telemetry across premier international commercial hubs.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.country}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/40 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl" role="img" aria-label={office.country}>
                    {office.flag}
                  </span>
                  <span className="rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] font-semibold text-teal-300">
                    {office.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                  {office.country}
                </h3>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {office.address}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3 text-teal-400" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. MAIN FOOTER COLUMNS & LEADERSHIP BIO                         */}
      {/* ================================================================ */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Brand, Leadership Bio & Trust Badge */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-1 text-2xl font-extrabold tracking-tight">
              <span className="text-google-blue">I</span>
              <span className="text-google-red">G</span>
              <span className="text-google-yellow">R</span>
              <span className="ml-1.5 text-white">Digital</span>
            </Link>

            {/* Leadership Snippet */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-teal-400 text-white font-bold text-lg shadow-md">
                  GS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Govind Swami</h4>
                  <p className="text-xs text-teal-300 font-medium">Founder & Chief Growth Strategist</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                &ldquo;At IGR Digital, client ROI is our single north-star metric. We replace vague vanity metrics with transparent data engineering, predictable lead funnels, and compounding commercial search equity.&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <Mail className="h-3.5 w-3.5 text-teal-400" />
                <a
                  href="mailto:hello@igrdigital.com"
                  className="font-medium text-white hover:text-teal-300 transition"
                >
                  hello@igrdigital.com
                </a>
              </div>
            </div>

            {/* Google Preferred Source / Trust Button */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://news.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition"
              >
                <span className="flex items-center gap-0.5">
                  <span className="text-google-blue">G</span>
                  <span className="text-google-red">o</span>
                  <span className="text-google-yellow">o</span>
                  <span className="text-google-blue">g</span>
                  <span className="text-google-green">l</span>
                  <span className="text-google-red">e</span>
                </span>
                <span>Add us as preferred agency source</span>
              </a>

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-[#20ba59] transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Strategy Team</span>
              </a>
            </div>
          </div>

          {/* Right Columns: Dynamic Link Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 3. HORIZONTAL ACTION TILES (Training, Reseller, Career, Referral) */}
        {/* ================================================================ */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACTION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-teal-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                      {card.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>

        {/* ================================================================ */}
        {/* 4. PARTNER ACCREDITATIONS & VERIFIED CERTIFICATIONS BADGES       */}
        {/* ================================================================ */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white p-4 sm:p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Official Certifications:
              </span>
            </div>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Google Partner */}
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                <span className="flex items-center font-extrabold text-sm">
                  <span className="text-google-blue">G</span>
                  <span className="text-google-red">o</span>
                  <span className="text-google-yellow">o</span>
                  <span className="text-google-blue">g</span>
                  <span className="text-google-green">l</span>
                  <span className="text-google-red">e</span>
                </span>
                <span className="text-[11px] text-slate-600 font-semibold">Partner Premier</span>
              </div>

              {/* Meta Partner */}
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#1877F2] text-[11px] font-bold text-white">
                  f
                </span>
                <span className="text-[11px] text-slate-700 font-semibold">Marketing Partner</span>
              </div>

              {/* Microsoft / Bing Partner */}
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#008272] text-[11px] font-bold text-white">
                  b
                </span>
                <span className="text-[11px] text-slate-700 font-semibold">Bing Select Partner</span>
              </div>

              {/* ISO 9001 */}
              <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-[11px] text-slate-700 font-semibold">ISO 9001:2015 Quality</span>
              </div>

              {/* DMCA Protection */}
              <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                <span className="text-[11px] text-slate-700 font-semibold">DMCA Protected Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 5. BOTTOM COPYRIGHT & LEGAL DISCLAIMERS                          */}
      {/* ================================================================ */}
      <div className="border-t border-white/10 bg-[#0b0920] py-6 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white font-semibold">IGR Digital</strong>. All Rights Reserved. International Performance Digital Agency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/legal" className="hover:text-white transition">
              Legal Disclaimer
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Contact Badge */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with IGR Digital"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#20ba59]"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat with Us!</span>
      </a>
    </footer>
  );
}
