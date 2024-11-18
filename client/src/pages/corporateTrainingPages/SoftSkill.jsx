import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const SoftSkill = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Goals",
      answer: [
        `At Enkoy Technologies, we begin our Soft Skills Training with an assessment of your organization’s current needs and challenges. This allows us to create customized programs that address specific areas for improvement in interpersonal skills.

    
            `,
        "We foster an engaging learning environment where participants can share experiences, practice skills, and receive constructive feedback. Our experienced trainers provide ongoing support and resources to help individuals enhance their soft skills effectively.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that illustrate the importance of soft skills in the workplace. Participants engage in simulations, case studies, and group activities that allow them to practice their skills in a supportive environment. By addressing real-life challenges, learners develop the confidence and competence needed to excel in their roles.",
      ],
    },
  ];
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/personalDevelopment.webp"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Soft skill training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Cultivating Essential Interpersonal Skills for Success
          </h2>
          <p className="mb-7">
            At Enkoy Technologies, we recognize that technical skills alone are
            not enough to thrive in today’s workplace. Our Soft Skills Training
            is designed to equip individuals with the essential interpersonal
            skills needed to communicate effectively, collaborate with others,
            and adapt to changing environments. By developing these crucial
            skills, employees can enhance their professional relationships and
            contribute positively to their organizations.
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
              src="/img/corporate-training/softSkillImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for Enhanced Communication and
              Collaboration
            </h2>
            <p className="mb-2">
              Our approach to Soft Skills Training focuses on practical
              applications that empower participants to improve their
              interpersonal skills. We cover essential topics such as
              communication, teamwork, emotional intelligence, problem-solving,
              and conflict resolution. Through interactive workshops,
              role-playing, and group discussions, participants learn to apply
              these skills in real-world situations, fostering a collaborative
              and productive work environment.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Building a Culture of Effective Communication and Teamwork
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
            <p>
              In today’s diverse work environment, strong soft skills are
              crucial for effective collaboration and communication. At Enkoy
              Technologies, our training emphasizes the importance of creating a
              workplace culture that values interpersonal skills. We tailor our
              programs to meet the specific needs of your organization, ensuring
              relevance and impact for all employees.
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
            src="/img/corporate-training/softSkillImg2.webp"
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
            Key Components of Our Soft Skills Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px]">
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Effective Communication: </b>Teaching participants how to
              convey ideas clearly and listen actively.
            </li>
            <li>
              <b>Emotional Intelligence:</b> Enhancing awareness of emotions and
              improving interpersonal relationships.
            </li>
            <li>
              <b>Teamwork and Collaboration: </b> Developing skills to work
              effectively in teams and contribute to group success.
            </li>
            <li>
              <b>Problem-Solving and Critical Thinking: </b>Encouraging
              analytical thinking and creative solutions to workplace
              challenges.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-950 mb-5 mt-2">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Soft Skills Training extends beyond individual
            participants, benefiting the entire organization. As employees
            enhance their soft skills, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              Improved communication and collaboration among team members.
            </li>
            <li>
              Increased employee engagement and morale, leading to higher
              productivity.
            </li>
            <li>
              Enhanced ability to navigate conflicts and resolve issues
              effectively.
            </li>
            <li>
              A positive organizational culture that fosters teamwork and mutual
              respect.
            </li>
          </ul>
          <p>
            Invest in Soft Skills Training today to empower your workforce with
            the essential interpersonal skills needed to succeed in a dynamic
            work environment!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkill;
