import { useState } from "react"
import "./index.css"
import vector from "../../assets/vector.svg"

const Dropdown = (props) => {
  //Dropdown a une apparence différente en fonction de la page sur laquelle il est appelé, d'où la constante currentURL qui va permettre de vérifier de changer cette apparence en fonction de si l'utilisateur se trouve sur la page about ou non.
  const currentURL = window.location.href
  //Le state isOpened représente l'ouverture de ce composant déroulant et est par défaut réglé sur false (fermé)
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div
      className={
        currentURL.includes("about") ? "dropdown" : "accomodation dropdown"
      }
    >
      <div className="dropdown__header">
        <p className="dropdown__header__title">{props.title}</p>
        <img
          src={vector}
          alt="Arrow"
          className="dropdown__header__arrow"
          //Si l'utilisateur clique sur la flèche, le menu s'ouvre ou se ferme (isOpened passe en true s'il est false et vice-versa)
          onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
          //La flèche change également de sens en fonction du state
          style={{ transform: isOpened ? "rotate(180deg)" : "rotate(0)" }}
        />
      </div>

      {
        //La section déroulante s'affiche uniquement si le state isOpened est true, autrement, la condition débouche sur null (rien ne s'affiche)
        isOpened ? (
          <div className="dropdown__content">
            <p className="dropdown__content__text">{props.children}</p>
          </div>
        ) : null
      }
    </div>
  )
}

export default Dropdown
