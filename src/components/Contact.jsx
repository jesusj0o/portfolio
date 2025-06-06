import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm("service_846ud7e", "template_oi7k8a8", form.current, "yWF_gvqP59FiH").then(
      () => {
        setSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSent(false), 4000);
      },
      (error) => {
        console.error("Error:", error);
        setLoading(false);
      }
    );
  };

  return (
 <section
  id="contact"
  className="relative w-full bg-white py-20 px-8 overflow-hidden"
>
  <img
    src="/aside.svg"
    alt="decorative wave"
    className="absolute left-0 top-0 h-full object-cover z-0 opacity-60 pointer-events-none"
  />

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1
      className="text-5xl font-bold mb-8"
      style={{ color: "var(--primary)" }}
    >
      Let's{" "}
      <span style={{ color: "var(--secondary)" }}>
        Connect.
      </span>
    </h1>

    <p className="text-lg mb-10" style={{ color: "var(--text-dark)" }}>
      Have a project in mind, a job offer? Please let me know!
    </p>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium"
          style={{ color: "var(--secondary)" }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFA62B]"
          // NO cambio colores ni outline ni focus
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium"
          style={{ color: "var(--secondary)" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFA62B]"
          // NO cambio colores ni outline ni focus
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium"
          style={{ color: "var(--secondary)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 resize-none focus:ring-[#FFA62B]"
          // NO cambio colores ni outline ni focus
        ></textarea>
      </div>

      <div className="md:col-span-2 text-center mt-4">
        <button
          type="submit"
          className="bg-[#16697A] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#125866] transition-all"
          disabled={loading}
          style={{ backgroundColor: "var(--secondary)" }} // solo reemplazo bg fijo
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && (
          <div className="md:col-span-2 text-center mt-6">
            <div
              className="inline-block border text-sm px-6 py-4 rounded-xl shadow-lg font-medium"
              style={{
                backgroundColor: "var(--accent-light)",
                borderColor: "var(--accent)",
                color: "var(--secondary)",
              }}
            >
              🎉 Your message has been sent successfully. Thank you!
            </div>
          </div>
        )}
      </div>
    </form>
  </div>
</section>

  );
};

export default Contact;
