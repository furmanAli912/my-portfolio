"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Small intro */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-medium text-blue-600 mb-4 block"
                    >
                        Hi, my name is
                    </motion.span>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                    >
                        Furman Ali
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-3xl md:text-5xl font-semibold text-gray-700 mt-2"
                    >
                        MERN Stack Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed"
                    >
                        I build modern, responsive, and scalable web applications using
                        MongoDB, Express.js, React, and Node.js. Passionate about clean UI,
                        performance, and real-world problem solving.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55 }}
                        className="mt-10 flex gap-4"
                    >
                        <Link
                            href="/projects"
                            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile"
                            width={315}
                            height={200}
                        />

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
