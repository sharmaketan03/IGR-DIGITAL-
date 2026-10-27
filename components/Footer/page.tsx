"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Globe2,
  Mail,
  Phone,
  MessageCircle,
  Building2,
  GraduationCap,
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
      { label: "SEO Services", href: "/custom-seo-services/" },
      { label: "AI Search & AEO", href: "/ai-seo-services/" },
      { label: "Google Ads & PPC", href: "/google-ads-services/" },
      { label: "Social Media Growth", href: "/social-media-services/" },
      { label: "Content Marketing", href: "/content-marketing-services/" },
      { label: "Ecommerce Marketing", href: "/ecommerce-marketing-services/" },
      { label: "B2B Performance", href: "/b2b-marketing-services/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Growth Knowledge Hub", href: "/blog" },
      { label: "Free Website Audit", href: "/free-website-audit-services/" },
      { label: "Technical SEO Checklist", href: "/technical-audit-services/" },
      { label: "Competitor Telemetry", href: "/resources/competitor-intel" },
      { label: "Agency Comparison", href: "/resources/comparison" },
      { label: "Sitemap Index", href: "/sitemap.xml" },
    ],
  },
  {
    title: "Growth Packages",
    links: [
      { label: "Starter Brand Retainer", href: "/services#pricing" },
      { label: "Enterprise Scale Retainer", href: "/enterprise-seo-services/" },
      { label: "International Multi-Region", href: "/services#pricing" },
      { label: "AI Optimization Blueprint", href: "/ai-seo-services/" },
      { label: "Full-Funnel Paid Acquisition", href: "/ppc-advertising-services/" },
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
  const pathname = usePathname();
  const isOverlappingPage =
    pathname === "/contact" ||
    pathname?.includes("free-website-audit") ||
    pathname?.includes("free-audit");

  return (
    <footer className="relative bg-[#00174A] text-slate-200 font-sans border-t border-white/10">
      {/* ================================================================ */}
      {/* 1. TOP GLOBAL REACH HEADLINE & LOCATIONS RIBBON                  */}
      {/* ================================================================ */}
      <div
        className={`border-b border-white/10 bg-[#001F60] transition-all duration-300 ${
          isOverlappingPage
            ? "pt-32 sm:pt-40 lg:pt-48 pb-12"
            : "py-12"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#02926E]/40 bg-[#02926E]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#34d399]">
              <Globe2 className="h-3.5 w-3.5 text-[#34d399]" />
              24/7 Global Campaign Operations
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              The Sun Never Sets on <span className="text-blue-300">IGR</span>{" "}
              <span className="text-[#34d399]">Digital</span>
            </h2>
            <p className="mt-2 text-sm text-blue-100 max-w-2xl mx-auto">
              Delivering high-velocity organic rankings, scaled paid acquisition, and enterprise data telemetry across premier international commercial hubs.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.country}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:border-[#02926E]/60 hover:bg-white/[0.1] hover:-translate-y-1 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl" role="img" aria-label={office.country}>
                    {office.flag}
                  </span>
                  <span className="rounded-full bg-blue-950/70 px-2 py-0.5 text-[10px] font-semibold text-blue-200 border border-white/10">
                    {office.tag}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-white group-hover:text-[#34d399] transition-colors">
                  {office.country}
                </h3>
                <p className="mt-1 text-xs text-blue-100/80 line-clamp-2 leading-relaxed">
                  {office.address}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white transition flex items-center gap-1 font-medium"
                  >
                    <Phone className="h-3 w-3 text-[#34d399]" />
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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Brand, Leadership Bio & Trust Badge */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group transition-opacity hover:opacity-90">
              <div className="rounded-xl bg-white px-3.5 py-1.5 shadow-md">
                <Image
                  src="/Brand-clean.png"
                  alt="IGR Digital Logo"
                  width={200}
                  height={65}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Leadership Snippet */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0041CD] to-[#02926E] text-white font-bold text-lg shadow-md border border-white/20">
                  GS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Govind Swami</h4>
                  <p className="text-xs text-[#34d399] font-medium">Founder & Chief Growth Strategist</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-blue-100">
                &ldquo;At IGR Digital, client ROI is our single north-star metric. We replace vague vanity metrics with transparent data engineering, predictable lead funnels, and compounding commercial search equity.&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-blue-200">
                <Mail className="h-3.5 w-3.5 text-[#34d399]" />
                <a
                  href="mailto:hello@igrdigital.com"
                  className="font-medium text-white hover:text-[#34d399] transition"
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
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#20ba59] transition"
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-blue-100/75 hover:text-white transition-colors duration-200 block py-0.5"
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
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACTION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-[#02926E]/50 hover:bg-white/[0.1]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-[#02926E] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white group-hover:text-blue-200 transition-colors">
                      {card.title}
                    </h5>
                    <p className="text-[11px] text-blue-200/80 mt-0.5 line-clamp-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>

        {/* ================================================================ */}
        {/* 4. PARTNER ACCREDITATIONS & VERIFIED CERTIFICATIONS BADGES       */}
        {/* ================================================================ */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Official Certifications:
              </span>
            </div>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {/* Google Partner */}
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <span className="flex items-center font-extrabold text-sm">
                  <span className="text-google-blue">G</span>
                  <span className="text-google-red">o</span>
                  <span className="text-google-yellow">o</span>
                  <span className="text-google-blue">g</span>
                  <span className="text-google-green">l</span>
                  <span className="text-google-red">e</span>
                </span>
                <span className="text-[11px] text-blue-100 font-semibold">Partner Premier</span>
              </div>

              {/* Meta Partner */}
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#1877F2] text-[11px] font-bold text-white">
                  f
                </span>
                <span className="text-[11px] text-blue-100 font-semibold">Marketing Partner</span>
              </div>

              {/* Microsoft / Bing Partner */}
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#008272] text-[11px] font-bold text-white">
                  b
                </span>
                <span className="text-[11px] text-blue-100 font-semibold">Bing Select Partner</span>
              </div>

              {/* ISO 9001 */}
              <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                <ShieldCheck className="h-4 w-4 text-[#34d399]" />
                <span className="text-[11px] text-blue-100 font-semibold">ISO 9001:2015 Quality</span>
              </div>

              {/* DMCA Protection */}
              <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                <CheckCircle2 className="h-4 w-4 text-blue-300" />
                <span className="text-[11px] text-blue-100 font-semibold">DMCA Protected Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 5. BOTTOM COPYRIGHT & LEGAL DISCLAIMERS                          */}
      {/* ================================================================ */}
      <div className="border-t border-white/10 bg-[#000F33] py-6 text-xs text-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white font-semibold">IGR Digital</strong>. All Rights Reserved. International Performance Digital Agency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-blue-200">
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
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Quick Chat</span>
      </a>
    </footer>
  );
}
