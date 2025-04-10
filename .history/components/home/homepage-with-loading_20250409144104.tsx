"use client"

import { useState, useEffect } from 'react';
import ServicesSection from "@/components/home/services-section";
import StatsSection from "@/components/home/stats-section";
import AboutPreview from "@/components/home/about-previews";
import ClientsSection from "@/components/home/clients-section";
import CTASection from "@/components/home/cta-section";
import FAQSection from "@/components/home/faq-section";
import GalleryPreview from "@/components/home/gallery-preview";
import HeroSection from "@/components/home/hero-banner";
import { Client, GalleryItem } from '@/types';
import Loading from '../shared/loading';

const HomepageWithLoading = ({galleryData, clientsData}:{galleryData: GalleryItem[], clientsData:Client[]}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    
  useEffect(() => {
    // Set a timeout to hide the loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Clean up the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isLoading ? (
        <Loading />
    ):(
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
    )}
        
    </>
  )
}

export default HomepageWithLoading