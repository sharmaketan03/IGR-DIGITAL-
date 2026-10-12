import React from "react";

export type AdvancePerkItem = {
  title: string;
  description: string;
  icon?: string;
  highlightLinkText?: string;
  highlightLinkHref?: string;
};

export type AdvancePerksSectionProps = {
  eyebrow?: string;
  headlineLine1?: string;
  headlineHighlight?: string;
  headlineLine2?: string;
  description?: string;
  items?: AdvancePerkItem[];
  containerClassName?: string;
};

export const DEFAULT_ADVANCE_PERKS: AdvancePerkItem[] = [
  {
    title: "Programmatic Advertising Services",
    icon: "📊",
    description:
      "We use programmatic advertising to automate the ad-buying process. This means your ads get displayed across the right platforms, at the right time, and in front of the right audience—all powered by data and AI. It saves you time, avoids guesswork, and helps you scale faster. Whether you're targeting desktop, mobile, video, or display, we ensure every impression counts.",
  },
  {
    title: "Bidding & Budget Management",
    icon: "📋",
    description:
      "Every campaign we run is backed by smart bidding strategies. We don't let your money go to waste. Instead, we continuously monitor bids, adjust budgets, and fine-tune performance to get the best return. Whether it's manual or automated bidding, our goal is always the same—maximize results with minimum spend.",
  },
  {
    title: "Geofencing Ad Services",
    icon: "💡",
    description:
      "Want to attract local customers or event visitors? We build geofencing campaigns that target users within a specific location radius. So, if someone walks by your store or visits your competitor, your ad shows up on their mobile device. It's a powerful way to drive foot traffic and get more in-person conversions.",
  },
  {
    title: "Remarketing Services",
    icon: "🔄",
    description:
      "A lot of people visit your site but leave without taking action. That's where remarketing comes in. We show them personalized ads across websites, apps, and social media to bring them back to your site. These ads remind them why they visited you in the first place—and give them a gentle push to return and convert.",
  },
  {
    title: "Landing Page Optimization",
    icon: "🎯",
    description:
      "Even the best ads can fail if the landing page isn't right. That's why we optimize your pages with our dedicated CRO team to match user intent, improve speed, and drive conversions. From catchy headlines to strong call-to-actions, every element is tested and tailored to keep users engaged and get them to take the next step.",
  },
  {
    title: "Ad Creatives",
    icon: "🎨",
    description:
      "Visuals and messaging make or break an ad. Our creative team builds high-quality graphics, videos, and ad copy that actually get noticed. We test different versions to see what clicks with your audience and use performance data to keep improving the results. Your ads will look good—and perform even better.",
  },
  {
    title: "Full Funnel ROI Tracking",
    icon: "📈",
    description:
      "We don't stop at just tracking clicks. We set up full-funnel tracking that maps out your customer journey—from the first ad view to final purchase or inquiry. You'll get clear insights into what's working, what's not, and where to optimize next. With our reporting, you always know how your money is being spent and how much it's bringing back.",
  },
  {
    title: "A/B Testing & Ad Experimentation",
    icon: "🧪",
    description:
      "We don't rely on guesswork—we test everything. Our team runs A/B tests on headlines, visuals, CTAs, and even landing pages to see what works best. These small experiments help us find winning combinations that lead to more clicks, better engagement, and higher conversions. With continuous testing, your campaigns stay fresh and effective.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    icon: "⚡",
    description:
      "Getting traffic is great, but turning visitors into customers is even better with conversion rate optimization. We analyze user behavior, remove friction points, and optimize the entire user journey. Whether it's tweaking forms, improving mobile responsiveness, or adjusting call-to-actions, we make sure your site turns interest into action. That's how we help you get more value from every click.",
  },
];

export default function AdvancePerksSection({
  headlineLine1 = "Advance Advertising",
  headlineHighlight = "Perk That You Get From",
  headlineLine2 = "Our Digital Growth Agency",
  description = "We don't just hit 'publish' on your campaigns and walk away. We believe in full-service management that covers everything—from planning your campaign to tracking every result. You won't have to sit and wonder if your ad budget is working. We're all about performance. Our strategies are tested, refined, and made to deliver real results that help your business grow. Here's a closer look at what you get:",
  items = DEFAULT_ADVANCE_PERKS,
  containerClassName = "",
}: AdvancePerksSectionProps) {
  return (
    <section className={`py-20 lg:py-28 bg-[#FFFFFF] font-sans ${containerClassName}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] leading-tight text-[#0B1120]">
            <span>{headlineLine1}</span>{" "}
            <span>{headlineHighlight}</span>
            <br />
            <span>{headlineLine2}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#475569] font-normal">
            {description}
          </p>
        </div>

        {/* 3x3 Grid Matching Reference Exactly */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-start rounded-2xl bg-[#e5f4fd] p-7 sm:p-8 transition-all duration-200 hover:bg-[#d9effc] hover:-translate-y-1 hover:shadow-md"
              >
                {/* 3D Icon Graphic */}
                {item.icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-2xl shadow-xs transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                )}

                <h3 className="text-lg sm:text-[19px] font-bold text-[#0f172a] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#334155]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
