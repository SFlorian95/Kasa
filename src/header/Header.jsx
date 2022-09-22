import './Header.scss'
import logo from '../assets/logo.png'
import mobileLogo from '../assets/mobile-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} srcSet={`${mobileLogo} 1000px`} alt="logo du site web Kasa" />
            <nav>
                <Link className="active" to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
  }
  
  export default Header