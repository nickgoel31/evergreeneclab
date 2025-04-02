
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="relative bg-neutral-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 mix-blend-multiply"></div>
        <Image 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Environmental Laboratory" 
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h5 className="text-primary-light font-display font-medium mb-4 bg-white/90 rounded-full px-4 py-1 inline-block">
            Leading Environmental Consultancy & Laboratory Services
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Sustainable Solutions for a Greener Tomorrow
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Evergreen Enviro Consultancy and Laboratories provides comprehensive environmental testing, monitoring, and consultancy services to help businesses and communities thrive sustainably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/environmental-monitoring">
              <Button className="bg-green-600 cursor-pointer text-white font-medium px-8 py-3 rounded-full">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-100/70 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
