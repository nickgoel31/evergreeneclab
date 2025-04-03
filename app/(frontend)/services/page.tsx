import React from "react";

import PageHeader from "@/components/shared/page-header";
import ServiceCard from "@/components/shared/service-card";
import { servicesData } from "@/data/services";

const Services = () => {
  return (
    <>
      <PageHeader 
        title="Our Environmental Services" 
        subtitle="Discover our comprehensive range of environmental testing and consulting services"
        backgroundImage="/images/services-header.jpg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Comprehensive Environmental Solutions</h2>
            <p className="text-neutral-600">
              We provide a wide range of environmental testing, monitoring, and consultancy services tailored to meet your specific industry requirements and compliance needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;