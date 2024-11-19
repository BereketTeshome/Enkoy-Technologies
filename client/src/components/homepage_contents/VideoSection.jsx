import React from "react";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="py-16 bg-[#FFCD57] lg:py-12">
      <div className="px-6 mx-auto text-center max-w-7xl sm:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-3xl">
          Committed to <span className="text-white">continuous learning</span>
        </h2>
        <p className="px-4 mt-4 text-sm text-black sm:px-10 lg:text-base">
          As an e-learning company, we support organizations on their journey to
          change the way they <br className="hidden sm:block" /> train their
          employees and leverage their knowledge.
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
