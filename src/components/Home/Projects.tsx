import { Badge } from "@/components";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 my-44" id="projects">
      <div className="flex flex-col items-center justify-center ">
        <Badge text="Our Projects" />
        <h2 className="font-montserrat text-2xl font-bold text-secondary md:text-3xl lg:text-2xl xl:text-5xl mb-4">
          Recent Projects
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        id="projects"
      >
        <div className="relative">
          <Image
            alt="agriculture solar water pump"
            src="/images/home/agri-solar-water-pump.jpg"
            width={165}
            height={154}
            className="w-full object-cover rounded-lg"
          />
          {/* Text */}
          <div className="absolute bottom-4 right-4 bg-secondary bg-opacity-75 px-2 py-1 text-sm text-primary">
            Agricultural Solar Water Pump
          </div>
        </div>
        <div className="relative">
          <Image
            alt="solar water pump"
            src="/images/home/solar-water-project.jpg"
            width={165}
            height={154}
            className="w-full object-cover rounded-lg"
          />
          {/* Text */}
          <div className="absolute bottom-4 right-4 bg-secondary bg-opacity-75 px-2 py-1 text-sm text-primary">
            Solar Water Pump
          </div>
        </div>
        <div className="relative">
          <Image
            alt="community hand pump"
            src="/images/home/community-hand-pump.jpg"
            width={165}
            height={154}
            className="w-full object-cover rounded-lg"
          />
          {/* Text */}
          <div className="absolute bottom-4 right-4 bg-secondary bg-opacity-75 px-2 py-1 text-sm text-primary">
            Community Hand Pump
          </div>
        </div>
        <div className="relative">
          <Image
            alt="clinic-image"
            src="/images/home/clinic-image.jpg"
            width={165}
            height={154}
            className="w-full object-cover rounded-lg"
          />
          {/* Text */}
          <div className="absolute bottom-4 right-4 bg-secondary bg-opacity-75 px-2 py-1 text-sm text-primary">
            Clinic Construction
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
