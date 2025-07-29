"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramSection({ programsList, programsDetails }) {
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

  const tabValues = [
    "toddlers",
    "montessori",
    "preschoolers",
    "pre-kg",
    "daycare",
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-0 xl:pt-0 containerBody bg-tertiary text-text-dark top"
    >
      <Tabs
        defaultValue="toddlers"
        className="grid grid-cols-1 md:grid-cols-1 gap-10 containerBody mx-auto py-12 left"
      >
        <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 w-full md:w-auto ">
          {programsList.map((program, index) => (
            <TabsTrigger
              key={index}
              value={tabValues[index]}
              className="justify-between cursor-pointer hover:bg-hover-primary transition-all duration-300"
            >
              {program}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="space-y-8 mt-16 right">
          {programsDetails.map((program, index) => (
            <TabsContent key={index} value={tabValues[index]}>
              <TabContent
                image={program.image}
                title={program.title}
                description={program.description}
                features={program.features}
              />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}

function TabContent({ image, title, description, features }) {
  return (
    <div className="space-y-6">
      <div className="w-full h-96 md:h-[600px] relative below rounded-md overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border body-small uppercase border-accent rounded-md px-6 py-3 flex flex-row justify-center gap-4 items-center text-center"
          >
            <span className="border rounded-full text-tertiary bg-accent p-1">
              <Check size={18} />
            </span>
            {feature}
          </div>
        ))}
      </div>

      <Link href="/contact">
        <Button variant="default" className="mt-4">
          Enquire Now
        </Button>
      </Link>
    </div>
  );
}
