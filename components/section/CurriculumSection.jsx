"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import CurriculumCard from "../CurriculumCard";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function CurriculumSection({ data }) {
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
    <section ref={sectionRef} className="pt-16 xl:pt-32 containerBody top">
      <div className="max-w-4xl mx-auto space-y-6 mb-6 left">
        <SectionTitle
          title={data.title}
          subtitle={data.subtitle}
          className="text-center right"
        />
        <p className="text-center">{data.text}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 containerBody z-51 below">
        {data.curriculums.map((item, id) => (
          <CurriculumCard key={id} {...item} />
        ))}
      </div>
    </section>
  );
}
