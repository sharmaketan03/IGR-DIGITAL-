import { Trophy, Award, Star, Medal, ShieldCheck, Crown, Sparkles, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
 
export type AwardItem = {
  icon: LucideIcon;
  title: string;
  featured?: boolean;
};
 
// NOTE: These are generic placeholder recognitions for IGR Digital.
// Replace title/icon with your own real awards, certifications, or press
// mentions once you have them — never claim a recognition you haven't
// actually received, and only use a publication's real logo if they have
// genuinely featured you (check their brand-usage guidelines first).
 const awardsContent = {
  eyebrow: "Recognition & Awards",
  headlinePlain: "Recognized as a Leading",
  headlineHighlight: "Digital Marketing Agency",
  description:
    "IGR Digital is proud to be recognized for the results we deliver. These distinctions reflect our team's diligence, effective strategies, and consistent ability to help brands grow through SEO, paid media, and performance-driven digital marketing.",
  awards: [
    { icon: Trophy, title: "Best Digital Marketing Company" },
    { icon: Award, title: "Top Digital Marketing Agency" },
    { icon: Star, title: "Excellence in SEO Services" },
    { icon: Medal, title: "Top-Rated Growth Partner" },
    { icon: ShieldCheck, title: "Trusted Marketing Consultant" },
    { icon: Crown, title: "Best Digital Agency, Client Choice" },
    { icon: Globe, title: "Top Digital Marketing Experts" },
    { icon: Sparkles, title: "Best SEO Company", featured: true },
  ] as AwardItem[],
};
export default awardsContent;
 