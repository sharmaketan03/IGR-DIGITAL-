"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TOCItem {
  id: string;
  title: string;
}

interface BlogInteractiveLayoutProps {
  tocItems: TOCItem[];
  children: React.ReactNode;
}

const TAKEAWAYS = [
  "AI search is not simply another version of traditional Google search.",
  "Clear, direct answers are easier for search systems to understand.",
  "Important claims should be supported with identifiable sources.",
  "Technical accessibility still matters for AI visibility.",
];

const CHECKLIST = [
  "Server-rendered content",
  "Clear H1 and H2 structure",
  "Direct answers to key questions",
  "Descriptive internal links",
  "Relevant structured data",
  "Source attribution",
];

const RELATED_POSTS = [
  {
    category: "SEO",
    title: "How to Build an SEO Strategy That Scales",
    href: "/blog/seo",
    readTime: "8 min read",
  },
  {
    category: "AI SEARCH",
    title: "What Is Answer Engine Optimization?",
    href: "/blog/artificial-intelligence",
    readTime: "6 min read",
  },
  {
    category: "CONTENT",
    title: "Creating Content Search Engines Can Understand",
    href: "/blog/content-marketing",
    readTime: "7 min read",
  },
];

export default function BlogInteractiveLayout({
  tocItems,
  children,
}: BlogInteractiveLayoutProps) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(
    tocItems[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const pct =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, pct)));

      const sections = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let current = sections[0]?.id || "";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - 120 <= 0) {
          current = section.id;
        }
      });

      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocItems]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  return (
    <>
      {/* =====================================================
          READING PROGRESS
      ====================================================== */}

      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-[#e7e2d4]">
        <div
          className="h-full bg-[#0f7a5c] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* =====================================================
          MAIN BLOG LAYOUT
      ====================================================== */}

      <div className="w-full py-12">
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-10
              lg:grid-cols-[170px_minmax(0,850px)_minmax(260px,1fr)]
              lg:gap-10
              xl:grid-cols-[180px_minmax(0,850px)_minmax(300px,1fr)]
              xl:gap-14
            "
          >
            {/* =================================================
                LEFT — TABLE OF CONTENTS
            ================================================== */}

            <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
              <div className="mb-3.5 text-[11.5px] font-bold uppercase tracking-wider text-[#6b7280]">
                On this page
              </div>

              <ul className="m-0 list-none border-l-2 border-[#e7e2d4] p-0">
                {tocItems.map((item) => (
                  <li key={item.id} className="mb-1">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) =>
                        scrollToSection(e, item.id)
                      }
                      className={`
                        -ml-[2px]
                        block
                        border-l-2
                        py-1.5
                        pl-3
                        text-[13px]
                        leading-5
                        transition-colors
                        ${
                          activeId === item.id
                            ? "border-[#0f7a5c] font-semibold text-[#0b5d45]"
                            : "border-transparent text-[#6b7280] hover:text-[#16213a]"
                        }
                      `}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Share */}
              <div className="mt-7">
                <button
                  onClick={copyLink}
                  title="Copy article link"
                  aria-label="Copy article link"
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e7e2d4]
                    bg-white
                    transition
                    hover:bg-slate-50
                  "
                >
                  <svg
                    className="h-3.5 w-3.5 stroke-[#16213a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
                    <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
                  </svg>
                </button>
              </div>
            </aside>

            {/* =================================================
                CENTER — ARTICLE
            ================================================== */}

            <main className="min-w-0 w-full">
              {children}
            </main>

            {/* =================================================
                RIGHT — BLOG SIDEBAR
            ================================================== */}

            <aside
              className="
                hidden
                lg:block
                lg:sticky
                lg:top-8
                lg:self-start
              "
            >
              <div className="space-y-5">

                {/* ==============================
                    KEY TAKEAWAYS
                =============================== */}

                <div className="rounded-2xl border border-[#e7e2d4] bg-white p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e3f3ec]">
                      <svg
                        className="h-4 w-4 stroke-[#0f7a5c]"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                      </svg>
                    </div>

                    <h3 className="font-fraunces text-[18px] font-semibold text-[#16213a]">
                      Key takeaways
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {TAKEAWAYS.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2.5 text-[13px] leading-[1.65] text-[#596174]"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f7a5c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ==============================
                    QUICK CHECKLIST
                =============================== */}

                <div className="rounded-2xl bg-[#16213a] p-5 text-white">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9fb3d1]">
                    Before publishing
                  </div>

                  <h3 className="mb-4 font-fraunces text-[20px] font-semibold">
                    Quick checklist
                  </h3>

                  <div className="space-y-2.5">
                    {CHECKLIST.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <svg
                            className="h-3 w-3 stroke-[#8ed3ba]"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="3"
                          >
                            <path d="M5 12l4 4L19 6" />
                          </svg>
                        </div>

                        <span className="text-[12.5px] text-[#d6dce7]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ==============================
                    RELATED POSTS
                =============================== */}

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-fraunces text-[20px] font-semibold text-[#16213a]">
                      Related reads
                    </h3>

                    <Link
                      href="/blog"
                      className="text-[11px] font-semibold uppercase tracking-wider text-[#0f7a5c] hover:text-[#0b5d45]"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {RELATED_POSTS.map((post, index) => (
                      <Link
                        key={index}
                        href={post.href}
                        className="
                          group
                          block
                          rounded-xl
                          border
                          border-[#e7e2d4]
                          bg-white
                          p-4
                          transition
                          hover:-translate-y-0.5
                          hover:border-[#c9e6da]
                          hover:shadow-sm
                        "
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#0f7a5c]">
                            {post.category}
                          </span>

                          <span className="text-[10px] text-[#9ca3af]">
                            •
                          </span>

                          <span className="text-[10px] text-[#9ca3af]">
                            {post.readTime}
                          </span>
                        </div>

                        <h4 className="font-fraunces text-[16px] font-semibold leading-[1.35] text-[#16213a] transition group-hover:text-[#0f7a5c]">
                          {post.title}
                        </h4>

                        <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#6b7280]">
                          Read article
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ==============================
                    NEWSLETTER CTA
                =============================== */}

                <div className="overflow-hidden rounded-2xl bg-[#e3f3ec] p-5">
                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b5d45]">
                    Stay ahead
                  </div>

                  <h3 className="font-fraunces text-[21px] font-semibold leading-[1.25] text-[#16213a]">
                    Get smarter search insights.
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-[1.65] text-[#53655e]">
                    Practical SEO, AI search, and digital growth insights
                    delivered to your inbox.
                  </p>

                  <Link
                    href="#newsletter"
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#0f7a5c]
                      px-4
                      py-2.5
                      text-[12px]
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#0b5d45]
                    "
                  >
                    Subscribe
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}