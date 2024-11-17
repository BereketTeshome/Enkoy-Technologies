import React from "react";

const ContactUsSection = () => {
  return (
    <div className="py-20 text-white bg-black">
      <div className="container px-6 mx-auto lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Let's talk
            </h2>
            <p className="mb-4 text-gray-300">
              Have a question? Want to talk about your project? We’re ready when
              you are.
            </p>
            <p className="text-gray-300">
              To view our current job openings, please visit our
              <a
                href="#"
                className="text-pink-500 underline hover:text-pink-400"
              >
                careers page
              </a>
              .
            </p>
            <div className="mt-8">
              <img
                src="/img/services/accessibility.png"
                alt="Illustration"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 text-gray-900 bg-white shadow-lg shadow-white">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Your first name"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Your last name"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your phone"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="project-details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="project-details"
                  placeholder="Enter project details"
                  rows="4"
                  className="block w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
