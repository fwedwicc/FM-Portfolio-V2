import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    );

  }, [])

  return (
    <section id='experience' className='border border-blue-500/20'>
      <div className='md:px-36 px-6 md:py-24 py-9 '>
        {/* Education and Work */}
        <div className='grid grid-cols-2 gap-8'>
          {/* Container: Experiences */}
          <div className='border'>
            <h2>experience.</h2>
            {/* Education */}
            <div className='mt-5'>
              <h4>education.</h4>
              <div className='size-20 rounded-[18px] grid place-content-center border border-green-500/20'>
                <img src="https://placehold.co/30x30" alt="Sample Logo" className='size-12 rounded-md' />
              </div>
              <h5>Quezon City University</h5>
            </div>
          </div>

        </div>
      </div>
      {/* Certifications */}
      <div className='border h-94 w-full px-6'>
        <div className='bg-indigo-200 h-full rounded-4xl grid grid-cols-2 overflow-hidden'>
          {/* Left Content */}
          <div className='border'>

          </div>
          {/* Right Content */}
          <div className='border grid grid-cols-3 gap-7 pr-16'>
            {/* First Column */}
            <div className='border flex flex-col justify-start items-start gap-2 -skew-x-36 -mt-20'>
              <div id='bottom' className='h-auto border' />
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
            </div>
            <div className='border flex flex-col justify-start items-start gap-2 -skew-x-36 -mt-44'>
              <div id='bottom' className='h-auto border' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
              <img src="https://placehold.co/30x17" alt="" className='h-auto w-full bg-green-500/20' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience