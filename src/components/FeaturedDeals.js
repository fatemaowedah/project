import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import tour1 from "../img/1.jpg";
import tour2 from "../img/2.jpg";
import tour3 from "../img/3.jpg";
import tour4 from "../img/4.jpg";
import tour5 from "../img/5.jpg";
import tour6 from "../img/6.jpg";
import tour7 from "../img/7.jpg";
import tour8 from "../img/8.jpg";

class FeaturedDeals extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header_section">
          <span>Featured Auckland deals</span>
          <Link to="/" className="viewMore_anchor">
            view more
          </Link>
        </div>
        <div className="toursCards">
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
            tourImg={tour2}
            hoverInfo="60-Minute Swedish & Deep Tissue Massage - Option for 90-Minute & Hot Stone Massage"
            title="Full body relaxing massage from Molliere's Skin and Body"
            paragraph="Mollieres Skin & Body"
            location="Auckland"
            countPurchase="37"
            priceValue="89"
            currPrice="59"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Three-Hour Glow Worm Adventure Kayak Trip for One Adult - Options for Child, Two Adults & a Family Pass - Valid from 1st May 2021"
            title="Three-hour glow worm adventure kayak trip from The Boatshed Kayaks - Lake Karapiro, Cambridge."
            paragraph="The Boatshed Kayaks - Lake Karapiro, Cambridge"
            location="Cambridge"
            countPurchase="57"
            priceValue="130"
            currPrice="79"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Luxury 4.5 Star Stay at Heritage Queenstown for 2 in a Non-Lake View Deluxe Room with Balcony incl 20% off all F&B, a Welcome Drink, Cooked Breakfast, Early Check in & Late Checkout - Options for a Family Deluxe Room or Studio Suite Lakeview Available"
            title="Luxury 4.5 Star Stay at The Heritage Queenstown for Two People in a Non-Lake View Deluxe King or Twin-Room with Balcony incl. a Welcome Drink, Fully Cooked Breakfast, WiFi, Late Checkout, & More thanks to Heritage Queenstown."
            paragraph="The Heritage Queenstown"
            location="Queenstown"
            countPurchase="400"
            priceValue="451"
            currPrice="165"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour5}
            hoverInfo="Full-Day Adult Pass to SheepWorld incl. All Shows - Options for Two Adults, a Child or a Family Pass"
            title="Full-day entry pass to SheepWorld in Warkworth."
            paragraph="SheepWorld"
            location="Warkworth"
            countPurchase="66"
            priceValue="42"
            currPrice="19"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour6}
            hoverInfo="Two-Night Midweek Stay for Two People in a Luxury Chalet incl. Daily Breakfast, Complimentary Drink, Free Wifi & Complimentary Parking - Option for Three-Night Stay"
            title="Midweek stay for two people in a luxury chalet incl. daily breakfast, complimentary drink, free wifi and complimentary parking thanks to Grand Mercure Puka Park Resort - Coromandel."
            paragraph="Grand Mercure Puka Park Resort"
            location="Wairakei"
            countPurchase="139"
            priceValue="652"
            currPrice="349"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour7}
            hoverInfo="Five-Star Indulgent Breakfast Experience for One Person at Eight Restaurant at Cordis - Options for up to Ten People & for Weekday or Weekend"
            title="Five-star indulgent breakfast experience at Eight Restaurant at Cordis Auckland"
            paragraph="Eight Restaurant at Cordis Auckland, a brand by the Langham Hospitality Group"
            countPurchase="366"
            priceValue="42"
            currPrice="34"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour8}
            hoverInfo="Brazilian BBQ Experience with Churros Dessert & Beverage for One Person - Options for Two, Four or Six People"
            title="Brazilian BBQ experience with churros dessert and a beverage at Fogo Brazilian BBQ Restaurant."
            paragraph="Fogo Brazilian BBQ Restaurant"
            location="Queenstown"
            countPurchase="13"
            priceValue="78"
            currPrice="59"
          />
        </div>
      </div>
    );
  }
}

export default FeaturedDeals;
