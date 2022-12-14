import "./index.css"
import PropTypes from "prop-types"

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
