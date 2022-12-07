import "./index.css"
import { NavLink } from "react-router-dom"
import logo from "../../assets/orange-logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__nav__navlink">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__nav__navlink">
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
