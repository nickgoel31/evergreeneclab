import { GalleryItem as GalleryItemType } from "@/types";
import GalleryItem from "@/components/shared/gallery-item";

interface BentoGalleryProps {
  items: GalleryItemType[];
}

const BentoGallery = ({ items }: BentoGalleryProps) => {
  return (
    <div className="gallery-container">
      {items.map((item, index) => {
        // Determine the class based on the item's position
        let itemClass = "gallery-item";
        
        if (index % 4 === 0) {
          itemClass += " md:col-span-2 md:row-span-2"; // Big square
        } else if (index % 8 === 3) {
          itemClass += " md:col-span-2"; // Wide rectangle
        } else if (index % 6 === 5) {
          itemClass += " md:row-span-2"; // Tall rectangle
        }
        
        return (
          <GalleryItem key={item.id} item={item} className={itemClass} />
        );
      })}
    </div>
  );
};

export default BentoGallery;
