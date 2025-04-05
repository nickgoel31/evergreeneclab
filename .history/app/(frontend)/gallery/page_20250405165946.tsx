
import PageHeader from "@/components/shared/page-header";
import SquareGallery from "@/components/gallery/square-gallery";
import { sanityFetch } from "@/sanity/lib/live";

const GALLERY_QUERY = `*[_type == "galleryImage"]`;



const Gallery = async () => {
  const {data: galleryData} = await sanityFetch({query: GALLERY_QUERY});
  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="A visual showcase of our laboratories, field work, and environmental projects"
        backgroundImage="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
