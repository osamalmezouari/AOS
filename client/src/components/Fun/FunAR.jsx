import React from "react";
import Fun from "../../Assets/Fun.avif";
import { Container, Row, Col } from "react-bootstrap";

export const FunAR = () => {
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
            الانشطة الترفيهية{" "}
          </h1>
        </div>
        {/* <img src={assis} alt="" style={{ width: "70%", height: "auto" }} /> */}
      </center>

      {/* //////////////// */}
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <Col>
              <h4 style={{ color: "orange", direction: "rtl" }}>
                {" "}
                <br />
                <strong>خدمة تذاكر الحديقة الوطنية للحيوانات بالرباط </strong>
              </h4>
              <p
                style={{
                  border: "5px solid orange",
                  direction: "rtl",
                  padding: "20px",
                }}
              >
                تحصل الجمعية في إطار اتفاقية الشراكة مع شركة الحديقة الوطنية
                للحيوانات على تذاكر بأثمنة تفضيلية ليتم بعد ذلك دعم كل تذكرة من
                طرف الجمعية بمبلغ 10 دراهم ثمن التذاكر: 20 درهم للكبار و10 دراهم
                للأطفال.{" "}
              </p>
            </Col>
            <Col>
              <h4 style={{ color: "orange", direction: "rtl" }}>
                {" "}
                <br />
                <strong>
                  {" "}
                  الرحلات والخرجات والمخيمات الصيفية والأنشطة الرياضية{" "}
                </strong>
              </h4>
              <p
                style={{
                  border: "5px solid orange",
                  direction: "rtl",
                  padding: "20px",
                }}
              >
                تحصل الجمعية في إطار اتفاقية الشراكة مع شركة الحديقة الوطنية
                للحيوانات على تذاكر بأثمنة تفضيلية ليتم بعد ذلك دعم كل تذكرة من
                طرف الجمعية بمبلغ 10 دراهم ثمن التذاكر: 20 درهم للكبار و10 دراهم
                للأطفال.{" "}
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
