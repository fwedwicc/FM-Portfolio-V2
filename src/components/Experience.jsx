import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='md:px-36 px-6 md:py-24 py-9 border border-blue-500/20'>
      <div className='grid grid-cols-2 gap-8'>
        {/* Container: Experiences */}
        <div className='border'>
          <h2>educs.</h2>
          {/* Education */}
          <div className='mt-5'>
            <h4>education.</h4>
            <div className='size-20 rounded-[18px] grid place-content-center border border-green-500/20'>
              <img src="https://placehold.co/30x30" alt="Sample Logo" className='size-12 rounded-md' />
            </div>
            <h5>Quezon City University</h5>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience