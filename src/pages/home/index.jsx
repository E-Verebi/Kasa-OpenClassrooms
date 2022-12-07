import "./index.css"
import accomodationsList from "../../data/accomodationslist"
import Card from "../../components/card"

const Home = () => {
  return (
    <div>
      <div className="intro">
        <p className="intro__text">Chez vous, partout et ailleurs</p>
      </div>
      <div className="cardsContainer">
        {accomodationsList.map((accomodation, index) => (
          <Card
            key={`${accomodation.name}-${index}`}
            title={accomodation.title}
            id={accomodation.id}
            picture={accomodation.pictures[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
