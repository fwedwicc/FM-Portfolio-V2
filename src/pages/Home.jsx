import React from 'react'
import useLenis from '../hooks/useLenis.js'
import { Hero, About, Experience, Sidebar } from '../components'

const Home = () => {
  useLenis()

  return (
    <>
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default Home
