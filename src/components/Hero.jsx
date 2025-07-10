import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBehance, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FMLogo } from '../assets'
import { HeroGrid, HeroGlow } from '../assets/hero'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  useEffect(() => {
    // Social Links Animation
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
    // CTA Animation
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
    // Disable ko muna nag lalag lappyyy
    // gsap.fromTo(
    //   '#hero-logo',
    //   { scale: 1 },
    //   {
    //     scale: 2,
    //     scrollTrigger: {
    //       trigger: '#hero-logo',
    //       start: 'top 20%',
    //       end: 'top -120%',
    //       scrub: 1,
    //       markers: false
    //     },
    //   }
    // )
    // Heading Animation
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
      <header className='absolute p-6 w-full border border-green-500/20 z-50'>
        <div className='relative flex justify-between items-center'>
          {/* Social Links */}
          <div id='social-links' className='flex items-center gap-4'>
            {[
              { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/frederick-moreno/' },
              { icon: FaGithub, link: 'https://github.com/fwedwicc' },
              { icon: FaBehance, link: 'https://www.behance.net/fwedwicc' },
              { icon: FaDribbble, link: 'https://dribbble.com/fwedwic' },
            ].map((item, index) => (
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='grid place-items-center size-7 group rounded-md hover:bg-indigo-400/5 transition-smooth' key={index}>
                <item.icon className='size-4 group-hover:text-indigo-500 text-indigo-100 transition-smooth' />
              </a>
            ))}
          </div>
          {/* Credit */}
          <div className='absolute -translate-x-1/2 left-1/2'>
            <span className='text-indigo-100 text-xs'>FM © 2025</span>
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
        {/* Glow Effects */}
        <div className='bg-indigo-600 w-[10rem] h-12 absolute transform -top-8 rounded-full -translate-x-1/2 left-1/2 blur-2xl'></div>
        <img src={HeroGlow} alt="Glow" className='absolute w-auto border border-green-500/20 top-0 transform -translate-x-1/2 left-1/2 z-10' />
        {/* Grid */}
        <img src={HeroGrid} alt="Grid" className='absolute h-auto w-[75%] opacity-80 border border-green-500/20 -translate-x-1/2 left-1/2 -z-10' />
        <div className='relative flex flex-col items-center justify-center h-full gap-[40px] border'>
          {/* Extra Glow Effect */}
          <div className='h-[180px] w-[250px] absolute bg-indigo-700/30 mb-14 rounded-b-[5rem] blur-lg'></div>
          {/* Logo */}
          <div id='hero-logo' className='size-[250px] rounded-[60px] p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] overflow-hidden z-10'>
            <div className='grid place-content-center w-full h-full bg-[#191726] rounded-[59px]'>
              <img src={FMLogo} alt="FM Logo" className='w-[60px] h-auto' />
            </div>
          </div>
          {/* Heading */}
          <h1 id='heading-1' className='text-[70px] text-center'>i design and build</h1>
        </div>
      </section>
    </>
  )
}

export default Hero
