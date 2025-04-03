import PageHeader from "@/components/shared/page-header";
// import { clientsData } from "@/data/clients";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ArrowRight, Building2, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { Client } from "@/types";
import { urlFor } from "@/sanity/lib/image";
// import { motion } from "framer-motion";

const CLIENTS_QUERY = defineQuery(`*[
  _type == "client"]`
)

const Clients = async () => {
  const {data: clientsData} = await sanityFetch({query: CLIENTS_QUERY});
  // Key client figures
  const keyFigures = [
    {
      id: 1,
      value: "700+",
      label: "Active Clients",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      id: 2,
      value: "95%",
      label: "Client Satisfaction",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      id: 3,
      value: "3+",
      label: "Years of Service",
      icon: <Sparkles className="h-5 w-5" />
    },
  ];

  // Featured clients (top row with extra emphasis)
  const featuredClients = clientsData.slice(0, 6);
  
  // The rest of the clients
  const regularClients = clientsData.slice(6);



  return (
    <>
      <PageHeader 
        title="Our Clients" 
        subtitle="Organizations that trust us for their environmental testing and consultancy needs"
        backgroundImage="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
            
            
          >
            {keyFigures.map((figure) => (
              <div 
                key={figure.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100"
                
              >
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">{figure.icon}</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{figure.value}</h3>
                <p className="text-neutral-500 font-medium">{figure.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div 
            className="text-center max-w-3xl mx-auto mb-12"
            
          >
            <h6 className="text-primary font-medium mb-2">TRUSTED PARTNERSHIPS</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Clients</h2>
            <p className="text-neutral-500">
              Leading organizations that have chosen us as their environmental consultancy partner.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            
            
          >
            {featuredClients.map((client:Client) => (
              <div 
                key={client.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center aspect-square"
                
                
              >
                <Image 
                  src={urlFor(client.logo).url()} 
                  alt={client.name} 
                  className="max-h-12 max-w-[80%] grayscale hover:grayscale-0 transition-all duration-500"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            className="text-center max-w-3xl mx-auto mb-12"
            
          >
            <h2 className="text-3xl font-display font-bold mb-4">Our Global Client Network</h2>
            <p className="text-neutral-500">
              We&apos;re proud to work with organizations worldwide that are committed to environmental responsibility.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            
            
          >
            {regularClients.map((client: Client) => (
              <div 
                key={client.id} 
                className="bg-neutral-50 rounded-lg p-4 flex items-center justify-center h-24 hover:bg-white hover:shadow-sm transition-all duration-300"
                
                
              >
                <Image 
                  src={urlFor(client.logo).url()} 
                  alt={client.name} 
                  className="max-h-10 max-w-[80%] grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          <div 
            className="mt-12 text-center"
            
          >
            <div className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-full">
              <ThumbsUp className="text-primary h-5 w-5" />
              <span className="font-medium">Working with 700+ clients across the country</span>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-3xl mx-auto text-center"
            
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Ready to Join Our Client Portfolio?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              Contact our team today to discuss how Evergreen Enviro can support your environmental testing and consultancy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquiry">
                <div
                  
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
              <Link href="/contact">
                <div
                  
                >
                  <Button variant="outline" className="rounded-full px-8 py-6 h-auto border-2 border-primary/80 text-primary hover:bg-primary/5">
                    Contact Us
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
