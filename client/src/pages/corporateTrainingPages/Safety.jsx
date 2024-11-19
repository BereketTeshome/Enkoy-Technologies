import React from "react";
import FAQSection from "../../components/corporateTraining/FAQSection";

const Safety = () => {
  const faqData = [
    {
      question: "Tailored Learning Solutions for Organizational Needs",
      answer: [
        `At Enkoy Technologies, we begin our Safety and Health at Workplace Training with a thorough assessment of your organization’s current safety practices and challenges. This allows us to create customized training programs that address specific needs and compliance requirements.

    
            `,
        "We foster an engaging learning environment where participants can actively participate in discussions, share experiences, and develop actionable safety strategies. Our experienced trainers provide ongoing support and resources to help organizations effectively implement safety practices.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and simulations that illustrate the importance of workplace safety. Participants engage in practical exercises, group discussions, and action planning to apply their learning in a meaningful way. By tackling real-life challenges, learners develop the skills needed to contribute to a safer work environment.",
      ],
    },
  ];

  return (
    <div className="pt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/corporate-training/safety.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Safety and Health at workplace training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Ensuring a Safe and Healthy Work Environment
          </h2>
          <p className="text-justify mb-7">
            At Enkoy Technologies, we prioritize the well-being of employees as
            a fundamental aspect of organizational success. Our Safety and
            Health at Workplace Training is designed to equip individuals and
            organizations with the knowledge and skills necessary to promote a
            safe and healthy work environment. By understanding and implementing
            effective safety practices, businesses can reduce risks, enhance
            productivity, and foster a culture of care.
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
              src="/img/corporate-training/safetyImg.webp"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl  sm:text-5xl text-gray-950 mb-7">
              Transformative Learning for Workplace Safety
            </h2>
            <p className="mb-2 text-justify">
              Our approach to Safety and Health Training focuses on practical
              applications that empower participants to recognize, assess, and
              mitigate workplace hazards. We cover essential topics such as
              emergency preparedness, ergonomics, hazard identification, and
              health regulations. Through interactive workshops and hands-on
              exercises, participants learn how to implement safety protocols
              and promote a culture of health and safety within their
              organizations.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex flex-1 ">
            <h2 className="inline-block text-4xl font-semibold text-gray-900  md:text-6xl">
              Building a Culture of Safety and Well-Being
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] *:mb-2 text-justify">
            <p>
              In today’s dynamic work environment, prioritizing safety and
              health is crucial for every organization. At Enkoy Technologies,
              our training emphasizes the importance of creating a proactive
              safety culture where every employee feels responsible for
              maintaining a safe workplace. We tailor our programs to meet the
              specific needs of your organization, ensuring relevance and
              effectiveness.
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
            src="/img/corporate-training/safetyImg2.webp"
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
            Key Components of Our Safety and Health Training Solutions
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px] text-justify">
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              <b>Understanding Safety Regulations: </b>Educating participants on
              relevant workplace safety laws and regulations.
            </li>
            <li>
              <b>Hazard Recognition and Assessment:</b>Teaching employees how to
              identify potential hazards and assess risks in their work
              environment.
            </li>
            <li>
              <b>Emergency Preparedness:</b> Providing strategies for responding
              to emergencies, including evacuation procedures and first aid.
            </li>
            <li>
              <b>Promoting Ergonomics:</b> Encouraging practices that enhance
              physical well-being and reduce the risk of injury.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Transformative Benefits for Individuals and Organizations
          </h2>
          <p>
            The impact of our Safety and Health at Workplace Training extends
            throughout your organization. As participants enhance their
            understanding of safety practices, the advantages include:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5">
            <li>
              A safer work environment that reduces the likelihood of accidents
              and injuries.
            </li>
            <li>
              Increased employee morale and productivity as workers feel secure
              and valued.
            </li>
            <li>
              Enhanced organizational reputation as a company that prioritizes
              employee safety and health.
            </li>
            <li>
              Improved compliance with safety regulations, minimizing legal and
              financial risks.
            </li>
          </ul>
          <p>
            Invest in Safety and Health at Workplace Training today to empower
            your workforce to create a safe, healthy, and productive work
            environment!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
