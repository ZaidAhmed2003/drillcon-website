import { Contact } from "@/components";
import Image from "next/image";
import { FaBullseye, FaEye, FaHandshake, FaTools } from "react-icons/fa";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home/about-image.jpeg"
            alt="Drillcon About"
            layout="fill"
            objectFit="cover"
            className="scale-105 transform transition-transform duration-1000 hover:scale-100"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="px-4 text-center">
            <h1 className="animate-fade-in mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Building the Future
            </h1>
            <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-white md:text-xl">
              With innovation, expertise, and commitment, we shape the world
              around us
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-24 px-4">
        <div className="text-center">
          <h1 className="from-primary to-secondary mb-8 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Who Are We?
          </h1>
          <p className="mx-auto mb-12 max-w-5xl text-lg leading-[27.5px] tracking-wider text-gray-600">
            We are committed to delivering exceptional construction and drilling
            services with a focus on safety, quality, and efficiency. With years
            of experience in the industry, we specialize in providing
            comprehensive solutions for both commercial and residential
            projects. Our team of skilled professionals uses state-of-the-art
            equipment to handle everything from site preparation and excavation
            to complex drilling operations.
          </p>
          <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <FaTools className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Expertise</h3>
              </div>
              <p className="text-left leading-[27.5px] tracking-wider text-gray-600">
                Specializing in both commercial and residential projects, we
                offer a comprehensive range of services from site preparation
                and excavation to complex drilling operations. Our team of
                certified professionals is equipped with state-of-the-art
                technology to ensure precision and efficiency in every project.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <FaHandshake className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Our Approach</h3>
              </div>
              <p className="text-left leading-[27.5px] tracking-wider text-gray-600">
                We believe in a collaborative approach, working closely with our
                clients to understand their unique needs and deliver customized
                solutions. Our commitment to quality, safety, and environmental
                responsibility is reflected in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8 px-4">
        <div className="">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 py-10 text-center">
              <div className="mb-2 flex justify-center text-center">
                <FaBullseye className="text-primary h-8 w-8" />
              </div>
              <h2 className="font-montserrat text-secondary mb-4 text-2xl font-bold">
                Our Mission
              </h2>
              <p className="leading-relaxed tracking-wide text-gray-600">
                Our mission is to provide reliable, high-quality construction
                and drilling services that exceed client expectations while
                maintaining the highest standards of safety and environmental
                responsibility. We pride ourselves on our reputation for
                delivering projects that stand the test of time and contribute
                to the growth and development of our community.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 py-10 text-center">
              <div className="mb-2 flex justify-center text-center">
                <FaHandshake className="text-primary h-8 w-8" />
              </div>
              <h2 className="font-montserrat text-secondary mb-4 text-2xl font-bold">
                Our Commitment
              </h2>
              <p className="leading-relaxed tracking-wide text-gray-600">
                we are unwavering in our commitment to excellence, safety, and
                integrity in every aspect of our work. Whether it's a
                small-scale project or a large, complex drilling operation, we
                approach every task with the same dedication to
                quality and precision.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 py-10 text-center">
              <div className="mb-2 flex justify-center text-center">
                <FaEye className="text-primary h-8 w-8" />
              </div>
              <h2 className="font-montserrat text-secondary mb-4 text-2xl font-bold">
                Our Vision
              </h2>
              <p className="leading-relaxed tracking-wide text-gray-600">
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
