"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let’s Build Something Great 🚀
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m currently working on <span className="font-semibold text-gray-900">
              Frontend and MERN Stack projects</span>, helping individuals,
            startups, and businesses build modern, responsive, and scalable
            web applications.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            If you want to build a <span className="font-semibold text-gray-900">
              professional portfolio, business website, or a custom web project</span>,
            feel free to contact me. I’d love to discuss your idea and turn it
            into reality.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Portfolio Websites</li>
            <li>✅ Frontend UI (React / Next.js)</li>
            <li>✅ MERN Stack Web Applications</li>
            <li>✅ Clean UI & Performance Optimization</li>
          </ul>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Me
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
