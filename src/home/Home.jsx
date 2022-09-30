import './Home.scss'
import { useGet } from '../utils/hook'
import Loader from '../loader/Loader'
import Card from '../card/Card'

const Home = () => {
  const { data, isLoading, error } = useGet()

  if (error) return <span>Oups il y a eu un problème</span>

  return (
    <section id="home">
      <div className="banner">
        <span>Chez vous, partout et ailleurs</span>
      </div>
      <div className="gallery">
        {isLoading ? (
          <Loader />
        ) : (
          data.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
    </section>
  )
}

export default Home
