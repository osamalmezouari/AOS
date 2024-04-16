import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import salon from "../../Assets/salon.jpg";
export const Option1AR = () => {
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
            الأنشطة الثقافية
          </h1>
        </div>
        {/* <img src={assis} alt="" style={{ width: "70%", height: "auto" }} /> */}
      </center>

      {/* //////////////// */}
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <h4 style={{ color: "orange", direction: "rtl" }}>
              {" "}
              <br />
              <strong> مراكز الاصطياف</strong>
            </h4>
            <p
              style={{
                border: "5px solid orange",
                
                
                direction: "rtl",
                padding: "20px",
              }}
            >
              <strong>
                شقق الجمعية:
                <br />
              </strong>
              تتوفر الجمعية على شقق للاصطياف موضوعة رهن إشارة المنخرطين بأثمنة
              جد مناسبة طيلة أيام السنة وموزعة على الشكل التالي: - 10 شقق بمركز
              Hacienda" بسيدي بوزيد - الجديدة (100) درهم لليوم) - 3 شقق بمركز
              "Oumaya" بمارتيل 120 درهم لليوم - 1 شقة بمركز "إتصالات المغرب"
              بسهب الذهب - الرباط 150 درهم لليوم - 6 شقق بمركز Caricia" بمراكش
              150 درهم لليوم للصنف 1 و200 درهم للصنف 2 لليوم)
              <br />
              <strong>
                شقق الكراء:
                <br />
              </strong>
              يتم سنويا أثناء الفترة الصيفية إبرام اتفاقيات مع مراكز الاصطياف
              الخاصة ووكالات سياحية من أجل الاستجابة لطلبات الاصطياف لمنخرطي
              الجمعية الدعم المخصص لشقق الكراء: تتراوح نسبة مساهمة الجمعية في
              ثمن كراء الشقق للمنخرطين بين 45% و 65% على أساس ان يتحمل المنخرط
              باقي المصاريف
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