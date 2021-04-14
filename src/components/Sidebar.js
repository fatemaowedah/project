import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

class Sidebar extends React.Component {
  render() {
    return (
      <Jumbotron className="d-res-none">
        <h1 className="bigTitle blue">Discover</h1>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Featured Auckland deals</span>
          <span className="sideBar_amount">124</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Collections</span>
          <span className="sideBar_amount">37</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Excapes</span>
          <span className="sideBar_amount">97</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Picked for You</span>
          <span className="sideBar_amount"></span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Activites, Events & Outdoors</span>
          <span className="sideBar_amount">116</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Store</span>
          <span className="sideBar_amount">940</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Resurants, Bars, Cages</span>
          <span className="sideBar_amount">55</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Beauty, Massage & Spa</span>
          <span className="sideBar_amount">218</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">House & Garden</span>
          <span className="sideBar_amount">508</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Fitness & Sports</span>
          <span className="sideBar_amount">58</span>
        </Link>
        <Link to="/" className="sideBarAnchor">
          <span className="sideBar_name">Automotive</span>
          <span className="sideBar_amount">65</span>
        </Link>
      </Jumbotron>
    );
  }
}

export default Sidebar;
