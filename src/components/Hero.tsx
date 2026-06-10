export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Data Analyst • AI/ML Developer • Software Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
  ANIKET{" "}
  <span className="text-[#722F37]">
  KHADANGA
</span>
</h1>

        <p className="mt-8 max-w-4xl mx-auto text-2xl text-gray-400 leading-relaxed">
          B.Tech Computer Science graduate building machine learning
          solutions, analytics dashboards, computer vision applications,
          and full-stack software systems with real-world deployment
          experience.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-gray-700"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Aniketkhz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aniketkhz/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700"
          >
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 flex justify-center gap-16 text-center flex-wrap">
          <div>
            <h3 className="text-5xl font-bold">4</h3>
            <p className="text-gray-500">Featured Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="text-gray-500">Real Users Served</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">DRDO</h3>
            <p className="text-gray-500">Research Internship</p>
          </div>
        </div>
      </div>
    </section>
  );
}