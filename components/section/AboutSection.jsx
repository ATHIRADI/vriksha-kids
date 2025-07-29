"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ data, homePage, className }) {
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
      className={`pb-16 xl:pb-32 containerBody text-text-dark top ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 gap-4 ">
        <div className="w-full h-full mb-4 md:mb-0 left">
          <Image
            src={data.image}
            alt={data.image}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="right w-full space-y-4 flex flex-col justify-center">
          <SectionTitle
            title={data.title}
            subtitle={data.subtitle}
            className="text-start top space-y-6 mb-6"
          />
          <p>{data.description}</p>

          {homePage ? (
            <div>
              <Link href={data.href}>
                <Button>{data.cta_text}</Button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
