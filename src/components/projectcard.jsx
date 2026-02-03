"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-52 bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-4 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Details
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            Live Demo →
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="text-gray-800 font-semibold"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
