import "./index.css"
import { NavLink } from "react-router-dom"
import logo from "../../assets/orange-logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          //Navlink permet l'utilisation d'activeClassName, permettant de rajouter une classe à l'élément s'il est actif. Ici, nous nous en servons pour ajouter la classe active qui permettra de souligner le lien lorsque l'utilisateur se trouve sur la page correspondante.
          exact
          to="/"
          activeClassName="active"
          className="header__nav__navlink"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="active"
          className="header__nav__navlink"
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
