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
      "A modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
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

/* ================= STATIC PARAMS ================= */
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

/* ================= PAGE ================= */
export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;   // ✅ REQUIRED
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Project not found</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-600">
          {project.title}
        </h1>

        <p className="text-gray-600 max-w-3xl mb-10">
          {project.description}
        </p>

        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-14 bg-gray-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6 pointer-events-none"
            priority
          />
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-5 text-blue-600">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 text-sm rounded-full bg-blue-50 text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-5 text-blue-600">Key Features</h2>
          <ul className="space-y-2 text-stone-950">
            {project.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            href={project.live}
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded"
          >
            Live Demo
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="px-6 py-3 border rounded"
          >
            View Code
          </Link>

          <Link href="/projects">← Back to Projects</Link>
        </div>

      </div>
    </section>
  );
}
