import Image from "next/image";
import commons_components from "../../utils/commons_components.json";
import { StyledTitle } from "../StyledTitle";

export default function ParallaxSection({ pageTitle }) {
  const { image, title, subTitle } = commons_components;
  return (
    <section
      className="bg-fixed relative bg-center flex flex-col justify-center items-center bg-no-repeat bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute z-50 bottom-0 left-0 w-full">
        <Image
          src="/images/waves.svg"
          alt="Footer Wave"
          width={1440}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className={`absolute inset-0 z-10 bg-black/80`} />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
        {pageTitle ? (
          <h1 className="h2 text-tertiary ">{pageTitle}</h1>
        ) : (
          <div>
            <h1 className="h1">
              <StyledTitle mainTitle={title} />
            </h1>
            <p className=" text-accent">{subTitle}</p>
          </div>
        )}
      </div>
    </section>
  );
}
