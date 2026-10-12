"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Star, MessageCircle } from "lucide-react";

export default function ContactDetailedFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#002228] text-slate-300 font-sans border-t border-[#003840]">
      {/* =========================================================
          TOP NEWSLETTER STRIP (Electric Cyan-Blue bar from screenshot)
          ========================================================= */}
      <div className="bg-[#0081C9] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Subscribe To Our Newsletter. Digest
              <br className="hidden sm:inline" />
              Excellence With These Marketing Chunks!
            </h3>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full rounded-md bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-[#E61F48] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#d0193e]"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* =========================================================
          MAIN FOOTER COLUMNS matching exact screenshot layout
          ========================================================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Col 1: About Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              About Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Case Study</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">Frequently Asked Questions</Link></li>
              <li><Link href="/life-at-agency" className="hover:text-white transition">Life at Agency</Link></li>
              <li><Link href="/write-for-us" className="hover:text-white transition">Write For Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition">Meet Our Team</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link></li>
            </ul>

            {/* Clutch & Trustpilot badges strip */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <div className="bg-white rounded p-1.5 shadow-xs">
                <Image
                  src="/awards/clutch.webp"
                  alt="Clutch Top Agency"
                  width={60}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded p-1.5 shadow-xs">
                <Image
                  src="/awards/google-partner.webp"
                  alt="Google Partner"
                  width={55}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/blog" className="hover:text-white transition">Blogs</Link></li>
              <li><Link href="/news" className="hover:text-white transition">News</Link></li>
              <li><Link href="/our-mentions" className="hover:text-white transition">Our Mentions</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog Feed</Link></li>
              <li><Link href="/news" className="hover:text-white transition">News Feed</Link></li>
              <li><Link href="/career" className="hover:text-white transition">Career</Link></li>
              <li><Link href="/seo-tools" className="hover:text-white transition">SEO Tools</Link></li>
              <li><Link href="/services/free-audit" className="hover:text-white transition">Website Audit Tool</Link></li>
              <li><Link href="/roi-calculator" className="hover:text-white transition">ROI Calculator</Link></li>
              <li><Link href="/our-clients" className="hover:text-white transition">Our Clients</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Services + Upwork badge */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/services/seo" className="hover:text-white transition">Search Engine Optimization Services</Link></li>
              <li><Link href="/services/packages" className="hover:text-white transition">Search Marketing Packages</Link></li>
              <li><Link href="/services/link-building" className="hover:text-white transition">Link Building Services</Link></li>
              <li><Link href="/services/reputation" className="hover:text-white transition">Reputation Management</Link></li>
              <li><Link href="/services/content-marketing" className="hover:text-white transition">Payment Gateways</Link></li>
              <li><Link href="/services/web-design" className="hover:text-white transition">Web Design Services</Link></li>
              <li><Link href="/services/content-writing" className="hover:text-white transition">Content Services</Link></li>
              <li><Link href="/services/sem" className="hover:text-white transition">SEM Services</Link></li>
              <li><Link href="/services/google-analytics" className="hover:text-white transition">Google Analytics Set Up</Link></li>
            </ul>

            {/* Upwork Top Rated box from screenshot */}
            <div className="mt-6 rounded-lg bg-white p-3 text-center inline-block">
              <span className="text-[11px] font-black tracking-wider text-emerald-600 block">
                upwork
              </span>
              <span className="text-[9px] font-semibold text-slate-600">
                Top Rated Company on Upwork
              </span>
            </div>
          </div>

          {/* Col 4: Head Office (Jaipur + US) matching screenshot */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Head Office
            </h4>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              IGR Web Technology Pvt. Ltd.<br />
              1st & 2nd Floor, Ramveer Nagar, Mahaveer Marg, Near Kisan Sewa Kendra, Patrakar Colony, Mansarovar, Jaipur, Rajasthan 302020
            </p>

            {/* Mini Map preview card */}
            <div className="mt-3 rounded-lg overflow-hidden border border-white/20 bg-slate-800 p-2 text-center">
              <div className="h-14 w-full bg-slate-700/60 rounded flex items-center justify-center text-[10px] text-slate-400">
                [Google Map: Jaipur HQ]
              </div>
              <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-amber-400">
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <Star className="h-3 w-3 fill-amber-400" />
                <span className="text-white ml-1 font-semibold">4.9/5 from 720+ reviews</span>
              </div>
            </div>

            {/* Contact Phone & Email */}
            <div className="mt-4 space-y-2 text-xs">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition">
                <Phone className="h-3.5 w-3.5 text-[#0081C9]" />
                <span>+91 98765 43210 (Advisory)</span>
              </a>
              <a href="tel:+919876543211" className="flex items-center gap-2 hover:text-white transition">
                <Phone className="h-3.5 w-3.5 text-[#0081C9]" />
                <span>+91 98765 43211 (Customer Care)</span>
              </a>
              <a href="mailto:info@igrdigital.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail className="h-3.5 w-3.5 text-[#0081C9]" />
                <span>info@igrdigital.com</span>
              </a>
            </div>

            {/* US Office */}
            <div className="mt-5 pt-4 border-t border-white/10 text-xs">
              <p className="font-semibold text-white">US Office</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Ste 500 W. Commerce St, #1202 Dallas, TX 75208, United States
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Warning ribbon at bottom matching screenshot */}
      <div className="bg-[#00191e] py-3 px-4 border-t border-white/10 text-center text-[10px] sm:text-[11px] text-slate-400">
        BEWARE OF SCAMS! WE ARE AWARE OF FAKE MESSAGES AND CALLS CLAIMING TO BE FROM IGR DIGITAL MARKETING AGENCY, OFFERING PAID WORK ON A COMMISSION BASIS. IF YOU RECEIVE SUCH CALLS, PLEASE REPORT IMMEDIATELY.
      </div>
      <div className="bg-[#001418] py-2 px-4 text-center text-[10px] text-slate-500">
        Copyright © 2006-2026 Powered by IGR Web Technology Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
