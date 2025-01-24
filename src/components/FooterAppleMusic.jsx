import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterAppleMusic() {
  return (
    <footer className="footer-apple-music" >
      <Container className='footermargin'>
        <Row className="text-center">
          <Col className="text-start">
            <p>Italia | English (UK)</p>
            <p>
              &copy; 2024 <strong>Apple Inc.</strong> tutti i diritti riservati.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#" className="footer-link">
              Condizioni dei servizi internet
            </a>
            <a href="#" className="footer-link">
              Apple Music e privacy
            </a>
            <a href="#" className="footer-link">
              Avviso sul cookie
            </a>
            <a href="#" className="footer-link">
              Supporto
            </a>
            <a href="#" className="footer-link">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterAppleMusic;