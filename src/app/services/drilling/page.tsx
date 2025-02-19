import { Contact } from "@/components";

const page = () => {
  return (
    <>
      {/* <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
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
              Building the Future
            </h1>
            <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-white md:text-xl">
              With innovation, expertise, and commitment, we shape the world
              around us
            </p>
          </div>
        </div>
      </div>

      <Section>
        <Paragraph
          className="text-center"
          text="At DRILLCON, we specialize in providing a wide range of construction services, including the development of schools, mosques, and renovation projects. Our expertise spans across various sectors, ensuring that we can meet the unique needs of each client while delivering high-quality, sustainable results."
        />
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:-order-last order-1">
            <h3 className="mb-4 text-3xl font-bold">School Construction</h3>
            <Paragraph
              className="mb-4"
              text="We understand the importance of creating safe, functional, and inspiring educational environments, which is why our school construction services include comprehensive solutions from design to build. We create optimal learning spaces that foster creativity, collaboration, and focus, incorporating eco-friendly materials and energy-efficient systems to ensure long-term viability. Our team also ensures that all construction meets safety regulations, accessibility standards, and educational requirements."
            />
          </div>
          <div>
            <Image
              src={schoolConstructionImage}
              alt="school-construction"
              className="w-[100%]"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Image src={mosqueConstructionImage} alt="school-construction" />
          </div>
          <div>
            <h3 className="mb-4 text-3xl font-bold">Mosque Construction</h3>
            <Paragraph
              className="mb-4"
              text="In addition to school construction, we also specialize in building mosques that serve as both places of worship and community centers. We work closely with clients to create mosque designs that blend traditional Islamic architecture with modern functionality, while maintaining the spiritual significance of the space. We focus on distinctive elements such as minarets, domes, prayer halls, and ablution areas, using durable and aesthetic materials that reflect the dignity and serenity of the space."
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:-order-last order-1">
            <h3 className="mb-4 text-3xl font-bold">Renovation Services</h3>
            <Paragraph
              className="mb-4"
              text="Our renovation services are designed to refresh existing buildings or restore their original beauty. We offer complete structural overhauls, interior and exterior renovations, restoration of historic buildings, and modernization services that incorporate modern technologies and amenities. Whether you're looking to upgrade your building's functionality, aesthetics, or energy efficiency, we provide tailored solutions that align with your vision, needs, and budget."
            />
          </div>
          <div>
            <Image src={renovationImage} alt="school-construction" />
          </div>
        </div>
      </Section>

      <Section>
        <Paragraph
          className="mb-4"
          text="At DRILLCON, we pride ourselves on our expert team, tailored solutions, and commitment to quality assurance. Our team consists of skilled architects, engineers, and construction professionals who are passionate about creating spaces that serve communities and last for generations. We deliver the highest quality workmanship and materials, ensuring every project is completed on time and to the highest standards.

        Whether you are building a new school, mosque, or renovating an existing structure, we are here to bring your vision to life with professionalism and expertise. Contact us today to learn more about our services or to discuss your next project.
"
        />
      </Section> */}

      <Contact />
    </>
  );
};

export default page;
