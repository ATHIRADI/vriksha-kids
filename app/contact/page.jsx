import ParallaxSection from "@/components/effect/ParallaxSection";
import ContactSection from "@/components/section/ContactSection";
import MapSection from "@/components/section/MapSection";
import React from "react";
import contact_page from "../../utils/contact_page";

const Contact = () => {
  const { information, location } = contact_page;
  return (
    <main>
      <ParallaxSection pageTitle="Contact Us" />
      <section className="bg-tertiary pt-6 xl:pt-32">
        <ContactSection information={information} />
      </section>
      <section>
        <MapSection location={location} />
      </section>
    </main>
  );
};

export default Contact;
