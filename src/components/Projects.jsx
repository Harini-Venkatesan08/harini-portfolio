function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid gap-8">

        <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            AI Assisted Test Platform
          </h3>

          <p className="text-gray-300 mb-4">
            AI-powered testing platform that automates
            test generation, evaluation, and analysis
            using intelligent workflows.
          </p>

          <p className="text-sm text-gray-400 mb-4">
            AI • Automation • Testing • Prompt Engineering
          </p>

          <a
            href="https://github.com/Harini-Venkatesan08/ai-assisted-test-platform"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View Repository →
          </a>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Automotive ML Advisor
          </h3>

          <p className="text-gray-300 mb-4">
            Machine learning recommendation system that
            analyzes automotive datasets and suggests
            suitable ML algorithms.
          </p>

          <p className="text-sm text-gray-400 mb-4">
            Python • Streamlit • Scikit-Learn
          </p>

          <a
            href="https://github.com/Harini-Venkatesan08/automotive-ml-advisor"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View Repository →
          </a>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Real-Time Customer Support Voice Agent
          </h3>

          <p className="text-gray-300 mb-4">
            Intelligent voice-based customer support
            assistant capable of handling queries and
            automating interactions.
          </p>

          <p className="text-sm text-gray-400 mb-4">
            Voice AI • NLP • Automation
          </p>

          <a
            href="https://github.com/Harini-Venkatesan08/real-time-customer-support-voice-agent"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View Repository →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;