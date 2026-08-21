import { clients } from "@/lib/clients";
import Image from "next/image";

const ClientLogos = () => {
  return (
    <div className="flex gap-20 items-center shrink-0 pr-20">
      {clients.map((client) => {
        return (
          <Image
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
