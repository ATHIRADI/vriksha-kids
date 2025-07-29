"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun } from "lucide-react";
import React, { useLayoutEffect, useRef } from "react";
import Marquee from "../Marquee";

const repeatContent = Array(20).fill(0);
gsap.registerPlugin(ScrollTrigger);

export default function MarqueeScrollSection({ data, className, children }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
      tl.fromTo(
        ".below",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${className} top`}>
      <Marquee
        direction="right"
        speed={20}
        className="bg-effect py-4 text-tertiary left"
      >
        {repeatContent.map((_, index) => (
          <div key={index} className="flex items-center gap-2 mx-5 h5 ">
            <Sun className="size-6 me-8" />
            <span className="me-8">{data.first}</span>
          </div>
        ))}
      </Marquee>
      {children}
      <Marquee
        direction="left"
        speed={20}
        className="bg-dark py-4 text-tertiary right"
      >
        {repeatContent.map((_, index) => (
          <div key={index} className="flex items-center gap-2 mx-5 h5">
            <Sun className="size-6 me-8" />
            <span className="me-8">{data.second}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
