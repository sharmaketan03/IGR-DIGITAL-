"use client";

import React from "react";
import Image from "next/image";
import { Building, Phone, Mail } from "lucide-react";

export default function ContactOfficesBanner() {
  return (
    <section className="w-full bg-[#0B1120] text-white">
      {/* Title above ribbon matching screenshot */}
      <div className="py-10 text-center bg-white text-[#0B1120]">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="!text-[22px] sm:!text-[28px] md:!text-[32px] font-extrabold tracking-tight text-[#0B1120]">
            We Are There, Where The Technology Is!
          </h2>
        </div>
      </div>

      {/* Two Panes (India HQ and US Office) with landmark backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
        
        {/* =========================================================
            LEFT PANE: INDIA (HQ) - Jaipur Pink City Heritage Photo
            ========================================================= */}
        <div className="relative overflow-hidden p-8 sm:p-12 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero/jaipur-office.jpg')",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#09152b]/85" />

          {/* Content */}
          <div className="relative z-10 max-w-sm flex flex-col items-center">
            {/* White building icon badge */}
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#09152b]">
              <Building className="h-6 w-6 stroke-[2]" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white">
              INDIA (HQ)
            </h3>

            <p className="mt-2.5 text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal">
              IGR Web Technology Pvt. Ltd.<br />
              1st & 2nd Floor, Ramveer Nagar, Mahaveer Marg, Near Kisan Sewa Kendra, Patrakar Colony, Mansarovar, Jaipur, Rajasthan 302020
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-slate-200">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <Phone className="h-4 w-4 text-[#E61F48]" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:india@igrdigital.com"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <Mail className="h-4 w-4 text-[#E61F48]" />
                <span>india@igrdigital.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT PANE: US OFFICE - Statue of Liberty NYC Background
            ========================================================= */}
        <div className="relative overflow-hidden p-8 sm:p-12 flex flex-col justify-center items-center text-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero/us-office.jpg')",
            }}
          />
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-[#061833]/85" />

          {/* Content */}
          <div className="relative z-10 max-w-sm flex flex-col items-center">
            {/* White office handshake / flag badge */}
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#061833]">
              <Building className="h-6 w-6 stroke-[2]" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white">
              US OFFICE
            </h3>

            <p className="mt-2.5 text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal">
              IGR Web Technology LLC<br />
              Ste 500 W. Commerce St, #1202 Dallas, TX 75208, United States
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-slate-200">
              <a
                href="tel:+12145550199"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <Phone className="h-3.5 w-3.5 text-[#E61F48]" />
                <span>+1 (214) 555-0199</span>
              </a>
              <a
                href="mailto:usa@igrdigital.com"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
              >
                <Mail className="h-3.5 w-3.5 text-[#E61F48]" />
                <span>usa@igrdigital.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
