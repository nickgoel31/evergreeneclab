
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { faqsData } from "@/data/faqs";
import FAQItem from "@/components/shared/faq-item";
import { ArrowRight, Headset } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h6 className="text-primary font-medium mb-3">FREQUENTLY ASKED QUESTIONS</h6>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Common Questions</h2>
            <p className="text-neutral-400 mb-6">
              Find answers to frequently asked questions about our environmental testing and consultancy services.
            </p>
            
            <div className="bg-neutral-100 p-6 rounded-xl mb-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Headset className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Still have questions?</h3>
                  <p className="text-neutral-400">Contact our team for answers to your specific queries.</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/contact">
                  <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full w-full justify-center">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            {faqsData.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
