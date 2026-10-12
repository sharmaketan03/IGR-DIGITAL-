"use client";

import React, { useEffect, useState } from "react";

/* ---------------------------------------------------------------------- */
/* TYPES */
/* ---------------------------------------------------------------------- */

interface StatCircle {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sub?: string;
  backText: string;
  className: "circle-blue" | "circle-violet" | "circle-navy";
}

interface ResultsHeroContent {
  eyebrow: string;
  headline: string;
  paragraph: string;
  inputPlaceholder: string;
  ctaLabel: string;
  circles: StatCircle[];
  testimonial: {
    quote: string;
    reviewerInitial: string;
    reviewerName: string;
    ratings: { label: string }[];
  };
}

/* ---------------------------------------------------------------------- */
/* DEFAULT CONTENT */
/* ---------------------------------------------------------------------- */

const DEFAULT_CONTENT: ResultsHeroContent = {
  eyebrow: "DRIVING MEASURABLE GROWTH FOR BRANDS WORLDWIDE",

  headline:
    "Results-Driven Digital Marketing That Delivers Real ROI",

  paragraph:
    "More leads. More sales. More revenue. IGR Digital combines expert specialists with AI-powered technology to build and optimize digital strategies that drive measurable business growth.",

  inputPlaceholder: "Enter your website",

  ctaLabel: "Send Me a Proposal",

  circles: [
    {
      id: "retention",
      value: 91,
      suffix: "%",
      label: "RETENTION RATE",
      sub: "Industry average: 50%",
      backText:
        "We treat every client like a long-term growth partner, not a project.",
      className: "circle-blue",
    },

    {
      id: "satisfaction",
      value: 93,
      suffix: "%",
      label: "CLIENT SATISFACTION",
      sub: "Industry average: 72%",
      backText:
        "Real strategists, real support — no black-box reporting.",
      className: "circle-violet",
    },

    {
      id: "campaigns",
      value: 40,
      suffix: "+",
      label: "GROWTH CAMPAIGNS",
      backText:
        "From strategy to execution — fully managed end to end.",
      className: "circle-navy",
    },
  ],

  testimonial: {
    quote:
      "IGR Digital understands both strategy and technology — the results speak for themselves.",

    reviewerInitial: "R",

    reviewerName: "Rohan S, Verified Client Review",

    ratings: [
      {
        label: "Rated 4.9/5 on Google",
      },
      {
        label: "Rated 4.9/5 on Clutch",
      },
    ],
  },
};

/* ---------------------------------------------------------------------- */
/* COUNT UP */
/* ---------------------------------------------------------------------- */

function useCountUp(
  target: number,
  start: boolean,
  duration = 1300
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(
        1,
        (now - startTime) / duration
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setValue(
        Math.round(target * eased)
      );

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [start, target, duration]);

  return value;
}

/* ---------------------------------------------------------------------- */
/* STAT CIRCLE */
/* ---------------------------------------------------------------------- */

