import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)

const useGsapAnimations = () => {
  useEffect(() => {

    // Kill all animations in mobile view
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.globalTimeline.clear()
      return
    }

    // ------------------ Global Animations ------------------

    const headings = gsap.utils.toArray('#text-animation')

    headings.forEach((heading) => {
      const split = new SplitText(heading, {
        type: 'lines',
        linesClass: 'split-line'
      })

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

    // ------------------ // Global Animations ------------------


    // ------------------ Hero Animations ------------------

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

    // ------------------ // Hero Animations ------------------

    // ------------------ About Animations ------------------

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

    // ------------------ // About Animations ------------------

    // ------------------ Experience Animations ------------------

    // ------------------ // Experience Animations ------------------

    // ------------------ Expertise Animations ------------------

    // ------------------ // Expertise Animations ------------------

    // ------------------ Projects Animations ------------------

    // ------------------ // Projects Animations ------------------

    // ------------------ Contact/Footer Animations ------------------

    gsap.fromTo(
      '#footer',
      { y: 150 },
      {
        y: 0,
        ease: 'none',
        duration: 3,
        scrollTrigger: {
          trigger: '#footer',
          scrub: 1,
          markers: false,
          start: 'top 110%',
          end: 'top 80%',
        },
      }
    )

    // ------------------ // Contact/Footer Animations ------------------


  }, [])
}

export default useGsapAnimations