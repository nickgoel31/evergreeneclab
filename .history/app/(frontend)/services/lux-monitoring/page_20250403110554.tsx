import PageHeader from "@/components/shared/page-header";
import { servicesData } from "@/data/services";
import { Check, ArrowRight, ScanSearch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const LuxMonitoring = () => {
  const service = servicesData.find(s => s.slug === "lux-monitoring");

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  const luxMonitoringServices = [
    { title: "Workplace Illumination Assessment", description: "Performs task-specific light level measurements and evaluates visual comfort." },
    { title: "Emergency Lighting Verification", description: "Tests emergency illuminance levels and system functionality." },
    { title: "Specialized Environment Light Monitoring", description: "Provides assessment for healthcare, educational, and industrial settings." },
    { title: "Light Pollution Studies", description: "Measures environmental light impacts and develops mitigation strategies." }
  ];

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle="Precise illumination assessment services using calibrated equipment for diverse environments."
        backgroundImage="https://images.unsplash.com/photo-1504973960431-7a23c1d2e0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">{service.title}</h2>
              <p className="text-neutral-600 mb-6">{service.longDescription}</p>

              <div className="flex flex-col gap-4 mb-8">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/enquiry">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1523861751938-121b5323b48b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Lux Monitoring" 
                className="w-full h-auto"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Lux Monitoring Services</h2>
            <p className="text-neutral-600">Comprehensive lighting assessments for optimized visual comfort and regulatory compliance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {luxMonitoringServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <ScanSearch className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LuxMonitoring;
