export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    longDescription: string;
    benefits: string[];
    methodology: string[];
    applications: string[];
    slug: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    company: string;
    position: string;
    avatar: string;
    rating: number;
    text: string;
  }
  
  export interface Client {
    id: number;
    name: string;
    logo: string;
  }
  
  export interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  
  export interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: string;
  }
  
  export interface Stat {
    id: number;
    value: string;
    label: string;
  }
  
  export interface Certification {
    id: number;
    title: string;
    logo: string;
    description: string;
    issuedBy: string;
    validUntil: string;
  }
  