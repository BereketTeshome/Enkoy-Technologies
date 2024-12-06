import React from "react";
import { useSelector } from "react-redux";

const CorporateTraining = () => {
	const language = useSelector((state) => state.language.language);

	const texts = {
		title: language === "amh" ? "የኩባንያ ስልጠና" : "Corporate Training",
		overview: language === "amh" ? "ማጠቃለያን ይመልከቱ" : "See Overview",
		items: [
			{
				text:
					language === "amh"
						? "የመሪነት እድገት ስልጠና"
						: "Leadership Development Training",
				link: "/corporate-training/leadership",
			},
			{
				text:
					language === "amh"
						? "የመማር ተሞክሮ ንድፍ (LXD) ስልጠና"
						: "Learning Experience Design (LXD) Training",
				link: "/corporate-training/learning-experience",
			},
			{
				text:
					language === "amh"
						? "የግል እድገት ስልጠና"
						: "Personal Development Training",
				link: "/corporate-training/personal-development",
			},
			{
				text:
					language === "amh"
						? "የመሠረታዊ ኮምፒተር ክህሎት ስልጠና"
						: "Basic Computer Skill Training",
				link: "/corporate-training/basic-computer",
			},
			{
				text:
					language === "amh"
						? "የሥራ ችሎታ እና ኢንተርፕራይዝ ስልጠና"
						: "Employability and Entrepreneurship",
				link: "/corporate-training/employability",
			},
			{
				text:
					language === "amh"
						? "የእውቀት ሥራ እና የSDG ስልጠና"
						: "Decent Work and SDG Training",
				link: "/corporate-training/decent-work",
			},
			{
				text:
					language === "amh"
						? "የተገቢ ተቀጣጣሪነት ስልጠና"
						: "Fair Employment Practice Training",
				link: "/corporate-training/fair-employment",
			},
			{
				text:
					language === "amh"
						? "የእንቅስቃሴና ጤና ስልጠና"
						: "Safety and Health at Workplace Training",
				link: "/corporate-training/safety",
			},
			{
				text:
					language === "amh"
						? "የሥራ እና ሕይወት ሚዛን ስልጠና"
						: "Work-life Balance Training",
				link: "/corporate-training/work-life",
			},
			{
				text: language === "amh" ? "ሶፍት ክህሎት ስልጠና" : "Soft Skill Training",
				link: "/corporate-training/soft-skill",
			},
		],
	};

	return (
		<div className="p-6 md:w-[400px] bg-white text-gray-500 rounded-md shadow-md">
			{/* Header with Icon and Title */}
			<div className="flex items-center mb-4">
				<img
					src="/img/contentsMenuImg.png"
					alt={texts.title}
					className="w-10 h-10"
				/>
				<span className="ml-2 text-lg text-gray-600 font-bold">
					{texts.title}
				</span>
			</div>
			{/* Overview Link */}
			<a
				href="/corporate-training"
				className="text-yellow-400 text-sm mb-4 inline-block hover:underline"
			>
				{texts.overview}
			</a>
			{/* Two-Column Layout */}
			<div className="grid grid-cols-2 gap-x-6">
				{texts.items.slice(0, 5).map((item, index) => (
					<ul key={index} className="space-y-4 text-sm">
						<li>
							<a
								href={item.link}
								className="cursor-pointer block hover:text-yellow-400 transition"
							>
								{item.text}
							</a>
						</li>
					</ul>
				))}
				{texts.items.slice(5).map((item, index) => (
					<ul key={index} className="space-y-4 text-sm">
						<li>
							<a
								href={item.link}
								className="cursor-pointer block hover:text-yellow-400 transition"
							>
								{item.text}
							</a>
						</li>
					</ul>
				))}
			</div>
		</div>
	);
};

export default CorporateTraining;
