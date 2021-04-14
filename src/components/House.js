import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/34.jpg";
import tour2 from "../img/35.jpg";
import tour3 from "../img/36.jpg";
import tour4 from "../img/33.jpg";
class House extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Activities, Events & Outdoors </span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="15-Pack of Baby Bath Bombs Gift Box - Four Options Available"
            title=" 15-pack of baby bath bombs gift box for $20 from Bath Bombs NZ"
            paragraph="Bath Bombs NZ"
            countPurchase="1"
            priceValue="40"
            currPrice="20"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Seven-Piece, Super Plush, 100% Fresh Combed Cotton Bathsheet Set - 20 Colours Available"
            title="Seven-Piece, Super Plush, 100% Fresh Combed Cotton Bathsheet Set - 20 Colours Available"
            countPurchase="3"
            priceValue="164"
            currPrice="89.70"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Ramesses Ultra-Soft Microfiber Down Quilt 800gsm - Five Sizes Available"
            title=" Ramesses ultra-soft microfiber down quilt 800gsm from kingtex international."
            countPurchase="2"
            priceValue="157"
            currPrice="46"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Outdoor Furniture Rain Cover - Five Sizes Available"
            title="Outdoor furniture rain cover from Fantasy Supply. "
            countPurchase="4"
            priceValue="124"
            currPrice="34"
          />
        </div>
      </div>
    );
  }
}

export default House;
