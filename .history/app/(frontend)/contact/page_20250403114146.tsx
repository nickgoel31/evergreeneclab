
import PageHeader from "@/components/shared/page-header";
import ContactForm from "@/components/shared/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const INFO_QUERY = defineQuery(`*[
  _type == "companyInformation"][0]`
)
//name, description, contactEmails, phones, address

const Contact = async () => {
  const {data: info} = await sanityFetch({query: INFO_QUERY});
  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: info.address ? [info.address] : ["123 Evergreen Lane, Suite 100, Cityville, ST 12345"],
    },
    {
      id: 2,
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Number",
      details: info.phones
    },
    {
      id: 3,
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: info.contactEmails
    },
    {
      id: 4,
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9AM - 5PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or support"
        backgroundImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-500 mb-8">
                Have questions about our services or want to request a quote? Contact our team using any of the methods below or fill out the contact form.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-neutral-500">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 bg-neutral-50 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Visit Our Office</h2>
            <p className="text-neutral-500">
              Our headquarters is located in a centrally accessible location. We welcome you to visit us in person.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1620287781915!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              aria-label="Map showing Evergreen Enviro Consultancy location"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contact;
