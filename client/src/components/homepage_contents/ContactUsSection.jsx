import React, { useState } from "react";

const ContactUsSection = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        countryCode: "",
        phone: "",
        company: "",
        projectDescription: "",
      });
    }
  };

  return (
    <div className="flex h-screen bg-[#3B2C42]">
      <div
        className="flex-1 hidden bg-center bg-cover md:flex"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/liyucards/new1/refs/heads/main/contactadmission.png')",
        }}
      ></div>

      <div className="flex flex-col items-center justify-center flex-1 scale-90">
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-xl bg-opacity-90">
          <div className="absolute top-[-5px] left-[-5px] w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse z-0"></div>

          <form className="relative z-10" onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  id="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 text-sm bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {/* <option value="" disabled>
                    Select Code *
                  </option> */}
                  <option value="" disabled>
                    Select Code *
                  </option>
                  <option value="+251" data-length="9">
                    🇪🇹 +251 (Ethiopia)
                  </option>
                  <option value="+1" data-length="10">
                    🇺🇸 +1 (United States)
                  </option>
                  <option value="+44" data-length="10">
                    🇬🇧 +44 (United Kingdom)
                  </option>
                  <option value="+91" data-length="10">
                    🇮🇳 +91 (India)
                  </option>
                  <option value="+61" data-length="9">
                    🇦🇺 +61 (Australia)
                  </option>
                  <option value="+81" data-length="10">
                    🇯🇵 +81 (Japan)
                  </option>
                  <option value="+49" data-length="10">
                    🇩🇪 +49 (Germany)
                  </option>
                  <option value="+33" data-length="10">
                    🇫🇷 +33 (France)
                  </option>
                  <option value="+55" data-length="11">
                    🇧🇷 +55 (Brazil)
                  </option>
                  <option value="+234" data-length="10">
                    🇳🇬 +234 (Nigeria)
                  </option>
                  <option value="+27" data-length="9">
                    🇿🇦 +27 (South Africa)
                  </option>
                  {/* Add other countries */}
                </select>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="flex-1 p-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Number *"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description *
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-2 mt-1 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              {errors.projectDescription && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.projectDescription}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-2 text-white transition bg-pink-500 rounded-md hover:bg-pink-600 disabled:bg-gray-300"
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
