import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
const VideoSection = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="py-16 bg-[#FFCD57] lg:py-12">
      <div className="bg-[#FFCD57] sticky top-0">
        <div className="px-6 mx-auto text-center max-w-7xl sm:px-12">
          {/* Heading */}
          {language === "eng" ?  <h2 className="text-4xl font-semibold text-white">
            <span className="text-black">Committed to</span>{" "}
            <span className="font-semibold text-white">
              continuous learning
            </span>
          </h2> : 
            <h2 className="text-4xl font-semibold text-white">
            <span className="text-black">ትኩረታችን ለ</span>{" "}
            <span className="font-semibold text-white">
            ቀጣይነት ያለው ትምህርት
            </span>
          </h2>
          }
          {language === "eng" ? <p className="px-10 mt-4 text-sm text-black">
            As an e-learning company, we support organizations on their journey
            to change the way they <br /> train their employees and leverage
            their knowledge.
          </p> : <p>
          እንደ ኢ-ትምህርት ኩባንያ ድርጅቶች ሰራተኞቻቸውን የሚያሰለጥኑበትን መንገድ ለመለወጥ እና <br/> እውቀታቸውን ለመጠቀም በሚያደርጉት ጉዞ ላይ እንደግፋለን።
            </p>}

          {/* Video Player */}
          <div
            className="h-[50vh] sm:h-[80vh] md:h-[100vh] mt-8 overflow-hidden rounded-lg"
            id="video-section"
          >
            <ReactPlayer
              url="https://youtu.be/gQ6_pEQZsVE"
              controls
              width="100%"
              height="80%" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
