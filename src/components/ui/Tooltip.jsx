import React from 'react'

const Tooltip = ({ position, label }) => {
  return (
    <span className={`${position} px-2 py-1 text-xs rounded-lg text-nowrap text-indigo-100 border border-[#262333] bg-[#15131C] absolute opacity-0 transition-smooth group-hover:opacity-100 pointer-events-none`}>
      {label}
    </span>
  )
}

export default Tooltip
