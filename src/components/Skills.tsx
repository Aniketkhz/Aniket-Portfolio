export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-6xl font-bold text-[#722F37] mb-4">
        Skills & Technologies
      </h2>

      <p className="text-[#6B7280] text-lg mb-16 max-w-4xl">
        Technologies, tools, and frameworks used across data analytics,
        machine learning, AI engineering, and full-stack development.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-[#b8a98a] rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-[#722F37] mb-8">
            Programming
          </h3>

          <div className="flex flex-wrap gap-4">
            {["Python", "JavaScript", "SQL", "Java"].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-[#b8a98a] rounded-full text-[#722F37]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#b8a98a] rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-[#722F37] mb-8">
            Data Analytics
          </h3>

          <div className="flex flex-wrap gap-4">
            {["Pandas", "NumPy", "Excel", "Tableau", "Power BI", "Streamlit"].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-[#b8a98a] rounded-full text-[#722F37]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#b8a98a] rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-[#722F37] mb-8">
            AI & Machine Learning
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Scikit-Learn",
              "YOLOv8",
              "XGBoost",
              "OpenCV",
              "Predictive Analytics",
              "Computer Vision",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-[#b8a98a] rounded-full text-[#722F37]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#b8a98a] rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-[#722F37] mb-8">
            Backend Development
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Flask",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "JWT Authentication",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-[#b8a98a] rounded-full text-[#722F37]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#b8a98a] rounded-3xl p-10 md:col-span-2">
          <h3 className="text-3xl font-bold text-[#722F37] mb-8">
            Tools
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Streamlit",
              "Postman",
              "Jupyter Notebook",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-[#b8a98a] rounded-full text-[#722F37]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}