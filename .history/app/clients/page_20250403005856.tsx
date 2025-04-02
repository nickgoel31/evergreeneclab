import PageHeader from "@/components/shared/page-header";
import { clientsData } from "@/data/clients";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, Star, ThumbsUp, ChevronRight } from "lucide-react";
import Image from "next/image";

const Clients = () => {
  // Group clients by industry sector
  const sectors = [
    {
      id: 1,
      name: "Manufacturing",
      icon: <Building className="h-6 w-6 text-primary" />,
      clients: clientsData.slice(0, 4)
    },
    {
      id: 2,
      name: "Public Sector",
      icon: <Building className="h-6 w-6 text-primary" />,
      clients: clientsData.slice(4, 8)
    },
    {
      id: 3,
      name: "Healthcare",
      icon: <Building className="h-6 w-6 text-primary" />,
      clients: clientsData.slice(8, 12)
    },
    {
      id: 4,
      name: "Energy",
      icon: <Building className="h-6 w-6 text-primary" />,
      clients: clientsData.slice(0, 4)
    }
  ];

  // Testimonials specific to this page
  const featuredTestimonials = [
    {
      id: 1,
      text: "Evergreen Enviro's comprehensive environmental compliance services have been instrumental in helping us meet regulatory requirements while improving our sustainability efforts.",
      name: "Sarah Johnson",
      position: "Environmental Manager",
      company: "Global Manufacturing Inc."
    },
    {
      id: 2,
      text: "Their laboratory testing services provide reliable, accurate results with fast turnaround times. They've become an essential partner in our quality control processes.",
      name: "Michael Chen",
      position: "Quality Director",
      company: "Eco Innovations Ltd."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Clients" 
        subtitle="Organizations that trust us for their environmental testing and consultancy needs"
        backgroundImage="https://images.unsplash.com/photo-1605125950487-5d893d11505e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-neutral-500">
              We&apos;re proud to work with organizations across various industries that are committed to environmental responsibility and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {clientsData.map((client) => (
              <div key={client.id} className="client-logo h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-12 w-fit transition-all duration-300"
                  width={300}
                    height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Clients by Industry Sector</h2>
            <p className="text-neutral-500">
              Explore our client portfolio across various industry sectors.
            </p>
          </div>
          
          {sectors.map((sector) => (
            <div key={sector.id} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-display font-bold">{sector.name} Sector</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {sector.clients.map((client) => (
                  <div key={client.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-32">
                    <div className="text-center">
                      <Image 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-10 mx-auto w-fit mb-3"
                        width={300}
                        height={300}
                      />
                      <h4 className="font-medium text-sm">{client.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Client Success Stories</h2>
            <p className="text-neutral-500">
              Hear directly from our clients about their experience working with Evergreen Enviro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-neutral-50 p-8 rounded-xl relative">
                <div className="absolute top-6 right-6 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="text-primary h-6 w-6" />
                </div>
                <p className="text-neutral-600 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-neutral-200 rounded-full overflow-hidden">
                    <Image 
                      src={`https://randomuser.me/api/portraits/${testimonial.id % 2 === 0 ? 'men' : 'women'}/${testimonial.id + 30}.jpg`} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{testimonial.name}</h4>
                    <p className="text-neutral-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-full">
              <ThumbsUp className="text-primary h-5 w-5" />
              <span className="font-medium">98% client satisfaction rate based on annual surveys</span>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Ready to Join Our Client Portfolio?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how Evergreen Enviro can support your environmental testing and consultancy needs.
          </p>
          <Link href="/enquiry">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3">
              Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Clients;
