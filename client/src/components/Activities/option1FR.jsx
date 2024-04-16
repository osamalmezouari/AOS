import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import salon from "../../Assets/salon.jpg";

export const Option1FR = () => {
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
        <Row>
          <Col>
            <h4 style={{ color: "orange" }}>
              {" "}
              <br />
              <strong> Centres de vacances</strong>
            </h4>
            <p
              style={{
                border: "5px solid orange",
                padding: "20px",
              }}
            >
              <strong>Appartements de l'association :</strong> L'association
              dispose d'appartements de vacances à des prix très avantageux
              toute l'année, répartis comme suit : - 10 appartements au centre
              "Hacienda" à Sidi Bouzid - Nouvelle (100) dirhams par jour) - 3
              appartements au centre "Oumaya" à Martil 120 dirhams par jour - 1
              appartement au centre "Maroc Télécom" à Sahb El Douh - Rabat 150
              dirhams par jour - 6 appartements au centre "Caricia" à Marrakech
              150 dirhams par jour pour la catégorie 1 et 200 dirhams pour la
              catégorie 2 par jour) <br />
              <strong>Appartements en location :</strong> Des accords sont
              conclus chaque année pendant la période estivale avec des centres
              de vacances privés et des agences de voyage pour répondre aux
              demandes de vacances des membres de l'association. Le soutien
              alloué aux appartements en location : la contribution de
              l'association aux frais de location des appartements pour les
              membres de l'association varie entre 45% et 65% sur la base du
              reste des frais à la charge du membre.
            </p>
          </Col>
          <Col>
            <center>
              <img
                src={salon}
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
