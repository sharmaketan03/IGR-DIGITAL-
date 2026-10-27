import React from "react";
import { Check, X } from "lucide-react";

type ComparisonValue = boolean | string;

type ComparisonRow = {
  feature: string;
  us: ComparisonValue;
  competitors: ComparisonValue;
  inHouse?: ComparisonValue;
};

export type TableTheme =
  | "navy"       // Deep navy #033B6C (Outreach / Link Building / Location pages)
  | "blue"       // Brand google-blue / platform SEO / E-commerce
  | "emerald"    // Dark emerald / Local SEO / PPC
  | "orange"     // Sunset orange / Paid ads / Backlinks
  | "purple"     // Royal purple / AI SEO / Industries
  | "cyan"       // Tech cyan / Diagnostics / Technical Audit
  | "dark";      // Dark slate / Enterprise

type ComparisonTableProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  usLabel?: string;
  competitorsLabel?: string;
  inHouseLabel?: string;
  rows: ComparisonRow[];
  theme?: TableTheme;
};

const THEME_STYLES: Record<
  TableTheme,
  {
    headerBg: string;
    headerBorder: string;
    winnerBg: string;
    winnerBorder: string;
    winnerHighlightRow: string;
    titleHighlight: string;
  }
> = {
  navy: {
    headerBg: "bg-[#033B6C]",
    headerBorder: "border-[#022a4e]",
    winnerBg: "bg-[#FFAE00] text-[#111827]",
    winnerBorder: "border-amber-500",
    winnerHighlightRow: "bg-amber-50/20",
    titleHighlight: "text-[#34A853]",
  },
  blue: {
    headerBg: "bg-[#1d4ed8]",
    headerBorder: "border-blue-800",
    winnerBg: "bg-[#4285F4] text-white",
    winnerBorder: "border-blue-600",
    winnerHighlightRow: "bg-blue-50/25",
    titleHighlight: "text-[#4285F4]",
  },
  emerald: {
    headerBg: "bg-[#064e3b]",
    headerBorder: "border-[#043d2f]",
    winnerBg: "bg-[#10b981] text-slate-950 font-black",
    winnerBorder: "border-emerald-600",
    winnerHighlightRow: "bg-emerald-50/20",
    titleHighlight: "text-[#10b981]",
  },
  orange: {
    headerBg: "bg-[#ea580c]",
    headerBorder: "border-[#c2410c]",
    winnerBg: "bg-[#f97316] text-white",
    winnerBorder: "border-orange-500",
    winnerHighlightRow: "bg-orange-50/20",
    titleHighlight: "text-[#ea580c]",
  },
  purple: {
    headerBg: "bg-[#581c87]",
    headerBorder: "border-[#491570]",
    winnerBg: "bg-[#8b5cf6] text-white",
    winnerBorder: "border-purple-500",
    winnerHighlightRow: "bg-purple-50/20",
    titleHighlight: "text-[#8b5cf6]",
  },
  cyan: {
    headerBg: "bg-[#0e7490]",
    headerBorder: "border-[#155e75]",
    winnerBg: "bg-[#06b6d4] text-slate-950 font-bold",
    winnerBorder: "border-cyan-500",
    winnerHighlightRow: "bg-cyan-50/20",
    titleHighlight: "text-[#06b6d4]",
  },
  dark: {
    headerBg: "bg-[#0B1120]",
    headerBorder: "border-slate-800",
    winnerBg: "bg-[#4285F4] text-white",
    winnerBorder: "border-blue-600",
    winnerHighlightRow: "bg-slate-50",
    titleHighlight: "text-[#4285F4]",
  },
};

