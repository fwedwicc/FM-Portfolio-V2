import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting)
        if (visible) {
          setActive(visible.target.id)
        }
      },
      {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.4,
      }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
