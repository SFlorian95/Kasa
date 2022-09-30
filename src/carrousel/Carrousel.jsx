import { useState } from 'react'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'
import './Carrousel.scss'

const Carrousel = ({ data }) => {
  const [indexPicture, setIndexPicture] = useState(0)
  const previousPicture = () =>
    setIndexPicture(
      indexPicture === 0 ? data.pictures.length - 1 : indexPicture - 1
    )
  const nextPicture = () =>
    setIndexPicture(
      indexPicture === data.pictures.length - 1 ? 0 : indexPicture + 1
    )

  return (
    <div className="carrousel">
      <img
        className="picture"
        src={data.pictures[indexPicture]}
        alt={`logement n°${indexPicture}`}
      />
      <img
        className="arrow arrow-left"
        src={arrowLeft}
        alt="chevron gauche"
        onClick={() => previousPicture()}
      />
      <img
        className="arrow arrow-right"
        src={arrowRight}
        alt="chevron droit"
        onClick={() => nextPicture()}
      />
      <span>
        {indexPicture + 1}/{data.pictures.length}
      </span>
    </div>
  )
}

export default Carrousel
