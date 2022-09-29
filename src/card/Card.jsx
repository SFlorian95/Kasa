import './Card.scss'
import { Link } from 'react-router-dom'
const Card = ({ data }) => {
    return (
      <Link to={`/lodging/${data.id}`}>
        <div className="card">
        <span className="card-title">
          <img src={data.cover} alt={data.title}/>
          {data.title}
        </span>
      </div>
      </Link>
    )
  }

export default Card