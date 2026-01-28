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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>

        <p className="text-gray-600 max-w-3xl mb-8">
          {project.description}
        </p>

        {/* Image */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain bg-gray-50 p-6"
            priority
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 text-sm rounded-full bg-blue-50 text-blue-700 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>
          <ul className="space-y-2 text-gray-700">
            {project.features.map((feature) => (
              <li key={feature}>✅ {feature}</li>
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
            className="px-6 py-3 rounded-md border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition"
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
