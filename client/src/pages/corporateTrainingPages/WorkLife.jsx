import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const WorkLife = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we begin our Work-Life Balance Training with an assessment of your organization’s current practices and employee needs. This allows us to create customized programs that address specific challenges related to work-life balance.

        `,
        "We foster a supportive learning environment where participants can share their experiences, discuss challenges, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help individuals implement practices that enhance their work-life balance.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that illustrate the importance of maintaining a balanced lifestyle. Participants engage in role-playing, group discussions, and action planning to apply their learning in a practical context. By addressing real-life challenges, learners develop the skills needed to achieve and sustain a healthy work-life balance.",
      ],
    },
  ];
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/aa.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Work life balance training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Promoting Well-Being and Productivity
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we understand that achieving a healthy
            work-life balance is crucial for overall well-being and
            organizational success. Our Work-Life Balance Training is designed
            to equip employees with the strategies and tools they need to manage
            their professional and personal lives harmoniously. By fostering a
            balanced approach, organizations can enhance employee satisfaction,
            reduce burnout, and improve productivity.
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
              src="/img/corporate-training/workLifeImg.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for a Balanced Lifestyle
            </h2>
            <p className="mb-2">
              Our approach to Work-Life Balance Training focuses on practical
              strategies that empower participants to create a fulfilling
              balance between work responsibilities and personal life. We cover
              essential topics such as time management, stress reduction,
              setting boundaries, and prioritizing well-being. Through
              interactive workshops and discussions, participants learn how to
              implement effective practices that promote a healthier lifestyle
              both at work and at home.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building a Culture of Balance and Well-Being
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              In today’s fast-paced work environment, maintaining a healthy
              work-life balance is more important than ever. At Enkoy
              Technologies, our training emphasizes the significance of creating
              a workplace culture that supports balance and well-being. We
              tailor our programs to meet the specific needs of your
              organization, ensuring that the training is relevant and impactful
              for all employees.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
        <div className="flex-1">
          <FAQSection faqData={faqData} />
        </div>
        <div className="flex-1">
          <img
            src="/img/corporate-training/workLifeImg2.webp"
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-blue-300 md:flex-row flex-col">
        <div className="flex-1 flex ">
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
            Key Components of Our Work-Life Balance Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Time Management: </b>Teaching effective techniques for
              prioritizing tasks and managing time efficiently.
            </li>
            <li>
              <b>Stress Management:</b> Providing tools and strategies to reduce
              stress and promote mental well-being.
            </li>
            <li>
              <b>Setting Boundaries:</b> Encouraging individuals to establish
              clear boundaries between work and personal life.
            </li>
            <li>
              <b>Self-Care Practices: </b>Highlighting the importance of
              self-care and well-being in achieving balance.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Work-Life Balance Training extends throughout your
            organization. As participants enhance their understanding of
            work-life balance, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Increased employee satisfaction and morale, leading to higher
              retention rates.
            </li>
            <li>
              Reduced burnout and stress levels, contributing to improved mental
              health.
            </li>
            <li>
              Enhanced productivity and performance as employees feel more
              focused and engaged.
            </li>
            <li>
              A positive organizational culture that values well-being and
              work-life harmony.
            </li>
          </ul>
          <p>
            Invest in Work-Life Balance Training today to empower your workforce
            to achieve a healthier, more fulfilling balance between work and
            life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkLife;
