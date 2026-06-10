export default function Skills() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <h2 className="text-5xl font-bold mb-4">
        Skills & Technologies
      </h2>

      <p className="text-gray-400 mb-16">
        Technologies, tools, and frameworks used across data analytics,
        machine learning, AI engineering, and full-stack development.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Programming
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-700 rounded-full">Python</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">JavaScript</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">SQL</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">C++</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Data Analytics
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-700 rounded-full">Pandas</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">NumPy</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Excel</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Tableau</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Power BI</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Streamlit</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Machine Learning
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-700 rounded-full">Scikit-Learn</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">XGBoost</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">OpenCV</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Predictive Analytics</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Computer Vision</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Backend Development
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-700 rounded-full">Flask</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Node.js</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Express.js</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">MongoDB</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">REST APIs</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-3xl p-8 md:col-span-2">
          <h3 className="text-2xl font-bold mb-6">
            Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-700 rounded-full">Git</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">GitHub</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">VS Code</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Streamlit</span>
            <span className="px-4 py-2 border border-gray-700 rounded-full">Postman</span>
          </div>
        </div>

      </div>

    </section>
  );
}