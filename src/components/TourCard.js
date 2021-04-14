import React from "react";
import { Card } from "react-bootstrap";
import addHeart from "../img/add-heart.svg";

class TourCard extends React.Component {
  render() {
    return (
      <Card className={this.props.cards} >
        <div className="addHeartIcon"  variant="top-left">
          <img src={addHeart} alt="" />
        </div>
        <div className="tours_card-top">
          <div className="cardHover">
            <div className="cardHover_info">{this.props.hoverInfo}</div>
          </div>
          <Card.Img variant="top" src={this.props.tourImg} />
        </div>
        <Card.Body  style={{ height: '10rem' }}>
          <Card.Title style={{ height: '1.3rem', overflow:'hidden' }}>{this.props.title}</Card.Title>
          <Card.Text style={{ height: '1rem', overflow:'hidden' }}>{this.props.paragraph}</Card.Text>
          <div className="tours_card-location" style={{ height: '1rem', overflow:'hidden' }}>{this.props.location}</div>
          <div className="tours_card-footer"style={{ height: '3rem', overflow:'hidden' }}>
            <div className="purchase_count">
              {this.props.countPurchase} bought
            </div>
            <div className="tours_card-priceCon">
              <span className="tours_card-priceFrom">from</span>
              <div className="tours_card-priceCurrent">
                <div className="tours_card-priceValue">
                  ${this.props.priceValue}
                </div>
                ${this.props.currPrice}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default TourCard;
