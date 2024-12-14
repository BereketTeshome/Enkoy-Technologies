import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OurServices = () => {
	const language = useSelector((state) => state.language.language);
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	const services = [
		{
			title: language === "amh" ? "የትምህርት ቅንብሮች" : "Customized Learning",
			overviewLink: "/self-paced-learning",
			solutionsLink: "/more-solutions",
			items: [
				{
					label: language === "amh" ? "በራስ መስርት ትምህርት" : "Self-paced Learning",
					link: "/services/self-paced-learning",
				},
				{
					label: language === "amh" ? "ጨዋታ አቀማመጥ" : "Gamification",
					link: "/services/gamification",
				},
				{
					label: language === "amh" ? "የተስተካከለ ቪዲዮ" : "Animated Video",
					link: "/services/animated-videos",
				},
				{
					label: language === "amh" ? "ታሪክ በመናገር" : "Storytelling",
					link: "/services/storytelling",
				},
				{
					label:
						language === "amh" ? "ትርጉም እና ምርጫ" : "Translation and Localization",
					link: "/services/translation",
				},
				{
					label: language === "amh" ? "ተደራሽነት" : "Accessibility",
					link: "/services/accessibility",
				},
			],
		},
		{
			title:
				language === "amh" ? "ምክር እና ምክር አቅራቢዎች" : "Consulting and Advisory",
			overviewLink: "/learning-experiences",
			solutionsLink: "",
			items: [
				{
					label:
						language === "amh"
							? "የትምህርት ተሞክሮ ንድፍ"
							: "Learning Experiences Design",
					link: "/services/learning-experiences",
				},
				{
					label: language === "amh" ? "የማስተማሪያ ንድፍ" : "Instructional Design",
					link: "/services/instructional-design",
				},
				{
					label:
						language === "amh"
							? "የቤት ውስጥ ስልጠና ዲጂታል መስራት"
							: "In-house Training Digitalization",
					link: "/services/training-digitalization",
				},
			],
		},
		{
			title:
				language === "amh"
					? "አኒሜሽን እና ቪዲዮ ፕሮዳክሽን"
					: "Animation and Video Production",
			overviewLink: "/animation-videos",
			solutionsLink: "",
			items: [
				{
					label: language === "amh" ? "አኒሜሽን ቪዲዮ" : "Animation Video",
					link: "/services/animation-videos",
				},
				{
					label: language === "amh" ? "የቪዲዮ ማሻሻያ" : "Video Editing",
					link: "/services/video-editing",
				},
				{
					label: language === "amh" ? "ግራፊክስ ንድፍ" : "Graphics Design",
					link: "/services/graphics-design",
				},
			],
		},
		{
			title: language === "amh" ? "አቅም ማጠናቀቂያ" : "Capacity Building",
			overviewLink: "/services/LXD",
			solutionsLink: "",
			items: [
				{
					label: language === "amh" ? "የንድፍ ስልጠና" : "LXD Training",
					link: "/services/LXD",
				},
				{
					label: language === "amh" ? "የመሪነት ክህሎት" : "Leadership Skill",
					link: "/services/leadership-skill",
				},
				{
					label: language === "amh" ? "የግል እድገት" : "Personal Development",
					link: "/services/personal-development",
				},
				{
					label: language === "amh" ? "የሥራ ችሎታ" : "Employability Skill",
					link: "/services/employability-skill",
				},
				{
					label:
						language === "amh" ? "የመሠረታዊ ኮምፒተር ክህሎት" : "Basic Computer Skill",
					link: "/services/computer-skill",
				},
			],
		},
	];

	return (
		<motion.div
			className="z-10 grid w-full md:w-[790px] grid-cols-1 gap-4 p-6 mx-auto bg-white rounded-md shadow-md sm:grid-cols-2 lg:grid-cols-4"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{services.map((service, index) => (
				<motion.div
					key={index}
					className="flex flex-col"
					variants={itemVariants}
				>
					<div className="flex items-center mb-4">
						<img
							src="/img/contentsMenuImg.png"
							alt={service.title}
							className="w-8 h-8"
						/>
						<span className="ml-2 min-h-[50px] font-bold text-gray-800">
							{service.title}
						</span>
					</div>
					<a
						href={service.overviewLink}
						className="text-sm text-[#FFCD57] font-bold hover:underline"
					>
						{language === "amh" ? "ማጠቃለያን ይመልከቱ" : "See Overview"}
					</a>
					<ul className="space-y-4 text-sm text-gray-700">
						{service.items.map((item, idx) => (
							<li key={idx}>
								<a
									href={item.link}
									className="transition cursor-pointer hover:text-blue-500"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					{/* {service.solutionsLink && (
						<a
							href={service.solutionsLink}
							className="mt-4 text-sm text-[#fcb633] font-bold hover:underline"
						>
							{language === "amh" ? "ተጨማሪ መፍትሄዎችን ይመልከቱ" : "See More Solutions"}
						</a>
					)} */}
				</motion.div>
			))}
		</motion.div>
	);
};

export default OurServices;
