import React from "react";
import {
  Row,
  Col,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import TwoTours from "./TwoTours";

class Discover extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Row className="mt-5">
            <Col>
              <Sidebar />
            </Col>
            <Col md={9} className="w-res-100">
              <TwoTours />
            </Col>
          </Row>
          <Jumbotron className="py-4 px-3 d-flex justify-content-between d-res-block">
            <h1 className="bigTitle blue">
              Get the best deals delivered direct to your inbox each day
            </h1>
            <Form inline className="flex1">
              <FormControl
                type="text"
                placeholder="Enter email address"
                className="flex1 subscribe_input"
              />
              <Button className="subscribe_btn">Subscribe</Button>
            </Form>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Discover;
