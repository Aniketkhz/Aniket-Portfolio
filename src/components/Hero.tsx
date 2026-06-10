export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="relative z-10 max-w-5xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-[#6B7280]">
          Data Analyst • AI/ML Developer • Software Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-[#722F37]">
          ANIKET{" "}
          <span className="text-[#5A1E26]">
            KHADANGA
          </span>
        </h1>

        <p className="mt-10 max-w-4xl mx-auto text-xl md:text-2xl text-[#6B7280] leading-relaxed">
          B.Tech Computer Science graduate building machine learning
          solutions, analytics dashboards, computer vision applications,
          and full-stack software systems with real-world deployment
          experience.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#722F37] text-[#EFDFBB] font-medium hover:opacity-90 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-[#b8a98a] text-[#722F37] hover:border-[#722F37] transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-[#b8a98a] text-[#722F37] hover:border-[#722F37] transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aniketkhz/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-[#b8a98a] text-[#722F37] hover:border-[#722F37] transition"
          >
            LinkedIn
          </a>

        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border border-[#b8a98a] rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-[#722F37]">
              4
            </h3>
            <p className="text-[#6B7280] mt-3">
              Featured Projects
            </p>
          </div>

          <div className="border border-[#b8a98a] rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-[#722F37]">
              50+
            </h3>
            <p className="text-[#6B7280] mt-3">
              Real Users Served
            </p>
          </div>

          <div className="border border-[#b8a98a] rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-[#722F37]">
              DRDO
            </h3>
            <p className="text-[#6B7280] mt-3">
              Research Internship
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}