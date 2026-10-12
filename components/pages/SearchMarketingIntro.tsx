"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SearchMarketingIntro() {
  return (
     <section className="bg-white py-10 sm:py-10 ">
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        {/* ================================
            TRUST / EYEBROW
        ================================= */}

        <div className="mb-7 flex items-center gap-3 sm:mb-8">
          <span className="h-[2px] w-8 bg-google-red sm:w-10" />

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.04em]
              text-ink

              sm:text-base
              lg:text-[16px]
            "
          >
            9 Years of Results
            <span className="mx-2 text-google-red">|</span>
            Trusted by 5,000+ Global Clients
          </p>
        </div>

        {/* ================================
            MAIN HEADING
        ================================= */}

        <h2
          className="
            max-w-[1450px]
           
             !text-[38px]
             text-[#0B1120]
          "
        >
          Your Trusted{" "}
         
            Search Engine Marketing {" "}
       
          <span className="text-[#0B1120]">Partner to Grow Your Business</span>
        </h2>

        {/* ================================
            CONTENT
        ================================= */}

        <div className="mt-12 max-w-[1450px] ">
          {/* Paragraph 1 */}

          <p
            className="
              max-w-[1400px]
              text-base
              leading-[1.75]
              text-ink/75

              sm:text-[16px]
              md:text-[16px]

              !lg:text-[20px]
              lg:leading-[1.7]

              !xl:text-[16px]
              !xxl:text-[20px]
            "
          >
            For over 9 years, we’ve helped ambitious brands grow through
            data-driven Search Engine Marketing and SEO strategies. As a
            performance-focused digital marketing company, we combine SEO,
            paid search, content, and conversion-focused strategies to increase
            visibility, attract qualified traffic, and turn search demand into
            real business growth.
          </p>

          {/* Paragraph 2 */}

          <p
            className="
            max-w-[1400px]
              text-base
              leading-[1.75]
              text-ink/75

              sm:text-[16px]
              md:text-[16px]

              !lg:text-[20px]
              lg:leading-[1.7]

              !xl:text-[16px]
              !xxl:text-[20px]
            "
          >
            We don’t believe in one-size-fits-all marketing. Every strategy is
            built around your business goals, target audience, competition, and
            growth opportunities. Whether you want to rank higher, generate
            qualified leads, increase online sales, or build long-term
            visibility, our experts create a practical roadmap focused on
            measurable results and sustainable ROI.
          </p>

          {/* ================================
              CTA STATEMENT
          ================================= */}

          <p
            className="
              mt-9
              text-xl
              font-bold
              leading-[1.4]
              tracking-[-0.02em]
              text-ink

              sm:mt-10
              sm:text-2xl

              lg:mt-12
              lg:text-[28px]

              xl:text-[30px]
            "
          >
            Ready to turn search visibility into{" "}
            <span className="text-google-red">
              measurable business growth?
            </span>
          </p>

          {/* ================================
              CTA
          ================================= */}

          <div className="mt-10 sm:mt-12">
            <Link
              href="/services/free-audit"
              className="
                group
                inline-flex
                items-center
                gap-3

                rounded-full
                border
                border-google-red/20

                px-2
                py-2
                pr-6

                text-base
                font-medium
                text-google-red

                transition-all
                duration-300

                hover:border-google-red/40
                hover:shadow-[0_10px_35px_rgba(234,67,53,0.12)]

                sm:pr-7
                sm:text-[17px]

                lg:text-[18px]
              "
            >
              {/* Arrow Circle */}

              <span
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-full
                  bg-google-red/5

                  transition-all
                  duration-300

                  group-hover:bg-google-red
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  size={23}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </span>

              <span>
                Get a Free SEO Consultation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}