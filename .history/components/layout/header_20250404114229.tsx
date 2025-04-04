"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/services";
import { usePathname } from "next/navigation";
import Logo from "../shared/logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/about" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              About Us
            </a>
          </Link>

          {/* Services Dropdown */}
          <div className="relative nav-dropdown-container group">
            <span className={cn(
              "font-medium flex items-center gap-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 group-hover:after:w-full after:transition-all after:duration-300", 
              pathname.startsWith("/services") ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </span>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[250px] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-primary/10">
              {servicesData.map((service) => (
                <Link 
                  key={service.id} 
                  href={`/services/${service.slug}`} 
                  legacyBehavior
                >
                  <a className="px-4 py-2 hover:bg-primary/5 hover:text-primary transition-all duration-200 flex items-center gap-2 group/item">
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 text-primary transition-all duration-200" />
                    <span>{service.title}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/certifications" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/certifications" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Certifications
            </a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/gallery" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Gallery
            </a>
          </Link>
          <Link href="/clients" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/clients" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Clients
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={cn(
              "font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300", 
              pathname === "/contact" ? "text-primary after:w-full" : "text-neutral-700 hover:text-primary"
            )}>
              Contact
            </a>
          </Link>
        </nav>

        <Link href="/enquiry" legacyBehavior className="hidden md:block">
          <a>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-transform hover:scale-105 duration-300 shadow-md hover:shadow-lg">
              Send Enquiry
            </Button>
          </a>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-neutral-500 hover:text-primary z-50 transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={cn(
              "absolute block w-6 h-0.5 bg-current transition-all duration-300",
              isMenuOpen 
                ? "opacity-0" 
                : "top-3 opacity-100"
            )}></span>
            <span className={cn(
              "absolute block w-6 h-0.5 bg-white transition-all duration-300",
              isMenuOpen 
                ? "top-3 rotate-45" 
                : "top-1"
            )}></span>
            <span className={cn(
              "absolute block w-6 h-0.5 bg-current transition-all duration-300",
              isMenuOpen 
                ? "bottom-2.5 -rotate-45" 
                : "bottom-1"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-primary/95 z-40 md:hidden transition-all duration-300 flex flex-col",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto translate-x-0" 
            : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <div className="px-6 py-24 flex flex-col h-full overflow-y-auto">
          <nav className="space-y-6 text-white">
            <Link href="/" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/about" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                About Us
              </a>
            </Link>
            
            {/* Services with accordion behavior */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left py-2 text-xl font-medium text-white/90 hover:text-white transition-all"
                onClick={toggleServices}
              >
                Services
                <ChevronDown className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  isServicesOpen ? "rotate-180" : ""
                )} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 pl-4",
                isServicesOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
              )}>
                {servicesData.map((service) => (
                  <Link 
                    key={service.id} 
                    href={`/services/${service.slug}`} 
                    legacyBehavior
                  >
                    <a 
                      className="block py-2 text-white/80 hover:text-white transition-all hover:pl-2 duration-200" 
                      onClick={toggleMenu}
                    >
                      {service.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link href="/certifications" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/certifications" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                Certifications
              </a>
            </Link>
            <Link href="/gallery" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/gallery" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                Gallery
              </a>
            </Link>
            <Link href="/clients" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/clients" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                Clients
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a 
                className={cn(
                  "block py-2 text-xl font-medium transition-all duration-200", 
                  pathname === "/contact" ? "text-white font-bold" : "text-white/90 hover:pl-2"
                )} 
                onClick={toggleMenu}
              >
                Contact
              </a>
            </Link>
          </nav>
          
          <div className="mt-auto pt-10">
            <Link href="/enquiry" legacyBehavior>
              <a 
                className="block mt-2 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-full font-medium text-center shadow-md transition-all duration-300" 
                onClick={toggleMenu}
              >
                Send Enquiry
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
