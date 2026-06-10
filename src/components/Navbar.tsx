export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#EFDFBB]/90 border-b border-[#D6C5A3]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="font-bold tracking-wider text-[#722F37]">
  ANIKET
</h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#8B5E64]">

          <a href="#projects" className="hover:text-[#722F37] transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-[#722F37] transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-[#722F37] transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-[#722F37] transition">
            Contact
          </a>

        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 rounded-lg border border-[#722F37] text-[#722F37] text-sm hover:bg-[#722F37] hover:text-[#EFDFBB] transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}