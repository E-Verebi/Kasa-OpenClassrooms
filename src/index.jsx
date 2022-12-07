import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import Accomodation from "./pages/accomodation"
import About from "./pages/about"
import Error from "./pages/error"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <div className="wrapper">
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/accomodations/:id">
              <Accomodation />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)
