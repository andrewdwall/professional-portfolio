"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-10 text-center mt-25 mb-30"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>

      <div className="container mx-auto flex flex-col items-center gap-6 px-4">
        
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Technical
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Python
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              HTML
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              CSS
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              SQL
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              AI
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              NLP
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Cloud Computing
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              APIs
            </span>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Git
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              VS Code
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Node.js
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              React.js
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Next.js
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Framer Motion
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Flask
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              PyTorch
            </span>
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Other</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Scientific Research
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Laboratory Skills
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Data Analysis
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Statistics
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Advanced Nursing
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-800 text-md font-semibold rounded-lg shadow-md">
              Pharmacology
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
