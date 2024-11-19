import React from "react";

const VideoEditing = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/microlearning.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Video Editing Services
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Animated videos are a powerful tool for transforming digital content
          </h2>
          <p className="mb-7 text-justify">
            At Enkoy, we provide professional video editing services that
            elevate your visual content and engage your audience. Our process
            starts with understanding your goals and the message you want to
            convey, ensuring that the final product aligns perfectly with your
            vision. Our skilled team utilizes advanced editing techniques to
            craft compelling narratives that capture attention and keep viewers
            engaged. We focus on delivering polished, high-quality videos that
            not only look great but also effectively communicate your message.
            We value your input and incorporate your feedback throughout the
            editing process, ensuring your complete satisfaction. With our video
            editing services, you can transform your content and make a lasting
            impact on your audience.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
