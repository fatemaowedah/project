import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container, Row, Jumbotron, Col, FormControl, Form } from "react-bootstrap";
import FacebookIcon from "../img/icons8-facebook-24.png";
import TwitterIcon from "../img/icons8-twitter-24.png";
import InstagramIcon from "../img/icons8-instagram-26.png";
import YouTubeIcon from "../img/icons8-youtube-100.png";

class Footer extends React.Component {
    render() {
        return (
            <Container className="foter">
                <Row >
                    <Col xs={12} md={4} lg={2}>
                        <Jumbotron>
                            <h5 className="sideBar_name">Follow Us On</h5>
                            <Navbar>
                                <div className="container" >
                                    <Navbar.Collapse className="social">
                                        <Nav.Link href="#home" className="socialIcon">
                                            <img className="pinIcon" src={FacebookIcon} alt="" />
                                        </Nav.Link>
                                        <Nav.Link href="#home" className="socialIcon">
                                            <img className="pinIcon" src={TwitterIcon} alt="" />
                                        </Nav.Link>
                                        <Nav.Link href="#home" className="socialIcon">
                                            <img className="pinIcon" src={InstagramIcon} alt="" />
                                        </Nav.Link>
                                        <Nav.Link href="#home" className="socialIcon">
                                            <img className="pinIcon" src={YouTubeIcon} alt="" />
                                        </Nav.Link>
                                    </Navbar.Collapse>
                                </div>
                            </Navbar>
                            <Button variant="primary">Download Our App</Button>
                        </Jumbotron>
                    </Col>
                    <Col xs={12} md={4} lg={2}>
                        <Jumbotron>
                            <h5 className="sideBar_name">GrabOne</h5>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>GrabOne Guuaantee</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Contact Us</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>About Us</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Terms & Returns</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Blog</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Gift Cards</h6>
                            </Link>
                        </Jumbotron></Col>
                    <Col xs={12} md={4} lg={2}>
                        <Jumbotron>
                            <h5 className="sideBar_name">My Account</h5>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>My Account</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>My Cart</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>My Coupons</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>FAQ</h6>
                            </Link>
                        </Jumbotron>
                    </Col>
                    <Col xs={12} md={4} lg={2}>
                        <Jumbotron>
                            <h5 className="sideBar_name">Merchants</h5>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Run a Deal</h6>
                            </Link>
                            <Link to="/" className="footerSideBarAnchor">
                                <h6>Merchant Center</h6>
                            </Link>
                        </Jumbotron>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <Jumbotron className="pad-bot-100">
                            <h5 className="sideBar_name">
                                Newsletter Signup
                            </h5>
                            <h6 className="footerSideBarAnchor"> Sign up for our daily emails and we'll send you all the best deals, tailored for you. </h6>
                            <Form inline className="flex1">
                                <FormControl
                                    type="text"
                                    placeholder="Enter email address"
                                    className="flex1 subscribe_input"
                                />
                                <Button className="subscribe_btn">Subscribe</Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default Footer;