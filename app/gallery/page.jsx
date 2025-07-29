import ParallaxSection from "@/components/effect/ParallaxSection";
import GallerySection from "@/components/section/GallerySection";
import InstaSection from "@/components/section/InstaSection";
import gallery_page from "../../utils/gallery_page.json";

const Gallery = () => {
  const { hero_section, categories, images, instagram_section } = gallery_page;
  return (
    <main className="relative">
      <ParallaxSection pageTitle={hero_section.title} />
      <section className="">
        <GallerySection category={categories} images={images} />
      </section>
      <section className="relative">
        <InstaSection data={instagram_section} />
      </section>
    </main>
  );
};

export default Gallery;
