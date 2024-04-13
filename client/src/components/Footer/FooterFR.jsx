import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const FooterFR = () => {
  return (
    <div
      style={{
        background: "#001426",
        padding: "60px",
        color: "white",
        marginTop: "60px",
      }}
    >
      <Container>
        <center>
          <Row>
            <Col>
              <p>
                Quartier administratif, Rabat, Maroc. Tél : 
                <br />
                +212 (0)537 76 5227{" "}
                <br /><br />
                2024© droit d'auteur | Royaume du Maroc Ministère de l'Industrie
                et du Commerce - Tous droits réservés
              </p>
            </Col>
            <Col>
              <p>
                L'Association des Œuvres Sociales du Ministère de l'Industrie,
                du Commerce et des Technologies Modernes s'engage à fournir un
                soutien et une assistance à ses employés en fournissant une aide
                financière en cas d'urgence, ainsi qu'une assurance santé et une
                assistance médicale pour eux et leurs familles. L'association
                organise également de nombreuses activités culturelles et
                sociales qui renforcent la communication et la solidarité au
                sein de l'entreprise, et travaille à établir des partenariats et
                des accords pour fournir des services supplémentaires qui
                améliorent leur qualité de vie.
              </p>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
};
