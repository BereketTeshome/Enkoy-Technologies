import SingleWorks from "../components/our-work/SingleWorks";
import Partners from "../components/homepage_contents/partners";
import Testimonials from "../components/homepage_contents/Testimonials";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const OurWork = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  return (
    <div className={`${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}>
      <div className="px-5 md:px-16 lg:px-32 bg-[#161628]">
        {/* Header Section */}
        <div className="py-12 md:py-24">
          <div className="w-full md:w-[80%] lg:w-[60%] text-white">
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl">{isAmharic ? "የእኛ ስራ" : "Our Work"}</h1>
            <p className="text-gray-300">
              {isAmharic ? "የላቀ ውጤት ለማግኘት ከአለም አቀፍ ድርጅቶች ጋር እንዴት እንደምንሰራ ለማየት የጉዳይ ጥናቶቻችንን ያግኙ። በእኛ የፈጠራ ዘዴዎች እና አስደናቂ ውጤቶች ተነሳሱ!" : "Discover our case studies to see how we work with top global organizations for outstanding results. Be inspired by our innovative methods and impressive outcomes!"}
            </p>
          </div>
        </div>

        {/* Works Section */}
        <div>
          <SingleWorks />
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <br />
      <br />
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default OurWork;
