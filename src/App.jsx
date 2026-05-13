import { useLocation } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { getLandingRoute } from './routes/landingRoutes/LandingRoutes'

const App = () => {
  const { pathname } = useLocation()
  const { Component } = getLandingRoute(pathname)

  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  )
}

export default App
