import { FaCode } from "react-icons/fa";

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
          <div
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "var(--primary)" }} // #FFA62B
          >
            <h1 className="relative inline-block overflow-hidden">
              Shaping{" "}
              <span className="relative inline-block">
                <span
                  className="inline-flex items-center gap-2"
                  style={{ color: "var(--secondary)" }} // #16697A
                >
                  Code <FaCode />
                </span>
              </span>
            </h1>
            <h1 style={{ color: "var(--primary)" }}>into real projects</h1>{" "}
            {/* #2E2E2E */}
            <h1 style={{ color: "var(--primary)" }}>
              that deliver Results.
            </h1>{" "}
            {/* #2E2E2E */}
          </div>

          <p
            className="flex mb-5 text-xl"
            style={{ color: "var(--text-dark)" }}
          >
            Hi, I'm Jesús Jo, a developer with passion for code.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="/resume.pdf"
              download
              className="font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              style={{
                backgroundColor: "var(--secondary)", // #16697A
                color: "white",
              }}
              onMouseEnter={
                (e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--primary-dark)") // #125866
              }
              onMouseLeave={
                (e) =>
                  (e.currentTarget.style.backgroundColor = "var(--secondary)") // #16697A
              }
            >
              Get my resume.
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10">
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
