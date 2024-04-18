import React from "react";
import { FormAffectation } from "../components/Admin_F/FormAffectation";
import { FormPersonne } from "../components/Admin_F/FormPersonne";
import Table from "../components/Table/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import TableAffectation from "../components/Table/Tableaffecation";
import { FormActivities } from "../components/Admin_F/FormActivities";
import { FormSsActivities } from "../components/Admin_F/FormSsActivities";
import TableSsActivity from "../components/Table/TableSsActivity";
import TableActivity from "../components/Table/TableActivity";
export const Dashboard = () => {
  const [PersShow, setPersShow] = useState(false);
  const [ActShow, setActShow] = useState(false);
  const [SsActShow, setSsActShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div style={{ margin: "30px" }}>
      <center>
        {" "}
        <h1> Click sur le Bouton pour ajouter ce que vous voulez</h1>
      </center>
      <Container style={{ marginTop: "80px", marginBottom: "80px" }}>
        <Row>
          <Col>
            <center>
              <Button
                onClick={() => setLgShow(true)}
                style={{ width: "250px", margin: "3px" }}
                variant="success"
              >
                Affectation
              </Button>
            </center>
          </Col>
          <Col>
            <center>
              <Button
                onClick={() => setPersShow(true)}
                style={{ width: "250px", margin: "3px" }}
                variant="success"
              >
                Personnel
              </Button>
            </center>
          </Col>
          <Col>
            <center>
              <Button
                onClick={() => setActShow(true)}
                style={{ width: "250px", margin: "3px" }}
                variant="success"
              >
                Activity
              </Button>
            </center>
          </Col>
          <Col>
            <center>
              <Button
                onClick={() => setSsActShow(true)}
                style={{ width: "250px", margin: "3px" }}
                variant="success"
              >
                Sous-Activity
              </Button>
            </center>
          </Col>
        </Row>
      </Container>
      <center>
        {" "}
        <h1>visualisation du parametrage</h1>
      </center>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header > <h5 style={{color:"#EC0000",fontWeight:"1000"}}>Personnel</h5> </Accordion.Header>
          <Accordion.Body>
            <Table />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h5 style={{color:"#EC0000",fontWeight:"1000"}}>Affectation</h5></Accordion.Header>
          <Accordion.Body>
            <TableAffectation />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        {" "}
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h5 style={{color:"#EC0000",fontWeight:"1000"}}>ACTIVITIES</h5></Accordion.Header>
          <Accordion.Body>
            <TableActivity />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><h5 style={{color:"#EC0000",fontWeight:"1000"}}>SOUS-ACTIVITIES</h5></Accordion.Header>
          <Accordion.Body>
            <TableSsActivity />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Modal
        size="lg"
        show={PersShow}
        onHide={() => setPersShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FormPersonne />
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FormAffectation />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={ActShow}
        onHide={() => setActShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FormActivities />
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={SsActShow}
        onHide={() => setSsActShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FormSsActivities />
        </Modal.Body>
      </Modal>
    </div>
  );
};
