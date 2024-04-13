import React from "react";
import Partnerships from "../../Assets/Partnerships.jpg";
import { Container, Row, Col } from "react-bootstrap";

export const PartnershipsAR = () => {
  return (
    <div>
      <center>
        <div style={{ margin: "35px" }}>
          <h1
            style={{
              backgroundColor: "#FDE1AA",
              display: "inline-block",
              borderRadius: "200px",
              padding: "10px",
            }}
          >
            الاتفاقيات والشراكات
          </h1>
        </div>
      </center>

      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <center>
              <h3 style={{ color: "orange" }}>عنوان</h3>
              <p style={{ border: "5px solid orange" }}>محتوى</p>
            </center>
          </Col>
          <Col>
            <center>
              <img
                src={Partnerships}
                alt=""
                style={{ width: "500px", height: "auto" }}
              />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
