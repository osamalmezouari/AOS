import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import FileUploadForm from "../Fileupload/Fileuploader";
import "./Financiere.css";

export const FinanciereFR = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    const title = getTitle(index);
    const text = getText(index);
    setModalContent({ title, text });
    setShow(true);
  };

  return (
    <Container style={{ background: "#F5F5F5", padding: "20px" }}>
      <Row>
        {[...Array(10)].map((_, index) => (
          <Col key={index} className="mt-4">
            <Card
              border="secondary"
              style={{
                width: "25rem",
                paddingRight: "0",
                paddingLeft: "0",
                height: "auto",
                minHeight: "22rem",
              }}
            >
              <Card.Header style={{ backgroundColor: getHeaderColor(index) }}>
                <center>{getTitle(index)}</center>
              </Card.Header>
              <Card.Body>
                <center>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    {getText(index)
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} style={{ direction: "rtl" }}>
                          {line}
                        </p>
                      ))}
                  </Card.Text>
                </center>
              </Card.Body>
                <button className="custom-button" onClick={() => handleShow(index)}>
                  Demander
                </button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} animation={false} size={"xl"}>
  <Modal.Header closeButton>
    <Modal.Title>{modalContent.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body >
    {modalContent.text
      .split("\n")
      .map((line, index) => (
        <h4 key={index} style={{ direction: "ltr" }}>
          {line}
        </h4>
      ))}
      <br />
    {getTextPiece(getIndexFromTitle(modalContent.title))
      .split("\n")
      .map((line, index) => (
        <h4 key={index} style={{ direction: "ltr" }}>
          {line}
        </h4>
      ))}
    <FileUploadForm />
  </Modal.Body>
</Modal>

    </Container>
  );
};

const getHeaderColor = (index) => {
  switch (index) {
    case 0:
      return "#57F7BB";
    case 1:
      return "#FFF700";
    case 2:
      return "#FF8900";
    case 3:
      return "#5B77FF";
    case 4:
      return "red";
    case 5:
      return "#E532FF";
    case 6:
      return "#00FF22";
    case 7:
      return "#E6AC71";
    case 8:
      return "#F9FF95";
    case 9:
      return "#FF99CC";
    default:
      return "#5B77FF";
  }
};

