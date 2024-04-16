import React from "react";
import { FormAffectation } from "../components/Admin_F/FormAffectation";
import { FormPersonne } from "../components/Admin_F/FormPersonne";
import Table from "../components/Table/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Col, Row } from "react-bootstrap";

export const Dashboard = () => {
  const [PersShow, setPersShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Container style={{margin:"50px",padding:"0"}}>
        <Row>
          <Col>
          <center>
          <Button onClick={() => setLgShow(true)} style={{width:"250px"}}  variant="success">Affectation</Button>
         </center>
          </Col>
          <Col>
<center>
          <Button onClick={() => setPersShow(true)} style={{width:"250px"}}  variant="success">Personnel</Button>
</center>          
          </Col>
          
          
        </Row>
      </Container>
      <Table />

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
    </div>
  );
};
