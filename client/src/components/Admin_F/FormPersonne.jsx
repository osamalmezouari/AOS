// FormPersonne.js
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FormP.css";

export const FormPersonne = () => {
  return (
    <div>
      <center>
        <h1>Personnel</h1>
      </center>
      <form action="">
        <Container id="form-container">
          <Row className="form-row">
           
            <Col className="form-col">
              <label className="form-label" htmlFor="nom-fr">
                NOM FR
              </label>
              <br />
              <input className="form-input" type="text" id="nom-fr" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="prenom-fr">
                Prenom FR
              </label>
              <br />
              <input className="form-input" type="text" id="prenom-fr" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="nom-ar">
                NOM AR
              </label>
              <br />
              <input className="form-input" type="text" id="nom-ar" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="prenom-ar">
                PRENOM AR
              </label>
              <br />
              <input className="form-input" type="text" id="prenom-ar" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="date-naissance">
                DATE NAISSANCE
              </label>
              <br />
              <input className="form-input" type="text" id="date-naissance" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="email">
                EMAIL
              </label>
              <br />
              <input className="form-input" type="text" id="email" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="echelle">
                ECHELLE
              </label>
              <br />
              <input className="form-input" type="text" id="echelle" />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="qualite">
                QUALITE
              </label>
              <br />
              <select className="form-input" id="qualite">
                <option value="R.D">R.D</option>
                <option value="R.Dir">R.Dir</option>
                <option value="C...">C...</option>
                <option value="P....">P....</option>
              </select>
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="adherent">
                ADHERENT
              </label>
              <br />
              <input className="form-checkbox" type="checkbox" id="adherent" style={{ transform: 'scale(1.5)' }}   />
            </Col>
            <Col className="form-col">
              <label className="form-label" htmlFor="Structure">
              Structure FR
              </label>
              <br />
              <input className="form-input" type="text" id="Structure" />
            </Col>
          </Row>
        </Container>
        <br />
        <center>
          <input className="form-submit" type="submit" value="AJouter" />
        </center>
      </form>
    </div>
  );
};
