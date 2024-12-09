import { useSelector } from "react-redux";
import { Mail, Phone } from "@mui/icons-material";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const content = {
    services: isAmharic ? "አገልግሎቶች" : "Services",
    company: isAmharic ? "ኩባንያ" : "Company",
    socialLinks: isAmharic ? "ማህበራዊ ግንኙነቶች" : "Social Links",
    aboutUs: isAmharic ? "ስለ እኛ" : "About us",
    career: isAmharic ? "ሥራ እድሎች" : "Career",
    contactUs: isAmharic ? "አግኙን" : "Contact us",
    adaptiveLearning: isAmharic ? "አስማሚ ዲጂታል ትምህርት" : "Adaptive Digital Learning",
    selfPacedLearning: isAmharic ? "በራስ የተሰራ ትምህርት" : "Self-paced learning",
    corporateTraining: isAmharic ? "የኩባንያ ምርምር" : "Corporate Training",
    learningStrategy: isAmharic ? "የትምህርት ስልት" : "Learning Strategy",
    ourWork: isAmharic ? "ሥራችን" : "Our Work",
    footerText: isAmharic
      ? "© የእንቆይ ቴክኖሎጂዎች 2024 ፣ ንብረት መብት የተጠበቀ"
      : "© Enkoy Technologies 2024, All Rights Reserved",
    privacyPolicy: isAmharic ? "የግላዊነት መመሪያ" : "Privacy Policy",
  };

  return (
    <div className="bg-[#161628] w-full px-6 md:px-12 lg:px-36">
      <div className="flex flex-wrap justify-between gap-12 pt-12 text-white">
        <div className="flex-1 min-w-[250px]">
          <img src="/navLogo.png" alt="logo" className="w-[50px]" />
          <h2 className="mt-4 mb-8 text-lg">
            {isAmharic
              ? "በዲጂታል እድገት ላይ የተመሰረተ ትምህርት"
              : "Empowering Learning through digital excellence"}
          </h2>
          <p className="flex items-center gap-3 mb-2 text-sm">
            <Phone fontSize="small" /> +251970010047
          </p>
          <p className="flex items-center gap-3 mb-2 text-sm">
            <Mail fontSize="small" /> enkoytechnologies@gmail.com
          </p>
        </div>

        <div className="flex-1 min-w-[150px]">
          <p className="mb-6 text-lg font-semibold underline">
            {content.services}
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/services/learning-experiences"
                className="hover:text-indigo-400"
              >
                {content.adaptiveLearning}
              </a>
            </li>
            <li>
              <a href="/self-pace-learning" className="hover:text-indigo-400">
                {content.selfPacedLearning}
              </a>
            </li>
            <li>
              <a href="/corporate-training" className="hover:text-indigo-400">
                {content.corporateTraining}
              </a>
            </li>
            <li>
              <a
                href="/corporate-training/learning-experience"
                className="hover:text-indigo-400"
              >
                {content.learningStrategy}
              </a>
            </li>
            <li>
              <a href="/our-work" className="hover:text-indigo-400">
                {content.ourWork}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[150px]">
          <p className="mb-6 text-lg font-semibold underline">
            {content.company}
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about-us" className="hover:text-indigo-400">
                {content.aboutUs}
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-indigo-400">
                {content.career}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400">
                {content.contactUs}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <p className="mb-6 text-lg font-semibold underline">
            {content.socialLinks}
          </p>
          {/* Social Links Section */}
        <div className="flex-1 min-w-[200px]">
          <div className="grid grid-cols-3 gap-4">
            <a
              href="https://www.linkedin.com/company/enkoytech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/enkoy_1/profilecard/?igsh=dHRzYmI5N2hrZXRm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/@enkoytech?si=7_wriEQK_H9UUJNW"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://x.com/enkoytech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://t.me/enkoytechs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61568879338093"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full mt-12">
        <hr className="border-gray-600" />
        <div className="flex flex-wrap justify-between gap-4 pt-4 pb-6 text-sm text-gray-400">
          <p className="flex-1 text-center">{content.footerText}</p>
          <p className="flex-1 text-center">{content.privacyPolicy}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
