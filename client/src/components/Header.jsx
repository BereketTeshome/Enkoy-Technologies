import Particle from "./particles";
import { motion } from "framer-motion";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";

const Header = () => {
  const language = useSelector((state) => state.language.language);

  const translations = {
    eng: {
      headerText: ["Engaging Experiences", "Innovative Solutions", "Digital Empowerment"],
      subHeading: "Empower your teams with ",
      highlight: "Digital Solutions",
      impactText: "that leave a ",
      underline: "lasting impact",
      videoCTA: "Check Out Other Videos",
      mainText:
        "Empower your teams and communities with learning that truly resonates. Enkoy Technologies designs innovative, interactive learning experiences to engage and inspire, driving real progress across industries.",
      getStarted: "Get Started",
    },
    amh: {
      headerText: ["አሳታፊ ተሞክሮዎች", "የፈጠራ መፍትሄዎች", "ዲጂታል ማጎልበት"],
      subHeading: "ቡድኖችዎን በ ",
      highlight: "ዲጂታል መፍትሄዎች",
      impactText: "እና ",
      underline: "ዘላቂ ተጽእኖ",
      videoCTA: "ሌሎች ቪዲዮዎችን ይመልከቱ",
      mainText:
        "ቡድኖችዎን እና ማህበረሰቦችዎን በእውነት በሚያስተጋባ ትምህርት ያበረታቱ። ኢንኮይ ቴክኖሎጅዎች ለመሳተፍ እና ለማነሳሳት ፈጠራ፣ በይነተገናኝ የመማሪያ ተሞክሮዎችን በመንደፍ በኢንዱስትሪዎች ውስጥ እውነተኛ እድገትን ይመራሉ",
      getStarted: "ጀምር",
    },
  };

  const t = translations[language] || translations.eng;

  return (
    <div className="relative z-0 w-full py-32 bg-[#161628] px-8 sm:px-16 md:px-24 lg:px-36 overflow-hidden">
      <div className="flex flex-col items-center lg:flex-row">
        {/* Particle effect only within the header */}
        <div className="absolute top-0 left-0 z-0 w-full h-full max-h-screen pointer-events-none">
          <Particle />
        </div>

        {/* Left Section */}
        <motion.div
          className="z-10 flex-1 mb-10 lg:mb-0"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="mb-5">
            <TypeAnimation
              sequence={[...t.headerText.flatMap((text) => [text, 2000])]}
              wrapper="h1"
              className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <h2 className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
            {t.subHeading}
            <span className="text-[#FFCD57] font-bold">{t.highlight}</span>{" "}
            {t.impactText}
            <span className="underline text-[#FFCD57] decoration-[#FFCD57]">{t.underline}</span>.
          </h2>
          <div className="flex items-center gap-2 mt-6 transition-transform duration-300 cursor-pointer group">
            <MdOutlinePlayCircle
              className="text-white transition-transform duration-300 group-hover:text-orange-300 group-hover:scale-110"
              size={34}
            />
            <a href="#video-section" className="w-fit">
              <h2 className="font-semibold text-white transition-transform duration-300 group-hover:text-orange-300 w-fit">
                {t.videoCTA}
              </h2>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Video */}
        <motion.div
          className="flex justify-center flex-1 lg:justify-end"
          initial={{ y: "100vh", scale: 1 }}
          animate={{ y: 0, scale: [1, 1.05, 1] }}
          transition={{
            y: { delay: 1, duration: 0.7, ease: "easeOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="relative w-[90%] sm:w-[80%] lg:w-[85%] rounded-3xl shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <video
              src="/HomepageVideo.mp4"
              controls
              autoPlay={false}
              className="w-full h-auto shadow-lg rounded-3xl"
              style={{
                border: "4px solid #FFCD57",
                boxShadow: "0 10px 20px rgba(255, 205, 87, 0.5)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="my-16 text-center text-white lg:my-28"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="px-4 mb-10 text-sm sm:px-8 lg:px-12 sm:text-base lg:text-lg">
          {t.mainText}
        </p>

        <a
          href="#start"
          className="flex items-center justify-center gap-2 mt-4 transition-transform duration-300 cursor-pointer group"
        >
          <h2 className="text-lg font-semibold text-white transition-transform duration-300 sm:text-xl lg:text-2xl group-hover:text-orange-300">
            {t.getStarted}
          </h2>
          <IoArrowForward
            className="text-white transition-transform duration-300 group-hover:text-orange-300 group-hover:scale-110"
            size={30}
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
