import ParallaxSection from "@/components/effect/ParallaxSection";
import AdmissionsSection from "@/components/section/AdmissionsSection";
import FAQSection from "@/components/section/FAQSection";
import MarqueeScrollSection from "@/components/section/MarqueeScrollSection";
import ProgramSection from "@/components/section/ProgramSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import WhyVriksha from "@/components/section/WhyVriksha";
import Image from "next/image";
import React from "react";
import commons_components from "../../utils/commons_components.json";
import programs_page from "../../utils/programs_page.json";

export default function Programs() {
  const {
    hero_section,
    programs_list,
    programs_details,
    why_vriksha_section,
    faq,
    testimonials,
    admissions_section,
  } = programs_page;
  const { marquee_section } = commons_components;
  return (
    <main>
      <ParallaxSection pageTitle={hero_section.title} />
      <section className="">
        <ProgramSection
          programsList={programs_list}
          programsDetails={programs_details}
        />
      </section>
      <MarqueeScrollSection
        data={marquee_section}
        className="mb-8 xl:mb-16 z-51"
      >
        <section className="bg-hover-secondary">
          <AdmissionsSection data={admissions_section} />
        </section>
        <section className="">
          <WhyVriksha items={why_vriksha_section} />
          <FAQSection faqs={faq} />
        </section>
      </MarqueeScrollSection>
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
