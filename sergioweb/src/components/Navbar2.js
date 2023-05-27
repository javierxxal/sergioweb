import {
    Navbar,
    Container,
    Nav
  } from "react-bootstrap";
  

  import '../css/estilo.css';

 

  export function NavBar2() {  

  
    return (
        <Navbar className="my-4 recuadro">
        <Container>
          <Nav className="justify-content-evenly flex-grow-1 ">
            <Nav.Link className="navItem" href="/">HOME</Nav.Link>
            <Nav.Link className="navItem" href="/info">INFO</Nav.Link>
            {/* <Nav.Link className="navItem" href="/audio">AUDIO</Nav.Link> */}
            <Nav.Link className="navItem" href="/videojuegos">VIDEOJUEGOS</Nav.Link>
            <Nav.Link className="navItem" href="/videos">VIDEOS</Nav.Link>
            <Nav.Link className="navItem" href="/proyectos">PROYECTOS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  