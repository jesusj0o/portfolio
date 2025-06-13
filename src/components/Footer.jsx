import { FaInstagram, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { PiCoffeeFill, PiThreadsLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="bg-[#489FB5] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png" // Reemplaza con tu ruta real
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-semibold"></span>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.instagram.com/gsus_jo/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.threads.com/@gsus_jo?xmt=AQF0Vs2wzqUA4e3M1ge-eVjrgPfQx8n0zbYJ8VSdu7GvU7k"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="Threads"
            >
              <PiThreadsLogo />
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-jo-255721210/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/jesusj0o"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://buymeacoffee.com/jesusjo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="Buy Me a Coffee"
            >
              <PiCoffeeFill />
            </a>
               <a
              href="https://medium.com/@jesusjo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA62B] transition"
              aria-label="Medium"
            >
              <FaMedium />
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center text-sm text-white/80 mt-6">
          © {new Date().getFullYear()} Jesus Jo. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
