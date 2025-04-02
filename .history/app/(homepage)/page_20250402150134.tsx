import AboutPreview from "@/components/home/about-previews";
import HeroSection from "@/components/home/hero-banner";
import ServicesSection from "@/components/home/services-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      {/* Gallery */}
      {/* <TestimonialsSection /> */}
    </>
  );
}
