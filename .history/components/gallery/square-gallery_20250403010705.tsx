import { useState } from "react";
import { GalleryItem as GalleryItemType } from "@/types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface SquareGalleryProps {
  items: GalleryItemType[];
}

const SquareGallery = ({ items }: SquareGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItemType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (item: GalleryItemType) => {
    setSelectedImage(item);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition"
            onClick={() => handleImageClick(item)}
          >
            <Image 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <h3 className="text-white font-medium text-sm">{item.alt}</h3>
            </div>
          </div>
        ))}
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
    </>
  );
};

export default SquareGallery;