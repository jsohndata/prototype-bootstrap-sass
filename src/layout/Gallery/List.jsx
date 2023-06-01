import { Container, Row } from "react-bootstrap";
import Panel from "./Panel.jsx";
import data from "../../data/gallery.json";

export default function List() {

  return (    
    <Container id="gallery">
      <Row className="d-flex justify-content-center g-4">
      {
        data.map( (element, index) => {
          return (
            <Panel 
              key={index}
              element={element} />
            );          
        }).reverse()
      }
      </Row>
    </Container>
  )
}