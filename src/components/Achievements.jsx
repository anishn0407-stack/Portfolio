import React from 'react'
import adobe from '../assets/adobe.jpg'
import cp from '../assets/cp.png'
import hb from '../assets/hb.jpg'

const Achievements = () => {
  return (
    <div
      id='ach'
      className="bg-[#0F172A] px-6 py-20 md:px-12 lg:px-20"
    >
      <h1 className="mb-4 text-center text-5xl font-['Merriweather',serif] font-bold text-white">
        Achievements and
        <span className='text-emerald-400'> Highlights</span>
      </h1>
      <p className="text-base text-center mb-16 text-gray-400">
        Milestones and highlights of my journey.
      </p>

      <div className="flex justify-center gap-8 mt-12">

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/10">
          <div className="h-52 overflow-hidden">
            <img
              src={adobe}
              alt="Adobe India Hackathon"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-3 text-xl font-semibold font-['Merriweather'] text-emerald-400">
              Adobe India Hackathon 2026
            </h4>
            <p className="text-sm leading-7 text-gray-300">
              Participated in the Adobe India Hackathon and successfully
              cleared two rounds of the competition.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
          <div className="h-52 overflow-hidden">
            <img
              src={cp}
              alt="Competitive programming"
              className="h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-3 text-xl font-semibold font-['Merriweather'] text-emerald-400">
              CP Ratings
            </h4>
            <p className="text-sm leading-7 text-gray-300">
              Achieved maximum ratings of 1417 on LeetCode, 1331 on
              CodeChef, and 993 on Codeforces through consistent
              problem-solving and practice.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
          <div className="h-52 overflow-hidden">
            <img
              src={hb}
              alt="Leadership achievement"
              className="h-52 w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-3 text-xl font-semibold font-['Merriweather'] text-emerald-400">
              Leadership Experience
            </h4>
            <p className="text-sm leading-7 text-gray-300">
              Elected as School Head Boy, taking responsibility for
              representing students, coordinating school activities,
              and supporting student initiatives.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Achievements
