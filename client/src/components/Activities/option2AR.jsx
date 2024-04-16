import React from "react";
// import assis from "../../Assets/assis.png";
import { Container, Row, Col } from "react-bootstrap";
import globe from "../../Assets/glob.jpg";
export const Option2AR = () => {
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
      

        <Row style={{ marginTop: "100px" }}>
          <Col>
            <h4 style={{ color: "orange", direction: "rtl" }}>
              {" "}
              <br />
              <strong> ممراكز الدعم في اللغات الأجنبية</strong>
            </h4>
            <p
              style={{
                border: "5px solid orange",
                direction: "rtl",
                padding: "20px",
              }}
            >
              بالإضافة إلى المساعدة المالية التي تقدمها الجمعية في إطار الدعم
              المدرسي في دروس اللغة تم التعاقد مع ثلاث مراكز بمدينة الرباط
              المركز اللغوي الإنجليزي The Language Workshop بالرباط من أجل
              الحصول على تخفيض نسبة 25% من الثمن المطبق للعموم ومجانية مصاريف
              التسجيل. المركز اللغوي الإسباني (Institutorantes بالرباط من أجل
              الحصول على تخفيض نسبة 15% من الثمن المطبق للعموم. المركز اللغوي
              الفرنسي Institut Français) بالرباط من أجل الحصول على تخفيض نسبة
              20% من الثمن المطبق للعموم ومجانية امتحان تحديد مستوى الطفل.
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
