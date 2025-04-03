
import PageHeader from "@/components/shared/page-header";
import { clientsData } from "@/data/clients";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp,  ArrowRight, Building2, Trophy, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Clients = async () => {
  // Key client figures
  const keyFigures = [
    {
      id: 1,
      value: "700+",
      label: "Active Clients",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      id: 2,
      value: "95%",
      label: "Client Satisfaction",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      id: 3,
      value: "3+",
      label: "Years of Service",
      icon: <Sparkles className="h-5 w-5" />
    },
  ];

  // Featured clients (top row with extra emphasis)
  const featuredClients = clientsData.slice(0, 6);
  
  // The rest of the clients
  const regularClients = clientsData.slice(6);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <PageHeader 
        title="Our Clients" 
        subtitle="Organizations that trust us for their environmental testing and consultancy needs"
        backgroundImage="https://images.unsplash.com/photo-1605125950487-5d893d11505e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {keyFigures.map((figure) => (
              <motion.div 
                key={figure.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100"
                variants={itemVariants}
              >
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">{figure.icon}</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{figure.value}</h3>
                <p className="text-neutral-500 font-medium">{figure.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-primary font-medium mb-2">TRUSTED PARTNERSHIPS</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Clients</h2>
            <p className="text-neutral-500">
              Leading organizations that have chosen us as their environmental consultancy partner.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featuredClients.map((client) => (
              <motion.div 
                key={client.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center aspect-square"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-12 max-w-[80%] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">Our Global Client Network</h2>
            <p className="text-neutral-500">
              We&apos;re proud to work with organizations worldwide that are committed to environmental responsibility.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {regularClients.map((client) => (
              <motion.div 
                key={client.id} 
                className="bg-neutral-50 rounded-lg p-4 flex items-center justify-center h-24 hover:bg-white hover:shadow-sm transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-10 max-w-[80%] grayscale hover:grayscale-0 transition-all duration-300"
                  width={100}
                  height={100}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-full">
              <ThumbsUp className="text-primary h-5 w-5" />
              <span className="font-medium">Working with 350+ clients across 25+ countries</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="text-primary font-medium mb-2">CLIENT TESTIMONIALS</h6>
            <h2 className="text-3xl font-display font-bold mb-4">Success Stories</h2>
            <p className="text-neutral-500">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-2xl shadow-md relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/80"></div>
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block text-yellow-400 h-5 w-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-neutral-200 rounded-full overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/${testimonial.id % 2 === 0 ? 'men' : 'women'}/${testimonial.id + 30}.jpg`} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">{testimonial.name}</h4>
                    <p className="text-neutral-500">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Ready to Join Our Client Portfolio?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              Contact our team today to discuss how Evergreen Enviro can support your environmental testing and consultancy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquiry">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="rounded-full px-8 py-6 h-auto border-2 border-primary/80 text-primary hover:bg-primary/5">
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Clients;
