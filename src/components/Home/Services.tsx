import { Badge } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="container mx-auto px-4 my-44">
      <div className="flex flex-col items-center justify-center">
        <Badge text="Services" />
        <h2 className="font-montserrat text-2xl font-bold text-secondary md:text-3xl lg:text-2xl xl:text-5xl mb-4">
          Our Services
        </h2>
        <p className="tracking-wider leading-[27.5px] max-w-4xl text-center text-gray-600">
          Welcome to our comprehensive service catalog, where we cater to
          diverse needs with top-notch expertise and unwavering commitment.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        <div className="border-2 border-primary p-6 pt-10 rounded-4xl ">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold font-montserrat mb-2">
              Drilling Services
            </h3>
            <Link
              href={"services/drilling"}
              className="p-5 rounded-full bg-primary text-secondary"
            >
              <MdArrowOutward className="h-5 w-5" />
            </Link>
          </div>
          <p className="tracking-wider leading-[27.5px] mb-4 text-gray-600">
            We provide expert drilling solutions for geotechnical assessments,
            water wells, resource exploration, and stable foundations. From
            retrieving core samples for mineral and oil discovery to ensuring
            clean water access and secure construction foundations, our
            comprehensive drilling services support residential, commercial, and
            industrial projects with precision and reliability
          </p>
          <Image
            src="/images/home/drilling-services.png"
            alt="drilling service"
            width={725}
            height={725}
          />
        </div>
        <div className="border-2 border-primary p-6 pt-10 rounded-4xl ">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold font-montserrat mb-2">
              Construction Services
            </h3>
            <Link
              href={"services/construction"}
              className="p-5 rounded-full bg-primary text-secondary"
            >
              <MdArrowOutward className="h-5 w-5" />
            </Link>
          </div>
          <p className="tracking-wider leading-[27.5px] mb-4 text-gray-600">
            From residential to commercial and industrial projects, we handle
            every phase of construction with expertise. Our services span
            initial design, site preparation, and structural execution, ensuring
            quality, durability, and safety at each step. Whether building
            homes, offices, or large industrial facilities, we bring reliability
            and precision to every project.
          </p>
          <Image
            src="/images/home/construction-services.png"
            alt="drilling service"
            width={725}
            height={725}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
