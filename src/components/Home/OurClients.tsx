import Badge from "../Shared/Badge";
import client1 from "@/assets/images/clients/client-1.jpg";
import client2 from "@/assets/images/clients/client-2.jpg";
import client3 from "@/assets/images/clients/client-3.jpg";
import client4 from "@/assets/images/clients/client-4.jpg";
import client5 from "@/assets/images/clients/client-5.jpg";
import client6 from "@/assets/images/clients/client-6.jpg";
import client7 from "@/assets/images/clients/client-7.jpg";
import client8 from "@/assets/images/clients/client-8.jpg";
import client9 from "@/assets/images/clients/client-9.jpg";
import client10 from "@/assets/images/clients/client-10.jpg";
import client11 from "@/assets/images/clients/client-11.jpg";
import client12 from "@/assets/images/clients/client-12.jpg";
import client13 from "@/assets/images/clients/client-13.jpg";
import client14 from "@/assets/images/clients/client-14.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  const clients = [
    { src: client1, alt: "Client 1" },
    { src: client2, alt: "Client 2" },
    { src: client3, alt: "Client 3" },
    { src: client4, alt: "Client 4" },
    { src: client5, alt: "Client 5" },
    { src: client6, alt: "Client 6" },
    { src: client7, alt: "Client 7" },
    { src: client8, alt: "Client 8" },
    { src: client9, alt: "Client 9" },
    { src: client10, alt: "Client 10" },
    { src: client11, alt: "Client 11" },
    { src: client12, alt: "Client 12" },
    { src: client13, alt: "Client 13" },
    { src: client14, alt: "Client 14" },
  ];

  return (
    <section className="my-44 ">
      <div className="flex flex-col items-center gap-2">
        <Badge text="Our Clients" />
        <h2 className="font-montserrat text-2xl font-bold text-secondary md:text-3xl lg:text-2xl xl:text-5xl mb-4">
          Our Clients
        </h2>
      </div>
      <div className="pt-12">
        <Marquee autoFill speed={100}>
          {clients.map((client, index) => (
            <div key={index} className="mx-10">
              <Image src={client.src} alt={client.alt} width={150} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurClients;
