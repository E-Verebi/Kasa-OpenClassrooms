import "./index.css"
import Dropdown from "../../components/dropdown"
import { useParams, Redirect } from "react-router-dom"
import accomodationsList from "../../data/accomodationslist"

const Accomodation = () => {
  const accomodationId = useParams().id
  console.log(accomodationId)
  const selectedAccomodation = accomodationsList.find(
    (acc) => acc.id === accomodationId
  )
  console.log(selectedAccomodation)
  if (selectedAccomodation === undefined) {
    return <Redirect to="/error" />
  }
  return (
    <div className="accCardsContainer">
      <Dropdown title="Description">
        {selectedAccomodation.description}
      </Dropdown>
      <Dropdown title="Équipements">
        {selectedAccomodation.equipments.map((equipment, index) => (
          <p key={index}>{equipment}</p>
        ))}
      </Dropdown>
    </div>
  )
}

export default Accomodation
