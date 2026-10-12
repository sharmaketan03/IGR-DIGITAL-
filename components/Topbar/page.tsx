"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ChevronDown,
  Search,
  PhoneCall,
} from "lucide-react";

export default function TopBar() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  return (
    <div className="w-full bg-[#151337] text-white border-b border-white/10 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
        
        {/* =========================================================
            LEFT GROUP: SOCIAL MEDIA & COMMUNICATION ICONS
            (Enlarged icons with good tap padding)
            ========================================================= */}
        <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X"
            className="hover:text-white transition p-1 hover:scale-110 font-bold"
          >
            <span className="text-[14px] leading-none font-sans">𝕏</span>
          </a>

          {/* Mail */}
          <a
            href="mailto:info@igrdigital.com"
            aria-label="Mail"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <Mail className="h-4 w-4" />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Pinterest */}
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[10px] font-bold">
              P
            </span>
          </a>

          {/* MapPin (Temporarily disabled) */}
          {/* <Link
            href="/locations"
            aria-label="Our Locations"
            className="hover:text-white transition p-1 hover:scale-110"
          >
            <MapPin className="h-4 w-4" />
          </Link> */}
        </div>

        {/* =========================================================
            RIGHT GROUP:
            About Us (White dropdown bg), Resources (White dropdown bg), Contact Us,
            Search, Red Phone button, Careers button, New SEO Tools button
            ========================================================= */}
        <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 text-sm font-medium text-slate-200">
          
          {/* About Us with WHITE DROPDOWN */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setOpenAbout(true)}
            onMouseLeave={() => setOpenAbout(false)}
          >
            <button className="flex items-center gap-1.5 py-2 px-1 hover:text-white transition font-semibold text-[13.5px]">
              <span>About Us</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-80" />
            </button>
            {openAbout && (
              <div className="absolute right-0 top-full pt-1.5 z-50">
                <div className="w-52 rounded-xl bg-white p-2 shadow-2xl border border-slate-200 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/about"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    About Agency
                  </Link>
                  <Link
                    href="/team"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Our Core Team
                  </Link>
                  <Link
                    href="/awards"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Awards & Honors
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Client Testimonials
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resources with WHITE DROPDOWN */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setOpenResources(true)}
            onMouseLeave={() => setOpenResources(false)}
          >
            <button className="flex items-center gap-1.5 py-2 px-1 hover:text-white transition font-semibold text-[13.5px]">
              <span>Resources</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-80" />
            </button>
            {openResources && (
              <div className="absolute right-0 top-full pt-1.5 z-50">
                <div className="w-52 rounded-xl bg-white p-2 shadow-2xl border border-slate-200 text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/blog"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Knowledge Hub & Blog
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Case Studies & Results
                  </Link>
                  <Link
                    href="/services/free-audit"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Free Website Audit
                  </Link>
                  {/* <Link
                    href="/locations"
                    className="block px-3.5 py-2 rounded-lg hover:bg-slate-100 font-medium text-xs text-slate-800 hover:text-black transition"
                  >
                    Locations Directory
                  </Link> */}
                </div>
              </div>
            )}
          </div>

          {/* Contact Us direct link */}
          <Link
            href="/contact"
            className="hover:text-white transition font-bold text-[13.5px] text-white py-1.5 px-2 rounded-md hover:bg-white/10"
          >
            Contact Us
          </Link>

          {/* Search icon button */}
          <button
            aria-label="Search"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition py-1.5 px-2 hover:bg-white/10 rounded-md"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline text-xs font-semibold">Search</span>
          </button>

          {/* Red circular phone icon button */}
          <a
            href="tel:+919876543210"
            aria-label="Call Us"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E61F48] text-white shadow-md hover:bg-[#d0193e] transition hover:scale-105 shrink-0"
          >
            <PhoneCall className="h-4 w-4" />
          </a>

          {/* Careers button: White pill button with pink/red text */}
          <Link
            href="/career"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-white px-4 py-1.5 text-xs font-bold text-[#E61F48] hover:bg-slate-100 transition shrink-0 shadow-sm"
          >
            Careers
          </Link>

          {/* New SEO Tools button: Vivid Pink/Red button */}
          <Link
            href="/services/free-audit"
            className="inline-flex items-center justify-center rounded-lg bg-[#E61F48] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#d0193e] transition shrink-0 shadow-sm"
          >
            New SEO Tools
          </Link>

        </div>
      </div>
    </div>
  );
}
