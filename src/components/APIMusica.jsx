import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function APIMusica() {
  return (
    <Container className="mt-2 mb-2 Sfondocard">
        <h3 className="mt-5">Nuove uscite</h3>
    <Row xs={3} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default APIMusica;