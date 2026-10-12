"use client";

import React, { useState } from "react";

export default function ContactNewsletterStrip() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="w-full bg-[#033B6C] py-9 sm:py-11 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-sky-200">
            WEEKLY GROWTH DISPATCH
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
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
            placeholder="Enter Your Work Email"
            className="w-full rounded-sm bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none ring-1 ring-white/20"
          />
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-[#FFAE00] px-6 py-3 text-xs sm:text-sm font-bold text-[#111827] shadow-md transition hover:bg-[#ffbe2e] active:scale-95"
          >
            {subscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
