import React from "react";

const DigitalTraining = () => {
  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
      <img
        src="/img/contentsMenuImg.png"
        alt="Digital Training Icon"
        className="w-16 h-16 mx-auto mb-4"
      />
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        Digital Training
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Develop strong relationships and become more positive through our
        assessments.
      </p>
      <a
        href="/learning-solutions-overview"
        className="text-sm font-medium text-pink-500 hover:underline"
      >
        See overview
      </a>
    </div>
  );
};

export default DigitalTraining;
