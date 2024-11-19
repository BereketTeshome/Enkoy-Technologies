import React from "react";

const LearningExperiences = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%] ">
          <img
            src="/img/services/learningExperiences.png"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Custom eLearning solution
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Learning experiences design consulting
          </h2>
          <p className="mb-7 text-justify">
            At Enkoy, creativity is at the heart of everything we do. With our
            expertise in designing eLearning courses, we offer top-notch
            Learning Experience Design (LXD) consulting services to elevate your
            educational programs. Whether we’re brainstorming ideas or
            fine-tuning details, our passion for innovation ensures that your
            learning solutions are engaging and effective.
          </p>
          <h2 className="text-2xl font-semibold text-gray-950 my-2">
            Our Process
          </h2>
          <ol className="list-decimal pl-6 py-5 *:mb-5 text-justify">
            <li>
              <b>Needs Assessment:</b>We begin by understanding your specific
              goals, audience, and challenges to tailor our approach
              effectively.
            </li>
            <li>
              <b>Collaborative Design: </b>Our team collaborates with you to
              develop a comprehensive plan, incorporating your insights and our
              expertise in Learning Experience Design (LXD).
            </li>
            <li>
              <b>Content Creation:</b> Using engaging visuals, interactive
              elements, and storytelling techniques, we create compelling
              eLearning content that resonates with learners.
            </li>
            <li>
              <b>Review and Feedback:</b> We involve you in the review process,
              gathering feedback to ensure the course aligns with your
              expectations and learning objectives.
            </li>
            <li>
              <b>Implementation: </b> Once approved, we deploy the eLearning
              modules across your chosen platforms, ensuring accessibility and
              ease of use.
            </li>
            <li>
              After launch, we analyze learner engagement and performance,
              making necessary adjustments to enhance the learning experience
              continuously.
            </li>
          </ol>
          <a href="/contact" className="py-3 px-6 bg-gray-900 text-white">
            Contact Us
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default LearningExperiences;
