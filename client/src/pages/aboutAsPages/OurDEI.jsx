import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import ContactUsSection from "../../components/homepage_contents/ContactUsSection";

// Animated Section Component
const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
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

// OurDEI Component
const OurDEI = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const language = useSelector((state) => state.language?.language);
  const isDarkTheme = theme === "dark";
  const isAmharic = language === "amh";

  return (
    <div>
      <div className="bg-[#161628] text-center text-white text-4xl font-semibold py-20">
        <p>
          {isAmharic
            ? "ለማካተት እና ለፈጠራ ያለን ቁርጠኝነት"
            : "Our Commitment to Inclusion and Innovation"}
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="w-[70%] text-gray-900 mb-20 *:mb-20">
          <AnimatedSection>
            <div>
              <h3
                className={`mb-5 text-4xl ${
                  isDarkTheme ? "text-[#F9D75D]" : "text-gray-700"
                }`}
              >
                {isAmharic ? "ምን እንደምንለይም ያደርጋል?" : "What Makes Us Unique"}
              </h3>
              <p
                className={`text-justify mb-4 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "በእንኮይ ቴክኖሎጂስ፣ ልዩነት እና ፈጠራ አብረው ይሄዳሉ ብለን እናምናለን። እያንዳንዱ የመማር ልምድ ትርጉም ያለው እና አሳታፊ መሆኑን በማረጋገጥ የእኛ መፍትሔዎች በተጠቃሚ-ተኮር ንድፍ ላይ የተገነቡ ናቸው። የፈጠራ ንድፍን ከቴክኖሎጂ ጋር በማዋሃድ፣ ትምህርታዊ ይዘቶችን ወደ መሳጭ እና በይነተገናኝ ተሞክሮዎች ወደ ሚማርክ እና አነሳሽነት እንለውጣለን።"
                  : "At Enkoy Technologies, we believe that diversity and innovation go hand in hand. Our solutions are built on a foundation of user-centered design, ensuring that every learning experience is meaningful and engaging. By blending creative design with technology, we transform educational content into immersive and interactive experiences that captivate and inspire."}
              </p>
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "የተጣጣሙ መፍትሄዎችን ለማቅረብ ያለን ቁርጠኝነት በሁሉም ኢንዱስትሪዎች ውስጥ የደንበኞችን ልዩ ፍላጎቶች ለማሟላት ያስችለናል. በተጨባጭ ትምህርት ወይም ግላዊ አቀራረብ፣ ትምህርትን አስደሳች፣ ተደራሽ እና ተፅዕኖ ያለው እናደርገዋለን።"
                  : "Our commitment to delivering tailored solutions allows us to meet the unique needs of clients across industries. Whether through gamified learning or personalized approaches, we make education enjoyable, accessible, and impactful."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3
                className={`mb-5 text-4xl ${
                  isDarkTheme ? "text-[#F9D75D]" : "text-gray-700"
                }`}
              >
                {isAmharic ? "አካታች ትምህርት ለሁሉም" : "Inclusive Learning for All"}
              </h3>
              <p
                className={`text-justify mb-4 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic ? (
                  <>
                    ተደራሽነትን እና ፍትሃዊነትን የሚያጎለብቱ የመማሪያ መድረኮችን ለመፍጠር ቆርጠን ተነስተናል።
                    የእኛ መፍትሄዎች የተለያዩ ፍላጎቶችን ለማስተናገድ እና ግለሰቦችን ለማበረታታት የተነደፉ ናቸው፣
                    ይህም እያንዳንዱ ሰው -የትኛውም አስተዳደግ ወይም ሁኔታ ምንም ይሁን ምን - ለማደግ እና
                    ስኬታማ የመሆን እድል እንዳለው ለማረጋገጥ ነው።
                  </>
                ) : (
                  <>
                    We are dedicated to creating learning platforms that foster
                    accessibility and equity. Our solutions are designed to
                    accommodate diverse needs and empower individuals, ensuring
                    that everyone—regardless of their background or
                    circumstances—has the opportunity to grow and succeed.
                  </>
                )}
              </p>
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic ? (
                  <>
                    አካታች መርሆችን ወደ የመማር ልምድ ንድፋችን በማዋሃድ እንቅፋቶችን ለማፍረስ እና ትርጉም ያለው
                    የመማሪያ ጉዞዎችን የሚያግዙ መሳሪያዎችን ለማቅረብ ዓላማ እናደርጋለን።
                  </>
                ) : (
                  <>
                    By integrating inclusive principles into our learning
                    experience design, we aim to break barriers and provide
                    tools that enable meaningful learning journeys.
                  </>
                )}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3
                className={`mb-5 text-4xl ${
                  isDarkTheme ? "text-[#F9D75D]" : "text-gray-700"
                }`}
              >
                {isAmharic
                  ? "ተጽዕኖን የሚነኩ ትብብሮች"
                  : "Collaborations That Drive Impact"}
              </h3>
              <p
                className={`text-justify mb-4 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "ትብብር የአቀራረባችን እምብርት ነው። ከእኛ የፍትሃዊነት፣ ፈጠራ እና ተፅእኖ እሴቶቻችን ጋር የሚጣጣሙ አጋርነቶችን በንቃት እንፈልጋለን። እነዚህ ትብብሮች ሀገራዊ እና አለምአቀፍ ድርጅቶችን፣ ጅምሮችን እና ተቋማትን ያቀፉ ሲሆን ይህም መድረሻችን እና መፍትሄዎቻችን ጠቃሚ እና ሰፊ መሆናቸውን ያረጋግጣል።"
                  : " Collaboration is at the heart of our approach. We actively seek partnerships that align with our values of equity, innovation, and impact. These collaborations span both national and international organizations, startups, and institutions, ensuring that our reach and solutions remain relevant and far-reaching."}
              </p>
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "ከአካባቢው ማህበረሰቦችም ሆነ ከአለምአቀፍ አካላት ጋር በመስራት የጋራ እሴትን የሚፈጥሩ እና እድገትን የሚገፋፉ ግንኙነቶችን ለመገንባት ቁርጠኞች ነን።"
                  : " Whether working with local communities or global entities, we are committed to building relationships that create shared value and drive progress."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3
                className={`mb-5 text-4xl ${
                  isDarkTheme ? "text-[#F9D75D]" : "text-gray-700"
                }`}
              >
                {isAmharic
                  ? "በመማር መፍትሄዎች ውስጥ ዘላቂነት"
                  : "Sustainability in Learning Solutions"}
              </h3>
              <p
                className={`text-justify mb-4 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "እንደ ተልእኳችን አካል፣ ዘላቂነትን በመማሪያ ዲዛይኖቻችን ውስጥ እናካትታለን። እንደ የአካባቢ ኃላፊነት እና ዘላቂ አመራር ያሉ ጭብጦችን ወደ ይዘታችን በማዋሃድ ተማሪዎችን የለውጥ ንቁ ወኪሎች እንዲሆኑ እናበረታታለን።"
                  : "As part of our mission, we incorporate sustainability into our learning designs. By integrating themes like environmental responsibility and sustainable leadership into our content, we empower learners to become proactive agents of change."}
              </p>
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "ዘላቂነት ላይ ያለን ትኩረት በምንፈጥረው ይዘት ላይ ብቻ የተገደበ አይደለም—እንዲሁም በምንሰራበት መንገድ ይዘልቃል፣ ይህም የእኛ ስራዎች እና መፍትሄዎች ለተሻለ የወደፊት ቁርጠኝነት የሚያንፀባርቁ መሆናቸውን ያረጋግጣል።"
                  : "Our focus on sustainability isn’t limited to the content we create—it also extends to the way we work, ensuring that our operations and solutions reflect our commitment to a better future."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h3
                className={`mb-5 text-4xl ${
                  isDarkTheme ? "text-[#F9D75D]" : "text-gray-700"
                }`}
              >
                {isAmharic ? "ወደፊት መመልከት" : "Looking Ahead"}
              </h3>
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "በኤንኮይ ቴክኖሎጂዎች በትምህርት እና በፈጠራ ለውጥ እናምናለን። አካታች እና ተፅእኖ ያለው የመማሪያ መፍትሄዎችን በመገንባት፣ ለግለሰቦች እና ለድርጅቶች ብሩህ የወደፊት ህይወት ለማበርከት እንጥራለን።"
                  : "At Enkoy Technologies, we believe in the transformative power of education and innovation. By building inclusive and impactful learning solutions, we strive to contribute to a brighter future for individuals and organizations alike."}
              </p>
              <br />
              <p
                className={`text-justify ${
                  isDarkTheme ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {isAmharic
                  ? "ከድንበር የሚያልፍ ራዕይ ይዘን ለመተባበር፣ ለማደግ እና መፍትሄዎችን ለመፍጠር በየቦታው ተማሪዎችን የሚያበረታታ እና የሚያበረታታ ነው።"
                  : "With a vision that transcends boundaries, we are driven to collaborate, grow, and create solutions that inspire and empower learners everywhere."}
              </p>
            </div>
          </AnimatedSection>
          <h1 className={`text-3xl font-bold text-center my-14 text-[#FFCD57]`}>
            Contact Us
          </h1>
          <ContactUsSection />
        </div>
      </div>
    </div>
  );
};

export default OurDEI;
