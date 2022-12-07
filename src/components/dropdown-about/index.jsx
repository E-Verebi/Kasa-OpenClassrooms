import { useState } from "react"
import "./index.css"
import vector from "../../assets/vector.svg"

const DropdownAbout = (props) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className="dropdownAbout">
      <div className="dropdownAbout__header">
        <p className="dropdownAbout__header__title">{props.title}</p>
        <img
          src={vector}
          alt="Arrow"
          className="dropdownAbout__header__arrow"
          onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
          style={{ transform: isOpened ? "rotate(180deg)" : "rotate(0)" }}
        />
      </div>
      {isOpened ? (
        <div className="dropdownAbout__content">
          <p className="dropdownAbout__content__text">{props.children}</p>
        </div>
      ) : null}
    </div>
  )
}

export default DropdownAbout

/*transform: scaleX(-1)*/
