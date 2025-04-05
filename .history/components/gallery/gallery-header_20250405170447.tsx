"use client";

import { useEffect, useState } from "react";

const GalleryHeader = ({slideshowImages}:{slideshowImages:string[]}) => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideshowImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [slideshowImages.length]);
  
    return (
      <div className="relative w-full h-[60vh] overflow-hidden">
        {slideshowImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A visual showcase of our laboratories, field work, and environmental projects
            </p>
          </div>
        </div>
      </div>
    );
};
export default GalleryHeader;