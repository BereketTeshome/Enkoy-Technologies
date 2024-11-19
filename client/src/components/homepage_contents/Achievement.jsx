import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const stats = [
    {
      value: 2,
      description: "years of professional experience",
      duration: 2,
    },
    {
      value: 1,
      description: "Ideal length of an animation in (Minutes)",
      duration: 1,
    },
    {
      value: 4068,
      description: "Total project hours completed",
      duration: 3,
    },
    {
      value: 50,
      description: "illustrations we create for a course",
      duration: 2,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3, // Start counting when 30% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div ref={ref} className="bg-[#FFCD57] py-12 sm:py-16 text-center">
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="max-w-xs">
            <h2 className="text-4xl font-bold text-black sm:text-5xl">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={stat.duration}
                  separator=","
                />
              ) : (
                0
              )}
              {index === 3 && "+" /* For the "50+" item */}
            </h2>
            <p className="mt-2 text-sm text-black sm:text-base">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
