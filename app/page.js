"use client";
import AboutSection from "@/components/section/AboutSection";
import AwardSection from "@/components/section/AwardSection";
import ClassesSection from "@/components/section/ClassesSection";
import CurriculumSection from "@/components/section/CurriculumSection";
import HeroSection from "@/components/section/HeroSection";
import MarqueeScroll from "@/components/section/MarqueeScrollSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import VisionSection from "@/components/section/VisionSection";
import WhyEducationSection from "@/components/section/WhyEducationSection";
import Image from "next/image";
import commons_components from "../utils/commons_components.json";
import home_page from "../utils/home_page.json";

export default function HomePage() {
  const {
    hero_section,
    about_section,
    vision_section,
    curriculum_section,
    program_section,
    why_early_education,
    awards_section,
    testimonials,
  } = home_page;

  const { marquee_section } = commons_components;

  return (
    <main>
      <section className="relative">
        <HeroSection data={hero_section} backgroundType="image" />

        <div className="absolute z-20 bottom-0 left-0 w-full">
          <Image
            src="/images/waves.svg"
            alt="Footer Wave"
            width={1440}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="">
        <AboutSection data={about_section} homePage={true} />
      </section>
      <section className="bg-hover-secondary ">
        <MarqueeScroll data={marquee_section} className="mb-8 xl:mb-16 z-51">
          <VisionSection data={vision_section} />
        </MarqueeScroll>
      </section>
      <section className="">
        <CurriculumSection data={curriculum_section} />
        <ClassesSection data={program_section} />
      </section>
      <section className="bg-hover-secondary ">
        <WhyEducationSection data={why_early_education} />
        <AwardSection data={awards_section} />
      </section>
      <section className="relative">
        <TestimonialSection data={testimonials} />
        <div className="absolute z-20 bottom-0 left-0 w-full">
          <Image
            src="/images/footer-curve.svg"
            alt="Footer Wave"
            width={1440}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
