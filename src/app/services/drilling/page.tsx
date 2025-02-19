import { Contact } from "@/components";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home/about-image.jpeg"
            alt="Drillcon Drilling Services"
            layout="fill"
            objectFit="cover"
            className="scale-105 transform transition-transform duration-1000 hover:scale-100"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="px-4 text-center">
            <h1 className="animate-fade-in mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Drilling Services
            </h1>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-44 px-4">
        <p>
          At DRILLCON, we specialize in providing a wide range of construction
          services, including the development of schools, mosques, and
          renovation projects. Our expertise spans across various sectors,
          ensuring that we can meet the unique needs of each client while
          delivering high-quality, sustainable results.
        </p>
      </section>

      <section className="container mx-auto my-44 px-4">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:-order-last order-1">
            <h3 className="mb-4 text-3xl font-bold">School Construction</h3>
            <p>
              We understand the importance of creating safe, functional, and
              inspiring educational environments, which is why our school
              construction services include comprehensive solutions from design
              to build. We create optimal learning spaces that foster
              creativity, collaboration, and focus, incorporating eco-friendly
              materials and energy-efficient systems to ensure long-term
              viability. Our team also ensures that all construction meets
              safety regulations, accessibility standards, and educational
              requirements.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className="container mx-auto my-44 px-4">
        <div className="grid gap-5 md:grid-cols-2">
          <div></div>
          <div>
            <h3 className="mb-4 text-3xl font-bold">Mosque Construction</h3>
            <p>
              In addition to school construction, we also specialize in building
              mosques that serve as both places of worship and community
              centers. We work closely with clients to create mosque designs
              that blend traditional Islamic architecture with modern
              functionality, while maintaining the spiritual significance of the
              space. We focus on distinctive elements such as minarets, domes,
              prayer halls, and ablution areas, using durable and aesthetic
              materials that reflect the dignity and serenity of the space.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-44 px-4">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:-order-last order-1">
            <h3 className="mb-4 text-3xl font-bold">Renovation Services</h3>
            <p>
              Our renovation services are designed to refresh existing buildings
              or restore their original beauty. We offer complete structural
              overhauls, interior and exterior renovations, restoration of
              historic buildings, and modernization services that incorporate
              modern technologies and amenities. Whether you're looking to
              upgrade your building's functionality, aesthetics, or energy
              efficiency, we provide tailored solutions that align with your
              vision, needs, and budget.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className="container mx-auto my-44 px-4">
        <p>
          At DRILLCON, we pride ourselves on our expert team, tailored
          solutions, and commitment to quality assurance. Our team consists of
          skilled architects, engineers, and construction professionals who are
          passionate about creating spaces that serve communities and last for
          generations. We deliver the highest quality workmanship and materials,
          ensuring every project is completed on time and to the highest
          standards. Whether you are building a new school, mosque, or
          renovating an existing structure, we are here to bring your vision to
          life with professionalism and expertise. Contact us today to learn
          more about our services or to discuss your next project.
        </p>
      </section>

      <Contact />
    </>
  );
};

export default page;
