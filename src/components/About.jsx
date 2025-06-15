import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const contentRefs = useRef([])

  useEffect(() => {
    const el = sectionRef.current

    // Move section upward while scrolling
    gsap.fromTo(
      el,
      { y: 100 },
      {
        y: -180,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      }
    )

    // Animate content blocks: scale and fade in
    contentRefs.current.forEach((content) => {
      gsap.fromTo(
        content,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: content,
            start: 'top 190%',
            end: 'bottom 85%',
            scrub: true,
            markers: true,
          },
        }
      )
    })
  }, [])

  // Push each ref to contentRefs array only once
  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el)
    }
  }

  return (
    <section ref={sectionRef} className='px-30 py-30 border border-amber-500 bg-amber-500/20'>
      <div className='grid grid-cols-3 border p-4'>
        <div ref={addToRefs} className='col-span-2 border'>
          <h1>About Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis quaerat quas inventore officia saepe optio eum maiores tenetur voluptatem, minus debitis aut vitae, laudantium, quo ea totam architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci sequi nostrum commodi dolores aperiam, cupiditate corrupti reprehenderit impedit officia assumenda quo eligendi nulla expedita placeat vitae</p>
        </div>
        <div ref={addToRefs} className='border'>
          <h1>About Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis quaerat quas inventore officia saepe optio eum maiores tenetur voluptatem, minus debitis aut vitae, laudantium, quo ea totam architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci sequi nostrum commodi dolores aperiam, cupiditate corrupti reprehenderit impedit officia assumenda quo eligendi nulla expedita placeat vitae</p>
        </div>
        <div ref={addToRefs} className='border'>
          <h1>About Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis quaerat quas inventore officia saepe optio eum maiores tenetur voluptatem, minus debitis aut vitae, laudantium, quo ea totam architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci sequi nostrum commodi dolores aperiam, cupiditate corrupti reprehenderit impedit officia assumenda quo eligendi nulla expedita placeat vitae</p>
        </div>
        <div ref={addToRefs} className='border'>
          <h1>About Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis quaerat quas inventore officia saepe optio eum maiores tenetur voluptatem, minus debitis aut vitae, laudantium, quo ea totam architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci sequi nostrum commodi dolores aperiam, cupiditate corrupti reprehenderit impedit officia assumenda quo eligendi nulla expedita placeat vitae</p>
        </div>
        <div ref={addToRefs} className='border'>
          <h1>About Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis quaerat quas inventore officia saepe optio eum maiores tenetur voluptatem, minus debitis aut vitae, laudantium, quo ea totam architecto sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci sequi nostrum commodi dolores aperiam, cupiditate corrupti reprehenderit impedit officia assumenda quo eligendi nulla expedita placeat vitae</p>
        </div>
      </div>
    </section>
  )
}

export default About
