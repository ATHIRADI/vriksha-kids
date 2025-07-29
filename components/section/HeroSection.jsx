import Link from "next/link";
import ImageBackground from "../effect/ImageBackground";
import VideoBackground from "../effect/VideoBackground";
import { StyledTitle } from "../StyledTitle";
import { Button } from "../ui/button";

export default function HeroSection({ data, backgroundType = "image" }) {
  return (
    <section className="relative w-full h-[90vh] md:h-[130vh] overflow-hidden pt-20">
      {backgroundType === "video" ? (
        <VideoBackground video="" />
      ) : (
        <ImageBackground image={data.image} />
      )}
      <div className="absolute inset-0 bg-text-dark/70 z-10" />
      <div className="absolute inset-0 flex flex-col  justify-center items-center z-20 text-center px-4">
        <div className="space-y-4 py-5">
          <h2 className="h2 text-center  max-w-4xl">
            <StyledTitle alterColor="text-tertiary" mainTitle={data.headline} />
          </h2>
          <Link href={data.href}>
            <Button>{data.cta_text}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
