function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

      <p className="text-purple-400 mb-4 tracking-widest">
        AI • PROMPT ENGINEERING • AUTOMATION
      </p>

      <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        Harini
        <span className="text-purple-500"> Venkatesan</span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
        AI Engineer & Prompt Engineer
      </h2>

      <p className="text-lg text-purple-400 mb-6">
        Pre-Final Year M.Tech Integrated Software Engineering Student | VIT Vellore
      </p>

      <p className="max-w-2xl text-gray-400 text-lg mb-10">
        Building AI-powered applications using LLMs,
        Prompt Engineering, RAG Systems,
        Automation Workflows, and Modern Software Engineering.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/Harini-Venkatesan08"
          target="_blank"
          rel="noreferrer"
          className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-900 transition"
        >
          GitHub
        </a>
      </div>

    </section>
  );
}

export default Hero;