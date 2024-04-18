import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FormA.css";

export const FormSsActivities = () => {
  return (
    <div>
      <center>
        <h1>Sub Activity</h1>
      </center>
      <form>
        <Container id="affectation-container">
          <Row className="affectation-row">
            <Col>
              <Col className="form-col">
                <label className="form-label" htmlFor="qualite">
                  Sub Activity
                </label>
                <br />
                <select className="form-input" id="qualite">
                  <option value="R.D">Activity 1</option>
                  <option value="R.Dir">Activity 2</option>
                  <option value="C...">Activity 3</option>
                  <option value="P....">Activity 4</option>
                </select>
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">ID_Sub_ACtivite</label>{" "}
                <br />
                <input className="affectation-input" type="text" />
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">Sub Activite FR</label>{" "}
                <br />
                <input className="affectation-input" type="text" />
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">Sub Activite AR</label>{" "}
                <br />
                <input className="affectation-input" type="text" />
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">Text AR</label> <br />
                <input className="affectation-input" type="text" />
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">Text Fr</label> <br />
                <input className="affectation-input" type="text" />
              </Col>
              {/* first Col ending */}
            </Col>
            <Col>
              <Col className="affectation-col">
                <label className="affectation-label">Dotation</label> <br />
                <input className="affectation-input" type="number" />
              </Col>
              <Col className="affectation-col">
                <label className="affectation-label">piece demander</label> <br />
                <input className="affectation-input" type="text" />
              </Col>
            </Col>
          </Row>
        </Container>
        <br />
        <center>
          <input className="form-submit" type="submit" value="AJouter" />
        </center>
      </form>
      <hr style={{ color: "black" }} />
    </div>
  );
};