function StatCircleView({
  circle,
  start,
  delayMs,
}: {
  circle: StatCircle;
  start: boolean;
  delayMs: number;
}) {
  const [countStarted, setCountStarted] =
    useState(false);

  const value = useCountUp(
    circle.value,
    countStarted,
    1300
  );

  useEffect(() => {
    if (!start) return;

    const timer = setTimeout(() => {
      setCountStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [start]);

  return (
    <div
      className={`circle-wrap ${circle.className} reveal ${
        start ? "in" : ""
      }`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="circle-flip">

        {/* FRONT */}
        <div className="face face-front">

          <span className="val">
            {value}
            {circle.suffix}
          </span>

          <span className="lbl">
            {circle.label}
          </span>

          {circle.sub && (
            <span className="sub">
              {circle.sub}
            </span>
          )}

        </div>

        {/* BACK */}
        <div className="face face-back">
          {circle.backText}
        </div>

      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* PROPS */
/* ---------------------------------------------------------------------- */

interface IGRResultsHeroProps {
  content?: Partial<ResultsHeroContent>;
}

/* ---------------------------------------------------------------------- */
/* COMPONENT */
/* ---------------------------------------------------------------------- */

export default function IGRResultsHero({
  content,
}: IGRResultsHeroProps) {
  const c: ResultsHeroContent = {
    ...DEFAULT_CONTENT,
    ...content,
  };

  const [mounted, setMounted] =
    useState(false);

  const [starsIn, setStarsIn] =
    useState(false);

  const [website, setWebsite] =
    useState("");

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setStarsIn(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="igr-results-hero"
      aria-label="IGR Digital — results hero"
    >

      {/* BACKGROUND */}
      <div
        className="blob"
        aria-hidden="true"
      />

      <div
        className="dot-grid"
        aria-hidden="true"
      />

      {/* MAIN WRAPPER */}
      <div className="wrap">

        {/* LEFT CONTENT */}
        <div className="left">

          <p
            className={`eyebrow reveal ${
              mounted ? "in" : ""
            }`}
          >
            {c.eyebrow}
          </p>

          <h1
            className={`reveal ${
              mounted ? "in" : ""
            }`}
            style={{
              transitionDelay: "80ms",
            }}
          >
            {c.headline}
          </h1>

          <p
            className={`desc reveal ${
              mounted ? "in" : ""
            }`}
            style={{
              transitionDelay: "160ms",
            }}
          >
            {c.paragraph}
          </p>

          {/* FORM */}
          <form
            className={`form-row reveal ${
              mounted ? "in" : ""
            }`}
            style={{
              transitionDelay: "240ms",
            }}
            onSubmit={(e) =>
              e.preventDefault()
            }
          >

            <input
              type="text"
              value={website}
              onChange={(e) =>
                setWebsite(e.target.value)
              }
              placeholder={
                c.inputPlaceholder
              }
              aria-label={
                c.inputPlaceholder
              }
            />

            <button type="submit">
              {c.ctaLabel}

              <span
                className="shine"
                aria-hidden="true"
              />

              <span className="arrow">
                →
              </span>
            </button>

          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">

          {/* CIRCLES */}
          {c.circles.map(
            (circle, index) => (
              <StatCircleView
                key={circle.id}
                circle={circle}
                start={mounted}
                delayMs={
                  300 + index * 120
                }
              />
            )
          )}

          {/* TESTIMONIAL */}
          <div
            className={`testimonial reveal ${
              mounted ? "in" : ""
            }`}
            style={{
              transitionDelay: "660ms",
            }}
          >

            <p className="quote">
              &ldquo;
              {c.testimonial.quote}
              &rdquo;
            </p>

            <div className="reviewer">

              <span className="avatar">
                {
                  c.testimonial
                    .reviewerInitial
                }
              </span>

              <span>
                {
                  c.testimonial
                    .reviewerName
                }
              </span>

            </div>

            {c.testimonial.ratings.map(
              (rating) => (
                <div
                  className="rating"
                  key={rating.label}
                >

                  <span
                    className={`stars ${
                      starsIn ? "in" : ""
                    }`}
                  >
                    ★★★★★
                  </span>

                  {rating.label}

                </div>
              )
            )}

          </div>

        </div>

      </div>

      {/* CSS */}
      <style>{`

        /* ============================================================
           HERO
        ============================================================ */

        .igr-results-hero {
          position: relative;
          overflow: hidden;

          min-height: 70vh;

          display: flex;
          align-items: center;

          padding: 42px 5vw;

          background: #EAF3FF;

          --ink: #0B1220;
          --muted: #3D4457;
          --blue: #2F5FFF;
          --blue-deep: #12235C;
          --violet: #7C5CFF;

          color: var(--ink);
        }


        /* ============================================================
           BACKGROUND
        ============================================================ */

        .blob {
          position: absolute;

          width: 650px;
          height: 650px;

          top: -18%;
          right: -8%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.55),
              transparent 68%
            );

          pointer-events: none;
        }


        .dot-grid {
          position: absolute;
          inset: 0;

          opacity: .035;

          pointer-events: none;

          background-image:
            radial-gradient(
              var(--blue) 1.5px,
              transparent 1.5px
            );

          background-size: 28px 28px;

          -webkit-mask-image:
            radial-gradient(
              ellipse 650px 450px at 75% 30%,
              #000 30%,
              transparent 80%
            );

          mask-image:
            radial-gradient(
              ellipse 650px 450px at 75% 30%,
              #000 30%,
              transparent 80%
            );
        }


        /* ============================================================
           MAIN GRID
        ============================================================ */

        .wrap {
          position: relative;

          width: 100%;
          max-width: 1420px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: 44% 56%;

          gap: 25px;

          align-items: center;
        }


        /* ============================================================
           LEFT
        ============================================================ */

        .left {
          position: relative;
          z-index: 10;
        }


        .reveal {
          opacity: 0;

          transform:
            translateY(20px);

          transition:
            opacity .7s
            cubic-bezier(.22,1,.36,1),

            transform .7s
            cubic-bezier(.22,1,.36,1);
        }


        .reveal.in {
          opacity: 1;

          transform:
            translateY(0);
        }


        .eyebrow {
          margin: 0 0 10px;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: .06em;

          color: var(--blue);
        }


        h1 {
          max-width: 650px;

          margin: 0 0 16px;

          font-size:
            clamp(
              2.2rem,
              3vw,
              2.7rem
            );

          font-weight: 900;

          line-height: 1.08;

          letter-spacing: -.02em;
        }


        .desc {
          max-width: 570px;

          margin: 0 0 22px;

          font-size: 14px;

          line-height: 1.65;

          color: var(--muted);
        }


        /* ============================================================
           FORM
        ============================================================ */

        .form-row {
          display: flex;

          gap: 8px;

          flex-wrap: wrap;
        }


        .form-row input {
          flex: 1 1 210px;

          height: 48px;

          padding: 0 15px;

          border:
            1px solid #C9D6F0;

          border-radius: 9px;

          outline: none;

          background: #fff;

          font-size: 13px;
        }


        .form-row input:focus {
          border-color:
            var(--blue);
        }


        .form-row button {
          position: relative;

          overflow: hidden;

          height: 48px;

          padding:
            0 18px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap: 7px;

          border: none;

          border-radius: 9px;

          background:
            var(--blue);

          color: #fff;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 14px 28px -12px
            rgba(47,95,255,.55);

          transition:
            transform .25s ease;
        }


        .form-row button:hover {
          transform:
            translateY(-2px);
        }


        .arrow {
          font-size: 16px;
        }


        .shine {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(255,255,255,.35) 50%,
              transparent 80%
            );

          transform:
            translateX(-120%);
        }


        .form-row button:hover
        .shine {
          animation:
            sweep .9s ease forwards;
        }


        @keyframes sweep {
          to {
            transform:
              translateX(120%);
          }
        }


        /* ============================================================
           RIGHT AREA
        ============================================================ */

        .right {
          position: relative;

          min-height: 430px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        /* ============================================================
           CIRCLE BASE
        ============================================================ */

        .circle-wrap {
          position: absolute;

          border-radius: 50%;

          animation:
            floatC
            5.5s
            ease-in-out
            infinite;

          z-index: 2;
        }


        .circle-wrap:hover {
          animation-play-state:
            paused;
        }


        @keyframes floatC {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-6px);
          }

        }


        /* ============================================================
           FLIP
        ============================================================ */

        .circle-flip {
          position: relative;

          width: 100%;
          height: 100%;

          transform-style:
            preserve-3d;

          transition:
            transform .65s
            cubic-bezier(
              .22,
              1,
              .36,
              1
            );

          cursor: pointer;
        }


        .circle-wrap:hover
        .circle-flip {
          transform:
            rotateY(180deg);
        }


        .face {
          position: absolute;

          inset: 0;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          padding:
            0 14px;

          border-radius: 50%;

          text-align: center;

          color: #fff;

          backface-visibility:
            hidden;

          -webkit-backface-visibility:
            hidden;
        }


        .face-back {
          transform:
            rotateY(180deg);

          font-size: 10px;

          font-weight: 600;

          line-height: 1.4;

          padding:
            0 14px;
        }


        /* ============================================================
           BASE CIRCLE SIZES
           
           BLUE  = 155px
           VIOLET = 140px
           NAVY = 125px
        ============================================================ */

        .circle-blue {
          width: 140px;
          height: 140px;

          top: 0;
          left: 3%;
        }


        .circle-violet {
          width: 140px;
          height: 140px;

          top: 3%;
          right: 3%;
        }


        .circle-navy {
          width: 125px;
          height: 125px;

          bottom: 0;

          left:
            calc(50% - 62.5px);
        }


        /* ============================================================
           BLUE
        ============================================================ */

        .circle-blue
        .face-front {

          background:
            radial-gradient(
              circle at 32% 26%,
              #6F92FF 0%,
              var(--blue) 55%,
              #1A3FCC 100%
            );

          box-shadow:
            0 20px 35px -14px
            rgba(47,95,255,.5);
        }


        .circle-blue
        .face-back {

          background:
            linear-gradient(
              160deg,
              #1A3FCC,
              #0C1F70
            );

          box-shadow:
            0 20px 35px -14px
            rgba(47,95,255,.55);
        }


        /* ============================================================
           VIOLET
        ============================================================ */

        .circle-violet
        .face-front {

          background:
            radial-gradient(
              circle at 32% 26%,
              #A998FF 0%,
              var(--violet) 55%,
              #5233C7 100%
            );

          box-shadow:
            0 18px 32px -12px
            rgba(124,92,255,.48);
        }


        .circle-violet
        .face-back {

          background:
            linear-gradient(
              160deg,
              #5233C7,
              #2C1A70
            );

          box-shadow:
            0 18px 32px -12px
            rgba(124,92,255,.52);
        }


        /* ============================================================
           NAVY
        ============================================================ */

        .circle-navy
        .face-front {

          background:
            radial-gradient(
              circle at 32% 26%,
              #3A52A8 0%,
              var(--blue-deep) 55%,
              #060F2E 100%
            );

          box-shadow:
            0 18px 32px -12px
            rgba(18,35,92,.5);
        }


        .circle-navy
        .face-back {

          background:
            linear-gradient(
              160deg,
              #12235C,
              #04081C
            );

          box-shadow:
            0 18px 32px -12px
            rgba(18,35,92,.55);
        }


        /* ============================================================
           CIRCLE CONTENT
        ============================================================ */

        .val {
          font-size: 1.65rem;

          font-weight: 900;

          line-height: 1;
        }


        .lbl {
          margin-top: 6px;

          max-width: 88%;

          font-size: 8.5px;

          font-weight: 800;

          line-height: 1.25;

          letter-spacing: .035em;
        }


        .sub {
          margin-top: 3px;

          font-size: 7.5px;

          font-style: italic;

          opacity: .85;
        }


        .circle-navy
        .lbl {
          font-size: 9px;
        }


        /* ============================================================
           TESTIMONIAL
        ============================================================ */

        .testimonial {
          position: relative;

          z-index: 10;

          width: 300px;

          max-width: 70vw;

          padding:
            17px
            18px
            14px;

          background: #fff;

          border:
            1px solid transparent;

          border-radius: 13px;

          box-shadow:
            0 24px 45px -20px
            rgba(15,23,42,.24);

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }


        .testimonial:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 32px 52px -18px
            rgba(15,23,42,.3);

          border-color:
            rgba(47,95,255,.18);
        }


        .quote {
          margin: 0 0 10px;

          font-size: 12px;

          font-weight: 600;

          line-height: 1.5;
        }


        .reviewer {
          display: flex;

          align-items: center;

          gap: 7px;

          padding-bottom: 8px;

          margin-bottom: 8px;

          border-bottom:
            1px solid #EEF1F8;
        }


        .avatar {
          width: 25px;
          height: 25px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              var(--blue),
              var(--violet)
            );

          color: #fff;

          font-size: 10px;

          font-weight: 800;
        }


        .reviewer span {
          font-size: 10.5px;

          font-weight: 600;

          color: var(--muted);
        }


        .rating {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-top: 4px;

          font-size: 10px;

          font-weight: 600;

          color: var(--muted);
        }


        .stars {
          color: #F5A623;

          letter-spacing: 1px;

          opacity: 0;

          transition:
            opacity .4s ease;
        }


        .stars.in {
          opacity: 1;
        }


        /* ============================================================
           SM — 640px
        ============================================================ */

        @media (min-width: 640px) {

          .igr-results-hero {
            padding:
              50px 5vw;
          }


          .wrap {
            grid-template-columns:
              1fr;
          }


          .right {
            min-height: 470px;
          }


          .circle-blue {
            width: 150px;
            height: 150px;

            top: 0;
            left: 7%;
          }


          .circle-violet {
            width: 135px;
            height: 135px;

            top: 2%;
            right: 7%;
          }


          .circle-navy {
            width: 120px;
            height: 120px;

            bottom: 0;

            left:
              calc(50% - 60px);
          }


          .val {
            font-size: 1.55rem;
          }


          .lbl {
            font-size: 8px;
          }


          .sub {
            font-size: 7px;
          }


          .face-back {
            font-size: 9px;

            padding:
              0 12px;
          }


          .testimonial {
            width: 285px;
          }

        }


        /* ============================================================
           MD — 768px
        ============================================================ */

        @media (min-width: 768px) {

          .igr-results-hero {
            padding:
              55px 6vw;
          }


          .right {
            min-height: 500px;
          }


          .circle-blue {
            width: 160px;
            height: 160px;

            top: 0;
            left: 9%;
          }


          .circle-violet {
            width: 145px;
            height: 145px;

            top: 2%;
            right: 9%;
          }


          .circle-navy {
            width: 125px;
            height: 125px;

            bottom: 0;

            left:
              calc(50% - 62.5px);
          }


          .val {
            font-size: 1.6rem;
          }


          .lbl {
            font-size: 8.5px;
          }


          .sub {
            font-size: 7.5px;
          }


          .face-back {
            font-size: 9.5px;
          }


          .testimonial {
            width: 295px;
          }

        }


        /* ============================================================
           LG — 1024px
        ============================================================ */

        @media (min-width: 1024px) {

          .igr-results-hero {

            min-height: 70vh;

            padding:
              35px 4vw;
          }


          .wrap {

            grid-template-columns:
              45% 55%;

            max-width:
              1320px;

            gap:
              20px;
          }


          h1 {
            font-size:
              2.35rem;
          }


          .desc {
            font-size:
              12.8px;

            max-width:
              490px;
          }


          .right {
            min-height:
              410px;
          }


          .circle-blue {

            width:
              160px;

            height:
              160px;

            top:
              0;

            left:
              2%;
          }


          .circle-violet {

            width:
              145px;

            height:
              145px;

            top:
              2%;

            right:
              2%;
          }


          .circle-navy {

            width:
              125px;

            height:
              125px;

            bottom:
              200px;



            left:
              calc(50% - 62.5px);
          }


          .val {
            font-size:
              1.65rem;
          }


          .lbl {
            font-size:
              8.5px;
          }


          .sub {
            font-size:
              7.5px;
          }


          .face-back {
            font-size:
              9.5px;
          }


          .testimonial {

            width:
              275px;

            padding:
              16px
              17px
              14px;
          }


          .quote {
            font-size:
              11.5px;
          }


          .reviewer span {
            font-size:
              10px;
          }


          .rating {
            font-size:
              9.5px;
          }

        }


        /* ============================================================
           XL — 1280px
        ============================================================ */

        @media (min-width: 1280px) {

          .igr-results-hero {

            min-height:
              70vh;

            padding:
              38px 5vw;
          }


          .wrap {

            max-width:
              1420px;

            grid-template-columns:
              44% 56%;

            gap:
              25px;
          }


          h1 {
            font-size:
              2.55rem;
          }


          .desc {
            font-size:
              13.5px;

            max-width:
              540px;
          }


          .right {
            min-height:
              430px;
          }


          .circle-blue {

            width:
              175px;

            height:
              175px;

            top:
              0;

            left:
              3%;
          }


          .circle-violet {

            width:
              160px;

            height:
              160px;

            top:
              2%;

            right:
              3%;
          }


          .circle-navy {

            width:
              140px;

            height:
              140px;

            bottom:
              0;

            left:
              calc(50% - 70px);
          }


          .val {
            font-size:
              1.8rem;
          }


          .lbl {
            font-size:
              9px;
          }


          .sub {
            font-size:
              8px;
          }


          .face-back {
            font-size:
              10px;

            padding:
              0 14px;
          }


          .testimonial {
            width:
              300px;
          }

        }


        /* ============================================================
           2XL — 1536px
        ============================================================ */

        @media (min-width: 1536px) {

          .igr-results-hero {

            min-height:
              70vh;

            padding:
              40px 6vw;
          }


          .wrap {

            max-width:
              1500px;

            grid-template-columns:
              45% 55%;

            gap:
              30px;
          }


          h1 {

            max-width:
              650px;

            font-size:
              2.65rem;
          }


          .desc {

            max-width:
              560px;

            font-size:
              13.8px;
          }


          .right {
            min-height:
              450px;
          }


          .circle-blue {

            width:
              185px;

            height:
              185px;

            top:
              0;

            left:
              3%;
          }


          .circle-violet {

            width:
              170px;

            height:
              170px;

            top:
              2%;

            right:
              3%;
          }


          .circle-navy {

            width:
              150px;

            height:
              150px;

            bottom:
              0;

            left:
              calc(50% - 75px);
          }


          .val {
            font-size:
              1.9rem;
          }


          .lbl {
            font-size:
              9.5px;
          }


          .sub {
            font-size:
              8.5px;
          }


          .face-back {

            font-size:
              10.5px;

            line-height:
              1.45;

            padding:
              0 16px;
          }


          .testimonial {

            width:
              315px;

            padding:
              18px
              19px
              15px;
          }


          .quote {
            font-size:
              12px;
          }

        }


        /* ============================================================
           MOBILE — BELOW 640px
        ============================================================ */

        @media (max-width: 639px) {

          .igr-results-hero {

            min-height:
              auto;

            padding:
              50px
              18px
              40px;
          }


          .eyebrow {
            font-size:
              9px;
          }


          h1 {

            font-size:
              1.9rem;

            line-height:
              1.1;

            margin-bottom:
              13px;
          }


          .desc {

            font-size:
              12.5px;

            line-height:
              1.6;

            margin-bottom:
              19px;
          }


          .form-row {
            flex-direction:
              column;
          }


          .form-row input,
          .form-row button {
            width:
              100%;
          }


          .right {

            min-height:
              440px;

            padding-top:
              25px;
          }


          /* BLUE */

          .circle-blue {

            width:
              115px;

            height:
              115px;

            top:
              0;

            left:
              -2px;
          }


          /* VIOLET */

          .circle-violet {

            width:
              105px;

            height:
              105px;

            top:
              5px;

            right:
              -2px;
          }


          /* NAVY */

          .circle-navy {

            width:
              95px;

            height:
              95px;

            bottom:
              0;

            left:
              calc(50% - 47.5px);
          }


          .val {

            font-size:
              1.25rem;
          }


          .lbl {

            font-size:
              7px;

            line-height:
              1.2;
          }


          .sub {

            font-size:
              6.5px;
          }


          .face {

            padding:
              0 9px;
          }


          .face-back {

            font-size:
              7.5px;

            line-height:
              1.3;

            padding:
              0 9px;
          }


          .testimonial {

            width:
              100%;

            max-width:
              280px;

            padding:
              14px;
          }


          .quote {
            font-size:
              11px;
          }


          .reviewer span {
            font-size:
              10px;
          }


          .rating {
            font-size:
              9px;
          }

        }


        /* ============================================================
           VERY SMALL MOBILE — 480px
        ============================================================ */

        @media (max-width: 480px) {

          .right {

            min-height:
              400px;
          }


          .circle-blue {

            width:
              105px;

            height:
              105px;
          }


          .circle-violet {

            width:
              96px;

            height:
              96px;
          }


          .circle-navy {

            width:
              88px;

            height:
              88px;

            left:
              calc(50% - 44px);
          }


          .val {

            font-size:
              1.1rem;
          }


          .lbl {

            font-size:
              6.5px;
          }


          .sub {

            font-size:
              6px;
          }


          .face {

            padding:
              0 7px;
          }


          .face-back {

            font-size:
              7px;

            padding:
              0 7px;
          }


          .testimonial {

            max-width:
              260px;

            padding:
              13px;
          }

        }


        /* ============================================================
           REDUCED MOTION
        ============================================================ */

        @media (prefers-reduced-motion: reduce) {

          .igr-results-hero * {

            animation:
              none !important;

            transition:
              none !important;

            opacity:
              1 !important;

            transform:
              none !important;
          }

        }

      `}</style>
    </section>
  );
}