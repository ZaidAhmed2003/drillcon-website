"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountUpOnViewProps {
  start?: number; // Optional, defaults to 0
  end: number; // Required, must be a number
  duration?: number; // Optional, defaults to 2
}

const CountUpOnView: React.FC<CountUpOnViewProps> = ({
  start = 0,
  end,
  duration = 2,
}) => {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Start when 50% of the component is in view
  });

  if (inView && !hasStarted) {
    setHasStarted(true);
  }

  return (
    <div
      ref={ref}
      style={{ fontSize: "3.5rem", textAlign: "center", fontWeight: "bold" }}
    >
      {hasStarted ? (
        <CountUp start={start} end={end} duration={duration} />
      ) : (
        start
      )}
    </div>
  );
};

export default CountUpOnView;
