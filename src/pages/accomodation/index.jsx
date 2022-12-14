import "./index.css"
import Dropdown from "../../components/dropdown"
import Tag from "../../components/tag"
import { useParams, Redirect } from "react-router-dom"
import accomodationsList from "../../data/accomodationslist"
import redstar from "../../assets/redstar.png"
import greystar from "../../assets/greystar.png"
import Gallery from "../../components/gallery"

const Accomodation = () => {
  const accomodationId = useParams().id
  console.log(accomodationId)
  const selectedAccomodation = accomodationsList.find(
    (acc) => acc.id === accomodationId
  )
  if (selectedAccomodation === undefined) {
    return <Redirect to="/error" />
  }
  const rating = parseInt(selectedAccomodation.rating)
  const greyStars = 5 - rating
  return (
    <div>
      <Gallery images={selectedAccomodation.pictures} />
      <div className="mainContainer">
        <div className="mainContainer__subCon1">
          <div className="mainContainer__subCon1__title">
            <p className="mainContainer__subCon1__title__accomodation">
              {selectedAccomodation.title}
            </p>
            <p className="mainContainer__subCon1__title__location">
              {selectedAccomodation.location}
            </p>
          </div>
          <div className="mainContainer__subCon1__tagsContainer">
            {selectedAccomodation.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="mainContainer__subCon2">
          <div className="mainContainer__subCon2__host">
            <p className="mainContainer__subCon2__host__name">
              {selectedAccomodation.host.name.split(" ")[0]}
              <br />
              {selectedAccomodation.host.name.split(" ")[1]}
            </p>
            <img
              className="mainContainer__subCon2__host__pic"
              src={selectedAccomodation.host.picture}
              alt="host"
            />
          </div>
          <div className="mainContainer__subCon2__starsContainer">
            {[...Array(rating)].map((e, index) => (
              <img className="star" src={redstar} alt="red star" key={index} />
            ))}
            {[...Array(greyStars)].map((e, index) => (
              <img
                className="star"
                src={greystar}
                alt="grey star"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default Accomodation
