import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutPreview = () => {
  const features = [
    {
      id: 1,
      title: "Accredited Laboratories",
      description: "ISO 17025 certified testing facilities",
    },
    {
      id: 2,
      title: "Expert Consultants",
      description: "Qualified environmental specialists",
    },
    {
      id: 3,
      title: "Advanced Equipment",
      description: "Cutting-edge analytical instruments",
    },
    {
      id: 4,
      title: "Fast Turnaround",
      description: "Quick and reliable results",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Lab technician analyzing samples" 
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-3xl font-bold mb-1">2+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-light/10 rounded-full"></div>
          </div>
          
          <div>
            <h6 className="text-primary font-medium mb-3">ABOUT US</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Environmental Excellence Through Scientific Precision</h2>
            <p className="text-neutral-400 mb-6">
            Evergreen Enviro Testing LLP has been at the forefront of environmental testing and consultancy since 2021. Our state-of-the-art facilities and expert team deliver accurate, reliable environmental solutions for businesses and communities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="text-primary h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
