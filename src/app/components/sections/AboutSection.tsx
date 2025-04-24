"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-24 md:py-55 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
        className="text-6xl md:text-6xl mb-2 font-extrabold tracking-tight text-gray-900"
      >
        Andrew Wall
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-3xl font-semibold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text drop-shadow-lg"
      >
        Software Engineer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-4 flex justify-center gap-6"
      >
        <a
          href="https://github.com/andrewdwall"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400"
        >
          <img src="/images/github-logo.png" alt="GitHub" className="w-6 h-6" />
          <span className="text-lg">andrewdwall</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400"
        >
          <img
            src="/images/protonmail-logo.png"
            alt="Email"
            className="w-6 h-6"
          />
          <span className="text-lg">ProtonMail</span>
        </a>
        <a
          href="https://linkedin.com/in/andrewdwall"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400"
        >
          <img
            src="/images/linkedin-logo.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
          <span className="text-lg">andrewdwall</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-4 text-lg text-gray-700 text-center leading-relaxed"
      >
        <p className="font-medium text-gray-900">
          Foundation knowledge in modern web development, AI-driven solutions &
          full stack technologies.
        </p>
        <p className="font-medium text-gray-900 mt-2">
          Keen interest in Machine Learning, AI development & its application
          across industries.
        </p>
        <p className="font-medium text-gray-900 mt-2">
          Strong background in Biological Sciences and Healthcare.
        </p>
        <p className="font-medium text-gray-900 mt-2">
          Experience as a Clinical Nurse Specialist in the Emergency Department.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-6 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white text-md rounded-lg hover:bg-gradient-to-r hover:from-sky-400 hover:to-emerald-400 hover:text-white transition text-lg"
        >
          View Projects
        </a>
      </motion.div>
    </main>
  );
}