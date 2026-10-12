import Link from "next/link";

export type TeamCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  className?: string;
};

export type TeamAboutProps = {
  eyebrow?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  cards?: TeamCard[];
  footerTitle?: string;
  footerDescription?: string;
  ctaText?: string;
  ctaHref?: string;
};

const defaultTeamCards: TeamCard[] = [
  {
    eyebrow: "Strategy",
    title: "Ideas that start with understanding.",
    description:
      "We begin by understanding your business, audience and goals before building a digital growth strategy.",
    image: "/images/team/strategy.jpg",
    className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
  },
  {
    eyebrow: "Creative",
    title: "Creativity with a purpose.",
    description:
      "Design and storytelling come together to create digital experiences that people remember.",
    image: "/images/team/creative.jpg",
    className: "lg:col-span-3 min-h-[270px]",
  },
  {
    eyebrow: "Technology & AI",
    title: "Technology that moves faster.",
    description:
      "We use modern technology, automation and AI to make digital growth smarter and more scalable.",
    image: "/images/team/technology.jpg",
    className: "lg:col-span-4 min-h-[270px]",
  },
  {
    eyebrow: "Performance",
    title: "Every decision backed by data.",
    description:
      "From search to paid media, we measure what matters and continuously improve performance.",
    image: "/images/team/performance.jpg",
    className: "lg:col-span-4 min-h-[270px]",
  },
  {
    eyebrow: "Collaboration",
    title: "Your goals become our goals.",
    description:
      "We work closely with ambitious brands to turn ideas into meaningful digital growth.",
    image: "/images/team/collaboration.jpg",
    className: "lg:col-span-3 min-h-[270px]",
  },
];

export default function TeamAbout({
  eyebrow = "The People Behind IGR",
  title = "Digital growth is built by",
  highlightText = "people who care.",
  description = "Behind every strategy, campaign and result is a group of people bringing different perspectives to the table. We combine strategy, creativity, technology and data to help ambitious brands move forward.",
  cards = defaultTeamCards,
  footerTitle = "One team. Different perspectives.",
  footerDescription = "Strategy, creativity, technology and performance working together.",
  ctaText = "Meet the people behind IGR",
  ctaHref = "/about",
}: TeamAboutProps = {}) {
  const currentCards = cards && cards.length > 0 ? cards : defaultTeamCards;

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B1120] sm:text-5xl lg:text-6xl">
              {title}
              <span className="block text-slate-400">
                {highlightText}
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[270px]">

          {currentCards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-[28px] ${card.className}`}
            >

              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-105
                "
              />

              {/* BASE OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/35
                  to-black/5
                  transition-opacity
                  duration-500
                  group-hover:from-black/95
                "
              />

              {/* HOVER LIGHT */}
              <div
                className="
                  absolute inset-0
                  bg-white/0
                  transition-colors
                  duration-500
                  group-hover:bg-white/[0.03]
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  p-6 sm:p-7
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:-translate-y-2
                "
              >

                {/* EYEBROW */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {card.eyebrow}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="max-w-xl text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-2
                    max-w-lg
                    text-sm
                    leading-6
                    text-white/65
                    transition-all
                    duration-500
                    sm:max-w-md
                  "
                >
                  {card.description}
                </p>

                {/* ARROW */}
                <div
                  className="
                    mt-5
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-white/25
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:bg-white
                    group-hover:text-[#0B1120]
                  "
                >
                  <span className="text-sm transition-transform duration-500 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-[#0B1120]">
              {footerTitle}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {footerDescription}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              bg-[#0B1120]
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-blue-600
            "
          >
            <span>{ctaText}</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}