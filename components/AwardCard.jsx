"use client";
import { gsap } from "gsap";
import * as Icons from "lucide-react";
import React, { useRef } from "react";

export default function AwardCard({ icon, title, year, className }) {
  const LucideIcon = Icons[icon] || Icons.Award;

  const awardCard = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(awardCard.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(awardCard.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={awardCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex bg-tertiary items-center gap-6 text-text-dark shadow-xl py-4 px-6 transition-all rounded-md  duration-300 ${className}`}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent text-effect border-0">
        {LucideIcon && <LucideIcon className="size-14" />}
      </div>
      <div className="text-left leading-tight ">
        <p className="body-small  uppercase text-start text-text-dark">
          {title}
        </p>
        <p className="body-small font-bold uppercase text-start text-text-dark">
          {year}
        </p>
      </div>
    </div>
  );
}
