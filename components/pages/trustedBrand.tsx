"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/components/Data/homeData";

type Brand = {
name: string;
logo: string;
};

type TrustedBrandsProps = {
trustedbrands?: {
eyebrow?: string;
headline?: string;
headlineHighlight?: string;
description?: string;
logoHeading?: string;
};
};

/* =========================================================
LOCAL TRUSTED BRAND LOGOS
========================================================= */

const brands: Brand[] = [
{
name: "Acko",
logo: "/trustedLogos/acko.webp",
},
{
name: "Buy Ucoin",
logo: "/trustedLogos/buy-ucoin.webp",
},
{
name: "DesignRush",
logo: "/trustedLogos/designrush.webp",
},
{
name: "Elle",
logo: "/trustedLogos/elle.webp",
},
{
name: "Grand Gateway Hotel",
logo: "/trustedLogos/grand-gatway-hotel.webp",
},
{
name: "Haveli",
logo: "/trustedLogos/haveli.webp",
},
{
name: "Excellent Publicity",
logo: "/trustedLogos/excellent-publicity.webp",
},
{
name: "UK Hair Transplant Clinics",
logo: "/trustedLogos/uk-hair-transplant-clinics.webp",
},
{
name: "Excellent Publicity",
logo: "/trustedLogos/siemens-energy.webp",
},
{
name: "UK Hair Transplant Clinics",
logo: "/trustedLogos/Headmasters.webp",
},

{
name: "UK Hair Transplant Clinics",
logo: "/trustedLogos/unify-healthcare-services.webp",
},

{
name: "UK Hair Transplant Clinics",
logo: "/trustedLogos/royez.webp",
},
];

export default function TrustedBrands({
trustedbrands = siteContent.tustedBrands,
}: TrustedBrandsProps) {
return ( <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-10 bg-white">


  {/* =====================================================
      MAIN CONTAINER
  ===================================================== */}

  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ===================================================
        HEADER
    =================================================== */}

    <div className="mx-auto max-w-3xl text-center">

      {/* Heading */}

      <h2
        className="
          font-sans
          text-4xl
          font-bold
          leading-[1.08]
          tracking-[-0.04em]
          text-[#0b1120]
          sm:text-5xl
          lg:text-6xl
        "
      >
        {trustedbrands?.headline || "Built with ambitious"}{" "}
        <span>
          {trustedbrands?.headlineHighlight || "brands."}
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-[#64748b]
          sm:text-lg
        "
      >
        {trustedbrands?.description ||
          "We partner with ambitious businesses to build visibility, generate qualified demand and create measurable, long-term growth."}
      </p>
    </div>

    {/* ===================================================
        LOGO SHOWCASE
    =================================================== */}

    <div className="mx-auto mt-14 max-w-6xl sm:mt-16">

      {/* Logo Heading */}

      <div className="mb-8 text-center">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#64748b]/80
          "
        >
          {trustedbrands?.logoHeading ||
            "Businesses we've worked with & inspired by"}
        </p>
      </div>

      {/* =================================================
          LOGO GRID
      ================================================= */}

      <div
        className="
          overflow-hidden
          border
          border-[#e2e8f0]
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.05)]
        "
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={`
                group
                flex
                h-28
                items-center
                justify-center
                border-[#e2e8f0]/80
                px-5
                transition-all
                duration-300
                hover:bg-white
                sm:h-32

                ${index % 2 === 0 ? "border-r" : ""}

                ${index < 6 ? "border-b" : ""}

                lg:border-r

                ${
                  index % 4 === 3
                    ? "lg:border-r-0"
                    : ""
                }

                ${
                  index >= 4
                    ? "lg:border-b-0"
                    : ""
                }
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

             <div className="flex h-24 w-60 items-center justify-center sm:h-28 sm:w-72">
  <Image
  src={brand.logo}
  alt={`${brand.name} logo`}
  width={280}
  height={112}
  className="
    block
    h-auto
    max-h-24
    w-auto
    max-w-full
    object-cover
   
 
  "
/>
</div>

         

            </div>
          ))}

        </div>
      </div>
    </div>

    {/* ===================================================
        CTA
    =================================================== */}

    <div className="mt-10 flex justify-center sm:mt-12">

      <a
        href="#case-studies"
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#34a853]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_8px_24px_rgba(52,168,83,0.18)]
          transition-all
          duration-300
          hover:bg-[#2d9147]
          hover:shadow-[0_12px_30px_rgba(52,168,83,0.24)]
          active:scale-[0.98]
        "
      >
        Explore our work

        <ArrowUpRight
          size={17}
          strokeWidth={2.2}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />

      </a>

    </div>

  </div>

</section>


);
}
