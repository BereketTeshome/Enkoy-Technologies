import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const Employability = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Diverse Career Goals",
      answer: [
        `At Enkoy Technologies, we recognize that each participant has unique career aspirations. Our training begins with an assessment to identify individual strengths, weaknesses, and goals. This allows us to create customized programs that align with their specific career paths, whether they aim to secure employment or start their own business.
`,
        "We emphasize a supportive and interactive learning environment, where participants can share ideas, ask questions, and collaborate with peers. Our instructors provide personalized guidance and feedback to help each individual develop their unique talents and skills.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and projects that reflect the challenges faced in today’s job market and entrepreneurial landscape. Participants engage in case studies, role-playing, and group discussions that allow them to practice their skills in a practical setting. From crafting effective business plans to mastering job interviews, learners gain hands-on experience that prepares them for success.",
      ],
    },
  ];
  console.log(faqData);
  return (
    <div className="pt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/decentWork.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Employability and entrepreneurship
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Empowering Individuals for Career Success and Business Innovation
          </h2>
          <p className="text-justify mb-7">
            At Enkoy Technologies, we believe that equipping individuals with
            the skills for employability and entrepreneurship is essential in
            today’s dynamic job market. Our Employability and Entrepreneurship
            Training is designed to nurture the skills and mindset necessary for
            career advancement and successful business creation. Whether
            individuals are seeking to enhance their job prospects or launch
            their own ventures, our programs provide the tools and knowledge
            needed to thrive.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Get in touch
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row">
          <div className="flex-1">
            <img
              src="/img/corporate-training/employabilityImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for Career and Business Growth
            </h2>
            <p className="mb-2 text-justify">
              Our approach to Employability and Entrepreneurship Training
              focuses on practical, hands-on experiences that prepare
              participants for real-world challenges. We cover essential topics
              such as resume writing, interview techniques, networking
              strategies, and business planning. By integrating theoretical
              knowledge with practical applications, we ensure that learners can
              confidently navigate their career paths or embark on their
              entrepreneurial journeys.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex flex-1 ">
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
              Building Skills for a Competitive Edge
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2 text-justify">
            <p>
              In a rapidly changing job landscape, having a competitive edge is
              crucial. At Enkoy Technologies, our training emphasizes critical
              skills such as problem-solving, communication, and adaptability.
              We also focus on fostering an entrepreneurial mindset, encouraging
              creativity and innovation. Our programs are tailored to meet the
              specific needs of your organization, ensuring relevance and impact
              for all participants.
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
      <div className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row">
        <div className="flex-1">
          <FAQSection faqData={faqData} />
        </div>
        <div className="flex-1">
          <img
            src="/img/corporate-training/employabilityImg2.webp"
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col w-full gap-32 px-5 py-32 bg-[#FFCD57] md:px-20 sm:px-10 md:flex-row ">
        <div className="flex flex-1 ">
          <h2 className="inline-block text-2xl font-semibold text-gray-800 md:text-5xl">
            Key Components of Our Employability and Entrepreneurship Training
            Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px] text-justify">
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Resume and Interview Skills:</b>Teaching participants how to
              create standout resumes and excel in interviews.
            </li>
            <li>
              <b>Networking Strategies: </b> Guiding learners on how to build
              professional relationships and leverage connections.
            </li>
            <li>
              <b>Business Planning:</b> Providing frameworks for developing
              viable business ideas and plans.
            </li>
            <li>
              <b>Entrepreneurial Mindset:</b> Encouraging creativity,
              innovation, and risk-taking in business ventures.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p className="text-justify">
            The impact of our Employability and Entrepreneurship Training
            extends beyond individual learners, benefiting the entire
            organization. As participants enhance their employability and
            entrepreneurial skills, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5 text-justify">
            <li>Increased job readiness and confidence among job seekers.</li>
            <li>
              Higher rates of successful job placements and career advancements.
            </li>
            <li>
              Cultivation of innovative ideas that can lead to new business
              opportunities.
            </li>
            <li>
              Enhanced collaboration and teamwork as individuals share diverse
              perspectives.
            </li>
          </ul>
          <p>
            Invest in employability and entrepreneurship training today to
            empower your workforce with the skills and confidence to succeed in
            their careers and beyond!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Employability;
