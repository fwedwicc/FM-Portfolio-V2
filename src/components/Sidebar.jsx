import React from 'react'
import { HiOutlineHome } from "react-icons/hi2"
import useActiveSection from '../hooks/useActiveSection'

const scrollToSection = (e, target) => {
  e.preventDefault()
  const el = document.querySelector(target)
  if (el && window.lenis) {
    window.lenis.scrollTo(el)
  }
}

const Sidebar = () => {

   const active = useActiveSection(['home', 'about', 'services', 'contact'])

  const navItems = [
    { id: 'home', icon: <HiOutlineHome className='size-5' /> },
    { id: 'about', icon: <HiOutlineHome className='size-5' /> },
    { id: 'services', icon: <HiOutlineHome className='size-5' /> },
    { id: 'contact', icon: <HiOutlineHome className='size-5' /> },
  ]

  return (
    <aside className='px-10 border fixed h-screen flex items-center z-50'>
      <div className='flex flex-col gap-1 border p-1 rounded-[16px]'>
       {navItems.map(({ id, icon }) => (
          <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, `#${id}`)}
            className={`p-3.5 rounded-[14px] border transition-colors ${
              active === id ? 'border-red-500' : 'border-black'
            }`}
          >
            {icon}
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
