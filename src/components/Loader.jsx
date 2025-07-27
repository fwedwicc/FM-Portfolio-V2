import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 4000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#15131C] text-white z-[9999] grid place-items-center"
        >
          <h1 className="text-2xl font-bold animate-pulse">Loading...</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
