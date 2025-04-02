"use client"

import { useState } from "react";
import { GalleryItem as GalleryItemType } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface GalleryItemProps {
  item: GalleryItemType;
  className?: string;
}

const GalleryItem = ({ item, className = "" }: GalleryItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div 
          className={`relative rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition ${className}`}
        >
          <Image 
            src={item.src} 
            alt={item.alt} 
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
            <h3 className="text-white font-medium">{item.alt}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none">
        <div className="relative overflow-hidden rounded-lg">
          <Image 
            src={item.src} 
            alt={item.alt} 
            className="w-full h-auto object-cover max-h-[80vh]"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <h3 className="text-white font-medium text-lg">{item.alt}</h3>
            <p className="text-white/80 text-sm">{item.category}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryItem;
