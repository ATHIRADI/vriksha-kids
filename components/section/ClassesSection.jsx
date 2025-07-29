"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import Link from "next/link";
import ProgramCard from "../ProgramCard";

gsap.registerPlugin(ScrollTrigger);
export default function ClassesSection({ data }) {
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
      className="pt-8 xl:pt-16 pb-12 xl:pb-32 containerBody flex justify-center flex-col items-center space-y-6 top"
    >
      <div className="max-w-4xl left">
        <SectionTitle
          title={data.title}
          subtitle={data.subtitle}
          className="h5 mb-6"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 containerBody right">
        {data.programs.map((item, id) => (
          <ProgramCard key={id} {...item} />
        ))}
      </div>
      <Link className="below" href={data.href}>
        <Button>{data.cta_text}</Button>
      </Link>
    </section>
  );
}
