import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact | Furman Ali – Frontend & MERN Stack Developer",
  description:
    "Contact Furman Ali, a Frontend & MERN Stack Developer. Get in touch to build a portfolio website, business site, or custom web application using React, Next.js, and MERN stack.",
  keywords: [
    "Contact Furman Ali",
    "Hire Frontend Developer",
    "Hire MERN Stack Developer",
    "React Developer Contact",
    "Next.js Developer",
    "Web Developer Portfolio Contact",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Furman Ali" }],
  openGraph: {
    title: "Contact Furman Ali – Frontend & MERN Stack Developer",
    description:
      "Let’s build something great. Contact Furman Ali for frontend, React, Next.js, and MERN stack web development projects.",
    url: "https://your-domain.com/contact",
    siteName: "Furman Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
