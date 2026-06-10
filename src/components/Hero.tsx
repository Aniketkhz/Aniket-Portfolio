export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
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
      <div className="relative z-10 max-w-5xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Data Analyst • AI Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          ANIKET KHADANGA
        </h1>

        <p className="mt-8 max-w-4xl mx-auto text-2xl text-gray-400 leading-relaxed">
  Built AI systems with 93% detection accuracy, developed predictive
  analytics solutions, and engineered data platforms used by real users.
</p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

  <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-xl bg-white text-black font-medium"
>
  Resume
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

<div className="mt-24 flex justify-center gap-16 text-center">
  <div>
    <h3 className="text-5xl font-bold">5</h3>
    <p className="text-gray-500">Production-Grade Projects</p>
  </div>

  <div>
    <h3 className="text-5xl font-bold">93%</h3>
    <p className="text-gray-500">AI Accuracy</p>
  </div>

  <div>
    <h3 className="text-5xl font-bold">DRDO</h3>
    <p className="text-gray-500">Research Internship Experience</p>
  </div>
</div>


</div>

      </div>
    </section>
  );
}