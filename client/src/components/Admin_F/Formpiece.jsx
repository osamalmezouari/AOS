import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FormA.css";

export const FormPiece = () => {
  return (
    <div>
      <center>
        <h1>Add PIECE</h1>
      </center>
      <form>
        <Container id="affectation-container">
          <Row className="affectation-row">
            <Col className="affectation-col">
              <label className="affectation-label">IDPD</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">PIECE DMD AR</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">PIECE DMD FR</label> <br />
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
