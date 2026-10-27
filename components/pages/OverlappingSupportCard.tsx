"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OverlappingSupportCard() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    monthlyBudget: "",
    country: "",
    websiteUrl: "",
    phoneCode: "+91",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || loading) return;

    setLoading(true);
    try {
      await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: [formData.firstName, formData.lastName].filter(Boolean).join(" "),
          email: formData.email,
          phone: `${formData.phoneCode} ${formData.phoneNumber}`,
          message: formData.message,
          formSource: "overlapping-support-card",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* 2-Column Floating Card (Rounded, White, Drop Shadow) matching Screenshot */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column (7 cols): Clean form */}
          <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1120] tracking-tight leading-tight">
              Discover How We Can Help Your Business Grow.
            </h2>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center border border-emerald-200 py-8">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 mb-2" />
                <h3 className="text-lg font-bold text-emerald-950">Thank you for requesting a quote!</h3>
                <p className="mt-1 text-xs text-emerald-800">Our senior team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., John's Coffee Shop"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Email Address & Monthly Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E.g., john@doe.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Monthly Budget for Search Marketing
                    </label>
                    <input
                      type="text"
                      placeholder="E.g., $750"
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 3: Country/Region & Website URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country/Region <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., India"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Website URL <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your website URL (e.g., https://yourwebsite.com)"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 4: Phone Code & Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <select
                      value={formData.phoneCode}
                      onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                      className="rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-700 focus:border-[#0041CD] focus:outline-none"
                    >
                      <option value="+91">+91 (India)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+971">+971 (UAE)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 5: Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0041CD] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50/60 hover:bg-rose-100/80 px-6 py-2.5 text-xs font-bold text-rose-600 transition hover:shadow-sm"
                  >
                    <ArrowRight className="h-4 w-4 -rotate-45 text-rose-500" />
                    <span>Request Quote</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Call Specialist Photo matching exact screenshot */}
          <div className="relative min-h-[350px] lg:min-h-full lg:col-span-5 bg-gradient-to-br from-amber-50 to-slate-200 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="Growth Strategist Specialist"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white backdrop-blur-md bg-black/40 p-3.5 rounded-2xl border border-white/20">
              <p className="text-xs font-bold">1-on-1 Growth Strategy Session</p>
              <p className="text-[11px] text-slate-200">Connect directly with our search marketing consultants.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
