"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Target,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Quote,
} from "lucide-react";

export default function WhoWeAreCustomView() {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // 1. Team Members (from image)
  const teamMembers = [
    {
      name: "Sajan Singh",
      role: "SEO Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jaspreet Singh",
      role: "Senior SEO Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Harjot Kaur",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Tripta Sharma",
      role: "Link Outreach Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Gurpreet Singh",
      role: "Content Marketing Strategist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Simranjeet Kaur",
      role: "Digital PR Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Harman Singh",
      role: "Technical SEO Expert",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Aman",
      role: "PPC & Performance Lead",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Karan Bedi",
      role: "Data & Analytics Architect",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Upasana",
      role: "AEO & AI Specialist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Poonam Gupta",
      role: "Client Success Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  // 2. Client Testimonial Video Cards
  const clientVideos = [
    {
      title: "Mahi Bagga",
      company: "Real Estate & Commercial Growth",
      testimonial: "IGR Digital scaled our organic inbound calls by over 340% within 6 months. Their technical approach is unmatched.",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      videoThumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dylan Dalya",
      company: "E-Commerce & DTC Store",
      testimonial: "They resolved duplicate collection URLs on our Shopify store and doubled our monthly organic checkout revenue.",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      videoThumb: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Shiaan Kapoor",
      company: "B2B SaaS & Tech",
      testimonial: "Their white-hat editorial backlinks propelled our core product keywords straight into page 1 rankings across North America.",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      videoThumb: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Rose Laing",
      company: "Healthcare & Local Network",
      testimonial: "Dominating the local 3-pack across 12 clinic branches was a gamechanger. Patient inquiries are up consistently.",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      videoThumb: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1E1E1E]">
      {/* =========================================================================
          1. HERO HEADER: Team Photo with Circular Badge Overlay
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A1222] text-white">
        {/* Full-width Wide Team Banner Photo */}
        <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
            alt="IGR Digital Team Group"
            className="h-full w-full object-cover object-center filter brightness-[0.65] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1222] via-[#0A1222]/40 to-transparent" />

          {/* Centered Overlay Floating Badge & Headline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            {/* Circular Logo Badge (Exact match to reference badge) */}
            <div className="mb-6 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white p-3 shadow-2xl border-4 border-white/90">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-black text-blue-600 tracking-tighter leading-none">
                  IGR
                </span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                  DIGITAL
                </span>
              </div>
            </div>

            <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-md">
              Helping Small & Mid Size Businesses With{" "}
              <span className="text-[#F97316] font-black">
                Modern Digital Marketing Solutions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT US + STATS GRID (White Left Stats + Orange Highlight Column)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 8 Cols: About Us Copy + Metric Pairs */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                  About Us
                </h2>
                <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
                  <p>
                    IGR Digital is a premier growth marketing and search intelligence agency dedicated to empowering businesses worldwide. We specialize in transforming organic search into predictable, high-ROI commercial pipelines through white-hat SEO, technical architecture, high-authority Digital PR, and performance marketing.
                  </p>
                  <p>
                    With over a decade of dedicated search execution, our multidisciplinary squad of engineers, data analysts, and outreach directors tackles Google&apos;s most demanding algorithms with surgical precision, ensuring our clients achieve sustainable, compounding market dominance.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-[#0066FF] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* 2x3 White Box Metric Grid (Exact match to reference numbers) */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">22+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Years Experience
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">20+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Award Nominations
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">97%</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Client Retention
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">400+</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    In-House Experts
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">1.5M</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Keywords Ranked #1
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-[#111827]">18,500</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Stacked High-Impact Cards (With Orange Bottom Box) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-[#F9FAFB] p-6 text-center">
                <div className="text-3xl font-black text-[#111827]">1,42,832</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                  KEYWORDS RANKED
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Top-3 Positions on Google SERPs</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#F9FAFB] p-6 text-center">
                <div className="text-3xl font-black text-[#111827]">1M+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                  ACTIVE LEADS GENERATED
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Across B2B, DTC & Local Portfolios</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#F9FAFB] p-6 text-center">
                <div className="text-3xl font-black text-[#111827]">1000+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                  HAPPY ACTIVE CLIENTS
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Across 32 Countries Worldwide</div>
              </div>

              {/* Distinctive Orange Feature Box (Exact Match to Screenshot) */}
              <div className="rounded-2xl bg-[#F97316] p-7 text-center text-white shadow-lg shadow-orange-500/20">
                <div className="text-3xl sm:text-4xl font-black tracking-tight">24x5</div>
                <div className="text-sm font-bold uppercase tracking-wider mt-1">
                  OPERATIONS
                </div>
                <div className="text-xs text-orange-100 mt-1">
                  Dedicated Live Account Strategists & Swift Slack Communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISION / MISSION / VALUES (3 Clean White Cards with Top Badges)
          ========================================================================= */}
      <section className="py-14 bg-[#F9FAFB] border-y border-slate-200/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="mb-4 text-3xl">💡</div>
              <h3 className="text-xl font-extrabold text-[#111827]">Vision</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To redefine organic search excellence by building sustainable search equity that protects our partners from algorithm volatility and drives undisputed category leadership.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="mb-4 text-3xl">🎯</div>
              <h3 className="text-xl font-extrabold text-[#111827]">Mission</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower forward-thinking brands with transparent, data-engineered digital marketing solutions that maximize organic visibility, customer acquisition, and commercial ROI.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-2xl bg-white p-8 border border-slate-200 text-center shadow-xs flex flex-col items-center">
              <div className="mb-4 text-3xl">🏆</div>
              <h3 className="text-xl font-extrabold text-[#111827]">Values</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                100% white-hat integrity, measurable execution, radical accountability, and genuine client partnership over short-term vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GLIMPSE OF OUR HAPPY CLIENTS (Video Testimonial Cards with Play Buttons)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Glimpse of Our Happy Clients!
            </h2>
            <div className="h-1 w-14 bg-blue-600 rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {clientVideos.map((video, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F9FAFB] shadow-sm hover:shadow-md transition"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                  {/* Left: Video Play Preview with Green/Teal Play Button */}
                  <div className="sm:col-span-7 relative h-48 sm:h-52 overflow-hidden bg-slate-900 group">
                    <img
                      src={video.videoThumb}
                      alt={video.title}
                      className="h-full w-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideoModal(video.title)}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110"
                        aria-label="Play Client Video"
                      >
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </button>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase tracking-wider">
                      {video.title}
                    </div>
                  </div>

                  {/* Right: Client Headshot & Credential Info */}
                  <div className="sm:col-span-5 p-4 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <img
                      src={video.authorImage}
                      alt={video.title}
                      className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-sm mb-2"
                    />
                    <div className="font-extrabold text-slate-900 text-base leading-tight">
                      {video.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {video.company}
                    </div>
                    <div className="flex text-amber-400 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-white text-xs text-slate-600 italic">
                  &ldquo;{video.testimonial}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. THOUSANDS OF REVIEWS BUILD TRUST & CONFIDENCE (Review Badges)
          ========================================================================= */}
      <section className="py-12 bg-[#FAF9F6] border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-8">
            Thousands of Reviews Build Trust and Confidence
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Facebook */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                5.0
              </div>
              <div className="text-left">
                <div className="font-bold text-xs text-slate-900">Facebook</div>
                <div className="flex text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Google */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-rose-500 text-white flex items-center justify-center font-black text-sm">
                5.0
              </div>
              <div className="text-left">
                <div className="font-bold text-xs text-slate-900">Google</div>
                <div className="flex text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* GoodFirms */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-black text-sm">
                5.0
              </div>
              <div className="text-left">
                <div className="font-bold text-xs text-slate-900">GoodFirms</div>
                <div className="flex text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Clutch */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center gap-3 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm">
                5.0
              </div>
              <div className="text-left">
                <div className="font-bold text-xs text-slate-900">Clutch</div>
                <div className="flex text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WORKPLACE TOUR VIDEO SECTION (Large Screen Video Preview)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            IGR Digital Workplace Tour
          </h2>
          <div className="h-1 w-14 bg-blue-600 rounded-full mx-auto mt-2" />
          <p className="mt-4 text-sm text-slate-600">
            A glimpse into the energy, focus, and collaboration powering our client campaigns daily.
          </p>

          <div className="mt-8 relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl aspect-video bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85"
              alt="IGR Digital Workplace"
              className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setActiveVideoModal("Workplace Tour")}
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-2xl transition hover:scale-110 hover:bg-white"
                aria-label="Play Tour Video"
              >
                <Play className="h-8 w-8 fill-current ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EXECUTIVE LEADERSHIP (Founder & CEO Profile Card)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F6] border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Leader Photo */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85"
                    alt="Govind Swami - Founder & CEO"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Bio & Leadership Philosophy */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Executive Leadership
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1">
                    Govind Swami [ Founder & CEO ]
                  </h3>
                </div>

                <div className="text-sm sm:text-[14.5px] leading-relaxed text-slate-600 space-y-3">
                  <p>
                    Govind Swami has served as a pivotal force in search intelligence and digital business transformation for over a decade. His leadership has scaled IGR Digital from a specialized engineering team into an acclaimed global agency trusted by high-growth startups and established industry leaders.
                  </p>
                  <p>
                    Under his direction, IGR Digital maintains a strict zero-shortcuts standard, combining algorithmic search intelligence, software architecture, and commercial conversion focus to deliver undeniable market leadership for every partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. OUR TEAM (Circular Team Avatar Grid)
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Our Team
            </h2>
            <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-2" />
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              The search strategists, developers, and outreach directors driving client impact daily.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 sm:gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mt-4 text-base font-extrabold text-[#111827]">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-rose-600 mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. INDUSTRY RECOGNITION (Forbes, Awards & Media)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAF9F6] border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-12">
            Industry Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Recognition 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-900 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Vogue Awards"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-bold text-base text-[#111827]">Global Search Excellence Awards</h4>
              <p className="text-xs text-slate-500 mt-1">Recognized for top campaign performance and ROI</p>
            </div>

            {/* Recognition 2 (Forbes Feature) */}
            <div className="rounded-2xl border border-slate-200 bg-[#0B132B] p-6 text-white shadow-sm flex flex-col items-center">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center p-6 mb-4">
                <div className="text-center">
                  <div className="text-4xl font-serif font-black tracking-widest">Forbes</div>
                  <div className="text-xs tracking-wider text-slate-400 mt-1 uppercase">Agency Council Member</div>
                </div>
              </div>
              <h4 className="font-bold text-base text-white">Forbes Agency Council</h4>
              <p className="text-xs text-slate-400 mt-1">Executive industry authority & editorial contributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CLOSING STRIP (The Sun Never Sets on IGR Digital)
          ========================================================================= */}
      <section className="bg-[#04202C] text-white py-14 border-t border-cyan-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            The Sun Never Sets on IGR Digital
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-cyan-200 max-w-2xl mx-auto">
            Around the clock operations ensuring seamless campaign execution, rapid client support, and continuous rank monitoring.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Full-Service Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Over 18,500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Global 24x5 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Zero-PBN Guaranteed</span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-blue-500 transition"
            >
              <span>Get Started With IGR Digital</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Optional Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 text-white">
              <div className="font-bold text-sm">{activeVideoModal}</div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 text-sm">
              <div className="text-center p-6">
                <Play className="h-12 w-12 text-white/50 mx-auto mb-2" />
                <span>Video Player for: {activeVideoModal}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
