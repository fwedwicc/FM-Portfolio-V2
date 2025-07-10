import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBehance, FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa"

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

   const Header = () => {
    return (
      <header className='absolute p-10 w-full border'>
       <div className='relative flex justify-between items-center'>
         {/* Social Links */}
        <div id='social-links' className='flex items-center gap-4'>
          <div className='grid place-items-center size-7 rounded-md'>
            <FaLinkedinIn className='size-4.5' />
          </div>
          <div className='grid place-items-center size-7 rounded-md'>
            <FaGithub className='size-4.5' />
          </div>
          <div className='grid place-items-center size-7 rounded-md'>
            <FaBehance className='size-4.5' />
          </div>
            <div className='grid place-items-center size-7 rounded-md'>
            <FaDribbble className='size-4.5' />
          </div>
          </div> 
          {/* Credit */}
          <div className='absolute -translate-x-1/2 left-1/2'>
            FM @ 2025
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
      <section className='h-screen border border-red-500' id='home'>
        <div className='flex flex-col items-center justify-center h-full gap-[60px] border'>
          <div ref={logoRef} className='size-[300px] rounded-[70px] border'></div>
          <h1 id='heading-1' className='text-[80px] text-center leading-none font-thin'>i design and build</h1>
        </div>
      </section>
    </>
  )
}

export default Hero
