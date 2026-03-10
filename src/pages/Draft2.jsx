import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useLenis from '../hooks/useLenis.js'
import useGsapAnimations from '../hooks/useGsapAnimations.js'
import { DraftSidebar, DraftHero2 } from '../components'

const Draft2 = () => {

  useLenis()
  useGsapAnimations()

  return (
    <>
      {/* <Loader /> */}
      <DraftSidebar />
      <main className='bg-neutral-50'>
        <DraftHero2 />
        {/* Sample */}
        <div className='h-screen bg-neutral-50'>
        </div>
      </main>
    </>
  )
}

export default Draft2
