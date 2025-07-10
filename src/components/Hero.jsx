import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBehance, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FMLogo } from '../assets'
import { HeroGrid, HeroGlow } from '../assets/hero'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const logoRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      '#social-links',
      { x: 0 },
      {
        x: -150,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#social-links',
          scrub: 1,
          markers: false,
          start: 'top 0%',
          end: 'top -20%',
        },
      }
    )
       gsap.fromTo(
      '#CTAs',
      { x: 0 },
      {
        x: 150,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#CTAs',
          scrub: 1,
          markers: false,
          start: 'top 0%',
          end: 'top -20%',
        },
      }
    )
    gsap.fromTo(
      logoRef.current,
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 20%',
          end: 'top -120%',
          scrub: 1,
          markers: false
        },
      }
    )
    gsap.fromTo(
      '#heading-1',
      { y: 0, opacity: 100 },
      {
        y: 150,
        opacity: 10,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#heading-1',
          scrub: 1,
          markers: false,
          start: 'top 50%',
          end: 'top -5%',
        },
      }
    )
  }, [])

  // Header Component
   const Header = () => {
    return (
      <header className='absolute p-10 w-full border border-green-500/20 z-50'>
       <div className='relative flex justify-between items-center'>
         {/* Social Links */}
          <div id='social-links' className='flex items-center gap-4'>
          {[
            { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/yourprofile' },
            { icon: FaGithub, link: 'https://www.linkedin.com/in/yourprofile' },
            { icon: FaBehance, link: 'https://www.linkedin.com/in/yourprofile' },
            { icon: FaDribbble, link: 'https://www.linkedin.com/in/yourprofile' },
          ].map((item, index) => (
            <div className='grid place-items-center size-7 group rounded-md hover:bg-indigo-400/10 transition-smooth' key={index}> 
              <item.icon className='size-4 group-hover:text-indigo-300 text-indigo-100 transition-smooth' />
            </div>
          ))}
          </div> 
          {/* Credit */}
          <div className='absolute -translate-x-1/2 left-1/2'>
            <span className='text-indigo-100 text-sm'>FM © 2025</span>
          </div>
          {/* CTAs */}
          <div id='CTAs' className='flex gap-1 p-1 border rounded-[13px]'>
            <div className='px-3 py-2 border rounded-[10px] text-sm'>Linktree</div>
            <div className='px-3 py-2 border rounded-[10px] text-sm'>Drop me a line</div>
          </div>
       </div>
      </header>
    )
  }

  return (
    <>
      <Header />
      <section className='h-screen' id='home'>
        {/* Glow */}
        <img src={HeroGlow} alt="Glow" className='absolute w-auto border border-green-500/20 top-0 transform -translate-x-1/2 left-1/2 z-10' />
        {/* Grid */}
        <img src={HeroGrid} alt="Grid" className='absolute h-screen w-auto border border-green-500/20 transform -translate-x-1/2 left-1/2 -z-10' />
        {/* Logo Container */}
        <div className='flex flex-col items-center justify-center h-full gap-[50px] border'>
          <div id='hero-logo' ref={logoRef} className='size-[300px] rounded-[70px] p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] overflow-hidden'>
            <div className='grid place-content-center w-full h-full bg-[#191726] rounded-[69px]'>
              <img src={FMLogo} alt="FM Logo" className='w-[73px] h-auto' />
            </div>
          </div>
          {/* Heading */}
          <h1 id='heading-1' className='text-[80px] text-center'>i design and build</h1>
        </div>
      </section>
    </>
  )
}

export default Hero
