"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { galleryData } from "@/data/gallery";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const GalleryPreview = () => {
  // Take first 6 images for preview
  const previewImages = galleryData.slice(0, 6);
  const [selectedImage, setSelectedImage] = useState<typeof previewImages[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (image: typeof previewImages[0]) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {previewImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square rounded-xl overflow-hidden group hover:shadow-lg transition cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition group-hover:scale-105"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <h3 className="text-white font-medium text-sm">{image.alt}</h3>
              </div>
            </div>
          ))}
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative overflow-hidden rounded-lg">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto object-cover max-h-[80vh]"
                width={1000}
                height={1000}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-medium text-lg">{selectedImage.alt}</h3>
                <p className="text-white/80 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalleryPreview;
