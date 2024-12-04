const DigitalTraining = () => {
  return (
    <div className="flex min-w-[310px] p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="flex-1 pr-2 border-r border-gray-300">
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
          href="/digital-training"
          className="text-sm font-medium text-yellow-500 hover:underline"
        >
          See overview
        </a>
      </div>

      {/* Right Section */}
      <div className="pl-4">
        <a href="/create-course" className="text-sm text-[#8B3A3A] ">
          Create Course
        </a>{" "}
        <br />
        <a href="/published-trainings" className="text-sm text-[#8B3A3A]">
          Published Trainings
        </a>
      </div>
    </div>
  );
};

export default DigitalTraining;
