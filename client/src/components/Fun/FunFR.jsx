import React from "react";
import Fun from "../../Assets/Fun.avif";
import { Container, Row, Col } from "react-bootstrap";

export const FunFR = () => {
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
            Activités de Loisirs{" "}
          </h1>
        </div>
      </center>

      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <Col>
              <h5 style={{ color: "orange" }}>
                {" "}
                <br />
                <strong>
                  Service des billets du Parc National Zoologique de Rabat{" "}
                </strong>
              </h5>
              <p
                style={{
                  border: "5px solid orange",
                  padding: "20px",
                }}
              >
                Dans le cadre d'un accord de partenariat avec le Parc National
                Zoologique, l'association obtient des billets à prix réduit.
                Chaque billet est ensuite soutenu par l'association avec un
                montant de 10 dirhams. Prix des billets : 20 dirhams pour les
                adultes et 10 dirhams pour les enfants.
              </p>
            </Col>
            <Col>
              <h5 style={{ color: "orange" }}>
                {" "}
                <br />
                <strong>
                  Excursions, sorties, camps d'été et activités sportives{" "}
                </strong>
              </h5>
              <p
                style={{
                  border: "5px solid orange",
                  padding: "20px",
                }}
              >
                Dans le cadre d'un accord de partenariat avec le Parc National
                Zoologique, l'association obtient des billets à prix réduit.
                Chaque billet est ensuite soutenu par l'association avec un
                montant de 10 dirhams. Prix des billets : 20 dirhams pour les
                adultes et 10 dirhams pour les enfants.
              </p>
            </Col>
          </Col>
          <Col>
            <center>
              <img
                src={Fun}
                alt=""
                style={{ width: "450px", height: "auto" }}
              />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
