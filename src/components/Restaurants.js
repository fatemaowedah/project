import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/1.jpg";
import tour2 from "../img/22.jpg";
import tour3 from "../img/23.jpg";
import tour4 from "../img/24.jpg";
class Restaurants extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Restaurants, Bars, Cafes</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Two-Course Waterfront Lunch for Two People - Options for Dinner & up to Ten People"
            title="Two-course waterfront dining experience at Astor Tapas Bar."
            paragraph="Astor Tapas Bar And Eatery"
            location="Auckland"
            countPurchase="17"
            priceValue="80"
            currPrice="75"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="$40 Food & Drinks Evening Dining Voucher for Two People"
            title="Food & Drinks Evening Dining Voucher for Two People"
            paragraph="D'Refinery Eatery"
            location="Auckland"
            countPurchase="1"
            priceValue="40"
            currPrice="20"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Ultimate Auckland Craft Beer Urban Tasting Tour for One Person - Options for Two or Four People"
            title="Ultimate Auckland craft beer urban tasting tour at Auckland Scenic Tours Ltd."
            paragraph="Auckland Scenic Tours Ltd"
            location="Auckland"
            countPurchase="2"
            priceValue="200"
            currPrice="145"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="$10 Voucher for Mr Whippy Queen Street Pop-Up Shop for Two People - Option for a $20 Voucher for Four People"
            title="Mr Whippy pop up shop voucher from Mr Whippy New Zealand Limited."
            paragraph="Mr Whippy New Zealand Limited"
            countPurchase="67"
            priceValue="10"
            currPrice="5"
          />
        </div>
      </div>
    );
  }
}

export default Restaurants;
