import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";
const LearningExperience = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/customerTraining.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Leadership development training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Leadership development training designed to motivate and achieve
            results.
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we are committed to cultivating leadership
            skills! Whether your team includes natural leaders or individuals
            ready to step into leadership roles, we can assist you in teaching
            them essential skills through our leadership development training
            solutions.
          </p>
          <a href="/contact" className="py-3 px-6 bg-gray-900 text-white">
            Get in touch
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src="/img/corporate-training/leadersImg.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Leadership Development for Lasting Impact
            </h2>
            <p className="mb-2">
              At Enkoy Technologies, we believe that effective leadership is the
              cornerstone of organizational success. Our transformative
              leadership development training helps cultivate leaders who not
              only excel in their roles but also inspire their teams to achieve
              greatness.
            </p>
            <p>
              By combining practical skills with strategic insights, our
              programs are designed to challenge leaders to think critically and
              act decisively. We focus on real-world applications, ensuring that
              participants can implement what they learn in their day-to-day
              operations.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Future-Ready Leaders
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              As the business landscape evolves, so too must our leaders. At
              Enkoy Technologies, we specialize in building future-ready leaders
              who can thrive in an ever-changing environment. Our leadership
              development training focuses on essential skills such as strategic
              thinking, emotional intelligence, and adaptive leadership.
            </p>
            <p>
              We collaborate closely with your organization to understand its
              goals and challenges, allowing us to create a customized training
              experience. Our programs not only prepare leaders for current
              challenges but also equip them with the foresight to anticipate
              and respond to future demands.
            </p>
            <p>
              By fostering a culture of continuous learning and development, we
              help organizations cultivate a pipeline of leaders who are ready
              to meet tomorrow’s challenges head-on.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
        <div className="flex-1">
          <FAQSection />
        </div>
        <div className="flex-1">
          <img
            src="/img/corporate-training/leadersImg.png"
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
        <div className="flex-1 flex ">
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
            Key Components of Our <br /> Leadership Development <br /> Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Realistic Obstacles:</b>Leaders confront challenging,
              real-world scenarios that test their skills and decision-making
              abilities.
            </li>
            <li>
              <b>Collaborative Problem-Solving: </b> IWe foster teamwork and
              collaboration, teaching leaders how to work together to overcome
              obstacles.
            </li>
            <li>
              <b>Conflict Resolution:</b> We delve into the root causes of
              conflicts and provide strategies for effective resolution.
            </li>
            <li>
              <b>Emotional Intelligence:</b> Leaders learn how to manage diverse
              personalities while maintaining their own emotional balance.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Your Organization
          </h2>
          <p>
            The impact of our leadership development solutions extends far
            beyond individual leaders. As your leaders become more effective,
            the benefits ripple throughout your organization:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Teams achieve results that align with your organizational culture
              and objectives.
            </li>
            <li>
              Employee engagement and commitment increase, fostering a positive
              work environment.
            </li>
            <li>Innovation flourishes as leaders inspire creative thinking.</li>
            <li>Collaboration improves, leading to stronger team dynamics.</li>
            <li>
              Overall productivity and effectiveness rise, driving your
              organization’s success.
            </li>
          </ul>
          <p>
            Investing in leadership development transforms not just your leaders
            but your entire organization. Let us help you build a legacy of
            strong leadership today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;
