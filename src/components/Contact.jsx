import React from 'react'
import { FMLogo } from '../assets'
import { CertificationsGlow } from '../assets/experience'

const Contact = () => {
  return (
    <section className='relative h-auto md:pt-24 pt-9 space-y-16 border border-orange-500/20' id='contact'>
      {/* Content */}
      <div className='w-full flex justify-between items-start md:px-36 px-6 border'>
        {/* Left Contents */}
        <div className='border'>
          <h1 className='text-[60px]'>get in touch.</h1>
          <p>moreno.frederick.capiral@gmail.com</p>
          <p>Caloocan City</p>
        </div>
        {/* Right Contents */}
        <div className='border'>
          s
        </div>
      </div>
      {/* Footer */}
      <footer className='h-auto w-full px-6'>
        <div className='overflow-hidden relative px-[1.5px] pt-[1.5px] footer-container-glow w-full h-full rounded-t-4xl'>
          {/* Glow Try */}
          <img src={CertificationsGlow} alt="Glow" className='absolute left-0 w-full h-full scale-x-[-1]' />
          <div className='flex justify-between bg-[#17151E] w-full h-full rounded-t-4xl md:px-30 px-2 md:py-24 py-9'>
            {/* Left Content */}
            <div className='border flex gap-8 z-20'>
              {/* Logo */}
              <div className='size-[120px] rounded-[33px] p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-2xl shadow-indigo-500/20 z-10'>
                <div className='grid place-content-center w-full h-full bg-[#191726] rounded-[32px]'>
                  <img src={FMLogo} alt="FM Logo" className='w-[40px] h-auto' />
                </div>
              </div>
              <h4>Frederick Moreno</h4>
            </div>
            {/* Links */}
            <div className='grid grid-cols-3 gap-x-12 z-20'>
              {/* Link 1 */}
              <div className='flex flex-col gap-y-2'>
                <p className='pb-5'>Links</p>
                <span className='text-sm font-bold text-[#17151E]'>Facebook</span>
                <span className='text-sm font-bold text-[#17151E]'>Instagram</span>
                <span className='text-sm font-bold text-[#17151E]'>Behance</span>
                <span className='text-sm font-bold text-[#17151E]'>Dribbble</span>
              </div>
              {/* Link 1 */}
              <div className='flex flex-col gap-y-2'>
                <p className='pb-5'>Links</p>
                <span className='text-sm font-bold text-[#17151E]'>Facebook</span>
                <span className='text-sm font-bold text-[#17151E]'>Instagram</span>
                <span className='text-sm font-bold text-[#17151E]'>Behance</span>
                <span className='text-sm font-bold text-[#17151E]'>Dribbble</span>
              </div>
              {/* Link 1 */}
              <div className='flex flex-col gap-y-2'>
                <p className='pb-5'>Links</p>
                <span className='text-sm font-bold text-[#17151E]'>Facebook</span>
                <span className='text-sm font-bold text-[#17151E]'>Instagram</span>
                <span className='text-sm font-bold text-[#17151E]'>Behance</span>
                <span className='text-sm font-bold text-[#17151E]'>Dribbble</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
