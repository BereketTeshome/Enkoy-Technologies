import React from "react";

const Achievements = () => {
  const stats = [
    {
      value: "15",
      description: "Avg years of experience of our design team",
    },
    {
      value: "1",
      description: "Ideal length of an animation (in minutes)",
    },
    {
      value: "50",
      description: "Avg # of illustrations we create for a course",
    },
    {
      value: "21,443",
      description: "Total project hours completed in 2021",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FFCD57",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ maxWidth: "200px" }}>
            <h2 style={{ fontSize: "3rem", margin: "0", color: "#000" }}>
              {stat.value}
            </h2>
            <p style={{ fontSize: "1rem", margin: "10px 0 0", color: "#000" }}>
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
