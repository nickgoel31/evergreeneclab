import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  }
  
  const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
    return (
      <section className="relative bg-primary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          {backgroundImage && (
            <>
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
              <Image
                src={backgroundImage} 
                alt={title} 
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </>
          )}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/90 text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default PageHeader;
  