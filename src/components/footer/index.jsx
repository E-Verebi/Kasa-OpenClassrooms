import "./index.css"
import logo from "../../assets/white-logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
