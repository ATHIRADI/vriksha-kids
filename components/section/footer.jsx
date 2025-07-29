"use client";
import commons_components from "@/utils/commons_components.json";
import SocialIcons from "../SocialIcons";
import { StyledTitle } from "../StyledTitle";

export default function Footer() {
  const { logo, footer, credit } = commons_components;

  return (
    <footer className="bg-accent relative pt-0 ">
      <section className="containerBody relative z-10 space-y-6 text-text-dark pt-0">
        <div className="flex flex-row justify-between items-center">
          <h2 className="h3 text-center">
            <StyledTitle alterColor="text-text-dark " mainTitle={logo} />
          </h2>
          <SocialIcons />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {footer.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center ${index == 0 ? "md:items-start" : "md:items-end"}  space-y-2 pb-5`}
            >
              <h5 className="h5">{section.title}</h5>
              {section.lines?.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center space-y-4">
          <hr className="text-disabled" />
          <p className="text-text-dark body-small">{credit}</p>
        </div>
      </section>
    </footer>
  );
}
