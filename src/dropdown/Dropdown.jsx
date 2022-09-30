import { useState } from 'react'
import arrowUp from '../assets/arrow_up.png'
import arrowDown from '../assets/arrow_down.png'
import './Dropdown.scss'

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true)

  const description = (data) =>
    Array.isArray(data) ? (
      <p>
        {data.map((element) => (
          <span key={element}>
            {element}
            <br></br>
          </span>
        ))}
      </p>
    ) : (
      <p>{data}</p>
    )

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <span>{item.title}</span>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? description(item.description) : ''}
    </div>
  )
}

export default Dropdown
