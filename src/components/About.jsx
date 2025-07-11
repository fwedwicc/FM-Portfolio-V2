import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  const sectionRef = useRef(null)

  useEffect(() => {
    // const el = sectionRef.current

    // gsap.fromTo(
    //   el,
    //   { y: 100 },
    //   {
    //     y: -180,
    //     ease: 'none',
    //     duration: 3,
    //     scrollTrigger: {
    //       trigger: el,
    //       toggleActions: 'restart pause reverse pause',
    //       start: 'top bottom',
    //       end: 'bottom top',
    //       scrub: 1,
    //       markers: false,
    //     },
    //   }
    // )

    gsap.fromTo(
      '#left-container',
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#left-container',
          scrub: 1,
          markers: false,
          start: 'top 110%',
          end: 'bottom 80%',
        },
      }
    )
    gsap.fromTo(
      '#right-container',
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#right-container',
          scrub: 1,
          markers: false,
          start: 'top 110%',
          end: 'bottom 80%',
        },
      }
    )

  }, [])

  const GlowContainer = ({ id, variant, children }) => {
    return (
      <div id={id} className='relative group bg-[#262333] p-[1px] h-64 rounded-4xl'>
        {/* Glow 3 - Inner */}
        <div className={`absolute w-14 h-[170%] bg-indigo-500 opacity-0 group-hover:opacity-90 blur-[5rem] -translate-y-1/2 top-1/2 transition-smooth ${variant === 'left' ? 'left-[-9.5rem]' : 'right-[-9.5rem]'}`}></div>
        {/* Glow 3 - Outer */}
        <div className={`absolute w-10 h-[50%] bg-indigo-400 opacity-0 group-hover:opacity-90 blur-[2rem] -translate-y-1/2 top-1/2 transition-smooth ${variant === 'left' ? 'left-[-11rem]' : 'right-[-11rem]'}`}></div>
        {/* Glow Border */}
        <div className={`w-full h-full absolute top-0 left-0 from-[#191721] via-[#BFADEF] to-[#4F46E5] -z-10 rounded-4xl opacity-0 group-hover:opacity-100 transition-smooth ${variant === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`}></div>
        {/* Content */}
        {children}
      </div>
    )
  }

  return (
    <section className='md:px-36 px-6 py-30 border border-amber-500/20' id='about'>
      <div className='grid md:grid-cols-3 grid-cols-1 p-3 gap-4'>
        <div id='left-container' className='md:col-span-2 col-span-auto border py-24'>
          hello 1
        </div>
        <div id='right-container' className='border py-24'>
          hello
        </div>
        {/* Container 3 */}
        <GlowContainer id='left-container' variant='left'>
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <h2>i design</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </GlowContainer>
        {/* Container 4 */}
        <div className='border p-8 h-64 rounded-4xl'>
          {/*  */}
          <div className='space-y-4'>
            <h2>i develop</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
          </div>
        </div>
        {/* Container 5 */}
        <GlowContainer id='right-container' variant='right'>
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <h2>beyond field</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </GlowContainer>
      </div>
    </section>
  )
}

export default About
