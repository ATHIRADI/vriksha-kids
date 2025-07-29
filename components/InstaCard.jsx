"use client";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function InstaCard({ link = "#", src }) {
  const sectionRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(sectionRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(sectionRef.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };
  return (
    // <a href={src} target="_blank">
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sectionRef}
      className="h-48 transition-all z-51 duration-300 shadow-xl rounded-md w-full bg-accent"
    >
      <Image
        src={src}
        alt={src}
        width={350}
        height={350}
        className="w-full h-48 rounded-md object-cover"
      />
    </div>
    // </a>
  );
}
