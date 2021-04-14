import React from "react";
import { Link } from "react-router-dom";
import TourCard from "./collectionR";
import tour1 from "../img/41.png";
import tour2 from "../img/42.png";
import tour3 from "../img/43.png";
import tour4 from "../img/44.png";

class Collection extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header_section">
                    <span>Collections</span>
                    <Link to="/" className="viewMore_anchor">
                        view more
                    </Link>
                </div>
                <div className="toursCards">
                <TourCard
            cards="fourTours_card"
            tourImg={tour1}
            hoverInfo="GO Local & Support NZ business"
            title="GO Local & Support NZ business"
            paragraph="Multiply Deals"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour2}
            hoverInfo="Grocery Goodies"
            title="Grocery Goodies"
            paragraph="Multiply Deals"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour3}
            hoverInfo="Ugg collection"
            title="Ugg collection"
            paragraph="Multiply Deals"
          />
          <TourCard
            cards="fourTours_card"
            tourImg={tour4}
            hoverInfo="Furniture Favourites"
            title="Furniture Favourites"
            paragraph="Multiply Deals"
          />
                </div>
            </div>

        );
    }
}

export default Collection;
