"use client";
import commons_components from "@/utils/commons_components.json";
import { gsap } from "gsap";
import * as Icons from "lucide-react";
import React from "react";

export default function SocialIcons() {
  const { social_links } = commons_components;
  const handleMouseEnter = (el) => {
    gsap.to(el, {
      scale: 1.2,
      y: -4,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex items-center justify-center my-4 gap-2 ">
      {social_links.map(({ icon, socialLink }, index) => {
        const LucideIcon = Icons[icon];
        if (!LucideIcon) return null;

        return (
          <a
            key={index}
            href={socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary border-none rounded-full bg-effect border  shadow-xl p-3 hover:bg-dark hover:text-effect transition-all duration-300  cursor-pointer"
            aria-label={icon}
            ref={(el) => {
              if (el) {
                el.onmouseenter = () => handleMouseEnter(el);
                el.onmouseleave = () => handleMouseLeave(el);
              }
            }}
          >
            <LucideIcon className="size-6" />
          </a>
        );
      })}
    </div>
  );
}
