"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Marquee({
  children,
  direction = "left",
  speed,
  className = "",
}) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Reset GSAP if already running
    gsap.killTweensOf(marquee);

    gsap.set(marquee, { xPercent: 0 });

    gsap.to(marquee, {
      xPercent: direction === "left" ? -20 : 20, // Only -50 or 50, because we have double content now!
      duration: speed,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-50, 0), // Only wrap between -50 and 0
      },
    });
  }, [direction, speed, children]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        {children}
        {children}
      </div>
    </div>
  );
}
