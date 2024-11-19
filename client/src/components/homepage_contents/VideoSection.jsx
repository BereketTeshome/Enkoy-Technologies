import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (

    <div className="py-16 bg-[#FFCD57] lg:py-12">
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
        <div
          className="relative mt-8 overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 sm:mt-10 lg:w-3/4 lg:mx-auto"
          id="video-section"
        >
          <ReactPlayer
            url="https://youtu.be/IfDGIsZPKMs"
            controls
            width="100%"
            height="90%"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
