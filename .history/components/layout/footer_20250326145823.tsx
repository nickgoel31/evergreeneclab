import { Link } from 'wouter';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold">EE</span>
              </div>
              <span className="font-bold text-white text-lg">
                Evergreen <span className="text-green-500">Enviro</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6">
              Providing comprehensive environmental testing and consultancy services for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Services</div>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Gallery</div>
                </Link>
              </li>
              <li>
                <Link href="/certifications">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Certifications</div>
                </Link>
              </li>
              <li>
                <Link href="/clients">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Clients</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-medium text-lg text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#monitoring">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Environmental Monitoring</div>
                </Link>
              </li>
              <li>
                <Link href="/services#testing">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Laboratory Testing</div>
                </Link>
              </li>
              <li>
                <Link href="/services#waste">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Waste Management</div>
                </Link>
              </li>
              <li>
                <Link href="/services#impact">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Environmental Impact Assessment</div>
                </Link>
              </li>
              <li>
                <Link href="/services#sustainability">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Sustainability Consulting</div>
                </Link>
              </li>
              <li>
                <Link href="/services#compliance">
                  <div className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Compliance Assistance</div>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-medium text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span className="text-neutral-400">123 Environment Way, Green City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-neutral-400">info@evergreenenvirolabs.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-neutral-400">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Policy Links */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Evergreen Enviro Consultancy and Laboratories. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
              <Link href="/sitemap">
                <div className="text-neutral-500 hover:text-white transition-colors cursor-pointer">Sitemap</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
