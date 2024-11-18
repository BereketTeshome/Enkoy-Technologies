import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="py-20 bg-[#FFCD57] ">
      <div className="bg-[#FFCD57] sticky top-0">
        <div className="px-6 mx-auto text-center max-w-7xl sm:px-12">
          {/* Heading */}
          <h2 className="text-4xl font-semibold text-white">
            <span className="text-black">Committed to</span>{" "}
            <span className="font-semibold text-white">
              continuous learning
            </span>
          </h2>
          <p className="px-10 mt-4 text-sm text-black">
            As an e-learning company, we support organizations on their journey
            to change the way they <br /> train their employees and leverage
            their knowledge.
          </p>

          {/* Video Player */}
          <div className="flex justify-center h-[400px] mt-10">
            <ReactPlayer
              url="https://youtu.be/IfDGIsZPKMs"
              controls
              width="100%"
              height="100%"
              className="max-w-xl overflow-hidden rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
