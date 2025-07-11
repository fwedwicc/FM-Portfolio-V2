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

  return (
    <section className='px-36 py-30 border border-amber-500/20' id='about'>
      <div className='grid grid-cols-3 p-3 gap-4'>
        <div id='left-container' className='col-span-2 border py-24'>
          hello 1
        </div>
        <div id='right-container' className='border py-24'>
          hello
        </div>
        {/* Container 3 */}
        <div id='left-container' className='group bg-red-500 p-[1px] h-64 rounded-4xl'>
          {/* Glow 3 - Inner */}
          <div className='absolute w-14 h-[170%] bg-indigo-500 opacity-0 group-hover:opacity-90 blur-[5rem] -translate-y-1/2 top-1/2 left-[-9.5rem] transition-smooth'></div>
          {/* Glow 3 - Outer */}
          <div className='absolute w-10 h-[50%] bg-indigo-400 opacity-0 group-hover:opacity-90 blur-[2rem] -translate-y-1/2 top-1/2 left-[-9.5rem] transition-smooth'></div>
          <div className='p-8 w-full h-full bg-gray-900 rounded-4xl'>
            <div className='space-y-4'>
              <h2>i design</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </div>
        {/* Container 4 */}
        <div className='border p-8 h-64 rounded-4xl'>
          {/*  */}
          <div className='space-y-4'>
            <h2>i develop</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
          </div>
        </div>
        {/* Container 5 */}
        <div id='right-container' className='border p-8 h-64 rounded-4xl'>
          {/*  */}
          <div className='space-y-4'>
            <h2>beyond field</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
