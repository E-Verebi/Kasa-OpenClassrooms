import "./index.css"
import { Link } from "react-router-dom"

const Error = () => {
  //Le Link présent dans ce composant permet de ramener l'utilisateur vers '/' qui correspond à la page d'accueil.
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
