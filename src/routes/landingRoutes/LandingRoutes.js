import Home from '../../pages/landing/Home'

export const landingRoutes = [
  {
    path: '/',
    Component: Home,
  },
]

export const getLandingRoute = (pathname) => {
  return landingRoutes.find((route) => route.path === pathname) ?? landingRoutes[0]
}
