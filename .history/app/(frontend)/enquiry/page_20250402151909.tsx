
import PageHeader from "@/components/shared/page-header";
import EnquiryForm from "@/components/shared/enquiry-form";
import { servicesData } from "@/data/services";
import { Check } from "lucide-react";

const Enquiry = () => {
  return (
    <>
      <PageHeader 
        title="Send an Enquiry" 
        subtitle="Request a quote for our environmental testing and consultancy services"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 lg:col-span-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Request a Quote</h2>
              <p className="text-neutral-500 mb-8">
                Fill out the form to request a detailed quote for any of our services. Our team will get back to you within 24 hours.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-xl mb-8">
                <h3 className="font-display font-semibold text-lg mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">ISO certified laboratory facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">Expert environmental consultants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">Fast turnaround times for testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">Comprehensive service packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-primary h-3 w-3" />
                    </div>
                    <span className="text-neutral-600">Competitive and transparent pricing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-display font-semibold text-lg mb-3">Need Urgent Assistance?</h3>
                <p className="text-neutral-600 mb-4">
                  For immediate support or emergency environmental services, please call our direct line:
                </p>
                <div className="text-primary font-bold text-xl">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8">
              <div className="bg-neutral-50 p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl font-display font-bold mb-6">Enquiry Form</h2>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-neutral-500">
              Explore the full range of environmental services we offer to meet your specific needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-neutral-500 text-sm mb-4">{service.description}</p>
                <a href={`/services/${service.slug}`} className="text-primary font-medium text-sm hover:text-primary-dark">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
