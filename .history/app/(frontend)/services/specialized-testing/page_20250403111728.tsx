import PageHeader from "@/components/shared/page-header";
import { servicesData } from "@/data/services";
import { ChevronRight, Check, ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SpecializedTesting = () => {
  // Find the service data
  const service = servicesData.find(s => s.slug === "specialized-testing");
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle="Advanced testing solutions tailored to unique industry requirements"
        backgroundImage="https://images.unsplash.com/photo-1581092334717-f8291eaf8a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
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
              src="https://images.unsplash.com/photo-1605810230434-7631ac67b356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Specialized Testing Equipment" 
              className="w-full h-auto"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Testing Methodology</h2>
            <p className="text-neutral-600">
              Our approach ensures accurate, reliable results through advanced analytical techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {service.methodology.map((method, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <FlaskConical className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">Step {index + 1}</h3>
                  <p className="text-neutral-600">{method}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Applications</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.applications.map((application, index) => (
              <div key={index} className="bg-neutral-50 p-5 rounded-xl shadow-sm flex items-start gap-3">
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

export default SpecializedTesting;