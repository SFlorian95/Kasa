import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ActiveRouteContext } from '../utils/context'
import './Card.scss'

const Card = ({ item }) => {
  const { saveActiveRoute } = useContext(ActiveRouteContext)
  const backgroundCardStyle = {
    backgroundImage: `url(${item.cover}), linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      )`,
  }

  return (
    <Link
      to={`/lodging/${item.id}`}
      className="card"
      style={backgroundCardStyle}
      onClick={() => saveActiveRoute('lodging')}
    >
      <span>{item.title}</span>
    </Link>
  )
}

export default Card
