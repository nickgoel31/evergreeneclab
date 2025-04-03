import PageHeader from "@/components/shared/page-header";
import { servicesData } from "@/data/services";
import { ChevronRight, Check, ArrowRight, Droplets, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const WaterTesting = () => {
  // Find the service data
  const service = servicesData.find(s => s.slug === "water-testing");
  
  if (!service) {
    return (
      <>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Service not found</h1>
        </div>
      </>
    );
  }

  // Define the specific water testing services
  const waterTestingServices = [
    {
      title: "Drinking Water Analysis",
      description: "Provides extensive testing of chemical and microbiological parameters, detecting contaminants and ensuring water safety."
    },
    {
      title: "Construction Water Testing",
      description: "Evaluates water compatibility for building materials, assessing corrosion potential and environmental compliance."
    },
    {
      title: "Chiller Water Analysis",
      description: "Monitors critical parameters for cooling system efficiency, preventing equipment damage and optimizing performance."
    },
    {
      title: "Swimming Pool Water Testing",
      description: "Ensures safe recreational water quality through comprehensive chemical and microbiological parameter testing."
    },
    {
      title: "Groundwater Monitoring",
      description: "Assesses aquifer water quality for environmental compliance, contamination detection, and resource management."
    },
    {
      title: "Surface Water Testing",
      description: "Evaluates lakes, rivers, and streams for environmental monitoring, recreational safety, and source water assessment."
    },
    {
      title: "Wastewater Analysis",
      description: "Characterizes effluent quality for treatment process optimization and regulatory compliance verification."
    }
  ];

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle="EET delivers comprehensive water testing services utilizing advanced instrumentation and methodologies to assess water quality across diverse environments and applications. Our rigorous scientific approach ensures precise detection of contaminants and comprehensive water characterization."
        backgroundImage="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">{service.title}</h2>
              <p className="text-neutral-600 mb-6">{service.longDescription}</p>
              
              <div className="flex flex-col gap-4 mb-8">
                {["State-of-the-art analytical techniques", "Multiple testing methodologies", "Trace-level contaminant detection", "Comprehensive water matrix analysis"].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">{feature}</span>
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
                src="https://images.unsplash.com/photo-1564495584622-0c8eafd94178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Water Testing Laboratory" 
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Applications</h2>
            <p className="text-neutral-600">
              Our water testing services can be applied across various industries and scenarios
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Drinking water quality assessment", "Industrial water management", "Environmental monitoring", "Agricultural water resource evaluation", "Public health protection"].map((application, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm flex items-start gap-3">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <ChevronRight className="text-primary h-3 w-3" />
                </div>
                <span className="text-neutral-600">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterTesting;
