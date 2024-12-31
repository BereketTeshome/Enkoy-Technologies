import OurTeams from "../../components/aboutUs/OurTeams";

const OurTeam = () => {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
  className="relative text-center text-white text-6xl font-semibold h-[50vh] sm:h-[70vh] md:h-[93vh] flex items-center justify-center overflow-hidden"
>
  {/* Background Image with Cover */}
  <div
  className="absolute inset-0 bg-cover filter blur-10 bg-center sm:bg-top"
  style={{
    backgroundImage: `url(/img/aboutUs/groupPhoto.jpg)`, 
  }}
></div>



  {/* Overlay for Better Contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Heading */}
  <div className="relative z-10">
    <p className="text-6xl font-extrabold text-yellow-400 tracking-wide relative">
      <span className="before:content-[''] before:absolute before:-inset-1 before:rounded-lg before:bg-gradient-to-r before:from-yellow-300 before:via-yellow-400 before:to-yellow-500 before:blur-lg before:opacity-30"></span>
      <span className="relative">Our Team</span>
    </p>
  </div>



  {/* Arrow Down Animation */}
  <div className="absolute bottom-8 z-10 animate-bounce cursor-pointer">
    <a href="#ourTeam">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  </div>
</div>


      <br />
      <br />

      {/* OurTeams Component */}
      <div>
        <OurTeams />
      </div>
    </div>
  );
};

export default OurTeam;
