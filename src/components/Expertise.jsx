import React from 'react'
import { GitHubGrid, GitHubStats } from '../components/ui'

const Expertise = () => {
  return (
    <section id='expertise' className='md:px-36 px-6 md:py-24 py-9 space-y-8 border border-blue-500/20'>
      {/* First Row */}
      <div className='grid grid-cols-2 gap-8'>
        {/* Tech Stacks */}
        <div className='border border-green-500/20 rounded-4xl p-8'>
          <h4>tech stacks.</h4>
          {/* Tech Icons */}
          <div className='flex items-center flex-wrap gap-2 mt-5'>
            {Array.from({ length: 12 }).map((_, index) => (
              <div className='size-12 rounded-[14px] grid place-content-center border border-green-500/20' key={index}>
                <img src="https://placehold.co/30x30" alt="Sample Logo" className='size-7 rounded-md' />
              </div>
            ))}
          </div>
        </div>
        {/* GitHub Stats */}
        <div>
          <GitHubStats username="fwedwicc" />
        </div>
      </div>
      {/* Second Row */}
      <div className='grid grid-cols-3 gap-8'>
        {/* Most used languages */}
        <div className='border'>
          <h5>Most used languages.</h5>
        </div>
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

