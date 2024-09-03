import CarouselCourses from "@/components/CarouselCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-black to-[#1a0b1a]">
      <HeroSection />
      <CarouselCourses />
    </div>
  );
}
