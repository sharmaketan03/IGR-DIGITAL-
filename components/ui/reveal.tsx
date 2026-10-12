"use client";
 
import { useEffect, useRef, useState, type ReactNode } from "react";
 
type RevealProps = {
  children: ReactNode;
  /** Delay before the reveal animation starts, in ms. Great for staggering a grid. */
  delayMs?: number;
  /** Extra classes on the wrapping div. */
  className?: string;
};
 
/**
 * Fades + slides an element up into place the first time it scrolls into
 * view. Reusable anywhere — wrap any block, card, or section with it.
 *
 * Usage:
 *   {items.map((item, i) => (
 *     <Reveal key={item.id} delayMs={i * 80}>
 *       <Card {...item} />
 *     </Reveal>
 *   ))}
 */
export default function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
 
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
 