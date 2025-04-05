"use client"
import { servicesData } from "@/data/services";
import {  
  Linkedin, 
  
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ChevronRight,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const INFO_QUERY = defineQuery(`*[
  _type == "companyInformation"][0]`
)

type CompanyInformation = {
  name?: string;
  description?: string;
  contactEmails?: string[];
  phones?: string[];
  address?: string;
}

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const phoneNumber = "+917428487870"; // Replace with your phone number

  const formattedPhone = phoneNumber.replace(/\D/g, '');

  const [companyInfo, setCompanyInfo] = useState<CompanyInformation>({})

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    
    const fetchCompanyInfo = async () => {
      "use server"
      const {data: info} = await sanityFetch({query: INFO_QUERY});
      setCompanyInfo(info);
    }
    fetchCompanyInfo();
  })

  return (
    <footer className="relative bg-neutral-900 text-white pt-16 pb-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center transition-transform hover:scale-110 duration-300">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-display font-semibold text-xl text-white">
                Evergreen <span className="text-primary">Enviro</span>
              </span>
            </Link>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Leading provider of environmental testing, monitoring, and consultancy services for a sustainable future. Our expert team delivers accurate results with a commitment to environmental excellence.
            </p>
            <div className="flex gap-3">
              
              
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={`https://wa.me/${formattedPhone}?text='Hi, I want to enquire about some services.'`} 
                className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Whatsapp"
                target="_blank"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xl mb-5 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id} className="group">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xl mb-5 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li className="group">
                <Link 
                  href="/about" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li className="group">
                <Link 
                  href="/certifications" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  Certifications
                </Link>
              </li>
              <li className="group">
                <Link 
                  href="/gallery" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  Photo Gallery
                </Link>
              </li>
              <li className="group">
                <Link 
                  href="/clients" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  Major Clients
                </Link>
              </li>
              <li className="group">
                <Link 
                  href="/contact" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  Contact Us
                </Link>
              </li>
              <li className="group">
                <Link 
                  href="/enquiry" 
                  className="text-neutral-300 hover:text-primary group-hover:pl-2 inline-flex items-center transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300" />
                  Send Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xl mb-5 text-white relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                  Plot No.047, 1st floor, Block-F, Surajpur, Site-B, Industrial Area, Greater Noida, Gautam Buddha Nagar, U.P
                </span>
              </li>
              
              {/* PHONE NUMBERS */}
              {companyInfo.phones?.map((phone, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <Phone className="text-primary h-5 w-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <a 
                    href={`tel:${phone}`} 
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              ))}

              {/* MAIL */}
              <li className="flex items-center gap-3 group">
                <Mail className="text-primary h-5 w-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <a 
                  href="mailto:info@evergeeneclab.com" 
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  info@evergeeneclab.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-primary h-5 w-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <a 
                  href="mailto:info@evergeeneclab.com" 
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  evergreenlab03@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock className="text-primary h-5 w-5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                  Mon-Sat: 9:30AM - 6PM
                </span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Evergreen Enviro Testing LLP. All rights reserved.
            </p>
            {/* <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        className={`fixed bottom-28 right-6 z-30 h-12 w-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary-dark hover:scale-110 focus:outline-none ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
