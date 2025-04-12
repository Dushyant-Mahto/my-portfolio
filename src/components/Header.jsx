import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1A0B2E] text-white px-6 md:px-16 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-mono">Dushyant's Portfolio</div>

        <ul className="hidden md:flex gap-10 text-slate-100 text-lg">
          <li>
            <a href="#home" className="hover:text-purple-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-6 mt-4 text-lg text-slate-100">
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="hover:text-purple-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:text-purple-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-purple-400"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
