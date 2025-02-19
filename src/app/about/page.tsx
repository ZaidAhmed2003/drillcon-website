import { Contact } from "@/components";
import { aboutContent } from "@/constants/content";
import { FaHandshake, FaTools } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <section className="container mx-auto px-4 my-36">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
            Who Are We?
          </h1>
          <p className="text-lg tracking-wider leading-[27.5px] mb-12 text-gray-600 max-w-5xl mx-auto">
            We are committed to delivering exceptional construction and drilling
            services with a focus on safety, quality, and efficiency. With years
            of experience in the industry, we specialize in providing
            comprehensive solutions for both commercial and residential
            projects. Our team of skilled professionals uses state-of-the-art
            equipment to handle everything from site preparation and excavation
            to complex drilling operations.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaTools className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Expertise</h3>
              </div>
              <p className="text-gray-600 text-left tracking-wider leading-[27.5px]">
                Specializing in both commercial and residential projects, we
                offer a comprehensive range of services from site preparation
                and excavation to complex drilling operations. Our team of
                certified professionals is equipped with state-of-the-art
                technology to ensure precision and efficiency in every project.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-xl ">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaHandshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Approach</h3>
              </div>
              <p className="text-gray-600 text-left tracking-wider leading-[27.5px]">
                We believe in a collaborative approach, working closely with our
                clients to understand their unique needs and deliver customized
                solutions. Our commitment to quality, safety, and environmental
                responsibility is reflected in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 my-36">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6  py-10  border border-gray-200 rounded-lg">
              <div className="flex justify-center text-4xl text-primary mb-4">
                {aboutContent.mission.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                {aboutContent.mission.title}
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                {aboutContent.mission.description}
              </p>
            </div>

            <div className="text-center p-6 py-10 border border-gray-200 rounded-lg">
              <div className="flex justify-center text-4xl text-primary mb-4">
                {aboutContent.commitment.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                {aboutContent.commitment.title}
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                {aboutContent.commitment.description}
              </p>
            </div>

            <div className="text-center p-6  py-10  border border-gray-200 rounded-lg">
              <div className="flex justify-center text-4xl text-primary mb-4">
                {aboutContent.vision.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                {aboutContent.vision.title}
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                {aboutContent.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Page;
