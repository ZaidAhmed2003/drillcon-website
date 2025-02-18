import CountUpOnView from "./CountUpOnView";

const Milestones = () => {
  return (
    <section className="bg-background mx-auto my-44 py-20">
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
        <div className="text-center text-primary">
          <CountUpOnView start={0} end={480} duration={3} />
          <p className="text font-medium text-secondary">Small hand pump</p>
        </div>
        <div className="text-center text-primary">
          <CountUpOnView start={0} end={1235} duration={3} />
          <p className="text font-medium text-secondary">Community Pump</p>
        </div>
        <div className="text-center text-primary">
          <CountUpOnView start={0} end={93} duration={3} />
          <p className="text font-medium text-secondary">Solar water project</p>
        </div>
        <div className="text-center text-primary">
          <CountUpOnView start={0} end={6} duration={3} />
          <p className="text font-medium text-secondary">
            Agriculture water project
          </p>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
