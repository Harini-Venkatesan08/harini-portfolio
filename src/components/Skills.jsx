function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-16 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        AI Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-3">
            Prompt Engineering
          </h3>

          <p className="text-gray-300">
            Zero-shot Prompting,
            Few-shot Prompting,
            Chain-of-Thought,
            Role-based Prompting,
            Structured Outputs
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-3">
            LLM Tools
          </h3>

          <p className="text-gray-300">
            ChatGPT,
            Claude,
            Gemini,
            GitHub Copilot
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-3">
            AI Technologies
          </h3>

          <p className="text-gray-300">
            RAG,
            AI Agents,
            LangChain,
            APIs,
            JSON,
            REST
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;