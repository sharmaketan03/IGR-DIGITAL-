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
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  plans: PricingPlan[];
  bottomNote?: string;
};

export default function PricingSection({
  id,
  eyebrow = "Pricing",
  title = "Simple pricing. Built around your growth.",
  description = "Choose a plan that fits your current goals, or talk to our team for a custom strategy tailored to your business.",
  plans,
  bottomNote,
}: PricingSectionProps) {
  return (
    <section id={id} className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-surface">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[550px] -translate-x-1/2 rounded-full bg-google-blue/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-google-blue/20 bg-google-blue/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-google-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-google-blue" />
            {eyebrow}
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-2.5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div
          className={`mx-auto mt-10 grid max-w-5xl items-stretch gap-5 sm:gap-6 ${plans.length === 1
              ? "max-w-md"
              : plans.length === 2
                ? "md:grid-cols-2 max-w-3xl"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? "border-2 border-google-blue bg-ink text-white shadow-[0_12px_32px_rgba(66,133,244,0.14)]"
                  : "border border-border bg-white text-ink hover:border-google-blue/40 hover:shadow-lg hover:shadow-slate-100"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-google-blue px-3 py-0.5 text-[11px] font-semibold tracking-wide text-white shadow-md">
                  ★ Most Popular
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className={`text-base font-bold tracking-tight ${plan.popular ? "text-white" : "text-ink"
                      }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="h-2 w-2 rounded-full bg-google-blue animate-pulse" />
                  )}
                </div>

                {/* Price */}
                <div className="mt-3.5 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${plan.popular ? "text-white" : "text-ink"
                      }`}
                  >
                    {plan.price || "Custom"}
                  </span>

                  {plan.period && (
                    <span
                      className={`text-xs font-medium ${plan.popular ? "text-slate-300" : "text-slate-500"
                        }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`mt-2 text-[14px] sm:text-[15px] leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"
                    }`}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className={`my-4 h-px ${plan.popular ? "bg-white/10" : "bg-slate-100"
                    }`}
                />

                {/* Features List */}
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs leading-5"
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${plan.popular
                            ? "bg-google-blue text-white"
                            : "bg-google-blue/10 text-google-blue"
                          }`}
                      >
                        ✓
                      </span>

                      <span
                        className={
                          plan.popular ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  href={plan.ctaHref || "/contact"}
                  className={`flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${plan.popular
                      ? "bg-google-blue text-white shadow-md shadow-google-blue/25 hover:bg-google-blue/90 hover:shadow-google-blue/40"
                      : "bg-ink text-white hover:bg-google-blue shadow-sm"
                    }`}
                >
                  {plan.ctaText || "Get Started"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        {bottomNote ? (
          <p className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            {bottomNote}
          </p>
        ) : (
          <p className="mt-8 text-center text-xs text-slate-500">
            Need something different?{" "}
            <Link
              href="/contact"
              className="font-semibold text-google-blue hover:underline underline-offset-4"
            >
              Talk to our team for a custom quote.
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}