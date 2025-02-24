"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-white text-2xl font-bold">Ravi</h1>
        <nav>
          <ul className="flex md:space-x-6 space-x-4 text-white">
            <li className="hover:underline underline-offset-2">
              <a href="#hero" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li className="hover:underline underline-offset-2">
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li className="hover:underline underline-offset-2">
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li className="hover:underline underline-offset-2">
              <a href="#qualifications" className="hover:text-blue-400">
                Qualifications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
