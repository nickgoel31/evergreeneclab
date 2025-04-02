
import PageHeader from "@/components/shared/page-header";
import CTASection from "@/components/home/cta-section";
import { Check, Award, Users, Microscope, Beaker, RefreshCw, Leaf, HeartHandshake } from "lucide-react";

const About = () => {
  const highlights = [
    {
      id: 1,
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "NABL Accredited",
      description: "Adheres to international standards for quality and technical competence in testing and calibration."
    },
    {
      id: 2,
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "MOEF Approved",
      description: "Recognized by the Ministry of Environment, Forest and Climate Change for compliance with environmental regulations."
    },
    {
      id: 3,
      icon: <Beaker className="h-8 w-8 text-primary" />,
      title: "Comprehensive Testing",
      description: "Specializes in air, water, soil, and waste analysis to support environmental assessments."
    },
    {
      id: 4,
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Modern Technology",
      description: "Utilizes advanced equipment and methodologies to ensure accurate and reliable results."
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Staffed by qualified scientists and technicians dedicated to high-quality environmental testing."
    },
    {
      id: 6,
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Quality Commitment",
      description: "Focused on continuous improvement and maintaining rigorous quality management systems."
    },
    {
      id: 7,
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainability Support",
      description: "Collaborates with businesses and communities to promote responsible environmental practices."
    },
    {
      id: 8,
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Provides expert guidance and support to help clients navigate regulatory requirements."
    }
  ];

  return (
    
      <>
      <PageHeader 
        title="About Evergreen Enviro Testing" 
        subtitle="Providing accurate and reliable environmental testing services"
        backgroundImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-primary font-medium mb-3">WHO WE ARE</h6>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Dedicated to Environmental Excellence</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                We are dedicated to providing accurate and reliable environmental testing services.
                Established to meet the growing need for quality data in environmental assessments, our laboratory specializes in analyzing air, water, soil, and hazardous waste to ensure compliance with environmental regulations and promote public health.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Committed to sustainability and environmental stewardship, we collaborate with businesses, government agencies, and communities to address pressing environmental challenges. Together, we strive to foster a healthier planet through informed decision-making and responsible practices. We are dedicated to continuous improvement, regularly updating our processes and equipment to stay at the forefront of environmental testing.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Join us in our mission to protect and preserve our environment for future generations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Laboratory equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Field testing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Analysis work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-primary font-medium mb-3">OUR VISION & GOAL</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Building a Greener Tomorrow</h2>
            <p className="text-neutral-600">
              We are committed to enhancing environmental health and sustainability for future generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Our vision at Evergreen Enviro Testing LLP is to be the trusted leader in environmental testing, providing accurate and reliable data that empowers communities and organizations to make informed decisions. We are committed to enhancing environmental health and sustainability, ensuring a cleaner, safer planet for future generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Goal</h3>
              <p className="text-xl text-primary font-bold italic mb-4 text-center">
              &quot;LET&apos;S SAVE THE GREEN WORLD TOGETHER&quot;
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We believe that a skilled and knowledgeable workforce is essential for delivering high-quality environmental testing services. Our team of experts utilizes state-of-the-art technology and rigorous methodologies to analyze air, water, soil, and waste samples. We provide accurate, reliable results that empower our clients to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-primary font-medium mb-3">LABORATORY HIGHLIGHTS</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Us</h2>
            <p className="text-neutral-600">
              We strive for excellence in all aspects of our environmental testing services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.slice(0, 4).map((highlight) => (
              <div key={highlight.id} className="bg-neutral-50 p-6 rounded-xl shadow-sm h-full">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {highlight.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-center">{highlight.title}</h3>
                <p className="text-neutral-600 text-sm text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-6">
            {highlights.slice(4, 8).map((highlight) => (
              <div key={highlight.id} className="bg-neutral-50 p-6 rounded-xl shadow-sm h-full">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {highlight.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-center">{highlight.title}</h3>
                <p className="text-neutral-600 text-sm text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-center mb-8">
                <h6 className="text-primary font-medium mb-3">WHO WE ARE</h6>
                <h2 className="text-3xl font-display font-bold mb-4">About Us</h2>
              </div>
              
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Welcome to Evergreen Enviro Testing LLP, a NABL-accredited environmental testing laboratory dedicated to delivering the highest standards of quality and reliability in environmental analysis. Our accreditation from the National Accreditation Board for Testing and Calibration Laboratories (NABL) reflects our commitment to excellence and adherence to international testing standards.
              </p>
              
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Our staff works collaboratively, fostering a supportive environment that encourages knowledge sharing and teamwork. This collaborative spirit ensures that we provide our clients with the best possible service and accurate results.
              </p>
              
              <p className="text-neutral-600 leading-relaxed">
                Driven by a passion for the environment, we strive to support sustainable practices and contribute to a cleaner, healthier world for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
