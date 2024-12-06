import { useSelector } from "react-redux";

const OurWork = () => {
	// Get the current language from Redux
	const language = useSelector((state) => state.language.language);

	// Dynamic text based on the selected language
	const texts = {
		title: language === "amh" ? "ሥራችን" : "Our Work",
		description:
			language === "amh"
				? "ከአንዳንድ የዓለም ታዋቂ ድርጅቶች ጋር የፕሮጀክቶችን ውጤት ይመልከቱ።"
				: "See the results of projects with some of the world's most recognizable organizations.",
		caseStudies: language === "amh" ? "የጉዳይ ጥናቶችን ይመልከቱ" : "See Case Studies",
		campaignsTitle:
			language === "amh"
				? "የእኛ የተሸላሚ ኢ-ትምህርት ዘመቻዎች"
				: "Our Award-winning eLearning Campaigns",
		portfolio: language === "amh" ? "ፖርትፎሊዮ" : "Portfolio",
	};

	return (
		<div className="flex items-start gap-8 justify-between p-6 bg-white text-gray-500 rounded-md shadow-md shadow-white md:w-[450px]">
			{/* Left Section */}
			<div className="w-[60%] border-r-[1px] border-gray-400 pr-4">
				<div className="mb-4">
					<img
						src="/img/contentsMenuImg.png"
						alt={texts.title}
						className="w-12 h-12 mr-3"
					/>
					<span className="text-lg text-gray-600 font-bold">{texts.title}</span>
				</div>
				<p className="mb-4 text-sm">{texts.description}</p>
				<a
					href="/our-work"
					className="font-medium text-yellow-400 hover:underline"
				>
					{texts.caseStudies}
				</a>
			</div>

			{/* Right Section */}
			<div className="w-[40%]">
				<h3 className="mb-2 text-sm text-gray-600 font-semibold">
					{texts.campaignsTitle}
				</h3>
				<a
					href="/portfolio"
					className="font-medium text-yellow-400 hover:underline"
				>
					{texts.portfolio}
				</a>
			</div>
		</div>
	);
};

export default OurWork;
