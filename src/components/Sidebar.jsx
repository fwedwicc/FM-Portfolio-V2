import React from 'react'
import { HiOutlineHome } from "react-icons/hi2"
import { RiHome5Line, RiUser6Line, RiAwardLine, RiSendPlane2Line, RiBriefcaseLine } from "react-icons/ri"
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
    { id: 'home', label: 'Home', icon: <RiHome5Line className='size-5' /> },
    { id: 'about', label: 'About', icon: <RiUser6Line className='size-5 stroke-[0.3px]' /> },
    { id: 'experience', label: 'Experience', icon: <RiAwardLine className='size-5' /> },
    { id: 'project', label: 'Projects', icon: <RiBriefcaseLine className='size-5' /> },
    { id: 'contact', label: 'Contact', icon: <RiSendPlane2Line className='size-5' /> },
  ]

  return (
    <aside className='px-10 border fixed h-screen flex items-center z-50'>
      <div className='flex flex-col gap-1 border p-1 rounded-[16px]'>
       {navItems.map(({ id, icon, label }) => (
          <div className='inline-flex group relative' key={id}>
            <a href={`#${id}`} onClick={(e) => scrollToSection(e, `#${id}`)}
              className={`p-3.5 rounded-[14px] border transition-colors ${
                active === id ? 'border-red-500' : 'border-black'
              }`}
            >
              {icon}
            </a>
            {/* Tooltip */}
            <span className={`px-2 py-1 text-sm rounded-lg text-nowrap border absolute transform -translate-y-1/2 top-1/2 left-15 transform opacity-0 transition-opacity ease-in-out duration-150 group-hover:opacity-100 pointer-events-none`}>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
