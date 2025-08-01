"use client";
import ImageCard from "@/components/ImageCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

const IMAGES_PER_PAGE = 12;

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection({ category: categories, images }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = images.filter(
    (img) => activeFilter === "All" || img.category === activeFilter
  );

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);

  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

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

  return (
    <section ref={sectionRef} className="py-16 xl:py-32 containerBody top">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 left">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => {
              setActiveFilter(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-12 right">
        {paginatedImages.map((item, i) => (
          <ImageCard key={i} {...item} alt={`Work ${i + 1}`} />
        ))}
      </div>

      <div className="flex justify-center gap-2 below">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <Button
              size="icon"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 ${
                page === currentPage
                  ? "bg-accent text-black"
                  : "bg-dark border border-accent"
              }`}
            >
              {page}
            </Button>
          );
        })}

        {currentPage < totalPages && (
          <Button
            size="icon"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-9 h-9"
          >
            &gt;
          </Button>
        )}
      </div>
    </section>
  );
}
