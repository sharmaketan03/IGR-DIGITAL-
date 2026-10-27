'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import WorldMap from 'react-svg-worldmap';
import { Globe2, Briefcase, Users2, Star, MapPin, Quote } from 'lucide-react';

/**
 * IGR Digital — "Global Reach" section
 * Drop this file into: app/components/GlobalReachSection.jsx
 * Then use it in any page: import GlobalReachSection from '@/components/GlobalReachSection';
 *
 * Requires Tailwind CSS (already standard in most Next.js apps) plus:
 *   npm install lucide-react react-svg-worldmap
 *
 * react-svg-worldmap ships a real, bundled world map (ISO country shapes) —
 * no external tiles, no API key, works offline.
 */

// ISO-3166-1 alpha-2 codes for every country IGR Digital serves.
// `value: 1` just marks the country as "served" — styleFunction below
// decides the actual color, so the number itself is never shown.
const SERVED = [
  'in', 'us', 'gb', 'ca', 'ae', 'de', 'fr', 'sg', 'au', 'nz',
  'es', 'it', 'nl', 'se', 'ch', 'ie', 'za', 'br', 'mx', 'sa',
  'qa', 'my', 'ph', 'ke',
];
const MAP_DATA = SERVED.map((code) => ({ country: code, value: 1 }));

const COUNTRY_PILLS = [
  { name: 'USA', href: '/digital-marketing-agency-usa' },
  { name: 'UK', href: '/digital-marketing-agency-uk' },
  { name: 'Australia', href: '/digital-marketing-agency-australia' },
  { name: 'Canada', href: '/digital-marketing-agency-canada' },
  { name: 'UAE', href: '/digital-marketing-agency-uae' },
  { name: 'Germany', href: '/digital-marketing-agency-germany' },
  { name: 'Singapore', href: '/digital-marketing-agency-singapore' },
  { name: 'Netherlands', href: '/digital-marketing-agency-netherlands' },
  { name: 'Ireland', href: '/digital-marketing-agency-ireland' },
  { name: 'New Zealand', href: '/digital-marketing-agency-new-zealand' },
];

const STATS = [
  { icon: Globe2, value: 20, suffix: '+', label: 'Countries Served' },
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projects Delivered' },
  { icon: Users2, value: 350, suffix: '+', label: 'Happy Clients' },
  { icon: Star, value: 4.9, suffix: '/5', label: 'Avg. Client Rating', decimals: 1 },
];

const TESTIMONIALS = [
  {
    quote:
      "IGR Digital took our organic traffic from flat to 3x in two quarters. Their strategy, communication and execution have been outstanding.",
    name: "D. Patel",
    location: "Austin, US",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "They actually understand our market — not a copy-paste playbook. Working with IGR Digital has been a game changer for our brand.",
    name: "S. Khan",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "They helped us grow organically, improve our rankings and bring in quality leads. The team is professional, responsive and results-driven.",
    name: "L. Meyer",
    location: "Berlin, DE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Best SEO partner we’ve worked with across four countries. Their expertise, transparency and support are unmatched.",
    name: "M. Chen",
    location: "Toronto, CA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Transparent reporting, real results, zero fluff. They took our search footprint from flat to consistent page-1 rankings.",
    name: "R. Tan",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

function useCountUp(target: number, decimals: number = 0, active?: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }
    let start: number | null = null;
    const duration = 1400;
    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    }
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, decimals]);
  return value;
}

function StatCard({ stat, active }: { stat: any; active?: boolean }) {
  const val = useCountUp(stat.value, stat.decimals || 0, active);
  const Icon = stat.icon;
  return (
    <div className="igrd-stat">
      <Icon className="igrd-stat-icon" strokeWidth={1.75} size={20} />
      <div className="igrd-stat-value">
        {stat.decimals ? val.toFixed(stat.decimals) : Math.round(val)}
        <span className="igrd-stat-suffix">{stat.suffix}</span>
      </div>
      <div className="igrd-stat-label">{stat.label}</div>
    </div>
  );
}

