import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { TbVector, TbCode, TbPiano, TbPencil, TbKeyboard } from "react-icons/tb"
import { ProfileBlur } from '../assets/about'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.globalTimeline.clear()
      return
    }
    gsap.fromTo(
      '#left-container',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#left-container',
          scrub: 1,
          markers: false,
          start: 'top 120%',
          end: 'bottom 60%',
        },
      }
    )
    gsap.fromTo(
      '#right-container',
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#right-container',
          scrub: 1,
          markers: false,
          start: 'top 120%',
          end: 'bottom 60%',
        },
      }
    )

    // === Animate h2s with id "text-animation" ===
    const headings = gsap.utils.toArray('#text-animation')

    headings.forEach((heading) => {
      const split = new SplitText(heading, {
        type: 'lines',
        linesClass: 'split-line'
      })

      // Wrap each line in a container (optional but can help with layout)
      split.lines.forEach(line => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('split-parent')
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        ease: 'circ.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      })
    })

  }, [])

  const GlowContainer = ({ id, variant, children, styles }) => {
    return (
      <div id={id} className={`relative group bg-[#1d1b28] p-[1px] rounded-4xl ${styles}`}>
        {/* Glow 3 - Inner */}
        <div className={`absolute w-14 h-[170%] bg-indigo-600 opacity-0 group-hover:opacity-90 blur-[5rem] -translate-y-1/2 top-1/2 transition-smooth delay-100 pointer-events-none ${variant === 'left' ? 'left-[-9.5rem]' : 'right-[-9.5rem]'}`}></div>
        {/* Glow 3 - Outer */}
        <div className={`absolute w-10 h-[50%] bg-indigo-400 opacity-0 group-hover:opacity-90 blur-[2.5rem] -translate-y-1/2 top-1/2 transition-smooth delay-100 pointer-events-none ${variant === 'left' ? 'left-[-12rem]' : 'right-[-12rem]'}`}></div>
        {/* Glow Border */}
        <div className={`w-full h-full absolute top-0 left-0 -z-10 rounded-4xl opacity-0 group-hover:opacity-100 transition-smooth delay-150 ${variant === 'left' ? 'hero-left-glow' : 'hero-right-glow'}`}></div>
        {/* Content */}
        {children}
      </div>
    )
  }

  return (
    <section className='lg:px-36 md:px-28 px-4 md:py-24 py-4 md:overflow-visible overflow-hidden' id='about'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {/* 'who am i?' */}
        <GlowContainer id='left-container' variant='left' styles='lg:col-span-2 col-span-auto'>
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <h2 id='text-animation'>who am i?</h2>
              <p id='text-animation'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quosorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos corem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos c culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </GlowContainer>
        {/* Profile */}
        <GlowContainer id='right-container' variant='right'>
          <div className='relative w-full lg:h-full h-64 bg-[#15131C] rounded-[31px] overflow-hidden'>
            {/* Image */}
            <img src="https://avatars.githubusercontent.com/u/149291942?v=4" alt="Sample Profile" className='absolute top-0 left-0 object-cover w-full h-full opacity-40' />
            {/* Blur Effect */}
            {/* <img src={ProfileBlur} alt="Profile Blur Effect" className='absolute w-[80%] -bottom-24 z-50 border border-green-500' /> */}
            {/* Content */}
            <div className='absolute w-full bottom-0 p-8'>
              <h4 id='text-animation'>Frederick Moreno</h4>
              <p id='text-animation'>Currently eating noodles.</p>
            </div>
          </div>
        </GlowContainer>
        {/* 'i design' */}
        <GlowContainer id='left-container' variant='left'>
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <div className='inline-flex p-4 rounded-[19px] border border-[#1d1b28] group-hover:border-[#211f2d] shadow-[#110f17] group-hover:shadow-xl transition-smooth'>
                <TbVector className='text-indigo-200/50 group-hover:text-indigo-400 size-8 stroke-[1.2px] transition-smooth' />
              </div>
              <h2 id='text-animation'>i design.</h2>
              <p id='text-animation'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </GlowContainer>
        {/* 'i develop' */}
        <div className={`relative group bg-[#1d1b28] hover:bg-transparent p-[1px] rounded-4xl transition-smooth hover:shadow-2xl shadow-indigo-600/20`}>
          {/* Glow Border */}
          <div className={`w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#191721] via-[#BFADEF] to-[#4F46E5] -z-10 rounded-4xl opacity-0 group-hover:opacity-100 transition-smooth`}></div>
          {/* Content */}
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <div className='inline-flex p-4 rounded-[19px] border border-[#1d1b28] group-hover:border-[#211f2d] shadow-[#110f17] group-hover:shadow-xl transition-smooth'>
                <TbCode className='text-indigo-200/50 group-hover:text-indigo-400 size-8 stroke-[1.2px] transition-smooth' />
              </div>
              <h2 id='text-animation'>i develop.</h2>
              <p id='text-animation'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
            </div>
          </div>
        </div>
        {/* 'beyond field' */}
        <GlowContainer id='right-container' variant='right'>
          <div className='p-8 w-full h-full bg-[#15131C] rounded-[31px]'>
            <div className='space-y-4'>
              <h2 id='text-animation'>beyond field.</h2>
              <p id='text-animation'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus vitae quos culpa, porro reiciendis cumque quasi.</p>
              <div className='flex gap-4'>
                <div className='inline-flex p-4 rounded-[19px] border border-[#1d1b28] group-hover:border-[#211f2d] shadow-[#14111a] group-hover:shadow-xl transition-smooth'>
                  <TbPiano className='text-indigo-200/50 group-hover:text-indigo-400 size-8 stroke-[1px] transition-smooth' />
                </div>
                <div className='inline-flex p-4 rounded-[19px] border border-[#1d1b28] group-hover:border-[#211f2d] shadow-[#14111a] group-hover:shadow-xl transition-smooth'>
                  <TbPencil className='text-indigo-200/50 group-hover:text-indigo-400 size-8 stroke-[1px] transition-smooth' />
                </div>
                <div className='inline-flex p-4 rounded-[19px] border border-[#1d1b28] group-hover:border-[#211f2d] shadow-[#14111a] group-hover:shadow-xl transition-smooth'>
                  <TbKeyboard className='text-indigo-200/50 group-hover:text-indigo-400 size-8 stroke-[1px] transition-smooth' />
                </div>
              </div>
            </div>
          </div>
        </GlowContainer>
      </div>
    </section>
  )
}

export default About
