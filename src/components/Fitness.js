import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/37.jpg";
import tour2 from "../img/38.jpg";
import tour3 from "../img/39.jpg";
import tour4 from "../img/40.jpg";
class Fitness extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Fitness & Sports View More</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="Return Flight to Coromandel for One Person incl. Two Course Meal with Drinks at Pepper Tree Restaurant - Options for up to Eight People"
            title=" flight to Coromandel including a two-course meal with drinks with Air Auckland and Pepper Tree Restaurant."
            priceValue="20"
            currPrice="8"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Folding Removable Bike Basket - Four Colours Available"
            title="Folding removable bike basket for $48 from Fantasy Supply."
            countPurchase="1"
            priceValue="85"
            currPrice="48"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Exercise Training Resistance Bands Set - Option for Two Sets"
            title=" 100lbs exercise training resistance bands set from B Store."
            countPurchase="3"
            priceValue="40"
            currPrice="13"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Four-Week Unlimited Off-Peak Hot Yoga & Hot HITT Pilates for One Person"
            title="Four-Week Unlimited Off-Peak Hot Yoga & Hot HITT Pilates for One Person"
            paragraph="Well Trained"
            countPurchase="4"
            priceValue="79"
            currPrice="49"
          />
        </div>
      </div>
    );
  }
}

export default Fitness;
