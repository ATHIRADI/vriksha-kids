import ParallaxSection from "@/components/effect/ParallaxSection";
import AboutSection from "@/components/section/AboutSection";
import AwardSection from "@/components/section/AwardSection";
import MarqueeScroll from "@/components/section/MarqueeScrollSection";
import MemberSection from "@/components/section/MemberSection";
import PhilosophySection from "@/components/section/PhilosophySection";
import WhyEducationSection from "@/components/section/WhyEducationSection";
import Image from "next/image";
import React from "react";
import about_page from "../../utils/about_page.json";
import commons_components from "../../utils/commons_components.json";

const About = () => {
  const { marquee_section } = commons_components;
  const {
    about_section,
    awards_section,
    hero_section,
    philosophy_section,
    why_early_education,
    instructors,
  } = about_page;
  return (
    <main>
      <ParallaxSection pageTitle={hero_section.title} />
      <section className="">
        <AboutSection data={about_section} />
      </section>
      <section className="bg-hover-secondary ">
        <MarqueeScroll data={marquee_section} className="z-51">
          <PhilosophySection data={philosophy_section} className="" />
        </MarqueeScroll>
      </section>
      <section className="">
        <MemberSection data={instructors} />
      </section>
      <section className="bg-hover-secondary ">
        <WhyEducationSection
          data={why_early_education}
          className="pt-16 xl:pt-16"
        />
        <AwardSection data={awards_section} className="z-50" />
      </section>
      <section className="relative">
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
};

export default About;
