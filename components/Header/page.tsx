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
          <div className="flex items-center gap-3 shrink-0">
            <Logo />
            <div className="hidden xl:block">
              <CertificationBadge />
            </div>
          </div>

          {/* Centered Navigation */}
          <ul className="hidden items-center gap-1 xl:gap-2 lg:flex shrink-0">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.megaMenu || item.dropdown);
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openWithDelay(item.label)}
                  onMouseLeave={() => hasDropdown && closeWithDelay()}
                >
                  {item.dropdown ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openMenu === item.label}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu(openMenu === item.label ? null : item.label);
                      }}
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13.5px] font-semibold transition-all cursor-pointer ${
                        openMenu === item.label
                          ? "bg-[#0B1120] text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-100/80 hover:text-[#0B1120]"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                          openMenu === item.label ? "rotate-180 text-white" : "text-slate-400"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      aria-haspopup={item.megaMenu ? "true" : undefined}
                      aria-expanded={openMenu === item.label}
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13.5px] font-semibold transition-all ${
                        openMenu === item.label
                          ? "bg-[#0B1120] text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-100/80 hover:text-[#0B1120]"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                            openMenu === item.label ? "rotate-180 text-white" : "text-slate-400"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  )}

                  {item.megaMenu && openMenu === item.label && (
                    <MegaMenu menu={item.megaMenu} />
                  )}

                  {item.dropdown && openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="w-56 rounded-2xl bg-white p-2 shadow-2xl border border-slate-200">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0041CD] transition"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Action CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex shrink-0">
            <Link
              href={siteConfig.ctas.secondary.href}
              className="whitespace-nowrap rounded-full bg-[#02926E] px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:-translate-y-0.5"
            >
              {siteConfig.ctas.secondary.label}
            </Link>
            <Link
              href={siteConfig.ctas.primary.href}
              className="whitespace-nowrap rounded-full bg-[#0041CD] px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold text-white shadow-sm transition hover:brightness-110 hover:-translate-y-0.5"
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
                {item.dropdown ? (
                  <div className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                )}
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
                {item.dropdown && (
                  <ul className="ml-3 space-y-1 border-l border-slate-100 pl-3">
                    {item.dropdown.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-50"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
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
