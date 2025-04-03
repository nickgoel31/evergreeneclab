
import PageHeader from "@/components/shared/page-header";

import { Award, Calendar, Building } from "lucide-react";
import CTASection from "@/components/home/cta-section";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { Certification } from "@/types";
import Link from "next/link";

const CERTIFICATION_QUERY = defineQuery(`*[
  _type == "certification"]`
)

const Certifications = async () => {
  const {data: certifications} = await sanityFetch({query: CERTIFICATION_QUERY});
  return (
    <>
      <PageHeader 
        title="Our Certifications" 
        subtitle="Quality standards and accreditations that validate our commitment to excellence"
        backgroundImage="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Quality Standards</h2>
            <p className="text-neutral-500">
              At Evergreen Enviro, we maintain the highest standards of quality and excellence. Our certifications and accreditations demonstrate our commitment to providing reliable, accurate, and compliant environmental services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert: Certification) => (
              <div key={cert.id} className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-1">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                      <Building className="h-4 w-4" />
                      <span>{cert.issuedBy}</span>
                    </div>
                    {cert.validUntil && <div className="flex items-center gap-2 text-neutral-500 text-sm mt-1">
                      <Calendar className="h-4 w-4" />
                      {<span>Valid until: {cert.validUntil}</span>}
                    </div>}
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4">{cert.description}</p>
                
                <div className="">
                  <div className="flex items-end justify-between h-full">
                    <div className="h-12 mt-top">
                      {cert.logo && (
                        <Image 
                        src={urlFor(cert.logo).url()} 
                        alt={`${cert.title} logo`} 
                        className="h-full max-w-[120px] object-contain object-left"
                        width={500}
                        height={500}
                      />
                      )}
                    </div>
                    {cert.viewLink && (
                      <Link
                        href={cert.viewLink || ""}
                        target="_blank"
                        className="text-primary text-sm font-semibold hover:underline"
                      >
                        View Certificate
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Our Commitment to Quality</h2>
              <p className="text-neutral-500 mb-8">
                Evergreen Enviro Consultancy and Laboratories is committed to maintaining the highest standards of quality in all our testing and consultancy services. Our certifications and accreditations are regularly reviewed and renewed to ensure ongoing compliance with the latest standards and best practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-display font-semibold text-lg mb-3">Quality Management</h3>
                  <p className="text-neutral-600">
                    Our comprehensive quality management system ensures that all testing and consultancy services meet the highest standards of accuracy, reliability, and consistency.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-display font-semibold text-lg mb-3">Staff Qualifications</h3>
                  <p className="text-neutral-600">
                    Our team includes certified professionals with advanced degrees and specialized training in environmental science, chemistry, biology, and related fields.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="font-display font-semibold text-lg mb-3">Continuous Improvement</h3>
                  <p className="text-neutral-600">
                    We regularly evaluate and enhance our procedures, equipment, and methodologies to stay at the forefront of environmental testing and consultancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default Certifications;
