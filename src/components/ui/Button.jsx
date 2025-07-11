import React from 'react'

const Button = ({ variant, label }) => {

  const outerBase = 'bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] group hover:shadow-xl hover:shadow-indigo-400/10 p-[1px] rounded-[10px] text-sm transition-smooth cursor-pointer'
  const innerBase = 'flex px-3 py-2 text-white rounded-[10px] transition-smooth'
  const primary = 'bg-indigo-600 group-hover:bg-indigo-700'
  const secondary = 'bg-[#17151E] group-hover:bg-[#111017]'

  return (
    <button className={`${outerBase}`}>
      <div className={`${innerBase} ${variant === 'primary' ? primary : secondary}`}>
        {label}
      </div>
    </button>
  )
}

export default Button
