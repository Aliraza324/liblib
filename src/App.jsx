import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { pageFade } from './animation/animation'
import GlobalLoader from './components/common/GlobalLoader'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { getLandingRoute } from './routes/landingRoutes/LandingRoutes'

const App = () => {
  const { pathname } = useLocation()
  const { Component } = getLandingRoute(pathname)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false)
    }, 900)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <GlobalLoader />}</AnimatePresence>
      <motion.div
        key={pathname}
        variants={pageFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Header />
        <Component />
        <Footer />
      </motion.div>
    </>
  )
}

export default App
