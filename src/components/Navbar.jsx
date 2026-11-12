import React from 'react'

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#000000] px-8 py-5"
    >
      <div id="navbar-head" className="text-xl font-bold">
        <h2 className="text-[#34D399]">My Portfolio</h2>
      </div>

      <div id="navbar-head1" className="flex items-center">
        <div id="navber-head1-ul" className="flex items-center gap-8">
          <a
            href="#hero"
            className="cursor-pointer rounded-lg  px-4 py-2 text-sm font-medium text-gray-400  hover:border-white/10 hover:bg-white/10 hover:text-emerald-400"
          >
            Home
          </a>
          <a
            href="#ach"
            className="cursor-pointer rounded-lg  px-4 py-2 text-sm font-medium text-gray-400 hover:border-white/10 hover:bg-white/10 hover:text-emerald-400"
          >
            Achievements
          </a>
          <a
            href="#pro"
            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:border-white/10 hover:bg-white/10 hover:text-emerald-400"
          >
            Projects
          </a>
          <a
            href="#about"
            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:border-white/10 hover:bg-white/10 hover:text-emerald-400"
          >
            About
          </a>
          <a
            href="#cn"
            className="cursor-pointer rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-emerald-400"
          >
            Profiles
          </a>

        </div>
      </div>
    </div>
  )
}

export default Navbar