import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const FinanciereAR = () => {
  return (
    <Container style={{ background: "#F5F5F5", padding: "20px" }}>
      <Row>
        {[...Array(10)].map((_, index) => (
          <Col key={index} className="mt-4">
            <Card
              border="secondary"
              style={{
                width: "20rem",
                paddingRight: "0",
                paddingLeft: "0",
                height: "13em",
              }}
            >
              <Card.Header style={{ backgroundColor: getHeaderColor(index) }}>
                المساعدات المالية
              </Card.Header>
              <Card.Body>
                <center>
                  <Card.Title>{getTitle(index)}</Card.Title>
                  <Card.Text></Card.Text>
                </center>
              </Card.Body>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                طلب
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const getHeaderColor = (index) => {
  switch (index) {
    // case 0: return "#57F7BB";
    // case 1: return "#FFF700";
    // case 2: return "#FF8900";
    // case 3: return "#5B77FF";
    // case 4: return "red";
    // case 5: return "#E532FF";
    // case 6: return "#00FF22";
    // case 7: return "#E6AC71";
    // case 8: return "#F9FF95";
    // case 9: return "#FF99CC";
    default:
      return "#5B77FF";
  }
};

const getTitle = (index) => {
  switch (index) {
    case 0:
      return "منحة الزواج";
    case 1:
      return "منحة الازدياد في ولادة عادية";
    case 2:
      return "منحة الدخول المدرسي";
    case 3:
      return "خدمة دعم الدروس اللغوية";
    case 4:
      return "منحة الاستحقاق الدراسي";
    case 5:
      return "خدمة المطاعم بالوزارة وملحقاتها";
    case 6:
      return "خدمة القروض الاجتماعية";
    case 7:
      return "منحة الحج";
    case 8:
      return "منحة التقاعد";
    case 9:
      return "المساعدات المالية في الحالات المرضية المستعصية";
    default:
      return "";
  }
};
