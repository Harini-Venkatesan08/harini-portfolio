function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="font-bold text-xl">
          Harini<span className="text-purple-500">.AI</span>
        </h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-purple-400">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;