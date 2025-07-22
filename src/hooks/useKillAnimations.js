import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useKillAnimations = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.globalTimeline.clear()
    }
  }, [])
}

export default useKillAnimations