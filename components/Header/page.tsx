"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import TopBar from "@/components/Topbar/page";
import MegaMenu from "@/components/MegaMenu/page";
import Logo from "@/components/logo/page";

import { navItems, siteConfig } from "@/components/Data/siteConfig";
import CertificationBadge from "@/components/certification/page";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const closeWithDelay = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />

      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Brand & Accreditation Group */}
          <div className="flex items-center gap-4 shrink-0">
            <Logo />
            <div className="hidden sm:block">
              <CertificationBadge />
            </div>
          </div>

          {/* Centered Navigation */}
          <ul className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && openWithDelay(item.label)}
                onMouseLeave={() => item.megaMenu && closeWithDelay()}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.megaMenu ? "true" : undefined}
                  aria-expanded={openMenu === item.label}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-all ${
                    openMenu === item.label
                      ? "bg-[#0B1120] text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100/80 hover:text-[#0B1120]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.megaMenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180 text-white" : "text-slate-400"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {item.megaMenu && openMenu === item.label && (
                  <MegaMenu menu={item.megaMenu} />
                )}
              </li>
            ))}
          </ul>

          {/* Right Action CTAs */}
          <div className="hidden items-center gap-3 lg:flex shrink-0">
            <Link
              href={siteConfig.ctas.secondary.href}
              className="rounded-full bg-google-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:-translate-y-0.5"
            >
              {siteConfig.ctas.secondary.label}
            </Link>
            <Link
              href={siteConfig.ctas.primary.href}
              className="rounded-full bg-google-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:-translate-y-0.5"
            >
              {siteConfig.ctas.primary.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 shadow-lg">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
                {item.megaMenu && (
                  <ul className="ml-3 space-y-1 border-l border-slate-100 pl-3">
                    {item.megaMenu.columns.flatMap((col) =>
                      col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-50"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Link
              href={siteConfig.ctas.secondary.href}
              className="flex-1 rounded-full bg-google-green px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {siteConfig.ctas.secondary.label}
            </Link>
            <Link
              href={siteConfig.ctas.primary.href}
              className="flex-1 rounded-full bg-google-red px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {siteConfig.ctas.primary.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
