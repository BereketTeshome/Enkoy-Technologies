import { useSelector } from "react-redux";

const DigitalTraining = () => {
	const language = useSelector((state) => state.language.language);

	const texts = {
		title: language === "amh" ? "ዲጂታል ስልጠና" : "Digital Training",
		description:
			language === "amh"
				? "በግምገማታችን ጠንካራ ግንኙነቶችን ያበረታቱ እና በተስፋ ሙሉ እንዲሆኑ ይረዳል።"
				: "Develop strong relationships and become more positive through our assessments.",
		overview: language === "amh" ? "ማጠቃለያን ይመልከቱ" : "See Overview",
		createCourse: language === "amh" ? "ኮርስ ይፍጠሩ" : "Create Course",
		publishedTrainings:
			language === "amh" ? "የታተመ ስልጠና" : "Published Trainings",
	};

	return (
		<div className="flex min-w-[310px] p-6 bg-white text-gray-500 border  rounded-lg shadow-md">
			{/* Left Section */}
			<div className="flex-1 pr-4 border-r ">
				<img
					src="/img/contentsMenuImg.png"
					alt={texts.title}
					className="w-16 h-16 mx-auto mb-4"
				/>
				<h3 className="mb-2 text-lg font-bold text-gray-600">{texts.title}</h3>
				<p className="mb-4 text-sm">{texts.description}</p>
				<a
					href="/digital-training"
					className="font-bold text-yellow-500 text-md hover:underline"
				>
					{texts.overview}
				</a>
			</div>

			{/* Right Section */}
			{/* <div className="flex flex-col gap-3 pl-4">
				<a
					href="/create-course"
					className="text-sm text-yellow-400 hover:underline"
				>
					{texts.createCourse}
				</a>
				<a
					href="/published-trainings"
					className="text-sm text-yellow-400 hover:underline"
				>
					{texts.publishedTrainings}
				</a>
			</div> */}
		</div>
	);
};

export default DigitalTraining;
