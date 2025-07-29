"use client";
import AwardCard from "@/components/AwardCard";
import CurriculumCard from "@/components/CurriculumCard";
import ParallaxSection from "@/components/effect/ParallaxSection";
import ImageCard from "@/components/ImageCard";
import InfoCard from "@/components/InfoCard";
import InstructorCard from "@/components/InstructorCard";
import PageTitle from "@/components/PageTitle";
import ProgramCard from "@/components/ProgramCard";
import AboutSection from "@/components/section/AboutSection";
import AdmissionsSection from "@/components/section/AdmissionsSection";
import AwardSection from "@/components/section/AwardSection";
import ClassesSection from "@/components/section/ClassesSection";
import ContactSection from "@/components/section/ContactSection";
import CurriculumSection from "@/components/section/CurriculumSection";
import FAQSection from "@/components/section/FAQSection";
import GallerySection from "@/components/section/GallerySection";
import HeroSection from "@/components/section/HeroSection";
import InstaSection from "@/components/section/InstaSection";
import MapSection from "@/components/section/MapSection";
import MarqueeScroll from "@/components/section/MarqueeScrollSection";
import MemberSection from "@/components/section/MemberSection";
import PhilosophySection from "@/components/section/PhilosophySection";
import ProgramSection from "@/components/section/ProgramSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import VisionSection from "@/components/section/VisionSection";
import WhyEducationSection from "@/components/section/WhyEducationSection";
import WhyVriksha from "@/components/section/WhyVriksha";
import SectionTitle from "@/components/SectionTitle";
import SocialIcons from "@/components/SocialIcons";
import { StyledTitle } from "@/components/StyledTitle";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import test_page from "../../utils/test_page";

export default function TestPage() {
  const {
    info_cards,
    award_cards,
    instructor_cards,
    image_cards,
    curriculum_cards,
    program_cards,
    about_section,
    marquee_section,
    vision_section,
    curriculum_section,
    program_section,
    why_early_education,
    awards_section,
    testimonials,
    philosophy_section,
    instructors,
    programs_list,
    programs_details,
    admissions_section,
    why_vriksha_section,
    faq,
    categories,
    images,
    instagram_section,
    location,
    information,
    hero_section,
  } = test_page;

  return (
    <div>
      <PageTitle title="Style Guide" />
      <section className="mt-12 space-y-24">
        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Typography"
            subtitle="Style Guide For Texts"
            // className="text-accent"
          />
          <div className="containerBody ">
            <h1 className="h1">Heading Font</h1>
            <h2 className="h2">Heading Font</h2>
            <h3 className="h3">Heading Font</h3>
            <h4 className="h4">Heading Font</h4>
            <h5 className="h5">Heading Font</h5>
            <p className="body-bold">Body Bold</p>
            <p className="">Body Regular</p>
            <p className="body-small">Body small</p>
            <p className="body-disabled">Body disabled</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Colors"
            subtitle="Style Guide For Colors"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 containerBody ">
            <div className="bg-dark shadow-2xl h-52"></div>
            <div className="bg-accent shadow-2xl h-52"></div>
            <div className="bg-tertiary shadow-2xl h-52"></div>
            <div className="bg-text-dark shadow-2xl h-52"></div>
            <div className="bg-effect shadow-2xl h-52"></div>
            <div className="bg-disabled shadow-2xl h-52"></div>
            <div className="bg-hover-primary shadow-2xl h-52"></div>
            <div className="bg-hover-secondary shadow-2xl h-52"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Buttons"
            subtitle="Style Guide For Buttons"
            // className="text-tertiary"
          />
          <div className="flex flex-row items-center gap-4 mt-4 containerBody">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
            <Button variant="secondary">Secondary</Button>
            <Button size="icon">
              <ChevronRight />
            </Button>

            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody bottom">
          <SectionTitle
            title="Social Icons"
            subtitle="Style Guide For Social Icons"
            // className="text-tertiary"
          />
          <SocialIcons />
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Styled Title"
            subtitle="Style Guide For Styled Title"
            // className="text-tertiary"
          />
          <h1 className="h4 text-center my-12">
            <StyledTitle mainTitle="Vriksha Kids Pre-School" />
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-4 containerBody ">
          <SectionTitle
            title="Info Cards"
            subtitle="Style Guide For Info Cards"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody ">
            {info_cards.map((service, index) => (
              <InfoCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Award Cards"
            subtitle="Style Guide For Award Cards"
            // className="text-tertiary"
          />
          <section className="grid grid-cols-2 md:grid-cols-4 containerBody gap-4 py-12">
            {award_cards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </section>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Instructors Cards"
            subtitle="Style Guide For Instructors Cards"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody">
            {instructor_cards.map((member, index) => (
              <InstructorCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Image Cards"
            subtitle="Style Guide For Image Cards"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 containerBody">
            {image_cards.map((item, index) => (
              <ImageCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Curriculum Cards"
            subtitle="Style Guide For Curriculum Cards"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 containerBody">
            {curriculum_cards.map((item, idx) => (
              <CurriculumCard key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 containerBody">
          <SectionTitle
            title="Program Cards"
            subtitle="Style Guide For Program Cards"
            // className="text-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 containerBody">
            {program_cards.map((item, idx) => (
              <ProgramCard key={idx} {...item} />
            ))}
          </div>
        </div>
        <div>
          <MarqueeScroll data={marquee_section} className="z-51">
            <AboutSection data={about_section} />
          </MarqueeScroll>
          <VisionSection data={vision_section} />
          <CurriculumSection data={curriculum_section} />
          <ClassesSection data={program_section} />
          <WhyEducationSection data={why_early_education} />
          <AwardSection data={awards_section} />
          <TestimonialSection data={testimonials} />
          <PhilosophySection data={philosophy_section} className="" />
          <MemberSection data={instructors} />
          <ProgramSection
            programsList={programs_list}
            programsDetails={programs_details}
          />
          <AdmissionsSection data={admissions_section} />
          <WhyVriksha items={why_vriksha_section} />
          <FAQSection faqs={faq} />
          <GallerySection category={categories} images={images} />
          <InstaSection data={instagram_section} />
          <ContactSection information={information} />
          <MapSection location={location} />
          <ParallaxSection pageTitle="Contact Us" />
          <HeroSection data={hero_section} backgroundType="image" />
          {/* <StatSection /> */}

          {/* <GallerySection /> */}

          {/* <ContactSection /> */}

          {/* <MemberSection /> */}
          {/* <HeroSection backgroundType="video" /> */}
          {/* <HeroSection backgroundType="image" /> */}

          {/* <AwardSection /> */}
          {/* <InstaSection /> */}
          {/* <SectionWithBackground image="pics/3.jpeg">
            <section className="h-[40vh]  containerBody">
              <div className="h-65 w-64 bg-accent"></div>
            </section>
          </SectionWithBackground> */}
          <MapSection />
          {/* <ServiceSection /> */}
          {/* <BrandSection /> */}
          {/* <DiscountSection /> */}
          {/* <PriceSection /> */}
        </div>
      </section>
    </div>
  );
}
