import React from 'react'
import { Button } from './ui'
import { FMLogo } from '../assets'
import { CertificationsGlow } from '../assets/experience'
import { TbPhone, TbMail, TbMapPin, TbArrowUpRight } from "react-icons/tb"

const Contact = () => {

  return (
    <section className='relative h-auto md:pt-24 pt-9 space-y-16 border border-orange-500/20' id='contact'>
      {/* Content */}
      <div className='w-full flex justify-between items-end md:px-36 px-6'>
        {/* Left Contents */}
        <div className='space-y-7'>
          <div className='flex flex-col space-y-1.5'>
            <h1 id='text-animation' className='text-[65px] mb-2'>get in touch.</h1>
            {[
              { label: 'moreno.frederick.capiral@gmail.com', icon: <TbMail className='size-4.5 stroke-[1.4px]' /> },
              { label: '+63 921 432 3915', icon: <TbPhone className='size-4.5 stroke-[1.4px]' /> },
              { label: 'Caloocan City, Philippines', icon: <TbMapPin className='size-4.5 stroke-[1.4px]' /> }
            ].map((item, index) => (
              <span className='text-indigo-100/80 inline-flex items-center gap-2' key={index}>
                {item.icon}
                <p>{item.label}</p>
              </span>
            ))}
          </div>
          <Button variant="primary" label="Drop me a line" />
        </div>
        {/* Right Contents */}
        <div className=''>
          <Button variant="secondary" label="Buy me a coffee" />
        </div>
      </div>
      {/* Footer */}
      <footer id='contact-footer' className='h-auto w-full px-6'>
        <div className='overflow-hidden relative px-[1.5px] pt-[1.5px] footer-container-glow w-full rounded-t-4xl'>
          {/* Glow Try */}
          <img src={CertificationsGlow} alt="Glow" className='absolute left-0 w-full h-full scale-x-[-1]' />
          <div className='flex justify-between bg-[#17151E] w-full h-full rounded-t-4xl md:px-30 px-2 md:py-16 py-9'>
            {/* Left Content */}
            <div className='flex flex-col gap-8 z-20'>
              {/* Logo */}
              <div className='size-[120px] rounded-[33px] p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-2xl shadow-indigo-500/20 z-10'>
                <div className='grid place-content-center w-full h-full bg-[#191726] rounded-[32px]'>
                  <img src={FMLogo} alt="FM Logo" className='w-[40px] h-auto' />
                </div>
              </div>
              <div className='space-y-1'>
                <span className='flex items-center gap-1 group'>
                  <h2 id='text-animation'>FM © 2025</h2>
                  <TbArrowUpRight className='text-indigo-100 group-hover:text-indigo-400 transition-smooth size-12 stroke-[1.4px]' />
                </span>
                <p id='text-animation'>Developed and designed by <span className='text-indigo-400'>Frederick Moreno</span>.</p>
              </div>
            </div>
            {/* Links */}
            <div className='flex gap-x-20 z-20'>
              {/* Links */}
              <div className='flex flex-col gap-y-2'>
                <span className='pb-5 text-md text-[#17151E] font-bold'>Navigations</span>
                <span className='text-sm font-semibold text-[#17151E]'>Home</span>
                <span className='text-sm font-semibold text-[#17151E]'>About</span>
                <span className='text-sm font-semibold text-[#17151E]'>Experience</span>
                <span className='text-sm font-semibold text-[#17151E]'>Expertise</span>
                <span className='text-sm font-semibold text-[#17151E]'>Projects</span>
              </div>
              {/* Socials */}
              <div className='flex flex-col gap-y-2'>
                <span className='pb-5 text-md text-[#17151E] font-bold'>Socials</span>
                <span className='text-sm font-semibold text-[#17151E]'>LinkedIn</span>
                <span className='text-sm font-semibold text-[#17151E]'>GitHub</span>
                <span className='text-sm font-semibold text-[#17151E]'>Behance</span>
                <span className='text-sm font-semibold text-[#17151E]'>Dribbble</span>
                <span className='text-sm font-semibold text-[#17151E]'>TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
