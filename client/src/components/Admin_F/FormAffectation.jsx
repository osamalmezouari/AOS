import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FormA.css";

export const FormAffectation = () => {
  return (
    <div>
      <center>
        <h1>Affectation</h1>
      </center>
      <form>
        <Container id="affectation-container">
          <Row className="affectation-row">
            <Col className="affectation-col">
              <label className="affectation-label">IDA</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">Structure FR</label> <br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">Structure AR</label><br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">ABRV</label><br />
              <input className="affectation-input" type="text" />
            </Col>
            <Col className="affectation-col">
              <label className="affectation-label">Type DEP</label><br />
              <select className="affectation-select">
                <option value="">Div</option>
                <option value="">Dir</option>
                <option value="">Sui</option>
              </select>
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
