import React from 'react'
import ServicesSection from "@/components/home/services-section";
import StatsSection from "@/components/home/stats-section";
import AboutPreview from "@/components/home/about-previews";
import ClientsSection from "@/components/home/clients-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import GalleryPreview from "@/components/home/gallery-preview";
import HeroSection from "@/components/home/hero-banner";
import { Client, GalleryItem } from '@/types';

const HomepageWithLoading = ({galleryData, clientsData}:{galleryData: GalleryItem[], clientsData:Client[]}) => {
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
  )
}

export default HomepageWithLoading