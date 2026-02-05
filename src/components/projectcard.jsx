"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-52 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">
          <span className="text-blue-600">{project.title}</span>
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100/60 text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* View Details – Primary */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg
              bg-gradient-to-r from-blue-600 to-blue-700
              hover:from-blue-700 hover:to-blue-800
              shadow-md hover:shadow-lg transition-all"
          >
            View Details
            <ArrowRight size={16} />
          </Link>

          {/* Live Demo – Secondary */}
          <Link
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg
              border border-blue-200 text-blue-600
              hover:bg-blue-50 transition"
          >
            <ExternalLink size={16} />
            Live Demo
          </Link>

          {/* GitHub – Ghost */}
          <Link
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700
              hover:text-black transition"
          >
            <Github size={18} />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
