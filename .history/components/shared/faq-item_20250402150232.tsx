import { useState } from "react";
import { FAQ } from "@/types";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = faq;

  return (
    <div className="border-b border-neutral-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        {isOpen ? (
          <Minus className="text-primary flex-shrink-0" />
        ) : (
          <Plus className="text-primary flex-shrink-0" />
        )}
      </button>
      <div className={`mt-3 text-neutral-400 ${isOpen ? "block" : "hidden"}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;
