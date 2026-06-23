function Patents() {
  return (
    <section
      id="patents"
      className="max-w-6xl mx-auto px-8 py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">
          Patents
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="space-y-6">

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Method and System for Nutrient Deficiency Classification in Rose Leaves Using Image Analysis
          </h3>

          <p className="text-gray-300 leading-8">
            AI-powered computer vision system for automated detection and
            classification of nutrient deficiencies in rose leaves using
            image processing, feature extraction, and intelligent analysis.
          </p>

          <p className="text-green-400 mt-4 font-semibold">
            Published Patent • 2026
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">
            Telemetry-Driven Dynamic Logic-Switching System for Autonomous Agent Orchestration
          </h3>

          <p className="text-gray-300 leading-8">
            Fault-tolerant orchestration framework that dynamically switches
            between AI reasoning engines and deterministic logic systems
            while preserving execution state and operational reliability.
          </p>

          <p className="text-green-400 mt-4 font-semibold">
            Published Patent • 2026
          </p>
        </div>

      </div>
    </section>
  );
}

export default Patents;