import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Partners from "../components/homepage_contents/partners";

const AboutUs = () => {
	const theme = useSelector((state) => state.theme?.theme);
	const language = useSelector((state) => state.language?.language);

	const isDarkTheme = theme === "dark";
	const isAmharic = language === "amh";

	const fadeInUp = {
		initial: { opacity: 0, y: 50 },
		whileInView: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
		viewport: { amount: 0.2, once: true },
	};

	return (
		<motion.div
			className={
				isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
			}
		>
			{/* Hero Section */}
			<motion.div
				className="h-screen flex items-center justify-center"
				style={{ backgroundColor: "#161628" }}
				{...fadeInUp}
			>
				<div className="text-center px-1 md:px-0 w-full md:w-[60%] flex flex-col items-center justify-center">
					<p className="mb-4 text-sm uppercase text-[#FF8689]" {...fadeInUp}>
						{isAmharic ? "ስለ እኛ" : "About Us"}
					</p>
					<h1
						className={`text-3xl font-semibold md:text-4xl ${"text-gray-100"}`}
						{...fadeInUp}
					>
						{isAmharic
							? "ተቋማት ሳይቆም የመማር ባህልን ማስፈፀም ሲወስኑ እንደሚሳካላቸው እናምናለን።"
							: "We believe that organizations can succeed when they commit to building a culture of continuous learning."}
					</h1>
				</div>
			</motion.div>

			{/* Who We Are Section */}
			<motion.div className="px-5 py-20 text-center md:px-32" {...fadeInUp}>
				<h2
					className={`mb-4 text-3xl font-semibold ${
						isDarkTheme ? "text-gray-100" : "text-gray-950"
					}`}
				>
					{isAmharic ? "እኛ ማን ነን" : "Who We Are"}
				</h2>
				<p
					className={`text-justify leading-relaxed ${
						isDarkTheme ? "text-gray-100" : "text-gray-700"
					}`}
				>
					{isAmharic
						? "እንኮይ ቴክኖሎጂስ በኢትዮጵያ ውስጥ ግንባር ቀደም የዲጂታል ትምህርት ልማት ኩባንያ ነው። እኛ በማስተማሪያ ዲዛይን፣ አኒሜሽን፣ ተረት ተረት እና የመማር ልምድ ዲዛይን ላይ የተለያየ እውቀት ያለን ጥልቅ የባለሙያዎች ቡድን ነን። በልምድ ላይ የተመሰረተ የትምህርት ይዘት ንድፍ፣ የስልጠና እና የማማከር አገልግሎቶችን እና የዲጂታል ትምህርት እድገትን በመፍጠር ረገድ ልዩ ነን። እኛ ተጠቃሚን ያማከለ ዲዛይነሮች፣ ፈጣሪ ፈጣሪዎች እና የንድፍ አሳቢዎች ነን ምን ማሰብ እንዳለብን ከማሰብ ይልቅ እንዴት ማሰብ እንዳለብን በማስተማር ትምህርትን አብዮት ለማድረግ የምንጓጓ"
						: "Enkoy Technologies is a leading digital learning development company based in Ethiopia. We are a passionate team of professionals with diverse expertise in instructional design, animation, storytelling, and learning experience design. We specialize in creating experience-based learning content design, training and consultancy services, and digital learning development. We are user-centered designers, creative creators, and design thinkers who are passionate about revolutionizing education by teaching how to think, rather than what to think."}
				</p>
			</motion.div>

			{/* Mission and Vision Section */}
			<div
				className={`py-20 px-5 md:px-20 flex flex-col gap-10 md:flex-row ${
					isDarkTheme ? "bg-gray-700" : "bg-[#FFC961]"
				}`}
			>
				{/* Mission */}
				<motion.div className="flex-1" {...fadeInUp}>
					<h3
						className={`mb-4 text-3xl font-semibold ${
							isDarkTheme ? "text-gray-100" : "text-gray-900"
						}`}
					>
						{isAmharic ? "የእኛ ተልዕኮ" : "Our Mission"}
					</h3>
					<p
						className={` text-justify ${
							isDarkTheme ? "text-gray-100" : "text-gray-800"
						}`}
					>
						{isAmharic
							? "በእንኮይ ቴክኖሎጂዎች፣ የእኛ ተልእኮ የግለሰቦችን ፍላጎት እና ደህንነትን በማስቀደም የንድፍ እና ቴክኖሎጂን በመማር የትምህርት ልምድን የሚያጎለብት ተፅእኖ ያለው ተማሪን ያማከለ ዲጂታል መፍትሄዎችን መፍጠር ነው። መማርን የበለጠ ተደራሽ፣ በይነተገናኝ እና ትርጉም ያለው ለማድረግ ቁርጠኞች ነን።"
							: "At Enkoy Technologies, our mission is to craft impactful, learner-centered digital solutions that prioritize individuals' needs and well-being, enhancing the educational experience through the latest in learning design and technology. We are committed to making learning more accessible, interactive, and meaningful."}
					</p>
				</motion.div>

				{/* Vision */}
				<motion.div className="flex-1" {...fadeInUp}>
					<h3
						className={`mb-4 text-3xl font-semibold ${
							isDarkTheme ? "text-gray-100" : "text-gray-900"
						}`}
					>
						{isAmharic ? "የእኛ እይታ" : "Our Vision"}
					</h3>
					<p
						className={` text-justify ${
							isDarkTheme ? "text-gray-100" : "text-gray-800"
						}`}
					>
						{isAmharic
							? "አዳዲስ የመማሪያ ቴክኖሎጂዎች ያለምንም እንከን ወደ እያንዳንዱ የትምህርት አካባቢ የተዋሃዱበት፣ በእጅ የሚማሩ ቁሳቁሶችን ወደ መስተጋብራዊ፣ አሳታፊ ተሞክሮዎች የሚቀይሩበትን ዓለም እናስባለን። ግባችን ግለሰቦች እና ድርጅቶች ሙሉ አቅማቸውን በእውቀት እና በፈጠራ እንዲከፍቱ ማስቻል ነው።"
							: "We envision a world where innovative learning technologies are seamlessly integrated into every educational environment, transforming manual learning materials into interactive, engaging experiences. Our goal is to empower individuals and organizations to unlock their full potential through knowledge and creativity."}
					</p>
				</motion.div>
			</div>

			{/* Our Journey Section */}
			<motion.div className="px-5 py-20 text-center md:px-32" {...fadeInUp}>
				<h2
					className={`mb-4 text-3xl font-semibold ${
						isDarkTheme ? "text-gray-100" : "text-gray-950"
					}`}
				>
					{isAmharic ? "ጉዟችን" : "Our Journey"}
				</h2>
				<p
					className={` leading-relaxed text-justify ${
						isDarkTheme ? "text-gray-100" : "text-gray-700"
					}`}
				>
					{isAmharic
						? "እ.ኤ.አ. በ2023 የተመሰረተው እንኮይ ቴክኖሎጅ በቀላል ነገር ግን ሀይለኛ ራዕይ፡ በኢትዮጵያ እና ከዚያም በላይ የትምህርት አሰጣጥ ዘዴን መለወጥ ጀመረ። ቡድናችን በኤልኤክስዲ ማሰልጠኛ እና ተረት ተረት ማስተር መደብ አማካኝነት አንድ በመሆን ኢንኮይ ቴክኖሎጂዎችን መፍጠር አስችሎታል። ባለፉት አመታት፣ እንደ GIZ CLM፣ xHub Addis እና GIZ STEP III ላሉ ደንበኞች የተሳካ የትምህርት ሞጁሎችን አዘጋጅተናል።"
						: " Founded in 2023, Enkoy Technologies began with a simple but powerful vision: to transform the way education is delivered in Ethiopia and beyond. Our team united through LXD training and storytelling masterclasses, leading to the creation of Enkoy Technologies. Over the years, we have developed successful learning modules for clients like GIZ CLM, xHub Addis, and GIZ STEP III."}
				</p>
			</motion.div>

			{/* Core Values Section */}
			<motion.div
				className={`px-5 py-20 ${
					isDarkTheme ? "bg-gray-700" : "bg-[#FFCD57]"
				} md:px-32`}
				{...fadeInUp}
			>
				<h2
					className={`mb-8 text-3xl font-semibold text-center ${
						isDarkTheme ? "text-gray-100" : "text-gray-950"
					}`}
				>
					{isAmharic ? "ዋና እሴቶቻችን" : "Our Core Values"}
				</h2>
				<ul
					className={`space-y-4 ${
						isDarkTheme ? "text-gray-100" : "text-gray-800"
					}`}
				>
					<li>
						<strong>{isAmharic ? "ፈጠራ፡" : "Innovation:"}</strong>{" "}
						{isAmharic
							? "ተረት አተረጓጎምን፣ የጨዋታ ክፍሎችን እና ኤልኤክስዲን በማዋሃድ አንገብጋቢ የዲጂታል ትምህርት መፍትሄዎችን እናቀርባለን።"
							: "We provide cutting-edge digital learning solutions by integrating storytelling, gaming elements, and LXD."}
					</li>
					<li>
						<strong>{isAmharic ? "ዘላቂነት፡" : "Sustainability:"}</strong>{" "}
						{isAmharic
							? "ኢኮሎጂያዊ እውቅና በተገኘው መሪነት ብቃት የታጠቁ የማማር ስርዓት እናቀርባለን።"
							: "We develop learning systems that promote environmental awareness and responsible leadership."}
					</li>
					<li>
						<strong>{isAmharic ? "ተባባሪነት፡" : "Collaboration:"}</strong>{" "}
						{isAmharic
							? "በእኩል ተሳትፎ ከተናጋሪዎችና አገልግሎት አቅራቢዎች ጋር ለአእምሮ ውጤት እንሠራለን።"
							: "Working closely with clients and partners to achieve shared goals."}
					</li>
					<li>
						<strong>{isAmharic ? "ማጎልበት፡" : "Empowerment:"}</strong>{" "}
						{isAmharic
							? "በየጊዜው በሚለዋወጠው ዓለም ውስጥ ለመላመድ አስፈላጊ የሆኑ የትችት የማሰብ ችሎታዎችን እናስተምራለን።"
							: "We teach critical thinking skills necessary for adapting in an ever-changing world."}
					</li>
					<li>
						<strong>{isAmharic ? "የአየር ንብረት እርምጃ" : "Climate Action:"}</strong>{" "}
						{isAmharic
							? "የአየር ንብረት ለውጥን ለመቅረፍ ለፈጠራ መፍትሄዎች ቁርጠኛ ነው።"
							: "Committed to innovative solutions to address climate change."}
					</li>
				</ul>
			</motion.div>

			{/* Partners Section */}
			<motion.div className="mt-20" {...fadeInUp}>
				<Partners />
			</motion.div>
		</motion.div>
	);
};

export default AboutUs;
