import React from "react";

const GraphicsDesign = () => {
  return (
    <div className="py-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/microlearning.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Graphic Design Services
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Animated videos are a powerful tool for transforming digital content
          </h2>
          <p className="mb-7">
            At Enkoy, we specialize in creating captivating graphic design
            solutions, including unique and memorable logos that capture the
            essence of your brand. Our talented design team works closely with
            you to understand your vision, values, and target audience, ensuring
            that every design element resonates with your market. We focus on
            crafting visually stunning graphics and versatile logos that are
            suitable for various applications across digital and print media.
            Our goal is to deliver designs that not only enhance your brand
            identity but also leave a lasting impression on your customers. With
            our graphic design and logo design services, you can elevate your
            visual identity and effectively communicate your message to your
            audience.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default GraphicsDesign;
