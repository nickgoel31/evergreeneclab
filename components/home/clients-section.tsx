import { clientsData } from "@/data/clients";
import ClientLogo from "@/components/shared/client-logo";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ClientsSection = () => {
  // Take the first 6 clients for the homepage
  const featuredClients = clientsData.slice(0, 6);

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-primary font-medium mb-3">OUR CLIENTS</h6>
          <h2 className="text-3xl font-display font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-neutral-400">
            We&apos;re proud to work with organizations committed to environmental responsibility.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {featuredClients.map((client) => (
            <ClientLogo key={client.id} client={client} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/clients" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition">
            View All Clients
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