const getTitle = (index) => {
  switch (index) {
    case 0:
      return "Allocation de mariage";
    case 1:
      return "Allocation de naissance ordinaire";
    case 2:
      return "Allocation de rentrée scolaire";
    case 3:
      return "Service de soutien aux cours de langue";
    case 4:
      return "Allocation de mérite scolaire";
    case 5:
      return "Service de restauration au ministère et ses annexes";
    case 6:
      return "Service de prêts sociaux";
    case 7:
      return "Allocation de pèlerinage";
    case 8:
      return "Allocation de retraite";
    case 9:
      return "Aides financières dans des cas de maladie grave";
    default:
      return "";
  }
};
const getText = (index) => {
  switch (index) {
    case 0:
      return "Montant de l'allocation : 1 000 dirhams";
    case 1:
      return "Montant de l'allocation : 1 000 dirhams pour la naissance d'un enfant et 3 000 dirhams pour la naissance de jumeaux, ces montants sont couverts par la compagnie d'assurance dans le cadre de l'assurance maladie complémentaire)";
    case 2:
      return "L'association des œuvres sociales des adhérents offre, selon les conditions et les critères prévus dans l'annonce spéciale de l'allocation de rentrée scolaire, une allocation pour chaque enfant scolarisé à l'un des niveaux de l'enseignement primaire, secondaire ou secondaire, dans la limite de trois enfants par adhérent bénéficiaire. Le montant de l'allocation a été fixé comme suit :";
    case 3:
      return "Aide financière de : %50% des frais de soutien dans la limite de 600 dirhams par session.";
    case 4:
      return "L'association alloue chaque année une allocation de mérite pour soutenir l'excellence des élèves brillants parmi les enfants des adhérents.";
    case 5:
      return "Le ministère dispose de quatre restaurants répartis comme suit :";
    case 6:
      return "Le service des prêts sociaux lance au moins une opération de prêts sociaux chaque année au profit des adhérents de l'association. Montant du prêt : entre 5 000 et 20 000 dirhams.";
    case 7:
      return "Montant de l'allocation : - 25 000 dirhams pour les employés classés dans les échelles de rémunération de 6 à 10 - 20 000 dirhams pour les employés classés dans les échelles de rémunération de 11 et plus - 18 000 dirhams pour les retraités";
    case 8:
      return "Des allocations symboliques sont accordées aux employés admis à la retraite en reconnaissance de leur dévouement au service de la fonction publique Montant de l'allocation : 5 000 dirhams pour l'employé retraité";
    case 9:
      return "Des allocations symboliques sont accordées aux employés admis à la retraite en reconnaissance de leur dévouement au service de la fonction publique Montant de l'allocation : 5 000 dirhams pour l'employé retraité";
    default:
      return "";
  }
};
const getTextPiece = (index) => {
  switch (index) {
    case 0:
      return "Copie du contrat de mariage (chèque barré) ou attestation bancaire (attestation de RIB) Copie de la carte d'adhésion annuelle à l'association";
    case 1:
      return "Contrat de naissance Attestation de vie de l'enfant Copie de la carte d'adhésion annuelle à l'association En cas de décès de l'enfant, que Dieu nous en préserve : certificat de décès avant l'inscription au registre de l'état civil";
    case 2:
      return "Copie de la carte d'identité nationale (CIN) Copie de la carte d'adhésion à l'association Documents prouvant la filiation : acte de naissance ou copie de l'état civil Certificat scolaire (document original) Chèque annulé ou attestation bancaire (attestation de RIB)";
    case 3:
      return "Certificat scolaire Contrat de naissance Facture du centre linguistique Chèque barré (chèque (bar) Attestation bancaire (attestation de RIB) Copie de la carte d'adhésion annuelle à l'association";
    case 4:
      return "";
    case 5:
      return "";
    case 6:
      return "Demande écrite Engagement à rembourser le prêt (document original certifié) Engagement à autoriser le prélèvement mensuel sur la source de rémunération (deux documents originaux certifiés) Chèque annulé (chèque (bar) Attestation bancaire (attestation de RIB) Copie de la carte nationale d'identité";
    case 7:
      return "Le document présenté par les autorités locales sur le résultat du tirage Les documents prouvant le paiement des obligations financières requises par les autorités compétentes Engagement certifié de remboursement de l'allocation en cas d'impossibilité de se rendre au pèlerinage Chèque barré (chèque (bar) Attestation bancaire Attestation de RIB) Copie de la carte d'adhésion annuelle à l'association Copie de la carte nationale d'identité";
    case 8:
      return "Décision de mise à la retraite Chèque annulé (chèque barre) Attestation bancaire (attestation de RIB) Copie de la carte d'adhésion annuelle à l'association";
    case 9:
      return "Décision de mise à la retraite Chèque annulé (chèque barre) Attestation bancaire (attestation de RIB) Copie de la carte d'adhésion annuelle à l'association";
    default:
      return "";
  }
};
const getIndexFromTitle = (title) => {
  switch (title) {
    case "Allocation de mariage":
      return 0;
    case "Allocation de naissance ordinaire":
      return 1;
    case "Allocation de rentrée scolaire":
      return 2;
    case "Service de soutien aux cours de langue":
      return 3;
    case "Allocation de mérite scolaire":
      return 4;
    case "Service de restauration au ministère et ses annexes":
      return 5;
    case "Service de prêts sociaux":
      return 6;
    case "Allocation de pèlerinage":
      return 7;
    case "Allocation de retraite":
      return 8;
    case "Aides financières dans des cas de maladie grave":
      return 9;
    default:
      return -1;
  }
};

