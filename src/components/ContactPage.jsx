"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setSuccess("Message sent successfully 🚀 I will contact you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            I’m currently working on{" "}
            <span className="font-semibold text-gray-900">
              Frontend and MERN Stack projects
            </span>
            , helping startups and businesses build modern web applications.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Want a{" "}
            <span className="font-semibold text-gray-900">
              professional portfolio, business website, or custom web project
            </span>
            ? Let’s talk.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Portfolio Websites</li>
            <li>✅ Frontend UI (React / Next.js)</li>
            <li>✅ MERN Stack Applications</li>
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

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm  font-bold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-600 text-black"
              />
            </div>

            <div>
              <label className="block text-sm  font-bold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border  text-black border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm  font-bold text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-md border  text-black border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center mt-2">
                {success}
              </p>
            )}
            {error && (
              <p className="text-red-600 text-sm text-center mt-2">
                {error}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
