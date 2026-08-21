import Image from "next/image";
import type { Client } from "@/types/collections/clients";

type ClientLogosProps = {
  clients: Client[];
};

const ClientLogos = ({ clients }: ClientLogosProps) => {
  return (
    <div className="flex gap-20 items-center shrink-0 pr-20">
      {clients.map((client) => {
        return (
          <Image
            key={client.name}
            src={client.logo}
            alt={client.name}
            width="250"
            height="50"
          />
        );
      })}
    </div>
  );
};

export default ClientLogos;
