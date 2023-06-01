import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../layout/Gallery";
import Layout from "../layout/AppLayout.jsx";

export default function Home() {

  return(
    <Layout>
      <Container id="home">
        <Row>
          <Col className="text-center">
            <h2>Home</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={7}>
          <p>Step into our extraordinary art gallery, where imagination knows no bounds and captivating masterpieces come to life. Explore a diverse collection spanning from serene whispers of color to boundary-transcending expressions. Each artwork tells a unique story, captivating viewers with vibrant hues, intricate details, and thought-provoking concepts. Embark on a reflective journey through mirrors, embrace the harmonious fusion of cultures, and celebrate the beauty of our world. Our gallery promises an immersive experience that ignites imagination and leaves you inspired.</p>
          </Col>
        </Row>
      </Container>

      <Gallery />
    </Layout>
  )
}