import React from "react";
import { Card, Button } from "react-bootstrap";

class CollectionR extends React.Component {
  render() {
    return (
      <Card className={this.props.cards}  >
        <div className="tours_card-top">
          <div className="cardHover">
            <div className="cardHover_info">{this.props.hoverInfo}</div>
          </div>
          <Card.Img variant="top" src={this.props.tourImg} style={{ height: '10rem' }} />
        </div>
        <Card.Body  style={{ height: '10rem' }} className="text-center">
          <Card.Title style={{ height: '1.3rem', overflow:'hidden',  }}>{this.props.title}</Card.Title>
          <Card.Text style={{ height: '1rem', overflow:'hidden' }}>{this.props.paragraph}</Card.Text>
          <Button variant="outline-primary">View Collections</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CollectionR;
