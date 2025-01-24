import { Container } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContenutoApple() {
  return (
    <Container>
      <div>
        <h1 className="mt-5">NOVITÀ</h1>
        <hr />
      </div>

      <Row xs={2} md={2} className="g-4">
        <Col>
          <Card className="Sfondocards">
            <Card.Title>NOVITÀ STAZIONE RADIO</Card.Title>
            <Card.Text>
              Rilassati al resto ci pensiamo noi. Ascolta apple Music Chill
            </Card.Text>
            <Card.Img variant="top" src="/images/1a.png" />
          </Card>
        </Col>
        <Col>
          <Card className="Sfondocards">
            <Card.Title>NOVITÀ STAZIONE RADIO</Card.Title>
            <Card.Text>
              Ecco la nuova casa della musica latina
            </Card.Text>
            <Card.Img variant="top" src="/images/1b.png" />
          </Card>
        </Col>
      </Row>

      <h3 className="mt-5 Sfondocard">Nuovi episodi radio</h3>

      <Row xs={3} md={5} className="g-4">
        <Col>
          <Card className="Sfondocard">
            <Card.Img variant="top" src="/images/2a.png" />
            <Card.Title>Prologo con Abuelo</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card className="Sfondocard">
            <Card.Img variant="top" src="/images/2b.png" />
            <Card.Title>The wander</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card className="Sfondocard">
            <Card.Img variant="top" src="/images/2c.png" className="dimensionimmagini w-100" />
            <Card.Title>Michael Bublè & Carly Pearace</Card.Title>
          </Card>
        </Col>
        
        <Col className="d-none d-sm-block">
          <Card className="Sfondocard">
            <Card.Img variant="top" src="/images/2d.png" />
            <Card.Title>Stephan Moccio: The Zane Lowe Interview</Card.Title>
          </Card>
        </Col>
        <Col className="d-none d-sm-block">
          <Card className="Sfondocard">
            <Card.Img variant="top" src="/images/2e.png" className='epradio' />
            <Card.Title>Chart Spotlight: Julia Michaels</Card.Title>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContenutoApple;
