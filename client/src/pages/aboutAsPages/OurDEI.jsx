import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

// Animated Section Component
const AnimatedSection = ({ children }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={animationVariants}
		>
			{children}
		</motion.div>
	);
};

// OurDEI Component
const OurDEI = () => {
	const theme = useSelector((state) => state.theme?.theme);
	const language = useSelector((state) => state.language?.language);
	const isDarkTheme = theme === "dark";
	const isAmharic = language === "amh";

	return (
		<div>
			<div className="bg-[#161628] text-center text-white text-4xl font-semibold py-20">
				<p>{isAmharic ? "በዲኢ እና ኢ ላይ የምንተጋደለው" : "Our Dedication to DEI"}</p>
			</div>
			<br />
			<br />
			<br />
			<div className="flex flex-col items-center">
				<div className="w-[70%] text-gray-900 mb-20 *:mb-20">
					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic ? "ምን እንደምንለይም ያደርጋል?" : "What Makes Us Unique"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "በEnkoy Technologies፣ ልዩነት፣ ፍትሃዊነት እና ማካተት (DEI)ን በቁም ነገር እንወስዳለን ምክንያቱም የተለያዩ አመለካከቶች ወደ የበለጠ ፈጠራዊ መፍትሄዎች ይመራሉ ብለን እናምናለን። በእውነት የሚለየን በተጠቃሚ ላይ ያማከለ ንድፍ እና የፈጠራ የመማር አቀራረባችን ቁርጠኝነት ነው። ይዘትን ብቻ አንቀይርም; ወደ መሳጭ ልምምዶች ወደሚማርክ እና አነሳስ እንለውጠዋለን። የእኛ ጨዋታ የሚመስሉ ንጥረ ነገሮች ተሳትፎን ያበረታታሉ፣ ይህም መማር እንደ ተግባር እንዲቀንስ እና የበለጠ አስደሳች ተሞክሮ እንዲመስል ያደርገዋል። በተጨማሪም፣ ከተለያዩ ዘርፎች ጋር በመስራት ያለን ሰፊ ልምድ—ትምህርትን፣ መንግስትን እና ለትርፍ ያልተቋቋሙ ድርጅቶችን ጨምሮ—የደንበኞቻችንን ልዩ ፍላጎቶች የሚያሟሉ መፍትሄዎችን እንድናዘጋጅ ያስችለናል። በኤንኮይ ቴክኖሎጂዎች፣ መማር አስደሳች ጉዞ መሆን አለበት ብለን እናምናለን፣ እና ያንን እውን ለማድረግ እዚህ ነን"
									: "At Enkoy Technologies, we take Diversity, Equity, and Inclusion (DEI) seriously because we believe that diverse perspectivelead to more innovative solutions. What truly sets us apart is our commitment to user-centered design and our innovative approach to learning. We don’t just convert content; we transform it into immersive experiences that captivate and inspire. Our game-like elements foster engagement, making learning feel less like a task and more like a fun experience. Additionally, our extensive experience working with diverse sectors—including education, government, and non-profit organizations—allows us to tailor solutions that meet the unique needs of our clients. At Enkoy Technologies, we believe learning should be an enjoyable journey, and we’re here to make that a reality."}
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic
									? "አካታች የትምህርት ተሞክሮዎች"
									: "Inclusive Learning Experiences"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic ? (
									<>
										በ<b>እንኮይ ቴክኖሎጂዎች</b>፣ ትምህርት እንደማንኛውም ተመክሮ ሃሳብ ማስተላለፍ ሳይሆን
										ደስታ ማህደር መሆን አለበት ብለን እናምናለን። እኛ የተማሪ ልምድ እንቀትና እኩልነት መስፈርትን
										(DEI) በመካተት ትምህርታችን ሁሉንም ተማሪ ለማካተት እንቀናጀለን። መፍትሔዎቻችን በማእከል
										ማሳተምና ሰዎችን ከተለያዩ ሕይወታቸው መንገዶች ማምለክ ይኖርበታል። ትምህርት ብቻ የእድገት
										መሣሪያ ሳይሆን እኩልነትንም ማግኘት የሚያስችል ድርጅት እንዲሆን እንደምንቀናጅ ነው።
									</>
								) : (
									<>
										At <b>Enkoy Technologies</b>, we believe learning should be
										an enjoyable journey. We incorporate DEI principles into our
										Learning Experience Design (LXD), ensuring that our content
										is accessible to all learners. Our solutions are designed to
										engage and empower people from all walks of life, making
										learning not only a tool for growth but also a bridge for
										equity.
									</>
								)}
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic
									? "የአቅራቢ ልዩነት እና አጋርነት"
									: "Supplier Diversity and Partnerships"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "ከተለያዩ ጋር አጋርነት ለመፍጠርም ቁርጠኞች ነን አቅራቢዎች፣ ትብብራችን እሴቶቻችንን የሚያንፀባርቅ መሆኑን ማረጋገጥ የፍትሃዊነት እና ማካተት. የእኛ አጋርነት ለንግድ ስራ ቅድሚያ ይሰጣል ጨምሮ ዝቅተኛ ውክልና የሌላቸው ቡድኖች በግለሰቦች ባለቤትነት የተያዘ ሴቶች, ቀለም ያላቸው ሰዎች እና አካል ጉዳተኞች. ይህ አቀራረብ ማህበረሰባችንን እና እኛ መፍትሄዎችን ያጠናክራል። አቅርቦት, የጋራ እድገትን እና እድገትን ማሳደግ."
									: " We are also committed to fostering partnerships with diverse suppliers, ensuring that our collaborations reflect our values of equity and inclusion. Our partnerships prioritize businesses owned by individuals from underrepresented groups, including women, people of color, and those with disabilities. This approach strengthens both our community and the solutions we offer, promoting shared growth and development."}
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic
									? "DEIን በማስተዋወቅ ረገድ የእኛ ሚና"
									: "Our Role in Promoting DEI"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "በእንኮይ ቴክኖሎጂዎች፣ የስራ ቦታችን እያንዳንዱ የቡድን አባል መካተት፣ ዋጋ ያለው እና ስልጣን እንዳለው የሚሰማው ቦታ መሆኑን እናረጋግጣለን። እራሳችንን ወደምንሰራው ስራ እናመጣለን፣ እና ልዩነታችን ከብዙ ተመልካቾች ጋር የሚስማሙ የመማር መፍትሄዎችን የመፍጠር ችሎታችንን ያጠናክራል። ፍትሃዊ እና አካታች የስራ ባህል ለመፍጠር ባለን ቁርጠኝነት ኩራት ይሰማናል፣ እና የመማሪያ መድረኮቻችን እነዚያን እሴቶች እንዲያንፀባርቁ ለማድረግ ቁርጠኞች ነን።"
									: "At Enkoy Technologies, we ensure our workplace is a space where every team member feels included, valued, and empowered. We bring our whole selves to the work we do, and our diversity strengthens our ability to create learning solutions that resonate with a wide audience. We're proud of our commitment to creating an equitable and inclusive work culture, and we’re dedicated to ensuring our learning platforms reflect those values."}
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic
									? "ለዘላቂ ተግባራት የገባነው ቃል"
									: "Our Promise to Sustainable Practices"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "በኤንኮይ ቴክኖሎጂስ፣ ልዩነት፣ ፍትሃዊነት እና ማካተት (DEI)ን በቁም ነገር እንወስዳለን ምክንያቱም የተለያዩ አመለካከቶች ወደ የበለጠ ፈጠራ መፍትሄዎች ይመራሉ ብለን እናምናለን። በተጠቃሚ ላይ ያማከለ ንድፍ ያለንን ቁርጠኝነት እና አዲስ የመማር አቀራረባችንን የሚለየን። ይዘትን ብቻ አንቀይርም; ወደ መሳጭ ልምምዶች ወደሚማርክ እና አነሳስ እንለውጠዋለን። የእኛ ጨዋታ የሚመስሉ ንጥረ ነገሮች ተሳትፎን ያበረታታሉ፣ ይህም መማር እንደ ተግባር እንዲቀንስ እና የበለጠ አስደሳች ተሞክሮ እንዲመስል ያደርገዋል። በተጨማሪም፣ ከተለያዩ ዘርፎች ጋር በመስራት ያለን ሰፊ ልምድ—ትምህርትን፣ መንግስትን እና ለትርፍ ያልተቋቋሙ ድርጅቶችን ጨምሮ—የደንበኞቻችንን ልዩ ፍላጎቶች የሚያሟሉ መፍትሄዎችን እንድናዘጋጅ ያስችለናል። በኤንኮይ ቴክኖሎጂዎች፣ መማር አስደሳች ጉዞ መሆን አለበት ብለን እናምናለን፣ እና ያንን እውን ለማድረግ እዚህ ነን"
									: "At Enkoy Technologies, we take Diversity, Equity, and Inclusion (DEI) seriously because we believe that diverse perspectives lead to more innovative solutions. What truly sets us apart isour commitment to user-centered design and our innovative approach to learning. We don’t just convert content; we transform it into immersive experiences that captivate and inspire. Our game-like elements foster engagement, making learning feel less like a task and more like a fun experience. Additionally, our extensive experience working with diverse sectors—including education, government, and non-profit organizations—allows us to tailor solutions that meet the unique needs of our clients. At Enkoy Technologies, we believe learning should be an enjoyable journey, and we’re here to make that a reality."}
							</p>
							<br />
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "ከውስጣዊ ጥረታችን ባሻገር ለደንበኞቻችን በምናቀርባቸው መፍትሄዎች ውስጥ ዘላቂነት እንዲኖር እንመክራለን። የእኛ ኮርሶች እና ሞጁሎች ብዙውን ጊዜ ስለ አየር ንብረት ለውጥ፣ የአካባቢ ኃላፊነት እና ዘላቂ አመራር ግንዛቤን የሚያሳድጉ አካላትን ያካትታሉ። ተማሪዎች የዘላቂነትን አስፈላጊነት እንዲገነዘቡ በመርዳት፣ በራሳቸው ህይወት እና ማህበረሰቦች ውስጥ ትርጉም ያለው እርምጃ እንዲወስዱ እናበረታታቸዋለን። በእንኮይ ቴክኖሎጂስ፣ ለዘላቂ አሠራሮች የምንገባው ቃል የኛን አሻራ በመቀነስ ላይ ብቻ አይደለም። የበለጠ ተቋቋሚ እና አካባቢን ጠንቅቆ የሚያውቅ ዓለም ለመፍጠር ሌሎችን ከእኛ ጋር እንዲቀላቀሉ ማነሳሳት ነው።"
									: "Beyond our internal efforts, we also advocate for sustainability in the solutions we provide to our clients. Our courses and modules often incorporate elements that raise awareness about climate change, environmental responsibility, and sustainable leadership. By helping learners understand the importance of sustainability, we empower them to take meaningful action in their own lives and communities. At Enkoy Technologies, our promise to sustainable practices isn’t just about reducing our footprint; it’s about inspiring others to join us in creating a more resilient and environmentally conscious world."}
							</p>
						</div>
					</AnimatedSection>

					<AnimatedSection>
						<div>
							<h3 className="mb-5 text-4xl text-gray-200">
								{isAmharic ? "አካታች የእድገት ጉዞ" : "Inclusive Growth Journey"}
							</h3>
							<p
								className={`text-justify ${
									isDarkTheme ? "text-gray-300" : "text-gray-900"
								}`}
							>
								{isAmharic
									? "እያንዳንዱ ድምጽ የሚወደድበት የተለያየ፣ ሁሉን ያካተተ እና አዎንታዊ የስራ ባህል ለማዳበር ቆርጠን ተነስተናል። ቡድናችን ትብብርን፣ ቀጣይነት ያለው ትምህርትን እና ሙያዊ እድገትን በሚያበረታታ አካባቢ ውስጥ ያድጋል። እንደ ክፍት በር ፖሊሲያችን፣ የቡድን ግንባታ ተግባራት፣ የእውቀት መጋራት ክፍለ-ጊዜዎች እና የማህበረሰብ አገልግሎት ተነሳሽነት ባሉ ጥቅማ ጥቅሞች እያንዳንዱ የቡድን አባል በግል እና በሙያዊ የማደግ እድል እንዳለው እናረጋግጣለን። በእንኮይ ቴክኖሎጅዎች፣ ስራዎ ከስራ በላይ ነው—በትምህርት እና በዘላቂነት ላይ ዘላቂ ተጽእኖ ለመፍጠር የሚደረግ ጉዞ ነው።"
									: " We are committed to fostering a diverse, inclusive, and positive work culture where every voice is valued. Our team thrives in an environment that encourages collaboration, continuous learning, and professional growth. With benefits like our open-door policy, team-building activities, knowledge-sharing sessions, and community service initiatives, we ensure that each team member has the opportunity to grow personally and professionally. At Enkoy Technologies, your career is more than just a job—it’s a journey towards making a lasting impact on education and sustainability."}
							</p>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</div>
	);
};

export default OurDEI;
