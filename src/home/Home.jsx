import './Home.scss'
import banner from '../assets/banner.png'
import Card from '../card/Card'

const Home = () => {
  return (
    <div className="home">
      <div className='banner'>
        <img src={banner} alt="" /> 
        <span>Chez vous, partout et ailleurs</span> 
      </div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
