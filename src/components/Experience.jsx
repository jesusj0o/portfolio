import { motion } from "framer-motion";
import { experiences } from "../constants";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiPython,
  SiSplunk,
  SiJira,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

const iconMap = {
  React: <FaReact size={20} color="#61DBFB" />,
  Tailwind: <SiTailwindcss size={20} color="#38BDF8" />,
  Bootstrap: <FaBootstrap size={20} color="#8e2bff" />,
  Figma: <SiFigma size={20} color="#2e2e2e" />,
  API: <BiCodeCurly size={20} color="#FFA62B" />,
  MySQL: <SiMysql size={20} color="#2e2e2e" />,
  JS: <SiJavascript size={20} color="#FFA62B" />,
  HTML: <SiHtml5 size={20} color="#E54C21" />,
  CSS: <SiCss3 size={20} color="#039BE5" />,
  PHP: <SiPhp size={20} color="#2d5dc4" />,
  Firebase: <SiFirebase size={20} color="#FFA62B" />,
  MongoDB: <SiMongodb size={20} color="#412F1F" />,
  Node: <FaNodeJs size={20} color="#539A49" />,
  Postman: <SiPostman size={10} color="#E54C21" />,
  Python: <SiPython size={10} color="#FFA62B" />,
  Splunk: <SiSplunk size={20} color="#2e2e2e" />,
  Jira: <SiJira size={20} color="#38BDF8" />,
  Git: <SiGit size={20} color="#E54C21" />,
  Github: <SiGithub size={20} color="#2e2e2e" />,
  Gitlab: <SiGitlab size={20} color="#E54C21" />,
};

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-white px-6 overflow-hidden"
    >
      {/* Imagen de fondo igual que en Hero */}
      <img
        src="/aside3.svg"
        alt="decorative wave"
        className="absolute left-0 top-5 h-full object-cover z-0 opacity-60 pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        <h1 className="text-5xl font-bold text-[#FFA62B] mb-16 text-center">
          Professional Work <span className="text-[#16697A]">Experience.</span>
        </h1>

        <div className="relative before:absolute before:top-0 before:left-1/2 before:-ml-[1px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#FFA62B] before:to-[#16697A]">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`mb-20 flex flex-col md:flex-row relative`}
                variants={fadeVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <div
                  className={`md:w-1/2 px-6 py-4 rounded-lg shadow-md bg-white border border-gray-100 z-10 relative ${
                    isLeft
                      ? "md:mr-auto md:ml-0 md:translate-x-[-40px]"
                      : "md:ml-auto md:mr-0 md:translate-x-[40px]"
                  }`}
                >
                  {/* Logo circle */}
                  <div
                    className={`absolute w-13 h-13 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center top-[-20px] ${
                      isLeft ? "right-[-20px]" : "left-[-20px]"
                    }`}
                  >
                    <img
                      src={exp.logo}
                      className="w-6 h-6 object-contain"
                      alt={`${exp.company} logo`}
                    />
                  </div>

                  <p className="text-sm text-gray-500 ml-2 mb-1">{exp.date}</p>
                  <h3 className="text-xl font-semibold text-[#16697A]">
                    {exp.title} –{" "}
                    <span className="text-[#FFA62B]">{exp.company}</span>
                  </h3>
                  <p className="text-gray-700 mt-2 ">{exp.description}</p>

                  {/* Tech stack icons */}
                  <div
                    className={`flex flex-wrap gap-3 mt-4 
                    "justify-start text-left"`}
                  >
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 text-sm text-gray-800"
                        title={tech}
                      >
                        {iconMap[tech] || (
                          <span className="text-gray-400">?</span>
                        )}{" "}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
                {/* Dot central */}
                <span className="absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 bg-[#FFA62B] border-2 border-white rounded-full z-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
