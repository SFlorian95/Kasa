import { useState } from 'react'
import ElementDropdown from '../element-dropdown/ElementDropdown'
import './Dropdown.scss'

const Dropdown = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="dropdown" onClick={() => setIsOpen(false)}>
      <span>{ title }</span>
      <ElementDropdown
        content={content}
      />
    </div>
  ) : (
    <div className="dropdown-off" onClick={() => setIsOpen(true)}>
        <span>{ title }</span>
    </div>
  )
}
export default Dropdown
