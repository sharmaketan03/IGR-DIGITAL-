"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import googles from "@/public/reviwes/google.webp";
import clutch from "@/public/reviwes/clutch.webp";
import trust from "@/public/reviwes/truspilot.webp";

type Platform = "google" | "clutch" | "trustpilot";

/* =========================================================
   REVIEW IMAGES
========================================================= */

const reviewImages: Record<Platform, StaticImageData> = {
  google: googles,
  clutch: clutch,
  trustpilot: trust,
};

const platforms: Platform[] = [
  "google",
  "clutch",
  "trustpilot",
];

/* =========================================================
   PLATFORM ICON
========================================================= */

function PlatformIcon({
  platform,
}: {
  platform: Platform;
}) {
  if (platform === "clutch") {
    return (
      <span className="clutch-icon">
        C
      </span>
    );
  }

  if (platform === "trustpilot") {
    return (
      <span className="trustpilot-icon">
        ★
      </span>
    );
  }

  return (
    <span className="google-icon">
      G
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ClientReviews() {
  const [platform, setPlatform] =
    useState<Platform>("google");

  const currentIndex =
    platforms.indexOf(platform);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const goPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + platforms.length) %
      platforms.length;

    setPlatform(platforms[previousIndex]);
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const goNext = () => {
    const nextIndex =
      (currentIndex + 1) % platforms.length;

    setPlatform(platforms[nextIndex]);
  };

  return (
    <section className="client-reviews">
      <div className="reviews-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="reviews-heading">
          <h2>
            What Clients Say About Our{" "}
            <span>
              Digital Marketing Company
            </span>
          </h2>

          <p>
            See what clients share on Clutch,
            Google Reviews, and other trusted
            platforms about their experience with
            our digital marketing services.
          </p>
        </div>

        {/* =================================================
            REVIEW AREA
        ================================================= */}

        <div className="review-area">

          {/* LEFT ARROW */}

          <button
            type="button"
            className="review-arrow review-arrow-left"
            onClick={goPrevious}
            aria-label="Previous reviews"
          >
            <ChevronLeft
              size={20}
              strokeWidth={2}
            />
          </button>

          {/* =================================================
              REVIEW IMAGE
          ================================================= */}

          <div className="review-card">

            {/* <Image
              key={platform}
              src={reviewImages[platform]}
              alt={`${platform} client reviews`}
              fill
              priority={platform === "google"}
              sizes="
                (min-width: 1536px) 680px,
                (min-width: 1280px) 620px,
                (min-width: 1024px) 570px,
                (min-width: 768px) 520px,
                (min-width: 640px) 500px,
                calc(100vw - 58px)
              "
              className="review-image"
            /> */}

            <img
              key={platform}
              src={reviewImages[platform]?.src || (reviewImages[platform] as unknown as string)}
              alt={`${platform} client reviews`}
              loading="lazy"
              decoding="async"
            />

          </div>

          {/* RIGHT ARROW */}

          <button
            type="button"
            className="review-arrow review-arrow-right"
            onClick={goNext}
            aria-label="Next reviews"
          >
            <ChevronRight
              size={20}
              strokeWidth={2}
            />
          </button>

        </div>

        {/* =================================================
            PLATFORM SWITCHER
        ================================================= */}

        <div className="platform-buttons">

          {platforms.map((item) => (
            <button
              key={item}
              type="button"
              className={`platform-button ${
                platform === item
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setPlatform(item)
              }
              aria-label={`${item} reviews`}
              aria-pressed={platform === item}
            >
              <PlatformIcon
                platform={item}
              />
            </button>
          ))}

        </div>

      </div>

      <style jsx>{`

        /* =====================================================
           BASE
        ===================================================== */

        .client-reviews {
          width: 100%;
          min-height: 50vh;

          background: #f3f6f6;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          padding: 36px 24px;

          box-sizing: border-box;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .reviews-container {
          width: 100%;
          max-width: 1420px;

          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .reviews-heading {
          width: 100%;

          text-align: center;

          margin-bottom: 32px;
        }


        .reviews-heading h2 {
          width: 100%;

          max-width: 900px;

          margin: 0 auto;

          color: #10213a;

          font-size: 42px;

          line-height: 1.08;

          font-weight: 750;

          letter-spacing: -1.4px;
        }


        .reviews-heading h2 span {
          color: #f4512a;
        }


        .reviews-heading p {
          width: 100%;

          max-width: 600px;

          margin: 12px auto 0;

          color: #64748b;

          font-size: 13px;

          line-height: 1.55;

          font-weight: 400;
        }


        /* =====================================================
           REVIEW AREA
        ===================================================== */

        .review-area {
          position: relative;

          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 0 20px;

          box-sizing: border-box;
        }


        /* =====================================================
           REVIEW CARD

           BIGGER IMAGE
        ===================================================== */

        .review-card {
          position: relative;

          width: 620px;

          aspect-ratio: 920 / 810;

          background: #ffffff;

          border-radius: 16px;

          overflow: hidden;

          flex-shrink: 0;

          box-shadow:
            0 18px 45px
            rgba(
              15,
              23,
              42,
              0.08
            );
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .review-image {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: contain;

          object-position: center;

          padding: 0;

          transition:
            opacity 0.25s ease;
        }


        /* =====================================================
           ARROWS
        ===================================================== */

        .review-arrow {
          position: absolute;

          top: 50%;

          width: 36px;

          height: 36px;

          padding: 0;

          border: none;

          border-radius: 50%;

          background: #ffffff;

          color: #26364d;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          z-index: 20;

          transform:
            translateY(-50%);

          box-shadow:
            0 5px 18px
            rgba(
              15,
              23,
              42,
              0.12
            );

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .review-arrow:hover {
          transform:
            translateY(-50%)
            scale(1.08);

          box-shadow:
            0 8px 24px
            rgba(
              15,
              23,
              42,
              0.18
            );
        }


        .review-arrow:active {
          transform:
            translateY(-50%)
            scale(0.96);
        }


        /* =====================================================
           DESKTOP ARROWS
        ===================================================== */

        .review-arrow-left {
          left: calc(50% - 360px);
        }


        .review-arrow-right {
          right: calc(50% - 360px);
        }


        /* =====================================================
           PLATFORM BUTTONS
        ===================================================== */

        .platform-buttons {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          margin-top: 24px;
        }


        .platform-button {
          width: 40px;

          height: 40px;

          padding: 0;

          border: none;

          border-radius: 50%;

          background: transparent;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }


        .platform-button:hover {
          transform:
            translateY(-2px);
        }


        .platform-button.active {
          background: #ffffff;

          box-shadow:
            0 0 0 2px #d7eeee;
        }


        /* =====================================================
           CLUTCH ICON
        ===================================================== */

        .clutch-icon {
          width: 28px;

          height: 28px;

          border-radius: 50%;

          background: #ee3a29;

          color: #ffffff;

          display: flex;

          align-items: center;

          justify-content: center;

          font-family: Arial, sans-serif;

          font-size: 12px;

          font-weight: 700;
        }


        /* =====================================================
           TRUSTPILOT ICON
        ===================================================== */

        .trustpilot-icon {
          width: 28px;

          height: 28px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #00b67a;

          font-size: 23px;

          line-height: 1;
        }


        /* =====================================================
           GOOGLE ICON
        ===================================================== */

        .google-icon {
          width: 28px;

          height: 28px;

          border-radius: 50%;

          background: #ffffff;

          border: 1px solid #dfe3e8;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #4285f4;

          font-family: Arial, sans-serif;

          font-size: 19px;

          font-weight: 700;
        }


        /* =====================================================
           2XL
           >= 1536px
        ===================================================== */

        @media (min-width: 1536px) {

          .client-reviews {
            min-height: 70vh;

            padding:
              65px
              30px;
          }


          .reviews-container {
            max-width: 1300px;
          }


          .reviews-heading {
            margin-bottom: 34px;
          }


          .reviews-heading h2 {
            max-width: 950px;

            font-size: 44px;
          }


          .reviews-heading p {
            max-width: 620px;

            font-size: 13px;
          }


          .review-card {
            width: 680px;
          }


          .review-arrow {
            width: 38px;

            height: 38px;
          }


          .review-arrow-left {
            left:
              calc(50% - 395px);
          }


          .review-arrow-right {
            right:
              calc(50% - 395px);
          }


          .platform-buttons {
            margin-top: 25px;
          }
        }


        /* =====================================================
           XL
           1280px - 1535px
        ===================================================== */

        @media
          (min-width: 1280px)
          and (max-width: 1535px) {

          .client-reviews {
            padding:
              58px
              24px;
          }


          .reviews-heading {
            margin-bottom: 32px;
          }


          .reviews-heading h2 {
            max-width: 900px;

            font-size: 42px;
          }


          .reviews-heading p {
            font-size: 12.5px;
          }


          .review-card {
            width: 620px;
          }


          .review-arrow {
            width: 36px;

            height: 36px;
          }


          .review-arrow-left {
            left:
              calc(50% - 360px);
          }


          .review-arrow-right {
            right:
              calc(50% - 360px);
          }
        }


        /* =====================================================
           LG
           1024px - 1279px
        ===================================================== */

        @media
          (min-width: 1024px)
          and (max-width: 1279px) {

          .client-reviews {
            padding:
              52px
              24px;
          }


          .reviews-container {
            max-width: 1000px;
          }


          .reviews-heading {
            margin-bottom: 28px;
          }


          .reviews-heading h2 {
            max-width: 800px;

            font-size: 38px;

            letter-spacing: -1.1px;
          }


          .reviews-heading p {
            max-width: 560px;

            font-size: 12px;
          }


          .review-card {
            width: 570px;
          }


          .review-arrow {
            width: 34px;

            height: 34px;
          }


          .review-arrow-left {
            left: 2%;
          }


          .review-arrow-right {
            right: 2%;
          }


          .platform-buttons {
            margin-top: 22px;
          }
        }


        /* =====================================================
           MD
           768px - 1023px
        ===================================================== */

        @media
          (min-width: 768px)
          and (max-width: 1023px) {

          .client-reviews {
            min-height: 70vh;

            padding:
              48px
              20px;
          }


          .reviews-container {
            max-width: 820px;
          }


          .reviews-heading {
            margin-bottom: 26px;
          }


          .reviews-heading h2 {
            max-width: 700px;

            font-size: 35px;

            letter-spacing: -0.9px;
          }


          .reviews-heading p {
            max-width: 520px;

            font-size: 11.5px;
          }


          .review-card {
            width: 520px;
          }


          .review-arrow {
            width: 32px;

            height: 32px;
          }


          .review-arrow-left {
            left: 1%;
          }


          .review-arrow-right {
            right: 1%;
          }


          .platform-buttons {
            margin-top: 20px;
          }
        }


        /* =====================================================
           SM
           640px - 767px
        ===================================================== */

        @media
          (min-width: 640px)
          and (max-width: 767px) {

          .client-reviews {
            min-height: 70vh;

            padding:
              42px
              16px;
          }


          .reviews-heading {
            margin-bottom: 23px;
          }


          .reviews-heading h2 {
            max-width: 600px;

            font-size: 31px;

            line-height: 1.1;

            letter-spacing: -0.8px;
          }


          .reviews-heading p {
            max-width: 480px;

            font-size: 10.5px;
          }


          .review-area {
            padding:
              0 12px;
          }


          .review-card {
            width:
              min(
                500px,
                calc(100vw - 76px)
              );

            max-width: 500px;
          }


          .review-arrow {
            width: 30px;

            height: 30px;
          }


          .review-arrow-left {
            left: 0;
          }


          .review-arrow-right {
            right: 0;
          }


          .platform-buttons {
            margin-top: 19px;

            gap: 11px;
          }


          .platform-button {
            width: 36px;

            height: 36px;
          }
        }


        /* =====================================================
           MOBILE
           < 640px
        ===================================================== */

        @media (max-width: 639px) {

          .client-reviews {
            min-height: 70vh;

            padding:
              40px
              10px
              38px;
          }


          .reviews-container {
            max-width: 100%;
          }


          .reviews-heading {
            margin-bottom: 21px;
          }


          .reviews-heading h2 {
            max-width: 390px;

            font-size: 28px;

            line-height: 1.1;

            letter-spacing: -0.7px;
          }


          .reviews-heading p {
            max-width: 360px;

            margin-top: 10px;

            font-size: 10.5px;

            line-height: 1.5;
          }


          .review-area {
            width: 100%;

            padding:
              0 5px;
          }


          .review-card {
            width:
              calc(100vw - 58px);

            max-width: 500px;

            min-width: 280px;

            aspect-ratio:
              920 / 810;

            border-radius: 12px;
          }


          .review-arrow {
            width: 29px;

            height: 29px;
          }


          .review-arrow-left {
            left: 0;
          }


          .review-arrow-right {
            right: 0;
          }


          .platform-buttons {
            margin-top: 18px;

            gap: 10px;
          }


          .platform-button {
            width: 35px;

            height: 35px;
          }
        }


        /* =====================================================
           SMALL MOBILE
           <= 380px
        ===================================================== */

        @media (max-width: 380px) {

          .client-reviews {
            min-height: 70vh;

            padding:
              32px
              7px
              32px;
          }


          .reviews-heading {
            margin-bottom: 18px;
          }


          .reviews-heading h2 {
            max-width: 335px;

            font-size: 24px;

            line-height: 1.12;

            letter-spacing: -0.5px;
          }


          .reviews-heading p {
            max-width: 315px;

            font-size: 9.5px;
          }


          .review-card {
            width:
              calc(100vw - 48px);

            min-width: 270px;
          }


          .review-arrow {
            width: 27px;

            height: 27px;
          }


          .review-arrow-left {
            left: -1px;
          }


          .review-arrow-right {
            right: -1px;
          }


          .platform-buttons {
            margin-top: 16px;

            gap: 8px;
          }


          .platform-button {
            width: 32px;

            height: 32px;
          }


          .clutch-icon,
          .trustpilot-icon,
          .google-icon {
            width: 24px;

            height: 24px;
          }


          .clutch-icon {
            font-size: 10px;
          }


          .trustpilot-icon {
            font-size: 21px;
          }


          .google-icon {
            font-size: 17px;
          }
        }

      `}</style>
    </section>
  );
}