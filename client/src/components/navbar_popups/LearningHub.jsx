import { useSelector } from "react-redux";

const LearningHub = () => {
	// Get the current language from Redux
	const language = useSelector((state) => state.language.language);

	// Dynamic text based on the selected language
	const texts = {
		title: language === "amh" ? "የመማር ማዕከል" : "Learning Hub",
		description:
			language === "amh"
				? "በመማሪያ ኢንዱስትሪ ውስጥ የቅርብ ጊዜ ምክሮችን እና ዜናዎችን ይከታተሉ"
				: "Keep up with the latest tips and news in the learning industry.",
		latestPosts: language === "amh" ? "የቅርብ ጊዜ ጽሑፎች" : "Latest Posts",
		blog: language === "amh" ? "ብሎግ" : "Blog",
		ebooks: language === "amh" ? "ኢ-መጽሐፍት" : "E-Books",
		careers: language === "amh" ? "የሥራ ዝርዝሮች" : "Careers",
		// events: language === "amh" ? "መጪ ክስተቶች" : "Upcoming Events",
	};

	return (
		<div className="flex flex-col sm:flex-row items-start gap-9 p-6 bg-white text-gray-500 rounded-md shadow-md md:w-[400px]">
			{/* Left Section */}
			<div className="border-r-[1px] border-gray-400 pr-4 min-w-[130px]">
				<div className="flex items-center mb-4">
					<img
						src="/img/contentsMenuImg.png"
						alt={texts.title}
						className="w-12 h-12 mr-3"
					/>
					<span className="text-lg font-bold text-gray-600">{texts.title}</span>
				</div>
				<p className="mb-4 text-sm">{texts.description}</p>
			</div>

			{/* Right Section */}
			<div className="w-full">
				<h3 className="mb-2 text-sm font-semibold text-gray-700">
					{texts.latestPosts}
				</h3>
				{/* Links Section */}
				<ul className="mt-4 space-y-4 text-xs">
					<li>
						<a href="/blog" className="font-semibold transition text-md hover:text-yellow-500 hover:font-bold ">
							{texts.blog}
						</a>
					</li>
					<li>
						<a href="/ebooks" className="font-semibold transition text-md hover:text-yellow-500 hover:font-bold ">
							{texts.ebooks}
						</a>
					</li>
					{/* <li>
						<a href="/events" className="font-semibold transition text-md hover:text-yellow-500 hover:font-bold ">
							{texts.events}
						</a>
					</li> */}
					<li>
						<a href="/careers" className="font-semibold transition text-md hover:text-yellow-500 hover:font-bold ">
							{texts.careers}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LearningHub;
