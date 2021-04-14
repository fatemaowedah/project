import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/29.jpg";
import tour2 from "../img/30.jpg";
import tour3 from "../img/31.jpg";
import tour4 from "../img/32.jpg";
class Activities extends React.Component {
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
            hoverInfo="Comprehensive Car Service for a Japanese Vehicle - Option for European Vehicle"
            title="Comprehensive car service from Bj Automotive. "
            paragraph="Bj WOF & Automotive Centre"
            location="East Tamaki"
            countPurchase="1"
            priceValue="89"
            currPrice="59"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Standard Service Oil Change incl. Oil Filter"
            title="Comprehensive standard service oil change including an oil filter for $59 from Valley Tyres."
            paragraph="Valley Tyres"
            location="Wairau Valley"
            countPurchase="3"
            priceValue="129"
            currPrice="59"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Warrant of Fitness - Option for Basic Car Service & to incl. Basic Car Grooming"
            title="Car warrant of fitness at Kristol Enterprises.  "
            paragraph="Kristol Automotive Repairs"
            location="Mount Wellington"
            countPurchase="2"
            priceValue="45"
            currPrice="15"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Front OR Rear Brake Replacement - Option for Both"
            title="Brake replacement from Kristol Enterprises."
            paragraph="Kristol Automotive Repairs"
            location="Mount Wellington"
            countPurchase="4"
            priceValue="120"
            currPrice="59"
          />
        </div>
      </div>
    );
  }
}

export default Activities;
