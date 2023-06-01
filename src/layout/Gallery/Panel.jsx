import { Col, Image } from "react-bootstrap";

export default function Panel ( { element: {title, image, content} } ) {

  return (
    <Col xs={11} sm={6} md={4} lg={3}>
      <Image src={image} fluid />
      <h3 className="my-3">{title}</h3>
      <p>{content}</p>
    </Col>
  )
}