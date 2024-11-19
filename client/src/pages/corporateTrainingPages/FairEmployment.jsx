import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const FairEmployment = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Success",
      answer: [
        `At Enkoy Technologies, we begin our Fair Employment Practice Training with a comprehensive assessment of your organization’s current policies and practices. This allows us to create customized training programs that address specific challenges and opportunities related to fair employment.

        `,
        "We foster a collaborative learning environment where participants can engage in meaningful discussions, share experiences, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help organizations implement fair employment practices effectively.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and case studies that illustrate the significance of fair employment practices. Participants engage in role-playing exercises, group discussions, and action planning to apply their learning in a practical context. By working through real-life challenges, learners develop the skills needed to foster a fair and inclusive workplace.",
      ],
    },
  ];

  return (
    <div className="pt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/employability.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Fair employment practice training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Promoting Equity and Inclusion in the Workplace
          </h2>
          <p className="text-justify mb-7">
            At Enkoy Technologies, we believe that fair employment practices are
            essential for creating a thriving and inclusive workplace. Our Fair
            Employment Practice Training is designed to equip organizations and
            employees with the knowledge and skills needed to foster a culture
            of equity, respect, and inclusion. By understanding and implementing
            fair employment practices, businesses can enhance employee
            satisfaction, improve retention, and drive overall success.
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
              src="/img/corporate-training/fairEmploymentImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl  sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for a Fair Workplace
            </h2>
            <p className="mb-2 text-justify">
              Our approach to Fair Employment Practice Training focuses on
              practical, actionable strategies that empower participants to
              recognize and address issues related to discrimination, bias, and
              inequity in the workplace. We cover essential topics such as
              recruitment fairness, equitable treatment, conflict resolution,
              and the importance of diversity and inclusion. Through interactive
              workshops and discussions, participants learn how to create a work
              environment that values every individual and promotes fairness in
              all employment practices.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex flex-1 ">
            <h2 className="inline-block text-4xl font-semibold text-gray-900  md:text-6xl">
              Building Awareness and Commitment to Responsible Practices
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2 text-justify">
            <p>
              In today’s diverse work environment, understanding fair employment
              practices is critical for all employees. At Enkoy Technologies,
              our training emphasizes the principles of equity and inclusion,
              highlighting the need for fair treatment in hiring, promotions,
              compensation, and workplace interactions. We tailor our programs
              to meet the specific needs of your organization, ensuring that the
              training is relevant and impactful.
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
            src="/img/corporate-training/fairEmploymentImg2.webp"
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
        <div className="flex flex-1 ">
          <h2 className="inline-block text-3xl font-semibold text-gray-900  md:text-5xl">
            Key Components of Our Fair Employment Practice Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px] text-justify">
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Understanding Fair Employment Practices:</b>Educating
              participants on the principles of fair employment and its
              importance in the workplace.
            </li>
            <li>
              <b>Recognizing Bias and Discrimination: </b>Helping employees
              identify and challenge biases and discriminatory practices in
              hiring and management.
            </li>
            <li>
              <b>Promoting Diversity and Inclusion:</b> Encouraging strategies
              to create a diverse workforce that values different perspectives
              and backgrounds.
            </li>
            <li>
              <b>Implementing Fair Policies:</b> Providing guidelines for
              developing and enforcing fair employment policies and practices.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Fair Employment Practice Training extends beyond
            individual participants, benefiting the entire organization. As
            employees enhance their understanding of fair practices, the
            advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              A more inclusive workplace culture that values diversity and
              equity.
            </li>
            <li>
              Increased employee morale and satisfaction, leading to higher
              retention rates.
            </li>
            <li>
              Enhanced organizational reputation as a fair and equitable
              employer.
            </li>
            <li>
              Improved teamwork and collaboration as employees feel valued and
              respected.
            </li>
          </ul>
          <p>
            Invest in Fair Employment Practice Training today to empower your
            workforce to create a fair, inclusive, and successful workplace!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FairEmployment;
