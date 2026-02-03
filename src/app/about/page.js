import AboutPage from "@/componentsTemps/AboutPage";

export const metadata = {
  title: "About | Furman Ali – Frontend & MERN Stack Developer",
  description:
    "About Furman Ali, a BSCS graduate and Frontend & MERN Stack Developer skilled in React, Next.js, Node.js, MongoDB, and modern web technologies.",
  keywords: [
    "Furman Ali",
    "About Furman Ali",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "BSCS Graduate",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Furman Ali" }],
  openGraph: {
    title: "About Furman Ali – Frontend & MERN Stack Developer",
    description:
      "BSCS graduate specializing in frontend and MERN stack development. Experienced in building modern, scalable web applications.",
    url: "https://your-domain.com/about",
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
    type: "profile",
  },
};

export default function Page() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
