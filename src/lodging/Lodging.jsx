import { useParams } from 'react-router-dom'
import Carrousel from '../carrousel/Carrousel'
import { useGet } from '../utils/hook'
import Loader from '../loader/Loader'
import Stars from '../stars/Stars'
import Tags from '../tags/Tags'
import Dropdown from '../dropdown/Dropdown'
import Error from '../error/Error'
import './Lodging.scss'

const Lodging = () => {
  const { id } = useParams()
  const findById = {
    method: 'find',
    callback: (item) => item.id === id,
  }
  const { data, isLoading, error } = useGet('/lodgings.json', findById)

  if (error) {
    return <div>Oups! Il y a une erreur...</div>
  }

  return isLoading ? (
    <Loader />
  ) : data ? (
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
            item={{ title: 'Description', description: data.description }}
          />
          <Dropdown
            item={{ title: 'Equipements', description: data.equipments }}
          />
        </div>
      </div>
    </section>
  ) : (
    <Error />
  )
}

export default Lodging
