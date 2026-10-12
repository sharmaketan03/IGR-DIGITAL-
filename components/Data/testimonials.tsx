export type Testimonial = {
  name: string;
  role: string;
  // Point these at your real client's video + thumbnail once you have them:
  // e.g. "/videos/testimonials/client-1.mp4" and "/images/testimonials/client-1.jpg"
  videoSrc: string;
  posterSrc?: string;
};
 
export const testimonialsContent = {
  headline: "Clients Recommend Us",
  description:
    "Our digital marketing services have made a real difference for the brands we work with. Hear directly from our clients about how we've helped them grow their online business.",
  // Placeholder client slots — replace name/role/videoSrc/posterSrc with your
  // real clients' details and video files once you have their testimonials
  // and consent to feature them.
  testimonials: [
    { name: "Client Name", role: "Business Owner", videoSrc: "/videos/testimonials/client-1.mp4" },
    { name: "Client Name", role: "Founder, Startup", videoSrc: "/videos/testimonials/client-2.mp4" },
    { name: "Client Name", role: "Marketing Head", videoSrc: "/videos/testimonials/client-3.mp4" },
    { name: "Client Name", role: "E-commerce Brand", videoSrc: "/videos/testimonials/client-4.mp4" },
  ] as Testimonial[],
};
 