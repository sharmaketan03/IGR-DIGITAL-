"use client";

import React, { useState } from "react";
import ServicePageBanner, { BannerVariant } from "@/components/services/ServicePageBanner";
import QuickMetricsBar from "@/components/services/QuickMetricsBar";
import Link from "next/link";
import { ArrowLeft, Sparkles, Layers } from "lucide-react";

export default function DemoBannersShowcasePage() {
  const [selectedVariant, setSelectedVariant] = useState<BannerVariant | "all">("all");

  const variantsList: { id: BannerVariant; title: string; category: string }[] = [
    { id: "ecommerce", title: "E-commerce SEO Banner", category: "Platform SEO" },
    { id: "backlinks", title: "Powerful Backlinks Banner", category: "Off-Page SEO" },
    { id: "custom-seo", title: "Custom SEO Strategies Banner", category: "Core SEO" },
    { id: "consulting", title: "Expert SEO Consulting Banner", category: "Consulting" },
    { id: "industries", title: "Industry-Specific SEO Banner", category: "Industries" },
    { id: "case-study", title: "Featured Case Study Banner (0 to 500K)", category: "Case Studies" },
    { id: "growth", title: "Real Business Growth Hub", category: "SEO Services" },
    { id: "ppc", title: "Pay-Per-Click (PPC) ROI Banner", category: "PPC Services" },
    { id: "social", title: "Social Media Brand Banner", category: "Social Marketing" },
    { id: "web-design", title: "High-Performing Websites Banner", category: "Web Design" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      {/* Top Header & Selector */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Service Page Banner Showcase</span>
            </div>
            <h1 className="mt-1 text-2xl font-black text-slate-900">
              Interactive Banners Gallery (As shown in your design reference)
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Select an individual banner or scroll down to view all 10 designs live with interactive mockups.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services</span>
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedVariant("all")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              selectedVariant === "all"
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Show All Banners (10)
          </button>
          {variantsList.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v.id)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                selectedVariant === v.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {v.category}
            </button>
          ))}
        </div>
      </div>

      {/* Render selected or all banners */}
      <div className="space-y-12">
        {variantsList
          .filter((v) => selectedVariant === "all" || selectedVariant === v.id)
          .map((v) => (
            <section key={v.id} className="relative">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {v.category} • <strong className="text-slate-800">{v.title}</strong>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  variant="{v.id}"
                </span>
              </div>
              <ServicePageBanner variant={v.id} />
              <div className="mt-[-2px]">
                <QuickMetricsBar />
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}
