import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const PersonalDevelopment = () => {
  const faqData = [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, our Personal Development Training is personalized to meet the unique needs of each individual. We begin by conducting a thorough assessment to understand participants' goals, motivations, and challenges. This foundational insight allows us to create targeted training programs that resonate with their personal development journey.
    `,
        "We also prioritize ongoing support and feedback, helping participants track their progress and adjust their goals as needed. Our training fosters a growth mindset, encouraging individuals to embrace learning as a lifelong journey.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that allow participants to apply what they learn immediately. By engaging in role-playing, group discussions, and self-reflection activities, individuals gain hands-on experience that reinforces their learning.",
        "We focus on equipping participants with practical tools and techniques that can be integrated into their daily lives, enhancing their personal and professional effectiveness.",
      ],
    },
  ];
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/workLife.png"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Personal development training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LearnEmpowering Individuals for Growth and Success
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we recognize that personal development is
            essential for both individual satisfaction and organizational
            success. Our Personal Development Training is designed to empower
            individuals to unlock their full potential, enhance their skills,
            and achieve their personal and professional goals. Whether you're
            looking to foster self-awareness, improve communication skills, or
            boost resilience, our training programs provide the support and
            resources necessary for meaningful growth.
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
              src="/img/corporate-training/personalDevelopmentImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformation Personal Growth for Lasting Impact
            </h2>
            <p className="mb-2">
              Our approach to personal development focuses on creating
              transformation experiences that lead to lasting change. We blend
              practical strategies with self-reflection exercises, helping
              participants identify their strengths, weaknesses, and areas for
              growth. By engaging in interactive workshops and coaching
              sessions, individuals learn to set actionable goals and develop
              the mindset needed to achieve them.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Resilient and Agile Individuals
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              In today's fast-paced world, resilience and adaptability are vital
              traits for success. At Enkoy Technologies, we equip participants
              with the tools they need to navigate challenges and embrace
              change. Our Personal Development Training emphasizes skills such
              as emotional intelligence, stress management, and effective
              problem-solving. We work closely with each participant to tailor
              the training experience, ensuring it aligns with their unique
              aspirations and circumstances.
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
            src="/img/corporate-training/personalDevelopmentImg2.png"
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
            Key Components of Our Personal Development Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <p>Our comprehensive training approach focuses on:</p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Self-Awareness:</b>Helping individuals gain a deeper
              understanding of their strengths, values, and areas for growth.
            </li>
            <li>
              <b>Goal Setting: </b> Guiding participants in setting realistic
              and achievable personal and professional goals.
            </li>
            <li>
              <b>Emotional Intelligence: </b>Teaching skills to recognize and
              manage emotions, both in themselves and in others.
            </li>
            <li>
              <b>Resilience Building:</b> Providing strategies to cope with
              stress and overcome obstacles.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Personal Development Training extends beyond the
            individual, benefiting the entire organization. As participants grow
            and develop, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>Increased self-confidence and motivation among employees.</li>
            <li>Enhanced communication and collaboration within teams.</li>
            <li>
              Greater innovation and creativity as individuals feel empowered to
              share ideas.
            </li>
            <li>Improved overall job satisfaction and employee retention.</li>
            <li>A more positive and productive organizational culture.</li>
          </ul>
          <p>
            Invest in personal development today and empower your workforce to
            thrive both personally and professionally!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDevelopment;
