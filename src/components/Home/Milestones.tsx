import CountUpOnView from "./CountUpOnView";

const Milestones = () => {
  return (
    <section className="bg-background mx-auto my-44 py-20">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-primary text-center">
          <CountUpOnView start={0} end={480} duration={3} />
          <p className="text text-secondary font-medium">Small hand pump</p>
        </div>
        <div className="text-primary text-center">
          <CountUpOnView start={0} end={1235} duration={3} />
          <p className="text text-secondary font-medium">Community Pump</p>
        </div>
        <div className="text-primary text-center">
          <CountUpOnView start={0} end={93} duration={3} />
          <p className="text text-secondary font-medium">Solar water project</p>
        </div>
        <div className="text-primary text-center">
          <CountUpOnView start={0} end={6} duration={3} />
          <p className="text text-secondary font-medium">
            Agriculture water project
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
