import {
    Row,
    Col,
  } from "react-bootstrap";
  

  
  import data_p from '../data/projecto.json'
  import Proyecto from "../components/Proyecto";
  import '../css/estilo.css';

  export function Proyectos() {  

    const projectos = data_p.map((p)=>{
      return(
        <Proyecto 
        key={p.nombre}
        nombre={p.nombre}
        link={p.link}
        description={p.description}
        imagen={p.imagen}
        />
      )
    })

    return (
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          {projectos}
        </Col>
        <Col xs={1}></Col>
      </Row>
    );
  }