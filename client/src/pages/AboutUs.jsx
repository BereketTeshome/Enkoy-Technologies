import React from "react";
import { motion } from "framer-motion";
import Partners from "../components/homepage_contents/partners";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="h-screen flex items-center justify-center bg-[#161628]"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-white text-center px-6 md:px-0 *:w-[60%] flex flex-col items-center justify-center">
          <p className="uppercase text-sm mb-4">About us</p>
          <h1 className="text-4xl font-semibold ">
            We believe that organizations can succeed when they commit to
            building a culture of continuous learning.
          </h1>
        </div>
      </motion.div>

      {/* Who We Are Section */}
      <motion.div
        className="py-20 px-5 md:px-32 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Enkoy Technologies is a leading digital learning development company
          based in Ethiopia. We are a passionate team of professionals with
          diverse expertise in instructional design, animation, storytelling,
          and learning experience design. We specialize in creating
          experience-based learning content design, training and consultancy
          services, and digital learning development. We are user-centered
          designers, creative creators, and design thinkers who are passionate
          about revolutionizing education by teaching how to think, rather than
          what to think.
        </p>
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="bg-[#FFC961] py-20 px-5 md:px-20 flex flex-col gap-10 md:flex-row">
        {/* Mission */}
        <motion.div
          className="flex-1"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl text-gray-900 font-semibold mb-4">
            Our Mission
          </h3>
          <p className="text-gray-800 text-lg">
            At Enkoy Technologies, our mission is to craft impactful,
            learner-centered digital solutions that prioritize individuals'
            needs and well-being, enhancing the educational experience through
            the latest in learning design and technology. We are committed to
            making learning more accessible, interactive, and meaningful.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="flex-1"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl text-gray-900 font-semibold mb-4">
            Our Vision
          </h3>
          <p className="text-gray-800 text-lg">
            We envision a world where innovative learning technologies are
            seamlessly integrated into every educational environment,
            transforming manual learning materials into interactive, engaging
            experiences. Our goal is to empower individuals and organizations to
            unlock their full potential through knowledge and creativity.
          </p>
        </motion.div>
      </div>

      {/* Our Journey Section */}
      <motion.div
        className="py-20 px-5 md:px-32 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Founded in 2023, Enkoy Technologies began with a simple but powerful
          vision: to transform the way education is delivered in Ethiopia and
          beyond. Our team united through LXD training and storytelling
          masterclasses, leading to the creation of Enkoy Technologies. Over the
          years, we have developed successful learning modules for clients like
          GIZ CLM, xHub Addis, and GIZ STEP III.
        </p>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="bg-gray-100 py-20 px-5 md:px-32"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Core Values
        </h2>
        <ul className="space-y-4 text-gray-800 text-lg">
          <li>
            <strong>Innovation:</strong> We provide cutting-edge digital
            learning solutions by integrating storytelling, gaming elements, and
            LXD.
          </li>
          <li>
            <strong>Sustainability:</strong> We develop learning systems that
            promote environmental awareness and responsible leadership.
          </li>
          <li>
            <strong>Collaboration:</strong> Working closely with clients and
            partners to achieve shared goals.
          </li>
          <li>
            <strong>Empowerment:</strong> We teach critical thinking skills
            necessary for adapting in an ever-changing world.
          </li>
          <li>
            <strong>Climate Action:</strong> Committed to innovative solutions
            to address climate change.
          </li>
        </ul>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        className="mt-20"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Partners />
      </motion.div>
    </div>
  );
};

export default AboutUs;
