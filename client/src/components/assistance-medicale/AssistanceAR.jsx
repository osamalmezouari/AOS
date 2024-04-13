import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import medecine from "../../Assets/medecine.avif";
export const AssistanceAR = () => {
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
            الضمان والمساعدة الطبية
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
                <strong> التغطية الصحية التكميلية</strong>
              </h4>
              <p
                style={{
                  border: "5px solid orange",
                  direction: "rtl",
                  padding: "20px",
                }}
              >
                في إطار الاتفاقية المبرمة مع شركة التأمين "SAHAM" يتم أداء مبلغ
                542 درهم سنويا عن كل موظف مقابل خدمة التأمين التكميلي تمكن
                الاتفاقية الموظفين من استرجاع جزء من المصاريف المدفوعة في حالة
                الاستشفاء الجراحة، الأمراض المزمنة الطويلة الأمد والأمراض
                الثقيلة والمكلفة وفي بعض الحالات الخاصة المرجو الاطلاع على دليل
                التأمين التكميلي
              </p>
            </Col>
            <Col>
              <h4 style={{ color: "orange", direction: "rtl" }}>
                {" "}
                <br />
                <strong> الفحص الطبي والإرشاد والتوجيه </strong>
              </h4>
              <p
                style={{
                  border: "5px solid orange",
                  direction: "rtl",
                  padding: "20px",
                }}
              >
                يتوفر مقر الوزارة المركزي بالحي الإداري شالة، على عيادة طبية
                مجانية بطبيبين (الدكتور العلمي المتخصص في الأمراض الباطنية
                بمستشفى ابن سينا والدكتور العلوي المتخصص في الأمراض الجلدية).
                تتحمل الجمعية كافة مصاريف خدمة الفحص الطبي والإرشاد والتوجيه
                المقدمة من طرف الطبيبين المتعاقدين مع الجمعية لفائدة منخرطي
                الجمعية.
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
