import React from "react";
import TourCard from "./TourCard";
import tour1 from "../img/tour1.jpg";
import tour2 from "../img/tour2.jpg";

class TwoTours extends React.Component {
  render() {
    return (
      <div className="toursCards">
        <TourCard
          cards="twoTours_card"
          tourImg={tour2}
          hoverInfo="Single Entry & Skate Hire - Options Available for Two, Four oe Six People - Available at Three Locations"
          title="Paradice Entry & Skate Hire"
          paragraph="Paradice Events"
          location="Auckland"
          countPurchase="487"
          priceValue="19"
          currPrice="10"
        />
        <TourCard
        cards="twoTours_card"
        tourImg={tour1}
        hoverInfo="Three-Day Abel Tasman Self Guided Walk incl. All Meals, Accommodation & Transfers"
        title="Three-Day Abed Tasman Self Guided Walk"
        paragraph="Three-Day Abel Tasman Independent Walk"
        countPurchase="139"
        priceValue="1,445"
        currPrice="1,095"
        />
      </div>
    );
  }
}

export default TwoTours;
