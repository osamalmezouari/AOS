import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ministre from "../Assets/ministre.png";
import logo from "../../../frontend/public/assets/images/logo.png";
import { Slider } from "../components/HomepageSlider/Slider";

export const HomepageAR = () => {
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
                جمعية الأعمال الاجتماعية لوزارة الصناعة والتجارة والتكنولوجيات
                الحديثة
              </h5>
              {/* <p>
                جمعية الأعمال الاجتماعية لوزارة الصناعة والتجارة والتكنولوجيات
                الحديثة تهتم بتقديم الدعم والرعاية لموظفيها من خلال توفير
                المساعدات المالية في الحالات الطارئة، إلى جانب توفير الضمان
                الصحي والمساعدة الطبية لهم ولأسرهم. كما تنظم الجمعية العديد من
                الأنشطة الثقافية والاجتماعية التي تعزز التواصل والترابط بين
                أفراد المؤسسة، وتعمل على إقامة شراكات واتفاقيات لتوفير خدمات
                إضافية تحسن جودة حياتهم.
              </p> */}
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
