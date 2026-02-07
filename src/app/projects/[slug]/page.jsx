export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

/* ================= PROJECT DATA ================= */
const projects = {
  shopnow: {
    slug: "shopnow",
    title: "ShopNow – MERN E-Commerce Platform",
    description:
      "ShopNow is a full-stack MERN e-commerce application featuring authentication, product management, cart, checkout, and admin dashboard.",
    image: "/images/projects/shopnow.png",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "User Authentication & Authorization",
      "Admin Dashboard for Product Management",
      "Add to Cart & Checkout System",
      "Responsive UI for all devices",
      "REST API Integration",
    ],
    live: "https://shopnowf.vercel.app",
    github: "https://github.com/furmanAli912/fyp-project",
  },

  portfolio: {
    slug: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion, optimized for performance and SEO.",
    image: "/images/projects/portfolio.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "SEO Optimized Pages",
      "Responsive Design",
      "Smooth Animations",
      "Project Detail Pages",
    ],
    live: "#",
    github: "https://github.com/furmanAli912/my-portfolio",
  },
};

/* ================= PAGE ================= */
export default async function ProjectDetailPage({ params }) {
  // ✅ REQUIRED in Next.js 15/16
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600 text-lg">
          Project not found: <strong>{slug}</strong>
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          <span className="text-blue-600">{project.title}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mb-10">
          {project.description}
        </p>

        {/* Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-14 bg-gray-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6 pointer-events-none"
            priority
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-blue-600 mb-5">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-50 text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-blue-600 mb-5">
            Key Features
          </h2>
          <ul className="space-y-3 text-gray-700">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={project.live}
            target="_blank"
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Live Demo
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 transition"
          >
            View Code
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 text-gray-600 hover:text-blue-600 transition"
          >
            ← Back to Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
