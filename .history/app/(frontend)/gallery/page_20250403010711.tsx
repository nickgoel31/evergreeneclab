
import PageHeader from "@/components/shared/page-header";
import SquareGallery from "@/components/gallery/square-gallery";
import { galleryData } from "@/data/gallery";

const Gallery = () => {
  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="A visual showcase of our laboratories, field work, and environmental projects"
        backgroundImage="https://images.unsplash.com/photo-1527490587169-a2a66beb9860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Work in Pictures</h2>
            <p className="text-neutral-500">
              Take a visual journey through our laboratories, field operations, and successful environmental projects. Click on any image to view it in detail.
            </p>
          </div>
          
          <div className="mt-8">
            <SquareGallery items={galleryData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
