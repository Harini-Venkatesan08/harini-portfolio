function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">
          Certifications
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="font-bold text-purple-400 text-lg">
            Data Science Training
          </h3>

          <p className="text-gray-400 mt-2">
            VIT University
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="font-bold text-purple-400 text-lg">
            Data Analytics Master Class
          </h3>

          <p className="text-gray-400 mt-2">
            NoviTech R&D Pvt. Ltd.
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="font-bold text-purple-400 text-lg">
            MEAN Stack
          </h3>

          <p className="text-gray-400 mt-2">
            Guvi HCL
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certifications;