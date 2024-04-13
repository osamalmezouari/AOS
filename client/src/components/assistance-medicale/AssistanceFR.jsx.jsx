import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import medecine from "../../Assets/medecine.avif";
export const AssistanceFR = () => {
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
            Assurance et assistance médicale
          </h1>
        </div>
        {/* <img src={assis} alt="" style={{ width: "70%", height: "auto" }} /> */}
      </center>

      {/* //////////////// */}
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <Col>
              <h3 style={{ color: "orange" }}>
                {" "}
                <br />
                Couverture médicale complémentaire
              </h3>
              <p style={{ border: "5px solid orange", padding: "20px" }}>
                Dans le cadre de la convention conclue avec la compagnie
                d'assurance "SAHAM", une somme de 542 dirhams est versée
                annuellement par employé en contrepartie du service d'assurance
                complémentaire. Cette convention permet aux employés de
                récupérer une partie des frais engagés en cas d'hospitalisation,
                de chirurgie, de maladies chroniques à long terme et de maladies
                graves et coûteuses, ainsi que dans certains cas spéciaux.
                Veuillez consulter le guide de l'assurance complémentaire pour
                plus d'informations.
              </p>
            </Col>
            <Col>
              <h3 style={{ color: "orange" }}>
                {" "}
                <br />
                Consultation médicale et orientation
              </h3>
              <p style={{ border: "5px solid orange", padding: "20px" }}>
                Le siège central du ministère dans la zone administrative Challe
                dispose d'une clinique médicale gratuite avec deux médecins (le
                Dr Alami spécialisé en médecine interne à l'hôpital Ibn Sina et
                le Dr Aloui spécialisé en dermatologie). L'association prend en
                charge tous les frais de consultation médicale et d'orientation
                fournis par les médecins contractuels de l'association au profit
                des membres de l'association.
              </p>
            </Col>
          </Col>
          <Col>
            <center>
              <img
                src={medecine}
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
