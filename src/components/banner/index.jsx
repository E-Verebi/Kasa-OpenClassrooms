import "./index.css"
import PropTypes from "prop-types"

//Le composant Banner obtient un className supplémentaire en fonction de s'il est chargé sur la page about ou sur une autre page. Ce classname supplémentaire est utilisé pour changer son code CSS en fonction de la page sur laquelle l'utilisateur se situe.
const Banner = ({ text, page }) => {
  return (
    <div className={page.includes("about") ? "intro introAbout" : "intro"}>
      <p className="intro__text">{text}</p>
    </div>
  )
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  text: "",
  page: "",
}

export default Banner
