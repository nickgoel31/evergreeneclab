import AboutPreview from "@/components/home/about-previews";
import ClientsSection from "@/components/home/clients-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import GalleryPreview from "@/components/home/gallery-preview";
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
      <GalleryPreview />
      <TestimonialsSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
