"use client";

import { useEffect, useState, useId } from "react";
import {
  Compass,
  Route,
  FileText,
  Layers,
  Target,
  Settings2,
  Search,
  BarChart3,
  MessageCircle,
  ClipboardCheck,
  Repeat,
  GitBranch,
  Activity,
  TrendingUp,
  Network,
  MousePointerClick,
  Check,
  Minus,
  Plus,
  ArrowUpRight,
  CircleDot,
  ShieldCheck,
  Gauge,
  AlertCircle,
  Clock,
  ListChecks,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type IconType = React.ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

type TrustPoint = {
  icon: IconType;
  title: string;
  body: string;
};

type ComparisonTab = {
  id: string;
  number: string;
  label: string;
  heading: string;
  intro: string;
  checklist: string[];
  ours: string;
  typical: string;
  dashboard:
    | "strategy"
    | "visibility"
    | "performance"
    | "transparency";
};

type ProofItem = {
  icon: IconType;
  title: string;
  body: string;
};

/* =========================================================
   DATA
========================================================= */

const trustPoints: TrustPoint[] = [
  {
    icon: Compass,
    title: "Strategy Before Execution",
    body: "Before recommending tactics, we study your business model, audience, competitors and acquisition goals. Every campaign starts with a strategy built around those inputs.",
  },
  {
    icon: Route,
    title: "Custom Growth Plans",
    body: "There is no shared template. Your channel mix, priorities and timeline are built around your market position and growth stage.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    body: "You get clear reporting on the metrics that matter — rankings, traffic, leads, conversions and acquisition costs — without vanity metrics.",
  },
  {
    icon: Layers,
    title: "No Cookie-Cutter Campaigns",
    body: "Your competitors, market, search landscape and growth stage are different. Your strategy should be too.",
  },
  {
    icon: Target,
    title: "Business-Focused SEO",
    body: "Rankings are a means, not the goal. We optimize for the searches that connect to pipeline and revenue.",
  },
  {
    icon: Settings2,
    title: "Technical SEO Expertise",
    body: "Crawl efficiency, site architecture, Core Web Vitals and indexation are treated as growth levers, not a checklist.",
  },
  {
    icon: Search,
    title: "Search Intent Over Vanity Metrics",
    body: "We prioritize keywords by commercial intent and buying stage, not raw search volume.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    body: "Every recommendation is traceable to a data source — analytics, search console, CRM or campaign data.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Communication",
    body: "A named point of contact who understands your account, not a rotating support queue.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Deliverables",
    body: "You always know what is being worked on, what was completed, and what comes next.",
  },
  {
    icon: Repeat,
    title: "Continuous Optimization",
    body: "Strategy is reviewed against real performance data on a fixed cadence, not left to run unattended.",
  },
  {
    icon: GitBranch,
    title: "Full-Funnel Thinking",
    body: "We connect awareness, acquisition and conversion instead of optimizing channels in isolation.",
  },
  {
    icon: Activity,
    title: "Real Analytics & Tracking",
    body: "GA4, Search Console and conversion tracking are configured correctly from day one — the foundation most audits find broken.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Focus",
    body: "We build compounding search equity and demand systems, not short-lived spikes.",
  },
  {
    icon: Network,
    title: "Cross-Channel Strategy",
    body: "Organic, paid and content are planned together so channels reinforce each other instead of competing for budget.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Marketing",
    body: "Traffic without conversion is a vanity metric. Every campaign is built back from the action you want visitors to take.",
  },
];

const comparisonTabs: ComparisonTab[] = [
  {
    id: "strategy",
    number: "01",
    label: "Strategy First",
    heading: "Growth Starts With the Right Strategy",
    intro:
      "We start with business goals, customer intent, competitive landscape and current performance before recommending channels or tactics.",
    checklist: [
      "Business goals",
      "Customer intent",
      "Competitor analysis",
      "Channel opportunity",
      "Measurement plan",
    ],
    ours: "Strategy built around your business goals and market position.",
    typical: "A standard package sold the same way to every client.",
    dashboard: "strategy",
  },
  {
    id: "visibility",
    number: "02",
    label: "Visibility & Demand",
    heading:
      "We Don't Chase Rankings. We Build Search Visibility That Matters.",
    intro:
      "We prioritize the searches that can become customers — not the ones that simply look good in a rankings report.",
    checklist: [
      "Search intent",
      "Commercial keywords",
      "Topic authority",
      "Technical health",
      "Local / organic visibility",
    ],
    ours: "Target the searches that can become customers.",
    typical:
      "Report rankings without connecting them to business outcomes.",
    dashboard: "visibility",
  },
  {
    id: "performance",
    number: "03",
    label: "Performance & Measurement",
    heading: "Every Channel Should Be Measurable",
    intro:
      "Marketing activity is only useful if it can be connected to a measurable business outcome.",
    checklist: [
      "Conversion tracking",
      "GA4",
      "Search Console",
      "Campaign attribution",
      "Lead tracking",
    ],
    ours: "Connect marketing activity to measurable outcomes.",
    typical:
      "Show impressions, clicks and traffic without explaining business impact.",
    dashboard: "performance",
  },
  {
    id: "transparency",
    number: "04",
    label: "Transparency",
    heading: "You Should Always Know What Your Agency Is Doing",
    intro:
      "Clear visibility into priorities, progress and decisions — available whenever you want it, not only at the monthly call.",
    checklist: [
      "Clear deliverables",
      "Regular reporting",
      "Accessible data",
      "Defined priorities",
      "Honest recommendations",
    ],
    ours: "Open access to priorities, progress and reasoning.",
    typical: "Updates limited to a scheduled monthly call.",
    dashboard: "transparency",
  },
];

const proofStrip: ProofItem[] = [
  {
    icon: Compass,
    title: "Strategy",
    body: "Every engagement starts with research, not a template.",
  },
  {
    icon: Settings2,
    title: "Technical Expertise",
    body: "Sites built to be found, crawled and understood correctly.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    body: "Reporting on outcomes, not activity for its own sake.",
  },
  {
    icon: Gauge,
    title: "Measurable Outcomes",
    body: "Every channel tied back to a number you actually track.",
  },
];

/* =========================================================
   SPARKLINE
========================================================= */

function Sparkline({
  points,
  color,
}: {
  points: number[];
  color: string;
}) {
  const id = useId();

  const gradientId = `igr-gradient-${id.replace(/:/g, "")}`;

  const width = 240;
  const height = 64;

  const max = Math.max(...points);
  const min = Math.min(...points);

  const normalize = (value: number) => {
    return (
      height -
      6 -
      ((value - min) / (max - min || 1)) * (height - 12)
    );
  };

  const step =
    points.length > 1 ? width / (points.length - 1) : width;

  const path = points
    .map((point, index) => {
      const x = index * step;
      const y = normalize(point);

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="igr-spark"
      preserveAspectRatio="none"
      role="img"
      aria-label="Performance trend"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.28"
          />

          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      <path
        d={areaPath}
        fill={`url(#${gradientId})`}
      />

      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   TRUST SECTION
========================================================= */

function TrustPointItem({
  point,
  index,
  isOpen,
  onToggle,
}: {
  point: TrustPoint;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = point.icon;

  const panelId = `trust-panel-${index}`;

  return (
    <div
      className={`igr-trust-item ${
        isOpen ? "is-open" : ""
      }`}
    >
      <button
        type="button"
        className="igr-trust-head"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="igr-trust-num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="igr-trust-icon"
          aria-hidden="true"
        >
          <Icon size={16} strokeWidth={2} />
        </span>

        <span className="igr-trust-title">
          {point.title}
        </span>

        <span
          className="igr-trust-toggle"
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus size={15} strokeWidth={2.25} />
          ) : (
            <Plus size={15} strokeWidth={2.25} />
          )}
        </span>
      </button>

      <div
        id={panelId}
        className="igr-trust-body-wrap"
        hidden={!isOpen}
      >
        <div className="igr-trust-body-inner">
          <p className="igr-trust-body">
            {point.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function TrustPointGrid({
  points,
}: {
  points: TrustPoint[];
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="igr-trust-grid">
      {points.map((point, index) => (
        <TrustPointItem
          key={point.title}
          point={point}
          index={index}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(
              openIndex === index ? -1 : index
            )
          }
        />
      ))}
    </div>
  );
}

function WhyChooseIGRSection() {
  return (
    <div className="igr-block">
      <div className="igr-eyebrow-row">
        <span className="igr-eyebrow">
          Why IGR Digital
        </span>
      </div>

      <h2 className="igr-h2">
        Why Growing Businesses
        <br className="igr-br-desktop" />
        Choose IGR Digital
      </h2>

      <p className="igr-lead">
        We combine technical expertise, strategic thinking,
        transparent reporting and measurable execution to
        build marketing systems around real business goals
        — not vanity metrics.
      </p>

      <TrustPointGrid points={trustPoints} />
    </div>
  );
}

/* =========================================================
   COMPARISON TABS
========================================================= */

function ComparisonTabs({
  active,
  onChange,
}: {
  active: number;
  onChange: (index: number) => void;
}) {
  return (
    <div
      className="igr-tabs"
      role="tablist"
      aria-label="IGR Digital difference"
    >
      {comparisonTabs.map((tab, index) => {
        const selected = active === index;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`igr-tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`igr-panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            className={`igr-tab ${
              selected ? "is-active" : ""
            }`}
            onClick={() => onChange(index)}
          >
            <span className="igr-tab-num">
              {tab.number}
            </span>

            <span className="igr-tab-label">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ComparisonChecklist({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="igr-checklist">
      {items.map((item) => (
        <li key={item}>
          <span
            className="igr-check-dot"
            aria-hidden="true"
          >
            <Check size={12} strokeWidth={3} />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComparisonVs({
  ours,
  typical,
}: {
  ours: string;
  typical: string;
}) {
  return (
    <div className="igr-vs">
      <div className="igr-vs-block igr-vs-ours">
        <span className="igr-vs-label">
          <ShieldCheck
            size={14}
            strokeWidth={2.25}
          />
          IGR Digital
        </span>

        <p>{ours}</p>
      </div>

      <div className="igr-vs-block igr-vs-typical">
        <span className="igr-vs-label">
          <AlertCircle
            size={14}
            strokeWidth={2.25}
          />
          Typical Agency
        </span>

        <p>{typical}</p>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function StrategyDashboard() {
  const steps = [
    "Business Goal",
    "Audience",
    "Search & Demand",
    "Channel Strategy",
    "Execution",
    "Measurement",
  ];

  return (
    <div className="igr-dash">
      <div className="igr-dash-header">
        <span className="igr-dash-title">
          Strategy Path
        </span>

        <span className="igr-dash-badge">
          Live plan
        </span>
      </div>

      <div className="igr-flow">
        {steps.map((step, index) => (
          <div
            className="igr-flow-row"
            key={step}
          >
            <div className="igr-flow-node">
              <span
                className="igr-flow-dot"
                aria-hidden="true"
              >
                <CircleDot
                  size={12}
                  strokeWidth={2.5}
                />
              </span>

              <span className="igr-flow-text">
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <span
                className="igr-flow-line"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisibilityDashboard() {
  return (
    <div className="igr-dash">
      <div className="igr-dash-header">
        <span className="igr-dash-title">
          Search Visibility
        </span>

        <span className="igr-dash-badge">
          Search Console
        </span>
      </div>

      <div className="igr-metric-card igr-metric-wide">
        <div className="igr-metric-top">
          <span className="igr-metric-label">
            Organic Traffic
          </span>

          <span className="igr-metric-trend">
            <TrendingUp
              size={13}
              strokeWidth={2.5}
            />
            XX%
          </span>
        </div>

        <Sparkline
          points={[
            12, 18, 15, 24, 22,
            30, 27, 36, 33, 41,
          ]}
          color="#17A76B"
        />
      </div>

      <div className="igr-metric-grid">
        <div className="igr-metric-card">
          <span className="igr-metric-label">
            Keyword Visibility
          </span>

          <span className="igr-metric-value">
            XX%
          </span>

          <div className="igr-bar-track">
            <div
              className="igr-bar-fill"
              style={{ width: "68%" }}
            />
          </div>
        </div>

        <div className="igr-metric-card">
          <span className="igr-metric-label">
            Top 3 Keywords
          </span>

          <span className="igr-metric-value">
            XXX
          </span>

          <span className="igr-metric-trend small">
            <ArrowUpRight size={12} />
            XX vs last qtr
          </span>
        </div>

        <div className="igr-metric-card">
          <span className="igr-metric-label">
            Qualified Leads
          </span>

          <span className="igr-metric-value">
            X,XXX
          </span>

          <span className="igr-metric-trend small">
            <ArrowUpRight size={12} />
            XX%
          </span>
        </div>

        <div className="igr-metric-card">
          <span className="igr-metric-label">
            Topic Authority
          </span>

          <span className="igr-metric-value">
            XX%
          </span>

          <div className="igr-bar-track">
            <div
              className="igr-bar-fill"
              style={{ width: "54%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceDashboard() {
  const metrics = [
    ["Traffic", "XX,XXX"],
    ["Leads", "X,XXX"],
    ["Conversion Rate", "X.X%"],
    ["CPL", "$XX"],
    ["ROAS", "X.Xx"],
    ["Organic Revenue", "$XX,XXX"],
  ];

  return (
    <div className="igr-dash">
      <div className="igr-dash-header">
        <span className="igr-dash-title">
          Performance Overview
        </span>

        <span className="igr-dash-badge">
          GA4 · Attribution
        </span>
      </div>

      <div className="igr-metric-card igr-metric-wide">
        <div className="igr-metric-top">
          <span className="igr-metric-label">
            Organic Revenue Trend
          </span>

          <span className="igr-metric-trend">
            <TrendingUp
              size={13}
              strokeWidth={2.5}
            />
            XX%
          </span>
        </div>

        <Sparkline
          points={[
            8, 14, 11, 19, 17,
            23, 20, 28, 31, 29, 38,
          ]}
          color="#17A76B"
        />
      </div>

      <div className="igr-kpi-grid">
        {metrics.map(([label, value]) => (
          <div
            className="igr-kpi"
            key={label}
          >
            <span className="igr-kpi-value">
              {value}
            </span>

            <span className="igr-kpi-label">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransparencyDashboard() {
  const rows = [
    ["Completed", "XX tasks", "done"],
    ["In Progress", "X active", "progress"],
    ["Next", "X scheduled", "next"],
    ["Issues Found", "X flagged", "issue"],
    ["Recommendations", "X open", "reco"],
  ];

  return (
    <div className="igr-dash">
      <div className="igr-dash-header">
        <span className="igr-dash-title">
          Project Status
        </span>

        <span className="igr-dash-badge">
          <Clock
            size={12}
            strokeWidth={2.5}
          />
          Updated weekly
        </span>
      </div>

      <div className="igr-status-list">
        {rows.map(([label, value, tone]) => (
          <div
            className="igr-status-row"
            key={label}
          >
            <span
              className={`igr-status-dot tone-${tone}`}
            />

            <span className="igr-status-label">
              {label}
            </span>

            <span className="igr-status-value">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="igr-status-foot">
        <ListChecks
          size={14}
          strokeWidth={2.25}
        />

        <span>
          Full activity log accessible anytime — not only
          on the monthly call.
        </span>
      </div>
    </div>
  );
}

function AnalyticsPreview({
  type,
}: {
  type: ComparisonTab["dashboard"];
}) {
  if (type === "strategy") {
    return <StrategyDashboard />;
  }

  if (type === "visibility") {
    return <VisibilityDashboard />;
  }

  if (type === "performance") {
    return <PerformanceDashboard />;
  }

  return <TransparencyDashboard />;
}

/* =========================================================
   DIFFERENCE SECTION
========================================================= */

function IGRDifferenceSection() {
  const [active, setActive] = useState(0);

  const activeTab = comparisonTabs[active];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft"
    ) {
      return;
    }

    event.preventDefault();

    const direction =
      event.key === "ArrowRight" ? 1 : -1;

    const nextIndex =
      (active +
        direction +
        comparisonTabs.length) %
      comparisonTabs.length;

    setActive(nextIndex);

    requestAnimationFrame(() => {
      document
        .getElementById(
          `igr-tab-${comparisonTabs[nextIndex].id}`
        )
        ?.focus();
    });
  };

  return (
    <div className="igr-block igr-difference ">
      <div className="igr-eyebrow-row">
        <span className="igr-eyebrow igr-eyebrow-alt">
          The IGR Difference
        </span>
      </div>

      <h2 className="igr-h2">
        What Makes IGR Different From a
        <br className="igr-br-desktop" />
        Typical Digital Marketing Agency?
      </h2>

      <p className="igr-lead">
        Most agencies sell activities. We focus on the{" "}
        <span className="igr-highlight">
          system behind the growth
        </span>{" "}
        — strategy, search visibility, acquisition,
        conversion and measurable outcomes.
      </p>

      <div onKeyDown={handleKeyDown}>
        <ComparisonTabs
          active={active}
          onChange={setActive}
        />
      </div>

      <div
        className="igr-panel"
        role="tabpanel"
        id={`igr-panel-${activeTab.id}`}
        aria-labelledby={`igr-tab-${activeTab.id}`}
      >
        <div className="igr-panel-left">
          <span className="igr-panel-kicker">
            Our Approach
          </span>

          <h3 className="igr-panel-heading">
            {activeTab.heading}
          </h3>

          <p className="igr-panel-intro">
            {activeTab.intro}
          </p>

          <ComparisonChecklist
            items={activeTab.checklist}
          />

          <ComparisonVs
            ours={activeTab.ours}
            typical={activeTab.typical}
          />
        </div>

        <div className="igr-panel-right">
          <AnalyticsPreview
            type={activeTab.dashboard}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROOF STRIP
========================================================= */

function ProofStrip() {
  return (
    <div className="igr-proof">
      <h3 className="igr-proof-heading">
        Built for Clarity. Optimized for Growth.
      </h3>

      <div className="igr-proof-grid">
        {proofStrip.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="igr-proof-item"
              key={item.title}
            >
              <span
                className="igr-proof-icon"
                aria-hidden="true"
              >
                <Icon
                  size={18}
                  strokeWidth={2}
                />
              </span>

              <span className="igr-proof-title">
                {item.title}
              </span>

              <p className="igr-proof-body">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function IGRTrustSection() {
  useEffect(() => {
    const id = "igr-google-fonts";

    if (
      typeof document !== "undefined" &&
      !document.getElementById(id)
    ) {
      const link =
        document.createElement("link");

      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="igr-root !bg-[#f1f8fc]">
      <WhyChooseIGRSection />

      <div
        className="igr-divider"
        aria-hidden="true"
      />

      <IGRDifferenceSection />

      <ProofStrip />

      <style jsx>{`
        .igr-root {
          --navy: #0e1c2e;
          --white: #ffffff;
          --green: #17a76b;
          --green-deep: #0f8557;
          --green-soft: #eaf6f0;
          --red: #c15b4a;
          --red-soft: #fbece8;
          --border: #e5e7eb;
          --bg: #f7f9fa;
          --text-primary: #10202f;
          --text-secondary: #5b6b7a;
          --text-tertiary: #8a97a3;

          background: "#f1f8fc";
          color: var(--text-primary);
          padding: 96px 24px;
            
          overflow: hidden;
        }

        .igr-block,
        .igr-proof {
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
        }

        .igr-eyebrow-row {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .igr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          color: var(--green-deep);
          background: var(--green-soft);
          border: 1px solid rgba(23, 167, 107, 0.25);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .igr-eyebrow-alt {
          color: var(--navy);
          background: white;
          border-color: var(--border);
        }

        .igr-eyebrow::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
        }

        .igr-h2 {
          max-width: 800px;
          margin: 0 auto 20px;
          text-align: center;
          color: var(--navy);
          font-family:
            "Plus Jakarta Sans",
            Inter,
            sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .igr-lead {
          max-width: 680px;
          margin: 0 auto 56px;
          text-align: center;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.65;
        }

        .igr-highlight {
          color: var(--green-deep);
          font-weight: 700;
        }

        .igr-trust-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .igr-trust-item {
          background: white;
          border: 1px solid var(--border);
          border-radius: 14px;
          transition: 0.2s ease;
        }

        .igr-trust-item.is-open {
          background: var(--green-soft);
          border-color: var(--green);
        }

        .igr-trust-head {
          width: 100%;
          border: 0;
          background: transparent;
          display: grid;
          grid-template-columns: auto auto 1fr auto;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          cursor: pointer;
          text-align: left;
        }

        .igr-trust-head:focus-visible,
        .igr-tab:focus-visible {
          outline: 3px solid rgba(23, 167, 107, 0.3);
          outline-offset: 2px;
        }

        .igr-trust-num {
          color: var(--text-tertiary);
          font-size: 13px;
          font-weight: 700;
        }

        .igr-trust-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          color: var(--navy);
        }

        .igr-trust-title {
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 700;
        }

        .igr-trust-toggle {
          width: 26px;
          height: 26px;
          border: 1px solid var(--border);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .igr-trust-item.is-open .igr-trust-toggle {
          color: white;
          background: var(--green);
          border-color: var(--green);
        }

        .igr-trust-body-wrap[hidden] {
          display: none;
        }

        .igr-trust-body {
          margin: 0;
          padding: 0 20px 20px 68px;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.6;
        }

        .igr-divider {
          height: 96px;
        }

        .igr-tabs {
          max-width: 800px;
          margin: 0 auto 28px;
          padding: 6px;
          display: flex;
          gap: 6px;
          overflow-x: auto;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: white;
          scrollbar-width: none;
        }

        .igr-tabs::-webkit-scrollbar {
          display: none;
        }

        .igr-tab {
          flex-shrink: 0;
          border: 0;
          border-radius: 999px;
          padding: 11px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          background: transparent;
          color: var(--text-secondary);
          font-size: 13.5px;
          font-weight: 700;
          white-space: nowrap;
        }

        .igr-tab.is-active {
          background: var(--navy);
          color: white;
        }

        .igr-tab-num {
          font-size: 11px;
          opacity: 0.6;
        }

        .igr-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1fr);
          gap: 48px;
          padding: 48px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: white;
        }

        .igr-panel-kicker {
          display: block;
          margin-bottom: 14px;
          color: var(--green-deep);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .igr-panel-heading {
          margin: 0 0 14px;
          color: var(--navy);
          font-size: 27px;
          line-height: 1.25;
          font-weight: 800;
        }

        .igr-panel-intro {
          margin: 0 0 22px;
          color: var(--text-secondary);
          font-size: 14.5px;
          line-height: 1.65;
        }

        .igr-checklist {
          list-style: none;
          padding: 0;
          margin: 0 0 26px;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .igr-checklist li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
        }

        .igr-check-dot {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--green-soft);
          color: var(--green-deep);
        }

        .igr-vs {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .igr-vs-block {
          padding: 16px 18px;
          border: 1px solid;
          border-radius: 10px;
        }

        .igr-vs-ours {
          background: var(--green-soft);
          border-color: rgba(23, 167, 107, 0.28);
        }

        .igr-vs-typical {
          background: var(--red-soft);
          border-color: rgba(193, 91, 74, 0.22);
        }

        .igr-vs-label {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .igr-vs-ours .igr-vs-label {
          color: var(--green-deep);
        }

        .igr-vs-typical .igr-vs-label {
          color: var(--red);
        }

        .igr-vs p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.55;
        }

        .igr-panel-right {
          min-width: 0;
          display: flex;
        }

        .igr-dash {
          width: 100%;
          padding: 24px;
          border-radius: 16px;
          background: var(--navy);
          display: flex;
          flex-direction: column;
          gap: 16px;
          color: white;
        }

        .igr-dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .igr-dash-title {
          font-size: 14px;
          font-weight: 800;
        }

        .igr-dash-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #b9c6d2;
          font-size: 11px;
          white-space: nowrap;
        }

        .igr-metric-card,
        .igr-kpi,
        .igr-flow-node,
        .igr-status-row {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
        }

        .igr-metric-card {
          padding: 16px 18px;
        }

        .igr-metric-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .igr-metric-label {
          color: #b9c6d2;
          font-size: 12px;
        }

        .igr-metric-value {
          display: block;
          margin: 6px 0 8px;
          color: white;
          font-size: 22px;
          font-weight: 800;
        }

        .igr-metric-trend {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #17a76b;
          font-size: 12px;
          font-weight: 700;
        }

        .igr-metric-trend.small {
          font-size: 11px;
        }

        .igr-spark {
          width: 100%;
          height: 56px;
          display: block;
        }

        .igr-metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .igr-bar-track {
          height: 5px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
        }

        .igr-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: var(--green);
        }

        .igr-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .igr-kpi {
          padding: 14px 12px;
        }

        .igr-kpi-value {
          display: block;
          color: white;
          font-size: 16px;
          font-weight: 800;
        }

        .igr-kpi-label {
          color: #b9c6d2;
          font-size: 11px;
        }

        .igr-flow {
          display: flex;
          flex-direction: column;
        }

        .igr-flow-row {
          display: flex;
          flex-direction: column;
        }

        .igr-flow-node {
          width: 100%;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .igr-flow-dot {
          color: var(--green);
          display: inline-flex;
        }

        .igr-flow-text {
          color: white;
          font-size: 13px;
          font-weight: 600;
        }

        .igr-flow-line {
          width: 1px;
          height: 16px;
          margin-left: 20px;
          background: rgba(255, 255, 255, 0.16);
        }

        .igr-status-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .igr-status-row {
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .igr-status-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .tone-done {
          background: #17a76b;
        }

        .tone-progress {
          background: #e8b23d;
        }

        .tone-next {
          background: #6fa8dc;
        }

        .tone-issue {
          background: #e07a5f;
        }

        .tone-reco {
          background: #b9a0f2;
        }

        .igr-status-label {
          flex: 1;
          color: white;
          font-size: 13px;
          font-weight: 600;
        }

        .igr-status-value {
          color: #b9c6d2;
          font-size: 12px;
        }

        .igr-status-foot {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          color: #b9c6d2;
          font-size: 12px;
          line-height: 1.5;
        }

        .igr-proof {
          margin-top: 80px;
        }

        .igr-proof-heading {
          margin: 0 0 32px;
          color: var(--navy);
          text-align: center;
          font-size: 24px;
          font-weight: 800;
        }

        .igr-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .igr-proof-item {
          padding: 20px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: white;
        }

        .igr-proof-icon {
          width: 34px;
          height: 34px;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--green-soft);
          color: var(--green-deep);
        }

        .igr-proof-title {
          display: block;
          margin-bottom: 6px;
          color: var(--navy);
          font-size: 14px;
          font-weight: 800;
        }

        .igr-proof-body {
          margin: 0;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.55;
        }

        @media (max-width: 959px) {
          .igr-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 719px) {
          .igr-root {
            padding: 64px 16px;
          }

          .igr-trust-grid {
            grid-template-columns: 1fr;
          }

          .igr-panel {
            padding: 24px 18px;
            gap: 24px;
          }

          .igr-metric-grid {
            grid-template-columns: 1fr;
          }

          .igr-kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .igr-proof-grid {
            grid-template-columns: 1fr 1fr;
          }

          .igr-divider {
            height: 64px;
          }

          .igr-proof {
            margin-top: 56px;
          }
        }

        @media (max-width: 480px) {
          .igr-root {
            padding: 48px 12px;
          }

          .igr-trust-head {
            grid-template-columns: auto 1fr auto;
            gap: 10px;
          }

          .igr-trust-icon {
            display: none;
          }

          .igr-trust-body {
            padding-left: 16px;
          }

          .igr-proof-grid {
            grid-template-columns: 1fr;
          }

          .igr-dash {
            padding: 18px;
          }

          .igr-dash-header {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}