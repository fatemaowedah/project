import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../img/header.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="headerImage">
            <Link to="/">
              <img src={headerImg} className="headerImg" alt="" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
