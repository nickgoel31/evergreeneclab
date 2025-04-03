
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
        subtitle="Comprehensive water analysis services using state-of-the-art instrumentation following international standards"
        backgroundImage="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
                src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Water Testing Services</h2>
            <p className="text-neutral-600">
              We offer a comprehensive range of water testing services using advanced analytical techniques and standardized methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {waterTestingServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Droplets className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Testing Approach</h2>
              <p className="text-neutral-600 mb-6">
                Our water testing services follow a systematic approach to ensure accurate, reliable results that meet all quality standards and regulatory requirements:
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-xl">
                <ol className="space-y-6">
                  {service.methodology.map((method, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="h-8 w-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-neutral-600">{method}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Laboratory Capabilities</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Advanced Instrumentation</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our laboratories are equipped with advanced analytical instruments including ICP-MS, ICP-OES, GC-MS, HPLC, TOC analyzers, and automated spectrophotometers for comprehensive water quality assessment.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Trace Level Analysis</h3>
                  </div>
                  <p className="text-neutral-600">
                    We can detect and quantify contaminants at trace levels (parts per billion or trillion) for sensitive applications such as drinking water safety assessment and environmental monitoring.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Standardized Methods</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our testing procedures follow standardized methods from organizations such as APHA, EPA, and ISO to ensure consistent, comparable results that meet regulatory requirements.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Quality Assurance</h3>
                  </div>
                  <p className="text-neutral-600">
                    We maintain rigorous quality control protocols including method blanks, duplicates, spikes, and certified reference materials to ensure the accuracy and reliability of our test results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Key Benefits</h2>
            <p className="text-neutral-600">
              Our water testing services provide numerous advantages for your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Benefit {index + 1}</h3>
                <p className="text-neutral-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Applications</h2>
            <p className="text-neutral-600">
              Our water testing services can be applied across various industries and scenarios
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.applications.map((application, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm flex items-start gap-3">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <ChevronRight className="text-primary h-3 w-3" />
                </div>
                <span className="text-neutral-600">{application}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/enquiry">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Request Water Testing Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Explore Other Services</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.filter(s => s.slug !== service.slug).slice(0, 3).map((relatedService) => (
              <div key={relatedService.id} className="bg-neutral-50 p-5 rounded-xl shadow-sm">
                <h3 className="font-display font-semibold text-lg mb-3">{relatedService.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{relatedService.description}</p>
                <Link href={`/services/${relatedService.slug}`} className="text-primary font-medium text-sm hover:text-primary-dark flex items-center gap-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterTesting;