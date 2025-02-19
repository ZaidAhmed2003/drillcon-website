import { Contact } from "@/components";
import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake, FaTools } from "react-icons/fa";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/about-image.jpeg"
            alt="Drillcon About"
            layout="fill"
            objectFit="cover"
            className="transform scale-105 hover:scale-100 transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              Building the Future
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-fade-in-up">
              With innovation, expertise, and commitment, we shape the world
              around us
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 mt-24">
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

      <section className="container mx-auto px-4 my-8">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6  py-10  border border-gray-200 rounded-lg">
              <div className="flex justify-center text-center mb-2">
                <FaBullseye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                Our Mission
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                Our mission is to provide reliable, high-quality construction
                and drilling services that exceed client expectations while
                maintaining the highest standards of safety and environmental
                responsibility. We pride ourselves on our reputation for
                delivering projects that stand the test of time and contribute
                to the growth and development of our community.
              </p>
            </div>

            <div className="text-center p-6 py-10 border border-gray-200 rounded-lg">
              <div className="flex justify-center text-center mb-2">
                <FaHandshake className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                Our Commitment
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                we are unwavering in our commitment to excellence, safety, and
                integrity in every aspect of our work. Whether it's a
                small-scale project or a large, complex drilling operation, we
                approach every task with the same dedication to
                quality and precision.
              </p>
            </div>

            <div className="text-center p-6  py-10  border border-gray-200 rounded-lg">
              <div className="flex justify-center text-center mb-2">
                <FaEye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-secondary ">
                Our Vision
              </h2>
              <p className="text-gray-600 tracking-wide leading-relaxed">
                We envision a future where every project we undertake
                contributes to shaping a better, more efficient world—one where
                safety, environmental responsibility, and customer satisfaction
                are at the forefront of everything we do.
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
