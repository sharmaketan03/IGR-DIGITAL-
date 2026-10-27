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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    className: "lg:col-span-5 lg:row-span-2 min-h-[560px]",
  },
  {
    eyebrow: "Creative",
    title: "Creativity with a purpose.",
    description:
      "Design and storytelling come together to create digital experiences that people remember.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-3 min-h-[270px]",
  },
  {
    eyebrow: "Technology & AI",
    title: "Technology that moves faster.",
    description:
      "We use modern technology, automation and AI to make digital growth smarter and more scalable.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-4 min-h-[270px]",
  },
  {
    eyebrow: "Performance",
    title: "Every decision backed by data.",
    description:
      "From search to paid media, we measure what matters and continuously improve performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    className: "lg:col-span-4 min-h-[270px]",
  },
  {
    eyebrow: "Collaboration",
    title: "Your goals become our goals.",
    description:
      "We work closely with ambitious brands to turn ideas into meaningful digital growth.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
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
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-14 mx-auto max-w-3xl text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-blue-600" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0B1120] sm:text-5xl lg:text-6xl text-center">
            {title}{" "}
            <span className="block text-slate-400">
              {highlightText}
            </span>
          </h2>

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg text-center">
              {description}
            </p>
          )}
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
                  via-black/40
                  to-transparent
                  opacity-60
                  transition-opacity
                  duration-500
                  group-hover:opacity-95
                "
              />

              {/* HOVER LIGHT */}
              <div
                className="
                  absolute inset-0
                  bg-white/0
                  transition-colors
                  duration-500
                  group-hover:bg-white/[0.04]
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  p-6 sm:p-7
                  flex flex-col justify-end
                "
              >
                {/* EYEBROW BADGE - ALWAYS VISIBLE AT BOTTOM, MOVES UP SLIGHTLY ON HOVER */}
                <div className="mb-2 flex items-center justify-between transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                      {card.eyebrow}
                    </span>
                  </div>

                  <div
                    className="
                      flex h-8 w-8
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
                    <span className="text-xs transition-transform duration-500 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </div>

                {/* SLIDE-UP CONTENT CONTAINER: Hidden by default, slides up smoothly on hover */}
                <div
                  className="
                    max-h-0
                    opacity-0
                    translate-y-8
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:max-h-[380px]
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:pt-2
                  "
                >
                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-white">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-2.5
                      text-xs sm:text-sm
                      leading-relaxed
                      text-white/80
                      font-normal
                      whitespace-pre-line
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-16 sm:mt-20 flex flex-col gap-6 border-t border-slate-200 pt-10 sm:pt-12 sm:flex-row sm:items-center sm:justify-between">

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