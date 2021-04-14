import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/13.jpg";
import tour2 from "../img/14.jpg";
import tour3 from "../img/15.jpg";
import tour4 from "../img/16.jpg";
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
            hoverInfo="Return Flight to Coromandel for One Person incl. Two Course Meal with Drinks at Pepper Tree Restaurant - Options for up to Eight People"
            title=" flight to Coromandel including a two-course meal with drinks with Air Auckland and Pepper Tree Restaurant."
            paragraph="Air Auckland"
            location="Auckland"
            countPurchase="7"
            priceValue="240"
            currPrice="230"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Rotorua Escape Day Trip for One Adult - Options for Child or Family Pass - Thursday to Sunday from Auckland. Luxury return transport in small groups"
            title="Rotorua escape day trip from FlexiToursNZ."
            paragraph="FlexiToursNZ"
            location="Auckland"
            countPurchase="3"
            priceValue="292"
            currPrice="229"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Hobbiton & Spellbound Glowworm Cave Tour at Waitomo for One Adult Departing from Auckland - Options for Child & Rotorua Departure & with Luxury Return Transport in Small Groups"
            title="Hobbiton and Spellbound Glowworm Cave Tour thanks to FlexiToursNZ."
            paragraph="FlexiToursNZ"
            location="Auckland"
            countPurchase="2"
            priceValue="409"
            currPrice="309"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Hobbiton & Spellbound Glowworm Cave Tour at Waitomo for One Adult Departing from Auckland - Options for Child & Rotorua Departure & with Luxury Return Transport in Small Groups"
            title="Hobbiton and Spellbound Glowworm Cave Tour thanks to FlexiToursNZ."
            paragraph="FlexiToursNZ"
            location="Auckland"
            countPurchase="4"
            priceValue="279"
            currPrice="189"
          />
        </div>
      </div>
    );
  }
}

export default Activities;
