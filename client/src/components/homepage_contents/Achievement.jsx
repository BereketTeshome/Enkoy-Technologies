import React from "react";

const Achievement = () => {
  const stats = [
    {
      value: "2",
      description: "years of professional experience",
    },
    {
      value: "1",
      description: "Ideal length of an animation in (Minutes)",
    },
    {
      value: "4068",
      description: "Total project hours completed",
    },
    {
      value: "50+",
      description: "illustrations we create for a course",
    },
  ];

  return (
    <div className="bg-[#FFCD57] py-12 sm:py-16 text-center">
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="max-w-xs">
            <h2 className="text-4xl font-bold text-black sm:text-5xl">
              {stat.value}
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
