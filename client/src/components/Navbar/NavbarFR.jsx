import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const NavbareFR = () => {
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
              style={{ marginRight: "auto" }}
            />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="navbar-menu">
                <Nav className="me-auto">
                  <Nav.Link href="/Financiere" className="me-4">
                    Aides Financières
                  </Nav.Link>
                  <Nav.Link href="/Assistance" className="me-4">
                    Assurance et Assistance Médicale
                  </Nav.Link>
                  <Nav.Link href="/Activities" className="me-4">
                    Activités Culturelles
                  </Nav.Link>
                  <Nav.Link href="/Fun" className="me-4">
                    Activités de Loisirs
                  </Nav.Link>
                  <Nav.Link href="/Partnerships" className="me-4">
                    Accords et Partenariats
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>

            <Nav.Link href="/Login" className="me-4">
              <Button variant="success" style={{ width: "120px" }}>
                Se Connecter
              </Button>
            </Nav.Link>
          </Container>{" "}
        </Navbar>{" "}
      </div>
    </div>
  );
};
