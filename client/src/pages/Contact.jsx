import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { MdCall } from "react-icons/md";
const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto contact">
      <Header />

      <div className="items-center justify-between block gap-5 px-10 md:flex md:gap-20 lg:px-3">
        <div className="flex flex-col w-full md:w-[50%] items-center">
          <div ref={container}></div>
          <div className="flex gap-6 animation" data-aos="fade-right">
            <a href="mailto:shegerinnovations@gmail.com" target="_blank">
              <article className="contact__option">
                <SiGmail className="contact-icon" />
              </article>
            </a>

            <a href="https://t.me/Medication12" target="_blank">
              <article className="contact__option">
                <FaTelegramPlane className="contact-icon" />
              </article>
            </a>

            <a href="tel:0909242510">
              <article className="contact__option">
                <MdCall className="contact-icon" />
              </article>
            </a>
          </div>
        </div>

        <form
          className="w-full text-sm md:w-[50%] contact_form animation"

        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="px-3 py-2 text-sm font-light text-white bg-blue-500 rounded sm:px-5 btn btn-primary "
          >
            <IoMdSend size={25} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact