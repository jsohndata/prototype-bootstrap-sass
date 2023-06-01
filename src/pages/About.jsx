import { Container, Row, Col } from "../utils/Bootstrap.jsx";

import Layout from "../layout/AppLayout.jsx";

export default function About() {
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col className="text-center">
            <h2>About</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={7}>
          <p>Welcome to our diverse art gallery, where imagination knows no bounds. Step into a realm where colors dance and emotions take form. From "Whispers of Serenity" with its captivating dance of colors to "Infinite Reflections," a journey through mirrors that challenges perceptions, our collection offers a visual feast for the senses.</p>

          <p>Delve into the depths of human experience with "Sculpted Emotions" and "Glimpses of Solitude," where bronze sculptures freeze moments of joy, sorrow, and contemplation. Embrace the harmony amidst chaos in "Harmony in Chaos," and explore the ephemeral nature of time in "Ephemeral Fragments." "Unveiling the Unseen" invites you to discover hidden realms illuminated by shadows and light, while "Threads of Identity" celebrates the richness of diverse cultures woven into a vibrant tapestry.</p>

          <p>Immerse yourself in the symphony of nature's beauty in "Rhythm of Nature," and witness the transformative power of cultural fusion in "Transcending Boundaries." Our art gallery promises an extraordinary experience where art intertwines with imagination, taking you on a visual journey that transcends boundaries and inspires contemplation. Discover the stories within each artwork, and allow yourself to be captivated by the depth and beauty that awaits.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )  
}