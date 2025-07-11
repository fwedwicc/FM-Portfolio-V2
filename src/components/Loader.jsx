import React from 'react'

const Loader = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#191726] flex items-center justify-center transition-opacity duration-700 ${loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent"></div>
    </div>
  )
}

export default Loader
