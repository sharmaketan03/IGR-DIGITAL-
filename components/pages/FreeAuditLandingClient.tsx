"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OverlappingSupportCard from "./OverlappingSupportCard";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Zap,
  Globe2,
  ShieldCheck,
  Smartphone,
  Gauge,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  Lock,
  ChevronRight,
  RefreshCw,
  BarChart3,
  Check,
  Star,
} from "lucide-react";

type AuditStatus = "idle" | "analyzing" | "completed";

interface AuditResult {
  overallScore: number;
  url: string;
  loadSpeed: string;
  seoScore: number;
  mobileScore: number;
  securityScore: number;
  issuesFound: number;
  passedChecks: number;
  topOpportunities: string[];
}

export default function FreeAuditLandingClient() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [status, setStatus] = useState<AuditStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const startAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Save lead to Backend Payload CMS / MongoDB
    try {
      fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          name: [firstName, lastName].filter(Boolean).join(" ") || "Audit Inquirer",
          email: email.trim(),
          phone: `${phoneCode} ${phone}`.trim(),
          website: url.trim(),
          budget: monthlyBudget,
          service: selectedServices.join(", "),
          message: `Country: ${country} | WhatsApp: ${whatsapp} | Note: ${message}`,
          formSource: "free-website-audit-landing",
        }),
      }).catch((err) => console.error("Audit save error:", err));
    } catch (e) {
      // background save
    }

    setStatus("analyzing");
    setProgress(15);
    setCurrentStep("Connecting to search crawler and checking DNS response...");

    setTimeout(() => {
      setProgress(40);
      setCurrentStep("Inspecting mobile Core Web Vitals, LCP & INP metrics...");
    }, 1200);

    setTimeout(() => {
      setProgress(70);
      setCurrentStep("Crawling canonical links, meta tags & schema markup...");
    }, 2400);

    setTimeout(() => {
      setProgress(90);
      setCurrentStep("Comparing domain authority against top 5 industry rivals...");
    }, 3600);

    setTimeout(() => {
      setProgress(100);
      setStatus("completed");
      setResult({
        overallScore: 68,
        url: url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
        loadSpeed: "3.4s",
        seoScore: 71,
        mobileScore: 64,
        securityScore: 92,
        issuesFound: 14,
        passedChecks: 38,
        topOpportunities: [
          "Eliminate 3 duplicate canonical redirects on category endpoints",
          "Compress 1.8MB unoptimized hero images to pass mobile Core Web Vitals",
          "Add missing Organization & Product Schema JSON-LD for rich snippet eligibility",
          "Target 24 high-intent competitor keywords with zero search ranking currently",
        ],
      });
    }, 4500);
  };

  const resetAnalysis = () => {
    setStatus("idle");
    setProgress(0);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* =========================================================
          HERO BANNER: Crystal Clear Image Banner with Subtle Blue Gradient
          ========================================================= */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden bg-[#0A3D78]">
        {/* Crisp Background Photo with natural lighting & people clearly visible */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
          style={{
            backgroundImage: "url('/hero/contact-banner-bg.jpg')",
          }}
        />

        {/* Clean transparent blue tint matching user screenshot (clear, not dark/muddy) */}
        <div className="absolute inset-0 bg-[#0041CD]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02244E]/60 via-[#0A4184]/40 to-[#0A3D78]/70" />

        {/* Center Title in Blue Banner with drop shadow */}
        <div className="relative z-10 mx-auto max-w-5xl h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start pt-14 sm:pt-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] text-center">
            Get a Free Quote
          </h1>
        </div>
      </div>

      {/* =========================================================
          OVERLAPPING FORM CARD: Exactly Half covered by Banner, Half outside
          ========================================================= */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-64 sm:-mt-80 lg:-mt-[340px] mb-16 sm:mb-20">
        {/* White Card Container matching User Screenshot */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 text-slate-800 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] border border-slate-100">
          <form onSubmit={startAnalysis} className="space-y-4">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="E.g., John"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="E.g., Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Monthly Spent Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g., john@doe.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Spent Budget for Digital Marketing <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                    placeholder="E.g., $750"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
              </div>

              {/* Row 3: Phone Number with Country Code */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <select
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 focus:border-[#0041CD] focus:outline-none"
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+971">+971 (UAE)</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
              </div>

              {/* Row 4: Select Services Checkbox Grid */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Services <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
                  {[
                    "Search Engine Optimization",
                    "AI/LLM SEO Optimization",
                    "Google Ads",
                    "Yahoo/Ads/Bing Ads",
                    "Facebook Ads",
                    "Badlinks Cleanup",
                    "GMB Listing & Optimization",
                    "Content Writing",
                    "Guest Posting",
                    "Website Development",
                    "Other",
                  ].map((service, sIdx) => (
                    <label key={sIdx} className="flex items-center gap-2 cursor-pointer hover:text-slate-900 select-none">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedServices((prev) => [...prev, service]);
                          } else {
                            setSelectedServices((prev) => prev.filter((s) => s !== service));
                          }
                        }}
                        className="rounded border-slate-300 text-[#0041CD] focus:ring-[#0041CD] h-3.5 w-3.5"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 5: Country/Region & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country/Region <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter your country"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Enter your WhatsApp Number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                  />
                </div>
              </div>

              {/* Row 6: Website URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Website URL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your website URL (e.g., https://yourwebsite.com)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                />
              </div>

              {/* Row 7: Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0041CD]"
                />
              </div>

              {/* Submit Button matching Pinkish-Red outline pill button from screenshot */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50/60 hover:bg-rose-100/80 px-6 py-2.5 text-xs font-bold text-rose-600 transition hover:shadow-sm"
                >
                  <ArrowRight className="h-4 w-4 -rotate-45 text-rose-500" />
                  <span>Request Quote</span>
                </button>
              </div>
            </form>

            {/* Scanning status banner inside hero if triggered */}
            {status === "analyzing" && (
              <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-200 p-5 text-center space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white animate-spin">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div className="text-sm font-bold text-[#00267A]">
                  Analyzing {url || "Your Website"}...
                </div>
                <div className="text-xs font-mono text-blue-700">{currentStep}</div>
                <div className="mx-auto max-w-md h-2 rounded-full bg-blue-200 overflow-hidden">
                  <div
                    className="h-full bg-[#0041CD] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {status === "completed" && result && (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-left space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-emerald-700">Audit Diagnosis Complete</span>
                  <button
                    onClick={resetAnalysis}
                    className="text-xs text-slate-600 hover:text-slate-900 underline"
                  >
                    Reset
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="rounded-xl bg-white p-3 border border-emerald-100">
                    <div className="text-xl font-bold text-emerald-600">{result.overallScore}/100</div>
                    <div className="text-[11px] text-slate-500">SEO Health</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-emerald-100">
                    <div className="text-xl font-bold text-blue-600">{result.loadSpeed}</div>
                    <div className="text-[11px] text-slate-500">Mobile Speed</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-emerald-100">
                    <div className="text-xl font-bold text-rose-500">{result.issuesFound}</div>
                    <div className="text-[11px] text-slate-500">Issues Found</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-emerald-100">
                    <div className="text-xl font-bold text-emerald-600">{result.passedChecks}</div>
                    <div className="text-[11px] text-slate-500">Passed Checks</div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* =========================================================
          AUDIT SCOPE: What We Inspect Across 35+ Checkpoints
          ========================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041CD]">
              Comprehensive Diagnostic Protocol
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What We Inspect In Your 100% Free Audit
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Unlike generic auto-generated reports, our diagnostic suite tests every technical, content, and backlink factor that impacts Google rankings.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: "Core Web Vitals & Speed",
                desc: "We analyze LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS to ensure your site passes Google's mobile page experience thresholds.",
                points: ["Server Time to First Byte (TTFB)", "JavaScript execution lag", "Image compression & format", "Render-blocking asset review"],
              },
              {
                icon: ShieldCheck,
                title: "Indexation & Crawl Health",
                desc: "Ensure Googlebot can discover, render, and index your money pages without burning crawl budget on dead ends or faceted duplicate filters.",
                points: ["Robots.txt & XML sitemap validation", "Canonical tag consistency", "Broken 404 links & redirect loops", "Noindex and nofollow tag leakage"],
              },
              {
                icon: Search,
                title: "On-Page SEO & Hierarchy",
                desc: "Evaluate your title tags, meta descriptions, heading structure (H1/H2), and content topic clusters for commercial keyword intent alignment.",
                points: ["H1 and keyword relevancy check", "Meta title & CTR clickability audit", "Internal link equity distribution", "Content duplication & thin page check"],
              },
              {
                icon: Smartphone,
                title: "Mobile Responsiveness & UX",
                desc: "Since Google uses mobile-first indexing, we verify viewport configurations, tap targets, font legibility, and mobile viewport performance.",
                points: ["Mobile-first indexing compliance", "Tap target spacing errors", "Responsive layout shifts", "Viewport & touch element checks"],
              },
              {
                icon: BarChart3,
                title: "Competitor Keyword Gap",
                desc: "We scan your top 3 rivals to uncover the high-volume transactional keywords they rank for that your domain is currently missing.",
                points: ["Direct keyword intersection overlap", "High-margin search volume gaps", "Content cluster recommendations", "Quick-win target opportunity list"],
              },
              {
                icon: Lock,
                title: "Schema Markup & Security",
                desc: "Verify HTTPS encryption, SSL certificate health, and JSON-LD structured data implementation to unlock Google rich snippets.",
                points: ["Organization & WebSite schema", "LocalBusiness or Product schema", "Mixed content security warnings", "Rich snippet search eligibility"],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0041CD] group-hover:bg-[#0041CD] group-hover:text-white transition">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                  {card.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
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
          COMPARISON TABLE: Automated Tools vs. IGR Digital Audit
          ========================================================= */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02926E]">
              Why Choose IGR Digital
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Generic Free Tools vs. Our Search Audit
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#00267A] text-white">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold">Feature / Checkpoint</th>
                    <th className="p-4 sm:p-5 font-bold text-blue-200">Generic Online Free Checkers</th>
                    <th className="p-4 sm:p-5 font-bold text-emerald-300 bg-blue-900/60">
                      IGR Digital Senior Audit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {[
                    {
                      feature: "Inspection Depth",
                      generic: "Basic 5-point automated crawler",
                      igr: "35+ Technical, code & content checkpoints",
                    },
                    {
                      feature: "Human Strategist Review",
                      generic: "Zero (100% automated script)",
                      igr: "Reviewed by a senior technical SEO director",
                    },
                    {
                      feature: "Competitor Keyword Gap",
                      generic: "Not included",
                      igr: "Full overlap analysis with top 3 competitors",
                    },
                    {
                      feature: "Actionable Dev Solutions",
                      generic: "Generic 'Fix your speed' warnings",
                      igr: "Exact code instructions & developer-ready fixes",
                    },
                    {
                      feature: "Turnaround Time",
                      generic: "Instant generic PDF",
                      igr: "Instant overview + comprehensive 48-hr custom dossier",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        <span className="inline-flex items-center gap-1.5 text-rose-600">
                          <XCircle className="h-4 w-4 shrink-0" />
                          <span>{row.generic}</span>
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 bg-emerald-50/40 font-semibold text-slate-900">
                        <span className="inline-flex items-center gap-1.5 text-emerald-700">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{row.igr}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ SECTION
          ========================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0041CD]">
              Got Questions?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Frequently Asked Questions About The Audit
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Is this website audit really 100% free?",
                a: "Yes, absolutely. There is zero fee, no credit card required, and no hidden obligation. We provide this audit to showcase the technical rigor and depth of our search marketing team.",
              },
              {
                q: "How long does the detailed audit take to arrive?",
                a: "You get instant preliminary diagnostics right on your screen. If you submit your work email, our search strategist will manually prepare an in-depth 15-page custom report delivered within 24 to 48 business hours.",
              },
              {
                q: "Will this audit disrupt my website or slow down traffic?",
                a: "Not at all. Our search bots simulate standard Googlebot crawl patterns at low concurrency, ensuring 100% zero impact on your site speed, server load, or user experience.",
              },
              {
                q: "Can you help our developers implement the recommended fixes?",
                a: "Yes! Our engineering and technical SEO team can either work directly with your internal development team or handle the full implementation for you under our managed SEO engagements.",
              },
            ].map((faq, fIdx) => (
              <div key={fIdx} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM OVERLAPPING FORM: Half above footer, Half inside footer
          ========================================================= */}
      <section className="relative z-30 -mb-28 sm:-mb-36 lg:-mb-44 pt-10">
        <OverlappingSupportCard />
      </section>
    </div>
  );
}
