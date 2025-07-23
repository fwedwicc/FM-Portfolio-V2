import React from 'react'
import useLenis from '../hooks/useLenis.js'
import useKillAnimations from '../hooks/useKillAnimations.js'
import { Sidebar, Hero, About, Experience, Expertise, Project, Contact } from '../components'

const Home = () => {
  useLenis()
  // useKillAnimations()

  return (
    <>
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        {/* <Expertise />
        <Project />
        <Contact /> */}
      </main>
    </>
  )
}

export default Home
