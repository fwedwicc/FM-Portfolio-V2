import React from 'react'
import useLenis from '../hooks/useLenis.js'
import { Hero, About, Experience, Expertise, Sidebar } from '../components'

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
      </main>
    </>
  )
}

export default Home
