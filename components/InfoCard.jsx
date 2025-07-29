import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gsap } from "gsap";
import * as Icons from "lucide-react";
import React, { useRef } from "react";

const InfoCard = ({ title, icon, description, className = "" }) => {
  const LucideIcon = Icons[icon];
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
      className={`group transition-all rounded-md px-0 pt-6  duration-300 bg-tertiary hover:bg-dark cursor-pointer ${className}`}
    >
      <CardHeader className="flex flex-col justify-center items-center text-center">
        {LucideIcon && (
          <LucideIcon className="size-10 mb-6 text-text-dark group-hover:text-tertiary transition-colors duration-300" />
        )}
        <CardTitle className="text-text-dark  group-hover:text-tertiary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center text-text-dark group-hover:text-tertiary transition-colors duration-300">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
