export default function Contact() {
  return (
    <section
  id="contact"
  className="py-32 px-6 max-w-6xl mx-auto"
>

      <div className="border border-gray-800 rounded-3xl p-12 text-center">

        <p className="uppercase tracking-widest text-gray-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Open to Opportunities
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          I'm actively seeking opportunities in Data Analytics,
Artificial Intelligence, Machine Learning, and Software
Development. Whether it's an internship, full-time role,
or a challenging project, I'd be glad to connect and discuss.
        </p>

        <a
          href="mailto:aniketkhadanga2@gmail.com"
          className="inline-block px-8 py-4 rounded-xl bg-white text-black font-semibold mb-12"
        >
          Get In Touch
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400">

          <a
            href="mailto:aniketkhadanga2@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-white transition"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  );
}