"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl font-bold mb-4 text-[#722F37]">
        Featured Projects
      </h2>

      <p className="text-[#6B7280] mb-16 max-w-3xl text-lg">
        Selected projects across data analytics, machine learning,
        artificial intelligence, and full-stack development.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="space-y-4">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onMouseEnter={() => setActiveProject(project)}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 ${
                activeProject.title === project.title
                  ? "border-[#722F37] bg-[#722F37]/5"
                  : "border-[#b8a98a] hover:border-[#722F37]"
              }`}
            >
              <div className="flex items-start gap-4">

                {activeProject.title === project.title ? (
                  <div className="w-2 h-2 rounded-full bg-[#722F37] mt-3" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-transparent mt-3" />
                )}

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#6B7280] mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-semibold text-lg leading-snug text-[#722F37]">
                    {project.title}
                  </h3>
                </div>

              </div>
            </button>
          ))}
        </div>

        <div
          key={activeProject.title}
          className="lg:col-span-2 border border-[#b8a98a] rounded-3xl p-10 transition-all duration-300"
        >

          {activeProject.image && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-[#b8a98a]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={1600}
                height={900}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <p className="text-sm uppercase tracking-widest text-[#6B7280] mb-4">
            Selected Project
          </p>

          <h3 className="text-4xl font-bold mb-6 text-[#722F37]">
            {activeProject.title}
          </h3>

          <p className="text-[#6B7280] text-lg leading-relaxed mb-10">
            {activeProject.description}
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">

            {activeProject.stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-4xl font-bold text-[#722F37]">
                  {stat.value}
                </p>

                <p className="text-[#6B7280] text-sm">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

          <div className="flex flex-wrap gap-3 mb-10">

            {activeProject.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-[#b8a98a] text-[#722F37]"
              >
                {item}
              </span>
            ))}

          </div>

          <a
            href={activeProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-[#b8a98a] text-[#722F37] hover:border-[#722F37] transition-all duration-300"
          >
            View Github →
          </a>

        </div>

      </div>
    </section>
  );
}