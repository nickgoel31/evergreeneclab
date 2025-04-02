import Link from "next/link"
import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/gallery";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const GalleryPreview = () => {
  // Take first 5 images for preview
  const previewImages = galleryData.slice(0, 5);

  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h6 className="text-primary font-medium mb-3">OUR GALLERY</h6>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Showcasing Our Work & Facilities</h2>
          <p className="text-neutral-400">
            Take a visual journey through our laboratories, field operations, and successful environmental projects.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="relative aspect-square rounded-xl overflow-hidden group hover:shadow-lg transition">
            <Image 
              src={previewImages[0].src} 
              alt={previewImages[0].alt} 
              className="w-full h-full object-cover transition group-hover:scale-105"
              width={1000}
                height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium">{previewImages[0].alt}</h3>
            </div>
          </div>
          
          <div className="relative md:row-span-2 aspect-square md:aspect-auto rounded-xl overflow-hidden group hover:shadow-lg transition">
            <Image 
              src={previewImages[1].src}
              alt={previewImages[1].alt}
              className="w-full h-full object-cover transition group-hover:scale-105"
              width={1000}
                height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium">{previewImages[1].alt}</h3>
            </div>
          </div>
          
          <div className="relative col-span-2 md:col-span-1 aspect-video md:aspect-square rounded-xl overflow-hidden group hover:shadow-lg transition">
            <Image 
              src={previewImages[2].src}
              alt={previewImages[2].alt}
              className="w-full h-full object-cover transition group-hover:scale-105"
              width={1000}
                height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium">{previewImages[2].alt}</h3>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-xl overflow-hidden group hover:shadow-lg transition">
            <Image 
              src={previewImages[3].src}
              alt={previewImages[3].alt}
              className="w-full h-full object-cover transition group-hover:scale-105"
              width={1000}
                height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium">{previewImages[3].alt}</h3>
            </div>
          </div>
          
          <div className="relative md:col-span-2 aspect-video rounded-xl overflow-hidden group hover:shadow-lg transition">
            <Image 
              src={previewImages[4].src}
              alt={previewImages[4].alt}
              className="w-full h-full object-cover transition group-hover:scale-105"
              width={1000}
                height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium">{previewImages[4].alt}</h3>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
