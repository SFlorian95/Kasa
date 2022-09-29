import { useState } from 'react'
import ElementDropdown from '../element-dropdown/ElementDropdown'
import './Dropdown.scss'

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="dropdown" onClick={() => setIsOpen(false)}>
      <span>{ item.title }</span>
        <ElementDropdown
          description={item.description}
        />
    </div>
  ) : (
    <div className="dropdown-off" onClick={() => setIsOpen(true)}>
        <span>{ item.title }</span>
    </div>
  )
}
export default Dropdown
