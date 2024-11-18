import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const BasicComputer = () => {
  const faqData = [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we recognize that each learner has unique needs and goals. Our Basic Computer Skills Training begins with an assessment to identify the specific skills that participants need to develop. This allows us to create customized training programs that align with their current abilities and future aspirations.

        `,
        "We emphasize a supportive learning environment, where participants can ask questions, practice skills, and gain confidence in their abilities. Our instructors provide ongoing feedback and assistance to facilitate learning and ensure participants feel comfortable with the material.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates practical exercises and scenarios that reflect real-world challenges. Participants engage in interactive activities that allow them to practice their skills in a safe environment. From creating documents and spreadsheets to sending professional emails, learners gain hands-on experience that is directly applicable to their daily tasks.",
      ],
    },
  ];
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/basicComputer.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Basic computer skill training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Empowering Individuals with Essential Digital Competencies
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we understand that basic computer skills are
            fundamental in today’s digital world. Our Basic Computer Skills
            Training is designed to equip individuals with the essential
            technical skills needed to navigate modern workplaces confidently.
            Whether you're a novice or looking to refresh your knowledge, our
            training programs provide a solid foundation in computer literacy.
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
              src="/img/corporate-training/basicComputerImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for Digital Proficiency
            </h2>
            <p className="mb-2">
              Our approach to Basic Computer Skills Training focuses on creating
              engaging and practical learning experiences. Participants will
              learn to operate common software applications, manage files and
              folders, and use the internet safely and effectively. By combining
              hands-on exercises with real-world applications, we ensure that
              learners can apply their skills immediately in their personal and
              professional lives.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building Confidence in Digital Environments
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              As technology continues to evolve, having a strong grasp of basic
              computer skills is crucial. At Enkoy Technologies, we aim to build
              confidence in individuals as they navigate digital tools and
              platforms. Our training covers key areas such as word processing,
              spreadsheet management, email communication, and internet
              browsing. We tailor our programs to meet the specific needs of
              your organization, ensuring relevance and applicability for all
              participants.
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
            src="/img/corporate-training/basicComputerImg2.webp"
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
            Key Components of Our Basic Computer Skills Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <p>Our comprehensive training approach focuses on:</p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Software Proficiency:</b>Teaching participants how to use
              essential applications like Microsoft Word, Excel, and PowerPoint.
            </li>
            <li>
              <b>File Management: </b> Guiding learners in organizing files and
              folders effectively for easy access and retrieval.
            </li>
            <li>
              <b>Internet Skills: </b>Instructing on safe browsing practices,
              online research techniques, and digital communication etiquette.
            </li>
            <li>
              <b>Basic Troubleshooting: </b>Equipping participants with skills
              to troubleshoot common computer issues and seek help when needed.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Basic Computer Skills Training extends beyond
            individual learners, benefiting the entire organization. As
            participants enhance their digital competencies, the advantages
            include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Increased productivity as employees become more efficient in using
              technology.
            </li>
            <li>
              Improved communication and collaboration through effective use of
              digital tools.
            </li>
            <li>
              Greater confidence in navigating computer systems, leading to
              reduced frustration and stress.
            </li>
            <li>
              Enhanced ability to adapt to new technologies as they emerge.
            </li>
          </ul>
          <p>
            Invest in basic computer skills training today and empower your
            workforce to thrive in a digital age!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicComputer;