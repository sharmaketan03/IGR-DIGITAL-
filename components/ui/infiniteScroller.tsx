"use client";
 
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";
 
export type InfiniteScrollerHandle = {
  /** Manually glide one step forward (content moves left). */
  scrollNext: () => void;
  /** Manually glide one step backward (content moves right). */
  scrollPrev: () => void;
};
 
type ScrollerProps = {
  /** Items to display, in order — a single set (not duplicated). */
  items: ReactNode[];
  /** Seconds for one smooth glide between steps. Default 1.1. */
  glideSeconds?: number;
  /** Pause (ms) after each intermediate step, showing that "row". Default 900. */
  pauseBetweenMs?: number;
  /** Pause (ms) once it reaches the very end. Default 1200. */
  pauseAtEndMs?: number;
  /** Pause (ms) once it's glided back to the very start. Default 900. */
  pauseAtStartMs?: number;
  /** Auto-play the step → pause → step → ... → end → back-to-start cycle. Default true. */
  autoPlay?: boolean;
  /** Pause auto-play while the user hovers over it. Default true. */
  pauseOnHover?: boolean;
  /**
   * Px moved per step (auto or manual arrow click).
   * If NOT provided, the scroller automatically steps by exactly
   * ONE item's width (+ gap) at a time — i.e. one box per step.
   */
  step?: number;
  gapClassName?: string;
  itemClassName?: string;
  className?: string;
};
 
/**
 * Step-paged auto-scrolling strip: shows a row of items, pauses, glides
 * smoothly ONE BOX at a time to the next item, pauses again — repeating
 * until it reaches the end, then glides smoothly all the way back to the
 * start and repeats.
 *
 * Usage:
 *   const scrollerRef = useRef<InfiniteScrollerHandle>(null);
 *   <InfiniteScroller ref={scrollerRef} items={...} itemClassName="w-[27%]" />
 *   <button onClick={() => scrollerRef.current?.scrollPrev()}>‹</button>
 *   <button onClick={() => scrollerRef.current?.scrollNext()}>›</button>
 */
const InfiniteScroller = forwardRef<InfiniteScrollerHandle, ScrollerProps>(
  function InfiniteScroller(
    {
      items,
      glideSeconds = 1.1,
      pauseBetweenMs = 900,
      pauseAtEndMs = 1200,
      pauseAtStartMs = 900,
      autoPlay = true,
      pauseOnHover = true,
      step,
      gapClassName = "gap-4",
      itemClassName = "",
      className = "",
    },
    ref
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    // Ref to the FIRST item so we can measure exactly one box's width.
    const firstItemRef = useRef<HTMLDivElement>(null);
 
    const [distance, setDistance] = useState(0);
    const [position, setPosition] = useState(0);
    // Measured width of a single item, including the gap after it.
    const [itemStep, setItemStep] = useState(0);
 
    const positionRef = useRef(0);
    const pausedRef = useRef(false);
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const cycleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
 
    const setPos = (p: number) => {
      positionRef.current = p;
      setPosition(p);
    };
 
    // Measure how far the track overflows its container, AND the width
    // of a single item (+ gap) so we can step exactly one box at a time.
    useEffect(() => {
      const measure = () => {
        if (!containerRef.current || !trackRef.current) return;
        const diff =
          trackRef.current.scrollWidth - containerRef.current.clientWidth;
        setDistance(diff > 0 ? diff : 0);
 
        if (firstItemRef.current) {
          const firstRect = firstItemRef.current.getBoundingClientRect();
          const children = trackRef.current.children;
          if (children.length > 1) {
            // Distance between the start of item 1 and start of item 2
            // = item width + gap. This is exactly one "box step".
            const secondRect = (
              children[1] as HTMLElement
            ).getBoundingClientRect();
            setItemStep(secondRect.left - firstRect.left);
          } else {
            setItemStep(firstRect.width);
          }
        }
      };
      measure();
      const ro = new ResizeObserver(measure);
      if (containerRef.current) ro.observe(containerRef.current);
      if (trackRef.current) ro.observe(trackRef.current);
      window.addEventListener("resize", measure);
      return () => {
        ro.disconnect();
        window.removeEventListener("resize", measure);
      };
    }, [items]);
 
    // Auto-play: step forward ONE BOX at a time, pausing between each,
    // then once at the end, glide straight back to the start and repeat.
    useEffect(() => {
      if (!autoPlay || distance <= 0 || !containerRef.current) return;
      if (!step && itemStep <= 0) return; // wait until we've measured a box
      let cancelled = false;
      const stepPx = step ?? itemStep;
      setPos(0);
 
      const scheduleNext = (delayMs: number, fn: () => void) => {
        cycleTimer.current = setTimeout(() => {
          if (cancelled) return;
          if (pausedRef.current) {
            scheduleNext(250, fn);
            return;
          }
          fn();
        }, delayMs);
      };
 
      const tick = () => {
        const current = positionRef.current;
        const next = current - stepPx;
 
        if (next <= -distance) {
          // Land exactly at the end, hold, then glide all the way back.
          setPos(-distance);
          scheduleNext(glideSeconds * 1000 + pauseAtEndMs, () => {
            setPos(0);
            scheduleNext(glideSeconds * 1000 + pauseAtStartMs, tick);
          });
        } else {
          setPos(next);
          scheduleNext(glideSeconds * 1000 + pauseBetweenMs, tick);
        }
      };
 
      // Show the first box, then begin stepping.
      scheduleNext(pauseBetweenMs, tick);
 
      return () => {
        cancelled = true;
        if (cycleTimer.current) clearTimeout(cycleTimer.current);
      };
    }, [
      distance,
      autoPlay,
      glideSeconds,
      pauseBetweenMs,
      pauseAtEndMs,
      pauseAtStartMs,
      step,
      itemStep,
    ]);
 
    const pauseAutoplayBriefly = () => {
      pausedRef.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => {
        pausedRef.current = false;
      }, 4000);
    };
 
    const manualMove = (dir: 1 | -1) => {
      if (distance <= 0 || !containerRef.current) return;
      const stepPx = step ?? itemStep ?? containerRef.current.clientWidth * 0.9;
      const next = Math.min(
        0,
        Math.max(-distance, positionRef.current - dir * stepPx)
      );
      setPos(next);
      pauseAutoplayBriefly();
    };
 
    useImperativeHandle(ref, () => ({
      scrollNext: () => manualMove(1),
      scrollPrev: () => manualMove(-1),
    }));
 
    return (
      <div
        ref={containerRef}
        className={`overflow-hidden ${className}`}
        onMouseEnter={() => pauseOnHover && (pausedRef.current = true)}
        onMouseLeave={() => pauseOnHover && (pausedRef.current = false)}
      >
        <div
          ref={trackRef}
          className={`flex  ${gapClassName}`}
          style={{
            transform: `translateX(${position}px)`,
            transition: `transform ${glideSeconds}s cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              ref={i === 0 ? firstItemRef : undefined}
              className={`shrink-0 ${itemClassName}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
 
export default InfiniteScroller;