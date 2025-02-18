import { Badge } from "@/components";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 my-44">
      <div className="flex flex-col items-center justify-center">
        <Badge text="Our Projects" />
        <h2 className="font-montserrat text-2xl font-bold text-secondary md:text-3xl lg:text-2xl xl:text-5xl mb-4">
          Recent Projects
        </h2>
      </div>
      <div className="" id="projects"></div>
    </section>
  );
};

export default Projects;
