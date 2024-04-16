import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import globe from "../../Assets/glob.jpg";

export const Option2FR = () => {
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
            Activités culturelles
          </h1>
        </div>
      </center>

      <Container style={{ marginTop: "20px" }}>
       

        <Row style={{ marginTop: "100px" }}>
          <Col>
            <h4 style={{ color: "orange" }}>
              {" "}
              <br />
              <strong> Centres de soutien en langues étrangères</strong>
            </h4>
            <p
              style={{
                border: "5px solid orange",
                padding: "20px",
              }}
            >
              En plus de l'aide financière fournie par l'association dans le
              cadre du soutien scolaire aux cours de langue, des accords ont
              été conclus avec trois centres à Rabat : le Workshop linguistique
              anglais (The Language Workshop) à Rabat pour obtenir une
              réduction de 25% sur les frais généraux et une inscription
              gratuite. L'Institut espagnol de langues (Institutorantes) à
              Rabat pour obtenir une réduction de 15% sur les frais généraux.
              L'Institut français à Rabat pour obtenir une réduction de 20% sur
              les frais généraux et un examen de niveau gratuit pour
              l'enfant.
            </p>
          </Col>
          <Col>
            <center>
              <img
                src={globe}
                alt=""
                style={{ width: "450px", height: "540px" }}
              />
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
