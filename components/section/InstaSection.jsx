"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import InstaCard from "../InstaCard";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function InstaSection({ data, className }) {
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
        ".left",
        { x: -100, opacity: 0 },
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
        { y: 500, opacity: 0 },
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
      className={`bg-hover-primary py-8 xl:py-16 relative ${className}`}
    >
      <div className="absolute z-0 bottom-0 left-0 w-full">
        <Image
          src="/images/footer-curve.svg"
          alt="Footer Wave"
          width={1440}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="relative z-20 space-y-6 containerBody flex flex-col justify-center items-center xl:pb-32">
        <SectionTitle
          title="Follow our Instagram"
          className="text-text-dark text-start left"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 below ">
          {data.images.map((item, index) => (
            <InstaCard key={index} src={item} />
          ))}
        </div>
        <a href={data.instagram} target="_blank">
          <Button variant="secondary">See More</Button>
        </a>
      </div>
    </section>
  );
}
