import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";

import Button from "./Button";

const Navbar = () => {
  
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white`}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 h-16 flex items-center">
        {/* Logo a la izquierda */}
        <a href="#top" className="absolute left-0">
          <img
            src="/logo.png"
            alt="jesusjo logo"
            className="h-13 w-auto object-contain"
          />
        </a>

        {/* Menú centrado */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-[#16697A] font-semibold text-[16px]">
          <li>
            <a
              href="#projects"
              className="hover:text-[#FFA62B] transition-colors"
            >
              Projects.
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-[#FFA62B] transition-colors"
            >
              Experience.
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-[#FFA62B] transition-colors"
            >
              Skills.
            </a>
          </li>
        </ul>

        {/* Botón a la derecha */}
        <div className="absolute right-0">
          <Button content={"Contact me."}/>
          {/* <a
            href="#contact"
            className="bg-[#FFA62B] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#e59422] transition-colors"
          >
            Contact me.
          </a> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
