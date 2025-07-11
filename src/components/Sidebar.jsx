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

  const active = useActiveSection(['home', 'about', 'experience'])

  const navItems = [
    { id: 'home', label: 'Home', icon: <RiHome5Line className='size-5' /> },
    { id: 'about', label: 'About', icon: <RiUser6Line className='size-5 stroke-[0.3px]' /> },
    { id: 'experience', label: 'Experience', icon: <RiAwardLine className='size-5' /> },
    { id: 'project', label: 'Projects', icon: <RiBriefcaseLine className='size-5' /> },
    { id: 'contact', label: 'Contact', icon: <RiSendPlane2Line className='size-5' /> },
  ]

  return (
    <aside className='px-6 border border-green-500/20 fixed h-screen flex items-center z-50'>
      <div className='flex flex-col gap-1 border border-[#262333] bg-[#15131C] p-1 rounded-[18px]'>
        {navItems.map(({ id, icon, label }) => (
          <div className='inline-flex group relative transition-smooth' key={id}>
            <a href={`#${id}`} onClick={(e) => scrollToSection(e, `#${id}`)}
              className={`size-12 p-[1px] rounded-[14px] group transition-smooth ${active === id ? 'bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] text-white shadow-xl shadow-indigo-400/20' : 'bg-[#262333] text-indigo-200/40'
                }`}
            >
              <div className='w-full h-full grid place-content-center bg-[#17151E] group-hover:bg-[#111017] rounded-[13px] transition-smooth'>
                {icon}
              </div>
            </a>
            {/* Tooltip */}
            <span className={`px-2 py-1 text-xs rounded-lg text-nowrap text-indigo-100 border border-[#262333] bg-[#15131C] absolute -translate-y-1/2 top-1/2 left-14 transform opacity-0 transition-opacity ease-in-out duration-150 group-hover:opacity-100 pointer-events-none`}>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
