import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/25.jpg";
import tour2 from "../img/26.jpg";
import tour3 from "../img/27.jpg";
import tour4 from "../img/28.jpg";
class Beauty extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Beauty, Massage & Spa</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="Bee Kiwi Manuka Honey Skincare Range - Seven Options Available"
            title="Bee Kiwi Manuka Honey skincare range from Nature’s Beauty NZ Ltd."
            paragraph="Nature’s Beauty NZ Ltd."
            countPurchase="7"
            priceValue="22.70"
            currPrice="7"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Large Aluminium Makeup Case"
            title="Large Aluminium Makeup Case"
            countPurchase="3"
            priceValue="130"
            currPrice="69.99"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="One Session of Eyebrow Microblading for One Person - Options for Powder Brows, Combination Brows, Upper Eyelid Eyeliner or Lip Contour & Two Sessions"
            title="Semi-permanent beauty treatment at Phoebe Beauty."
            paragraph="Phoebe Beauty"
            location="Auckland"
            countPurchase="29"
            priceValue="200"
            currPrice="120"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="BioBalance Under Eye Dark Circle Brightening Eye Cream"
            title="BioBalance Under Eye Dark Circle Brightening Eye Cream"
            countPurchase="4"
            priceValue="40"
            currPrice="20"
          />
        </div>
      </div>
    );
  }
}

export default Beauty;
