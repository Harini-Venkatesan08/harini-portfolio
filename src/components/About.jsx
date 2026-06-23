function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-8 py-12 scroll-mt-24"
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">
          About Me
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">
        <p className="text-lg text-gray-300 leading-9 text-center">
          Pre-final year M.Tech Integrated Software Engineering student
          at VIT Vellore, passionate about Generative AI, Prompt
          Engineering, AI Automation, and Full-Stack Development.
          <br /><br />
          I enjoy building AI-powered applications, intelligent
          automation systems, and modern software solutions that address
          real-world challenges using cutting-edge technologies.
          <br /><br />
          My areas of interest include Large Language Models (LLMs),
          Retrieval-Augmented Generation (RAG), AI Agents, Prompt
          Engineering, and scalable web applications that create
          meaningful user experiences.
        </p>
      </div>
    </section>
  );
}

export default About;