import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiCodio } from 'react-icons/si'

const Connect = () => {
  return (
    <div className="bg-[#0F172A] py-50 px-20">

      <div
        id="cn"
        className="flex flex-row gap-8 overflow-hidden rounded-3xl bg-[#4FCBD0] px-10 py-16 text-[#0F172A]"
      >
        <div className="w-[50%]">
          <h2 className="mb-4 font-['Merriweather'] text-3xl font-bold">
            Let's Connect!
          </h2>

          <p className="font-['Inter'] text-lg leading-9 text-[#1E293B]">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to
            get back to you!
          </p>
        </div>

        <div
          id="cn-form"
          className="flex w-[50%] flex-col gap-5"
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg border border-white/30 bg-white/25 px-5 py-4 font-['Inter'] text-lg text-[#0F172A] placeholder:text-slate-400 focus:border-[#0F172A]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-white/30 bg-white/25 px-5 py-4 font-['Inter'] text-lg text-[#0F172A] placeholder:text-slate-400 focus:border-[#0F172A]"
          />
          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full rounded-lg border border-white/30 bg-white/25 px-5 py-4 font-['Inter'] text-lg text-[#0F172A] placeholder:text-slate-400 focus:border-[#0F172A]"
          />
          <button
            className="cursor-pointer rounded-xl border border-[#0F172A] bg-slate-600 px-10 py-4 font-['Inter'] text-lg font-bold text-white hover:bg-slate-700"
          >
            Send Message
          </button>
        </div>
      </div>

      <div
        id="pro"
        className="mt-12 flex flex-col items-center justify-between gap-6  bg-[#111827] px-6 py-10 text-gray-400"
      >
        <p className="text-base font-semibold font-['Meriweather'] text-white">
          Find me on
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href="https://www.linkedin.com/in/anish-nagarkar-80b050393/"
            className="flex items-center gap-2 hover:text-white"
          >
            <FaLinkedin />LinkedIn
          </a>
          <a
            href="https://github.com/anishn0407-stack"
            className="flex items-center gap-2 hover:text-white"
          >
            <FaGithub />Github
          </a>
          <a
            href="https://codolio.com/profile/an_123"
            className="flex items-center gap-2 hover:text-white"
          >
            <SiCodio />Codolio
          </a>
          <a
            href="mailto:anishn0407@gmail.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <FaEnvelope />Email
          </a>
        </div>
      </div>

    </div>
  )
}

export default Connect