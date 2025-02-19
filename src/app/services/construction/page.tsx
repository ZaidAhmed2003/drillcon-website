import { Contact } from "@/components";
import Image from "next/image";
import {
  FaBuilding,
  FaTools,
  FaHardHat,
  FaCheckCircle,
  FaMedkit,
} from "react-icons/fa";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Construction Services
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto my-36 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaBuilding className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">School Construction</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              We create safe, functional, and inspiring educational environments
              with eco-friendly materials and energy-efficient systems.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaTools className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Mosque Construction</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              We build mosques that blend traditional Islamic architecture with
              modern functionality, creating spiritual community spaces.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaHardHat className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Renovation Services</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              We offer complete structural overhauls and modernization services
              that incorporate modern technologies and amenities.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaMedkit className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Clinic Construction</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              We build modern healthcare facilities designed to provide optimal
              patient care with efficient workflows and advanced medical
              technology.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="container mx-auto my-36 px-4">
        <div className="grid gap-36">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-bold">School Construction</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                We specialize in creating educational spaces that inspire
                learning and growth. Our comprehensive school construction
                services combine innovative design with practical functionality.
                We understand that schools are more than just buildings - they
                are environments that shape young minds and foster community
                development. Our approach ensures that every educational
                facility we build meets the highest standards of safety,
                sustainability, and educational effectiveness.
              </p>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our school construction services include:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>
                  Custom-designed school buildings tailored to educational needs
                </li>
                <li>
                  Eco-friendly and energy-efficient construction materials
                </li>
                <li>State-of-the-art classrooms and facilities</li>
                <li>Compliance with safety and accessibility standards</li>
                <li>Integrated technology infrastructure</li>
                <li>Specialized spaces for STEM education and arts</li>
                <li>Outdoor learning environments and recreational areas</li>
              </ul>
            </div>

            <Image
              src="/images/construction/school-image.jpg"
              alt="School Construction"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Image
              src="/images/construction/mosque-image.webp"
              alt="Mosque Construction"
              width={800}
              className="rounded-lg"
              height={800}
            />
            <div>
              <h3 className="mb-4 text-3xl font-bold">Mosque Construction</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                We create mosques that serve as both spiritual sanctuaries and
                vibrant community hubs. Our mosque construction approach blends
                traditional Islamic architectural elements with modern
                functionality, creating spaces that inspire devotion while
                meeting contemporary needs. We understand that mosques are more
                than places of worship - they are centers of community life,
                education, and social cohesion.
              </p>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our mosque construction services include:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Traditional Islamic architecture with modern amenities</li>
                <li>Custom-designed minarets and domes</li>
                <li>Spacious prayer halls with proper ventilation</li>
                <li>Separate ablution areas with modern facilities</li>
                <li>Community spaces for educational and social activities</li>
                <li>Accessible designs for all worshippers</li>
                <li>Energy-efficient lighting and cooling systems</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-3xl font-bold">Renovation Services</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                We transform existing spaces into modern, functional, and
                beautiful structures through our comprehensive renovation
                services. Our approach combines respect for a building's history
                with innovative solutions that meet contemporary needs. Whether
                it's a historic restoration or a modern upgrade, we ensure that
                every renovation project enhances both the aesthetic appeal and
                practical functionality of the space.
              </p>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our renovation services include:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Complete structural assessments and overhauls</li>
                <li>Interior and exterior redesigns</li>
                <li>Historic building restoration</li>
                <li>Energy efficiency upgrades</li>
                <li>Modern technology integration</li>
                <li>Seismic retrofitting for older structures</li>
                <li>Adaptive reuse of existing spaces</li>
              </ul>
            </div>

            <Image
              src="/images/construction/renovation-image.jpg"
              alt="Renovation Services"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2"> 
            <Image
              src="/images/construction/clinic-full-image.jpg"
              alt="Clinic Construction"
              className="rounded-lg"
              width={800}
              height={800}
            />
            <div>
              <h3 className="mb-4 text-3xl font-bold">Clinic Construction</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                We specialize in constructing modern healthcare facilities that
                meet the highest standards of medical care. Our clinic designs
                focus on creating efficient workflows, patient comfort, and
                infection control. We understand that healthcare facilities
                require specialized construction to support medical operations
                and patient care.
              </p>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our clinic construction services include:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Custom-designed medical facilities</li>
                <li>Infection control compliant construction</li>
                <li>Medical gas and plumbing systems installation</li>
                <li>Specialized electrical systems for medical equipment</li>
                <li>Accessible design for patients with disabilities</li>
                <li>Emergency power systems and backup generators</li>
                <li>Sterilization and clean room facilities</li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Page;
