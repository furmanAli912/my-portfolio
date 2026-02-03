"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-52 bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((item) => (
            <span key={item} className="text-xs bg-blue-100 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={`/projects/${project.slug}`}>View</Link>
          <Link href={project.github} target="_blank">GitHub</Link>
        </div>
      </div>
    </div>
  );
}
