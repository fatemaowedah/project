import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/17.jpg";
import tour2 from "../img/18.jpg";
import tour3 from "../img/19.jpg";
import tour4 from "../img/20.jpg";
class Store extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Store</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="Giorgio Armani Si Eau De Parfum (W) 30ml"
            title=" Giorgio Armani Si EDP 30ml for $87 from Parallel Imported"
            countPurchase="7"
            priceValue="100"
            currPrice="87"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Ramesses Elite Spring Fresh Egyptian Cotton Queen Sateen Sheet Set 1500TC - Eight Colours Available"
            title="Egyptian cotton sateen sheet set for $100.80 from Kingtex International."
            countPurchase="3"
            priceValue="218"
            currPrice="100.80"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Water-Resistant Auzland Unisex 'Calypso' Classic Mini Sheepskin UGG Boots - Five Colours & Ten Sizes Available"
            title="Unisex 'Calypso' classic mini sheepskin UGG boots for $109 from GHN Trading."
            paragraph="GHN Trading"
            countPurchase="2"
            priceValue="139"
            currPrice="109"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Workspace Executive Chair with Footrest"
            title="Workspace executive chair with footrest for $219 from GMART."
            countPurchase="4"
            priceValue="329"
            currPrice="219"
          />
        </div>
      </div>
    );
  }
}

export default Store;
