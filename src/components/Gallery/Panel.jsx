import { useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";


export default function Panel ( { element: {title, image, content} } ) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  
  return (
    <Col xs={11} sm={6} md={4} lg={3}
      className="gallery-panel">
      <div onClick={toggleShow}>
        <Image src={image} fluid />
        <h3 className="my-3">{title}</h3>
      </div>

      <Modal size="lg" show={show} onHide={toggleShow}>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <Image src={image} fluid  closeButton />
              </Col>

              <Col sm={12} md={6}>
                <h3 className="my-3">{title}</h3>
                <p>{content}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  )
}