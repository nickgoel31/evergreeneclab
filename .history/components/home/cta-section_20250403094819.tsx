import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/95"></div>
        <Image 
          src="https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Laboratory background" 
          className="w-full h-full object-cover"
          width={1000}
            height={1000}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Partner with Environmental Experts?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-8">
            Contact us today to discuss how our environmental testing and consultancy services can support your sustainability goals and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button className="bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-3 rounded-full">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
