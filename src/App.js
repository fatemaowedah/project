import React from "react";
import {  BrowserRouter as Router } from "react-router-dom";
import NavMain from "./components/NavMain";
import NavSub from "./components/NavSub";
import Header from "./components/Header";
import Discover from "./components/Discover";
import FeaturedDeals from "./components/FeaturedDeals";
import Collection from "./components/Collection";
import Escapes from "./components/Escapes";
import Activities from "./components/Activities";
import Store from "./components/Store";
import Restaurants from "./components/Restaurants";
import Beauty from "./components/Beauty";
import House from "./components/House";
import Fitness from "./components/Fitness";
import Automotive from "./components/Automotive";
import Footer from "./components/Footer"
// import CopyR from "./components/Copy"
// import history from "./history";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Router history={history}> */}
        <Router >
          <NavMain />
          <NavSub />
          <Header />
          <Discover />
          <FeaturedDeals />
          <Collection />
          <Escapes />
          <Activities />
          <Store />
          <Restaurants />
          <Beauty />
          <House />
          <Fitness />
          <Automotive />
          <Footer />
          {/* <CopyR /> */}
        </Router>
      </div>
    );
  }
}

export default App;
