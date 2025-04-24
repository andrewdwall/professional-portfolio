"use state";

import motion from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img
          src="/images/protonmail-logo.png"
          alt="Email"
          className="w-6 h-6"
        />
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
      </div>

      <div className="container mx-auto max-w-lg rounded-xl p-6">
        <form className="flex flex-col space-y-4">
            
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <a
            href="mailto:"
            className="w-full"
          >
            <button
              type="button"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold transition hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400"
            >
              Send Message
            </button>
          </a>
        </form>
      </div>
    </section>
  );
}