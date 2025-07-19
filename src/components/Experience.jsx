import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CertificationsGlow } from '../assets/experience'
import { Button } from './ui'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {

  useEffect(() => {

    gsap.fromTo(
      '#top',
      { height: '0' },
      {
        height: '100px',
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#top',
          scrub: 1,
          markers: false,
          start: 'top 90%',
          end: 'bottom -30%',
        },
      }
    )

    gsap.fromTo(
      '#bottom',
      { height: '100px' },
      {
        height: '0px',
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#bottom',
          scrub: 1,
          start: 'top 90%',
          end: 'bottom -30%',
          markers: false,
        },
      }
    );

  }, [])

  return (
    <section id='experience' className='border border-blue-500/20 space-y-16'>
      <div className='md:px-36 px-6'>
        {/* Education and Work */}
        <div className='grid grid-cols-2 gap-8'>
          {/* Container: Experiences */}
          <div className='border'>
            <h2>experience.</h2>
            {/* Education */}
            <div className='mt-5'>
              <h4>education.</h4>
              <div className='size-20 rounded-[18px] grid place-content-center border border-green-500/20'>
                <img src="https://placehold.co/30x30" alt="Sample Logo" className='size-12 rounded-md' />
              </div>
              <h5>Quezon City University</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Certifications */}
      <div className='h-94 w-full px-6'>
        <div className='relative border border-[#2d283d] bg-transparent h-full rounded-4xl grid md:grid-cols-2 grid-cols-1 overflow-hidden'>
          {/* Left Glow */}
          <img src={CertificationsGlow} alt="Left Glow" className='absolute left-0 h-full w-auto z-10' />
          {/* Right Glow */}
          <div className='absolute right-0 bottom-0 size-64 rounded-lg bg-indigo-500/20 blur-3xl z-10' />
          {/* Left Content */}
          <div className='z-20 p-30 space-y-4'>
            <span className='block text-4xl text-[#15131C] font-bold'>certifications.</span>
            <span className='block text-sm text-[#15131C] font-bold w-full max-w-xs'>Lorem, ipsum dolor sit amet consecur adipicing elit. Nisi beatae nobis nihil minima.</span>
            <Button variant="secondary" label="View certificates" />
          </div>
          {/* Right Content */}
          <div className='grid grid-cols-3 gap-7 lg:pr-16 md:pr-0'>
            {/* First Column */}
            <div className='border flex flex-col justify-start items-start gap-2 -skew-x-36 -mt-20'>
              <div id='bottom' className='h-auto border' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
            </div>
            <div className='border flex flex-col gap-2 -skew-x-36 -mt-32'>
              <div id="top" className="h-auto" />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
            </div>
            <div className='border flex flex-col justify-start items-start gap-2 -skew-x-36 -mt-44'>
              <div id='bottom' className='h-auto border' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience