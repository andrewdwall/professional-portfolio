"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="py-16 relative">

      {/* Vertical Scroll Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "90%" }}
        transition={{ duration: 4.5 }}
        className="absolute ml-75 mt-7 left-4 top-0 w-0.5 bg-blue-500"
      />

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Education
      </h2>

      <div className="container mx-auto flex flex-col gap-6 px-4 max-w-2xl">

        {/* Tech Courses*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col items-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            Tech Courses & Certifications
          </h3>

          {/* Course & Badge Alignment */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            {/* Course Text */}
            <p className="text-lg font-medium text-gray-800">
              AI-Driven Software Engineering
            </p>

            {/* Badge Image */}
            <img
              src="/images/ai-driven-software-engineering-badge.png"
              alt="Credly Badge"
              className="w-24 h-24 object-contain rounded-lg shadow-md"
            />
          </div>
        </motion.div>
        {/* Software Engineering Student */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-100 shadow-md rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Software Engineering Student
          </h3>
          <p className="text-gray-600 text-sm">2024 - Present</p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Gained experience working with machine learning models, including
              supervised learning, NLP, and neural networks.
            </li>
            <li>
              Built a React-based portfolio using Next.js, Tailwind CSS, and
              Framer Motion, integrating animations and modular design.
            </li>
            <li>
              Created an interactive map using HTML/CSS & JavaScript, applying
              DOM concepts, event listeners, and showcasing creative design.
            </li>
            <li>
              Developed a Python text-based adventure game, implementing
              object-oriented programming and turn-based mechanics.
            </li>
            <li>
              Worked with SQL and NoSQL databases, designing and optimising
              queries for data retrieval and storage.
            </li>
            <li>
              Designed and implemented RESTful APIs to facilitate communication
              between front-end and back-end applications.
            </li>
            <li>
              Integrated cloud-based deployment solutions using Microsoft Azure,
              understanding cloud principles and scalable architecture.
            </li>
            <li>
              Utilised Git and GitHub for version control and collaboration,
              contributing to and managing repositories through VS Code.
            </li>
            <li>
              Applied scientific research methodologies to software development,
              leveraging analytical thinking and problem-solving skills.
            </li>
          </ul>
        </motion.div>

        {/* MSc Adult Nursing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-100 shadow-md rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            MSc Adult Nursing
          </h3>
          <p className="text-gray-600 text-sm">2016 - 2018</p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Developed advanced clinical reasoning and problem-solving skills,
              applying evidence-based practice to patient care across a wide
              range of healthcare environments.
            </li>
            <li>
              Gained extensive experience in multidisciplinary collaboration,
              working with healthcare teams to provide nursing care.
            </li>
            <li>
              Completed in-depth study of pharmacology, pathophysiology,
              advanced practice, and patient-centred care, reinforcing a strong
              scientific foundation for decision-making in clinical practice.
            </li>
          </ul>
        </motion.div>

        {/* BSc Human Biology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-100 shadow-md rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            BSc Human Biology
          </h3>
          <p className="text-gray-600 text-sm">2012 - 2015</p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Built a strong foundation in biological sciences, including
              genetics, microbiology, and physiology, with a focus on human
              health and disease.
            </li>
            <li>
              Conducted scientific research and statistical analysis using SPSS,
              developing analytical and critical thinking skills applicable to
              data-driven fields such as AI and healthcare technology.
            </li>
            <li>
              Gained laboratory experience in molecular biology techniques,
              reinforcing technical precision and attention to detail.
            </li>
            <li>
              Refined academic writing skills, achieving a First Class result
              for my quantitative-focused dissertation in Microbiology.{" "}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
