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
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Project Detail Page */}
          <Link
            href={`/projects/${project.slug}`}
            className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Details
          </Link>

          <Link
            href={project.live}
            target="_blank"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Live Demo →
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="text-sm font-semibold text-gray-800 hover:text-black"
          >
            GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
  