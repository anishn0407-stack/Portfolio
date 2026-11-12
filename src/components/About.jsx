import React from 'react'
import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'

const About = () => {

  const tools = [
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'Java', icon: <FaJava color="#ED8B00" /> },
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Django', icon: <SiDjango color="#7E22CE" /> },
    { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Git', icon: <SiGit color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub color="#FFFFFF" /> },
  ]

  const hobbies = [
    '✈ Travelling',
    '♫ Music',
    '🏏 Cricket',
    '🚴 Cycling',
    '🏊 Swimming',
    '🌱 Gardening',
  ]

  const toolCards = []

  for (let i = 0; i<tools.length*2; i++) {
    const tool = tools[i % tools.length]
    toolCards.push(
      <div
        key={i}
        className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-800 bg-[#1E293B] px-6 py-5 duration-300 hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-gray-800"
      >
        <span className="text-3xl">{tool.icon}</span>
        <span className="font-medium text-gray-200">
          {tool.name}
        </span>
      </div>
    )
  }

  const hobbyCards = []

  for (let i = 0; i<hobbies.length*2; i++) {
    const hobby = hobbies[i % hobbies.length]
    hobbyCards.push(
      <div
        key={i}
        className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-800 bg-[#1E293B] px-6 py-5 duration-300 hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-gray-800"
      >
        {hobby}
      </div>
    )
  }

  return (
    <div
      id="about"
      className="overflow-hidden bg-[#0F172A] px-6 pt-12 text-white"
    >
      <div id="about-head" className="mb-20 text-center">
        <h4 className="mb-4 text-sm font-semibold tracking-[0.3em] text-emerald-400">
          ABOUT ME
        </h4>
        <h1 className="mb-5 font-['Merriweather'] text-3xl font-bold">
          A Glimpse into my
          <span className="text-emerald-400"> World</span>
        </h1>
        <p className="mx-auto max-w-2xl text-base text-gray-400">
          Learn about me, who I am, what I do and many more.
        </p>
      </div>

      <div id="about-toolbox" className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="font-['Merriweather'] text-3xl font-bold">
            My <span className="text-emerald-400">Toolbox</span>
          </h2>
          <p className="text-gray-400">
            Technologies and tools I use to build things.
          </p>
        </div>
        <div className="overflow-hidden py-5">
          <div id="toolbox-track" className="flex w-max gap-5">
            {toolCards}
          </div>
        </div>
      </div>

      <div id="about-extrac" className="mx-auto mt-24 max-w-6xl">
        <div id="extrac-head" className="mb-10">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-emerald-400">
            OUTSIDE THE TERMINAL
          </p>
          <h2 className="font-['Merriweather'] text-3xl font-bold">
            Beyond the <span className="text-emerald-400">Code.</span>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
            When I'm not building something, here's what keeps me inspired.
          </p>
        </div>
        <div id="extrac" className="overflow-hidden py-5">
          <div id="toolbox-track1" className="flex w-max gap-5">
            {hobbyCards}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About