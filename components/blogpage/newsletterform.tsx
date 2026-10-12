// 'use client';

// import { useState, FormEvent } from 'react';

// export default function NewsletterForm() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     alert(`Subscribed with: ${email}`);
//     setEmail('');
//   };

//   return (
//     <form className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto" onSubmit={handleSubmit}>
//       <input
//         type="email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="you@company.com"
//         className="px-3.5 py-3 rounded-lg border border-[#2c3a5c] bg-[#1e2c4a] text-white text-[13.5px] min-w-[220px] focus:outline-none focus:border-[#0f7a5c]"
//       />
//       <button 
//         type="submit" 
//         className="px-5 py-3 rounded-lg bg-[#0f7a5c] text-white font-semibold text-[13.5px] hover:bg-[#0b5d45] transition cursor-pointer"
//       >
//         Subscribe
//       </button>
//     </form>
//   );
// }


"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    // Future:
    // POST /api/newsletter

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="border-t border-slate-200 bg-[#16213a] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#4285F4]">
          Stay Updated
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Get Digital Growth Insights
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
          Receive practical insights about SEO, PPC, AI SEO,
          AEO, content marketing and digital growth.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 border border-[#34A853]/40 bg-[#34A853]/10 px-5 py-4 text-sm font-medium text-white">
            <CheckCircle2 className="h-5 w-5 text-[#34A853]" />
            You're subscribed successfully.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-13 min-w-0 flex-1 border border-white/20 bg-white px-4 text-sm text-[#16213a] outline-none placeholder:text-slate-400 focus:border-[#4285F4]"
            />

            <button
              type="submit"
              className="inline-flex h-13 items-center justify-center gap-2 bg-[#4285F4] px-6 text-sm font-semibold text-white transition hover:bg-[#3367d6]"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}