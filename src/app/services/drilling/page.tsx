import Image from "next/image";
import { Contact, ImageOverlay } from "@/components";
import {
  heroImage,
  smallHandPumpImage,
  communityHandPumpImage,
  solarWaterProjectImage,
  agriculturalWaterPumpImage,
} from "@/constants/images";
import { FaTint, FaWater, FaSolarPanel, FaSeedling } from "react-icons/fa";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="flex flex-col justify-center bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            height: "350px",
            backgroundSize: "cover",
          }}
        >
          <ImageOverlay />
          <div className="relative z-10 container mx-auto px-4 text-white sm:px-8">
            <h3 className="mb-4 text-2xl font-bold md:text-5xl">
              Drilling Services
            </h3>
          </div>
        </div>
      </section>

      {/* Small Services Section */}
      <div className="container mx-auto my-36 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaTint className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Small Hand Pumps</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              Reliable manual pumps for individual water access in rural areas.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaWater className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Community Pumps</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              Durable pumps serving entire communities with clean water.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <FaSolarPanel className="text-primary mb-4 text-4xl" />
            <h3 className="mb-2 text-xl font-semibold">Solar Projects</h3>
            <p className="leading-[27.5px] tracking-wider text-gray-600">
              Sustainable solar-powered water solutions for irrigation.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="container mx-auto my-36 px-4">
        <div className="grid gap-36">
          {/* Small Hand Pump Section */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-1 md:order-last">
              <h3 className="mb-4 text-3xl font-bold">Small Hand Pump</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our small hand pumps are engineered for optimal performance in
                rural and remote areas. These robust manual pumps provide a
                dependable water solution for individual households, featuring a
                simple yet efficient design that requires no electricity. Built
                to withstand harsh environmental conditions, our pumps are
                constructed from high-grade materials that resist corrosion and
                wear. The ergonomic handle design ensures comfortable operation,
                while the precision-engineered piston system delivers consistent
                water flow with minimal effort.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Simple yet effective manual operation</li>
                <li>Durable construction for long-term use</li>
                <li>Easy maintenance and repair</li>
                <li>Cost-effective water access solution</li>
                <li>Ideal for areas without electricity</li>
              </ul>
            </div>

            <Image
              src={smallHandPumpImage}
              alt="Small Hand Pump"
              className="h-[520px] rounded-lg"
              width={800}
              height={800}
            />
          </div>

          {/* Community Hand Pump Section */}
          <div className="grid gap-8 md:grid-cols-2">
            <Image
              src={communityHandPumpImage}
              alt="Community Hand Pump"
              className="rounded-lg"
              width={800}
              height={800}
            />
            <div>
              <h3 className="mb-4 text-3xl font-bold">Community Hand Pump</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our community hand pumps are designed to serve entire villages
                with a sustainable water solution. These heavy-duty pumps
                feature a reinforced structure capable of handling high-volume
                usage, ensuring consistent water supply for drinking,
                sanitation, and small-scale irrigation. The advanced sealing
                system prevents contamination, while the modular design allows
                for easy maintenance and repair. With a capacity to draw water
                from depths of up to 50 meters, these pumps are ideal for areas
                with challenging water table conditions.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Durable construction for heavy community use</li>
                <li>Easy maintenance and repair</li>
                <li>Cost-effective water solution</li>
                <li>Ideal for areas without electricity</li>
                <li>Supports entire communities</li>
              </ul>
            </div>
          </div>

          {/* Solar Water Project Section */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-1 md:order-last">
              <h3 className="mb-4 text-3xl font-bold">Solar Water Project</h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our solar water systems represent the cutting edge of
                sustainable water technology. These advanced systems combine
                high-efficiency solar panels with state-of-the-art submersible
                pumps, capable of delivering up to 10,000 liters per day. The
                intelligent controller optimizes energy usage, ensuring maximum
                water output even in low-light conditions. Our systems are
                equipped with remote monitoring capabilities, allowing for
                real-time performance tracking and predictive maintenance. The
                modular design enables easy expansion to meet growing water
                demands.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Environmentally friendly solar power</li>
                <li>Cost-effective operation</li>
                <li>Low maintenance requirements</li>
                <li>Off-grid capability</li>
                <li>Scalable for various water needs</li>
              </ul>
            </div>
            <Image
              src={solarWaterProjectImage}
              alt="Solar Water Pump"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>

          {/* Agricultural Water Project Section */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image
                src={agriculturalWaterPumpImage}
                alt="Agricultural Water Pump"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div>
              <h3 className="mb-4 text-3xl font-bold">
                Agricultural Water Project
              </h3>
              <p className="mb-6 leading-[27.5px] tracking-wider text-gray-600">
                Our agricultural water projects revolutionize farming practices
                through innovative water management solutions. We implement
                precision irrigation systems that reduce water consumption by up
                to 40% while increasing crop yields. Our projects include the
                installation of solar-powered pumping stations, water storage
                reservoirs, and advanced drip irrigation networks. We provide
                comprehensive training programs for farmers, covering water
                conservation techniques, system maintenance, and sustainable
                farming practices. Our solutions are scalable, from small family
                farms to large agricultural cooperatives.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                <li>Increased crop yields</li>
                <li>Reduced water usage</li>
                <li>Lower energy costs</li>
                <li>Improved food security</li>
                <li>Training in sustainable practices</li>
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
