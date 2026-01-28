"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Furman Ali
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              MERN Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/furmanAli912"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/furmanali912/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="hover:text-white transition"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* BOTTOM */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Furman Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
