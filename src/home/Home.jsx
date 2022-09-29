import './Home.scss'
import banner from '../assets/banner.png'
import Card from '../card/Card'
import { useGet } from '../utils/hook'

const Home = () => {

  const { data, isLoading, error } = useGet()

  if (error) {
    return <span>error {error}</span>
  }

  return (
    <div className="home">
      <div className="banner">
        <img src={banner} alt="bannière de la page d'accueil contenant le titre : Chez vous, partout et ailleurs" />
        <span>Chez vous, partout et ailleurs</span>
      </div>
      <div className="card-container">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          data.map((element) => <Card key={element.id} data={element} />)
        )}
      </div>
    </div>
  )
}

export default Home
