"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="py-16 relative bg-gray-50">

      {/* Vertical Scroll Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "90%" }}
        transition={{ duration: 4.5 }}
        className="absolute ml-75 mt-7 left-4 top-0 w-0.5 bg-blue-500"
      />

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Experience
      </h2>

      <div className="container mx-auto flex flex-col gap-6 px-4 max-w-2xl">

        {/* Clinical Nurse Specialist */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Clinical Nurse Specialist
          </h3>
          <p className="text-gray-600 text-sm">2021 - 2024</p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Led patient assessments, diagnostics, and care planning, utilising
              clinical decision-making skills to manage acute conditions.
            </li>
            <li>
              Managed and analysed patient data, such as blood results, using
              digital health systems to maximise treatment efficacy.
            </li>
            <li>
              Provided education and mentorship to junior staff, demonstrating
              leadership and the ability to teach complex concepts clearly.
            </li>
            <li>
              Adapted to new digital healthcare technologies to enhance patient
              care and optimise service delivery.
            </li>
            <li>
              Redesigned trust-wide documentation with a streamlined layout
              using Publisher, enhancing user experience and readability.
            </li>
          </ul>
        </motion.div>

        {/* Emergency Department */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">Adult Nurse</h3>
          <p className="text-gray-600 text-sm">2019 - 2024</p>
          <p className="text-gray-800 text-xl font-medium">
            Emergency Department
          </p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Worked in a fast-paced, high-pressure environment, making critical
              decisions to implement emergency treatment.
            </li>
            <li>
              Triaged and prioritised patient cases using risk assessment
              algorithms and clinical judgment.
            </li>
            <li>
              Utilised and interpreted digital monitoring systems and electronic
              health records for patient management.
            </li>
            <li>
              Developed excellent communication and problem-solving skills,
              understanding and conveying complex medical information.
            </li>
          </ul>

          { /* Intensive Care */}
          <p className="text-gray-800 text-xl font-medium">Intensive Care</p>
          <ul className="list-disc list-outside ml-6 text-gray-700 space-y-2">
            <li>
              Monitored and analysed real-time patient data, utilising
              technology-driven insights to inform critical clinical
              interventions.
            </li>
            <li>
              Managed ventilators, infusion pumps, and other medical technology,
              ensuring precise calibration and troubleshooting errors.
            </li>
            <li>
              Assisted in clinical research and audits, collecting and
              interpreting data to improve patient outcomes.
            </li>
            <li>
              Worked closely with multidisciplinary teams, demonstrating strong
              teamwork, adaptability, and leadership under pressure.
            </li>
            <li>
              Maintained meticulous documentation and reporting, ensuring
              compliance with regulatory standards and data integrity.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}