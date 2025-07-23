import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBehance, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FMLogo } from '../assets'
import { HeroGrid, HeroGlow } from '../assets/hero'
import { Button } from '../components/ui'

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
    // Tryyy hero grid
    // gsap.fromTo(
    //   '#hero-grid',
    //   { scale: 1 },
    //   {
    //     scale: 2,
    //     scrollTrigger: {
    //       trigger: '#hero-grid',
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
      <header className='absolute md:p-6 p-4 w-full z-50'>
        <div className='relative flex md:justify-between justify-end items-center'>
          {/* Social Links */}
          <div id='social-links' className='md:flex hidden items-center gap-4'>
            {[
              { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/frederick-moreno/' },
              { icon: FaGithub, link: 'https://github.com/fwedwicc' },
              { icon: FaBehance, link: 'https://www.behance.net/fwedwicc' },
              { icon: FaDribbble, link: 'https://dribbble.com/fwedwic' },
            ].map((item, index) => (
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='grid place-items-center size-7 group rounded-md hover:bg-[#111017] transition-smooth' key={index}>
                <item.icon className='size-4 group-hover:text-white text-indigo-100 transition-smooth' />
              </a>
            ))}
          </div>
          {/* Credit */}
          <div className='absolute -translate-x-1/2 left-1/2 md:visible invisible'>
            <span className='text-indigo-100 text-xs'>FM © 2025</span>
          </div>
          {/* CTAs */}
          <div id='CTAs' className='flex gap-1 p-1 border border-[#262333] bg-[#15131C] rounded-[13px]'>
            {/* Linktree */}
            <a href="https://fm-linktree.vercel.app" target='_blank' rel='noopener noreferrer'>
              <Button variant="secondary" label="Linktree" />
            </a>
            {/* Get in touch */}
            <Button variant="primary" label="Get in touch" />
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
        <div className='bg-indigo-700 w-[10rem] h-12 absolute transform -top-8 rounded-full -translate-x-1/2 left-1/2 blur-2xl'></div>
        <img src={HeroGlow} alt="Glow" className='absolute w-auto top-0 transform -translate-x-1/2 left-1/2 z-10' />
        {/* Grid */}
        <img src={HeroGrid} alt="Grid" id='hero-grid' className='absolute md:w-[65rem] w-[20rem] h-auto -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 -z-10' />
        <div className='relative flex flex-col items-center justify-center h-full md:gap-[40px] gap-[25px]'>
          {/* Extra Glow Effect */}
          <div className='md:h-[180px] h-[90px] md:w-[250px] w-[200px] absolute bg-indigo-700/40 md:mb-10 mb-14 rounded-b-[5rem] blur-xl'></div>
          {/* Logo */}
          <div id='hero-logo' className='md:size-[250px] size-[190px] md:rounded-[60px] rounded-[45px] p-[2px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] overflow-hidden z-10'>
            <div className='grid place-content-center w-full h-full bg-[#191726] md:rounded-[59px] rounded-[44px]'>
              <img src={FMLogo} alt="FM Logo" className='md:w-[60px] size-[45px] h-auto' />
            </div>
          </div>
          {/* Heading */}
          <h1 id='heading-1' className='md:text-[60px] text-[45px] text-center'>i design and build</h1>
        </div>
      </section>
    </>
  )
}

export default Hero
