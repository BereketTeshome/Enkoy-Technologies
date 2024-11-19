import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const stats = [
    {
      value: 2,
      description: "years of professional experience",
    },
    {
      value: 1,
      description: "Ideal length of an animation in (Minutes)",
    },
    {
      value: 4068,
      description: "Total project hours completed",
    },
    {
      value: 50,
      suffix: "+",
      description: "illustrations we create for a course",
    },
  ];

  return (
    <div className="bg-[#FFCD57] py-12 sm:py-16 text-center">
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:gap-12">
        {stats.map((stat, index) => {
          // Hook for observing when the component is in view
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <div key={index} className="max-w-xs" ref={ref}>
              <h2 className="text-4xl font-bold text-black sm:text-5xl">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2} // Animation duration in seconds
                    suffix={stat.suffix || ""}
                  />
                )}
              </h2>
              <p className="mt-2 text-sm text-black sm:text-base">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;
