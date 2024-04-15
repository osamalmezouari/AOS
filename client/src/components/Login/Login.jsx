import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button, Container, Row, Col } from "react-bootstrap/";
import login from "../../Assets/login.avif";

export const Login = () => {

  return (
    
    <center>
      <div style={{ width: "70%", backgroundColor: "#F2F2F2" }}>
        <Container>
          <Row>
            <Col style={{ alignItems: "center", padding: "20px" }}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                style={{ width: "70%", margin: "20px" }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <br />

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                style={{ width: "70%" }}
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button style={{ width: "70%", margin: "20px" }}>Submit</Button>
            </Col>
            <Col>
              <img
                src={login}
                alt=""
                style={{ height: "400px", width: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </center>
  );
};