export default function GlobalReachSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="igrd-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        .igrd-section {
          --ink: #10131C;
          --muted: #5B6472;
          --bg: #F1F4F8;
          --panel: #FFFFFF;
          --indigo: #4338CA;
          --indigo-soft: #EEF0FE;
          --teal: #0EA5A4;
          --amber: #F59E0B;
          --line: #E1E6EE;
          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', system-ui, sans-serif;
          padding: 48px 24px;
          position: relative;
          overflow: hidden;
        }
        .igrd-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #D6DCE6 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.5;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }
        .igrd-wrap {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .igrd-wrap { grid-template-columns: 1fr; }
        }

        .igrd-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--indigo);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .igrd-eyebrow::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 0 4px rgba(14,165,164,0.15);
        }
        .igrd-h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(34px, 4.2vw, 52px);
          line-height: 1.06;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
        }
        .igrd-h1 em {
          font-style: normal;
          background: linear-gradient(90deg, var(--indigo), var(--teal));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .igrd-sub {
          font-size: 16.5px;
          line-height: 1.65;
          color: var(--muted);
          max-width: 480px;
          margin: 0 0 32px;
        }

        .igrd-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }
        .igrd-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12.5px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 999px;
          background: var(--panel);
          border: 1px solid var(--line);
          color: var(--ink);
        }
        .igrd-pill svg { color: var(--teal); }

        .igrd-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid var(--line);
          padding-top: 24px;
        }
        @media (max-width: 560px) {
          .igrd-stats { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
        }
        .igrd-stat {
          border-left: 1px solid var(--line);
          padding: 0 16px;
        }
        .igrd-stat:first-child { border-left: none; padding-left: 0; }
        .igrd-stat-icon { color: var(--indigo); margin-bottom: 10px; }
        .igrd-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: var(--ink);
          line-height: 1;
        }
        .igrd-stat-suffix { color: var(--teal); font-size: 18px; }
        .igrd-stat-label {
          font-size: 12.5px;
          color: var(--muted);
          margin-top: 6px;
        }

        /* World map */
        .igrd-map-wrap {
          position: relative;
          max-width: 560px;
          margin: 0 auto;
        }
        .igrd-map-wrap svg {
          width: 100% !important;
          height: auto !important;
          display: block;
        }
        .igrd-map-wrap [role="img"] title {
          pointer-events: none;
        }

        .igrd-badge {
          position: absolute;
          bottom: -8px;
          left: -8px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 20px 40px -18px rgba(16,19,28,0.3);
        }
        .igrd-badge-stars { display: flex; gap: 2px; color: var(--amber); }
        .igrd-badge-text { font-size: 12px; color: var(--muted); line-height: 1.3; }
        .igrd-badge-text strong { color: var(--ink); font-family: 'Space Grotesk', sans-serif; font-size: 14px; }

        /* Marquee */
        .igrd-marquee-outer {
          max-width: 1180px;
          margin: 72px auto 0;
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .igrd-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: igrd-scroll 32s linear infinite;
        }
        .igrd-section:hover .igrd-marquee-track { animation-play-state: paused; }
        @keyframes igrd-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .igrd-quote-card {
          flex: 0 0 auto;
          width: 320px;
          background: #ffffff;
          border: 1px solid #eef2f6;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .igrd-quote-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -4px rgba(15, 23, 42, 0.09);
        }
        .igrd-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .igrd-card-stars {
          display: flex;
          gap: 3px;
          color: #fbbf24;
        }
        .igrd-card-quote-icon {
          color: #a5b4fc;
          opacity: 0.85;
        }
        .igrd-quote-text {
          font-size: 13.5px;
          line-height: 1.6;
          color: #334155;
          margin-bottom: 20px;
          font-weight: 450;
        }
        .igrd-card-divider {
          height: 1px;
          background: #f1f5f9;
          width: 100%;
          margin-bottom: 16px;
        }
        .igrd-card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .igrd-card-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        .igrd-card-author-name {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }
        .igrd-card-author-loc {
          font-size: 11.5px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .igrd-pin-dot { animation: none; }
          .igrd-marquee-track { animation: none; }
        }
      `}</style>

      <div className="igrd-wrap">
        {/* Left: content */}
        <div>
          <div className="igrd-eyebrow">Global Footprint</div>
          <h2 className="igrd-h1">
            Satisfied clients,<br /><em>everywhere</em> we work.
          </h2>
          <p className="igrd-sub">
            From Jaipur to New York, IGR Digital drives measurable growth for
            brands in 20+ countries — SEO, performance marketing and web
            experiences built to convert, wherever your customers are.
          </p>

          <div className="igrd-pills">
            {COUNTRY_PILLS.map((item) => (
              <Link
                href={item.href}
                className="igrd-pill hover:border-[#4285F4] hover:text-[#4285F4] transition"
                key={item.name}
              >
                <MapPin size={12} /> {item.name}
              </Link>
            ))}
            <Link href="/locations" className="igrd-pill font-bold hover:bg-[#4285F4] hover:text-white transition">
              View All Locations →
            </Link>
          </div>

          <div className="igrd-stats">
            {STATS.map((s) => (
              <StatCard stat={s} active={active} key={s.label} />
            ))}
          </div>
        </div>

        {/* Right: real world map, served countries highlighted */}
        <div className="igrd-map-wrap">
          <WorldMap
            size="responsive"
            data={MAP_DATA as any}
            backgroundColor="transparent"
            borderColor="#F1F4F8"
            strokeOpacity={1}
            frame={false}
            richInteraction
            tooltipBgColor="#10131C"
            tooltipTextColor="#FFFFFF"
            tooltipTextFunction={(ctx) =>
              ctx.countryValue !== undefined
                ? `${ctx.countryName} — active market`
                : ctx.countryName
            }
            styleFunction={(ctx) => {
              const served = ctx.countryValue !== undefined;
              return {
                fill: served ? '#34a853' : '#E1E6EE',
                fillOpacity: served ? 0.9 : 0.7,
                stroke: '#F1F4F8',
                strokeWidth: 0.6,
                cursor: served ? 'pointer' : 'default',
                transition: 'fill 0.2s ease, fill-opacity 0.2s ease',
              };
            }}
          />

          <div className="igrd-badge">
            <div className="igrd-badge-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="igrd-badge-text">
              <strong>4.9/5</strong><br />client satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}