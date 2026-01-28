"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* ===== ABOUT SECTION ===== */}
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
                            MERN Stack Developer who enjoys building scalable, modern, and
                            user-friendly web applications.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            I have completed my <span className="font-semibold text-gray-900">
                                BSCS (Bachelor of Science in Computer Science)</span> and I am now
                            a graduate, actively preparing for professional opportunities in
                            frontend and MERN stack development.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            My core focus is on clean UI, performance, and real-world problem
                            solving using React, Next.js, Node.js, MongoDB, and REST APIs.
                        </p>

                        {/* SOCIAL BUTTONS */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <Link
                                href="https://www.linkedin.com/in/furmanali912/"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                LinkedIn
                            </Link>

                            <Link
                                href="https://github.com/furmanAli912"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                            >
                                GitHub
                            </Link>

                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-800 font-medium hover:border-blue-600 hover:text-blue-600 transition"
                            >
                                Resume
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SKILLS SECTION ===== */}
            <section className="w-full bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                            Skills & Proficiency
                        </h3>

                        <div className="space-y-6">
                            {[
                                { name: "HTML", level: 90 },
                                { name: "CSS", level: 80 },
                                { name: "JavaScript", level: 70 },
                                { name: "Tailwind CSS", level: 70 },
                                { name: "React", level: 60 },
                                { name: "Node.js", level: 60 },
                                { name: "Express.js", level: 60 },
                            ].map((skill) => (
                                <div key={skill.name}>
                                    {/* Label */}
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-800 font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.8 }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    );
}
