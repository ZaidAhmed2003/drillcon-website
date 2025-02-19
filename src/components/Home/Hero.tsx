import ImageOverlay from "@/components/Shared/ImageOverlay";

const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div
        className="flex flex-col items-center justify-center bg-center bg-no-repeat h-full"
        style={{
          backgroundImage: `url("/images/home/hero-image.jpeg")`,
          backgroundSize: "cover",
          height: "725px",
        }}
      >
        {/* Black Overlay */}
        <ImageOverlay />
        {/* Centered Text */}
        <div className="relative z-10 px-4 text-center text-white sm:px-8">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-2">
            Welcome to <span className="uppercase text-primary">Drillcon,</span>
          </h1>
          <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
            Your Trusted Partner in Drilling and Construction Solutions
          </h3>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            At DRILLCON, we offer expert drilling and construction services.
            Backed by years of experience and advanced technology, we ensure
            efficient, safe, and timely project execution tailored to your
            needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
