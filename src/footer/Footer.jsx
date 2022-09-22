import './Footer.scss'
import footerLogo from '../assets/footer-logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} alt="le logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer