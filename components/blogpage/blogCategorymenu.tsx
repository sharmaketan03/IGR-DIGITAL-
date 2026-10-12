"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* =========================================================
   BLOG CATEGORIES
========================================================= */

export const BLOG_CATEGORIES = [
  {
    name: "SEO",
    slug: "seo",
  },
  {
    name: "PPC",
    slug: "ppc",
  },
  {
    name: "Website Development",
    slug: "website-development",
  },
  {
    name: "Performance Marketing",
    slug: "performance-marketing",
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
  },
  {
    name: "Content Marketing",
    slug: "content-marketing",
  },
  {
    name: "Social Media Marketing",
    slug: "social-media-marketing",
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function BlogCategoryMenu() {
  const categoryRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /* =========================================================
     CHECK SCROLL POSITION
  ========================================================= */

  const checkScrollPosition = () => {
    const element = categoryRef.current;

    if (!element) return;

    const maxScrollLeft =
      element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 5);

    setCanScrollRight(
      maxScrollLeft > 5 &&
        element.scrollLeft < maxScrollLeft - 5
    );
  };

  /* =========================================================
     SCROLL LEFT
  ========================================================= */

  const scrollLeft = () => {
    const element = categoryRef.current;

    if (!element) return;

    element.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  /* =========================================================
     SCROLL RIGHT
  ========================================================= */

  const scrollRight = () => {
    const element = categoryRef.current;

    if (!element) return;

    element.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  /* =========================================================
     EFFECT
  ========================================================= */

  useEffect(() => {
    const element = categoryRef.current;

    if (!element) return;

    checkScrollPosition();

    element.addEventListener(
      "scroll",
      checkScrollPosition,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      checkScrollPosition
    );

    return () => {
      element.removeEventListener(
        "scroll",
        checkScrollPosition
      );

      window.removeEventListener(
        "resize",
        checkScrollPosition
      );
    };
  }, []);

  /* =========================================================
     UI
  ========================================================= */

  return (
    <section
      className="
        relative
        z-50
        mx-auto
        w-full
        max-w-[840px]
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="relative">

        {/* ===================================================
            FLOATING MENU
        =================================================== */}

        <div
          className="
            relative
            flex
            h-[62px]
            items-center
            overflow-hidden
            rounded-full
            border
            border-[#e5e7eb]
            bg-white
            shadow-[0_10px_35px_rgba(22,33,58,0.12)]
          "
        >

          {/* =================================================
              CATEGORY LIST
          ================================================= */}

          <div
            ref={categoryRef}
            className="
              flex
              h-full
              min-w-0
              flex-1
              items-center
              gap-0.5
              overflow-x-auto
              pl-[82px]
              pr-[82px]
              scrollbar-none
              sm:pl-[92px]
              sm:pr-[92px]
            "
          >
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="
                  group
                  flex
                  h-full
                  shrink-0
                  items-center
                  whitespace-nowrap
                  px-3.5
                  text-[14px]
                  font-medium
                  text-[#3f4248]
                  transition-colors
                  duration-200
                  hover:text-[#4285F4]
                  sm:px-4
                  sm:text-[15px]
                "
              >
                <span className="relative">
                  {category.name}

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#4285F4]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-0
              z-20
              flex
              h-full
              w-[82px]
              items-center
              justify-center
              bg-white
              sm:w-[92px]
            "
          >
            <button
              type="button"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll categories left"
              className={`
                flex
                h-[44px]
                w-[44px]
                shrink-0
                items-center
                justify-center
                rounded-full
                text-white
                transition-all
                duration-300

                ${
                  canScrollLeft
                    ? `
                      cursor-pointer
                      bg-[#4285F4]
                      shadow-[0_5px_15px_rgba(66,133,244,0.25)]
                      hover:scale-105
                      hover:bg-[#16213a]
                      active:scale-95
                    `
                    : `
                      cursor-not-allowed
                      bg-[#dbe5f5]
                      opacity-60
                    `
                }
              `}
            >
              <ArrowLeft className="h-[19px] w-[19px]" />
            </button>
          </div>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              z-20
              flex
              h-full
              w-[82px]
              items-center
              justify-center
              bg-white
              sm:w-[92px]
            "
          >
            <button
              type="button"
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll categories right"
              className={`
                flex
                h-[44px]
                w-[44px]
                shrink-0
                items-center
                justify-center
                rounded-full
                text-white
                transition-all
                duration-300

                ${
                  canScrollRight
                    ? `
                      cursor-pointer
                      bg-[#4285F4]
                      shadow-[0_5px_15px_rgba(66,133,244,0.25)]
                      hover:scale-105
                      hover:bg-[#16213a]
                      active:scale-95
                    `
                    : `
                      cursor-not-allowed
                      bg-[#dbe5f5]
                      opacity-60
                    `
                }
              `}
            >
              <ArrowRight className="h-[19px] w-[19px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}