"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-15">
      <h2 className="text-3xl font-bold text-center text-gray-900 -mt-6 mb-7">
        My Projects
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {/* Interactive Map Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-white shadow-md rounded-xl p-4.5 flex flex-col items-center overflow-hidden justify-center"
        >
          {/* Rotating Background */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-0 bg-[url('/images/interactive-map-background.png')] bg-contain bg-no-repeat bg-center"
          />

          {/* Foreground Content */}
          <h3 className="text-xl font-semibold text-gray-800 relative mt-15">
            Interactive Map
          </h3>

          {/* Tech Stack Tags */}
          <div className="flex justify-center gap-5 mt-2 relative">
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              HTML
            </div>
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              CSS
            </div>
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              JavaScript
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-2 relative text-center">
            An interactive map, utilising Leaflet.js to allow exploration of the
            regions and lore of Middle-earth.
          </p>

          {/* Buttons Section */}
          <div className="mt-auto flex justify-between w-full relative">
            {/* GitHub Button */}
            <a
              href="https://github.com/andrewdwall/interactive-middle-earth-map"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/github-logo.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>

            {/* Live Demo Button */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-md font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400 hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        {/* Healthcare AI Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-md hover:shadow-md transition-shadow rounded-xl p-4.5 flex flex-col items-center justify-center"
        >
          <div className="flex justify-center gap-4 mb-3 -mt-1 items-end">
            <img
              src="/images/healthcare-ai-logo.png"
              alt="Healthcare AI Logo"
              className="w-22 h-22"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 text-center">
            IV Medication Compatibility AI Assistant
          </h3>
          <p className="text-gray-600 text-md italic font-normal">
            In development
          </p>

          {/* Tech Stack Tags */}
          <div className="flex justify-center gap-4 mt-2 relative">
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Python
            </div>
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Django
            </div>
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              PyTorch
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-2 text-center">
            AI-driven solution for healthcare professionals, facilitating safe
            y-site IV administration and improving patient outcomes.
          </p>

          {/* Buttons Section */}
          <div className="mt-3 flex justify-between w-full relative">

            {/* GitHub Button */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/github-logo.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>

            {/* Live Demo Button */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-md font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400 hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>

        {/* Text-based Adventure Game Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white shadow-md hover:shadow-md transition-shadow rounded-xl p-4.5 flex flex-col items-center"
        >
          {/* Sprites*/}
          <div className="flex justify-center gap-4 mb-4 items-end">
            <img
              src="/images/sprites/alchemist-sprite.png"
              alt="Alchemist Sprite"
              className="w-18 h-18 self-end"
            />
            <img
              src="/images/sprites/wizard-sprite.png"
              alt="Wizard Sprite"
              className="w-18 h-18 self-end"
            />
            <img
              src="/images/sprites/warrior-sprite.png"
              alt="Warrior Sprite"
              className="w-18 h-18 self-end"
            />
            <img
              src="/images/sprites/imp-sprite.png"
              alt="Imp Sprite"
              className="w-16 h-16 self-end"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800">
            Text-Based Adventure Game
          </h3>

          {/* Tech Stack Tags */}
          <div className="flex justify-center gap-5 mt-2 relative">
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Python
            </div>
            <div className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Flask
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mt-2 text-center">
            A Python-based game. Explore the Arcane Tower, collect items, trade
            with allies and battle enemies for rewards.
          </p>

          {/* Buttons Section */}
          <div className="mt-auto flex justify-between w-full relative">

            {/* GitHub Button */}
            <a
              href="https://github.com/andrewdwall/python-text-based-adventure-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/github-logo.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>

            {/* Live Demo Button */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-md font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400 hover:text-white transition"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
