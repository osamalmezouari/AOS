import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ministre from "../Assets/ministre.png";
import logo from "../Assets/logo.png";
import { Slider } from "../components/HomepageSlider/Slider";

export const HomepageFR = () => {
  return (
    <div>
      <Slider />

      <Container>
        <Row style={{ marginTop: "" }}>
          <Col>
            <center>
              <img
                src={ministre}
                alt=""
                style={{ width: "auto", height: "75px" }}
              />
            </center>
          </Col>
          <Col>
            <center>
              <h5>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "70px", height: "100%" }}
                />
                <br />
                Association des Œuvres Sociales du Ministère de l'Industrie, du
                Commerce et des Technologies Modernes
              </h5>
              {/* <p>
                Association des Œuvres Sociales du Ministère de l'Industrie, du Commerce et des Technologies Modernes s'engage à fournir un soutien et une assistance à ses employés en fournissant une aide financière en cas d'urgence, ainsi qu'une assurance santé et une assistance médicale pour eux et leurs familles. L'association organise également de nombreuses activités culturelles et sociales qui renforcent la communication et la solidarité au sein de l'entreprise, et travaille à établir des partenariats et des accords pour fournir des services supplémentaires qui améliorent leur qualité de vie.
              </p> */}
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
