"use client";
import { gsap } from "gsap";
import React, { useRef } from "react";
import Image from "next/image";

export default function CurriculumCard({ icon, title, ageGroup }) {
  const curriculumCard = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(curriculumCard.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(curriculumCard.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={curriculumCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl px-2 rounded-md py-5"
    >
      <div className="w-24 h-24 mb-3">
        <Image
          src={icon}
          alt={title}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      <h4 className="h5">{title}</h4>
      <p className="text-text-dark body-bold">{ageGroup}</p>
    </div>
  );
}
