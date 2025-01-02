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
			// {
			// 	text:
			// 		language === "amh"
			// 			? "የተገቢ ተቀጣጣሪነት ስልጠና"
			// 			: "Fair Employment Practice Training",
			// 	link: "/corporate-training/fair-employment",
			// },
			// {
			// 	text:
			// 		language === "amh"
			// 			? "የእንቅስቃሴና ጤና ስልጠና"
			// 			: "Safety and Health at Workplace Training",
			// 	link: "/corporate-training/safety",
			// },
			// {
			// 	text:
			// 		language === "amh"
			// 			? "የሥራ እና ሕይወት ሚዛን ስልጠና"
			// 			: "Work-life Balance Training",
			// 	link: "/corporate-training/work-life",
			// },
			// {
			// 	text: language === "amh" ? "ሶፍት ክህሎት ስልጠና" : "Soft Skill Training",
			// 	link: "/corporate-training/soft-skill",
			// },
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
				<span className="ml-2 text-lg font-bold text-gray-600">
					{texts.title}
				</span>
			</div>
			{/* Overview Link */}
			<a
				href="/corporate-training"
				className="inline-block mb-4 text-sm font-bold text-yellow-400 hover:underline"
			>
				{texts.overview}
			</a>
			{/* Two-Column Layout */}
			<div className="grid grid-cols-2 gap-x-6">
				{texts.items.slice(0, 5).map((item, index) => (
					<ul key={index} className="mt-3 text-sm">
						<li>
							<a
								href={item.link}
								className="block transition cursor-pointer hover:text-yellow-400"
							>
								{item.text}
							</a>
						</li>
					</ul>
				))}
				{texts.items.slice(5).map((item, index) => (
					<ul key={index} className="mt-3 text-sm">
						<li>
							<a
								href={item.link}
								className="block transition cursor-pointer hover:text-yellow-400"
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
