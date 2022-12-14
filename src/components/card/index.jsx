import "./index.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import defaultpicture from "../../assets/comingsoon.jpg"

//Le composant Card possède 3 props données par le parent, l'id qui permet de compléter l'URL, puis title et picture qui consituent l'apparence de la carte en fonction du logement concerné.
const Card = ({ title, picture, id }) => {
  return (
    <Link
      to={`/accomodations/${id}`}
      className="card"
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),url(${picture})`,
      }}
    >
      <p className="card__text">{title}</p>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

//En cas d'absence d'image pour le logement affiché par la carte, c'est l'image importée sous le nom de defaultpicture qui s'affiche.
Card.defaultProps = {
  title: "Location",
  picture: `${defaultpicture}`,
}

export default Card
