import Container from 'react-bootstrap/Container';  
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function AltroDaEsplorare() {
  return (
    <Container className="mt-2 mb-2">
      <h2>Altro da esplorare</h2>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Esplora per genere</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Decenni</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Attività e stati d animo</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Worldwide</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Classifiche</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Audio spaziale</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Video musicali</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Nuovi artisti</span>
        <i className="bi bi-caret-right"></i>
      </Button>
      <Button className="d-flex justify-content-between m-2 align-items-center w-100 btn-custom-bg border-0">
        <span>Hit del passato</span>
        <i className="bi bi-caret-right"></i>
      </Button>
    </Container>
  );
}

export default AltroDaEsplorare;
