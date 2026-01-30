"use client";

import { motion } from "framer-motion";

export default function SkillCard({ icon: Icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
    >
      <Icon className="w-10 h-10 text-blue-600 mb-4" />

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-600">
        {items.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
