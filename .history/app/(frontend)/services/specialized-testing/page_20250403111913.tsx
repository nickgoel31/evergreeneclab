import PageHeader from "@/components/shared/page-header";
import { servicesData } from "@/data/services";
import { ChevronRight, Check, ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SpecializedTesting = () => {
  const service = servicesData.find(s => s.slug === "specialized-testing");
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  const specializedServices = [
    {
      title: "Used Oil Analysis",
      description: "Provides detailed assessment of lubricant performance and equipment condition through comprehensive wear metal and contaminant analysis."
    },
    {
      title: "Briquette Testing",
      description: "Evaluates fuel quality by determining calorific value, ash content, and emission potential for various industrial and energy applications."
    }
  ];

  return (
    <>
      <PageHeader 
        title={service.title} 
        subtitle="Customized testing solutions for unique client requirements beyond standard environmental parameters."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
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
                src="https://images.unsplash.com/photo-1581090126667-763ab36a3037?auto=format&fit=crop&w=1200&q=80" 
                alt="Specialized Testing Equipment" 
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Specialized Testing Services</h2>
            <p className="text-neutral-600">
              We provide advanced analytical solutions tailored to unique industry needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <FlaskConical className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
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

export default SpecializedTesting;