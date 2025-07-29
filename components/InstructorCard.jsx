"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const InstructorCard = ({ image, name, role, className }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      y: -10,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-none transition-all  rounded-md bg-tertiary duration-300 p-0 ${className}`}
    >
      <CardHeader className="p-0">
        <div className="w-full  overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name || "Team instructor"}
              width={300}
              height={300}
              className="object-cover w-full min-h-[300px] max-h-[300px]"
            />
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="text-center pb-5">
        <h5 className="h5 text-text-dark">{name}</h5>
        <p className="text-effect">{role}</p>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
