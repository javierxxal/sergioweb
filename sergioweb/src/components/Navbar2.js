import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    Row,
    Col,
  } from "react-bootstrap";
  

  
 

  export function NavBar2() {  

  
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/info">INFO</Nav.Link>
            {/* <Nav.Link href="/audio">AUDIO</Nav.Link> */}
            <Nav.Link href="/videos">VIDEOS</Nav.Link>
            <Nav.Link href="/videojuegos">VIDEOGAMES</Nav.Link>
            <Nav.Link href="/proyectos">OTROS PROYECTOS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  