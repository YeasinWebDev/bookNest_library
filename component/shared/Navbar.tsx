"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-8 md:px-16 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm shadow-indigo-500/5">
      <div className="max-w-container-max w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-indigo-600 text-3xl">
            library_books
          </span>
          <span className="text-2xl font-bold tracking-tighter text-indigo-600">
            BookNest
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600 py-1" href="#">
            Home
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200" href="#">
            Books
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200" href="#">
            Categories
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200" href="#">
            About
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200" href="#">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-600 hover:bg-slate-50 p-2 rounded-full transition-colors">
            search
          </button>

          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-indigo-100 hidden md:block">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs9wTNqfggS6zRHeFBirzFKrIi1qBB59mJ-TjAwB1ZVBXUpbqV-1raQggutL5RclM7Ag6Y5ZK693kNh-lc56laZJz2vtxsabVSx0q_uLl-ZY7ivJVvWke5SckXNZTQnZ3jNbTCqZ0J6329ha2VGg8ChO8z8a6NZn7VkY8uM2DYG4iKRdQ799jb2DkZ0bmsBNPWmpHpJ1fh4nxSGJDv5JhxE-9ByddAX8EvhOWoKcLHUWJh1oLCj5pdXuRDhmGL1yzKOB0uxFUyNs2I"
              alt="User profile"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-slate-600 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-slate-600 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-slate-600 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 md:hidden">
          <nav className="flex flex-col px-8 py-4 gap-4">
            <a
              className="text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600 py-2"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200 py-2"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Books
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200 py-2"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200 py-2"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors duration-200 py-2"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}