import { createContext, useState } from 'react'

export const ActiveRouteContext = createContext()

export const ActiveRouteProvider = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState('Accueil')
  const saveActiveRoute = (name) => setActiveRoute(name)

  return (
    <ActiveRouteContext.Provider value={{ activeRoute, saveActiveRoute }}>
      {children}
    </ActiveRouteContext.Provider>
  )
}
