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
      '#box-1',
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#box-1',
          scrub: 1,
          markers: false,
          start: 'top 110%',
          end: 'bottom 80%',
        },
      }
    )
    gsap.fromTo(
      '#box-2',
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#box-2',
          scrub: 1,
          markers: false,
          start: 'top 110%',
          end: 'bottom 80%',
        },
      }
    )

  }, [])

  return (
    <section className='px-48 py-30 border border-amber-500/20' id='about'>
      <div className='grid grid-cols-3 p-3 gap-4'>
        <div id='box-1' className='col-span-2 border py-24'>
          hello
        </div>
        <div id='box-2' className='border py-24'>
          hello
        </div>
        <div id='box-1' className='border py-24'>
          hello
        </div>
        <div id='box-2' className='col-span-2 border py-24'>
          hello
        </div>
      </div>
    </section>
  )
}

export default About
