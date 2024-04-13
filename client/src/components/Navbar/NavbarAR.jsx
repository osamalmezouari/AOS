import { Navbar, Nav, Container, Button } from "react-bootstrap";
export const NavbareAR = () => {
  return (
    <div style={{ background: "grey" }}>
      {" "}
      <div className="navbarr ">
        <Navbar expand="lg" bg="light" style={{ direction: "rtl" }}>
          <Container className={"gap-2"}>
            <div className="nav-logo ">
              <Navbar.Brand
                href="/"
                style={{ display: "flex", alignItems: "center" }}
              >
                الرئيسية
              </Navbar.Brand>
            </div>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ marginRight: "auto" }}
            />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="navbar-menu">
                <Nav className="me-auto">
                  <Nav.Link href="/Financiere" className="me-4">
                    {" "}
                    المساعدات المالية
                  </Nav.Link>
                  <Nav.Link href="/Assistance" className="me-4">
                    {" "}
                    الضمان والمساعدة الطبية
                  </Nav.Link>
                  <Nav.Link href="/Activities" className="me-4">
                    {" "}
                    الانشطة الثقافية
                  </Nav.Link>
                  <Nav.Link href="/Fun" className="me-4">
                    {" "}
                    الانشطة الترفيهية
                  </Nav.Link>
                  <Nav.Link href="/Partnerships" className="me-4">
                    {" "}
                    الإتفاقيات والشراكات{" "}
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>

            <Nav.Link href="/Login" className="me-4">
              {" "}
              <Button variant="success" style={{ width: "120px" }}>
                تسجيل الدخول
              </Button>
            </Nav.Link>

            {/* </Link> */}
          </Container>{" "}
        </Navbar>{" "}
      </div>
    </div>
  );
};
