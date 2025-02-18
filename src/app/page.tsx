import {
  AboutSection,
  Contact,
  HeroSection,
  MilestonesSection,
  OurClientsSection,
  ProjectsSection,
  ServicesSection,
  WhyChooseUsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MilestonesSection />
      <ProjectsSection />
      <OurClientsSection />
      <Contact />
    </>
  );
}
