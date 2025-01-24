
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApple() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="mg">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
        >
          <span className="navbar-toggler-icon toggler-red"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src="/music.svg"
            width="70"
            height="70"
            className="d-inline-block align-top img-white"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>


        <Navbar.Brand className="ms-auto text-danger" href="#home">
          Accedi
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarApple;