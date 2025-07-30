"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import InfoCard from "../InfoCard";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection({ data, className }) {
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
      className="py-16 xl:py-32 containerBody text-text-dark"
    >
      <div className="my-12 top">
        <div className="w-full space-y-6 flex flex-col justify-center">
          <SectionTitle title={data.title} className="text-start right" />
          <p>{data.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.cards.map((item, index) => (
                <InfoCard
                  key={index}
                  {...item}
                  className="bg-tertiary  hover:bg-dark hover:text-tertiary"
                  textColor="hover:text-tertiary"
                />
              ))}
            </div>

            <div className="top mb-4 md:mb-0 flex flex-col justify-center items-center">
              <div className="w-full h-full">
                <Image
                  src={data.image}
                  alt={data.image}
                  width={400}
                  height={400}
                  className="w-full shadow-xl h-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
