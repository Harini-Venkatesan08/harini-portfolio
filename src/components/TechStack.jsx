function TechStack() {
  const skills = [
    "Python",
    "Java",
    "React",
    "FastAPI",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "LLMs",
    "Prompt Engineering",
    "RAG",
    "AI Agents",
    "LangChain",
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h2 className="text-5xl font-bold text-center mb-12">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-900 px-5 py-3 rounded-xl border border-gray-800 hover:border-purple-500"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechStack;