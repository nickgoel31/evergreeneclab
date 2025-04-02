import { testimonialsData } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/testimonial-card";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary font-medium mb-3">TESTIMONIALS</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-400">
            Hear from organizations that have benefited from our environmental consultancy and laboratory services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
