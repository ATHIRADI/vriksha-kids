"use client";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // import this
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const ImageCard = ({ src, alt, className }) => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Card
          ref={sectionRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`border-none transition-all rounded-md cursor-pointer duration-300 p-0 ${className}`}
        >
          <CardHeader className="p-0">
            <div className="w-full aspect-[5/5] rounded-md overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </CardHeader>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 border-none z-200  shadow-none">
        <DialogTitle>
          <VisuallyHidden>{alt}</VisuallyHidden>
        </DialogTitle>
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-[95vh] object-contain "
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageCard;
