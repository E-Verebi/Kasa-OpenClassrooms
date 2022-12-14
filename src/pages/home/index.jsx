import "./index.css"
import accomodationsList from "../../data/accomodationslist"
import Card from "../../components/card"
import Banner from "../../components/banner"

const Home = () => {
  return (
    <div>
      <Banner
        text="Chez vous, partout et ailleurs"
        page={window.location.pathname}
      />
      <div className="cardsContainer">
        {
          //Si rien ne se trouve dans la liste de logements (donc que accomodationsList.length === 0), alors le message "Plus de logements disponibles ! 😕" s'affichera dans cardsContainer
          accomodationsList.length === 0 ? (
            <p className="cardsContainer__warning">
              Plus de logements disponibles ! 😕
            </p>
          ) : (
            //Un mapping est effectué pour chaque élément du tableau accomodationsList, en d'autres termes, pour chaque logement. Les propriétés suivantes sont passées à Card: id (un mélange du nom de l'hôte et de l'index du logement), title, key, et picture (qui correspond à la première image de pictures)
            accomodationsList.map((accomodation, index) => (
              <Card
                key={`${accomodation.host.name}-${index}`}
                title={accomodation.title}
                id={accomodation.id}
                picture={accomodation.pictures[0]}
              />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Home
