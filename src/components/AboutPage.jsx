"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
            web developer with a strong focus on building clean, responsive, and
            user-friendly web applications using modern frontend technologies
            such as React and Next.js.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I’m passionate about creating seamless digital experiences that are
            both visually appealing and functionally solid. I constantly strive
            to stay up to date with the latest trends in frontend and MERN stack
            development to improve performance, accessibility, and usability.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I’m particularly drawn to problem-solving and logic-based challenges.
            This interest extends beyond web development into competitive
            programming, where I enjoy breaking down complex problems and
            designing efficient solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Outside of coding, I enjoy learning, writing, and exploring new
            ideas. I value productivity, time management, and teamwork, and I’ve
            gained leadership experience by collaborating with others and taking
            initiative on projects.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 text-center my-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">46+</h3>
              <p className="text-sm text-gray-600">Repositories</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">3+</h3>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Let’s Work Together
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              View Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
