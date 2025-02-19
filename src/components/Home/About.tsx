import Image from "next/image";
import { Badge, Button } from "@/components";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <section className="container mx-auto my-44 px-4">
      {/* ABOUT */}
      <div className="grid justify-center gap-6 px-2 md:px-0 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="border-primary border-2 xl:p-5">
          <Image
            className="rounded-sm shadow-lg"
            src="/images/home/about-image.jpeg"
            alt="Drillcon About Image"
            width={1000}
            height={1000}
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="text-center lg:text-start">
          <div className="mb-5 flex flex-col items-center gap-2 md:mb-4 lg:mb-4 lg:items-start lg:gap-1">
            <Badge text="About Us" />
            <div className="flex flex-col gap-4 md:gap-4">
              <h2 className="font-montserrat text-secondary text-4xl font-bold md:text-5xl xl:text-5xl">
                DRILLCON Your Trusted Partner in Drilling & Construction
                Solutions.
              </h2>
              <p className="leading-[27.5px] tracking-wider text-gray-600">
                At DRILLCON, we combine innovative engineering, state-of-the-art
                technology, and a dedicated workforce to deliver top-tier
                drilling and construction solutions. With over eight years of
                experience, we pride ourselves on our ability to handle projects
                of all sizes and complexities, from small-scale developments to
                large infrastructure projects. Our team is committed to
                maintaining the highest standards of safety, quality, and
                environmental responsibility, ensuring efficiency and
                long-lasting results in every project we undertake.
              </p>
            </div>
          </div>
          <div className="w-44">
            <Button href="/about" icon={<MdArrowOutward className="h-5 w-5" />}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
