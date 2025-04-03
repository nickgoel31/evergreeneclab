
import PageHeader from "@/components/shared/page-header";
import { servicesData } from "@/data/services";
import { ChevronRight, Check, ArrowRight, Waves, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const NoiseMonitoring = () => {
  // Find the service data
  const service = servicesData.find(s => s.slug === "noise-monitoring");
  
  if (!service) {
    return (
      <>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Service not found</h1>
        </div>
      </>
    );
  }

  // Define the specific noise monitoring services
  const noiseMonitoringServices = [
    {
      title: "Workplace Noise Assessment",
      description: "Evaluates occupational noise exposure with dosimetry and area mapping to protect worker hearing."
    },
    {
      title: "Environmental Noise Monitoring",
      description: "Measures community noise impact from industrial operations, transportation, construction, and entertainment venues."
    },
    {
      title: "Long-term Monitoring Systems",
      description: "Deploys unattended acoustic monitoring systems for continuous data collection over extended periods."
    }
  ];

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle="Precision acoustic measurements with detailed frequency analysis for various environments"
        backgroundImage="https://images.unsplash.com/photo-1601139144817-358064498084?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                src="https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Noise Monitoring Equipment" 
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Noise Monitoring Services</h2>
            <p className="text-neutral-600">
              We offer a comprehensive range of noise monitoring services using precision sound level meters calibrated to international standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {noiseMonitoringServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Waves className="h-8 w-8 text-primary" />
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
                Our noise monitoring services follow a systematic approach to ensure accurate, reliable results that meet all quality standards and regulatory requirements:
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
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Technical Capabilities</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Precision Sound Level Meters</h3>
                  </div>
                  <p className="text-neutral-600">
                    We utilize Type 1 sound level meters from leading manufacturers, calibrated to international standards, capable of measuring the full spectrum of environmental and occupational noise parameters.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Frequency Analysis</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our equipment performs detailed frequency analysis including octave and one-third octave band measurements to characterize noise sources and support effective mitigation strategies.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Continuous Monitoring Systems</h3>
                  </div>
                  <p className="text-neutral-600">
                    We deploy weather-resistant noise monitoring stations capable of unattended operation for extended periods, with automatic data logging and remote access capabilities.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Advanced Analysis Software</h3>
                  </div>
                  <p className="text-neutral-600">
                    We utilize specialized software for data processing, analysis, and visualization, including noise mapping, dose calculations, and compliance assessment against various standards.
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
              Our noise monitoring services provide numerous advantages for your organization
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
              Our noise monitoring services can be applied across various industries and scenarios
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
                Request Noise Monitoring Services <ArrowRight className="ml-2 h-4 w-4" />
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

export default NoiseMonitoring;