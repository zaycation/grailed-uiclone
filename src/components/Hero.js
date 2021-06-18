import React from "react";

import { Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Row>
      <Col
        xs={{ order: 2, span: 12 }}
        sm={{ order: 2, span: 12 }}
        md={{ order: 1, span: 5 }}
        lg={{ order: 1, span: 5 }}
        xl={{ order: 1, span: 5 }}
      >
        <div className="d-flex flex-column align-items-start justify-content-center my-5 mx-5">
          <br />
          <p className="my-3">CURATED COLLECTIONS</p>
          <h4 className="my-3">Black Designers Shifting the Future</h4>
          <br />
          <Button variant="outline-dark">SHOP NOW</Button>
        </div>
      </Col>
      <Col
        xs={{ order: 1, span: 12 }}
        sm={{ order: 1, span: 12 }}
        md={{ order: 2, span: 7 }}
        lg={{ order: 2, span: 7 }}
        xl={{ order: 2, span: 7 }}
        className="hero__img"
      />
    </Row>
  );
};

export default Hero;
