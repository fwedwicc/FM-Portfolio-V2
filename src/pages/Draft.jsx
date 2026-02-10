import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useLenis from '../hooks/useLenis.js'
import useGsapAnimations from '../hooks/useGsapAnimations.js'
import { DraftHero } from '../components'

const Draft = () => {

  useLenis()
  useGsapAnimations()

  return (
    <>
      {/* <Loader /> */}
      {/* <Sidebar /> */}
      <main className='bg-neutral-50'>
        <DraftHero />
        {/* Sample */}
        <div className='h-screen bg-neutral-50'>

        </div>
        {/* <About />
        <Experience />
        <Expertise />
        <Project />
        <Contact /> */}
      </main>
    </>
  )
}

export default Draft
