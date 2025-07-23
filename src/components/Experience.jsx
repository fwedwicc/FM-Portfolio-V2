import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BCPLogo, QCULogo, TechCommrLogo, BehanceLogo, CertificationsGlow } from '../assets/experience'
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
        <div className='flex items-center md:gap-7 gap-5'>
          {/* Logo */}
          <div className={`flex-shrink-0 md:size-30 size-26 md:rounded-[28px] rounded-[25px] p-[1px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-2xl shadow-blue-100/20 ${shadow}`}>
            <div className='h-full w-full md:rounded-[27px] rounded-[24px] overflow-hidden'>
              <img src={logo} alt={name} className='w-full h-full object-cover' />
            </div>
          </div>
          {/* Content */}
          <div className='md:pace-y-2 space-y-3'>
            <h5 className='leading-tight'>{title}</h5>
            <span className='block md:text-sm text-xs text-indigo-100/90'>{name} <span className='ms-1 text-xs text-indigo-200/90 px-[5px] py-[1px] border border-indigo-300/5 bg-indigo-400/5 rounded-lg'>{setup}</span></span>
            <span className='block md:text-sm text-xs text-indigo-100/90'>{date}  <span className='ms-1 text-xs text-indigo-200/90 px-[5px] py-[1px] border border-indigo-300/5 bg-indigo-400/5 rounded-lg'>{duration}</span></span>
          </div>
        </div>
      )
    }

    return (
      <div className='lg:px-36 md:px-28 px-4 md:pt-24 pt-4 py-4'>
        <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-12'>
          {/* Education */}
          <div className='space-y-10'>
            <h2>education.</h2>
            <div className='space-y-8'>
              {/* Bestlink College of the Philippines */}
              <Container
                logo={BCPLogo}
                title='Info. and Comm. Technology'
                name='Bestlink College of the Philippines'
                setup='Senior High'
                date='2019 - 2021'
                duration='2yrs'
                shadow='shadow-indigo-100/20'
              />
              {/* Quezon City University */}
              <Container
                logo={QCULogo}
                title='BS in Information Technology'
                name='Quezon City University'
                setup='Tertiary'
                date='2022 - 2026'
                duration='5yrs'
                shadow='shadow-indigo-100/20'
              />
            </div>
          </div>
          {/* Work Experience */}
          <div className='space-y-10'>
            <h2>work experience.</h2>
            <div className='space-y-8'>
              {/* Tech-Commr */}
              <Container
                logo={TechCommrLogo}
                title='Freelance Developer & Designer'
                name='Tech-Commr'
                setup='Freelance'
                date='Sep 2024 - Jan 2025'
                duration='5mos'
                shadow='shadow-indigo-100/20'
              />
              {/* Behance */}
              <Container
                logo={BehanceLogo}
                title='UI/UX Designer'
                name='Behance'
                setup='Freelance'
                date='May 2024 - Jul 2025'
                duration='3mos'
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
      <div className='md:h-94 h-[20rem] w-full md:px-6 px-4'>
        <div className='md:p-[1.5px] p-[1px] h-full certis-container-glow rounded-4xl'>
          <div className='relative bg-[#1d1b28] w-full h-full rounded-[31px] grid md:grid-cols-2 grid-cols-1 overflow-hidden'>
            {/* Left Glow */}
            <img src={CertificationsGlow} alt="Left Glow" className='absolute h-full w-[300rem] z-10' />
            {/* Right Glow */}
            <div className='absolute right-0 bottom-0 size-64 rounded-lg bg-indigo-500/20 blur-3xl z-10' />
            {/* Left Content */}
            <div className='z-30 lg:p-30 md:p-22 p-6 space-y-4'>
              <span className='block md:text-4xl text-3xl text-[#15131C] font-bold'>certifications.</span>
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
      </div>
    )
  }

  return (
    <section id='experience' className='border border-blue-500/20 md:space-y-16 space-y-12 mt-14'>
      {/* Education and Work */}
      <EducationAndWork />
      {/* Certifications */}
      <Certifications />
    </section>
  )
}

export default Experience