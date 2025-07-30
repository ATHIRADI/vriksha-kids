"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import InfoCard from "../InfoCard";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection({ data }) {
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
          duration: 0.6,
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
          duration: 0.6,
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
          duration: 0.6,
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
      className="py-16 xl:py-32 containerBody text-text-dark top"
    >
      <div className=" w-full space-y-6 flex flex-col items-center justify-center">
        <div className="max-w-3xl space-y-6 ">
          <SectionTitle
            title={data.title}
            subtitle={data.subtitle}
            className="text-center mb-6"
          />
          <p className="">{data.text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {data.cards.map((service, index) => (
            <InfoCard
              key={index}
              {...service}
              className="bg-tertiary min-h-64 hover:bg-dark hover:text-tertiary"
              textColor="hover:text-tertiary"
            />
          ))}
        </div>
        <Link href={data.href}>
          <Button className="below">{data.cta_text}</Button>
        </Link>
      </div>
    </section>
  );
}
