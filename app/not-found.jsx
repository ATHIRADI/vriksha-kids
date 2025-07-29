"use client";
import ParallaxSection from "@/components/effect/ParallaxSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function NotFound() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -100, opacity: 0 },
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
    <main className="relative">
      <ParallaxSection image="/images/contact/2.jpg" />
      <section
        ref={sectionRef}
        className="py-12 h-screen containerBody flex flex-col justify-center items-center  text-effect"
      >
        <SectionTitle
          title="Page Not Found"
          subtitle="404"
          className="text-effect top"
        />
        <Link href="/">
          <Button className="mt-12 top" variant="outline">
            Visit Home
          </Button>
        </Link>
      </section>
      <div className="absolute z-20 bottom-0 left-0 w-full">
        <Image
          src="/effects/footer-curve.svg"
          alt="Footer Wave"
          width={1440}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
