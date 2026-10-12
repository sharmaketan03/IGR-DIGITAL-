"use client";

import React from "react";
import Image from "next/image";

interface ReviewBadgesRowProps {
  theme?: "light" | "dark";
  className?: string;
  size?: "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
}

export default function ReviewBadgesRow({
  theme = "light",
  className = "",
  size = "xl",
  align = "left",
}: ReviewBadgesRowProps) {
  const isDark = theme === "dark";

  // Height configurations for large, crisp display
  const clutchHeight =
    size === "2xl"
      ? "h-14 sm:h-16 lg:h-18"
      : size === "xl"
      ? "h-12 sm:h-14 lg:h-16"
      : size === "lg"
      ? "h-10 sm:h-12"
      : "h-9 sm:h-10";

  const googleHeight =
    size === "2xl"
      ? "h-14 sm:h-16 lg:h-18"
      : size === "xl"
      ? "h-12 sm:h-14 lg:h-16"
      : size === "lg"
      ? "h-10 sm:h-12"
      : "h-9 sm:h-10";

  const topSeoHeight =
    size === "2xl"
      ? "h-16 sm:h-18 lg:h-20"
      : size === "xl"
      ? "h-14 sm:h-16 lg:h-18"
      : size === "lg"
      ? "h-11 sm:h-13"
      : "h-10 sm:h-12";

  const justifyClass =
    align === "right"
      ? "justify-start md:justify-end"
      : align === "center"
      ? "justify-center"
      : "justify-start";

  return (
    <div
      className={`flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 ${justifyClass} ${className}`}
    >
      {/* 1. Clutch Rating SVG (No background) */}
      <div
        className={`relative flex items-center transition-transform duration-200 hover:scale-105 ${
          isDark ? "brightness-0 invert opacity-95 hover:opacity-100" : ""
        }`}
      >
        <Image
          src="/herosectionlogo/clutch-rating.svg"
          alt="Clutch 4.8/5 Rating From 90+ Reviews"
          width={260}
          height={75}
          className={`${clutchHeight} w-auto object-contain drop-shadow-sm`}
          priority
        />
      </div>

      {/* 2. Google Rating SVG (No background) */}
      <div
        className={`relative flex items-center transition-transform duration-200 hover:scale-105 ${
          isDark ? "brightness-0 invert opacity-95 hover:opacity-100" : ""
        }`}
      >
        <Image
          src="/herosectionlogo/google-rating.svg"
          alt="Google 4.9/5 Rating 120+ Reviews"
          width={230}
          height={75}
          className={`${googleHeight} w-auto object-contain drop-shadow-sm`}
          priority
        />
      </div>

      {/* 3. Top SEO Agency Badge SVG (No background) */}
      <div
        className={`relative flex items-center transition-transform duration-200 hover:scale-105 ${
          isDark ? "brightness-0 invert opacity-95 hover:opacity-100" : ""
        }`}
      >
        <Image
          src="/herosectionlogo/top-seo-badge.svg"
          alt="Top SEO Agency 2025 - Top B2B Company"
          width={240}
          height={85}
          className={`${topSeoHeight} w-auto object-contain drop-shadow-sm`}
          priority
        />
      </div>
    </div>
  );
}

