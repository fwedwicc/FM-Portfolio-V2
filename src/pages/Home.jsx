import React from 'react'
import useLenis from '../hooks/useLenis.js'
import { Sidebar, Hero, About, Experience, Expertise, Project, Contact } from '../components'

const Home = () => {
  useLenis()

  return (
    <>
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
