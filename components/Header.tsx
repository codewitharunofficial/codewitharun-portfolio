"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // optional icon library, or use any SVG

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-blue-900 bg-opacity-90 shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-9xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-2xl font-bold font-serif">{scrolled ? "Ravi" : `"Ravi"`}</h1>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-white">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 hover:underline underline-offset-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 hover:underline underline-offset-2"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 hover:underline underline-offset-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 hover:underline underline-offset-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#qualifications"
                  className="hover:text-blue-400 hover:underline underline-offset-2"
                >
                  Education
                </a>
              </li>

            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-blue-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4 mb-10" />

        <ul className="flex flex-col space-y-6 px-6 text-lg">
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="hover:text-blue-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={toggleMenu}
              className="hover:text-blue-400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#qualifications"
              onClick={toggleMenu}
              className="hover:text-blue-400"
            >
              Education
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
