// import ProjectCard from "@/components/ProjectCard";
import ProjectCard from "../../components/ProjectCard";


const projects = [
  {
    title: "ShopNow E-Commerce",
    description:
      "A full-stack MERN e-commerce application with authentication, cart, and admin panel.",
    image: "/images/projects/shopnow.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    live: "https://shopnowf.vercel.app",
    github: "https://github.com/furmanAli912/fyp-project",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/images/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/furmanAli912/my-portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="text-gray-600 mt-3">
            Some of the projects I have built using modern web technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
