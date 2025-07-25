import React from 'react'
import { RiUser6Line, RiAwardLine } from "react-icons/ri"
import { TbSmartHome, TbBriefcase2, TbMail, TbBrandTabler, TbMenu } from "react-icons/tb"
import useActiveSection from '../hooks/useActiveSection'
import { Tooltip } from './ui'

const scrollToSection = (e, target) => {
  e.preventDefault()
  const el = document.querySelector(target)
  if (el && window.lenis) {
    window.lenis.scrollTo(el)
  }
}

const Sidebar = () => {

  const active = useActiveSection(['home', 'about', 'experience', 'expertise', 'project', 'contact'])

  const navItems = [
    { id: 'home', label: 'Home', icon: <TbSmartHome className='size-5 stroke-[1.9px]' /> },
    { id: 'about', label: 'About', icon: <RiUser6Line className='size-5 stroke-[-0.1px]' /> },
    { id: 'experience', label: 'Experience', icon: <RiAwardLine className='size-5 stroke-[-0.3px]' /> },
    { id: 'expertise', label: 'Expertise', icon: <TbBrandTabler className='size-5 stroke-[-0.3px]' /> },
    { id: 'project', label: 'Projects', icon: <TbBriefcase2 className='size-5 stroke-[1.9px]' /> },
    { id: 'contact', label: 'Contact', icon: <TbMail className='size-5 stroke-[1.9px]' /> },
  ]

  return (
    <aside className='md:p-6 p-4 fixed h-screen top-0 left-0 flex md:items-center items-start z-50'>
      {/* Toggle for Small Screens */}
      <button className='md:hidden flex items-center justify-center size-11 rounded-[14px] group transition-smooth bg-[#111017] border border-[#201e2c]'>
        <TbMenu className='size-5 stroke-[1.3px] text-white' />
      </button>
      {/* For Medium to Large Screens */}
      <div className='md:flex hidden flex-col gap-1 border border-[#1e1b29] bg-[#15131C] p-1 rounded-[18px]'>
        {navItems.map(({ id, icon, label }) => (
          <div className='inline-flex group relative transition-smooth' key={id}>
            <a href={`#${id}`} onClick={(e) => scrollToSection(e, `#${id}`)}
              className={`size-12 p-[1px] rounded-[14px] group transition-smooth ${active === id ? 'bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] text-white shadow-xl shadow-indigo-400/20' : 'bg-[#201e2c] text-indigo-200/40'
                }`}
            >
              <div className={`w-full h-full grid place-content-center group-hover:bg-[#111017] rounded-[13px] transition-smooth ${active === id ? 'bg-[#111017]' : 'bg-[#17151E]'}`}>
                {icon}
              </div>
            </a>
            {/* Tooltip */}
            <Tooltip position='-translate-y-1/2 top-1/2 left-14' label={label} />
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
