// src/components/Projects.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaReact, FaJs, FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiThreedotjs,
  SiOpenai,
  SiBlender,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { projects } from "../constants";

const iconMap = {
  React: <FaReact size={22} color="#61DBFB" />,
  Tailwind: <SiTailwindcss size={22} color="#38BDF8" />,
  Framer: <SiFramer size={22} color="#0055FF" />,
  Vite: <SiVite size={22} color="#646CFF" />,
  JS: <FaJs size={22} color="#F7DF1E" />,
  API: <BiCodeCurly size={22} color="#FFA62B" />,
  Threejs: <SiThreedotjs size={22} color="#2e2e2e" />,
  ChatGPT: <SiOpenai size={22} color="#2e2e2e" />,
  Blender: <SiBlender size={22} color="#e98b08" />,
  Bootstrap: <FaBootstrap size={22} color="#8e2bff" />,
  Firebase: <SiFirebase size={22} color="#FFA62B" />,
  Figma: <SiFigma size={22} color="#2e2e2e" />,
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#projects-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 px-4 overflow-hidden"
      id="projects"
    >
      <img
        src="/aside2.svg"
        alt="decorative wave"
        className="absolute right-0 top-0 h-full object-cover z-0 opacity-60 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1
          id="projects-title"
          className="text-5xl font-bold text-[#FFA62B] text-center mb-12"
        >
          Some things I've <span className="text-[#16697A]">Worked</span> on
        </h1>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          autoHeight={true}
          className="pb-10 relative"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="px-4">
              <div className="bg-gray-50 p-8 mb-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[500px] flex flex-col justify-between">
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-md mb-6"
                  />
                  <h3 className="text-3xl font-semibold text-[#16697A] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 text-sm text-gray-800"
                      >
                        {iconMap[tech]} <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#16697A] hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Flechas personalizadas, ocultas en móvil */}
          <button
            className="custom-swiper-prev absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 shadow-lg cursor-pointer transition opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#16697A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="custom-swiper-next absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 shadow-lg cursor-pointer transition opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#16697A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
