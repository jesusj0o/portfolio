// src/components/Skills.jsx
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiVite } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
  { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} color="#38BDF8" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={30} color="#8e2bff" /> },
  { name: "Figma", icon: <SiFigma size={30} color="#2e2e2e" /> },
  { name: "Vite", icon: <SiVite size={30} color="#646CFF" /> },
  { name: "Git", icon: <FaGitAlt size={30} color="#F1502F" /> },
  { name: "GitHub", icon: <FaGithub size={30} color="#000000" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-5xl font-bold mb-12"
          style={{ color: "var(--primary)" }}
        >
          My <span style={{ color: "var(--secondary)" }}>Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
            >
              <div className="mb-3">{skill.icon}</div>
              <span
                className="font-medium"
                style={{ color: "var(--text-dark)" }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
