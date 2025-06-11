import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-8 space-y-10">
      <motion.header
        className="text-center space-y-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold drop-shadow-[0_5px_10px_rgba(255,255,255,0.25)]"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Shridhar Rangrao Patil
        </motion.h1>
        <p className="text-lg">Backend Developer | Aspiring Salesforce Developer</p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Summary</h2>
        <p>
          Based in Kolhapur, MH, IN, I have 1 year of PHP backend development experience and
          am transitioning into Salesforce development. Skilled in Apex, Visualforce, LWC,
          and backend technologies with a passion for building scalable, efficient systems.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Experience</h2>
        <div className="space-y-4">
          {["Tribeappsoft", "CinchIT Solutions", "Asesa Soft"].map((company, i) => (
            <div key={i} className="transform hover:scale-105 transition-transform duration-300 shadow-2xl bg-white/5 p-4 rounded-xl">
              <strong>{company}</strong> {i === 0 ? "(Aug 2024 - Jan 2025) - Jr. Software Developer" : i === 1 ? "(May 2024 - July 2024) - Technical Consultant" : "(Jan 2024 - Apr 2024) - Web Developer Intern"}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Projects</h2>
        <ul className="space-y-4">
          {["WIA - Women in Agriculture", "Dagadart", "WhatsApp Integration APIs", "Mahaxmi Glass"].map((project, i) => (
            <li key={i}>
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-lg p-4 rounded-xl">
                <strong>{project}</strong>
                <p>
                  {i === 0 && "(Freelance) - Full Stack Developer - Developed a service platform for women in agriculture using MySQL, VS Code."}
                  {i === 1 && "(AsesaSoft) - Backend Developer - Built backend for curated stone product listings. Tools: MySQL, Postman."}
                  {i === 2 && "Automated customer interaction, real-time messaging, and notification system."}
                  {i === 3 && "Automated sales reporting, improved client data management and ops."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li>MCA - Shivaji University (2022-2024) - 7.05 CGPA</li>
          <li>BCA - Shivaji University (2019-2022) - 7.7 CGPA</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Skills</h2>
        <p className="leading-7">
          <strong>Salesforce:</strong> Apex, Visualforce, LWC, SOQL, SOSL, CPQ, Data Loader<br />
          <strong>Backend:</strong> PHP, Laravel, Java, JavaScript, REST APIs<br />
          <strong>Database:</strong> MySQL, MSSQL<br />
          <strong>Tools:</strong> Git, Postman, VS Code, Firebase, Zoho, Agile, Scrum
        </p>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold border-b border-white mb-4">Contact Me</h2>
        <form
          action="https://formspree.io/f/xnqeykkj"
          method="POST"
          className="grid gap-4 max-w-md backdrop-blur-sm bg-white/5 p-4 rounded-xl shadow-inner border border-gray-700"
        >
          <input name="name" placeholder="Your Name" required className="bg-gray-800 text-white border-none focus:ring-2 focus:ring-purple-500 p-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="bg-gray-800 text-white border-none focus:ring-2 focus:ring-purple-500 p-2 rounded" />
          <textarea name="message" placeholder="Your Message" required className="bg-gray-800 text-white border-none focus:ring-2 focus:ring-purple-500 p-2 rounded" />
          <button type="submit" className="flex items-center gap-2 hover:scale-105 transition-transform bg-purple-600 px-4 py-2 rounded">
            <Mail size={16} /> Send Message
          </button>
        </form>
      </motion.section>

      <motion.footer
        className="text-center text-sm text-gray-400 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; 2025 Shridhar Rangrao Patil. All rights reserved.
      </motion.footer>
    </div>
  );
}