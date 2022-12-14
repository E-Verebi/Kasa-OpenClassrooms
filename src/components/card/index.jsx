import "./index.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import defaultpicture from "../../assets/comingsoon.jpg"

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

Card.defaultProps = {
  title: "Location",
  picture: `${defaultpicture}`,
}

export default Card
