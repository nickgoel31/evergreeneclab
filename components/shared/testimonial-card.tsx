import { Testimonial } from "@/types";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, company, position, avatar, rating, text } = testimonial;
  
  // Generate rating stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-primary fill-primary" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-primary fill-primary" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-neutral-100 p-6 rounded-xl">
      <div className="flex gap-1 text-primary mb-4">
        {renderStars()}
      </div>
      <p className="text-neutral-500 mb-4">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
          <Image 
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-neutral-400">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
