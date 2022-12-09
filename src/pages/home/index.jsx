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
        {accomodationsList.length === 0 ? (
          <p className="cardsContainer__warning">
            Plus de logements disponibles ! 😕
          </p>
        ) : (
          accomodationsList.map((accomodation, index) => (
            <Card
              key={`${accomodation.host.name}-${index}`}
              title={accomodation.title}
              id={accomodation.id}
              picture={accomodation.pictures[0]}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
