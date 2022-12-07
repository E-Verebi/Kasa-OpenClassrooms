import "./index.css"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error">
      <p className="error__404">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={`/`} className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
