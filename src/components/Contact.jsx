import React from "react";

const Contact = () => {
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
        <h1 className="text-5xl font-bold text-[#FFA62B] mb-8">
          Let's <span className="text-[#16697A]">Connect.</span>
        </h1>

        <p className="text-gray-800 text-lg mb-10">
          Have a project in mind, a job offer? Please let me know! 
        </p>

        <form
          action="https://formspree.io/f/your-form-id" // <-- reemplaza con tu ID real o backend handler
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#16697A]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFA62B]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#16697A]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFA62B]"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#16697A]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFA62B] resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#16697A] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#125866] transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
