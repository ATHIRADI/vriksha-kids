"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function ProgramCard({
  image,
  title,
  subtitle,
  description,
  className = "",
}) {
  const programCardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(programCardRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(programCardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };
  return (
    <Card
      ref={programCardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-none transition-all rounded-md bg-hover-secondary duration-300 p-0 ${className}`}
    >
      <CardHeader className="p-0 ">
        <div className="w-full aspect-[5/5] overflow-hidden h-[300px]">
          {image ? (
            <Image
              src={image}
              alt={title || "program Title"}
              width={250}
              height={250}
              className="object-cover h-full w-full "
            />
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="text-center pb-5 space-y-2">
        <p className="text-effect body-small">{subtitle}</p>
        <h5 className="h5">{title}</h5>
        <p className="text-text-dark">{description}</p>
      </CardContent>
    </Card>
  );
}
