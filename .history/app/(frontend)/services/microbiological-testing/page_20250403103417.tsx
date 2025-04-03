import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { servicesData } from "@/data/services";
import { ChevronRight, Check, ArrowRight, ScanSearch, FlaskConical } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const MicrobiologicalTesting = () => {
  // Find the service data
  const service = servicesData.find(s => s.slug === "microbiological-testing");
  
  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Service not found</h1>
        </div>
      </Layout>
    );
  }

  // Define the specific microbiological testing services
  const microbiologicalTestingServices = [
    {
      title: "Water Microbiological Analysis",
      description: "Provides comprehensive microbial contamination assessment with multiple pathogen detection methodologies."
    },
    {
      title: "Air Bioburden Testing",
      description: "Evaluates microbial contamination in controlled environments, following cleanroom classification standards."
    },
    {
      title: "Surface Swab Testing",
      description: "Offers quantitative surface contamination assessment with pathogen-specific screening."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title={service.title} 
        subtitle="Advanced culture-based and molecular techniques for accurate identification and quantification of microorganisms"
        backgroundImage="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
                src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Microbiological Testing Laboratory" 
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Microbiological Testing Services</h2>
            <p className="text-neutral-600">
              We offer a comprehensive range of microbiological testing services using advanced culture-based and molecular techniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {microbiologicalTestingServices.map((service, index) => (
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Testing Approach</h2>
              <p className="text-neutral-600 mb-6">
                Our microbiological testing services follow a systematic approach to ensure accurate, reliable results that meet all quality standards and regulatory requirements:
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
                    <h3 className="font-display font-semibold text-lg">Advanced Culture Techniques</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our laboratory utilizes a wide range of selective and differential media for the isolation and identification of various microorganisms, including pathogens and indicator organisms.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Molecular Diagnostics</h3>
                  </div>
                  <p className="text-neutral-600">
                    We employ cutting-edge molecular techniques including PCR, qPCR, and DNA sequencing for rapid and accurate identification of microorganisms, particularly those that are difficult to culture.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Reference Strain Collection</h3>
                  </div>
                  <p className="text-neutral-600">
                    We maintain a comprehensive collection of reference strains for quality control and comparative analysis, ensuring accurate identification and characterization of microorganisms.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Biosafety Facilities</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our laboratory features appropriate biosafety levels and containment measures for handling various microorganisms, ensuring both personnel safety and sample integrity.
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
              Our microbiological testing services provide numerous advantages for your organization
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
              Our microbiological testing services can be applied across various industries and scenarios
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
                Request Microbiological Testing Services <ArrowRight className="ml-2 h-4 w-4" />
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
    </Layout>
  );
};

export default MicrobiologicalTesting;