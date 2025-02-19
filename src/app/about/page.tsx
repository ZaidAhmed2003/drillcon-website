import { Contact } from "@/components";

const Page = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Who Are We?</h1>
        <p className="mb-8">
          We are committed to delivering exceptional construction and drilling
          services with a focus on safety, quality, and efficiency. With years
          of experience in the industry, we specialize in providing
          comprehensive solutions for both commercial and residential projects.
          Our team of skilled professionals uses state-of-the-art equipment to
          handle everything from site preparation and excavation to complex
          drilling operations.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to provide reliable, high-quality construction and
              drilling services that exceed client expectations while
              maintaining the highest standards of safety and environmental
              responsibility. We pride ourselves on our reputation for
              delivering projects that stand the test of time and contribute to
              the growth and development of our community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              We are unwavering in our commitment to excellence, safety, and
              integrity in every aspect of our work. Whether it's a small-scale
              project or a large, complex drilling operation, we approach every
              task with the same dedication to quality and precision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a future where every project we undertake contributes
              to shaping a better, more efficient world—one where safety,
              environmental responsibility, and customer satisfaction are at the
              forefront of everything we do.
            </p>
          </section>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Page;
