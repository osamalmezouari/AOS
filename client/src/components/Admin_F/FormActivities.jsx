import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FormA.css";

export const FormActivities = () => {
  return (
    <div>
      <center>
        <h1>Add Activity</h1>
      </center>
      <form>
        <Container id="affectation-container">
          <Row className="affectation-row">
            <Col className="affectation-col">
              <label className="affectation-label">ID_ACtivite</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">Activite FR</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">Activite AR</label> <br />
              <input className="affectation-input" type="text" />
            </Col>      
          </Row>
        </Container>
        <br />
        <center><input  className="form-submit" type="submit" value="AJouter" /></center>
      </form>
      <hr style={{ color: "black" }} />
    </div>
  );
};
