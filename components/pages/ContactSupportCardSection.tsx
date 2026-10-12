"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactSupportCardSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteUrl: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Card with Left Form + Right Support Agent Photo matching screenshot */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left 7 Columns: Form */}
            <div className="p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-center">
              <h2 className="!text-[22px] sm:!text-[26px] font-extrabold text-[#0B1120] leading-snug">
                Discover How We Can Help Your Business Grow.
              </h2>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-emerald-50 p-6 text-center border border-emerald-200 py-8">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 mb-2" />
                  <h3 className="text-lg font-bold text-emerald-950">Thank you for requesting a quote!</h3>
                  <p className="mt-1 text-xs text-emerald-800">Our senior team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        <span className="text-[#E61F48] mr-0.5">*</span>Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        <span className="text-[#E61F48] mr-0.5">*</span>Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        <span className="text-[#E61F48] mr-0.5">*</span>Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Website URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none focus:ring-1 focus:ring-[#0A3D78]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      <span className="text-[#E61F48] mr-0.5">*</span>Select Service
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 pr-7 text-xs text-slate-800 focus:border-[#0A3D78] focus:outline-none"
                      >
                        <option value="">Choose Service...</option>
                        <option value="SEO Services">Search Engine Optimization (SEO)</option>
                        <option value="Google Ads">Google Ads (PPC)</option>
                        <option value="Social Media">Social Media Marketing</option>
                        <option value="Content Marketing">Content Marketing</option>
                        <option value="Complete Growth Strategy">Complete Growth Strategy</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-y rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-[#0A3D78] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-2 rounded-full border border-[#E61F48]/40 bg-white hover:bg-[#E61F48] hover:text-white px-6 py-2.5 text-xs font-bold text-[#E61F48] transition shadow-xs"
                    >
                      <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-50 text-[#E61F48] group-hover:bg-white/20 group-hover:text-white transition">
                        <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span>{loading ? "Submitting..." : "Request Quote"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Support Agent Photo matching screenshot */}
            <div className="relative min-h-[300px] lg:col-span-5 bg-slate-100">
              <Image
                src="/hero/contact-agent.jpg"
                alt="IGR Digital Customer Support Specialist"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
