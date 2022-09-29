 import './About.scss'
 import banner from '../assets/about-banner.png'
 import Dropdown from '../dropdown/Dropdown'

 const dropdownContent = [
    {
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

 const About = () => {
     return (
        <div id='about' className="about">
            <div className="banner">
                <img src={banner} alt="bannière de la page à propos" />
            </div>
            {dropdownContent.map((item, index) => (
                <Dropdown
                key={`${item.title}-${index}`}
                item={item}
                />
            ))}
        </div>
     )
 } 
 export default About