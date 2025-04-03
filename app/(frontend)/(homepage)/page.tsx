import AboutPreview from "@/components/home/about-previews";
import ClientsSection from "@/components/home/clients-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import GalleryPreview from "@/components/home/gallery-preview";
import HeroSection from "@/components/home/hero-banner";
import ServicesSection from "@/components/home/services-section";
import StatsSection from "@/components/home/stats-section";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const GALLERY_QUERY = `*[_type == "galleryImage"]`;
const CLIENTS_QUERY = defineQuery(`*[
  _type == "client"]`
)

export default async function Home() {
  const {data: galleryData} = await sanityFetch({query: GALLERY_QUERY});
  const {data: clientsData} = await sanityFetch({query: CLIENTS_QUERY});
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      <GalleryPreview galleryData={galleryData}/>
      {/* <TestimonialsSection /> */}
      <ClientsSection clientsData={clientsData}/>
      <FAQSection />
      <CTASection />
    </>
  );
}
