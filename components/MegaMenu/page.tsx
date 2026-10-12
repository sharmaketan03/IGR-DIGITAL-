import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { NavItem } from "@/components/Data/siteConfig";

export default function MegaMenu({ menu }: { menu: NonNullable<NavItem["megaMenu"]> }) {
  const { columns, featured, stats, viewAll } = menu;

  return (
    <div
      role="menu"
      className="absolute left-1/2 top-full z-40 mt-3 w-[min(92vw,1100px)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
    >
      <div
        className="grid gap-6 p-6"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(0,1fr))${
            featured ? " minmax(0,1.1fr)" : ""
          }`,
        }}
      >
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <col.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="font-semibold text-slate-900 text-sm">{col.title}</p>
            </div>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    role="menuitem"
                    className={
                      link.featured
                        ? "flex items-center justify-between rounded-lg bg-google-red px-3 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
                        : "block rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition"
                    }
                  >
                    {link.label}
                    {link.featured && <Star className="h-3.5 w-3.5" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {featured && (
          <Link
            href={featured.ctaHref}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[#171227] p-5 text-white transition hover:brightness-110"
          >
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-google-yellow">
              <Star className="h-3 w-3" aria-hidden="true" />
              {featured.eyebrow}
            </span>
            <div className="mt-4">
              <p className="text-lg font-semibold leading-snug">
                {featured.headline.split(featured.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-google-red italic">{featured.highlight}</span>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-2 text-xs text-white/60">{featured.meta}</p>
            </div>
            <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-google-red">
              {featured.ctaLabel}
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        )}
      </div>

      {(stats || viewAll) && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-6 py-3.5">
          <div className="flex flex-wrap items-center gap-6">
            {stats?.map((s) => (
              <p key={s.label} className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">{s.value}</span> {s.label}
              </p>
            ))}
          </div>
          {viewAll && (
            <Link
              href={viewAll.href}
              className="flex items-center gap-1 text-sm font-semibold text-google-blue hover:underline"
            >
              {viewAll.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
