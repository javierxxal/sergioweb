import {
  Row,
  Col,
} from "react-bootstrap";


import data_h from '../data/herramientas.json'
import Herramienta from '../components/Herramienta'
import '../css/estilo.css';

export function Info() {

  const herramientas = data_h.map((h) => {
      return (
        <Herramienta
          key={h.nombre}
          nombre={h.nombre}
          imagen={h.imagen}
        />
      )
  })

  return (
    <Row >
      <Col xs={1}></Col>
      <Col xs={10}>

        <Row className="pb-5">
          <Col>
          <h2 class="megatitulo_exp pt-5">Experiencia </h2>
          </Col>
          <Col></Col>
          <Col xs={3}>
          <a target="_blank" href={"https://www.linkedin.com/in/sergio-sanchis-cagigal-20818b245/" } rel="noreferrer">
            <img
              className="mt-2"
              style={{ width: 100, height: 100 }}
              src={'/Logos/linkedin.png'}
              alt={"linkeding"}/>
          </a>
          </Col>
        </Row>
        <Row className="texto_exp">
          <Col>
            <h4 className="titulo_exp text-center">Picking en superficies comerciales</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">El corte inglés. Enero-Noviembre 2021</li>
                <li type="circle">Preparación de pedidos</li>
                <li type="circle">Mozo de almacén</li>
                <li type="circle">Atención al público.</li>
              </ul>
            </Col>
          </Col>
          <Col>
            <h4 className="titulo_exp text-center">Prácticas de edición de vídeo</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Tilde Comunicación. Julio-Octubre 2021</li>
                <li type="circle">Edición de vídeo y audio.</li>
                <li type="circle">Creación de contenido</li>
                <li type="circle">Prácticas remuneradas.</li>
              </ul>
            </Col>
          </Col>
          <Col>
            <h4 className="titulo_exp text-center">Organización TFG Jam</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Gestión del evento.</li>
                <li type="circle">Búsqueda de ponentes</li>
                <li type="circle">Comunicación del evento</li>
              </ul>
            </Col>
          </Col>
          <Col>
            <h4 className="titulo_exp text-center">Escape Room “Open Day”</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">Encargo de la Universidad de Alcalá para montar una Escape room para el “Open day”</li>
                <li type="circle">Diseño, creación y dirección del Escape room y el evento.</li>
              </ul>
            </Col>
          </Col>
          <Col>
            <h4 className="titulo_exp text-center">Producción del videojuego “Vagalume”</h4>
            <Col xs={1}></Col>
            <Col>
              <ul>
                <li type="circle">That Funny Feeling Studio</li>
                <li type="circle">Proyecto salido de una incubadora de Videojuegos</li>
                <li type="circle">Metodologías ágiles, planificación, gantt, gestión del equipo…</li>
              </ul>
            </Col>
          </Col>
        </Row>


        <h2 class="pb-4 megatitulo_exp">Herramientas que uso</h2>
        <div class="">
          <Row>{herramientas}</Row>
        </div>
      </Col>
      <Col xs={1}></Col>
    </Row>
    
  );
}
