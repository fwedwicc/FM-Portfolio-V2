import React from 'react'
import useLenis from '../hooks/useLenis.js'
import useGsapAnimations from '../hooks/useGsapAnimations.js'
import { Sidebar, Hero, About, Experience, Expertise, Project, Contact } from '../components'

const Home = () => {
  useLenis()
  useGsapAnimations()

  return (
    <>
      <Sidebar />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Expertise />
        <Project />
        {/* <Contact /> */}
      </main>
    </>
  )
}

export default Home
