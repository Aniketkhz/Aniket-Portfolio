export default function Timeline() {
  const timeline = [
    {
      year: "2022",
      title: "Started B.Tech in Computer Science",
      description:
        "Joined Indira Gandhi Institute of Technology (IGIT), Sarang and began building foundations in programming, data structures, and software development.",
    },
    {
      year: "2024",
      title: "Built Smart Appointment & Queue Management System",
      description:
        "Developed a full-stack appointment and queue management platform with real-time tracking, authentication, ETA prediction, QR integration, and notifications.",
    },
    {
      year: "2025",
      title: "Research Internship at DRDO",
      description:
        "Worked on research-oriented projects involving artificial intelligence, analytical workflows, and emerging technologies in a defence research environment.",
    },
    {
      year: "2025",
      title: "Developed AI Pothole Detection System",
      description:
        "Built a computer vision solution using OpenCV and image processing techniques for automated pothole detection and smart transportation applications.",
    },
    {
      year: "2026",
      title: "Graduated B.Tech CSE",
      description:
        "Completed Bachelor of Technology in Computer Science Engineering from IGIT Sarang with specialization in software development, AI, and analytics.",
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-4">
        Journey
      </h2>

      <p className="text-gray-400 mb-16">
        Key milestones across academics, research, and project development.
      </p>

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-3xl p-8"
          >
            <p className="text-gray-500 text-sm mb-3">
              {item.year}
            </p>

            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}