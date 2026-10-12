import Link from "next/link";

type PricingPlan = {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
};

type PricingSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  plans: PricingPlan[];
};

export default function PricingSection({
  eyebrow = "Pricing",
  title = "Simple pricing. Built around your growth.",
  description = "Choose a plan that fits your current goals, or talk to our team for a custom strategy tailored to your business.",
  plans,
}: PricingSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600">
            {eyebrow}
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className={`mx-auto mt-14 grid max-w-6xl gap-6 ${plans.length === 1
              ? "max-w-xl"
              : plans.length === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-3"
            }`}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${plan.popular
                  ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                  : "border-slate-200 bg-white"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-950">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-slate-950"
                  }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <span
                  className={`text-4xl font-bold tracking-tight sm:text-5xl ${plan.popular ? "text-white" : "text-slate-950"
                    }`}
                >
                  {plan.price || "Custom"}
                </span>

                {plan.period && (
                  <span
                    className={`mb-1 text-sm ${plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className={`mt-4 min-h-[72px] text-sm leading-6 ${plan.popular ? "text-slate-300" : "text-slate-600"
                  }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <div className="my-7 h-px bg-current opacity-10" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-900"
                        }`}
                    >
                      ✓
                    </span>

                    <span
                      className={
                        plan.popular
                          ? "text-slate-200"
                          : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <Link
                  href={plan.ctaHref || "/contact"}
                  className={`flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${plan.popular
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                >
                  {plan.ctaText || "Get Started"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Need something different?{" "}
          <Link
            href="/contact"
            className="font-medium text-slate-950 underline underline-offset-4"
          >
            Talk to our team for a custom quote.
          </Link>
        </p>
      </div>
    </section>
  );
}