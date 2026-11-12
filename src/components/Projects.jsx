import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'

function handleClick(url) {
  window.open(url)
}

const Projects = () => {
  return (
    <div id='pro' className="bg-[#0F172A] text-white px-6 py-20 min-h-screen">
      <h2 className="text-5xl font-bold font-['Merriweather'] text-center mb-3">
        Featured <span className="text-[#34D399]">Projects</span>
      </h2>
      <p className="text-base text-center mb-16 text-gray-400">
        See my projects here.
      </p>
      
      <div
        id='pro1'
        className="flex flex-row items-center gap-10 w-full max-w-6xl mx-auto bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mb-12"
      >
        <div className="w-full space-y-6">
          <h4 className="text-3xl font-bold font-['Merriweather'] text-[#fafafa]">StockWatch</h4>
          <ul className="text-gray-300 space-y-3 text-base list-disc pl-5">
            <li>Search and explore Indian NSE stocks by company name, symbol, and sector.</li>
            <li>Track historical stock prices and visualize market trends using Yahoo Finance.</li>
            <li>Manage personalized watchlists and filter stocks based on sectors.</li>
          </ul>
          <div id='t1' className="flex flex-wrap gap-3">
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">HTML</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">CSS</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Tkinter</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Python</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Django</span>
          </div>
          <button className="bg-[#ffffff] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffffff] cursor-pointer hover:transform" onClick={() => handleClick("https://github.com/anishn0407-stack/stockwatch")}>
            GitHub
          </button>
        </div>
        <div id='pro1-img' className="w-full">
          <img src={p1} alt="StockWatch" className="w-full h-auto rounded-xl object-cover shadow-md" />
        </div>
      </div>

      <div
        id='pro2'
        className="flex flex-row items-center gap-10 w-full max-w-6xl mx-auto bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mb-12"
      >
        <div className="w-full space-y-6">
          <h4 className="text-3xl font-bold font-['Merriweather'] text-[#ffffff]">EduMate</h4>
          <ul className="text-gray-300 space-y-3 text-base list-disc pl-5">
            <li>Developed a responsive login and signup interface using React.</li>
            <li>Implemented form validation and interactive authentication UI.</li>
            <li>Designed a user-friendly interface with a modern layout and responsive styling.</li>
          </ul>
          <div id='t1' className="flex flex-wrap gap-3">
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">React JS</span>
          </div>
          <button className="bg-[#ffffff] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:[#ffffff] transition cursor-pointer" onClick={() => handleClick("https://github.com/anishn0407-stack/Frontrend-UC-Task")}>
            GitHub
          </button>
        </div>
        <div id='pro2-img' className="w-full">
          <img src={p3} alt="EduMate" className="w-full h-auto rounded-xl object-cover shadow-md" />
        </div>
      </div>

      <div
        id='pro3'
        className="flex flex-row items-center gap-10 w-full max-w-6xl mx-auto bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mb-12"
      >
        <div className="w-full space-y-6">
          <h4 className="text-3xl font-bold font-['Merriweather'] text-[#ffffff]">Central Perk Café</h4>
          <ul className="text-gray-300 space-y-3 text-base list-disc pl-5">
            <li>Developed a responsive café website featuring a modern and attractive design.</li>
            <li>Created dedicated sections to showcase the café's menu and offerings.</li>
            <li>Used HTML and CSS to build an interactive and user-friendly interface.</li>
          </ul>
          <div id='t3' className="flex flex-wrap gap-3">
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">HTML</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">CSS</span>
          </div>
          <button className="bg-[#ffffff] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffffff] cursor-pointer" onClick={() => handleClick("https://github.com/anishn0407-stack/AnishNagarkar_ucinterview")}>
            GitHub
          </button>
        </div>

        <div id='pro3-img' className="w-full">
          <img src={p2} alt="Central Perk Cafe" className="w-full h-auto rounded-xl object-cover" />
        </div>
      </div>

      <div
        id='pro4'
        className="flex flex-row items-center gap-10 w-full max-w-6xl mx-auto bg-[#1E293B] border border-slate-700 rounded-2xl p-8 mb-12"
      >
        <div className="w-full space-y-6">
          <h4 className="text-3xl font-bold font-['Merriweather'] text-[#ffffff]">Smart Flashcards</h4>
          <ul className="text-gray-300 space-y-3 text-base list-disc pl-5">
            <li>Generates question-and-answer flashcards from user-provided study notes.</li>
            <li>Schedules card revisions based on Easy/Hard ratings to improve retention.</li>
            <li>Review history and displays learning statistics through a Django dashboard.</li>
          </ul>

          <div id='t4' className="flex flex-wrap gap-3">
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Python</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">OOP</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Tkinter</span>
            <span className="bg-slate-700 px-4 py-2 rounded-lg text-[#ffffff] text-sm">Django</span>
          </div>

          <button className="bg-[#ffffff] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffffff] cursor-pointer" onClick={() => handleClick("https://github.com/anishn0407-stack/flashcards")}>
            GitHub
          </button>
        </div>

        <div id='pro4-img' className="w-full">
          <img src={p4} alt="Smart Flashcards" className="w-full h-auto rounded-xl object-cover" />
        </div>
      </div>

    </div>
  )
}

export default Projects