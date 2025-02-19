import { FaClock, FaWrench, FaComments, FaTrophy } from "react-icons/fa";
import { Badge } from "@/components";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto my-44 px-4">
      <div className="flex flex-col items-center justify-center">
        <Badge text="Why Choose Us" />
        <h2 className="font-montserrat text-secondary mb-4 text-4xl font-bold md:text-5xl">
          Why Choose Us
        </h2>
        <p className="max-w-4xl text-center leading-[27.5px] tracking-wider text-gray-600">
          Our commitment to quality, safety, and innovation makes us the trusted
          choice in drilling and construction.
        </p>
      </div>
      <div className="mt-20 flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-primary rounded-3xl border-2 p-5 text-center">
            <div className="bg-primary mb-5 inline-block items-center justify-center rounded-full p-4 text-[35px]">
              <FaClock />
            </div>
            <h4 className="mb-5 text-xl font-bold">8+ Years Of Experience</h4>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              With 8 years of experience in the construction and drilling
              industry, we have built a solid reputation for delivering projects
              on time and within budget from residential to large-scale
              commercial operations.
            </p>
          </div>
          <div className="border-primary rounded-3xl border-2 p-5 text-center">
            <div className="bg-primary mb-5 inline-block items-center justify-center rounded-full p-4 text-[35px]">
              <FaWrench />
            </div>
            <h4 className="mb-5 text-xl font-bold">Customized Solutions</h4>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              Every project is unique, and we pride ourselves on offering
              tailored solutions that meet your specific needs. Whether it's a
              small or large commercial project or any kind of water project, we
              adapt our services to suit your requirements.
            </p>
          </div>
          <div className="border-primary rounded-3xl border-2 p-5 text-center">
            <div className="bg-primary mb-5 inline-block items-center justify-center rounded-full p-4 text-[35px]">
              <FaComments />
            </div>
            <h4 className="mb-5 text-xl font-bold">
              Transparent Communication
            </h4>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              We believe in open and honest communication throughout the entire
              process. From initial consultation to project completion, we keep
              you informed and involved every step of the way.
            </p>
          </div>
          <div className="border-primary rounded-3xl border-2 p-5 text-center">
            <div className="bg-primary mb-5 inline-block items-center justify-center rounded-full p-4 text-[35px]">
              <FaTrophy />
            </div>
            <h4 className="mb-5 text-xl font-bold">Proven Track Record</h4>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              Our portfolio showcases a wide range of successful projects,
              backed by positive client testimonials and repeat business. We
              consistently deliver quality results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
