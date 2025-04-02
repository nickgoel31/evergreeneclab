"use client"

import Link from "next/link";
import { ArrowRight, Wind, Droplets, ScanSearch, Waves, Mountain, ClipboardCheck, Recycle, Leaf } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon, slug } = service;
  
  // Map the icon string to the actual component
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Wind':
        return <Wind className="h-5 w-5 text-primary" />;
      case 'Droplets':
        return <Droplets className="h-5 w-5 text-primary" />;
      case 'ScanSearch':
        return <ScanSearch className="h-5 w-5 text-primary" />;
      case 'Waves':
        return <Waves className="h-5 w-5 text-primary" />;
      case 'Mountain':
        return <Mountain className="h-5 w-5 text-primary" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="h-5 w-5 text-primary" />;
      case 'Recycle':
        return <Recycle className="h-5 w-5 text-primary" />;
      case 'Leaf':
        return <Leaf className="h-5 w-5 text-primary" />;
      default:
        return <ArrowRight className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
        {getIcon(icon)}
      </div>
      <h3 className="font-display font-semibold text-xl mb-3">{title}</h3>
      <p className="text-neutral-400 mb-4 flex-grow">{description}</p>
      <Link href={`/services/${slug}`} className="text-primary font-medium hover:text-primary-dark flex items-center gap-2 mt-auto">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
