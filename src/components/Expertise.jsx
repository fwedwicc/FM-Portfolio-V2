import React from 'react'
import { Tooltip, GitHubGrid, GitHubStats, GitHubLangs } from '../components/ui'
import { JavaScriptLogo } from '../assets/expertise'

const Expertise = () => {
  return (
    <section id='expertise' className='md:px-36 px-6 md:py-24 py-9 space-y-10 border border-blue-500/20'>
      {/* <h2 className='text-center pb-6'>expertise.</h2> */}
      {/* First Row */}
      <div className='grid grid-cols-2 gap-7'>
        {/* Tech Stacks */}
        <div className='rounded-4xl p-[1px] bg-gradient-to-b from-[#BFADEF] to-[#4F46E5] shadow-2xl shadow-indigo-500/10'>
          <div className='h-full w-full p-8 bg-[#15131b] rounded-[31px]'>
            <h5>tech stacks.</h5>
            {/* Tech Icons */}
            <div className='flex items-center flex-wrap gap-1.5 mt-5'>
              {Array.from({ length: 1 }).map((_, index) => (
                <div className='group relative size-12 rounded-[14px] grid place-content-center border border-[#242030]/80 hover:border hover:border-indigo-400/50 transition-smooth' key={index}>
                  <img src={JavaScriptLogo} alt="Sample Logo" className='size-8 rounded-lg z-20' />
                  <div className='size-4 opacity-0 group-hover:opacity-100 group-hover:bg-indigo-500 bg-indigo-200/40 absolute bottom-0 -translate-x-1/2 left-1/2 blur-md transition-smooth' />
                  <Tooltip position="-translate-x-1/2 left-1/2 -bottom-8" label='JavaScript' />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* GitHub Stats */}
        <GitHubStats username="fwedwicc" />
      </div>
      {/* Second Row */}
      <div className='grid grid-cols-3 gap-8'>
        {/* Most used languages */}
        <GitHubLangs username="fwedwicc" />
        {/* GitHub Grid Contributions */}
        <div className='col-span-2 space-y-2'>
          <GitHubGrid username="fwedwicc" />
          <div className='flex items-center gap-2'>
            <span className='text-xs text-indigo-100'>Less</span>
            <div className='flex items-center gap-[2.5px]'>
              {[0, 1, 2, 3, 4].map((item, index) => (
                <div className={`w-3.5 h-3.5 rounded-sm ${item === 0 ? 'bg-gray-500/10' : item === 1 ? 'bg-indigo-900/70' : item === 2 ? 'bg-indigo-700/90' : item === 3 ? 'bg-indigo-500' : 'bg-indigo-300'}`} key={index} />
              ))}
            </div>
            <span className='text-xs text-indigo-100'>More</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise

