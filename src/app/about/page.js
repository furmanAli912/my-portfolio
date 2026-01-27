"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Furman Ali"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I’m <span className="font-semibold text-gray-900">Furman Ali</span>, a
            passionate MERN Stack Developer focused on building scalable,
            user-friendly, and performance-optimized web applications.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I enjoy turning complex problems into simple, beautiful interfaces.
            My experience includes React, Next.js, Node.js, MongoDB, and REST
            APIs. I’m always eager to learn new technologies and improve my
            skills.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-blue-50 text-blue-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
