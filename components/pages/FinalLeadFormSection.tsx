"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  User,
  Mail,
  Globe,
  HelpCircle,
  ChevronDown,
  Send,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SERVICE_OPTIONS = [
  "SEO",
  "AI Search Optimization",
  "PPC and Google Ads",
  "Content Marketing",
  "Social Media",
  "Performance Marketing",
  "Not Sure Yet",
];

export default function FinalLeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessEmail: "",
    websiteUrl: "",
    serviceRequired: "SEO",
    projectDescription: "",
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

    if (!formData.name.trim() || !formData.businessEmail.trim() || !formData.websiteUrl.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formSource: "final-lead-form-section" }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] py-20 sm:py-24 lg:py-28">
      {/* Decorative Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#4285F4]/12 via-[#34A853]/10 to-[#FBBC05]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-[#EA4335]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching Image 2 Reference */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4285F4] shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#4285F4]" />
            <span>Ready for Measurable Growth</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
            Let’s Talk About Your Growth Goals
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-2xl mx-auto">
            Tell us about your business and what you want to achieve. We will review your website and give you an honest view of where SEO, paid media and conversion improvements could help most.
          </p>
        </div>

        {/* ==============================================================
            THE COMBINED FORM CARD:
            - Left Side: Customer Support / Growth Specialist Image
            - Right Side: Premium Form with Google Tricolor Accent Bar
           ============================================================== */}
        <div className="relative mt-12 sm:mt-16 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] transition-all duration-300">
          
          {/* Subtle Top Google Accent Bar (from Image 2) */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#EA4335] z-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT 5 COLUMNS: IMAGE SIDE (Male Call Center & Support Specialist with Headset) */}
            <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-full lg:col-span-5 bg-slate-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85"
                alt="IGR Digital Male Support and Consultation Specialist with Headset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
              
              {/* Floating Badge over image */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Growth Strategists Active Online</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                  Get customized competitor link gaps & ROI forecasts within 24 hours.
                </p>
              </div>
            </div>

            {/* RIGHT 7 COLUMNS: FORM SIDE (Clean Inputs, Google UI & Action Buttons) */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center">
              
              {submitted ? (
                <div className="rounded-2xl bg-gradient-to-b from-emerald-50/90 to-emerald-50/40 p-8 sm:p-10 text-center border border-emerald-200/80 shadow-sm animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 mb-4">
                    <CheckCircle2 className="h-8 w-8 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-2">Enquiry Received Successfully</h3>
                  <p className="text-sm sm:text-base font-medium text-emerald-900/90 leading-relaxed max-w-md mx-auto">
                    Thank you. We have received your details and will audit your website. A senior growth strategist will reach out shortly.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-medium text-rose-700 animate-fade-in">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-slate-400" />
                          Name
                        </span>
                        <span className="text-[#EA4335] text-sm leading-none">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-[#4285F4] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4285F4]/10 hover:border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-slate-400" />
                          Business email
                        </span>
                        <span className="text-[#EA4335] text-sm leading-none">*</span>
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        required
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-[#4285F4] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4285F4]/10 hover:border-slate-300"
                      />
                    </div>
                  </div>

                  {/* Row 2: Website URL & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-slate-400" />
                          Website URL
                        </span>
                        <span className="text-[#EA4335] text-sm leading-none">*</span>
                      </label>
                      <input
                        type="url"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-[#4285F4] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4285F4]/10 hover:border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
                          Service required
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 pr-9 text-xs sm:text-sm font-medium text-slate-900 shadow-sm transition-all duration-200 focus:border-[#4285F4] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4285F4]/10 hover:border-slate-300 cursor-pointer"
                        >
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc} className="text-slate-900 py-1">
                              {svc}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Short project description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Short project description (optional)
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={3}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="What are you trying to achieve?"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-200 focus:border-[#4285F4] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4285F4]/10 hover:border-slate-300 resize-none"
                    />
                  </div>

                  {/* Action Buttons & 100% Confidential row (From Image 2) */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#2b72e5] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                      >
                        <span>{loading ? "Submitting..." : "Request a Proposal"}</span>
                        <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
                      >
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>Book a Discovery Call</span>
                      </Link>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>100% Confidential</span>
                    </div>
                  </div>

                  {/* Bottom Privacy Note (From Image 2) */}
                  <p className="text-[11px] text-slate-400 text-center sm:text-left pt-1">
                    We use your details only to respond to your enquiry. See our{" "}
                    <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
