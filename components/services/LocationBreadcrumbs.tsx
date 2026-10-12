import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LocationBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function LocationBreadcrumbs({ items }: LocationBreadcrumbsProps) {
  // Generate schema.org BreadcrumbList JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://igrdigital.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://igrdigital.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="w-full border-b border-slate-200/80 bg-[#fbfbfa] py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500"
      >
        <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-600 transition hover:text-[#4285F4]"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="h-3 w-3 text-slate-400" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="font-medium text-slate-600 transition hover:text-[#4285F4]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-slate-900 truncate max-w-[240px]">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
