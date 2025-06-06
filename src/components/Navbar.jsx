import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);



  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-20">
        {/* Logo */}
        <a href="#top" className="z-50">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 font-semibold text-[#16697A] text-[16px]">
          {links.slice(0, 3).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-[#FFA62B] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-10 hover:text-[#FFA62B] transition-colors"
          >
            Contact me.
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-[#16697A] text-2xl z-50"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-40">
            <ul className="flex flex-col space-y-6 p-6 font-semibold text-[#16697A] text-lg">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="hover:text-[#FFA62B] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
