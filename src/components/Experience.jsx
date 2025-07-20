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
    )

  }, [])

  const EducationAndWork = () => {

    const Container = ({ logo, title, name, setup, date, duration, shadow }) => {
      return (
        <div className='flex items-center gap-7'>
          {/* Logo */}
          <div className={`size-26 rounded-[24px] p-[1px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-2xl shadow-blue-100/20 ${shadow}`}>
            <div className='h-full w-full rounded-[23px] overflow-hidden'>
              <img src={logo} alt={name} className='w-full h-full object-cover' />
            </div>
          </div>
          {/* Content */}
          <div className='space-y-2'>
            <h5 className='leading-tight'>{title}</h5>
            <p>{name} <span className='ms-1 text-xs text-indigo-200/90 px-[5px] py-[1px] border border-indigo-300/5 bg-indigo-400/5 rounded-lg'>{setup}</span></p>
            <p>{date}  <span className='ms-1 text-xs text-indigo-200/90 px-[5px] py-[1px] border border-indigo-300/5 bg-indigo-400/5 rounded-lg'>{duration}</span></p>
          </div>
        </div>
      )
    }

    return (
      <div className='md:px-36 px-6 md:pt-24 pt-9'>
        <div className='grid grid-cols-2 gap-8'>
          {/* Education */}
          <div className='border space-y-8'>
            <h2>education.</h2>
            <div className='border'>
              {/* Bestlink College of the Philippines */}

              {/* Quezon CCity University */}

            </div>
          </div>
          {/* Work Experience */}
          <div className='border space-y-10'>
            <h2>work experience.</h2>
            <div className='space-y-8'>
              {/* Tech-Commr */}
              <Container
                logo='https://placehold.co/30x30'
                title='Freelance Developer & Designer'
                name='Tech-Commr'
                setup='Freelance'
                date='Sep 2024 - Jan 2025'
                duration='5mos'
                shadow='shadow-blue-100/20'
              />
              {/* Behance */}
              <Container
                logo='https://placehold.co/30x30'
                title='UI/UX Designer'
                name='Behance'
                setup='Freelance'
                date='May 2024 - July 2025'
                duration='2.5mos'
                shadow='shadow-blue-500/20'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Certifications = () => {
    return (
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
    )
  }

  return (
    <section id='experience' className='border border-blue-500/20 space-y-16'>
      {/* Education and Work */}
      <EducationAndWork />
      {/* Certifications */}
      <Certifications />
    </section>
  )
}

export default Experience