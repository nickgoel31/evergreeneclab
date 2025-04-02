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
        src={logo} 
        alt={name} 
        className="max-h-8 w-fit transition-all duration-300"
        width={300}
        height={300}
      />
    </div>
  );
};

export default ClientLogo;
