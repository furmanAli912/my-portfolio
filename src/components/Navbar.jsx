"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          Furman<span className="text-blue-600">Ali</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
