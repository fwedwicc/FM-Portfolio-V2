import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='md:px-36 px-6 md:py-24 py-9 border border-blue-500/20'>
      <div className='grid grid-cols-2 gap-8'>
        {/* Container: Experiences */}
        <div className='border'>
          <h2>experiences.</h2>
          <h4>education.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae, officiis vitae fuga animi obcaecati molestias fugit, minima soluta non sunt minus aliquid reiciendis dicta eius praesentium tempore cumque delectus.</p>
        </div>
        {/* Container: Tech Stacks and Stats */}
        <div className='border border-green-500/20 rounded-4xl p-8 space-y-8'>
          {/* Tech Stacks */}
          <div>
            <h4>tech stacks.</h4>
            <p>Basically some technologies I am using.</p>
            {/* Tech Icons */}
            <div className='flex items-center flex-wrap gap-2 mt-5'>
              {Array.from({ length: 12 }).map((_, index) => (
                <div className='size-12 rounded-[14px] grid place-content-center border border-green-500/20' key={index}>
                  <img src="https://placehold.co/30x30" alt="Sample Logo" className='size-7 rounded-md' />
                </div>
              ))}
            </div>
          </div>
          {/* Contribution Graph */}
          <div>
            <h4>stats.</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
