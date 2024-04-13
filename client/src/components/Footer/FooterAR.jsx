import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const FooterAR = () => {
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
              <p style={{ direction: "rtl" }}>
                الحي الإداري، الرباط، المغرب الهاتف:
                <p style={{ direction: "ltr" }}> +212 (0)537 76 5227</p>
                حقوق النشر © 2024 | المملكة المغربية وزارة الصناعة والتجارة -
                جميع الحقوق محفوظة
              </p>
            </Col>
            <Col>
              <p>
                تهتم جمعية الأعمال الاجتماعية لوزارة الصناعة والتجارة
                والتكنولوجيا الحديثة بتقديم الدعم والرعاية لموظفيها من خلال
                توفير المساعدات المالية في الحالات الطارئة، بالإضافة إلى توفير
                الضمان الصحي والمساعدة الطبية لهم ولأسرهم. كما تنظم الجمعية
                العديد من الأنشطة الثقافية والاجتماعية التي تعزز التواصل
                والترابط بين أفراد المؤسسة، وتعمل على إقامة شراكات واتفاقيات
                لتوفير خدمات إضافية تحسن جودة حياتهم.
              </p>
            </Col>
          </Row>
        </center>
      </Container>
    </div>
  );
};
