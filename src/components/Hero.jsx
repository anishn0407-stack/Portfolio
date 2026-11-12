import React from 'react'
import profile from '../assets/anish1.jpg'

const Hero = () => {
  return (
    <div
      id='hero'
      className="min-h-screen flex flex-col bg-[#0F172A] px-16 lg:px-24 py-16"
    >
      <div className="flex items-center justify-between flex-1 mb-20">
        <div id='hero-desc' className="w-60% space-y-6">
          <div id='hero-desc-head'>
            <h1 className="text-3xl font-semibold font-['Merriweather'] text-emerald-400">
              Hello, I'm
            </h1>
            <h2 className="mt-2 text-6xl font-bold font-['Merriweather'] text-white">
              Anish Nagarkar
            </h2>
          </div>

          <div id='hero-desc-para' className="max-w-xl">
            <p className="text-lg leading-8 text-gray-400">
              I'm a Computer Engineering undergraduate passionate about
              software development and problem-solving. I enjoy exploring
              new technologies, building practical projects, and sharpening my
              programming skills through competitive coding. Always curious,
              always learning, and driven to turn ideas into meaningful solutions.
            </p>
          </div>
        </div>

        <div id='hero-image' className="w-[40%] flex justify-center">
          <img
            src={profile}
            alt='Profile'
            className="w-80 h-100 rounded-full object-cover object-top border-2 border-emerald-400/30"
          />
        </div>
      </div>

      <div id="info" className="flex justify-between gap-10 mt-12">
        <div id='info1'>
          <h2 className="text-4xl font-bold text-white">CE</h2>
          <p className="text-gray-400 mt-2">
            Dwarkadas J Sanghvi College of Engineering
          </p>
        </div>

        <div id='info2'>
          <h2 className="text-4xl font-bold text-white">
            4<span className="text-gray-400">+</span>
          </h2>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div id='info3'>
          <h2 className="text-4xl font-bold text-white">9.64</h2>
          <p className="text-gray-400 mt-2">CGPA</p>
        </div>

        <div id='info4'>
          <h2 className="text-4xl font-bold text-white">
            100<span className="text-gray-400">+</span>
          </h2>
          <p className="text-gray-400 mt-2">Leetcode questions</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
