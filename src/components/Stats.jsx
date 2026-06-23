function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="text-4xl font-bold text-purple-400">8.67</h3>
          <p className="text-gray-400 mt-2">CGPA</p>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="text-4xl font-bold text-purple-400">10+</h3>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="text-4xl font-bold text-purple-400">10+</h3>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>

        <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800 text-center
                        hover:border-purple-500
                        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
                        hover:-translate-y-2
                        transition-all duration-300 cursor-pointer">
          <h3 className="text-4xl font-bold text-purple-400">2027</h3>
          <p className="text-gray-400 mt-2">Graduation</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;