import React from 'react'
import { Container, Row,Col } from "react-bootstrap";
import image from "../Assets/image.jpg"
import logo from "../Assets/logo.png"
export const Homepage = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <center>
                    <h1>
                        <img src={logo} alt="" style={{width: "100px", height: '100%',}}/>
                        <br/>
                        جمعية الأعمال الاجتماعية لوزارة الصناعة والتجارة والتكنولوجيات الحديثة

                    </h1>
                    <p>
                        جمعية الأعمال الاجتماعية لوزارة الصناعة والتجارة والتكنولوجيات الحديثة تهتم بتقديم الدعم والرعاية لموظفيها من خلال توفير المساعدات المالية في الحالات الطارئة، إلى جانب توفير الضمان الصحي والمساعدة الطبية لهم ولأسرهم. كما تنظم الجمعية العديد من الأنشطة الثقافية والاجتماعية التي تعزز التواصل والترابط بين أفراد المؤسسة، وتعمل على إقامة شراكات واتفاقيات لتوفير خدمات إضافية تحسن جودة حياتهم.
                    </p>
                </center>
                </Col>
                <Col>
                <center>
                <img src={image} alt="" style={{ width: 'auto',height: 'auto', }} />
                </center>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