function CellValue({ value, isUs }: { value?: ComparisonValue; isUs?: boolean }) {
  if (value === undefined || value === null) {
    return <span className="text-slate-400 font-normal">—</span>;
  }

  if (typeof value === "string") {
    return (
      <span className={`text-[13px] leading-relaxed font-normal ${isUs ? "text-[#0B1120] font-semibold" : "text-slate-600"}`}>
        {value}
      </span>
    );
  }

  return value ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-200/60">
      <Check className="h-4 w-4" strokeWidth={2.5} />
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400">
      <X className="h-4 w-4" strokeWidth={2} />
    </span>
  );
}

export default function ComparisonTable({
  eyebrow,
  title = "How Our Strategy Compares",
  highlightText,
  description = "A transparent, side-by-side comparison of our data-backed approach versus common alternatives.",
  usLabel = "IGR Digital",
  competitorsLabel = "Other Agencies",
  inHouseLabel = "In-House Team",
  rows,
  theme = "navy",
}: ComparisonTableProps) {
  // Title formatting helper: support highlight word
  let titleParts = { main: title, highlight: highlightText || "" };
  if (!highlightText && title.includes("vs")) {
    const parts = title.split("vs");
    titleParts = { main: parts[0] + "vs", highlight: parts.slice(1).join("vs") };
  }

  const currentTheme = THEME_STYLES[theme] || THEME_STYLES.navy;
  const hasInHouse = Boolean(inHouseLabel && rows.some((r) => r.inHouse !== undefined));

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header (Matching reference: Bold dark title with green/brand highlight) */}
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-slate-400">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1120] sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            {titleParts.main}{" "}
            {titleParts.highlight ? (
              <span>{titleParts.highlight}</span>
            ) : null}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Comparison Table Box (Matching reference screenshot layout) */}
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-slate-300/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">

              {/* Table Header: Solid Theme Bar with Divider Lines matching Page Banner */}
              <thead>
                <tr className={`border-b border-slate-300 ${currentTheme.headerBg} text-white`}>
                  <th className={`${hasInHouse ? "w-[30%]" : "w-[40%]"} px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/90 border-r ${currentTheme.headerBorder}`}>
                    What You Get
                  </th>

                  <th className={`${hasInHouse ? "w-[22%]" : "w-[30%]"} px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/90 border-r ${currentTheme.headerBorder}`}>
                    {competitorsLabel}
                  </th>

                  {/* Winner Column (Accentuated with Page Banner theme) */}
                  <th className={`${hasInHouse ? "w-[26%]" : "w-[30%]"} ${currentTheme.winnerBg} px-5 py-4 text-center text-xs font-bold uppercase tracking-wider ${hasInHouse ? `border-r ${currentTheme.winnerBorder}` : ""} shadow-inner`}>
                    {usLabel}
                  </th>

                  {hasInHouse && (
                    <th className="w-[22%] px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-white/90">
                      {inHouseLabel}
                    </th>
                  )}
                </tr>
              </thead>

              {/* Table Rows (Matching reference: clean borders, zebra rows, centered bold labels) */}
              <tbody className="divide-y divide-slate-200">
                {rows.map((row, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <tr
                      key={`${row.feature}-${index}`}
                      className={`transition-colors hover:bg-slate-50/60 ${isEven ? "bg-white" : "bg-[#fbfcfd]"}`}
                    >
                      {/* Aspect Name (Bold & Centered/Aligned like reference) */}
                      <td className="px-5 py-4 text-xs sm:text-sm font-bold text-[#0B1120] text-center border-r border-slate-200">
                        {row.feature}
                      </td>

                      {/* Competitor Column */}
                      <td className="px-5 py-4 text-center border-r border-slate-200">
                        <CellValue value={row.competitors} />
                      </td>

                      {/* Us Column (Highlighted with subtle theme tint & border) */}
                      <td className={`${currentTheme.winnerHighlightRow} px-5 py-4 text-center ${hasInHouse ? "border-r border-slate-200" : ""}`}>
                        <CellValue value={row.us} isUs />
                      </td>

                      {/* In-House Column */}
                      {hasInHouse && (
                        <td className="px-5 py-4 text-center">
                          <CellValue value={row.inHouse} />
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
