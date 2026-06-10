export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="border border-[#b8a98a] rounded-[40px] p-16 text-center">

        <p className="uppercase tracking-[0.25em] text-[#6B7280] text-sm mb-6">
          Contact
        </p>

        <h2 className="text-6xl font-bold text-[#722F37] mb-8">
          Open to Opportunities
        </h2>

        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-[#6B7280] mb-12">
          I'm actively seeking opportunities in Data Analytics,
          Artificial Intelligence, Machine Learning, and Software
          Development. Whether it's an internship, full-time role,
          or a challenging project, I'd be glad to connect and discuss.
        </p>

        <a
          href="mailto:aniketkhadanga2@gmail.com"
          className="inline-block px-10 py-5 rounded-2xl bg-[#722F37] text-[#EFDFBB] font-semibold text-lg hover:opacity-90 transition mb-16"
        >
          Get In Touch
        </a>

        <div className="flex flex-wrap justify-center gap-10 text-lg">

          <a
            href="mailto:aniketkhadanga2@gmail.com"
            className="text-[#6B7280] hover:text-[#722F37] transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#722F37] transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#722F37] transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="text-[#6B7280] hover:text-[#722F37] transition"
          >
            Resume
          </a>

        </div>
      </div>
    </section>
  );
}