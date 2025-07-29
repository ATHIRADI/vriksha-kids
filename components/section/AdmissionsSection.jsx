"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import InfoCard from "../InfoCard";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AdmissionsSection({ data }) {
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
        ".card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.2,
        }
      );

      tl.fromTo(
        ".cta-btn",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 xl:py-32 containerBody text-text-dark bg-primary/80 rounded-xl"
    >
      <div className="w-full flex flex-col items-center justify-center space-y-10">
        <div className="text-center max-w-3xl space-y-4">
          <p className="text-lg md:text-xl font-medium top">{data.subtitle}</p>
          <h2 className="text-4xl font-bold top">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {data.cards.map((item, index) => (
            <InfoCard
              key={index}
              {...item}
              className={`card ${
                index === 1 ? "bg-accent text-tertiary" : "bg-tertiary"
              }`}
            />
          ))}
        </div>

        <Link href={data.href}>
          <Button variant="default" className="cta-btn">
            {data.cta_text}
          </Button>
        </Link>
      </div>
    </section>
  );
}
