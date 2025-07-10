import React from 'react'
import useLenis from '../hooks/useLenis.js'
import { Hero, About, Tester, Sidebar } from '../components'

const Home = () => {
  useLenis()

  return (
    <>
    <Sidebar />
    <main>
      <Hero />
      <About />
      <Tester />
    </main>
    </>
  )
}

export default Home
