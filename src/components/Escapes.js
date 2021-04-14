import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/9.jpg";
import tour2 from "../img/10.jpg";
import tour3 from "../img/11.jpg";
import tour4 from "../img/12.jpg";
class Escapes extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Escapes</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
          <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="2-Night 4-Star Remote Wilderness Escape to Marlborough Sounds for 2 People incl. Room Upgrade, Stand Up Paddle Board & Kayak Hire, Welcome Drinks, Wi-Fi, Carpark & Noon Checkout - Options for 3 or 4-Night Stays incl. Queen Charlotte Walk Passes"
            title="stay in Marlborough Sounds for 2 people in a Korimako room including a complimentary room upgrade, stand up paddle board and kayak hire, welcome drinks, Wi-Fi, carpark and noon checkout thanks to The Portage - THC Hotel."
            paragraph="The Portage - THC Hotel"
            location="Marlborough Sounds"
            countPurchase="201"
            priceValue="673"
            currPrice="238"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="One-Night 4.5-Star Capital City Getaway for Two People in Terrace Room incl. Late Checkout & Buffet Breakfast - Options for Two & Three Night Stays incl. $50 Food & Beverage Voucher & for Executive or Deluxe Rooms"
            title="Relax with a 4.5-star capital city getaway for two people including late checkout from James Cook Hotel Grand Chancellor."
            paragraph="James Cook Hotel Grand Chancellor"
            location="Wellington"
            countPurchase="235"
            priceValue="295"
            currPrice="149"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="2-Night Novotel Queenstown Lakeside 4-Star Package for 2 in Standard Room incl. Shotover Jet Boat Ride, Minus 5 Ice Bar Entry with Cocktails, Buffet Breakfast, Early Check-In & Late Checkout - Option for Alpine View Room & up to 5 Nights with Wine"
            title=" four-star Novotel Queenstown Lakeside excursion package for two people including Shotover Jet, Minus 5 Ice Bar with cocktails, daily cooked buffet, welcome drinks, early check-in and check-out and WiFi thanks to Novotel Queenstown Lakeside."
            paragraph="Novotel Queenstown Lakeside"
            location="Queenstown"
            countPurchase="89"
            priceValue="100"
            currPrice="559"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="4.5-Star Luxury Wellington Getaway at DoubleTree by Hilton incl. Late Checkout, Breakfast, 25% Off Carparking & More - Options for up to Five Night Stays with up to $150 F&B Credit to Spend at Their Award-Winning Spring Kitchen Restaurant"
            title="Luxury Wellington Getaway at DoubleTree"
            paragraph="Doubletree Hilton Wellington"
            countPurchase="114"
            priceValue="395"
            currPrice="195"
          />
        </div>
      </div>
    );
  }
}

export default Escapes;
