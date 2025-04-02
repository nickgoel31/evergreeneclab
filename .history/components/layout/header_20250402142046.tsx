"use client"

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold">E</span>
          </div>
          <span className="font-display font-semibold text-lg text-neutral-500">
            Evergreen <span className="text-primary">Enviro</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/" && "text-primary")}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/about" && "text-primary")}>
              About Us
            </a>
          </Link>

          {/* Services Dropdown */}
          <div className="relative nav-dropdown-container group">
            <Link href="#">
              <a className={cn("font-medium hover:text-primary transition flex items-center gap-1", 
                pathname.startsWith("/services") && "text-primary")}>
                Services <ChevronDown className="h-4 w-4" />
              </a>
            </Link>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
              {servicesData.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <a className="block px-4 py-2 hover:bg-neutral-100 hover:text-primary transition">
                    {service.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/certifications">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/certifications" && "text-primary")}>
              Certifications
            </a>
          </Link>
          <Link href="/gallery">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/gallery" && "text-primary")}>
              Gallery
            </a>
          </Link>
          <Link href="/clients">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/clients" && "text-primary")}>
              Clients
            </a>
          </Link>
          <Link href="/contact">
            <a className={cn("font-medium hover:text-primary transition", pathname === "/contact" && "text-primary")}>
              Contact
            </a>
          </Link>
        </nav>

        <Link href="/enquiry" className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
            Send Enquiry
          </Button>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-neutral-500 hover:text-primary"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-3 border-t border-neutral-200">
          <Link href="/">
            <a className={cn("block py-2 font-medium", pathname === "/" && "text-primary")} onClick={toggleMenu}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={cn("block py-2 font-medium", pathname === "/about" && "text-primary")} onClick={toggleMenu}>
              About Us
            </a>
          </Link>
          <div className="block py-2 font-medium">Services</div>
          {servicesData.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <a className="block py-2 font-medium pl-4 text-sm" onClick={toggleMenu}>
                {service.title}
              </a>
            </Link>
          ))}
          <Link href="/certifications">
            <a className={cn("block py-2 font-medium", pathname === "/certifications" && "text-primary")} onClick={toggleMenu}>
              Certifications
            </a>
          </Link>
          <Link href="/gallery">
            <a className={cn("block py-2 font-medium", pathname === "/gallery" && "text-primary")} onClick={toggleMenu}>
              Gallery
            </a>
          </Link>
          <Link href="/clients">
            <a className={cn("block py-2 font-medium", pathname === "/clients" && "text-primary")} onClick={toggleMenu}>
              Clients
            </a>
          </Link>
          <Link href="/contact">
            <a className={cn("block py-2 font-medium", pathname === "/contact" && "text-primary")} onClick={toggleMenu}>
              Contact
            </a>
          </Link>
          <Link href="/enquiry">
            <a 
              className="block mt-2 bg-primary text-white px-4 py-2 rounded-full font-medium text-center" 
              onClick={toggleMenu}
            >
              Send Enquiry
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;