
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const Navbare = () => {
  return (
    <div style={{ background: "grey" }}>
      {" "}

      <div className="navbarr ">
        <Navbar expand="md" bg="light" style={{ direction: "rtl" }}>
          <Container>
            <div className="nav-logo ">
              <Navbar.Brand
                href="#home"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={logo}
                  alt=""
                  style={{
                    backgroundSize: "cover",
                    height: "50px",
                    width: "50px",
                    backgroundPosition: "center",
                  }}
                />
        <div className="ml-auto">
        </div>
              </Navbar.Brand>
            </div>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="navbar-menu">
                <Nav className="me-auto" >
                  <Nav.Link href="#" className="me-4">
                    {" "}
                    المساعدات المالية
                  </Nav.Link>
                  <Nav.Link href="#" className="me-4">
                    {" "}
                    الضمان والمساعدة الطبية
                  </Nav.Link>
                  <Nav.Link href="#" className="me-4">
                    {" "}
                    الانشطة الثقافية
                  </Nav.Link>
                  <Nav.Link href="#" className="me-4">
                    {" "}
                    الإتفاقيات والشراكات{" "}
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
            <Button
                variant="success"
                style={{ width: "120px", marginRight: "auto" }}
                className="me-2"
              >
                تسجيل الدخول
              </Button>
          </Container>{" "}
        </Navbar>{" "}
      </div>
    </div>
  );
};
