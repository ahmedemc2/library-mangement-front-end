import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 px-4  text-white">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          Contact Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-gray-400 mt-2">We’d love to hear from you</p>
      </div>

      <form className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
