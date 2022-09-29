import './Lodging.scss'
import { useParams } from 'react-router-dom'
import { useGet } from '../utils/hook'
import Dropdown from '../dropdown/Dropdown'
import Loader from '../loader/Loader'
import Carrousel from '../carrousel/Carrousel'
import Tags from '../tags/Tags'
import Stars from '../stars/Stars'



const Lodging = () => {
  const { id } = useParams()
  const findById = {
    method: 'find',
    callback: (item) => item.id === id,
  }
  const { data, isLoading, error } = useGet('/lodgings.json', findById)

  const item = [
    {
        title: 'Description',
        description: data.description
    },
    {
        title: 'Equipements',
        description: data.equipments
    }
  ]

  if (error) {
    return <span>error {error}</span>
  }

  return isLoading ? (
    <Loader />
  ): (
    <section id="lodging">
    <Carrousel data={data} />
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
            <Tags tags={data.tags} />
        </div>
        <div className="sub-header">
            <div className="host">
              <span>{data.host.name}</span>
              <img src={data.host.picture} alt={data.host.name} />
            </div>
            <Stars rating={data.rating} />
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown
          item={item}
        />
        <Dropdown
          item={item}
        />
      </div>
    </div>
  </section>
  )
}
export default Lodging
