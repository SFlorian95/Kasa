import './ElementDropdown.scss'

const ElementDropdown = ({ description }) => {
  return (
    <div className="element-dropdown">
      {
        Array.isArray(description) ? 
        description.map((element) => (
          <span key={element}>
            {element}
            <br></br>
            </span>
        ))
         : 
        <span>{description}</span>
      }
    </div>
  )
}

export default ElementDropdown
