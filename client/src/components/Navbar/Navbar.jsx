import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const Navbare = () => {
  return (
    <div style={{ background: "grey" }}>
      {" "}
      {/* Apply inline style */}
      {/* hi  */}
      <div className="navbarr ">
        <Navbar expand="lg" bg="light" style={{ direction: "rtl" }}>
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
                    height: "30px",
                    width: "30px",
                    backgroundPosition: "center",
                  }}
                />
        <div className="ml-auto">
          <Button variant="success" style={{ width: "120px" }}>تسجيل الدخول</Button>
        </div>
              </Navbar.Brand>
            </div>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ marginRight: "auto" }}
            />

            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="navbar-menu">
                <Nav className="me-auto" >
                  <Nav.Link href="#Services" className="me-4">
                    {" "}
                    المساعدات المالية
                  </Nav.Link>
                  <Nav.Link href="#Works" className="me-4">
                    {" "}
                    الضمان والمساعدة الطبية
                  </Nav.Link>
                  <Nav.Link href="#Resume" className="me-4">
                    {" "}
                    الانشطة الثقافية
                  </Nav.Link>
                  <Nav.Link href="#Skills" className="me-4">
                    {" "}
                    الإتفاقيات والشراكات{" "}
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>{" "}
        </Navbar>{" "}
      </div>
    </div>
  );
};
