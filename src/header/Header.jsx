import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useContext } from 'react'
import { ActiveRouteContext } from '../utils/context'
import './Header.scss'

const routes = [
  {
    name: 'Accueil',
    path: '/',
  },
  {
    name: 'A Propos',
    path: '/about',
  },
]

const Header = () => {
  const { activeRoute, saveActiveRoute } = useContext(ActiveRouteContext)

  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          alt="Logo home"
          onClick={() => saveActiveRoute('Accueil')}
        />
      </Link>
      <div>
        {routes.map((route) => (
          <Link
            key={route.name}
            className={activeRoute === route.name ? 'link active' : 'link'}
            to={route.path}
            onClick={() => saveActiveRoute(route.name)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
export default Header
