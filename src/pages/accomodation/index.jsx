import "./index.css"
import Dropdown from "../../components/dropdown"
import Tag from "../../components/tag"
import { useParams, Redirect } from "react-router-dom"
import accomodationsList from "../../data/accomodationslist"
import redstar from "../../assets/redstar.png"
import greystar from "../../assets/greystar.png"
import Gallery from "../../components/gallery"

const Accomodation = () => {
  //Les lignes suivantes vont permettre de vérifier que l'id situé dans l'URL créé par Card correspond bien à un objet dans accomodationsList
  const accomodationId = useParams().id
  const selectedAccomodation = accomodationsList.find(
    (acc) => acc.id === accomodationId
  )
  //Si selectedAccomodation === undefined, cela signifie qu'accomodationsList.find situé au dessus n'a rien trouvé, donc que le logement n'existe pas. Dans ce cas, Accomodation retourne un Redirect vers /error, qui emmènera l'utilisateur sur la page d'erreur 404.
  if (selectedAccomodation === undefined) {
    return <Redirect to="/error" />
  }

  //Les variables suivantes déterminent le nombre d'étoiles rouges et grises dont l'affichage est nécessaire.
  const rating = parseInt(selectedAccomodation.rating)
  const greyStars = 5 - rating
  return (
    <div>
      <Gallery
        images={
          //La prop passée est l'ensemble des images du logement correspondant à la page (selectedAccomodation.pictures)
          selectedAccomodation.pictures
        }
      />
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
            {
              //Ce mapping affiche un composant Tag pour chaque éléments situé dans l'array tags de selectedAccomodation
              selectedAccomodation.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))
            }
          </div>
        </div>
        <div className="mainContainer__subCon2">
          <div className="mainContainer__subCon2__host">
            <p className="mainContainer__subCon2__host__name">
              {
                //Les lignes suivantes permettent de séparer les nom et prénom de l'hôte grâce à l'espace entre les deux (" "), et d'effectuer un retour à la ligne entre les deux.
                selectedAccomodation.host.name.split(" ")[0]
              }
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
            {
              //Ces mappings permettent d'afficher d'abord le bon nombre d'étoiles rouges, puis le bon nombre d'étoiles grises.
              [...Array(rating)].map((e, index) => (
                <img
                  className="star"
                  src={redstar}
                  alt="red star"
                  key={index}
                />
              ))
            }
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
          {
            //Ce dernier mapping permet d'afficher les équipements du logement dans le composant Dropdown
            selectedAccomodation.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))
          }
        </Dropdown>
      </div>
    </div>
  )
}

export default Accomodation
