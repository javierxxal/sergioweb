import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";


import data_h from '../data/herramientas.json'
import Herramienta from '../components/Herramienta'

export function Info() {
  let linea = 7

  const herramientas = data_h.map((h) => {
    if (linea > 0) {
      linea--;
      return (
        <Herramienta
          key={h.nombre}
          nombre={h.nombre}
          imagen={h.imagen}
        />
      )
    } else {
      linea = 7
      return (
        <>
          <Row></Row>
          <Herramienta
            key={h.nombre}
            nombre={h.nombre}
            imagen={h.imagen}
          />
        </>
      )
    }


  })

  return (
    <Row>
      <Col xs={1}></Col>
      <Col xs={10}>
        <br />
        <br />
        <h2 class="">Experiencia </h2>
        <br />

        <div class="">
          <Row>
            <h4>Picking en superficies comerciales</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">El corte inglés. Enero-Noviembre 2021</li>
                <li type="circle">Preparación de pedidos</li>
                <li type="circle">Mozo de almacen</li>
                <li type="circle">Atención al público.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h4>Prácticas de edición de vídeo</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Tilde Comunicación. Julio-Octubre 2021</li>
                <li type="circle">Edición de vídeo y audio.</li>
                <li type="circle">Creación de contenido</li>
                <li type="circle">Prácticas remuneradas.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h4>Organización TFG Jam</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Gestión del evento.</li>
                <li type="circle">Búsqueda de ponentes</li>
                <li type="circle">Comunicación del evento</li>
              </ul>
            </Col>
          </Row><Row>
            <h4>Escape Room “Open Day”</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Encargo de la Universidad de Alcalá para montar una Escape room para el “Open day”</li>
                <li type="circle">Diseño, creación y dirección del Escape room y el evento.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h4>Producción del videojuego “Vagalume”</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">That Funny Feeling Studio</li>
                <li type="circle">Proyecto salido de una incubadora de Videojuegos</li>
                <li type="circle">Metodologías ágiles, planificación, gantt, gestión del equipo…</li>
              </ul>
            </Col>
          </Row>
        </div>

        <br />

        <h2 class="">Herramientas que uso</h2>
        <div class="">
          <Row>{herramientas}</Row>
        </div>
      </Col>
      <Col xs={1}></Col>

    </Row>

  );
}
