import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useLenis from '../hooks/useLenis.js'
import useGsapAnimations from '../hooks/useGsapAnimations.js'
import { Sidebar, Hero, About, Experience, Expertise, Project, Contact, Loader } from '../components'

const Home = () => {

  useLenis()
  useGsapAnimations()

  return (
    <>
      {/* <Loader /> */}
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default Home
