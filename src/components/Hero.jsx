import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const logoRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      }
    )
  }, [])

  return (
    <section className='relative h-screen border border-red-500'>
      <h1>Hero section</h1>
      <header>

      </header>
      {/* Logo */}
      <div ref={logoRef} className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 size-44 rounded-4xl border'>

      </div>
    </section>
  )
}

export default Hero
