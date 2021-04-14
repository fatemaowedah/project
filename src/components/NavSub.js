import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

class NavSub extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navSub d-res-none">
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Browse Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Activities, Events & Outdoors</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Automotive
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Baby, Kids & Toys
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Beauty, Massage & Spa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Books & Magazines</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Clothing & Fashion - Men's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Clothing & Fashion - Women's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Electronics & Computers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Fitness & Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Grocery & Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Health, Nutrition & Dental</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Holidays, Hotels & Travel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">House & Garden</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Pets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Restaurants, Bars, Cafes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Stationery, Art & Craft</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Training & Courses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Wddings, Special Occasions & Perties</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Wine, Bear & Spirits</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Browse all Categories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">What's News</Nav.Link>
              <Nav.Link href="#link">Trending</Nav.Link>
              <Nav.Link href="#link">For You</Nav.Link>
            </Nav>
            <Form inline className="flex1">
              <FormControl
                type="text"
                placeholder="Search"
                className="flex1 subscribe_input"
              />
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavSub;
