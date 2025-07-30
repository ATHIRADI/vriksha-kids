"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import StatSection from "./StatSection";

gsap.registerPlugin(ScrollTrigger);

export default function WhyEducationSection({ data, className }) {
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
    <section
      ref={sectionRef}
      className={`containerBody text-text-dark top ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:my-12 gap-4">
        <div className="w-full space-y-6 flex flex-col justify-center">
          <SectionTitle title={data.title} className="text-start left" />
          <p>{data.description}</p>
          <StatSection data={data.statistics} />
        </div>

        <div className="mb-4 md:mb-0 flex flex-col justify-center items-center right">
          <div className="w-full h-full left mb-4 md:mb-0 ">
            <Image
              src={data.image}
              alt={data.image}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
