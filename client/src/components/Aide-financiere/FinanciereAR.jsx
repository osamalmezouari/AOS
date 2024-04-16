import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import FileUploadForm from "../Fileupload/Fileuploader";
import "./Financiere.css";

export const FinanciereAR = () => {
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
                minHeight: "18rem",
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
                  طلب
                </button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} animation={false} size={"xl"}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent.text
            .split("\n")
            .map((line, index) => (
              <h4 key={index} style={{ direction: "rtl" }}>
                {line}
              </h4>
            ))}
          {getTextPiece(getIndexFromTitle(modalContent.title))
            .split("\n")
            .map((line, index) => (
              <h4 key={index} style={{ direction: "rtl" }}>
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
      return "منحة الزواج";
    case 1:
      return "منحة الازدياد في ولادة عادية";
    case 2:
      return "منحة الدخول المدرسي";
    case 3:
      return "خدمة دعم الدروس اللغوية";
    case 4:
      return "منحة الاستحقاق الدراسي";
    case 5:
      return "خدمة المطاعم بالوزارة وملحقاتها";
    case 6:
      return "خدمة القروض الاجتماعية";
    case 7:
      return "منحة الحج";
    case 8:
      return "منحة التقاعد";
    case 9:
      return "المساعدات المالية في الحالات المرضية المستعصية";
    default:
      return "";
  }
};

const getText = (index) => {
  switch (index) {
    case 0:
      return "مبلغ المنحة : 1.000 درهم";
    case 1:
      return "مبلغ المنحة : 1.000 درهم للمولود و 3000 درهم عند ولادة توأم تتكلف بهذه المنحة شركة التأمين في إطار اتفاقية التأمين الصحي التكميلي)";
    case 2:
      return "تقدم جمعية الأعمال الاجتماعية للمنخرطين وفق الشروط والضوابط المنصوص عليها في الإعلان الخاص بمنحة الدخول المدرسي) منحة عن كل طفل متمدرس بإحدى مستويات التعليم الابتدائي أو الإعدادي أو الثانوي، وفي حدود ثلاثة أطفال لكل منخرط مستفيد. تم تحديد مبلغ المنحة كالتالي:";
    case 3:
      return "مساعدة مالية قدرها: %50% من مصاريف الدعم في حدود 600 درهم لكل دورة.";
    case 4:
      return "تخصص الجمعية سنويا منحة استحقاق لدعم تميز التلاميذ المتفوقين من أبناء المنخرطين.";
    case 5:
      return "تتوفر الوزارة على أربعة مطاعم موزعة على الشكل التالي:";
    case 6:
      return "خدمة القروض الاجتماعية يتم إطلاق على الأقل عملية قروض اجتماعية كل سنة لفائدة منخرطي الجمعية مبلغ القرض: يتراوح بين 5.000 و20.000 درهم.";
    case 7:
      return "مبلغ المنحة: - 25.000 درهم للموظفين المرتبين في سلالم الأجور من 6 إلى 10 - 20.000 درهم للموظفين المرتبين في سلالم الأجور من 11 فما فوق - 18.000 درهم للمتقاعدين";
    case 8:
      return "يتم إعطاء منح رمزية للموظفين المحالين على التقاعد تقديرا لهم على تفانيهم في خدمة الوظيفة العمومية مبلغ المنحة : 5.000 درهم للموظف المتقاعد";
    case 9:
      return "يتم إعطاء منح رمزية للموظفين المحالين على التقاعد تقديرا لهم على تفانيهم في خدمة الوظيفة العمومية مبلغ المنحة : 5.000 درهم للموظف المتقاعد";
    default:
      return "";
  }
};

const getTextPiece = (index) => {
  switch (index) {
    case 0:
      return "نسخة من عقد الزواج (شيك ملفى / cheque) أو شهادة بنكية (Attestation de RIB)\nنسخة من بطاقة الانخراط السنوي في الجمعية";
    case 1:
      return "عقد ازدياد المولود\nشهادة حياة المولود\nنسخة من بطاقة الانخراط السنوي في الجمعية\nوفي حالة وفاة المولود لا قدر الله: شهادة الوفاة قبل التسجيل في دفتر الحالة المدنية";
    case 2:
      return "نسخة من البطاقة الوطنية للتعريف (CIN)\nنسخة من بطاقة الانخراط في الجمعية\nوثائق ثبوت النسب: عقد الازدياد أو صورة من الحالة المدنية\nشهادة مدرسية (وثيقة أصلية)\nشيك ملغى cheque أو شهادة بنكية (Attestation de IB)";
    case 3:
      return "شهادة مدرسية\nعقد الازدياد\nفاتورة المركز اللغوي\nشيك ملفى (cheque (bar\nشهادة بنكية (Attestation de RIB)\nنسخة من بطاقة الانخراط السنوي في الجمعية";
    case 4:
      return ""; 
    case 5:
      return ""; 
    case 6:
      return "طلب خطي\nالتزام بتسديد القرض (وثيقة أصلية مصادق عليها)\nالتزام بالسماح بالاقتطاع الشهري من منبع الأجرة وثيقتان أصليتان مصادق عليهما)\nشيك ملغى (cheque (bar\nشهادة بنكية (Attestation de IB)\nنسخة من البطاقة الوطنية";
    case 7:
      return "الوثيقة التي تقدمها السلطات المحلية حول نتيجة عملية القرعة\nالوثائق التي تثبت أداء الواجبات المالية المطلوبة لدى المصالح المختصة\nالتزام مصادق عليه باسترداد المنحة في حالة تعذر السفر إلى الحج\nشيك ملغى (cheque (bar\nشهادة بنكية Attestation de RIB)\nنسخة من بطاقة الانخراط السنوي في الجمعية\nنسخة من البطاقة الوطنية";
    case 8:
      return "قرار الإحالة على التقاعد\nشيك ملغى cheque barre\nشهادة بنكية Attestation de RIB)\nنسخة من بطاقة الانخراط السنوي في الجمعية";
    case 9:
      return "قرار الإحالة على التقاعد\nشيك ملغى cheque barre\nشهادة بنكية Attestation de RIB)\nنسخة من بطاقة الانخراط السنوي في الجمعية";
    default:
      return "";
  }
};

const getIndexFromTitle = (title) => {
  switch (title) {
    case "منحة الزواج":
      return 0;
    case "منحة الازدياد في ولادة عادية":
      return 1;
    case "منحة الدخول المدرسي":
      return 2;
    case "خدمة دعم الدروس اللغوية":
      return 3;
    case "منحة الاستحقاق الدراسي":
      return 4;
    case "خدمة المطاعم بالوزارة وملحقاتها":
      return 5;
    case "خدمة القروض الاجتماعية":
      return 6;
    case "منحة الحج":
      return 7;
    case "منحة التقاعد":
      return 8;
    case "المساعدات المالية في الحالات المرضية المستعصية":
      return 9;
    default:
      return -1;
  }
};

