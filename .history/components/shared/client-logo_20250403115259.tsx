import { urlFor } from "@/sanity/lib/image";
import { Client } from "@/types";
import Image from "next/image";

interface ClientLogoProps {
  client: Client;
}

const ClientLogo = ({ client }: ClientLogoProps) => {
  const { name, logo } = client;

  return (
    <div className="client-logo w-32 h-16 flex items-center justify-center">
      <Image 
        src={urlFor(logo).url()} 
        alt={name} 
        className="max-h-8 w-fit transition-all duration-300"
        width={500}
        height={300}
      />
    </div>
  );
};

export default ClientLogo;
