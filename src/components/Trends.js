import React from "react";
import { Col, Image } from "react-bootstrap";

const Trends = () => {
  return (
    <>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image
            src="https://images.ctfassets.net/bdvz0u6oqffk/KI5ai1pvt8ASL4kbtq71c/0396184d44bbbfbf55b894607b737c04/vintage_tees.jpg?fm=webp&h=245&w=390"
            rounded
            fluid
          />
          <h6 className="my-3">Vintage Tees</h6>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image
            src="https://images.ctfassets.net/bdvz0u6oqffk/7GMgdi0Fl8Wr2pT9cGN4F/8648f2473c9b5afe5fbc90a2abb4baba/street_shorts.jpg?fm=webp&h=245&w=390"
            rounded
            fluid
          />
          <h6 className="my-3">Streetwear Shorts</h6>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Image
            src="https://images.ctfassets.net/bdvz0u6oqffk/3BgwIvVMeiDq92vdqXNMnP/fc303c58782e3cee9d8d954d0facee49/loafers.jpg?fm=webp&h=245&w=390"
            rounded
            fluid
          />
          <h6 className="my-3">Loafers, Mules & Derbies</h6>
        </div>
      </Col>
    </>
  );
};

export default Trends;
