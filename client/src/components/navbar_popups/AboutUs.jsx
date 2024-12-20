import React from "react";
import { useSelector } from "react-redux";

const AboutUs = () => {
	// Get the current language from Redux
	const language = useSelector((state) => state.language.language);

	// Dynamic text based on language selection
	const texts = {
		title: language === "amh" ? "ስለ እኛ" : "About Us",
		description:
			language === "amh"
				? "ስለ ተልእኮአችን፣ ዓላማችን እና እዚህ እንዴት እንደደረስን ለማወቅ"
				: "Find out about our mission, purpose, and how we got here.",
		learnMore: language === "amh" ? "ስለእኛ የበለጠ ይወቁ" : "Learn more about us",
		moreAbout: language === "amh" ? "ስለ Enkoy ተጨማሪ" : "More About Enkoy",
		ourTeam: language === "amh" ? "ቡድናችን" : "Our Team",
		ourDEI: language === "amh" ? "የእኛ የDEI እሴት" : "Our DEI Commitment",
	};

	return (
		<div className="flex items-start gap-9 justify-between p-6 bg-white rounded-md shadow-md shadow-white md:w-[400px]">
			{/* Left Section */}
			<div className="border-r-[1px] border-gray-200 min-w-[130px] pr-1">
				<div className="mb-4">
					<img
						src="/img/contentsMenuImg.png"
						alt="Our Work Icon"
						className="w-12 h-12 mr-3"
					/>
					<span className="text-lg font-bold text-gray-800">{texts.title}</span>
				</div>
				<p className="mb-4 text-sm text-gray-600">{texts.description}</p>
				<a href="/about-us" className="text-sm font-bold text-yellow-500 hover:underline">
					{texts.learnMore}
				</a>
			</div>

			{/* Right Section */}
			<div className="w-full">
				<h3 className="mb-2 text-sm font-semibold text-gray-900">
					{texts.moreAbout}
				</h3>
				{/* Links Section */}
				<ul className="mt-4 text-xs text-gray-500">
					<li className="mt-4 whitespace-nowrap">
						<a href="/about-us/our-team" className="font-semibold hover:text-gray-700">
							{texts.ourTeam}
						</a>
					</li>
					<li className="mt-4 whitespace-nowrap">
						<a href="/about-us/our-DEI" className="font-semibold hover:text-gray-700">
							{texts.ourDEI}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutUs;
