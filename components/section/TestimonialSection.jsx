"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useLayoutEffect, useRef } from "react";
import ReviewCard from "../ReviewCard";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection({ data }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 30 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 5000);
    },
  });

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
    <section ref={sectionRef} className="bg-tertiary relative py-24">
      <SectionTitle
        title={data.title}
        subtitle={data.subtitle}
        className="text-text-dark top mb-6"
      />
      <div
        ref={sliderRef}
        className="keen-slider below px-0 z-50 containerBody mb-16"
      >
        {data.review.map((item, index) => (
          <ReviewCard key={index} className="keen-slider__slide" {...item} />
        ))}
      </div>
    </section>
  );
}
