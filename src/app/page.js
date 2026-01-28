import Hero from "@/components/Hero";

export const metadata = {
  title: "Furman Ali | Frontend & MERN Stack Developer",
  description:
    "Furman Ali is a Frontend & MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, responsive, and scalable web applications.",
  keywords: [
    "Furman Ali",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Freelance Web Developer"
  ],
  authors: [{ name: "Furman Ali" }],
  creator: "Furman Ali",
  openGraph: {
    title: "Furman Ali | Frontend & MERN Stack Developer",
    description:
      "Frontend & MERN Stack Developer building modern, responsive, and scalable web applications.",
    url: "https://your-domain.com",
    siteName: "Furman Ali Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 600,
        alt: "Furman Ali - Frontend & MERN Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="m-4">
      <Hero />
    </main>
  );
}
