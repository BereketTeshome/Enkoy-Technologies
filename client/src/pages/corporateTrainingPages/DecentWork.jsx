import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const DecentWork = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Impact",
      answer: [
        `At Enkoy Technologies, we begin our Decent Work and SDG Training with a thorough assessment of your organization’s current practices and goals. This allows us to create customized programs that address specific challenges and opportunities related to decent work and sustainable development.
    `,
        "We emphasize a collaborative learning environment where participants can engage in discussions, share experiences, and develop actionable strategies. Our instructors provide ongoing support and resources to help organizations implement what they learn effectively.",
      ],
    },
    {
      question: "Real-World Applications for Meaningful Change",
      answer: [
        "Our training methodology incorporates real-world case studies and practical exercises that illustrate the impact of decent work and sustainable practices. Participants engage in group projects, role-playing scenarios, and action planning to apply their learning in a meaningful way. By tackling real challenges, learners develop the skills needed to drive positive change within their organizations and communities.",
      ],
    },
  ];
  console.log(faqData);
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/dream.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Decent work and SDG training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Promoting Sustainable Employment and Responsible Practices
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we understand the importance of decent work
            in achieving sustainable development. Our Decent Work and
            Sustainable Development Goals (SDG) Training is designed to equip
            individuals and organizations with the knowledge and skills
            necessary to promote fair labor practices and contribute to the
            global goals established by the United Nations. By fostering a
            culture of respect, equity, and sustainability, we help build
            stronger workplaces and communities.
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
              src="/img/corporate-training/decentWorkImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for Sustainable Employment
            </h2>
            <p className="mb-2">
              Our approach to Decent Work and SDG Training focuses on practical
              applications that empower participants to understand and implement
              the principles of decent work and sustainability. We cover
              essential topics such as workers' rights, social justice,
              environmental responsibility, and the impact of business practices
              on sustainable development. Through interactive workshops and
              discussions, participants learn how to align their work with the
              SDGs and contribute positively to their organizations and society.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Awareness and Commitment to Responsible Practices
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              As the global job market evolves, it’s crucial for individuals and
              organizations to embrace responsible work practices. At Enkoy
              Technologies, our training emphasizes awareness of the SDGs,
              particularly Goal 8: Decent Work and Economic Growth. We help
              participants recognize the importance of creating inclusive, safe,
              and productive work environments that support the well-being of
              all employees. Our programs are tailored to meet the specific
              needs of your organization, ensuring relevance and effectiveness.
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
            src="/img/corporate-training/decentWorkImg2.png"
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
            Key Components of Our Decent Work and SDG Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Understanding Decent Work:</b>Educating participants on the
              principles of decent work and its significance in the SDGs.
            </li>
            <li>
              <b>Workers' Rights and Social Justice: </b> Highlighting the
              importance of fair labor practices, equity, and respect in the
              workplace.
            </li>
            <li>
              <b>Environmental Responsibility:</b> Encouraging sustainable
              practices that minimize environmental impact and promote social
              well-being.
            </li>
            <li>
              <b>Implementing Change:</b> Providing strategies for integrating
              decent work principles into organizational policies and practices.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Decent Work and SDG Training extends throughout
            your organization and beyond. As participants enhance their
            understanding of decent work and sustainability, the advantages
            include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Increased awareness of social and environmental responsibilities
              among employees.
            </li>
            <li>
              Improved workplace culture that values fairness, inclusively, and
              respect.
            </li>
            <li>
              Enhanced reputation and credibility as a socially responsible
              organization.
            </li>
            <li>
              Greater alignment with global sustainability goals, fostering
              long-term success.
            </li>
          </ul>
          <p>
            Invest in Decent Work and SDG Training today to empower your
            workforce to contribute to a more sustainable and equitable future!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecentWork;
