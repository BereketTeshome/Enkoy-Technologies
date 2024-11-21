import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

const OurDEI = () => {
  return (
    <div>
      <div className="bg-[#161628] text-center text-white text-4xl font-semibold py-20">
        <p>Our dedication to DEI</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="w-[70%] text-gray-900 mb-20 *:mb-20">
          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                What Makes Us Unique
              </h3>
              <p className="text-justify">
                At Enkoy Technologies, we take Diversity, Equity, and Inclusion
                (DEI) seriously because we believe that diverse perspectives
                lead to more innovative solutions. What truly sets us apart is
                our commitment to user-centred design and our innovative
                approach to learning. We don’t just convert content; we
                transform it into immersive experiences that captivate and
                inspire. Our game-like elements foster engagement, making
                learning feel less like a task and more like a fun experience.
                Additionally, our extensive experience working with diverse
                sectors—including education, government, and non-profit
                organizations—allows us to tailor solutions that meet the unique
                needs of our clients. At Enkoy Technologies, we believe learning
                should be an enjoyable journey, and we’re here to make that a
                reality.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                Inclusive Learning Experiences
              </h3>
              <p className="text-justify">
                At <b>Enkoy Technologies</b>, we believe learning should be an
                enjoyable journey. We incorporate DEI principles into our
                Learning Experience Design (LXD), ensuring that our content is
                accessible to all learners. Our solutions are designed to engage
                and empower people from all walks of life, making learning not
                only a tool for growth but also a bridge for equity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                Supplier Diversity and Partnerships
              </h3>
              <p className="text-justify">
                We are also committed to fostering partnerships with diverse
                suppliers, ensuring that our collaborations reflect our values
                of equity and inclusion. Our partnerships prioritize businesses
                owned by individuals from underrepresented groups, including
                women, people of color, and those with disabilities. This
                approach strengthens both our community and the solutions we
                offer, promoting shared growth and development.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                Our Role in Promoting DEI
              </h3>
              <p className="text-justify">
                At Enkoy Technologies, we ensure our workplace is a space where
                every team member feels included, valued, and empowered. We
                bring our whole selves to the work we do, and our diversity
                strengthens our ability to create learning solutions that
                resonate with a wide audience. We're proud of our commitment to
                creating an equitable and inclusive work culture, and we’re
                dedicated to ensuring our learning platforms reflect those
                values.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                Our Promise to Sustainable Practices
              </h3>
              <p className="text-justify">
                At Enkoy Technologies, we take Diversity, Equity, and Inclusion
                (DEI) seriously because we believe that diverse perspectives
                lead to more innovative solutions. What truly sets us apart is
                our commitment to user-centred design and our innovative
                approach to learning. We don’t just convert content; we
                transform it into immersive experiences that captivate and
                inspire. Our game-like elements foster engagement, making
                learning feel less like a task and more like a fun experience.
                Additionally, our extensive experience working with diverse
                sectors—including education, government, and non-profit
                organizations—allows us to tailor solutions that meet the unique
                needs of our clients. At Enkoy Technologies, we believe learning
                should be an enjoyable journey, and we’re here to make that a
                reality.
              </p>{" "}
              <br />w
              <p>
                Beyond our internal efforts, we also advocate for sustainability
                in the solutions we provide to our clients. Our courses and
                modules often incorporate elements that raise awareness about
                climate change, environmental responsibility, and sustainable
                leadership. By helping learners understand the importance of
                sustainability, we empower them to take meaningful action in
                their own lives and communities. At Enkoy Technologies, our
                promise to sustainable practices isn’t just about reducing our
                footprint; it’s about inspiring others to join us in creating a
                more resilient and environmentally conscious world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3 className="mb-5 text-4xl text-gray-900">
                Inclusive Growth Journey
              </h3>
              <p className="text-justify">
                We are committed to fostering a diverse, inclusive, and positive
                work culture where every voice is valued. Our team thrives in an
                environment that encourages collaboration, continuous learning,
                and professional growth. With benefits like our open-door
                policy, team-building activities, knowledge-sharing sessions,
                and community service initiatives, we ensure that each team
                member has the opportunity to grow personally and
                professionally. At Enkoy Technologies, your career is more than
                just a job—it’s a journey towards making a lasting impact on
                education and sustainability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default OurDEI;
