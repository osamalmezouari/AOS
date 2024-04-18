import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

export const NavbarFR = () => {
  return (
    <div style={{ background: "grey" }}>
      <div className="navbarr ">
        <Navbar expand="lg" bg="light" style={{ direction: "ltr" }}>
          <Container className={"gap-2"}>
            <div className="nav-logo ">
              <Navbar.Brand
                href="/"
                style={{ display: "flex", alignItems: "center" }}
              >
                Accueil
              </Navbar.Brand>
            </div>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ marginLeft: "auto" }}
            />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="navbar-menu">
                <Nav className="me-auto">
                  <Nav.Link href="/Financiere" className="me-4">
                    Aides financières
                  </Nav.Link>

                  <Nav.Link href="/Assistance" className="me-4">
                    Sécurité sociale et assistance médicale
                  </Nav.Link>
                  <NavDropdown
                    title="Activités culturelles"
                    id="basic-nav-dropdown"
                    className="me-4"
                  >
                    <NavDropdown.Item href="/Option1">
                      Centres de loisirs
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Option2">
                      Centres de soutien linguistique
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Fun" className="me-4">
                    Activités de loisirs
                  </Nav.Link>
                  <Nav.Link href="/Partnerships" className="me-4">
                    Accords et partenariats
                  </Nav.Link>
                  {/* 
                  <Nav.Link href="/dashboard" style={{ fontSize: "10px" }}>
                    Dashboard
                  </Nav.Link> */}
                </Nav>
              </div>
            </Navbar.Collapse>

            <Nav.Link href="/Login" className="me-4">
              <Button variant="success" style={{ width: "120px" }}>
                Connexion
              </Button>
            </Nav.Link>

            {/* </Link> */}
          </Container>{" "}
        </Navbar>{" "}
      </div>
    </div>
  );
};
