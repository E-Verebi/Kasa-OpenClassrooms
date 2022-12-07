import { useState } from "react"
import "./index.css"
import vector from "../../assets/vector.svg"

const Dropdown = (props) => {
  const currentURL = window.location.href
  console.log(currentURL)
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div
      id={currentURL.includes("about") ? null : "accomodation"}
      className="dropdown"
    >
      <div className="dropdown__header">
        <p className="dropdown__header__title">{props.title}</p>
        <img
          src={vector}
          alt="Arrow"
          className="dropdown__header__arrow"
          onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
          style={{ transform: isOpened ? "rotate(180deg)" : "rotate(0)" }}
        />
      </div>
      {isOpened ? (
        <div className="dropdown__content">
          <p className="dropdown__content__text">{props.children}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
