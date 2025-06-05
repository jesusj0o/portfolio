import { FaCode } from 'react-icons/fa';

const Hero = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white px-8 overflow-hidden pt-20">
      <img
        src="/aside3.svg"
        alt="decorative wave"
        className="absolute left-0 top-5 h-full object-cover z-0 opacity-60 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFA62B] leading-tight mb-6">
            <h1 className="relative inline-block overflow-hidden">
              Shaping{" "}
              <span className="relative inline-block">
                <span className="text-[#16697A] inline-flex items-center gap-2">
                  Code <FaCode/>
                </span>
              </span>
            </h1>
            <h1>into real projects</h1>
            <h1>that deliver Results.</h1>
          </div>

          <p className="text-gray-800 flex mb-5 text-xl">
            Hi, I'm Jesús Jo, a developer with passion for code.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="/resume.pdf"
              className="bg-[#16697A] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#125866] transition-all"
            >
              Get my resume.
            </a>
          </div>
        </div>

        <div className="mt-10  md:mt-0 md:ml-10">
          <img
            src="/Nerd.png"
            alt="hero illustration"
            className="max-w-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
