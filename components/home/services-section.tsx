"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/shared/service-card";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  // Take the first 4 services to display on homepage
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary font-medium mb-3">OUR SERVICES</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Comprehensive Environmental Solutions</h2>
          <p className="text-neutral-400">
            We offer a wide range of environmental testing, monitoring, and consultancy services to help businesses maintain compliance and sustainability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
