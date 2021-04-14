import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import pinIcon from "../img/pin.svg";
import heartIcon from "../img/heart.svg";
import cartIcon from "../img/shopping-cart.svg";
import userIcon from "../img/user-profile.svg";
import emailIcon from "../img/envelope.svg";
import poweredIcon from "../img/powered.png";
import homeIcon from "../img/icons8-home-24.png";
import searchIcon from "../img/icons8-search-32.png";
import categoryIcon from "../img/icons8-categorize-80.png";
import cartBlackIcon from "../img/icons8-fast-cart-24.png";
import userBlackIcon from "../img/icons8-user-male-64.png";

class NavMain extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navMain" bg="primary">
          <div className="container">
            <Navbar.Brand href="#home">
              <Link to="/https://new.grabone.co.nz">
                <svg
                  className="svg__global--go-logo-white"
                  viewBox="0 0 315.3 60"
                >
                  <path
                    class="st0"
                    d="M55.8 52.1V21.7c0-2.3 1.2-3.5 3.5-3.5h4c2.3 0 3.5 1.2 3.5 3.5v4.7c1.2-6.8 6.5-9 9.7-9l1.2.1c1.7.1 2.1 1.5 2.1 3v5.1c0 2-1 2.9-2.5 2.7-.7-.1-1.2-.1-1.8-.1-4.4 0-8.4 2.8-8.4 12.2v11.8c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zM3.1 30.2c0-14.4 11.5-26.4 27.4-26.4 6 0 11 1.3 15.4 3.9 2 1.2 2.2 3.1.9 4.9L45 15c-1.3 1.8-2.8 2-4.9 1-3.9-2-6.7-2.1-9.6-2.1-9.1 0-15.9 7.2-15.9 16.2 0 8.6 5.9 16.2 16.4 16.2 3 0 6.3-.7 8.9-2v-7.9H31c-1.9 0-3.5-1.6-3.5-3.5v-5.1h19.7c2 0 3.6 1.6 3.6 3.6V46c0 1.8-.6 3.2-2.3 4.4-5.5 4.1-11.6 5.9-17.7 5.9-16.4.1-27.7-11.8-27.7-26.1m78.2 6.7c0-11 7.5-19.5 18-19.5 5 0 9.3 1.9 12 6.1v-1.8c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v33.9h-7.8c-2.3 0-3.5-1.2-3.5-3.5v-1.7c-2.7 4.1-7.1 6-12 6-10.5 0-18-8.4-18-19.5m30.2 0c0-6-3.8-10.5-9.5-10.5-5.9 0-9.3 4.7-9.3 10.5s3.4 10.5 9.3 10.5c5.7 0 9.5-4.5 9.5-10.5m28 13.5v1.7c0 2.3-1.3 3.5-3.6 3.5h-7.7V6.5c0-2.3 1.2-3.5 3.5-3.5h4.2c2.3 0 3.6 1.2 3.6 3.5v17c2.7-4.2 7.1-6.1 11.9-6.1 10.6 0 18.1 8.5 18.1 19.5 0 11.1-7.5 19.5-18.1 19.5-4.9 0-9.2-1.9-11.9-6m18.7-13.5c0-5.8-3.5-10.5-9.3-10.5s-9.5 4.5-9.6 10.5c.1 6 3.8 10.5 9.6 10.5s9.3-4.7 9.3-10.5m15.3-6.7c0-14.3 11.1-26.3 27-26.3s27 11.9 27 26.3c0 14.3-11.1 26.3-27 26.3-16-.1-27-12-27-26.3m42.4 0c0-9-6.4-16.2-15.4-16.2s-15.4 7.2-15.4 16.2 6.3 16.2 15.4 16.2c9 0 15.4-7.2 15.4-16.2m15.4 21.9V21.7c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v2.5c1.8-4.3 5.8-6.8 11.4-6.8 10 0 13.7 7.9 13.7 16.7v18.1c0 2.3-1.3 3.5-3.6 3.5h-7.7V34.9c0-5.2-2-8.3-5.9-8.3s-7.9 3-7.9 10v15.6c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zm40.1-15c0-10.6 7.9-19.7 20.5-19.7 10.6 0 19.4 6.4 19.9 18.3.1 2.1-1.4 3.1-3.6 3.1h-26.1c-.1 4.4 4.3 8.7 11.5 8.7 2.7 0 5.5-.7 8.3-2.3 2-1.1 3.6-.9 5 .7l.8 1c1.5 1.7 1.3 3.7-.7 5.2-4.3 3.1-9.3 4.2-14.1 4.2-13.4.1-21.5-8.5-21.5-19.2m29.8-4.5c-1-5-5.3-6.6-9.2-6.6-3.9 0-8.4 1.7-9.6 6.6h18.8z"
                  ></path>
                </svg>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <div className="d-flex align-items-center">
                <img className="pinIcon" src={pinIcon} alt="" />
                <NavDropdown title="Auckland" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Auckland
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Waikato
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Wellington
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Northland
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Manawatu - Wanganui
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Tauranga
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Rotorua -Taupo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Hawkes Bay
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Neison - Marlborough
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Dunedin - Invercargill
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <Nav.Link href="#home" className="d-res-none  ">
                <img className="pinIcon" src={heartIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home" className="d-res-none  ">
                <img className="pinIcon" src={cartIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home" className="d-res-none  ">
                <div className="d-flex align-items-center">
                  <img className="pinIcon" src={userIcon} alt="" />
                  <NavDropdown title="" id="basic-nav-dropdown" className="d-res-none  ">
                    <NavDropdown.Item href="#action/3.2">
                      My account
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Gift</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      My Subscriotions
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      My Purchases
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav.Link >
              <Nav.Link href="#home" className="d-res-none">
                <img className="pinIcon" src={emailIcon} alt="" />
                <span>Subscripe</span>
              </Nav.Link>
              <div className="vl_nav"></div>
              <Nav.Link href="#home" className="d-res-none">
                <img src={poweredIcon} />
              </Nav.Link>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Navbar className="menu-bottom navMain">
          <div className="container" >
            <Navbar.Collapse className="justify-content">
              <Nav.Link href="#home" >
                <img className="footerPinIcon" src={homeIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img className="footerPinIcon" src={searchIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img className="footerPinIcon" src={categoryIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img className="footerPinIcon" src={cartBlackIcon} alt="" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img className="footerPinIcon" src={userBlackIcon} alt="" />
              </Nav.Link>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavMain;
