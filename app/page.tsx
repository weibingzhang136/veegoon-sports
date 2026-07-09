import Cases from "@/components/home/Cases";
import Products from "@/components/home/Products";
import Solutions from "@/components/home/Solutions";
import AISportsVision from "@/components/home/AISportsVision";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";


export default function Home() {
  return (
    <>
      <Hero />

      <BrandStory />

      <AISportsVision />

      <Solutions />

      <Products />

      <Cases />
    </>
  );
}