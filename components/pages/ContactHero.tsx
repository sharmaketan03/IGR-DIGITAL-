"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const COUNTRY_DIAL_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
];

const SERVICE_OPTIONS = [
  "Comprehensive Digital Marketing Strategy",
  "Search Engine Optimization (SEO)",
  "Google Ads & PPC Advertising",
  "Meta Ads (Facebook & Instagram)",
  "Social Media Management & Growth",
  "Content Marketing & Copywriting",
  "E-commerce & Shopify SEO",
  "Link Building & Digital PR",
  "Technical SEO & Speed Audit",
];

const BUDGET_OPTIONS = [
  "E.g. $250",
  "$500 - $1,500 / month",
  "$1,500 - $3,000 / month",
  "$3,000 - $5,000 / month",
  "$5,000+ / month (Enterprise)",
];

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dialCode: "+91",
    phone: "",
    service: "",
    monthlyBudget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formSource: "contact-hero-banner" }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage("Something went wrong. Please try again or chat via WhatsApp.");
      }
    } catch {
      setErrorMessage("Network error. Please try again later or reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-white">
      {/* =========================================================
          1. TOP HERO BANNER: Exactly 60vh
          Left Text & Bottom Logos
          ========================================================= */}
      <div className="relative w-full h-[60vh] min-h-[440px] max-h-[560px] overflow-hidden bg-[#0A3D78]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero/contact-banner-bg.jpg')",
          }}
        />

        {/* Blue color grading duotone overlay matching user screenshot */}
        <div className="absolute inset-0 bg-[#0c478a]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032a5a]/95 via-[#0A4184]/85 to-[#0e4f9c]/70" />

        {/* Content container inside 60vh banner */}
        <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-8 sm:pt-12 pb-5">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column Content */}
            <div className="lg:col-span-6 xl:col-span-6 pt-2 sm:pt-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px] leading-[1.1] drop-shadow-md">
                Get Close To
                <br />
                Perfection
              </h1>

              <p className="mt-3.5 max-w-md text-base sm:text-lg text-white/95 leading-relaxed font-normal">
                Contact us to get the best guidance possible! In digital, trust{" "}
                <strong className="text-white font-semibold">IGR Digital</strong>.
              </p>

              {/* Red 'Get a free Quote' Button matching reference */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#contact-form-box"
                  className="inline-flex items-center justify-center rounded-xl bg-[#E61F48] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#E61F48]/35 transition hover:bg-[#d0193e] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get a free Quote
                </a>
              </div>
            </div>

            {/* Spacer for right column on desktop so text doesn't overlap form */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6" />
          </div>

          {/* Partner logos inside the bottom edge of the banner (left aligned) */}
          <div className="hidden sm:flex items-center gap-4 pb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
              Trusted By:
            </span>
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-lg px-2.5 py-1 shadow-xs">
                <Image
                  src="/awards/clutch.webp"
                  alt="Clutch"
                  width={60}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="bg-white/95 rounded-lg px-2.5 py-1 shadow-xs">
                <Image
                  src="/awards/goodfirms.webp"
                  alt="GoodFirms"
                  width={65}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="bg-white/95 rounded-lg px-2.5 py-1 shadow-xs">
                <Image
                  src="/awards/googlepartner.png"
                  alt="Google Partner"
                  width={60}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="bg-white/95 rounded-lg px-2.5 py-1 shadow-xs">
                <Image
                  src="/awards/facebook-marketing.webp"
                  alt="Meta Partner"
                  width={70}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. FLOATING FORM CARD:
          - Compact height to fit perfectly in viewport (vh boundary)
          - Smaller title header "STAY IN TOUCH WITH US"
          - Half inside 60vh banner, half on white body
          ========================================================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left spacer for desktop */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6" />

          {/* Form Card: col-span-6, negative margin pulls it half into the 60vh banner */}
          <div
            id="contact-form-box"
            className="lg:col-span-6 xl:col-span-6 -mt-20 sm:-mt-40 lg:-mt-[390px]"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.16)] border border-slate-200/80 transition-all">

              {/* Top Grey Header Bar with smaller title */}
              <div className="bg-[#EAEAEA] py-2.5 px-6 text-center border-b border-slate-200/70">
                <h2 className="!text-[22px] md:!text-[28px] font-bold tracking-tight text-[#0B1120] uppercase font-sans">
                  STAY IN TOUCH WITH US
                </h2>
              </div>

              {/* Form Body: Compact spacing to prevent oversized scrolling */}
              <div className="p-5 sm:p-6 lg:p-7">
                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 p-6 text-center border border-emerald-200 py-8 animate-fade-in">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950">
                      Message Sent Successfully!
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you, <strong>{formData.firstName}</strong>. Our growth strategist will review your requirements and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          dialCode: "+91",
                          phone: "",
                          service: "",
                          monthlyBudget: "",
                          message: "",
                        });
                      }}
                      className="mt-4 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {errorMessage && (
                      <div className="rounded-lg bg-rose-50 border border-rose-200 p-2.5 text-xs text-rose-700">
                        {errorMessage}
                      </div>
                    )}

                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          <span className="text-[#E61F48] font-bold mr-0.5">*</span>First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          <span className="text-[#E61F48] font-bold mr-0.5">*</span>Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          <span className="text-[#E61F48] font-bold mr-0.5">*</span>Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          <span className="text-[#E61F48] font-bold mr-0.5">*</span>Phone Number
                        </label>
                        <div className="flex gap-1.5">
                          <div className="relative w-24 shrink-0">
                            <select
                              name="dialCode"
                              value={formData.dialCode}
                              onChange={handleChange}
                              className="w-full appearance-none rounded-md border border-slate-300 bg-white px-2 py-2 pr-6 text-xs text-slate-900 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                            >
                              {COUNTRY_DIAL_CODES.map((item) => (
                                <option key={item.code} value={item.code}>
                                  {item.flag} {item.code}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-1.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone num..."
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Select Our Services */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        <span className="text-[#E61F48] font-bold mr-0.5">*</span>Select Our Services
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 pr-8 text-xs text-slate-800 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      </div>
                    </div>

                    {/* Row 4: Monthly Budget */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        <span className="text-[#E61F48] font-bold mr-0.5">*</span>Monthly Budget for Digital Marketing
                      </label>
                      <input
                        type="text"
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleChange}
                        placeholder="E.g. $250"
                        list="budget-list"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                      />
                      <datalist id="budget-list">
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b} />
                        ))}
                      </datalist>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={2.5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78] transition"
                      />
                    </div>

                    {/* Submit Button Matching Screenshot */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex items-center gap-2 rounded-full border border-[#E61F48]/40 bg-white hover:bg-[#E61F48] hover:text-white px-6 py-2.5 text-xs font-bold text-[#E61F48] shadow-xs hover:shadow-sm transition-all duration-200 disabled:opacity-50"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-[#E61F48] group-hover:bg-white/20 group-hover:text-white transition">
                          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                        </span>
                        <span>{loading ? "Sending..." : "Submit"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Side Quick Action (Talk To Us tab from screenshot) */}
      <aside
        aria-label="Quick Actions"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center"
      >
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-l-xl border-y border-l border-slate-200 bg-white py-3.5 px-2.5 shadow-xl transition hover:bg-slate-50"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-[11px] font-bold tracking-wider text-[#0A4184] uppercase">
            Talk To Us
          </span>
        </a>
      </aside>
    </div>
  );
}
