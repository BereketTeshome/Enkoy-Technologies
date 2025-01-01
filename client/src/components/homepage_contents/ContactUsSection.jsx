import { motion } from "framer-motion"; // Animation library
import { useEffect, useRef, useState } from "react"; // React hooks for state and lifecycle management
import emailjs from "emailjs-com"; // Service to send emails
import lottie from "lottie-web"; // Animation library
import contactAnimation from "../../assets/contact.json"; // Lottie animation file
import { useSelector } from "react-redux"; // Redux hook for accessing the global state

const ContactUsSection = () => {
  const theme = useSelector((state) => state.theme?.theme); // Get the current theme (dark or light) from Redux state
  const isDarkTheme = theme === "dark"; // Check if the theme is dark

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
    company: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^(?=.*[a-zA-Z])(?=.*@)[^\s@]+@[^\s@]+\.[^\s@]+$/; // Must contain letters and an '@'
    const selectedOption = document.querySelector(
      "#countryCode option:checked"
    );
    const requiredLength = selectedOption
      ? parseInt(selectedOption.getAttribute("data-length"))
      : 0;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.countryCode &&
      formData.phone.length !== requiredLength &&
      requiredLength > 0
    ) {
      newErrors.phone = `Phone number must be ${requiredLength} digits.`;
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateForm();
  };

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: contactAnimation,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setLoading(true); // Set loading to true when submitting starts
      const serviceID = "service_hbuyjwk";
      const templateID = "template_3k2h30m";
      const userID = "exbDEOF6w8_vEVNex";

      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        company: formData.company,
        projectDescription: formData.projectDescription,
      };

      try {
        const response = await emailjs.send(
          serviceID,
          templateID,
          templateParams,
          userID
        );
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          countryCode: "",
          phone: "",
          company: "",
          projectDescription: "",
        });
      } catch (err) {
        console.error("FAILED...", err);
        alert("There was an error sending your message. Please try again.");
      } finally {
        setLoading(false); // Set loading back to false after submission
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div
        ref={container}
        className={`w-[100%]  sm:w-[50%] pr-24 border-r-2 ${
          isDarkTheme ? "border-gray-600" : "border-gray-300"
        }`}
      ></div>

      <div className="flex flex-col items-center justify-center flex-1 scale-90">
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-xl bg-opacity-90">
          <div className="absolute top-[-8px] left-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] rounded-lg border-2 border-transparent bg-gradient-to-r from-[#FFC94D] via-[#FF8A00] to-[#FFC94D] animate-pulse z-0 shadow-[0_0_20px_rgba(255,200,75,0.8),0_0_40px_rgba(22,22,40,0.5)] blur-sm"></div>

          <motion.form
            className="relative z-10"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileFocusWithin={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <motion.input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileFocusWithin={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileFocusWithin={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="flex space-x-2">
                <motion.select
                  name="countryCode"
                  id="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
                >
                  <option value="" disabled>
                    Select Code *
                  </option>

                  {/* <!-- Africa --> */}
                  <option value="+251">🇪🇹 +251 (Ethiopia)</option>
                  <option value="+1">🇺🇸 +1 (United States)</option>
                  <option value="+234">🇳🇬 +234 (Nigeria)</option>
                  <option value="+254">🇰🇪 +254 (Kenya)</option>
                  <option value="+27">🇿🇦 +27 (South Africa)</option>
                  <option value="+233">🇬🇭 +233 (Ghana)</option>
                  <option value="+212">🇲🇦 +212 (Morocco)</option>
                  <option value="+216">🇹🇳 +216 (Tunisia)</option>
                  <option value="+225">🇨🇮 +225 (Ivory Coast)</option>
                  <option value="+243">🇨🇩 +243 (DR Congo)</option>
                  <option value="+20">🇪🇬 +20 (Egypt)</option>

                  {/* <!-- Europe --> */}
                  <option value="+44">🇬🇧 +44 (United Kingdom)</option>
                  <option value="+49">🇩🇪 +49 (Germany)</option>
                  <option value="+33">🇫🇷 +33 (France)</option>
                  <option value="+34">🇪🇸 +34 (Spain)</option>
                  <option value="+39">🇮🇹 +39 (Italy)</option>
                  <option value="+47">🇳🇴 +47 (Norway)</option>
                  <option value="+46">🇸🇪 +46 (Sweden)</option>
                  <option value="+45">🇩🇰 +45 (Denmark)</option>
                  <option value="+41">🇨🇭 +41 (Switzerland)</option>
                  <option value="+31">🇳🇱 +31 (Netherlands)</option>
                  <option value="+48">🇵🇱 +48 (Poland)</option>
                  <option value="+43">🇦🇹 +43 (Austria)</option>
                  <option value="+386">🇸🇮 +386 (Slovenia)</option>
                  <option value="+420">🇨🇿 +420 (Czech Republic)</option>

                  {/* <!-- North America --> */}
                  <option value="+52">🇲🇽 +52 (Mexico)</option>

                  {/* <!-- Middle East --> */}
                  <option value="+971">🇦🇪 +971 (United Arab Emirates)</option>
                  <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                  <option value="+90">🇹🇷 +90 (Turkey)</option>
                  <option value="+98">🇮🇷 +98 (Iran)</option>

                  {/* Add other options */}
                </motion.select>
                <motion.input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 p-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Number *"
                  whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileFocusWithin={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <motion.input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              whileFocusWithin={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description *
              </label>
              <motion.textarea
                name="projectDescription"
                id="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                whileFocus={{ boxShadow: "0 0 8px rgba(255, 105, 180, 0.6)" }}
              ></motion.textarea>
              {errors.projectDescription && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.projectDescription}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full py-2 text-black rounded-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ffc94d] hover:bg-[#ffc94d]"
              }`}
              disabled={loading} // Disable button while loading
              whileHover={{ scale: loading ? 1 : 1.02 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
