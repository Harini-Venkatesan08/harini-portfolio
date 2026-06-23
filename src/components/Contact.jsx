function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-8 py-16 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">
          Contact Me
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-3xl border border-purple-500/20 text-center hover:border-purple-500 transition-all duration-300">

        <p className="text-gray-300 text-lg mb-8">
          Let's connect and build AI-powered solutions together.
        </p>

        {/* Email */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-purple-400 mb-3">
            📧 Email
          </h3>

          <a
            href="mailto:hariniv9751@gmail.com"
            className="text-xl text-white hover:text-purple-400 transition"
          >
            hariniv9751@gmail.com
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://github.com/Harini-Venkatesan08"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              🐙 GitHub
            </h3>

            <p className="text-gray-400">
              View my projects and repositories
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/harini-v-832986347/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              🔗 LinkedIn
            </h3>

            <p className="text-gray-400">
              Connect with me professionally
            </p>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              📄 Resume
            </h3>

            <p className="text-gray-400">
              View my latest resume
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;