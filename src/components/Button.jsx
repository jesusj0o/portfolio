import { useEffect, useRef } from "react";
import gsap from "gsap";

const Button = ( {content} ) => {
  const btnRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const fill = fillRef.current;

    const handleEnter = () => {
      gsap.to(fill, {
        width: "100%",
        duration: 0.3,
        ease: "linear",
      });
    };

    const handleLeave = () => {
      gsap.to(fill, {
        width: "0%",
        duration: 0.3,
        ease: "linear",
      });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a
      href="#contact"
      ref={btnRef}
      className="relative inline-block px-5 py-2 font-semibold text-white overflow-hidden rounded-md bg-[#FFA62B] group"
    >
      {/* Animated fill layer */}
      <span
        ref={fillRef}
        className="absolute left-0 top-0 h-full w-0 bg-[#16697A] z-0"
      ></span>

      {/* Text on top */}
      <span className="relative z-10">{content}</span>
    </a>
  );
};

export default Button;
